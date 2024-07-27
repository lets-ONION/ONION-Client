import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ExchangeOnionsList } from "./exchangeOnionsList";
import { OnionCardListType } from "../../../types/onionCard";
import { ExchangeOnionType } from "../../../types/exchangeOnion";
import { dummyOnionsData } from "../../dummyData";

export const ExchangeModal = ({
  reqOnion,
  setShowExchangeModal,
}: ExchangeOnionType) => {
  const onPressOuterContent = () => setShowExchangeModal(false);
  return (
    <TouchableOpacity style={styles.container} onPress={onPressOuterContent}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.exchangeListWrapper}>
          <ExchangeOnionsList
            onions={dummyOnionsData.onions}
            reqOnion={reqOnion}
          />
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
  },
});
