import { Text, View } from "react-native";
import { ExchangeConfirmModalType } from "../../../types/exchangeOnion";

export const ExchangeConfirm: React.FC<ExchangeConfirmModalType> = ({
  reqOnion,
  resOnion,
}) => {
  return (
    <View>
      <Text>확인모달</Text>
    </View>
  );
};
