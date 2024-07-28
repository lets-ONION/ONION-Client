export type receivedTrade = {
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
export type receivedTradeType = {
  trade: receivedTrade;
};

export type receivedTradeListType = {
  trades: receivedTrade[];
};

export type reqTrade = {
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

export type reqTradeType = {
  trade: reqTrade;
};

export type reqTradeListType = {
  trades: reqTrade[];
};
