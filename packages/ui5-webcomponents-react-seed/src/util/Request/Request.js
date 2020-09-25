import axios from 'axios';

const Request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_STATE + process.env.REACT_APP_BASE_URL_PATH,
});

export default Request;
