import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import useToken from "./src/hooks/useToken";
import OnionCard from "./src/components/dictionary/myOnionCards/onionCard";
import MainTab from "./src/screens/MainTab";
import { NavigationContainer } from "@react-navigation/native";
import { useLogin } from "./src/store/authStore";
import Login from "./src/screens/login";
import { LoginStack } from "./src/screens/loginStack";
import { useAccess } from "./src/hooks/useAccess";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const isLogin = useLogin((state) => state.isLogin);

  return (
    <NavigationContainer>
      {isLogin ? <MainTab /> : <LoginStack />}
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
