import { StyleSheet, Text, View } from "react-native";
import { ReqTradeType } from "../../../../types/exchangeRequests";

export const SentReqItem = ({ trade }: ReqTradeType) => {
  return (
    <View style={styles.container}>
      <Text>
        사용자님의 {trade.req_onion}을 {trade.receiver.nickname}님의{" "}
        {trade.res_onion}과 교환하기를 제안했어요
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
