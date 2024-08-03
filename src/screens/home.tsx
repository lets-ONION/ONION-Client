import { Text, View, StyleSheet } from "react-native";
import useToken from "../hooks/useToken";
import Onions from "../components/main/Onions";
import { getFormattedDate } from '../utils/dateUtils';
import Button from "../components/main/Button";
import { useState } from "react";
import { useNavigation, NavigationProp  } from "@react-navigation/native";
import { HomeStackParamList } from "./MainTab";

export function Home() {
  const [token] = useToken();
  const [is_spoken, setis_spoken] = useState(false);
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleButtonPress = () => {
    if (!is_spoken) {
      navigation.navigate("Note");
    }
  };

  return (
    <View style={styles.homeStyle}>
      <Text style={styles.date}>{getFormattedDate()}</Text>
      <Onions />
      <Button onPress={handleButtonPress}>
        {is_spoken ? '이미 양파에게 말했어요.' : '양파에게 말하기'}
      </Button>
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