import { StyleSheet, View } from "react-native";
import { ExchangeOnionsList } from "./exchangeOnionsList";
import { OnionCardListType } from "../../../types/onionCard";

export const ExchangeModal = ({ onions }: OnionCardListType) => {
  return (
    <View style={styles.container}>
      <ExchangeOnionsList onions={onions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    justifyContent: "center",
  },
});
