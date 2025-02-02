export type OnionsInfo = {
  onion_type: string;
  onion_image: string;
  quantity: number;
  can_trade: boolean;
};
export type ExchangeOnionType = {
  resOnion: OnionsInfo;
  setShowExchangeModal: React.Dispatch<React.SetStateAction<boolean>>;
  resId: number;
};

export type ExchangeOnionsType = {
  onion: OnionsInfo;
  reqOnion: OnionsInfo;
  setShowConfimModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedOnion: React.Dispatch<React.SetStateAction<OnionsInfo>>;
};
export type ExchangeOnionListType = {
  onions: OnionsInfo[];
  reqOnion: OnionsInfo;
  setSelectedOnion: React.Dispatch<React.SetStateAction<OnionsInfo>>;
  setShowConfimModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ExchangeConfirmModalType = {
  reqOnion: OnionsInfo;
  resOnion: OnionsInfo;
  resId: number;
  setShowExchangeModal: React.Dispatch<React.SetStateAction<boolean>>;
};
