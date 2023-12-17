import { type AvatarProps } from "~/app/_components/Avatar";

export interface PostProps {
  id: ID;
  title: string;
  description: string;
  createdAt: Date;
  author: {
    username: AvatarProps["username"];
    avatarSrc: AvatarProps["src"];
  };
  upvotes: number;
  downvotes: number;
  userVote?: VoteType;
}
