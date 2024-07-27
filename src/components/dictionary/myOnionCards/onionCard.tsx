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

const OnionCard: React.FC<OnionCardType> = ({
  onion,
  showFriendsOnion,
}: OnionCardType) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageAndNameWrapper}>
        <Image source={{ uri: onion.onion_image }} style={styles.image} />
        <Text style={styles.text}>
          {onion.onion_type} ({onion.amount}/5)
        </Text>
      </View>
      {showFriendsOnion && onion.can_trade && (
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
    width: 160,
    height: 160,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  imageAndNameWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 16,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
  tradeButton: {
    width: "100%",
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
