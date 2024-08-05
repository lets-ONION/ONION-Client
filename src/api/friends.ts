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

//카톡에서 친구지만 앱에서는 친구가 아닌 회원 조회
export const getFriendRecommends = async () => {
  const { data } = await httpClient.get(`/member/kakao/friends?offset=1`);
  return data;
};

//친구에게 친구 요청 걸기
export const postRequestFriend = async (id: number) => {
  const { data } = await httpClient.post(
    `/friend/request/create?target_id=${id}`
  );
  return data;
};
