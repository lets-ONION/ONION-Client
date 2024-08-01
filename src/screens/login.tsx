import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
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
      <View style={styles.resultContainer}>
        <ScrollView>
          <Text></Text>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
  resultContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 24,
  },
  button: {
    backgroundColor: "#FEE500",
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
  },
});
