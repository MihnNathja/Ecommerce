import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend đang chạy port 5000
  withCredentials: true,
});


export const login = (data) => API.post('/users/login', data);
export const register = (data) => API.post('/users/register', data);
export const getUserById = (id) => API.get(`/users/${id}`);
export const forgotPassword = (data) => API.post('/users/forgot-password', data);
export const resetPassword = (data) => API.post('/users/reset-password', data);
export const verifyOtp = (data) => API.post('/users/verify-otp', data);

export const getProducts = () => API.get('/products');
export const getProductById = (id) => API.get(`/products/${id}`);
export const createProduct = (data) => API.post('/products/', data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const addToCart = (data) => API.post('/cart', data);
export const getCart = () => API.get('/cart');
export const updateCart = (id, data) => API.put(`/cart/${id}`, data);
export const removeFromCart = (id) => API.delete(`/cart/${id}`);

export const getCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);
