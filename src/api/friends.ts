import { httpClient } from "./http";

export const getFriendsList = async () => {
  const result = await httpClient.get("/friends");
  return result;
};
