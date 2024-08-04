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
import { pushSetting_FriendReq, pushSetting_NoQuery } from "../api/auth";

export function PushSettingFriendReq() {
  const { data, error, loading, fetchData } = useFetch(pushSetting_NoQuery);

  const switching = async () => {
    try {
      await pushSetting_FriendReq();
    } catch (error) {
      Alert.alert("알림 설정 중 오류가 발생했어요ㅜㅠ");
    }
  };
  if (loading || error)
    return <ActivityIndicator size={"large"} color={"orange"} />;
  return (
    <View style={styles.container}>
      <View>
        <Text>친구 요청</Text>
        <Switch onValueChange={switching} value={data.data.friend_request} />
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
