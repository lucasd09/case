import axios from "axios";
import { parseCookies } from "nookies";

const { "case-token": token } = parseCookies();

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
});

if (token) {
  axiosClient.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default axiosClient;
