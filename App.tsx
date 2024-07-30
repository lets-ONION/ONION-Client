import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import useToken from "./src/hooks/useToken";
import OnionCard from "./src/components/dictionary/onionCard";
import MainTab from "./src/screens/MainTab";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNav from "./src/navigator/AuthStackNav";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // 로그인 상태를 관리

  const [token] = useToken();

  console.log(token);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTab /> : <AuthStackNav />}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
});
