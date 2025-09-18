import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export async function login(email: string, password: string) {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  const token = res.data.token;
  localStorage.setItem("token", token);
  return token;
}

export async function signup(email: string, password: string) {
  const res = await axios.post(`${API_URL}/signup`, { email, password });
  const token = res.data.token;
  localStorage.setItem("token", token);
  return token;
}

export function logout() {
  localStorage.removeItem("token");
}
