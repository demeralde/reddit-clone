import { type FC } from "react";
import Link from "next/link";

import Author from "~/app/_components/Author";
import VoteButtonGroup from "~/app/_components/VoteButtonGroup";
import { ROUTES } from "~/config/routes";

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
  userVoteType,
  createdAt,
  withLink,
}) => {
  const postLink = ROUTES.post(id);

  return (
    <BasePost
      votes={
        <VoteButtonGroup
          id={id}
          object="post"
          userVoteType={userVoteType}
          upvotes={upvotes}
          downvotes={downvotes}
          size="default"
          authorId={author.id}
        />
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
