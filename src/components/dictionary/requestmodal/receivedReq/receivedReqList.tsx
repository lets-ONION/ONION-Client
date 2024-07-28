import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ReceivedTradeListType } from "../../../../types/exchangeRequests";
import { ReceivedReqItem } from "./receivedReqsItem";

export const ReceivedReqsList = ({ trades }: ReceivedTradeListType) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trades.map((trade, idx) => {
        return <ReceivedReqItem trade={trade} key={idx} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
