import { ActivityIndicator, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { DiaryScreenProps } from "../../screens/diary/diary";
import { useFetch } from "../../hooks/useFetch";
import { getCalendar } from "../../api/calendar";
import { CalendarGrowDataType } from "../../types/calendar/calendar";

LocaleConfig.locales.fr = {
  monthNames: [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ],
  MonthNamesShort: [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "fr";

export const OnionCalendar = ({ navigation, route }: DiaryScreenProps) => {
  const onPressDate = ({ dateString }: { dateString: string }) => {
    navigation.navigate("DiaryDetail", { date: dateString });
  };
  const diaryInfo = useFetch(getCalendar);
  if (diaryInfo.loading)
    return <ActivityIndicator size={"large"} color={"orange"} />;

  const grewInfo: { [key: string]: { marked: boolean; dotColor: string } } = {};
  if (diaryInfo.data && diaryInfo.data.data.dates) {
    diaryInfo.data.data.dates.forEach((info: CalendarGrowDataType) => {
      console.log(info);
      grewInfo[info.date] = {
        marked: true,
        dotColor: "green",
      };
    });
  }
  console.log(grewInfo);
  return (
    <View>
      <Calendar onDayPress={onPressDate} markedDates={grewInfo} />
    </View>
  );
};
