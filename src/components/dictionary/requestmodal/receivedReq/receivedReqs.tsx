import { StyleSheet, Text, View } from "react-native";
import { dummyReceivedData } from "../../../dummyData";
import { ReceivedReqsList } from "./receivedReqList";

export const ReceivedReqs = () => {
  return (
    <View style={styles.container}>
      <ReceivedReqsList trades={dummyReceivedData.trades} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
