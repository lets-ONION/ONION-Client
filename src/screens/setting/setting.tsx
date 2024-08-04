import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Profile } from "../../components/setting/profile";
import { Logout } from "../../components/setting/logout";
import { PushSwitch } from "../../components/setting/pushSwitch";
import { SettingStackParamList } from "./settingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type SettingScreenProps = NativeStackScreenProps<
  SettingStackParamList,
  "Setting"
>;
export default function Setting({ navigation, route }: SettingScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <Profile />
      <PushSwitch navigation={navigation} />
      <Logout />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    paddingTop: 40,
  },
});
