import { httpClient } from "./http";

export const getBook = async () => {
  const { data } = await httpClient.get("/book");
  console.log("책 보기", data.data);
  return data.data;
};

//보낸 교환 요청 조회
export const getSentTrade = async () => {
  const { data } = await httpClient.get("/trade/get/sent");
  return data;
};

//받은 교환 요청 조회
export const getRecievedTrade = async () => {
  const { data } = await httpClient.get("/trade/get/received");
  return data;
};

//교환 요청 보내기
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

//교환 요청 취소(보낸 사람이)
export const patchCancelTrade = async (tradeId: number) => {
  const { data } = await httpClient.patch(`/trade/cancel/${tradeId}`);
  console.log(data);
  return data;
};

export const acceptTrade = async (tradeId: number) => {
  await httpClient.post(`/trade/accept/${tradeId}`);
  return;
};

export const rejectTrade = async (tradeId: number) => {
  await httpClient.post(`/trade/reject/${tradeId}`);
  return;
};
