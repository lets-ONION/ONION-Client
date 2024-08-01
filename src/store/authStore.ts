import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface loginState {
  isLogin: boolean;
  setIsLogin: () => void;
}
export const useIsLogin = create<loginState>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: () =>
        set((state) => ({
          isLogin: !state.isLogin,
        })),
    }),
    {
      name: "isLogin", // 저장될 상태의 이름
      storage: createJSONStorage(() => AsyncStorage), // AsyncStorage를 사용하여 상태를 저장
    }
  )
);
