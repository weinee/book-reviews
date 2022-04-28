import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (formData) => API.post("/users/signIn", formData);
export const register = (formData) => API.post("/users/register", formData);
