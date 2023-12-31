import { type FC, Fragment } from "react";
import { notFound } from "next/navigation";

import Divider from "~/app/_components/Divider";
import CommentContainer from "~/app/_components/Comment";
import Post from "~/app/_components/Post";
import { type StructuredPost } from "~/server/api/routers/post";
import { api } from "~/trpc/server";
import { isLastItem } from "~/utils";

import { type PostPageProps, type TRPCError } from "./types";
import BasePostPage from "./BasePostPage";

const PostPage: FC<PostPageProps> = async ({ params }) => {
  let post: StructuredPost | undefined;

  try {
    post = await api.post.getById.query(params);
  } catch (err) {
    if ((err as TRPCError).cause.code === "NOT_FOUND") {
      notFound();
    }
  }

  post = post as unknown as StructuredPost;
  const postId = post.id;
  const comments = post.comments ?? [];

  return (
    post && (
      <BasePostPage
        post={<Post {...post} />}
        postId={post.id}
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
                  userVoteType={comment.userVoteType}
                  author={comment.author}
                  replies={comment.replies}
                  replyToId={comment.id}
                  postId={postId}
                  isRoot
                />
                {!isLastItem(comments, index) ? (
                  <Divider margin="medium" />
                ) : (
                  <div className="mb-6" />
                )}
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
