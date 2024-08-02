import { StyleSheet, Text, View } from "react-native";
import { Nickname } from "../components/nicknameSetting/nickname";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "./loginStack";

type NicknameScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  "NicknameSetting"
>;

export function NicknameSetting({ navigation, route }: NicknameScreenProps) {
  return (
    <View style={styles.container}>
      <Nickname navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 70,
  },
});
