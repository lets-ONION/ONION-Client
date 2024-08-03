import {
  Alert,
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
import { useState } from "react";
import { postStatusMessage } from "../../../api/book";

export const NewComment = ({
  myOnionImage,
  nickname,
  setShowWriteModal,
  fetchData,
}: NewCommentType) => {
  const onPressOuterContent = () => setShowWriteModal(false);
  const [content, setContent] = useState<string>("");
  const onPressSubmit = async () => {
    try {
      await postStatusMessage(content);
      Alert.alert("상태메시지 작성", "작성이 완료되었습니다");
      onPressOuterContent();
      await fetchData();
    } catch (error) {
      Alert.alert("오류", "글 작성 중 오류가 발생했습니다.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.myOnionWrapper}>
        <Image source={{ uri: myOnionImage }} style={styles.image} />
        <Text>오늘 {nickname}님의 하루는 어땠나요?</Text>
      </View>
      <TextInput
        style={styles.commentWrapper}
        onChangeText={setContent}
        value={content}
        placeholder="하루를 적어보세요."
        multiline
      />
      <Text style={styles.informText}>한 번 작성한 글은 수정할 수 없어요</Text>
      <Button
        background="orange"
        width={"80%"}
        onPress={onPressSubmit}
        text="작성하기"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
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
