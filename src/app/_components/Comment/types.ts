import { type ReactNode } from "react";

import { type ID, type Author, type VoteType } from "~/typings";

export interface CommentFooterProps {
  id: ID;
  userVoteType?: VoteType;
  upvotes: number;
  downvotes: number;
  author: Author;
}

export interface BaseCommentProps {
  author: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  isRoot?: boolean;
}

interface CommentProps extends CommentFooterProps {
  content: string;
  createdAt: Date;
}

export interface CommentContainerProps extends CommentProps {
  replies: CommentContainerProps[];
  isRoot?: boolean;
}

export interface ReplyButtonProps {
  commentId: ID;
  onClick: () => void;
  isActive: boolean;
}
