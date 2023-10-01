import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default axiosClient;
