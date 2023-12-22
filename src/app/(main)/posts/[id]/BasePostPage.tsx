import { type FC } from "react";
import BackLink from "~/app/_components/BackLink";
import CreateCommentForm from "~/app/_components/CreateCommentForm";
import { ROUTES } from "~/config/routes";
import Divider from "~/app/_components/Divider";

import { type BasePostPageProps } from "./types";

const BasePostPage: FC<BasePostPageProps> = ({ post, comments, postId }) => (
  <div className="flex flex-col">
    <div className="flex flex-col gap-y-6">
      <BackLink href={ROUTES.posts}>Back to posts</BackLink>
      {post}
      {post && <CreateCommentForm postId={postId} />}
    </div>
    <Divider margin="medium" />
    <h6 className="mb-6 text-sm font-medium leading-5 text-gray-800">
      All comments
    </h6>
    {comments}
  </div>
);

export default BasePostPage;
