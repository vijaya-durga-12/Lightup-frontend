// src/api/productApi.js
import axiosInstance from './axiosInstance';

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/products/allproducts');
  return response.data;
};
