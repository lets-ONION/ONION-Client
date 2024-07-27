export type FriendCardType = {
  id: number;
  profile_image: string;
  nickname: string;
};

export type FriendCardListType = {
  friends: FriendCardType[];
};
