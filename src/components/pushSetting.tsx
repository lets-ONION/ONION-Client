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
}: {
  name: string;
  isOn: boolean;
  fetch: () => Promise<void>;
}) {
  const switching = async () => {
    try {
      await fetch();
    } catch (error) {
      Alert.alert("알림 설정 중 오류가 발생했어요ㅜㅠ");
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>{name}</Text>
        <Switch onValueChange={switching} value={isOn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  notiContainer: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
