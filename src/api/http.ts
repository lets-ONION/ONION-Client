import axios from 'axios';

const BASE_URL = '';
const DEFAULT_TIMEOUT = 30000;

export const createClient = () => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {

        }
    });

    return axiosInstance;
};

export const httpClient = createClient();