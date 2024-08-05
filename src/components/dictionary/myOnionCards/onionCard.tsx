import React, { useState } from "react";
import {
  Alert,
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
import { Feather } from "@expo/vector-icons";
import { putMyProfile } from "../../../api/auth";
import { useLogin } from "../../../store/authStore";

import MainText from "../../mainText";

const OnionCard: React.FC<OnionCardType> = ({
  onion,
  showFriendsOnion,
  resId,
}: OnionCardType) => {
  const [showExchangeModal, setShowExchangeModal] = useState<boolean>(false);
  const onPressExchangeButton = () => setShowExchangeModal(true);
  const { nickname } = useLogin.getState();

  return (
    <View style={styles.container}>
      <View style={styles.imageAndNameWrapper}>
        <Image source={{ uri: onion.onion_image }} style={styles.image} />
        <MainText style={styles.text}>
          {onion.onion_type} ({onion.quantity})
        </MainText>
      </View>
      {showFriendsOnion && onion.can_trade && (
        <TouchableOpacity
          style={styles.tradeButton}
          onPress={onPressExchangeButton}
        >
          <MainText>교환하기</MainText>
        </TouchableOpacity>
      )}
      <Modal
        animationType="slide"
        visible={showExchangeModal}
        transparent={true}
      >
        <ExchangeModal
          resOnion={onion}
          setShowExchangeModal={setShowExchangeModal}
          resId={resId}
        />
      </Modal>
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
    marginVertical: 10,
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
  Feather: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
