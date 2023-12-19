import CreatePostForm from "~/app/_components/CreatePostForm";
import { PostSkeletonList } from "~/app/_components/Skeleton";

const LoadingPosts = () => (
  <>
    <CreatePostForm />
    <PostSkeletonList />
  </>
);

export default LoadingPosts;
