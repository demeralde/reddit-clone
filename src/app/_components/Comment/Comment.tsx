import { type FC } from "react";

import Author from "~/app/_components/Author";
import { cn } from "~/utils";

import { type BaseCommentProps, type CommentContainerProps } from "./types";
import CommentFooter from "./CommentFooter";

export const BaseComment: FC<BaseCommentProps> = ({
  author,
  content,
  footer,
  isRoot,
}) => (
  <div className={cn("flex flex-col gap-y-3", !isRoot && "mt-4")}>
    {author}
    {content}
    {footer}
  </div>
);

const Comment: FC<CommentContainerProps> = ({
  author,
  createdAt,
  content,
  id,
  userVoteType,
  upvotes,
  downvotes,
  isRoot,
  postId,
}) => (
  <BaseComment
    isRoot={isRoot}
    author={<Author createdAt={createdAt} {...author} />}
    content={<p className="text-sm leading-5 text-gray-800">{content}</p>}
    footer={
      <CommentFooter
        id={id}
        userVoteType={userVoteType}
        upvotes={upvotes}
        downvotes={downvotes}
        author={author}
        postId={postId}
        replyToId={id}
      />
    }
  />
);

const CommentContainer: FC<CommentContainerProps> = ({
  replies,
  ...otherProps
}) => (
  <div className="gap-y-4">
    <Comment {...otherProps} replies={replies} />
    {replies.length > 0 && (
      <div className="ml-8">
        {replies.map((reply) => (
          <CommentContainer {...reply} key={reply.id} />
        ))}
      </div>
    )}
  </div>
);

export default CommentContainer;
