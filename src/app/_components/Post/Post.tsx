import { type FC } from "react";
import Link from "next/link";

import Avatar from "~/app/_components/Avatar";
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
}) => {
  const totalVotes = getTotalVotes(upvotes, downvotes, userVote);

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
        <div className="flex items-center gap-x-2">
          <Avatar src={author.avatarSrc} username={author.username} />
          <span className="text-sm leading-5 text-gray-600">
            Posted by {author.username} {timeFromNow(createdAt)}
          </span>
        </div>
        <h4 className="font-medium leading-6 text-gray-900">
          <Link href={getRoute("post", { id })}>{title}</Link>
        </h4>
        <p className="text-sm leading-5 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Post;
