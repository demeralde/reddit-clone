import PostList from "~/app/_components/PostList";
import CreatePostForm from "~/app/_components/CreatePostForm";
import { api } from "~/trpc/server";

const MyPostsPage = async () => {
  const posts = await api.post.getMyPosts.query();

  return (
    <>
      <CreatePostForm />
      <PostList posts={posts} />
    </>
  );
};

export default MyPostsPage;
