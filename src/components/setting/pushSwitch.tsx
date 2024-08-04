import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export function PushSwitch() {
  const [isPushActive, setPushActive] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.text}>푸시알림</Text>
      </View>
      <Switch
        style={styles.switch}
        trackColor={{ true: "orange" }}
        thumbColor={"white"}
        value={isPushActive}
        onValueChange={() => {
          setPushActive(!isPushActive);
        }}
      />
    </View>
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
