import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { FriendsCardList } from "../../components/dictionary/friendsCard/friendsCardList";
import { OnionCardList } from "../../components/dictionary/myOnionCards/onionCardList";
import { CommentDay } from "../../components/dictionary/commentDay/commentDay";
import { RequestIndex } from "../../components/dictionary/requestmodal/requestIndex";
import { FriendsRequest } from "../../components/dictionary/friendsCard/friendsreq/friendsRequest";
import { useFetch } from "../../hooks/useFetch";
import { getBook } from "../../api/book";
import { ActivityIndicator } from "react-native-paper";
import { getFriendsList } from "../../api/friends";

import MainText from "../../components/mainText";

export default function Dictionary() {
  const [ismodalVisible, setModalVisible] = useState<boolean>(false);
  const [showFriendsOnion, setShowFriendsOnion] = useState<boolean>(false);
  const bookList = useFetch(getBook);
  const friendsList = useFetch(getFriendsList);

  if (bookList.loading || friendsList.loading)
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
        <MainText>친구들의 양파 보기</MainText>
        <FriendsRequest />
        <FriendsCardList
          friends={friendsList.data}
          setShowFriendsOnion={setShowFriendsOnion}
          setData={bookList.setData}
        />
      </View>
      <CommentDay
        comment={bookList.data.status_message}
        fetchData={bookList.fetchData}
        showFriendsOnion={showFriendsOnion}
      />
      <View style={styles.requestIconWrapper}>
        <MainText>내 양파도감</MainText>
        <RequestIndex />
      </View>
      {!bookList.data ||
        (!bookList.data.onions.length && (
          <View style={styles.noContentWrapper}>
            <MainText style={{ color: "gray" }}>
              아직 도감을 모으지 못했어요 =3
            </MainText>
          </View>
        ))}
      <OnionCardList
        onions={bookList.data.onions}
        showFriendsOnion={showFriendsOnion}
        resId={bookList.data.resId}
        fetchData={bookList.fetchData}
      />
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
    width: "100%",
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
