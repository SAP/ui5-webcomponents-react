import axios from 'axios';

const Request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default Request;
