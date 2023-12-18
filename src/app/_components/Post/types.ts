import { type ID, type Author, type VoteType } from "~/typings";
export interface PostProps {
  id: ID;
  title: string;
  description: string;
  createdAt: Date;
  author: Author;
  upvotes: number;
  downvotes: number;
  userVote?: VoteType;
  noLink?: boolean;
}
