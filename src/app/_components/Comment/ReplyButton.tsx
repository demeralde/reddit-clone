"use client";
import { type FC } from "react";

import Icon from "~/app/_components/Icon";

import { type ReplyButtonProps } from "./types";
import { cn } from "~/utils";

const ReplyButton: FC<ReplyButtonProps> = ({ onClick, isActive }) => {
  return (
    <button className="flex items-center gap-x-2" onClick={onClick}>
      <Icon
        type="comment"
        size="small"
        color={isActive ? "primary-600" : "gray-700"}
      />
      <span
        className={cn(
          "text-sm font-medium leading-5",
          isActive ? "text-primary-600" : "text-gray-700",
        )}
      >
        Reply
      </span>
    </button>
  );
};

export default ReplyButton;
