import axios from 'axios';

export const BASE_URL = 'https://decouv.ca:8443/api';
export const SOCKET_URL = 'http://localhost:3005/ws/';
export const INTERVAL = 5000;

export const api = axios.create({
  baseURL: BASE_URL
});
