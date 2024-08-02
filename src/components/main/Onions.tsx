import { View, Image, StyleSheet, Text } from "react-native";

const positive1 = require("../../../assets/positive/1.png");
const negative1 = require("../../../assets/negative/1.png");

const Onions = () => {
  return (
    <View style={styles.onionsStyle}>
      <View style={styles.onion}>
        <Image source={positive1} style={styles.onionStyle} />
        <Text>긍정 양파</Text>
      </View>
      <View style={styles.onion}>
        <Image source={negative1} style={styles.onionStyle} />
        <Text>부정 양파</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onionsStyle: {
    flexDirection: 'row',
  },
  onionStyle: {
    marginBottom: 20,
    width: 170,
    height: 300,
  },
  onion: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  }
});

export default Onions;
