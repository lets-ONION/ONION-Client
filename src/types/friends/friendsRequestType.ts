type FriendsItemType = {
  id: number;
  uuid: string;
  profile_nickname: string;
  profile_thumbnail_image: string;
};
type FriendsListType = {
  total_count: number;
  Friend: FriendsItemType[];
};

type FriendReqType = {
  req: {
    member: {
      nickname: string;
      member_id: number;
    };
    request_id: number;
  };
};

type FriendReqsListType = {
  reqs: FriendReqType[];
};
