import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Diary } from "./diary";
import { DiaryDetail } from "./diaryDetail";

export type DiaryStackParamList = {
  Diary: undefined;
  DiaryDetail: { date: string };
};

const Stack = createNativeStackNavigator<DiaryStackParamList>();

export function DiaryStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: "", headerBackButtonMenuEnabled: true }}
    >
      <Stack.Screen name="Diary" component={Diary} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
    </Stack.Navigator>
  );
}
