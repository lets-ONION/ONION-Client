import { useLogin } from "../store/authStore";
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
  const { data } = await httpClient.get(`/member/info/get`);
  return data;
};

export const patchUserNickname = async (nickname: string) => {
  await httpClient.put(`/member/nickname/update`, {
    nickname: nickname,
  });
};

export const tokenRefresh = async () => {
  const { refreshToken, setRefresh } = useLogin.getState();
  const { data } = await httpClient.post(`/member/token/refresh`, {
    refresh_token: refreshToken,
  });
  httpClient.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${data.data.access_token}`;
  setRefresh(data.data.refresh_token);
};

// 유저 정보 변경
export const putMyProfile = async (nickname: string, image: string) => {
  const { setNickname, setProfile } = useLogin.getState();
  const { data } = await httpClient.put(`/mypage`, {
    nickname: nickname,
    user_image_url: image,
  });
  setNickname(nickname);
  setProfile(image);
  return data;
};

export const updateDeviceToken = async (token: string) => {
  const { data } = await httpClient.post(`/member/device-token/save`, {
    device_token: token,
  });
  return data;
};

//알림 설정 변경
export const getPushSettings = async () => {
  const { data } = await httpClient.get(`/push/notification/config/get`);
  return data;
};
//알림 설정 변경
export const pushSetting_FriendReq = async () => {
  const { data } = await httpClient.patch(
    `/push/notification/config/update?type=FRIEND_REQUEST`
  );
  return data;
};

//알림 설정 변경
export const pushSetting_FriendRes = async () => {
  const { data } = await httpClient.patch(
    `/push/notification/config/update?type=FRIEND_RESPONSE`
  );
  return data;
};

//알림 설정 변경
export const pushSetting_TradeReq = async () => {
  const { data } = await httpClient.patch(
    `/push/notification/config/update?type=TRADE_REQUEST`
  );
  return data;
};

//알림 설정 변경
export const pushSetting_TradeRes = async () => {
  const { data } = await httpClient.patch(
    `/push/notification/config/update?type=TRADE_RESPONSE`
  );
  return data;
};

//알림 설정 변경
export const pushSetting_Water = async () => {
  const { data } = await httpClient.patch(
    `/push/notification/config/update?type=WATERING_TIME`
  );
  return data;
};
