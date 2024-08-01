import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "./home";
import { Diary } from "./diary";
import Dictionary from "./dictionary/dictionary";
import Setting from "./setting/setting";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{ tabBarLabel: "홈" }}
      />
      <Tab.Screen
        name="diary"
        component={Diary}
        options={{
          tabBarLabel: "긍정일기",
          tabBarIcon: () => {
            return <Entypo name="open-book" size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="dictionary"
        component={Dictionary}
        options={{
          tabBarLabel: "도감",
          tabBarIcon: () => {
            return <Entypo name="open-book" size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={{ tabBarLabel: "설정" }}
      />
    </Tab.Navigator>
  );
}
