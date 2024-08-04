import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { DiaryScreenProps } from "../../screens/diary/diary";
import { useFetch } from "../../hooks/useFetch";
import { getCalendar } from "../../api/calendar";
import { CalendarGrowDataType } from "../../types/calendar/calendar";
import { DayComponent } from "./dayComponent";

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
  const diaryInfo = useFetch(getCalendar);
  if (diaryInfo.loading)
    return <ActivityIndicator size={"large"} color={"orange"} />;

  const grewInfo: { [key: string]: { marked: boolean; onion: string } } = {};
  if (diaryInfo.data && diaryInfo.data.data.dates) {
    diaryInfo.data.data.dates.forEach((info: CalendarGrowDataType) => {
      console.log(info);
      grewInfo[info.date] = {
        marked: true,
        onion: info.onions[0].image_url,
      };
    });
  }
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markedDates={grewInfo}
        dayComponent={({ date, state, marking }) => {
          return (
            <DayComponent
              date={date}
              state={state}
              marking={marking}
              navigation={navigation}
              route={route}
            />
          );
        }}
        theme={{
          arrowColor: "orange",
          "stylesheet.calendar.header": {
            dayTextAtIndex0: {
              color: "red",
            },
            dayTextAtIndex6: {
              color: "blue",
            },
          },
          todayTextColor: "orange",
          calendarBackground: "#fff",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
  },
  calendar: {
    width: "100%",
    height: "100%",
  },
});
