import { ScrollView, StyleSheet, View } from "react-native";
import { FriendCardListType, FriendCardType } from "../../../types/friendcard";
import { FriendCard } from "./friendCard";
import { dummyMyProfile } from "../../dummyData";

export const FriendsCardList: React.FC<FriendCardListType> = ({
  friends,
  setShowFriendsOnion,
}) => {
  return (
    <ScrollView
      style={styles.friendsListWrapper}
      contentContainerStyle={styles.friendsList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <FriendCard
        friend={dummyMyProfile}
        isMyProfile={true}
        setShowFriendsOnion={setShowFriendsOnion}
      />
      {friends.map((friend, idx) => {
        return (
          <FriendCard
            friend={friend}
            setShowFriendsOnion={setShowFriendsOnion}
            isMyProfile={false}
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
