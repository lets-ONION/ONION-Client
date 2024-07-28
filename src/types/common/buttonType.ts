import { DimensionValue } from "react-native";

export type ButtonType = {
  background: string;
  text: string;
  width: DimensionValue;
  onPress:
    | (() => void)
    | (() => Promise<void>)
    | (() => React.Dispatch<React.SetStateAction<any>>);
};
