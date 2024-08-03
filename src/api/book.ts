import { httpClient } from "./http";

export const getBook = async () => {
  const { data } = await httpClient.get("/book");
  console.log("책 보기", data.data);
  return data.data;
};

export const getSentTrade = async () => {
  return httpClient.get("/book/trade_reqs/sent");
};

export const getRecievedTrade = async () => {
  return await httpClient.get("/book/trade_reqs/received");
};

export const postTrade = async (
  receiver: number,
  reqOnion: string,
  resOnion: string
) => {
  const result = await httpClient.post(`/trade/${receiver}`, {
    req_onion: reqOnion,
    res_onion: resOnion,
  });
  return result.data;
};

export const acceptTrade = async (tradeId: string) => {
  return await httpClient.post(`/book/trade_reqs/${tradeId}/accept`);
};

export const postTodayMemo = async (memo: string) => {
  return await httpClient.post(`/book/trade/`, {
    memo: memo,
  });
};

export const postStatusMessage = async (content: string) => {
  const { data } = await httpClient.post(`member/status-message/update`, {
    status_message: content,
  });
  console.log(data);
  return data;
};
