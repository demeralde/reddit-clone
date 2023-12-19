import CreatePostForm from "~/app/_components/CreatePostForm";
import { PostSkeletonList } from "~/app/_components/Skeleton";

const LoadingMyPosts = () => (
  <>
    <CreatePostForm />
    <PostSkeletonList />
  </>
);

export default LoadingMyPosts;
