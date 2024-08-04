import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomModal } from "../../../common/modal";
import { useState } from "react";
import { RecommendFriends } from "./recommendFriends/recommendFriends";
import { RequestedFriends } from "./requestedFriends/requestedFriends";

export function FriendsRequest() {
  const [showFriendsModal, setShowFriendsModal] = useState<boolean>(false);
  const [showRecommendList, setShowRecommendList] = useState<boolean>(true);
  const onPressRecommendList = () => setShowRecommendList(true);
  const onPressRequested = () => setShowRecommendList(false);
  const onPressIcon = () => setShowFriendsModal(true);
  return (
    <>
      <FontAwesome
        name="address-book-o"
        size={24}
        color="black"
        style={styles.icon}
        onPress={onPressIcon}
      />
      <CustomModal
        touchOuterContent={setShowFriendsModal}
        visible={showFriendsModal}
      >
        <View style={styles.container}>
          <View style={styles.selectWrapper}>
            <TouchableOpacity
              style={{ ...styles.menu, borderRightWidth: 2 }}
              onPress={onPressRecommendList}
            >
              <Text>추천하는 친구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={onPressRequested}>
              <Text>보낸 요청</Text>
            </TouchableOpacity>
          </View>
          {showRecommendList ? <RecommendFriends /> : <RequestedFriends />}
        </View>
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  selectWrapper: {
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  menu: {
    width: "50%",
    alignItems: "center",
    padding: 15,
  },
});
