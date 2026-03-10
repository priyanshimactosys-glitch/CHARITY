import { loginApi } from "../api/login";

export const loginService = async (loginData) => {
  try {
    const res = await loginApi(loginData);
    return res;
  } catch (error) {
    console.error("Login API Error:", error);
    throw error;
  }
};