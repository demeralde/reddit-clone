"use client";
import { type FC } from "react";

import Icon from "~/app/_components/Icon";

import { type VoteButtonProps } from "./types";

const VoteButton: FC<VoteButtonProps> = ({
  type,
  size = "default",
  isActive,
  onClick,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center disabled:cursor-not-allowed"
    disabled={disabled}
  >
    <Icon
      type={type}
      size={size}
      color={isActive ? "primary-500" : "gray-700"}
    />
  </button>
);

export default VoteButton;
