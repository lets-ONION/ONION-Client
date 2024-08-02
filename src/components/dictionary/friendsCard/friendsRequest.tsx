import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { CustomModal } from "../../common/modal";
import { useState } from "react";

export function FriendsRequest() {
  const [showFriendsModal, setShowFriendsModal] = useState<boolean>(false);
  const [showSentReqs, setShowSentReqs] = useState<boolean>(false);
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
        <Text>dman</Text>
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 0,
  },
});
