import { setCookie } from "nookies";
import axiosClient from "./axiosClient";

export async function signInRequest({ email, password }: SignInProps) {
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
