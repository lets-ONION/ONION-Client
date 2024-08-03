export type FriendCardType = {
  friend: {
    member_id: number;
    profile_image: string;
    nickname: string;
  };
  isMyProfile: boolean;
  setShowFriendsOnion: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<object>>;
};

export type FriendCardListType = {
  friends: { member_id: number; profile_image: string; nickname: string }[];
  setShowFriendsOnion: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<object>>;
};
