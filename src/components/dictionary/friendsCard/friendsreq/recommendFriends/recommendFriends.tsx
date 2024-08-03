import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "../../../../common/button";

export const RecommendFriends = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>wwww</Text>
        <Button
          background="lightgray"
          onPress={() => {}}
          text="취소하기"
          width={80}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    width: "70%",
  },
});
