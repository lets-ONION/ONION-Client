export type OnionCardType = {
  onion: {
    onion_type: string;
    onion_image: string;
    amount: number;
    can_trade: boolean;
  };
  showFriendsOnion: boolean;
};

export type OnionCardListType = {
  onions: {
    onion_type: string;
    onion_image: string;
    amount: number;
    can_trade: boolean;
  }[];
  showFriendsOnion: boolean;
};
