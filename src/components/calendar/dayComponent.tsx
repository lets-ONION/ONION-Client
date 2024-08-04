import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { DiaryScreenProps } from "../../screens/diary/diary";
import { DayComponentType } from "../../types/calendar/calendar";

export const DayComponent = ({
  date,
  state,
  marking,
  navigation,
  route,
}: DayComponentType) => {
  const onPressDate = () => {
    navigation?.navigate("DiaryDetail", { date: date.dateString });
  };
  return (
    <Pressable style={styles.container} onPress={onPressDate}>
      <Text
        style={{
          ...styles.text,
          color:
            state === "disabled"
              ? "gray"
              : state === "today"
              ? "orange"
              : "black",
        }}
      >
        {date.day}
      </Text>
      {marking?.marked && marking?.onion ? (
        <Image source={{ uri: marking.onion }} style={styles.image} />
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});
