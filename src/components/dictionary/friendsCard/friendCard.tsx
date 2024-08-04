import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FriendCardType } from "../../../types/friendcard";
import { useFetch } from "../../../hooks/useFetch";
import { getFriendsBook } from "../../../api/friends";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import MainText from "../../mainText";

export const FriendCard: React.FC<FriendCardType> = ({
  friend,
  isMyProfile,
  setShowFriendsOnion,
  setData,
}) => {
  const onPressFriendProfile = async () => {
    isMyProfile ? setShowFriendsOnion(false) : setShowFriendsOnion(true);
    friendInfo();
  };
  const friendInfo = useCallback(() => {
    const fetchData = async () => {
      try {
        const friendsData = await getFriendsBook(friend.member_id);
        console.log("fd data", friendsData);
        setData({ ...friendsData, resId: friend.member_id });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPressFriendProfile}>
      <Image style={styles.profileImage} source={{ uri: friend.image_url }} />
      <MainText>{friend.nickname}</MainText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 120,
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
