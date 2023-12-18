import { type FC, Fragment } from "react";

import Post from "~/app/_components/Post";
import { isLastItem } from "~/utils";
import Divider from "~/app/_components/Divider";

import { type PostListProps } from "./types";

const PostList: FC<PostListProps> = ({ posts }) =>
  posts.map((post, index) => (
    <Fragment key={post.id}>
      <Post {...post} />
      {!isLastItem(posts, index) && <Divider margin="large" />}
    </Fragment>
  ));

export default PostList;
