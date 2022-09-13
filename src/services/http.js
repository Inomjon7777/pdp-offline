import axios from "axios";
import { toast } from "react-toastify";

let registerEndpoint = "https://react-authing.herokuapp.com/users/register";
let loginEndpoint = " https://react-authing.herokuapp.com/users/login";

const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) config.headers = { ...config.headers, [TOKEN_KEY]: token };
  return config;
});

axios.interceptors.response.use(null, (err) => {
  const expectedError = err.response.status >= 400 && err.response.status < 500;

  let message = "Something server error";

  if (expectedError) message = err.response.data;

  toast.error(message);

  return Promise.reject(err);
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default methods;
