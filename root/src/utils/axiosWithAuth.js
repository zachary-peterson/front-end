import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: '/* NEED BASE URL */',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};