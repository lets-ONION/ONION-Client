export type CommentType = {
  comment: string;
};

export type NewCommentType = {
  myOnionImage: string;
  nickname: string;
  setShowWriteModal: React.Dispatch<React.SetStateAction<boolean>>;
};
