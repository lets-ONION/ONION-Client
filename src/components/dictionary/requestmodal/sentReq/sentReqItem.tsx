import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { ReqTradeType } from "../../../../types/exchangeRequests";
import { Button } from "../../../common/button";

export const SentReqItem = ({ trade }: ReqTradeType) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>
          사용자님의 {trade.req_onion}을 {trade.receiver.nickname}님의{" "}
          {trade.res_onion}과 교환하기를 제안했어요
        </Text>
        <Button
          background="lightgray"
          onPress={() => {}}
          text="취소"
          width={50}
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
    padding: 10,
  },
  text: {
    width: "80%",
  },
});
