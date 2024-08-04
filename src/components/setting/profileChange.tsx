import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { getBook } from "../../api/book";
import { OnionInfo } from "../../types/onionCard";
import { useState } from "react";
import { useLogin } from "../../store/authStore";
import { putMyProfile } from "../../api/auth";

export const ProfileChange = ({
  setProfile,
  showModal,
}: {
  setProfile: React.Dispatch<React.SetStateAction<string>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { nickname } = useLogin.getState();
  const { loading, data, error } = useFetch(getBook);
  const [selectedOnion, setSelectedOnion] = useState<OnionInfo>({
    can_trade: false,
    onion_image: "",
    onion_type: "",
    quantity: 0,
  });

  const onPressOnion = (onion: OnionInfo) => setSelectedOnion(onion);
  const changeOnionProfile = async () => {
    try {
      putMyProfile(nickname, selectedOnion.onion_image);
      setProfile(selectedOnion.onion_image);
      showModal(false);
    } catch (error) {
      Alert.alert("프로필을 변경하던 중 오류가 발생했어요");
    }
  };

  if (loading) return <ActivityIndicator size={"large"} color={"orange"} />;
  if (error) return <Text>정보를 가져오는데 실패했어요</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>변경할 프로필 양파를 선택해주세요!</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {data.onions.map((onion: OnionInfo) => {
          const isSelected = selectedOnion && selectedOnion === onion;
          return (
            <Pressable
              style={[
                styles.onionContainer,
                isSelected && styles.selectedOnion,
              ]}
              onPress={() => onPressOnion(onion)}
            >
              <Image
                source={{ uri: onion.onion_image }}
                style={styles.onionImage}
              />
            </Pressable>
          );
        })}
      </ScrollView>
      <Pressable style={styles.changeButton} onPress={changeOnionProfile}>
        <Text>확인</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  scrollViewContainer: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  text: {
    fontSize: 17,
    padding: 10,
  },
  onionContainer: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  selectedOnion: {
    backgroundColor: "orange",
  },
  onionImage: {
    width: 40,
    height: 40,
  },
  changeButton: {
    width: "90%",
    backgroundColor: "orange",
    padding: 10,
    alignItems: "center",
    borderRadius: 14,
  },
});
