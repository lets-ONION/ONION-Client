import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ModalType } from "../../types/common/modalType";

export const CustomModal = ({
  children,
  visible,
  touchOuterContent,
}: ModalType) => {
  const onPressOuterContent = () => touchOuterContent(false);
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <TouchableOpacity
        onPress={onPressOuterContent}
        style={styles.outerContent}
      >
        <TouchableWithoutFeedback
          onPress={() => {}}
          style={styles.innerContentWithoutFeedback}
        >
          <View style={styles.innerContent}>{children}</View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  outerContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContent: {
    width: "90%",
    height: 450,
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 2,
    alignItems: "center",
  },
  innerContentWithoutFeedback: {
    width: "100%",
    height: "100%",
  },
});
