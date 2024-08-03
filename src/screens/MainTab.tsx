import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./home";
import { Note } from "./Note";
import Dictionary from "./dictionary/dictionary";
import Setting from "./setting/setting";
import { Entypo } from "@expo/vector-icons";

export type MainTabParamList = {
  home: undefined;
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
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{ tabBarLabel: "홈" }}
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
