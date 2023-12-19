import CreatePostForm from "~/app/_components/CreatePostForm";
import { api } from "~/trpc/server";
import PostList from "~/app/_components/PostList";

export default async function Posts() {
  const posts = await api.post.getAll.query();

  return (
    <>
      <CreatePostForm />
      <PostList posts={posts} />
    </>
  );
}
