export type OnionCardType = {
  onion_type: string;
  onion_image: string;
  amount: number;
  can_trade: boolean;
};

export type OnionCardListType = {
  onions: OnionCardType[];
};
