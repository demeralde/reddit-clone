import { Fragment } from "react";

import BackLink from "~/app/_components/BackLink";
import CreateCommentForm from "~/app/_components/CreateCommentForm";
import Divider from "~/app/_components/Divider";
import Comment from "~/app/_components/Comment";
import Post, { type PostProps } from "~/app/_components/Post";
import { COMMENT_MOCKS, POST_MOCKS } from "~/mocks";
import { getRoute, isLastItem } from "~/utils";

const postMock = POST_MOCKS[0];

const PostPage = () => (
  <div>
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-6">
        <BackLink href={getRoute("posts")}>Back to posts</BackLink>
        <Post {...(postMock as unknown as PostProps)} withLink />
        <CreateCommentForm />
      </div>
      <Divider margin="medium" />
      <h6 className="mb-6 text-sm font-medium leading-5 text-gray-800">
        All comments
      </h6>
      {COMMENT_MOCKS.map((comment, index) => (
        <Fragment key={comment.id}>
          <Comment {...comment} />
          {!isLastItem(COMMENT_MOCKS, index) && <Divider margin="medium" />}
        </Fragment>
      ))}
    </div>
  </div>
);

export default PostPage;
