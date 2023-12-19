import { type MouseEventHandler } from "react";

import { type VoteType, type ID } from "~/typings";

type Size = "small" | "default";

export interface VoteButtonGroupProps {
  id: ID;
  upvotes: number;
  downvotes: number;
  object: "post" | "comment";
  userVoteType?: VoteType;
  size: Size;
  authorId: ID;
}

export interface VoteButtonProps {
  type: "upvote" | "downvote";
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
  size: Size;
  disabled?: boolean;
}
