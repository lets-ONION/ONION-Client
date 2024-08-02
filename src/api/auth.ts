import { httpClient } from "./http";

export const backLogin = async (user: any) => {
  const result = await httpClient.post(`/member/oauth/kakao/login/v2`, user);
  if (result.data) {
    httpClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${result.data.data.access_token}`;
  }
  return result.data;
};

export const getUser = async () => {
  const result = await httpClient.get(`/member/info/get`);
  console.log("???????", result);
  return result.data;
};

export const patchUserNickname = async (nickname: string) => {
  await httpClient.put(`/member/nickname/update`, {
    nickname: nickname,
  });
};
