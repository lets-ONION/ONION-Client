import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "../../../../common/button";

import MainText from "../../../../mainText";

export const RecommendFriends = () => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <MainText style={styles.text}>wwww</MainText>
          <Button
            background="lightgray"
            onPress={() => {}}
            text="취소하기"
            width={80}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
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
