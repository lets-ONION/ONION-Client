import { ActivityIndicator } from "react-native-paper";
import { getDiaryDetail } from "../../api/calendar";
import { useFetch } from "../../hooks/useFetch";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLogin } from "../../store/authStore";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { DiaryDetailScreenProps } from "../../screens/diary/diaryDetail";

export function DiaryContent({ navigation, route }: DiaryDetailScreenProps) {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const { profileImage } = useLogin.getState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiaryDetail(route.params.date);
        setData(data);
        console.log(data);
      } catch (error) {
        setError(error as AxiosError);
        console.log("일기 에러", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    if (error?.response?.status !== 404) {
      Alert.alert("오류", "일기를 불러들이는 중 오류가 발생했어요");
      navigation.pop();
    }
  }, []);

  if (loading) return <ActivityIndicator size="large" color="orange" />;
  if (error?.response?.status === 404)
    return (
      <Text style={styles.errorText}>해당 날에 작성된 긍정일기가 없어요</Text>
    );

  return (
    <ScrollView>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text>{data}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  container: {
    width: "100%",
  },
  errorText: {
    width: "100%",
    height: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 17,
    color: "gray",
  },
});
