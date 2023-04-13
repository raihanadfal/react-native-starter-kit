import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const loginUser = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};
