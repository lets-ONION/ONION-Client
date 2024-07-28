import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonType } from "../../types/common/buttonType";

export const Button: React.FC<ButtonType> = ({
  background,
  onPress,
  text,
}: ButtonType) => {
  const styles = createStyles(background);
  const onPressHandler = () => onPress();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (background: string) => {
  return StyleSheet.create({
    button: {
      backgroundColor: background,
      padding: 10,
      width: 100,
      borderRadius: 14,
    },
    text: {
      fontSize: 15,
      textAlign: "center",
    },
  });
};
