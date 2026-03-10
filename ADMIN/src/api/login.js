import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;

export const loginApi = async (data) => {

  console.log("BASE_URL:", BASE_URL); 

  const response = await axios.post(`${BASE_URL}/api/auth/login`, data);

  return response.data;
};