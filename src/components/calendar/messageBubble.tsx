import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { putDiaryDetail } from "../../api/calendar";

export const MessageBubble = ({
  text,
  showEditor,
  setShowEditor,
  fetchData,
  date,
}: {
  text: string;
  showEditor: boolean;
  setShowEditor: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
  date: string;
}) => {
  const [firstNote, setFirstNote] = useState<string>(text);
  const [note, setNote] = useState<string>(text);
  const onPressConfirm = () => {
    Alert.alert("수정", "수정하시겠어요?", [
      {
        text: "네",
        onPress: editConfirm,
      },
      {
        text: "아니오",
        style: "cancel",
      },
    ]);
  };
  const editConfirm = async () => {
    try {
      await putDiaryDetail(date, note);
      await fetchData();
      setShowEditor(false);
      Alert.alert("수정이 완료되었어요.");
    } catch (error) {
      Alert.alert("수정 중에 오류가 발생했어요");
    }
  };
  const onPressCancel = () => {
    Alert.alert("취소", "취소하시겠어요?", [
      {
        text: "네",
        onPress: () => {
          setNote(firstNote);
          setShowEditor(false);
        },
      },
      {
        text: "아니오",
        style: "cancel",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.speechBubble}>
        {showEditor ? (
          <>
            <TextInput
              style={styles.text}
              value={note}
              onChangeText={setNote}
            />
            <View style={styles.editButton}>
              <MaterialIcons
                name="done"
                size={24}
                color="orange"
                onPress={onPressConfirm}
              />
              <Feather
                name="x"
                size={24}
                color="crimson"
                onPress={onPressCancel}
              />
            </View>
          </>
        ) : (
          <Text style={styles.text}>{note}</Text>
        )}
        <View style={styles.triangle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  speechBubble: {
    width: "100%",
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginTop: 30,
  },
  text: {},
  triangle: {
    position: "absolute",
    top: 10,
    left: 50,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff",
    marginLeft: -20,
    marginTop: -20,
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 10,
    gap: 15,
    flexDirection: "row",
  },
});
