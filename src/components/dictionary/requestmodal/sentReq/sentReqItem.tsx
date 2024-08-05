import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ReqTradeType } from "../../../../types/exchange/exchangeRequests";
import { Button } from "../../../common/button";
import { patchCancelTrade } from "../../../../api/book";

import MainText from "../../../mainText";

export const SentReqItem = ({ trade, fetchData }: ReqTradeType) => {
  const onPressCancel = async () => {
    try {
      await patchCancelTrade(trade.id);
      await fetchData();
    } catch (error) {
      Alert.alert("오류", "취소 중 오류가 발생했어요.");
    }
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <MainText style={styles.text}>
          {trade.res_member.nickname}님에게 {trade.req_onion}을(를){" "}
          {trade.res_member.nickname}님의
          {trade.res_onion}와 교환하기를 제안했어요
        </MainText>
        <Button
          background="lightgray"
          onPress={onPressCancel}
          text="취소하기"
          width={80}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    width: "70%",
  },
});
