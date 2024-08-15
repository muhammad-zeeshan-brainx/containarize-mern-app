import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

export const PUBLIC_APIS = axios.create({
  baseURL: BASE_URL,
});
