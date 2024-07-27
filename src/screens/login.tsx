import { Pressable, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from "@react-native-seoul/kakao-login";


const Login = () => {
  const [result, setResult] = useState<string>("");

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      console.log(token);
      setResult(JSON.stringify(token));
    } catch (err) {
      console.error("login err", err);
    }
  };

  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
      console.log(message);
      setResult(message);
    } catch (err) {
      console.error("signOut error", err);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();

      setResult(JSON.stringify(profile));
    } catch (err) {
      console.error("signOut error", err);
    }
  };

  const getShippingAddresses = async (): Promise<void> => {
    try {
      const shippingAddresses = await getKakaoShippingAddresses();

      setResult(JSON.stringify(shippingAddresses));
    } catch (err) {
      console.error("signOut error", err);
    }
  };

  const unlinkKakao = async (): Promise<void> => {
    try {
      const message = await unlink();

      setResult(message);
    } catch (err) {
      console.error("signOut error", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={{width: 200, height: 200, marginBottom: 150}}/>
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Image source={require("../assets/kakao.png")}  style={{width : 30, height : 30, marginRight: 10}}/>
        <Text style={styles.text}>카카오톡으로 로그인하기</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          signOutWithKakao();
        }}
      >
        <Text style={styles.text}>로그아웃</Text>  
        {/* 로그아웃은 개발할 때 편하라고 임시로 넣어뒀어요 */}
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
  button: {
    flexDirection: 'row',
    backgroundColor: "#FFEB3B",
    borderRadius: 40,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    // paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});
