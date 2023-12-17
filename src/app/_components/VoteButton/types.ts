export interface VoteButtonProps {
  id: ID;
  type: VoteType;
  object: "post" | "comment";
  size?: "small" | "default";
  userVoted?: boolean;
}
