export type OnionInfo = {
  onion_type: string;
  onion_image: string;
  quantity: number;
  can_trade: boolean;
};
export type OnionCardType = {
  onion: OnionInfo;
  showFriendsOnion: boolean;
  resId: number;
  fetchData: () => Promise<void>;
};

export type OnionCardListType = {
  onions: OnionInfo[];
  showFriendsOnion: boolean;
  resId: number;
  fetchData: () => Promise<void>;
};
