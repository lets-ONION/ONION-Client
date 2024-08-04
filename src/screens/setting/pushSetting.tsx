import { StyleSheet, View } from "react-native";
import { PushSettingFriendReq } from "../../components/pushSetting";

export function PushSetting() {
  return (
    <View style={styles.container}>
      <PushSettingFriendReq />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
