export type ReceivedTrade = {
  id: number;
  requester: {
    id: number;
    nickname: string;
  };
  req_onion: string;
  res_onion: string;
  is_accepted: number; // 0 : 수락/거절 전, 1 : 수락, 2 : 거절
  requested_at: string;
};
export type ReceivedTradeType = {
  trade: ReceivedTrade;
};

export type ReceivedTradeListType = {
  trades: ReceivedTrade[];
};

export type ReqTrade = {
  id: number;
  receiver: {
    id: number;
    nickname: string;
  };
  req_onion: string;
  res_onion: string;
  is_accepted: number; // 0 : 수락/거절 전, 1 : 수락, 2 : 거절
  date: string;
};

export type ReqTradeType = {
  trade: ReqTrade;
};

export type ReqTradeListType = {
  trades: ReqTrade[];
};
