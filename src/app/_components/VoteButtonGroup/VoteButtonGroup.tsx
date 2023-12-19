"use client";
import { type FC, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { api } from "~/trpc/react";
import { cn, getRoute, getTotalVotes } from "~/utils";
import { type VoteType } from "~/typings";
import { useToast } from "~/app/_components/ui/use-toast";

import { type VoteButtonGroupProps } from "./types";
import VoteButton from "./VoteButton";

const VoteButtonGroup: FC<VoteButtonGroupProps> = ({
  upvotes,
  downvotes,
  id,
  object,
  userVoteType = null,
  size,
  authorId,
}) => {
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const [vote, setVote] = useState(userVoteType);

  const isLoggedIn = !!user;
  const userIsAuthor = user?.id === authorId;
  const totalVotes = getTotalVotes(upvotes, downvotes, vote);

  const onError = useCallback(
    (error: unknown) => {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Oops, something went wrong",
        description: "An error occurred during your vote. Please try again.",
      });
      setVote(null);
    },
    [toast],
  );
  const { mutate: togglePostVote, isLoading: postVoteIsLoading } =
    api.post.toggleVote.useMutation({ onError });
  const { mutate: toggleCommentVote, isLoading: commentVoteIsLoading } =
    api.comment.toggleVote.useMutation({ onError });
  const disabled = userIsAuthor || postVoteIsLoading || commentVoteIsLoading;

  const toggleVoteAPI = useCallback(
    (voteType: VoteType) => {
      if (object === "post") {
        togglePostVote({
          type: voteType,
          postId: id,
        });
      } else if (object === "comment") {
        toggleCommentVote({
          type: voteType,
          commentId: id,
        });
      }
    },
    [object, togglePostVote, id],
  );

  const toggleVote = useCallback(
    (voteType: VoteType) => {
      if (isLoggedIn) {
        toggleVoteAPI(voteType);

        setVote((pastVote) => {
          let newVote: VoteType | null;

          if (pastVote === voteType) {
            newVote = null;
          } else {
            newVote = voteType;
          }

          return newVote;
        });
      } else {
        router.push(getRoute("login"));
      }
    },
    [isLoggedIn, router, toggleVoteAPI],
  );

  const toggleUpvote = useCallback(() => toggleVote("UPVOTE"), [toggleVote]);

  const toggleDownvote = useCallback(
    () => toggleVote("DOWNVOTE"),
    [toggleVote],
  );

  return (
    <>
      <VoteButton
        type="upvote"
        isActive={vote === "UPVOTE" || userIsAuthor}
        size={size}
        onClick={toggleUpvote}
        disabled={disabled}
      />
      <span
        className={cn(
          "font-medium",
          size === "small" && "text-sm leading-5 text-gray-700",
          size === "default" && "leading-6 text-gray-800",
        )}
      >
        {totalVotes}
      </span>
      <VoteButton
        type="downvote"
        isActive={vote === "DOWNVOTE"}
        size={size}
        onClick={toggleDownvote}
        disabled={disabled}
      />
    </>
  );
};

export default VoteButtonGroup;
