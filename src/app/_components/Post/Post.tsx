import { type FC } from "react";
import Link from "next/link";

import Author from "~/app/_components/Author";
import VoteButton from "~/app/_components/VoteButton";
import { getRoute, getTotalVotes } from "~/utils";

import { type BasePostProps, type PostProps } from "./types";

export const BasePost: FC<BasePostProps> = ({
  votes,
  avatar,
  title,
  description,
}) => (
  <div className="flex gap-x-4">
    <div className="flex w-5 flex-shrink-0 flex-col items-center gap-y-2.5">
      {votes}
    </div>
    <div className="flex flex-grow flex-col gap-y-1.5">
      {avatar}
      {title}
      {description}
    </div>
  </div>
);

const Post: FC<PostProps> = ({
  id,
  title,
  description,
  author,
  upvotes,
  downvotes,
  userVote,
  createdAt,
  withLink,
}) => {
  const totalVotes = getTotalVotes(upvotes, downvotes, userVote);

  const postLink = getRoute("post", { id });

  return (
    <BasePost
      votes={
        <>
          <VoteButton
            type="upvote"
            object="post"
            id={id}
            userVoted={userVote === "UPVOTE"}
          />
          <span className="font-medium leading-6 text-gray-800">
            {totalVotes}
          </span>
          <VoteButton
            type="downvote"
            object="post"
            id={id}
            userVoted={userVote === "DOWNVOTE"}
          />
        </>
      }
      avatar={<Author label="Posted by" createdAt={createdAt} {...author} />}
      title={
        <h4 className="font-medium leading-6 text-gray-900">
          {withLink ? <Link href={postLink}>{title}</Link> : title}
        </h4>
      }
      description={
        <p className="text-sm leading-5 text-gray-700">
          {withLink ? <Link href={postLink}>{description}</Link> : description}
        </p>
      }
    />
  );
};

export default Post;
