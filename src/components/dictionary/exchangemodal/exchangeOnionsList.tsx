import { ScrollView, StyleSheet, View } from "react-native";
import { OnionCardListType, OnionCardType } from "../../../types/onionCard";
import { ExchangeOnion } from "./exchangeOnions";
import { ExchangeOnionListType } from "../../../types/exchangeOnion";

export const ExchangeOnionsList: React.FC<ExchangeOnionListType> = ({
  onions,
  reqOnion,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View onStartShouldSetResponder={() => true} style={{ width: "100%" }}>
        {onions.map((onion, idx) => {
          return <ExchangeOnion onion={onion} reqOnion={reqOnion} key={idx} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    flexWrap: "wrap",
    gap: 5,
  },
});
