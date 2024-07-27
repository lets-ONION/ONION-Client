import { StyleSheet, View } from "react-native";
import { ExchangeOnionsList } from "./exchangeOnionsList";
import { OnionCardListType } from "../../../types/onionCard";
import { ExchangeOnionType } from "../../../types/exchangeOnion";
import { dummyOnionsData } from "../../dummyData";

export const ExchangeModal = ({ reqOnion }: ExchangeOnionType) => {
  return (
    <View style={styles.container}>
      <ExchangeOnionsList onions={dummyOnionsData.onions} reqOnion={reqOnion} />
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
