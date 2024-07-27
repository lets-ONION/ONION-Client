export type ExchangeOnionType = {
  reqOnion: string;
  setShowExchangeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ExchangeOnionsType = {
  onion: {
    onion_type: string;
    onion_image: string;
    amount: number;
    can_trade: boolean;
  };
  reqOnion: string;
};
export type ExchangeOnionListType = {
  onions: {
    onion_type: string;
    onion_image: string;
    amount: number;
    can_trade: boolean;
  }[];
  reqOnion: string;
};
