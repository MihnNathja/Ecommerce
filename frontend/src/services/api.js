import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend đang chạy port 5000
});

export const getProducts = () => API.get('/products');
export const getProductById = (id) => API.get(`/products/${id}`);
export const createProduct = (data) => API.post('/products/', data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const getCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);
