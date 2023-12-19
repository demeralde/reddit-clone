import { type FC, Fragment } from "react";
import { notFound } from "next/navigation";

import BackLink from "~/app/_components/BackLink";
import CreateCommentForm from "~/app/_components/CreateCommentForm";
import Divider from "~/app/_components/Divider";
import CommentContainer from "~/app/_components/Comment";
import Post from "~/app/_components/Post";
import { api } from "~/trpc/server";
import { getRoute, isLastItem } from "~/utils";

import {
  type BasePostPageProps,
  type PostPageProps,
  type TRPCError,
} from "./types";

export const BasePostPage: FC<BasePostPageProps> = ({ post, comments }) => (
  <div className="flex flex-col">
    <div className="flex flex-col gap-y-6">
      <BackLink href={getRoute("posts")}>Back to posts</BackLink>
      {post}
      <CreateCommentForm />
    </div>
    <Divider margin="medium" />
    <h6 className="mb-6 text-sm font-medium leading-5 text-gray-800">
      All comments
    </h6>
    {comments}
  </div>
);

const PostPage: FC<PostPageProps> = async ({ params }) => {
  let post;

  try {
    post = await api.post.getById.query(params);
  } catch (err) {
    if ((err as TRPCError).cause.code === "NOT_FOUND") {
      notFound();
    }
  }

  const comments = post?.comments ?? [];

  return (
    post && (
      <BasePostPage
        post={<Post {...post} />}
        comments={
          <>
            {comments.map((comment, index) => (
              <Fragment key={comment.id}>
                <CommentContainer
                  id={comment.id}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  upvotes={comment.upvotes}
                  downvotes={comment.downvotes}
                  userVote={comment.userVoteType}
                  author={comment.author}
                  replies={comment.replies}
                  isRoot
                />
                {!isLastItem(comments, index) && <Divider margin="medium" />}
              </Fragment>
            ))}
            {post && post.comments?.length === 0 && (
              <p className="mt-4">No comments exist yet</p>
            )}
          </>
        }
      />
    )
  );
};

export default PostPage;
