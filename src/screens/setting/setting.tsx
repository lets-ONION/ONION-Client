import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Profile } from "../../components/setting/profile";
import { Logout } from "../../components/setting/logout";

export default function Setting() {
  return (
    <ScrollView style={styles.container}>
      <Profile />
      <Logout />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    paddingTop: 40,
  },
});
