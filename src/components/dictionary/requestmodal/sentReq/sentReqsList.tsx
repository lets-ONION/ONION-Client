import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ReqTradeListType } from "../../../../types/exchangeRequests";
import { dummyReqData } from "../../../dummyData";
import { SentReqItem } from "./sentReqItem";

export const SentReqsList = ({ trades }: ReqTradeListType) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {trades.map((trade, idx) => {
        return <SentReqItem trade={trade} key={idx} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentContainer: {
    width: "100%",
    padding: 10,
    height: "100%",
  },
});
