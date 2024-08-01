import messaging from "@react-native-firebase/messaging";
import { useEffect, useState } from "react";

function useToken() {
  const [token, setToken] = useState<string>("");
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log(enabled);
    if (enabled) {
      const token = await messaging().getToken();
      setToken(token);
      console.log("토큰", token);
    }
  };
  useEffect(() => {
    requestUserPermission();

    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) console.log(remoteMessage);
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

    return unsubscribe;
  }, []);
  return [token];
}

export default useToken;
