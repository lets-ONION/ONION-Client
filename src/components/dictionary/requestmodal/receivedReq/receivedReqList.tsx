import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ReceivedTradeListType } from "../../../../types/exchangeRequests";
import { ReceivedReqItem } from "./receivedReqsItem";

export const receivedReqsList = ({ trades }: ReceivedTradeListType) => {
  return (
    <ScrollView>
      {trades.map((trade) => {
        return <ReceivedReqItem trade={trade} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
