import { type FC, Fragment } from "react";

import Post from "~/app/_components/Post";
import { isLastItem } from "~/utils";
import Divider from "~/app/_components/Divider";

import { type PostListProps } from "./types";

const PostList: FC<PostListProps> = ({ posts }) =>
  posts.length > 0 ? (
    posts.map((post, index) => (
      <Fragment key={post.id}>
        <Post {...post} withLink />
        {!isLastItem(posts, index) ? (
          <Divider margin="large" />
        ) : (
          <div className="mb-10" />
        )}
      </Fragment>
    ))
  ) : (
    <p className="font-medium">No posts have been created yet</p>
  );

export default PostList;
