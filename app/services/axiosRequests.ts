import { setCookie, parseCookies } from "nookies";
import axiosClient from "./axiosClient";
import { jwtDecode } from "jwt-decode";

const { "case-token": token } = parseCookies();

export async function signIn({ email, password }: SignInProps) {
  try {
    const res = await axiosClient.post("/login", { email, password });
    if (res.status === 200) {
      const token = res.data.access_token;
      setCookie(undefined, "case-token", token, {
        maxAge: 60 * 60 * 1, //1 hour
      });
      return true;
    }
  } catch {
    return false;
  }
}

export async function signUp({ email, password }: SignInProps) {
  try {
    const res = await axiosClient.post("/users", { email, password });

    if (res.status === 201) {
      return true;
    }
  } catch {
    return false;
  }
}

export async function createCase(): Promise<CaseProps | undefined> {
  try {
    const user = jwtDecode(token);

    const res = await axiosClient.post("/cases", {
      name: "",
      bio: "",
      title: "",
      user: { connect: { id: user.sub } },
    });

    return res.data;
  } catch {
    return undefined;
  }
}

export async function getCase(): Promise<CaseProps | undefined> {
  try {
    const user = jwtDecode(token);

    const res = await axiosClient.get(`/cases/${user.sub}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch {
    return undefined;
  }
}

export async function updateCase({ name, bio, title }: CaseProps) {
  try {
    const user = jwtDecode(token);
    const res = await axiosClient.patch(`/cases/${user.sub}`, {
      name,
      bio,
      title,
    });
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function addPortfolio({
  caseId,
  title,
  description,
  image,
  link,
}: PortofolioProps): Promise<PortofolioProps | undefined> {
  try {
    const user = jwtDecode(token);
    const res = await axiosClient.post("/portfolios", {
      title,
      description,
      image,
      link,
      case: { connect: { id: caseId } },
    });

    return res.data;
  } catch (error) {
    return undefined;
  }
}

export async function getPortfolios(): Promise<PortofolioProps[] | undefined> {
  try {
    const user = jwtDecode(token);
    const res = await axiosClient.get(`/portfolios`, {
      data: { where: { caseId: user.sub } },
    });

    return res.data;
  } catch {}
}
