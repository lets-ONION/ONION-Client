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
    console.log('긍정 물주기', response.data)
    return response.data;
};

export const waterNegative = async () => {
    const response = await httpClient.patch(`/main/negative/water`);
    console.log('부정 물주기', response.data)
    return response.data;
};

export const checkPositive = async (note: string) => {
    const response = await httpClient.post(`/main/check/pos`, { note });
    console.log('긍정 검사', response.data)
    return response.data;
};

export const checkNegative = async (note: string) => {
    const response = await httpClient.post(`/main/check/neg`, { note });
    console.log('부정 검사했냐고', response.data)
    return response.data;
};

export const postOnionName = async (onion_name: string) => {
    const response = await httpClient.patch(`/main/naming`, { onion_name });
    return response.data;
};

export const growOnion = async (is_pos: number) => {
    const response = await httpClient.post(`/main/grow/${is_pos}`);
    console.log('양파 자람', response.data)
    return response.data;
};