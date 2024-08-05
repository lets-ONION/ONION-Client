import messaging from "@react-native-firebase/messaging";
import { useEffect, useState } from "react";
import { updateDeviceToken } from "../api/auth";
import { useLogin } from "../store/authStore";

function useToken() {
  const [token, setToken] = useState<string>("");
  const { deviceToken, setDeviceToken } = useLogin.getState();
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      const token = await messaging().getToken();
      setToken(token);
      if (deviceToken !== token) {
        const data = await updateDeviceToken(token);
        setDeviceToken(token);
        console.log("디바이스토큰업데이트", data.response);
      } else {
        console.log("디바이스 토큰 변동없음");
      }
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
