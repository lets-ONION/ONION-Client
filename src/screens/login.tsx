import {
  Image,
  Pressable,
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
import { AxiosError } from "axios";
import { httpClient } from "../api/http";
import { useIsLogin } from "../store/authStore";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export const Login = () => {
  const setIsLogin = useIsLogin((state) => state.setIsLogin);
  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      httpClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxZGUwOTY5My02YmNkLTQyNGUtYTg3Ny04ODE0N2Q4NmM5ODUiLCJpc3MiOiJsZXRzLW9uaW9uQXBwIiwic3ViIjoiMyIsInR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE3MjI1MzMwOTcsImV4cCI6MTcyMjUzNjY5N30.WCXyX7ct39G0J6O14BfddokhpTqDlGzYp-1R96fugv_FjaT7Yyem_pOkGktv_bsqrzDZg8s2DEZf2x451SzLmQ`;
      setIsLogin();
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
    width: "100%",
    height: "100%",
    paddingTop: 50,
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
