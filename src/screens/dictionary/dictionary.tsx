import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import OnionCard from "../../components/dictionary/myOnionCards/onionCard";
import { useState } from "react";
import { ExchangeModal } from "../../components/dictionary/exchangemodal/exchangeModal";
import { FriendsCardList } from "../../components/dictionary/friendsCard/friendsCardList";
import {
  dummyFriendsData,
  dummyFriendsOnion,
  dummyOnionsData,
} from "../../components/dummyData";
import { OnionCardList } from "../../components/dictionary/myOnionCards/onionCardList";

export default function Dictionary() {
  const [ismodelVisible, setModalVisible] = useState<boolean>(false);
  const [showFriendsOnion, setShowFriendsOnion] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text>친구들의 양파 보기</Text>
      <FriendsCardList
        friends={dummyFriendsData.friends}
        setShowFriendsOnion={setShowFriendsOnion}
      />
      <Text style={styles.text}>내 양파도감</Text>
      <OnionCardList
        onions={dummyOnionsData.onions}
        showFriendsOnion={showFriendsOnion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    backgroundColor: "white",
  },
  dictionaryContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  friendsList: {
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: 5,
  },
  friendsListWrapper: {
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  text: {
    padding: 20,
  },
});
