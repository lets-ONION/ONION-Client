import { useFocusEffect } from "@react-navigation/native";
import { AxiosError } from "axios";
import { ErrorInfo, useCallback, useEffect, useState } from "react";
import { keyframes } from "styled-components";

export const useFetch = <T>(request: () => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await request();
      console.log(data);
      setData(data);
    } catch (err) {
      setError(err as Error);
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
