import CreatePostForm from "~/app/_components/CreatePostForm";
import { SkeletonPostList } from "~/app/_components/Skeleton";

const LoadingPosts = () => (
  <>
    <CreatePostForm />
    <SkeletonPostList />
  </>
);

export default LoadingPosts;
