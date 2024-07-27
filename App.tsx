import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import useToken from "./src/hooks/useToken";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [token, requestPermission, handleMessaging] = useToken();

  console.log(token);
  useEffect(() => {}, []);

  return (
    <View>
      <Text>테스트</Text>
      <Text>테스트</Text>
      <Text>테스트</Text>
    </View>
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
