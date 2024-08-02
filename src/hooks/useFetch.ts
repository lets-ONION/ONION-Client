import { useFocusEffect } from "@react-navigation/native";
import { AxiosError } from "axios";
import { ErrorInfo, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { keyframes } from "styled-components";

export const useFetch = <T>(request: () => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await request();
      setData(data);
    } catch (err) {
      console.log(err);
      Alert.alert("오류", "정보를 불러들이다 실패했어요", [
        {
          text: "새로고침",
          onPress: fetchData,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [request]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  return {
    data,
    loading,
    error,
  };
};
