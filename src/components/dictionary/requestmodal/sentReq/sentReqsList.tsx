import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ReqTradeListType } from "../../../../types/exchange/exchangeRequests";
import { dummyReqData } from "../../../dummyData";
import { SentReqItem } from "./sentReqItem";

export const SentReqsList = ({ trades }: ReqTradeListType) => {
  return (
    <ScrollView>
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
});
