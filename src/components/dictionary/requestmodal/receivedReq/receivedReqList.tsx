import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ReceivedTradeListType } from "../../../../types/exchange/exchangeRequests";
import { ReceivedReqItem } from "./receivedReqsItem";

export const ReceivedReqsList = ({
  trades,
  fetchData,
}: ReceivedTradeListType) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trades.map((trade, idx) => {
        return (
          <ReceivedReqItem trade={trade} key={idx} fetchData={fetchData} />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
