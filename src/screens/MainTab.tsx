import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "./home";
import Dictionary from "./dictionary/dictionary";
import Setting from "./setting/setting";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Diary } from "./diary/diary";
import { useLogin } from "../store/authStore";
import { useAccess } from "../hooks/useAccess";
import { DiaryStack } from "./diary/diaryStack";
import { SettingStack } from "./setting/settingStack";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  const { accessToken } = useAccess();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: () => {
            return <Feather name="home" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="diary"
        component={DiaryStack}
        options={{
          tabBarLabel: "일기",
          tabBarIcon: () => {
            return <AntDesign name="book" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="dictionary"
        component={Dictionary}
        options={{
          tabBarLabel: "도감",
          tabBarIcon: () => {
            return <Entypo name="open-book" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingStack}
        options={{
          tabBarLabel: "설정",
          tabBarIcon: () => {
            return <Feather name="settings" size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
