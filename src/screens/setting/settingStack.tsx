import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setting from "./setting";
import { PushSetting } from "./pushSetting";

export type SettingStackParamList = {
  Setting: undefined;
  SettingPushNotification: undefined;
};

const Stack = createNativeStackNavigator<SettingStackParamList>();

export function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingPushNotification"
        component={PushSetting}
        options={{
          headerBackVisible: true,
          headerTitle: "알림 설정",
        }}
      />
    </Stack.Navigator>
  );
}
