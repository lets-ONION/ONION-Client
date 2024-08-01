import { Text, View } from "react-native";
import useToken from "../hooks/useToken";
import Login from "./login";

export function Home() {
  const [token] = useToken();
  return (
    <View>
      <Text>www</Text>
    </View>
  );
}
