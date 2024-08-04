import { View, Image, StyleSheet, Text } from "react-native";
import { DataResponse, FetchMainResponse } from "../../models/models";

interface Props {
  data?: DataResponse;
  onionName?: boolean;
}

const Onions: React.FC<Props> = ({ data, onionName }) => {
  return (
    <View style={styles.onionsStyle}>
      {data?.pos_onion && (
        <View style={styles.onion}>
          <Image source={{ uri: data.pos_onion.image_url }} style={styles.onionStyle} />
          {onionName && <Text>{data.pos_onion.name}</Text>}
        </View>
      )}
      {data?.neg_onion && (
        <View style={styles.onion}>
          <Image source={{ uri: data.neg_onion.image_url }} style={styles.onionStyle} />
          {onionName && <Text>{data.neg_onion.name}</Text>}
        </View>
      )}
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
    marginBottom: 50,
  }
});

export default Onions;
