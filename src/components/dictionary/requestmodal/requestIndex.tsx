import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { CustomModal } from "../../common/modal";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SentReqs } from "./sentReq/sentReqs";
import { ReceivedReqs } from "./receivedReq/receivedReqs";

export const RequestIndex = () => {
  const [showRequestModal, setShowRequestModal] = useState<boolean>(false);
  const [showSentReqs, setShowSentReqs] = useState<boolean>(false);
  const onPressIcon = () => setShowRequestModal(true);
  const onPressSentReqs = () => setShowSentReqs(true);
  const onPressReceivedReqs = () => setShowSentReqs(false);
  return (
    <>
      <MaterialCommunityIcons
        name="mailbox-open-outline"
        size={30}
        onPress={onPressIcon}
      />
      <CustomModal
        touchOuterContent={setShowRequestModal}
        visible={showRequestModal}
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
};

const styles = StyleSheet.create({
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
