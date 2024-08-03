import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from "@react-native-seoul/kakao-login";
import { backLogin, getUser } from "../api/auth";
import { httpClient } from "../api/http";
import { useLogin } from "../store/authStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "./loginStack";

type LoginScreenProps = NativeStackScreenProps<LoginStackParamList, "Login">;
export const Login = ({ navigation }: LoginScreenProps) => {
  const { setIsLogin, setToken, setRefresh } = useLogin.getState();
  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      const { data } = await backLogin({
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      });
      setToken(data.access_token);
      setRefresh(data.refresh_token);
      if (!data.member.nickname) navigation.navigate("NicknameSetting");
      else setIsLogin();
    } catch (err) {
      console.error("login err", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/wFI6Whf.png" }}
        style={styles.image}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Image
          source={{
            uri: "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff5d7b9d3-6faa-4fbd-92fb-abc13883f4ac%2Fkakao.png&blockId=845a0760-d543-46ae-965d-018c4289eb32&width=256",
          }}
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.text}>카카오톡으로 로그인하기</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 100,
  },
  image: {
    width: 300,
    height: 500,
    objectFit: "contain",
  },
  button: {
    backgroundColor: "#FDDC3F",
    borderRadius: 14,
    width: "70%",
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 17,
  },
});
