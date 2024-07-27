import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import useToken from "./src/hooks/useToken";
import OnionCard from "./src/components/dictionary/onionCard";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [token] = useToken();

  console.log(token);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OnionCard
        onion={{
          onion_image:
            "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
          onion_type: "양파링",
          amount: 4,
          can_trade: true,
        }}
      />
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
