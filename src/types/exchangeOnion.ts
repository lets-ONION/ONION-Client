export type OnionsInfo = {
  onion_type: string;
  onion_image: string;
  amount: number;
  can_trade: boolean;
};
export type ExchangeOnionType = {
  reqOnion: OnionsInfo;
  setShowExchangeModal: React.Dispatch<React.SetStateAction<boolean>>;
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
};
