import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OnionCardType } from "../../../types/onionCard";
import { ExchangeModal } from "../exchangemodal/exchangeModal";

const OnionCard: React.FC<OnionCardType> = ({
  onion,
  showFriendsOnion,
}: OnionCardType) => {
  const [showExchangeModal, setShowExchangeModal] = useState<boolean>(false);
  const onPressExchangeButton = () => setShowExchangeModal(true);
  return (
    <View style={styles.container}>
      <View style={styles.imageAndNameWrapper}>
        <Image source={{ uri: onion.onion_image }} style={styles.image} />
        <Text style={styles.text}>
          {onion.onion_type} ({onion.amount}/5)
        </Text>
      </View>
      {showFriendsOnion && onion.can_trade && (
        <TouchableOpacity
          style={styles.tradeButton}
          onPress={onPressExchangeButton}
        >
          <Text>교환하기</Text>
        </TouchableOpacity>
      )}
      {showExchangeModal && (
        <Modal animationType="slide">
          <ExchangeModal reqOnion={onion.onion_type} />
        </Modal>
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
