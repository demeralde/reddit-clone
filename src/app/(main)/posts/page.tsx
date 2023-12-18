import CreatePostForm from "~/app/_components/CreatePostForm";
import { POST_MOCKS } from "~/mocks";
import { api } from "~/trpc/server";
import PostList from "~/app/_components/PostList";

export default async function Posts() {
  // const posts = await api.post.getAll.query();

  return (
    <>
      <CreatePostForm />
      <PostList posts={POST_MOCKS} />
    </>
  );
}
