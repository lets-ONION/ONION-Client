import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { getUser } from "../../api/auth";
import { useFetch } from "../../hooks/useFetch";
import { useLogin } from "../../store/authStore";

export function Profile() {
  const { nickname, profileImage } = useLogin.getState();
  return (
    <View style={styles.container}>
      <View style={styles.profileImageWrapper}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </View>
      <View style={styles.profile}>
        <Text style={styles.nickname}>{nickname}</Text>
      </View>
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
