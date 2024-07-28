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
import { CommentDay } from "../../components/dictionary/commentDay/commentDay";

export default function Dictionary() {
  const [ismodelVisible, setModalVisible] = useState<boolean>(false);
  const [showFriendsOnion, setShowFriendsOnion] = useState<boolean>(false);
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.friendsList}>
        <Text>친구들의 양파 보기</Text>
        <FriendsCardList
          friends={dummyFriendsData.friends}
          setShowFriendsOnion={setShowFriendsOnion}
        />
      </View>
      <CommentDay comment={dummyOnionsData.memo} />
      <Text style={styles.text}>내 양파도감</Text>
      {!dummyOnionsData.onions.length && (
        <View style={styles.noContentWrapper}>
          <Text style={{ color: "gray" }}>아직 도감을 모으지 못했어요 =3</Text>
        </View>
      )}
      <OnionCardList
        onions={dummyOnionsData.onions}
        showFriendsOnion={showFriendsOnion}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    flexDirection: "column",
    alignItems: "center",
    height: 120,
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
  noContentWrapper: {
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
});
