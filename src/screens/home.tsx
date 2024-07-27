import { Text } from "react-native";
import useToken from "../hooks/useToken";

export function Home() {
  const [token] = useToken();
  return <Text>홈</Text>;
}
