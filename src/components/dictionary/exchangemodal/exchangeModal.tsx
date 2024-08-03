import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ExchangeOnionsList } from "./exchangeOnionsList";
import { OnionCardListType } from "../../../types/onionCard";
import {
  ExchangeOnionType,
  OnionsInfo,
} from "../../../types/exchange/exchangeOnion";
import { dummyOnionsData } from "../../dummyData";
import { useState } from "react";
import { ExchangeConfirm } from "./exchangeConfirm";

export const ExchangeModal = ({
  reqOnion,
  setShowExchangeModal,
}: ExchangeOnionType) => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const onPressOuterContent = () => setShowExchangeModal(false);
  const [selectedOnion, setSelectedOnion] = useState<OnionsInfo>({
    quantity: 0,
    can_trade: false,
    onion_image: "",
    onion_type: "",
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPressOuterContent}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.exchangeListWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>내 양파와 교환하기</Text>
          </View>
          {showConfirmModal ? (
            <ExchangeConfirm
              reqOnion={reqOnion}
              resOnion={selectedOnion}
              setShowExchangeModal={setShowExchangeModal}
            />
          ) : (
            <ExchangeOnionsList
              onions={dummyOnionsData.onions}
              reqOnion={reqOnion}
              setShowConfimModal={setShowConfirmModal}
              setSelectedOnion={setSelectedOnion}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  exchangeListWrapper: {
    width: 330,
    height: 400,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
  },
  textWrapper: {
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
  },
});
