import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useIsLogin } from "../../store/authStore";

export function Logout() {
  const logout = useIsLogin((state) => state.setIsLogin);
  const onPressLogout = () => {
    Alert.alert("로그아웃", "로그아웃 하시나요?", [
      {
        text: "넹",
        onPress: () => {
          Alert.alert("로그아웃", "로그아웃 되었습니다.\n다음에 또 만나요!");
          logout();
        },
        style: "default",
      },
      {
        text: "아니오",
        style: "cancel",
      },
    ]);
  };
  return (
    <Pressable style={styles.container} onPress={onPressLogout}>
      <MaterialIcons name="logout" size={30} color="black" />
      <Text style={styles.text}>로그아웃</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  text: {
    fontSize: 17,
  },
});
