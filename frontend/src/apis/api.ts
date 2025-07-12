import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Automatically add auth token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// =================== AUTH ===================

export const signup = (data: { name: string; email: string; password: string }) =>
  API.post('/auth/signup', data);

export const login = async (data: { email: string; password: string }) => {
  const res = await API.post('/auth/login', data);
  const token = res.data.token;
  if (token) {
    localStorage.setItem('token', token);
  }
  return res;
};


// =================== USER ===================

export const getUserProfile = () => API.get('/users/me');

// =================== ITEMS ===================

export const getAllItems = () => API.get('/items');

export const getMyItems = () => API.get('/items/my');

export const getItemById = (id: string) => API.get(`/items/${id}`);

export const createItem = (data: FormData) => API.post('/items', data);

// =================== SWAPS ===================

export const getMySwaps = () => API.get('/swaps');

export const requestSwap = (data: {
  responderId: string;
  requesterItemId: string;
  responderItemId: string;
}) => API.post('/swaps', data);

export const updateSwapStatus = (id: string, status: 'accepted' | 'rejected' | 'completed') =>
  API.put(`/swaps/${id}/status`, { status });

// =================== REDEEM ===================

export const redeemItem = (itemId: string) => API.post('/redeem', { itemId });

export const getMyRedemptions = () => API.get('/redeem');

// =================== ADMIN ===================

export const getPendingItems = () => API.get('/admin/items/pending');

export const approveItem = (id: string) => API.put(`/admin/items/${id}/approve`);

export const rejectItem = (id: string) => API.put(`/admin/items/${id}/reject`);
