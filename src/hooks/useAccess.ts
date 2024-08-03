import { useEffect } from "react";
import { useLogin } from "../store/authStore";
import { httpClient } from "../api/http";

export const useAccess = () => {
  const { accessToken } = useLogin.getState();
  useEffect(() => {
    if (accessToken) {
      httpClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      console.log("엑세스 토큰 설정 완료");
    }
  }, []);
  return { accessToken };
};
