import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ExchangeConfirmModalType } from "../../../types/exchange/exchangeOnion";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button } from "../../common/button";
import { postTrade } from "../../../api/book";

export const ExchangeConfirm: React.FC<ExchangeConfirmModalType> = ({
  reqOnion,
  resOnion,
  setShowExchangeModal,
  resId,
}) => {
  const onPressConfirm = async () => {
    try {
      console.log(resId, reqOnion.onion_type, resOnion.onion_type);
      await postTrade(resId, reqOnion.onion_type, resOnion.onion_type);
      setShowExchangeModal(false);
    } catch (error) {
      console.log(error);
      Alert.alert("교환하는 중에 에러가 발생했어요!");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>내 양파와 상대의 양파를 교환합니다.</Text>
      <View style={styles.exchangeContainer}>
        <View style={styles.onionWrapper}>
          <Text>보내는 양파</Text>
          <Image
            source={{ uri: `${reqOnion.onion_image}.png` }}
            style={styles.image}
          />
          <Text>{reqOnion.onion_type}</Text>
        </View>
        <FontAwesome6 name="left-right" size={30} />
        <View style={styles.onionWrapper}>
          <Text>받는 양파</Text>
          <Image
            source={{ uri: `${resOnion.onion_image}.png` }}
            style={styles.image}
          />
          <Text>{resOnion.onion_type}</Text>
        </View>
      </View>
      <View style={styles.confirmWrapper}>
        <Button
          width={100}
          background="lightgray"
          text="취소"
          onPress={() => setShowExchangeModal(false)}
        />
        <Button
          background="orange"
          text="확인"
          onPress={onPressConfirm}
          width={100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  exchangeContainer: {
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  onionWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
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
    fontSize: 16,
    paddingBottom: 20,
  },
});
