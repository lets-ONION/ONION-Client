import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { ButtonType } from "../../types/common/buttonType";

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
      <Text style={styles.text}>{text}</Text>
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
