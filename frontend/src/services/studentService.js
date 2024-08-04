import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const addStudent = async (studentData, token) => {
  const response = await axios.post(API_URL, studentData, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const getStudents = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};
