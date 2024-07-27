import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import useToken from "./src/hooks/useToken";
import OnionCard from "./src/components/dictionary/onionCard";
import MainTab from "./src/screens/MainTab";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [token] = useToken();

  console.log(token);

  return (
    <NavigationContainer>
      <MainTab />
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
