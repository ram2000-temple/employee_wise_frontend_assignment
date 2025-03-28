// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in',
});

export default api;
