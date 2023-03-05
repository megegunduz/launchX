import Axios from 'axios';
export { type AxiosResponse } from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v5/launches/';

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export default axiosInstance;
