import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '',
  // baseURL: 'https://my-future-api...',
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default axiosClient;
