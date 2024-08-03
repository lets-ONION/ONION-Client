import { ScrollView, StyleSheet, View } from "react-native";
import { OnionCardListType, OnionCardType } from "../../../types/onionCard";
import OnionCard from "./onionCard";

export const OnionCardList: React.FC<OnionCardListType> = ({
  onions,
  showFriendsOnion,
  resId,
  fetchData,
}: OnionCardListType) => {
  return (
    <View style={styles.dictionaryContent}>
      {onions.map((onion, idx) => {
        return (
          <OnionCard
            onion={onion}
            key={idx}
            showFriendsOnion={showFriendsOnion}
            resId={resId}
            fetchData={fetchData}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dictionaryContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 70,
  },
});
