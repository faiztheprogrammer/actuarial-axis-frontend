import axios from "axios";

// Use Railway backend when deployed, fallback to localhost for local dev
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://web-production-61339.up.railway.app/api";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
