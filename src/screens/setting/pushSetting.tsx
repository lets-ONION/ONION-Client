import { StyleSheet, View } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import {
  getPushSettings,
  pushSetting_FriendReq,
  pushSetting_FriendRes,
  pushSetting_TradeReq,
  pushSetting_TradeRes,
  pushSetting_Water,
} from "../../api/auth";
import { ActivityIndicator } from "react-native-paper";
import { PushSettingSwitch } from "../../components/pushSetting";

export function PushSetting() {
  const { data, loading, error, fetchData } = useFetch(getPushSettings);
  if (loading || error)
    return <ActivityIndicator size={"large"} color="orange" />;
  return (
    <View style={styles.container}>
      <PushSettingSwitch
        name="친구 요청"
        fetch={pushSetting_FriendReq}
        isOn={data.data.friend_request}
        refresh={fetchData}
      />
      <PushSettingSwitch
        name="상대방의 친구 수락"
        fetch={pushSetting_FriendRes}
        isOn={data.data.friend_accept}
        refresh={fetchData}
      />
      <PushSettingSwitch
        name="양파 교환 신청"
        fetch={pushSetting_TradeReq}
        isOn={data.data.trade_request}
        refresh={fetchData}
      />
      <PushSettingSwitch
        name="상대방의 양파 교환 수락"
        fetch={pushSetting_TradeRes}
        isOn={data.data.trade_accept}
        refresh={fetchData}
      />
      <PushSettingSwitch
        name="양파에 물 주기 알림"
        fetch={pushSetting_Water}
        isOn={data.data.wateringTime}
        refresh={fetchData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
