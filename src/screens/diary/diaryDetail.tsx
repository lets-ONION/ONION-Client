import { Text, View } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { DiaryStackParamList } from "./diaryStack";
import { DiaryContent } from "../../components/calendar/diaryContent";

export type DiaryDetailScreenProps = NativeStackScreenProps<
  DiaryStackParamList,
  "DiaryDetail"
>;
export function DiaryDetail({ navigation, route }: DiaryDetailScreenProps) {
  return <DiaryContent navigation={navigation} route={route} />;
}
