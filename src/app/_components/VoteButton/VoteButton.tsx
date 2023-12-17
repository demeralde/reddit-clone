"use client";
import { type FC } from "react";

import Icon from "~/app/_components/Icon";

import { type VoteButtonProps } from "./types";

const VoteButton: FC<VoteButtonProps> = ({
  type,
  object,
  size = "default",
  userVoted,
}) => (
  <button onClick={() => console.log("TODO: implement voting logic", object)}>
    <Icon
      type={type}
      size={size}
      color={userVoted ? "primary-500" : "gray-700"}
    />
  </button>
);

export default VoteButton;
