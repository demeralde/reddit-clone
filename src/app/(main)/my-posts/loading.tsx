import CreatePostForm from "~/app/_components/CreatePostForm";
import { SkeletonPostList } from "~/app/_components/Skeleton";

const LoadingMyPosts = () => (
  <>
    <CreatePostForm />
    <SkeletonPostList />
  </>
);

export default LoadingMyPosts;
