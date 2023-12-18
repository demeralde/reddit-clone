import { type FC } from "react";
import Link from "next/link";

import Author from "~/app/_components/Author";
import VoteButton from "~/app/_components/VoteButton";
import { getRoute, getTotalVotes, timeFromNow } from "~/utils";

import { type PostProps } from "./types";

const Post: FC<PostProps> = ({
  id,
  title,
  description,
  author,
  upvotes,
  downvotes,
  userVote,
  createdAt,
  noLink,
}) => {
  const totalVotes = getTotalVotes(upvotes, downvotes, userVote);

  const postLink = getRoute("post", { id });

  return (
    <div className="flex gap-x-4">
      <div className="flex flex-col items-center gap-y-2.5">
        <VoteButton
          type="upvote"
          object="post"
          id={id}
          userVoted={userVote === "upvote"}
        />
        <span className="font-medium leading-6 text-gray-800">
          {totalVotes}
        </span>
        <VoteButton
          type="downvote"
          object="post"
          id={id}
          userVoted={userVote === "downvote"}
        />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <Author label="Posted by" createdAt={createdAt} {...author} />
        <h4 className="font-medium leading-6 text-gray-900">
          {noLink ? title : <Link href={postLink}>{title}</Link>}
        </h4>
        <p className="text-sm leading-5 text-gray-700">
          {noLink ? description : <Link href={postLink}>{description}</Link>}
        </p>
      </div>
    </div>
  );
};

export default Post;
