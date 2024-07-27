import { ScrollView, StyleSheet } from "react-native";
import { OnionCardListType, OnionCardType } from "../../../types/onionCard";
import OnionCard from "./onionCard";

export const OnionCardList: React.FC<OnionCardListType> = ({
  onions,
  showFriendsOnion,
}: OnionCardListType) => {
  return (
    <ScrollView
      contentContainerStyle={styles.dictionaryContent}
      showsVerticalScrollIndicator={false}
    >
      {onions.map((onion, idx) => {
        return (
          <OnionCard
            onion={onion}
            key={idx}
            showFriendsOnion={showFriendsOnion}
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
