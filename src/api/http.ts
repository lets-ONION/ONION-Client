import axios from "axios";

const BASE_URL = "https://api.lets-onion.site";
const DEFAULT_TIMEOUT = 30000;

export const createClient = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true,
  });

  return axiosInstance;
};

export const httpClient = createClient();
