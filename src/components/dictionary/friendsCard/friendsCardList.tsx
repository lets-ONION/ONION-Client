import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { FriendCardListType, FriendCardType } from "../../../types/friendcard";
import { FriendCard } from "./friendCard";
import { useFetch } from "../../../hooks/useFetch";
import { getUser } from "../../../api/auth";
import { useLogin } from "../../../store/authStore";

export const FriendsCardList: React.FC<FriendCardListType> = ({
  friends,
  setShowFriendsOnion,
  setData,
}) => {
  const { nickname, profileImage, id } = useLogin.getState();
  return (
    <ScrollView
      style={styles.friendsListWrapper}
      contentContainerStyle={styles.friendsList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <FriendCard
        setData={setData}
        friend={{
          member_id: id,
          nickname: nickname + "(나)",
          image_url: profileImage,
        }}
        isMyProfile={true}
        setShowFriendsOnion={setShowFriendsOnion}
      />
      {friends &&
        friends.map((friend, idx) => {
          return (
            <FriendCard
              friend={friend}
              setShowFriendsOnion={setShowFriendsOnion}
              isMyProfile={false}
              setData={setData}
              key={idx}
            />
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  friendsListWrapper: {
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  friendsList: {
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: 5,
  },
});
