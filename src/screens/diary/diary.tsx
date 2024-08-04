import { Image, StyleSheet, Text, View } from "react-native";
import { OnionCalendar } from "../../components/calendar/calendar";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { DiaryStackParamList } from "./diaryStack";
import { useLogin } from "../../store/authStore";

export type DiaryScreenProps = NativeStackScreenProps<
  DiaryStackParamList,
  "Diary"
>;
export function Diary({ navigation, route }: DiaryScreenProps) {
  const { nickname, profileImage } = useLogin.getState();
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image source={{ uri: profileImage }} style={styles.profile} />
        <Text style={styles.text}>{nickname}의 긍정일기장</Text>
      </View>
      <OnionCalendar navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  profile: {
    width: 100,
    height: 100,
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  text: {
    fontSize: 18,
  },
});
