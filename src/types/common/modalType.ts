export type ModalType = {
  children: JSX.Element;
  visible: boolean;
  touchOuterContent: React.Dispatch<React.SetStateAction<boolean>>;
};
