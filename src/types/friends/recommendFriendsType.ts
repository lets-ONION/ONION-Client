export type RecommendFriendType = {
  nickname: string;
  member_id: number;
  user_image_url: string;
};

export type RecommendFriendListType = {
  friends: RecommendFriendType[];
};
