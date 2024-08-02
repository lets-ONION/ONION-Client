import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomModal } from "../../../common/modal";
import { useState } from "react";

export function FriendsRequest() {
  const [showFriendsModal, setShowFriendsModal] = useState<boolean>(false);
  const [showSentReqs, setShowSentReqs] = useState<boolean>(false);
  const onPressIcon = () => setShowFriendsModal(true);
  const onPressReceivedReqs = () => setShowSentReqs(false);
  const onPressSentReqs = () => setShowSentReqs(true);
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
              onPress={onPressReceivedReqs}
            >
              <Text>받은 요청</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={onPressSentReqs}>
              <Text>보낸 요청</Text>
            </TouchableOpacity>
          </View>
          {showSentReqs ? <SentReqs /> : <ReceivedReqs />}
        </View>
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
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
