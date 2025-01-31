// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://069c-2401-4900-1c0e-3b07-fc1a-4d8c-c91a-a8ee.ngrok-free.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
