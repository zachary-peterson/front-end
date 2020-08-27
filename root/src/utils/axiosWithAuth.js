import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'http://bwschoolinthecloud.herokuapp.com/',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};