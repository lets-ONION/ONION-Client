export type OnionInfo = {
  onion_type: string;
  onion_image: string;
  quantity: number;
  can_trade: boolean;
};
export type OnionCardType = {
  onion: OnionInfo;
  showFriendsOnion: boolean;
};

export type OnionCardListType = {
  onions: OnionInfo[];
  showFriendsOnion: boolean;
};
