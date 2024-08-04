import { useFocusEffect } from "@react-navigation/native";
import { AxiosError } from "axios";
import { ErrorInfo, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { keyframes } from "styled-components";
import { useLogin } from "../store/authStore";
import { tokenRefresh } from "../api/auth";
import { Logout } from "../components/setting/logout";

export const useFetch = <T>(request: () => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { refreshToken, setIsLogin } = useLogin.getState();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await request();
      console.log("데이타", data);
      setData(data);
    } catch (err) {
      console.log("fetch중 에러", err);
      reFetch();
    } finally {
      setLoading(false);
    }
  }, [request]);

  const reFetch = async () => {
    try {
      await tokenRefresh();
      const data = await request();
      console.log("재요청", data);
      setData(data);
    } catch (error) {
      console.log("refetch 중 오류 발생", error);
      Alert.alert("오류", "정보를 불러들이다 실패했어요", [
        {
          text: "확인",
        },
      ]);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  return {
    data,
    loading,
    error,
    fetchData,
    setData,
  };
};
