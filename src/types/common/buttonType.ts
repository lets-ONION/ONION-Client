export type ButtonType = {
  background: string;
  text: string;
  onPress:
    | (() => void)
    | (() => Promise<void>)
    | (() => React.Dispatch<React.SetStateAction<any>>);
};
