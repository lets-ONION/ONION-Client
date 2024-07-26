import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log("status:", authStatus);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => {
          console.log(token);
        });
    } else {
      console.log("failed get token");
    }
  });

  messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      if (remoteMessage) console.log(remoteMessage);
      setLoading(false);
    });

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log(remoteMessage);
  });

  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    console.log(remoteMessage);
  });

  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    console.log("onMessage", JSON.stringify(remoteMessage));
  });
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
