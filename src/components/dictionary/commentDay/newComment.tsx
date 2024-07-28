import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NewCommentType } from "../../../types/comment";
import { Button } from "../../common/button";

export const NewComment = ({
  myOnionImage,
  nickname,
  setShowWriteModal,
}: NewCommentType) => {
  const onPressOuterContent = () => setShowWriteModal(false);
  return (
    <TouchableOpacity onPress={onPressOuterContent} style={styles.outerContent}>
      <TouchableWithoutFeedback
        onPress={() => {}}
        style={styles.innerContentWithoutFeedback}
      >
        <View style={styles.innerContent}>
          <View style={styles.myOnionWrapper}>
            <Image source={{ uri: myOnionImage }} style={styles.image} />
            <Text>오늘 {nickname}님의 하루는 어땠나요?</Text>
          </View>
          <TextInput style={styles.commentWrapper} multiline />
          <Text style={styles.informText}>
            한 번 작성한 글은 수정할 수 없어요
          </Text>
          <Button
            background="orange"
            width={"80%"}
            onPress={() => {}}
            text="작성하기"
          />
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
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
  myOnionWrapper: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  commentWrapper: {
    width: "80%",
    height: 200,
    backgroundColor: "lightgray",
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
  },
  informText: {
    width: "80%",
    paddingLeft: 10,
    textAlign: "left",
    color: "gray",
  },
});
