import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const login = async (username: string, password: string) => {
  const response = await axiosInstance.post(`/api/login/`, {
    username: username,
    password: password,
  });

  return response;
};

const authService = { login };

export default authService;
