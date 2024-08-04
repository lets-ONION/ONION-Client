import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "../common/button";
import { useState } from "react";
import { patchUserNickname } from "../../api/auth";
import { LoginStackParamList } from "../../screens/loginStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLogin } from "../../store/authStore";

import MainText from "../mainText";

type NicknameScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  "NicknameSetting"
>;

export function Nickname({ navigation, route }: NicknameScreenProps) {
  const [nickname, setNickname] = useState<string>("");
  const [unvalid, setUnvalid] = useState<boolean>(false);
  const setLogin = useLogin((state) => state.setIsLogin);
  const changeNickname = useLogin((state) => state.setNickname);
  const regex = /^.{2,10}/;
  const onPressSubmit = async () => {
    if (!regex.test(nickname)) {
      console.log(nickname);
      setUnvalid(true);
      return;
    }
    try {
      await patchUserNickname(nickname);
      changeNickname(nickname);
      setLogin();
    } catch (error) {
      Alert.alert("오류", "닉네임 설정 과정에서 오류가 발생했습니다.");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://imgur.com/4mjrwWX.png" }}
        style={styles.image}
      />
      <View style={styles.nicknameInputWrapper}>
        <MainText style={styles.text}>닉네임을 입력해주세요!</MainText>
        <TextInput
          style={styles.input}
          value={nickname}
          onChangeText={setNickname}
          placeholder="닉네임 입력하기"
        />
      </View>
      <Button
        background="orange"
        onPress={onPressSubmit}
        text="확인"
        width={"50%"}
      />
      {unvalid && (
        <MainText style={styles.unvalid}>닉네임은 2-10글자까지만 가능해요!</MainText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  nicknameInputWrapper: {
    padding: 40,
  },
  text: {
    fontSize: 17,
  },
  input: {
    fontSize: 17,
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },
  unvalid: {
    fontSize: 15,
    marginTop: 10,
    color: "crimson",
  },
});
