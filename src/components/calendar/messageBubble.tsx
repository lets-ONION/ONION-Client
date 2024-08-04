import { StyleSheet, Text, View } from "react-native";

export const MessageBubble = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.speechBubble}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.triangle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  speechBubble: {
    width: "100%",
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginTop: 30,
  },
  text: {},
  triangle: {
    position: "absolute",
    top: 10,
    left: 50,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff",
    marginLeft: -20,
    marginTop: -20,
  },
});
