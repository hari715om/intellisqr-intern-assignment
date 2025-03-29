import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const registerUser = async (email: string, password: string) => {
  return API.post("/auth/register", { email, password });
};

export const loginUser = async (email: string, password: string) => {
  return API.post("/auth/login", { email, password });
};
