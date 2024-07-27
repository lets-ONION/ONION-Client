import { ScrollView, StyleSheet } from "react-native";
import { OnionCardListType, OnionCardType } from "../../../types/onionCard";
import { ExchangeOnion } from "./exchangeOnions";
import { ExchangeOnionListType } from "../../../types/exchangeOnion";

export const ExchangeOnionsList: React.FC<ExchangeOnionListType> = ({
  onions,
  reqOnion,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {onions.map((onion) => {
        return <ExchangeOnion onion={onion} reqOnion={reqOnion} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "column",
    gap: 5,
  },
});
