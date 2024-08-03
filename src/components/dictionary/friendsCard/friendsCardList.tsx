import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { FriendCardListType, FriendCardType } from "../../../types/friendcard";
import { FriendCard } from "./friendCard";
import { dummyMyProfile } from "../../dummyData";
import { useFetch } from "../../../hooks/useFetch";
import { getUser } from "../../../api/auth";

export const FriendsCardList: React.FC<FriendCardListType> = ({
  friends,
  setShowFriendsOnion,
  setData,
}) => {
  const myProfile = useFetch(getUser);
  if (myProfile.loading)
    return <ActivityIndicator size={"large"} color={"orange"} />;
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
          member_id: myProfile.data.data.member_id,
          nickname: myProfile.data.data.nickname,
          profile_image: "https://imgur.com/vfcZzfs",
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
