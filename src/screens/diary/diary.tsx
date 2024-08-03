import { StyleSheet, Text, View } from "react-native";
import { OnionCalendar } from "../../components/calendar/calendar";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { DiaryStackParamList } from "./diaryStack";

export type DiaryScreenProps = NativeStackScreenProps<
  DiaryStackParamList,
  "Diary"
>;
export function Diary({ navigation, route }: DiaryScreenProps) {
  return (
    <View style={styles.container}>
      <OnionCalendar navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 70,
  },
});
