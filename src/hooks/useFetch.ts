import { useFocusEffect } from "@react-navigation/native";
import { AxiosError } from "axios";
import { ErrorInfo, useCallback, useEffect, useState } from "react";

export const useFetch = <T>(request: () => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await request();
      console.log("데이타", data);
      setResult(data);
    } catch (err) {
      console.log("에라", err);
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
    result,
    loading,
    error,
  };
};
