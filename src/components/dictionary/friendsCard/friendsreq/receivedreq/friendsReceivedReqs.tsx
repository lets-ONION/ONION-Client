import { StyleSheet, Text, View } from "react-native";
import { FriendsReceivedReqsList } from "./friendsReceivedList";

export const FriendsReceivedReqs = () => {
  return (
    <View style={styles.container}>
      <FriendsReceivedReqsList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    padding: 10,
    flexWrap: "wrap",
  },
});
