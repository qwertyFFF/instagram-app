import axios from "axios";

const api = axios.create({
  baseURL: "https://instagram-backend-api.herokuapp.com"
});

export default api;
