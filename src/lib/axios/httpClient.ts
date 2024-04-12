import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default HttpClient
