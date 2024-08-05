import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { ButtonType } from "../../types/common/buttonType";

import MainText from "../mainText";

export const Button: React.FC<ButtonType> = ({
  background,
  width,
  onPress,
  text,
}: ButtonType) => {
  const styles = createStyles(background, width);
  const onPressHandler = () => onPress();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MainText style={styles.text}>{text}</MainText>
    </TouchableOpacity>
  );
};

const createStyles = (background: string, width: DimensionValue) => {
  return StyleSheet.create({
    button: {
      backgroundColor: background,
      padding: 10,
      width: width,
      borderRadius: 14,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 15,
      textAlign: "center",
    },
  });
};
