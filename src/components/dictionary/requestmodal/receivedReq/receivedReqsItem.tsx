import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { ReceivedTradeType } from "../../../../types/exchange/exchangeRequests";
import { Button } from "../../../common/button";

export const ReceivedReqItem = ({ trade }: ReceivedTradeType) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>
          {trade.requester.nickname}님이 자신의 {trade.req_onion}을{" "}
          {trade.res_onion}과 교환하기를 원해요!
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            background="orange"
            onPress={() => {}}
            text="확인"
            width={50}
          />
          <Button
            background="lightgray"
            onPress={() => {}}
            text="취소"
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
