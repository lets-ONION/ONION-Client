import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getUser } from "../../api/auth";
import { useFetch } from "../../hooks/useFetch";

export function Profile() {
  const { result, loading, error } = useFetch(getUser);
  console.log(result, loading, error);
  useState(() => {});
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/cpH5jvA.png" }}
        style={styles.profileImage}
      />
      <View style={styles.profile}>
        <Text style={styles.nickname}>nickname</Text>
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
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profileImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    backgroundColor: "gray",
    borderRadius: 100,
  },
  profile: {
    width: "50%",
    alignItems: "center",
  },
  nickname: {
    fontSize: 20,
  },
});
