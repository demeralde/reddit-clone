import { CommentSkeletonList, PostSkeleton } from "~/app/_components/Skeleton";

import { BasePostPage } from "./page";

const LoadingPost = () => (
  <BasePostPage
    postId=""
    post={<PostSkeleton />}
    comments={<CommentSkeletonList />}
  />
);

export default LoadingPost;
