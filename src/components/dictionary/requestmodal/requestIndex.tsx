import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { CustomModal } from "../../common/modal";
import { View } from "react-native";
import { SentReqs } from "./sentReqs";
import { ReceivedReqs } from "./receivedReqs";

export const RequestIndex = () => {
  const [showRequestModal, setShowRequestModal] = useState<boolean>(false);
  const [showSentReqs, setShowSentReqs] = useState<boolean>(false);
  const onPressIcon = () => setShowRequestModal(true);
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
        {showSentReqs ? <SentReqs /> : <ReceivedReqs />}
      </CustomModal>
    </>
  );
};
