import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommentType } from "../../../types/comment";
import { useState } from "react";
import { NewComment } from "./newComment";
import { dummyMyProfile } from "../../dummyData";
import { CustomModal } from "../../common/modal";

export const CommentDay = ({
  comment,
  fetchData,
  showFriendsOnion,
}: CommentType) => {
  const [showWriteModal, setShowWriteModal] = useState<boolean>(false);
  const onPressNewComment = () => {
    if (!showFriendsOnion) setShowWriteModal(true);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.commentWrapper} onPress={onPressNewComment}>
        {comment ? (
          <Text>{comment}</Text>
        ) : (
          <Text>📝 오늘 상태를 한 마디로 하자면? 📝</Text>
        )}
      </Pressable>
      <View style={styles.commentArrow} />
      <CustomModal
        visible={showWriteModal}
        touchOuterContent={setShowWriteModal}
      >
        <NewComment
          setShowWriteModal={setShowWriteModal}
          myOnionImage={dummyMyProfile.profile_image}
          nickname={dummyMyProfile.nickname}
          fetchData={fetchData}
        />
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  commentWrapper: {
    width: "100%",
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  commentArrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderTopWidth: 20,
    borderRightWidth: 14,
    borderRightColor: "transparent",
    borderBottomColor: "lightgray",
    borderTopColor: "lightgray",
    bottom: -10,
    left: 0,
  },
});
