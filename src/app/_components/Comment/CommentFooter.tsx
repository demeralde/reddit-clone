"use client";
import { useState, type FC, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import VoteButtonGroup from "~/app/_components/VoteButtonGroup";
import CreateCommentForm from "~/app/_components/CreateCommentForm";
import { ROUTES } from "~/config/routes";

import ReplyButton from "./ReplyButton";
import { type CommentFooterProps } from "./types";

const CommentFooter: FC<CommentFooterProps> = ({
  id,
  userVoteType,
  upvotes,
  downvotes,
  author,
}) => {
  const { user } = useUser();
  const router = useRouter();

  const [isCommentBoxRendered, setIsCommentBoxRendered] = useState(false);
  const isLoggedIn = !!user;

  const replyOnClick = useCallback(async () => {
    if (isLoggedIn) {
      setIsCommentBoxRendered(!isCommentBoxRendered);
    } else {
      router.push(ROUTES.login);
    }
  }, [isLoggedIn, isCommentBoxRendered]);

  return (
    <>
      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-2">
          <VoteButtonGroup
            id={id}
            object="comment"
            userVoteType={userVoteType}
            upvotes={upvotes}
            downvotes={downvotes}
            size="small"
            authorId={author.id}
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
