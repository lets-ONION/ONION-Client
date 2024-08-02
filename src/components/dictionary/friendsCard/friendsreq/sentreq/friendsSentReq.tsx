import { StyleSheet, Text, View } from "react-native";
import { SentReqsList } from "./sentReqsList";
import { dummyReqData } from "../../../../dummyData";

export const FriendsSentReqs = () => {
  return (
    <View style={styles.container}>
      <SentReqsList trades={dummyReqData.trades} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    padding: 10,
  },
});
