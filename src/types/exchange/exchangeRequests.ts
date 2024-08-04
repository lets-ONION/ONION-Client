export type ReceivedTrade = {
  id: number;
  req_member: {
    nickname: string;
    member_id: number;
  };
  req_onion: string;
  res_onion: string;
  trade_status: string;
  requested_at: string;
};
export type ReceivedTradeType = {
  trade: ReceivedTrade;
  fetchData: () => Promise<void>;
};

export type ReceivedTradeListType = {
  trades: ReceivedTrade[];
  fetchData: () => Promise<void>;
};

export type ReqTrade = {
  id: number;
  res_member: {
    nickname: string;
    member_id: number;
  };
  req_onion: string;
  res_onion: string;
  trade_status: string;
  requested_at: string;
};

export type ReqTradeType = {
  trade: ReqTrade;
  fetchData: () => Promise<void>;
};

export type ReqTradeListType = {
  trades: ReqTrade[];
  fetchData: () => Promise<void>;
};
