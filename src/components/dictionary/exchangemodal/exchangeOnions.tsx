import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExchangeOnionsType } from "../../../types/exchangeOnion";

export const ExchangeOnion = ({ onion }: ExchangeOnionsType) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: onion.onion_image }} style={styles.image} />
      <Text>
        {onion.onion_type} : {onion.amount}개
      </Text>
      <TouchableOpacity
        disabled={!onion.can_trade}
        style={onion.can_trade ? styles.button : styles.buttonDisabled}
      >
        <Text>교환하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  image: {
    width: 40,
    height: 40,
  },
  buttonDisabled: {
    width: 50,
    backgroundColor: "grey",
  },
  button: {
    width: 50,
    backgroundColor: "orange",
  },
});
