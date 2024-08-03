import { httpClient } from "./http";

export const getFriendsList = async () => {
  const { data } = await httpClient.get("/friend/list/get");
  return data.data;
};

export const getFriendsBook = async (id: number) => {
  const { data } = await httpClient.get(`/book?member_id=${id}`);
  return data.data;
};
