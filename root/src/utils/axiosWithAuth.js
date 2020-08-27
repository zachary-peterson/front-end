import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://bwschoolinthecloud.herokuapp.com/',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};