import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "../../../../common/button";
import { useFetch } from "../../../../../hooks/useFetch";
import {
  getFriendRequests,
  patchResponseFriendReq,
} from "../../../../../api/friends";
import { ActivityIndicator } from "react-native-paper";

export const RequestedFriends = () => {
  const requestFriendList = useFetch(getFriendRequests);
  const requestResponse = async (id: number, res: "ACCEPT" | "REJECT") => {
    try {
      await patchResponseFriendReq(id, res);
      await requestFriendList.fetchData();
    } catch (error) {
      Alert.alert("오류", "처리 중 오류가 발생했어요");
    }
  };
  if (requestFriendList.loading || requestFriendList.error)
    return <ActivityIndicator size={"large"} color="orange" />;
  return (
    <TouchableWithoutFeedback>
      {requestFriendList.data.data.map((req: FriendReqType) => {
        <View style={styles.container}>
          <Text style={styles.text}>
            {req.member.nickname}님이 친구요청을 보냈어요!
          </Text>
          <View style={styles.buttonWrapper}>
            <Button
              background="orange"
              onPress={() => {
                requestResponse(req.request_id, "ACCEPT");
              }}
              text="확인"
              width={50}
            />
            <Button
              background="lightgray"
              onPress={() => {
                requestResponse(req.request_id, "REJECT");
              }}
              text="취소"
              width={50}
            />
          </View>
        </View>;
      })}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    gap: 10,
    flexDirection: "row",
  },
  text: {
    width: "60%",
  },
});
