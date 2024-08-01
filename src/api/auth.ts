import { httpClient } from "./http";

export const backLogin = async (user: any) => {
  const result = await httpClient.get(
    `/member/kakao/client/login?code=${JSON.stringify(user)}`
  );
  console.log(result);
  return result.data;
};

export const getUser = async () => {
  const result = await httpClient.get(`/member/info/get`, {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2YjRmYTcyZi1iOGYzLTQ4ZjAtODc4Ni0xZTBlNTY5NmM5YTQiLCJpc3MiOiJsZXRzLW9uaW9uQXBwIiwic3ViIjoiMyIsInR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE3MjI1MzYzNjgsImV4cCI6MTcyMjUzOTk2OH0.bK96aU1PibvkkS8-CtjOGxtPhRyEaVV6cgEIOfMzhehMtfdqg4sadh4lRKTpxiDITSUyRmeJdXn_RDCZOBnnBQ`,
    },
  });
  return result.data;
};
