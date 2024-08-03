import { httpClient } from "./http";

export const getFriendsList = async () => {
  const { data } = await httpClient.get("/friend/list/get");
  return data.data;
};

export const getFriendsBook = async (id: number) => {
  const { data } = await httpClient.get(`/book?member_id=${id}`);
  return data.data;
};

// 받은 친구 요청들 보기
export const getFriendRequests = async () => {
  const { data } = await httpClient.get(`/friend/request/get`);
  return data;
};

//받은 친구 요청에 대한 응답
export const patchResponseFriendReq = async (
  id: number,
  response: "ACCEPT" | "REJECT"
) => {
  const { data } = await httpClient.patch(
    `/friend/request/response?target_id=${id}&response=${response}`
  );
  return data;
};
