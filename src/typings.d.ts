import { type AvatarProps } from "~/app/_components/Avatar";

type ID = string;

type VoteType = "upvote" | "downvote";

type Author = {
  username: AvatarProps["name"];
  avatarSrc: AvatarProps["src"];
};
