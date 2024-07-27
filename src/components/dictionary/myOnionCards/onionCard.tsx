import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OnionCardType } from "../../../types/onionCard";

const OnionCard: React.FC<OnionCardType> = (onion: OnionCardType) => {
  console.log(onion.onion_image);
  return (
    <View style={styles.container}>
      <View style={styles.imageAndNameWrapper}>
        <Image source={{ uri: onion.onion_image }} style={styles.image} />
        <Text>{onion.onion_type}</Text>
      </View>
      {onion.can_trade && (
        <TouchableOpacity style={styles.tradeButton}>
          <Text>교환하기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OnionCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 14,
  },
  imageAndNameWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  tradeButton: {
    width: "100%",
    height: 30,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
