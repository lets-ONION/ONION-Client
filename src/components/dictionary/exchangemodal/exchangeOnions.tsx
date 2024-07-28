import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExchangeOnionsType } from "../../../types/exchangeOnion";

export const ExchangeOnion = ({
  onion,
  setShowConfimModal,
  setSelectedOnion,
}: ExchangeOnionsType) => {
  const onPressShowConfimModal = () => {
    setSelectedOnion(onion);
    setShowConfimModal(true);
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: onion.onion_image }} style={styles.image} />
      <Text style={styles.text}>
        현재 {onion.onion_type} : {onion.amount}개
        {onion.can_trade ? `\n교환 후 : ${onion.amount - 5}개 ` : null}
      </Text>
      <TouchableOpacity
        disabled={!onion.can_trade}
        style={{
          ...styles.button,
          backgroundColor: onion.can_trade ? "orange" : "grey",
        }}
        onPress={onPressShowConfimModal}
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
    justifyContent: "space-around",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  button: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 13,
    textAlignVertical: "center",
  },
});
