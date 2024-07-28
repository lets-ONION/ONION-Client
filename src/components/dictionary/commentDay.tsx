import { StyleSheet, Text, View } from "react-native";
import { CommentType } from "../../types/comment";

export const CommentDay = ({ comment }: CommentType) => {
  return (
    <View style={styles.container}>
      <View style={styles.commentWrapper}>
        <Text>{comment}</Text>
      </View>
      <View style={styles.commentArrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  commentWrapper: {
    width: "100%",
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  commentArrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderTopWidth: 20,
    borderRightWidth: 14,
    borderRightColor: "transparent",
    borderBottomColor: "lightgray",
    borderTopColor: "lightgray",
    bottom: -10,
    left: 0,
  },
});
