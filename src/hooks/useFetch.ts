import { AxiosError } from "axios";
import { ErrorInfo, useCallback, useEffect, useState } from "react";

export const useFetch = <T>(request: () => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await request();
        setResult(data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [request]);

  return {
    result,
    loading,
    error,
  };
};
