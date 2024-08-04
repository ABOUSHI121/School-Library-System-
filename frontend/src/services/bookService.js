import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

export const addBook = async (bookData, token) => {
  const response = await axios.post(API_URL, bookData, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBooksByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/category/${category}`);
  return response.data;
};

export const searchBooksByTitle = async (title) => {
  const response = await axios.get(`${API_URL}/search/${title}`);
  return response.data;
};
