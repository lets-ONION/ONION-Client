import { useEffect, useState } from "react";

type Status = "PENDING" | "FULFILLED" | "REJECTED";

const useFetch = <T>(request: () => Promise<T>) => {
  const [status, setStatus] = useState<Status>("PENDING");
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const resolve = (fetchedData: T) => {
    setStatus("FULFILLED");
    setResult(fetchedData);
  };

  const reject = (error: Error) => {
    setStatus("REJECTED");
    setError(error);
  };

  const fetch = () => {
    setStatus("PENDING");
    request().then(resolve, reject);
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    result,
    status,
    isLoading: status === "PENDING",
    isError: status === "REJECTED",
    error,
  };
};
