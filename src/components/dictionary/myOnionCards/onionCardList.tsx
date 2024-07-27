import { ScrollView, StyleSheet } from "react-native";
import { OnionCardListType, OnionCardType } from "../../../types/onionCard";
import OnionCard from "./onionCard";

export const OnionCardList: React.FC<OnionCardListType> = ({
  onions,
}: OnionCardListType) => {
  return (
    <ScrollView
      contentContainerStyle={styles.dictionaryContent}
      showsVerticalScrollIndicator={false}
    >
      {onions.map((onion: OnionCardType, idx) => {
        return (
          <OnionCard
            onion_type={onion.onion_type}
            amount={onion.amount}
            can_trade={onion.can_trade}
            onion_image={onion.onion_image}
            key={idx}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dictionaryContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});
