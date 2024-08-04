import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "../../../../common/button";
import { useFetch } from "../../../../../hooks/useFetch";
import {
  getFriendRecommends,
  postRequestFriend,
} from "../../../../../api/friends";
import { RecommendFriendType } from "../../../../../types/friends/recommendFriendsType";
import { ActivityIndicator } from "react-native-paper";

export const RecommendFriends = () => {
  const friendsList = useFetch(getFriendRecommends);
  console.log(friendsList.data);
  if (friendsList.loading || friendsList.error)
    return <ActivityIndicator size={"large"} color="orange" />;
  const onpressReqest = (nickname: string, id: number) => {
    Alert.alert(`${nickname}님에게 친구 요청을 할까요?`, "", [
      {
        text: "넹",
        onPress() {
          friendReq(id);
        },
      },
      {
        text: "아니오",
        style: "cancel",
      },
    ]);
  };
  const friendReq = async (id: number) => {
    try {
      await postRequestFriend(id);
      Alert.alert("친구 요청을 보냈어요.");
      await friendsList.fetchData();
    } catch (error) {
      Alert.alert("친구 요청을 보내던 중 오류가 발생했어요.");
    }
  };
  return (
    <View>
      <TouchableWithoutFeedback>
        <ScrollView contentContainerStyle={styles.container}>
          {friendsList.data.data.map((friend: RecommendFriendType) => {
            return (
              <View style={styles.friendContainer}>
                <View style={styles.friendProfileWrapper}>
                  <Image
                    source={{ uri: friend.user_image_url }}
                    style={styles.friendImage}
                  />
                  <Text style={styles.text}>친구 {friend.nickname}</Text>
                </View>
                <Button
                  background="orange"
                  onPress={() =>
                    onpressReqest(friend.nickname, friend.member_id)
                  }
                  text="친구 요청"
                  width={80}
                />
              </View>
            );
          })}
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  text: {
    width: "70%",
  },
  friendContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  friendProfileWrapper: {
    flexDirection: "row",
  },
  friendImage: {
    width: 30,
    height: 30,
  },
});
