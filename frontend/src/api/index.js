import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (formData) => API.post("/user/signIn", formData);
export const register = (formData) => API.post("/user/register", formData);
