import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import useToken from "./src/hooks/useToken";
import OnionCard from "./src/components/dictionary/myOnionCards/onionCard";
import MainTab from "./src/screens/MainTab";
import { NavigationContainer } from "@react-navigation/native";
import { useIsLogin } from "./src/store/authStore";
import Login from "./src/screens/login";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [token] = useToken();
  const isLogin = useIsLogin((state) => state.isLogin);

  console.log("www", isLogin);

  return (
    <NavigationContainer>
      {isLogin ? <MainTab /> : <Login />}
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
