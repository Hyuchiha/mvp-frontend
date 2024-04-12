import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'http://localhost:3000/v1',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default HttpClient
