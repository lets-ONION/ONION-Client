import { Text } from "react-native";
import useToken from "../hooks/useToken";

export function Diary() {
  const [token] = useToken();
  return <Text>긍정일기</Text>;
}
