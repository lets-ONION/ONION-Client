import { View, Image, StyleSheet, Text } from "react-native";
import { DataResponse, FetchMainResponse } from "../../models/models";

const positive1 = require("../../../assets/positive/1.png");
const negative1 = require("../../../assets/negative/1.png");

const Onions: React.FC<{ data?: DataResponse }> = ({ data }) => {
  if (!data) {
    return <Text>데이터를 불러오는 중입니다...</Text>;
  }

  return (
    <View style={styles.onionsStyle}>
      <View style={styles.onion}>
        <Image source={{ uri: data.pos_onion.image_url }} style={styles.onionStyle} />
        <Text>{data.pos_onion.name}</Text>
      </View>
      <View style={styles.onion}>
        <Image source={{ uri: data.neg_onion.image_url }} style={styles.onionStyle} />
        <Text>{data.neg_onion.name}</Text>
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
