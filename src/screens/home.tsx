import { Text, View } from "react-native";
import useToken from "../hooks/useToken";
import Login from "./login";

import MainText from "../components/mainText";

export function Home() {
  const [token] = useToken();
  return (
    <View>
      <MainText>www</MainText>
    </View>
  );
}
