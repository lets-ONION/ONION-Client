import { httpClient } from "./http";

export const getMyOnionBook = async () => {
  const result = await httpClient.get("/book");
  return result.data;
};

export const getSentTrade = async () => {
  return httpClient.get("/book/trade_reqs/sent");
};

export const getRecievedTrade = async () => {
  return await httpClient.get("/book/trade_reqs/received");
};

export const postTrade = async (receiver: string) => {
  return await httpClient.post(`/book/trade/${receiver}`);
};

export const acceptTrade = async (tradeId: string) => {
  return await httpClient.post(`/book/trade_reqs/${tradeId}/accept`);
};

export const postTodayMemo = async (memo: string) => {
  return await httpClient.post(`/book/trade/`, {
    memo: memo,
  });
};
