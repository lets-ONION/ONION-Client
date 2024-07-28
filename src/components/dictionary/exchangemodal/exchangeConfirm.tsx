import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExchangeConfirmModalType } from "../../../types/exchangeOnion";
import { FontAwesome6 } from "@expo/vector-icons";

export const ExchangeConfirm: React.FC<ExchangeConfirmModalType> = ({
  reqOnion,
  resOnion,
  setShowExchangeModal,
}) => {
  console.log(reqOnion, resOnion);
  return (
    <View style={styles.container}>
      <Text>내 양파와 상대의 양파를 교환합니다.</Text>
      <View style={styles.exchangeContainer}>
        <View style={styles.onionWrapper}>
          <Text>보내는 양파</Text>
          <Image source={{ uri: reqOnion.onion_image }} style={styles.image} />
          <Text>{reqOnion.onion_type}</Text>
        </View>
        <FontAwesome6 name="left-right" size={30} />
        <View style={styles.onionWrapper}>
          <Text>받는 양파</Text>
          <Image source={{ uri: reqOnion.onion_image }} style={styles.image} />
          <Text>{reqOnion.onion_type}</Text>
        </View>
      </View>
      <View style={styles.confirmWrapper}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "orange" }}
        >
          <Text style={styles.text}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "orange" }}
        >
          <Text style={styles.text}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  exchangeContainer: {
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  onionWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  confirmWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 100,
    padding: 10,
    borderRadius: 14,
  },
  text: {
    textAlign: "center",
  },
});
