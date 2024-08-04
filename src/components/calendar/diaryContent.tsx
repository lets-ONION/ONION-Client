import { ActivityIndicator } from "react-native-paper";
import { getDiaryDetail } from "../../api/calendar";
import { useFetch } from "../../hooks/useFetch";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLogin } from "../../store/authStore";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { DiaryDetailScreenProps } from "../../screens/diary/diaryDetail";
import { MessageBubble } from "./messageBubble";

export function DiaryContent({ navigation, route }: DiaryDetailScreenProps) {
  const [data, setData] = useState<string>("현재 쓴 일기가 없어요");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const { profileImage } = useLogin.getState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getDiaryDetail(route.params.date);
        console.log(data);
        if (data.note) setData(data.note);
        setLoading(false);
      } catch (error) {
        setError(error as AxiosError);
        setData("해당 날에 작성된 긍정일기가 없어요ㅠ.ㅜ");
        setLoading(false);
      }
    };

    fetchData();
  }, [route.params.date]);

  useEffect(() => {
    if (error && error.response?.status !== 404) {
      Alert.alert("오류", "일기를 불러들이는 중 오류가 발생했어요");
      navigation.pop();
    }
  }, [error, navigation]);

  if (loading)
    return (
      <ActivityIndicator size="large" color="orange" style={styles.loading} />
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <MessageBubble text={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
  },
  container: {
    width: "100%",
    padding: 20,
  },
  errorText: {
    width: "100%",
    height: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 17,
    color: "gray",
  },
  loading: {
    position: "absolute",
    right: "50%",
    top: "50%",
  },
});
