import { type ID, type Author, type VoteType } from "~/typings";

export interface CommentFooterProps {
  id: ID;
  userVote?: VoteType;
  upvotes: number;
  downvotes: number;
}

interface CommentPropsBase extends CommentFooterProps {
  content: string;
  createdAt: Date;
  author: Author;
}

export interface CommentProps extends CommentPropsBase {
  replies: CommentProps[];
}

export interface ReplyButtonProps {
  commentId: ID;
  onClick: () => void;
  isActive: boolean;
}
