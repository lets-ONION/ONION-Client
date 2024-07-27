import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "./home";
import Dictionary from "./dictionary/dictionary";
import Setting from "./setting/setting";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="도감" component={Dictionary} />
      <Tab.Screen name="설정" component={Setting} />
    </Tab.Navigator>
  );
}
