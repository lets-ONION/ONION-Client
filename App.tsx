import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState<string>("");

  return <Text>테스트</Text>;
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
