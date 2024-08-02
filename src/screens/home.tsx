import { Text, View, StyleSheet } from "react-native";
import useToken from "../hooks/useToken";
import Onions from "../components/main/Onions";
import { getFormattedDate } from '../utils/dateUtils';
import Button from "../components/main/Button";

export function Home() {
  const [token] = useToken();

  return (
    <View style={styles.homeStyle}>
      <Text style={styles.date}>{getFormattedDate()}</Text>
      <Onions />
      <Button>양파에게 말하기</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    padding: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  date: {
    marginVertical: 70,
    marginBottom: 40,
    fontSize: 20,
  }
});