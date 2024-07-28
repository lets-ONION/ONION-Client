export type FriendCardType = {
  friend: {
    id: number;
    profile_image: string;
    nickname: string;
  };
  isMyProfile: boolean;
  setShowFriendsOnion: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FriendCardListType = {
  friends: { id: number; profile_image: string; nickname: string }[];
  setShowFriendsOnion: React.Dispatch<React.SetStateAction<boolean>>;
};
