import axios from 'axios';
import { API_PATH } from "@/constants/contants";

const HttpClient = axios.create({
  baseURL: API_PATH,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default HttpClient
