import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/users/profile`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};
