import { httpClient } from "./http";

//긍정일기 조회
export const getDiaryDetail = async (date: string) => {
  const { data } = await httpClient.get(`/calendar/${date}`);
  return data;
};

//긍정일기 수정
export const putDiaryDetail = async (date: string) => {
  const { data } = await httpClient.put(`/calendar/${date}`);
  return data;
};

//긍정일기 조회
export const deleteDiaryDetail = async (date: string) => {
  const { data } = await httpClient.delete(`/calendar/${date}`);
  return data;
};

//긍정일기 조회
export const getCalendar = async () => {
  const { data } = await httpClient.get(`/calendar`);
  return data;
};
