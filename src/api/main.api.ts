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
    console.log('물 준 결과', response.data)
    return response.data;
};

export const checkPositive = async (note: string) => {
    const response = await httpClient.post(`/main/check/pos`, { note });
    return response.data;
};

export const checkNegative = async (note: string) => {
    const response = await httpClient.post(`/main/check/neg`, { note });
    console.log('부정양파 글씀', response.data)
    return response.data;
};

export const postOnionName = async (onion_name: string) => {
    const response = await httpClient.patch(`/main/naming`, { onion_name });
    console.log('양파이름 설정', response.data)
    return response.data;
};