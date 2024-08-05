import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { dummyReceivedData } from "../../../dummyData";
import { ReceivedReqsList } from "./receivedReqList";
import { useFetch } from "../../../../hooks/useFetch";
import { getRecievedTrade } from "../../../../api/book";

import MainText from "../../../mainText";

export const ReceivedReqs = () => {
  const reqData = useFetch(getRecievedTrade);
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
      <ReceivedReqsList
        trades={reqData.data.data}
        fetchData={reqData.fetchData}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    padding: 10,
    flexWrap: "wrap",
  },
});
