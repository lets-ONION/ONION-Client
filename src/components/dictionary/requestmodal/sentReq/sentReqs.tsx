import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SentReqsList } from "./sentReqsList";
import { dummyReqData } from "../../../dummyData";
import { useFetch } from "../../../../hooks/useFetch";
import { getRecievedTrade, getSentTrade } from "../../../../api/book";

import MainText from "../../../mainText";

export const SentReqs = () => {
  const reqData = useFetch(getSentTrade);
  if (reqData.loading)
    return <ActivityIndicator size={"large"} color={"orange"} />;
  if (reqData.error)
    return (
      <View>
        <MainText>정보를 가져올 수 없습니다.</MainText>
      </View>
    );
  return (
    <View style={styles.container}>
      <SentReqsList trades={reqData.data.data} fetchData={reqData.fetchData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    padding: 10,
  },
});
