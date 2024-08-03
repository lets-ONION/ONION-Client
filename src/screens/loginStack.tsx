import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import { NicknameSetting } from "./nicknameSetting";
import MainTab from "./MainTab";

export type LoginStackParamList = {
  Login: undefined;
  NicknameSetting: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<LoginStackParamList>();

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NicknameSetting" component={NicknameSetting} />
      <Stack.Screen name="Main" component={MainTab} />
    </Stack.Navigator>
  );
}
