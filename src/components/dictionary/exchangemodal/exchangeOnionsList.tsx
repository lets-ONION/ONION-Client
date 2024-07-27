import { ScrollView, StyleSheet } from "react-native";
import { OnionCardListType, OnionCardType } from "../../../types/onionCard";
import { ExchangeOnions } from "./exchangeOnions";

export const ExchangeOnionsList: React.FC<OnionCardListType> = ({ onions }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {onions.map((onion) => {
        return <ExchangeOnions onion={onion} />;
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
