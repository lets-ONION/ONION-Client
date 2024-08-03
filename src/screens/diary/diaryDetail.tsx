import { Text, View } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { DiaryStackParamList } from "./diaryStack";

type DiaryDetailScreenProps = NativeStackScreenProps<
  DiaryStackParamList,
  "DiaryDetail"
>;
export function DiaryDetail({ navigation, route }: DiaryDetailScreenProps) {
  const { date } = route.params;
  return (
    <View>
      <Text>{date}</Text>
    </View>
  );
}
