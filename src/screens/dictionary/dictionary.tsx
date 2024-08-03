import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import OnionCard from "../../components/dictionary/myOnionCards/onionCard";
import { useState } from "react";
import { ExchangeModal } from "../../components/dictionary/exchangemodal/exchangeModal";
import { FriendsCardList } from "../../components/dictionary/friendsCard/friendsCardList";
import { dummyFriendsData } from "../../components/dummyData";
import { OnionCardList } from "../../components/dictionary/myOnionCards/onionCardList";
import { CommentDay } from "../../components/dictionary/commentDay/commentDay";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RequestIndex } from "../../components/dictionary/requestmodal/requestIndex";
import { FriendsRequest } from "../../components/dictionary/friendsCard/friendsreq/friendsRequest";
import { useFetch } from "../../hooks/useFetch";
import { getBook } from "../../api/book";
import { ActivityIndicator } from "react-native-paper";
import { getFriendsList } from "../../api/friends";

export default function Dictionary() {
  const [ismodalVisible, setModalVisible] = useState<boolean>(false);
  const [showFriendsOnion, setShowFriendsOnion] = useState<boolean>(false);
  const { data, loading, fetchData, setData } = useFetch(getBook);
  const friendsList = useFetch(getFriendsList);

  if (loading || friendsList.loading)
    return (
      <ActivityIndicator
        size={"large"}
        color="orange"
        style={styles.activityInd}
      />
    );
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.friendsList}>
        <Text>친구들의 양파 보기</Text>
        {/* <FriendsRequest /> */}
        <FriendsCardList
          friends={friendsList.data}
          setShowFriendsOnion={setShowFriendsOnion}
          setData={setData}
        />
      </View>
      <CommentDay comment={data.status_message} fetchData={fetchData} />
      <View style={styles.requestIconWrapper}>
        <Text>내 양파도감</Text>
        <RequestIndex />
      </View>
      {!data ||
        (!data.onions.length && (
          <View style={styles.noContentWrapper}>
            <Text style={{ color: "gray" }}>
              아직 도감을 모으지 못했어요 =3
            </Text>
          </View>
        ))}
      <OnionCardList onions={data.onions} showFriendsOnion={showFriendsOnion} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  activityInd: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
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
  noContentWrapper: {
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  requestIconWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
});
