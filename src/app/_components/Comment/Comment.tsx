import { type FC } from "react";

import Author from "~/app/_components/Author";

import { type CommentProps } from "./types";
import CommentFooter from "./CommentFooter";

const BaseComment: FC<CommentProps> = ({
  author,
  createdAt,
  content,
  id,
  userVote,
  upvotes,
  downvotes,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Author createdAt={createdAt} {...author} />
      <p className="text-sm leading-5 text-gray-800">{content}</p>
      <CommentFooter
        id={id}
        userVote={userVote}
        upvotes={upvotes}
        downvotes={downvotes}
      />
    </div>
  );
};

const Comment: FC<CommentProps> = ({ replies, ...otherProps }) => {
  return (
    <div className="gap-y-4">
      <BaseComment {...otherProps} replies={replies} />
      {replies.length > 0 && (
        <div className="ml-8 mt-4">
          {replies.map((reply) => (
            <Comment {...reply} key={reply.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
