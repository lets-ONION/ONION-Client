import { StyleSheet, View } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { getPushSettings } from "../../api/auth";
import { ActivityIndicator } from "react-native-paper";
import { PushSettingSwitch } from "../../components/pushSetting";

export function PushSetting() {
  const { data, loading, error, fetchData } = useFetch(getPushSettings);
  if (loading || error)
    return <ActivityIndicator size={"large"} color="orange" />;
  return (
    <View style={styles.container}>
      <PushSettingSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
