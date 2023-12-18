"use client";
import { useCallback, type FC } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import Icon from "~/app/_components/Icon";
import { getRoute } from "~/utils";

import { type VoteButtonProps } from "./types";

const VoteButton: FC<VoteButtonProps> = ({
  type,
  object,
  size = "default",
  userVoted,
}) => {
  const { user } = useUser();
  const router = useRouter();
  const isLoggedIn = !!user;

  const onClick = useCallback(() => {
    if (isLoggedIn) {
      console.log("TODO: implement voting logic");
    } else {
      router.push(getRoute("login"));
    }
  }, []);

  return (
    <button onClick={onClick} className="flex items-center justify-center">
      <Icon
        type={type}
        size={size}
        color={userVoted ? "primary-500" : "gray-700"}
      />
    </button>
  );
};

export default VoteButton;
