import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ReqTradeListType } from "../../../../types/exchangeRequests";
import { dummyReqData } from "../../../dummyData";
import { SentReqItem } from "./sentReqItem";

export const SentReqsList = ({ trades }: ReqTradeListType) => {
  return (
    <ScrollView>
      {trades.map((trade) => {
        return <SentReqItem trade={trade} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
