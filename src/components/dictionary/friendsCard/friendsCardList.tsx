import { ScrollView, StyleSheet, View } from "react-native";
import { FriendCardListType, FriendCardType } from "../../../types/friendcard";
import { FriendCard } from "./friendCard";

export const FriendsCardList: React.FC<FriendCardListType> = ({
  friends,
}: FriendCardListType) => {
  return (
    <ScrollView
      style={styles.friendsListWrapper}
      contentContainerStyle={styles.friendsList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {friends.map((friend) => {
        return (
          <FriendCard
            id={friend.id}
            profile_image={friend.profile_image}
            nickname={friend.nickname}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  friendsListWrapper: {
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  friendsList: {
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: 5,
  },
});
