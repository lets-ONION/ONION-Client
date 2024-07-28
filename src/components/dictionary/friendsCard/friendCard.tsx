import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FriendCardType } from "../../../types/friendcard";

export const FriendCard: React.FC<FriendCardType> = ({
  friend,
  isMyProfile,
  setShowFriendsOnion,
}) => {
  const onPressFriendProfile = () =>
    isMyProfile ? setShowFriendsOnion(false) : setShowFriendsOnion(true);

  return (
    <TouchableOpacity style={styles.container} onPress={onPressFriendProfile}>
      <Image
        style={styles.profileImage}
        source={{ uri: friend.profile_image }}
      />
      <Text>{friend.nickname}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 110,
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
