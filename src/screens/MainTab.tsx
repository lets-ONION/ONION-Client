import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./home";
import { Note } from "./Note";
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

export type MainTabParamList = {
  home: undefined;
  diary: undefined;
  dictionary: undefined;
  setting: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Note: undefined;
};

const Tab = createMaterialBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Note" component={Note} />
    </Stack.Navigator>
  );
}

export default function MainTab() {
  const { accessToken } = useAccess();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: () => {
            return <Feather name="home" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="diary"
        component={Diary}
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
        component={Setting}
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
