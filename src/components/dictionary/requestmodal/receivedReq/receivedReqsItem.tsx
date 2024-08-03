import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ReceivedTradeType } from "../../../../types/exchange/exchangeRequests";
import { Button } from "../../../common/button";
import { acceptTrade, rejectTrade } from "../../../../api/book";

export const ReceivedReqItem = ({ trade, fetchData }: ReceivedTradeType) => {
  const onPressAccept = async () => {
    try {
      await acceptTrade(trade.id);
    } catch (error) {
      Alert.alert("오류", "수락하는 과정에서 오류가 발생했어요!");
    }
  };
  const onPressReject = async () => {
    try {
      await rejectTrade(trade.id);
    } catch (error) {
      Alert.alert("오류", "수락하는 과정에서 오류가 발생했어요!");
    }
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>
          {trade.req_member.nickname}님이 자신의 {trade.req_onion}을(를)
          회원님의
          {trade.res_onion}와(과) 교환하기를 원해요!
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            background="orange"
            onPress={onPressAccept}
            text="수락"
            width={50}
          />
          <Button
            background="lightgray"
            onPress={onPressReject}
            text="거절"
            width={50}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    gap: 10,
    flexDirection: "row",
  },
  text: {
    width: "60%",
  },
});
