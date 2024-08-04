import { httpClient } from "./http";

export const fetchMain = async () => {
    const response = await httpClient.get(`/main`);
    return response.data.data;
};

export const notePositive = async (note: string) => {
    const response = await httpClient.post(`/main/positive/note`, { note });
    return response.data;
};

export const waterPositive = async () => {
    const response = await httpClient.patch(`/main/positive/water`);
    return response.data;
};

export const waterNegative = async () => {
    const response = await httpClient.patch(`/main/negative/water`);
    return response.data;
};

export const checkPositive = async (note: string) => {
    const response = await httpClient.post(`/main/check/pos`, { note });
    return response.data;
};

export const checkNegative = async (note: string) => {
    const response = await httpClient.post(`/main/check/neg`, { note });
    return response.data;
};