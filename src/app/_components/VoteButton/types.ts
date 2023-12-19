import { type ID } from "~/typings";

export interface VoteButtonProps {
  id: ID;
  type: "upvote" | "downvote";
  object: "post" | "comment";
  size?: "small" | "default";
  userVoted?: boolean;
}
