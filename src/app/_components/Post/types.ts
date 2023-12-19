import { type ReactNode } from "react";

import { type ID, type Author, type VoteType } from "~/typings";

export interface BasePostProps {
  votes: ReactNode;
  avatar: ReactNode;
  title: ReactNode;
  description: ReactNode;
}
export interface PostProps {
  id: ID;
  title: string;
  description: string;
  createdAt: Date;
  author: Author;
  upvotes: number;
  downvotes: number;
  userVoteType?: VoteType;
  withLink?: boolean;
}
