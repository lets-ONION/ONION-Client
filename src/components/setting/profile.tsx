import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useLogin } from "../../store/authStore";
import { CustomModal } from "../common/modal";
import { ProfileChange } from "./profileChange";

import MainText from "../mainText";

export function Profile() {
  const { nickname: initialNickname, profileImage: initialProfileImage } =
    useLogin.getState();
  const [nickname, setNickname] = useState(initialNickname);
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [showProfileChange, setShowProfileChange] = useState<boolean>(false);
  const onPressProfile = () => setShowProfileChange(true);
  useFocusEffect(
    useCallback(() => {
      const { nickname: refreshNickname, profileImage: refreshProfile } =
        useLogin.getState();
      setNickname(refreshNickname);
      setProfileImage(refreshProfile);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.profileImageWrapper} onPress={onPressProfile}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </Pressable>
      <View style={styles.profile}>
        <MainText style={styles.nickname}>{nickname}</MainText>
      </View>
      <CustomModal
        visible={showProfileChange}
        touchOuterContent={setShowProfileChange}
      >
        <ProfileChange
          setProfile={setProfileImage}
          showModal={setShowProfileChange}
        />
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    padding: 20,
    height: 150,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profileImageWrapper: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    backgroundColor: "lightgray",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 70,
    height: 70,
  },
  profile: {
    width: "50%",
    alignItems: "center",
  },
  nickname: {
    fontSize: 20,
  },
});
