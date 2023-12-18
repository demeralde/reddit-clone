"use client";
import { useState, type FC, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import VoteButton from "~/app/_components/VoteButton";
import CreateCommentForm from "~/app/_components/CreateCommentForm";
import { getRoute, getTotalVotes } from "~/utils";

import ReplyButton from "./ReplyButton";
import { type CommentFooterProps } from "./types";

const CommentFooter: FC<CommentFooterProps> = ({
  id,
  userVote,
  upvotes,
  downvotes,
}) => {
  const { user } = useUser();
  const router = useRouter();

  const [isCommentBoxRendered, setIsCommentBoxRendered] = useState(false);
  const totalVotes = getTotalVotes(upvotes, downvotes, userVote);
  const isLoggedIn = !!user;

  const replyOnClick = useCallback(async () => {
    if (isLoggedIn) {
      setIsCommentBoxRendered(!isCommentBoxRendered);
    } else {
      router.push(getRoute("login"));
    }
  }, [isLoggedIn, isCommentBoxRendered]);

  return (
    <>
      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-2">
          <VoteButton
            type="upvote"
            object="post"
            id={id}
            userVoted={userVote === "upvote"}
            size="small"
          />
          <span className="text-sm font-medium leading-5 text-gray-700">
            {totalVotes}
          </span>
          <VoteButton
            type="downvote"
            object="post"
            id={id}
            userVoted={userVote === "downvote"}
            size="small"
          />
        </div>
        <ReplyButton
          commentId={id}
          onClick={replyOnClick}
          isActive={isCommentBoxRendered}
        />
      </div>
      {isCommentBoxRendered && isLoggedIn && (
        <div className="my-3">
          <CreateCommentForm />
        </div>
      )}
    </>
  );
};

export default CommentFooter;
