import axios from "axios";

const BASE_URL = "http://api.lets-onion.site";
const DEFAULT_TIMEOUT = 30000;

export const createClient = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxOWM1OTc2NS02MTQ5LTQ4MTUtOTgzNS0zMmQxNzliODQ0MjAiLCJpc3MiOiJsZXRzLW9uaW9uQXBwIiwic3ViIjoiMyIsInR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE3MjI1MzU1NzksImV4cCI6MTcyMjUzOTE3OX0.d7knxnmA4xJQddp7z6-F3IcmFooHTdYhkUm-vTcPPy2NDyBMqY0gu2KsbND0RtJUdDaPUMRGwZhzDznt53NRDA`,
    },
    withCredentials: true,
  });

  return axiosInstance;
};

export const httpClient = createClient();
