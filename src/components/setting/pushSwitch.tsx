import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

export function PushSwitch({ navigation }: { navigation: any }) {
  const [isPushActive, setPushActive] = useState<boolean>(true);
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("SettingPushNotification")}
    >
      <View style={styles.textWrapper}>
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.text}>알림 설정</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 17,
  },
  textWrapper: {
    flexDirection: "row",
    gap: 20,
  },
  switch: {},
});
