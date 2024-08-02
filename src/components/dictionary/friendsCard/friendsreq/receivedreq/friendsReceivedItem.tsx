import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "../../../../common/button";

export const ReceivedReqItem = ({ req }: FriendReqType) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>
          {req.member.nickname}님이 친구요청을 보냈어요!
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            background="orange"
            onPress={() => {}}
            text="확인"
            width={50}
          />
          <Button
            background="lightgray"
            onPress={() => {}}
            text="취소"
            width={50}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    gap: 10,
    flexDirection: "row",
  },
  text: {
    width: "60%",
  },
});
