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
  if (!requestFriendList.data.length)
    return <Text style={styles.nodata}>받은 친구 요청이 없어요</Text>;
  return (
    <View>
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
              text="수락"
              width={50}
            />
            <Button
              background="lightgray"
              onPress={() => {
                requestResponse(req.request_id, "REJECT");
              }}
              text="거절"
              width={50}
            />
          </View>
        </View>;
      })}
    </View>
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
  nodata: {
    height: "70%",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 17,
    color: "gray",
  },
  ActivityIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});
