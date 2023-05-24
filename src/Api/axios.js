import axios from "axios";

const axios_api = axios.create({
  baseURL: process.env.REACT_APP_CRUD_API,
});


export { axios_api };