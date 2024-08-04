import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginState {
  isLogin: boolean;
  accessToken: string;
  refreshToken: string;
  deviceToken: string;
  nickname: string;
  profileImage: string;
  id: number;
  setDeviceToken: (token: string) => void;
  setIsLogin: () => void;
  setToken: (token: string) => void;
  setRefresh: (token: string) => void;
  setNickname: (nickname: string) => void;
  setProfile: (profile: string) => void;
  setId: (id: number) => void;
}

export const useLogin = create<LoginState>()(
  persist(
    (set) => ({
      isLogin: false,
      accessToken: "",
      refreshToken: "",
      deviceToken: "",
      nickname: "",
      profileImage: "",
      id: 0,
      setIsLogin: () =>
        set((state) => ({
          isLogin: !state.isLogin,
        })),
      setToken: (token: string) =>
        set(() => ({
          accessToken: token,
        })),
      setRefresh: (token: string) =>
        set(() => ({
          refreshToken: token,
        })),
      setNickname: (nickname: string) =>
        set(() => ({
          nickname: nickname,
        })),
      setProfile: (profile: string) =>
        set(() => ({
          profileImage: profile,
        })),
      setId: (id: number) =>
        set(() => ({
          id: id,
        })),
      setDeviceToken: (token: string) =>
        set(() => ({
          deviceToken: token,
        })),
    }),
    {
      name: "loginStorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
