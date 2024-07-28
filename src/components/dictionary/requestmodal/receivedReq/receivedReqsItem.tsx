import { StyleSheet, Text, View } from "react-native";
import { ReceivedTradeType } from "../../../../types/exchangeRequests";

export const ReceivedReqItem = ({ trade }: ReceivedTradeType) => {
  return (
    <View style={styles.container}>
      <Text>
        {trade.requester.nickname}님이 자신의 {trade.req_onion}을{" "}
        {trade.res_onion}과 교환하기를 원해요!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
