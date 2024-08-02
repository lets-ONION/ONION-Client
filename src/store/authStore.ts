import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginState {
  isLogin: boolean;
  accessToken: string;
  setIsLogin: () => void;
  setToken: (token: string) => void;
}

export const useLogin = create<LoginState>()(
  persist(
    (set) => ({
      isLogin: false,
      accessToken: "",
      setIsLogin: () =>
        set((state) => ({
          isLogin: !state.isLogin,
        })),
      setToken: (token: string) =>
        set(() => ({
          accessToken: token,
        })),
    }),
    {
      name: "loginStorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
