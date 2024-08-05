import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { useFetch } from "../hooks/useFetch";
import { pushSetting_FriendReq } from "../api/auth";

export function PushSettingSwitch({
  name,
  isOn,
  fetch,
  refresh,
}: {
  name: string;
  isOn: boolean;
  fetch: () => Promise<void>;
  refresh: () => Promise<void>;
}) {
  const switching = async () => {
    try {
      await fetch();
      await refresh();
    } catch (error) {
      Alert.alert("알림 설정 중 오류가 발생했어요ㅜㅠ");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.notiContainer}>
        <Text style={styles.text}>{name}</Text>
        <Switch
          onValueChange={switching}
          value={isOn}
          thumbColor={"orange"}
          trackColor={{ false: "gray", true: "lightgray" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  notiContainer: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 17,
  },
});
