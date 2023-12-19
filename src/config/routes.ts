import { type ID } from "~/typings";

export const ROUTES = {
  home: "/",
  login: "/login",
  posts: "/posts",
  post: (id: ID) => `/posts/${id}`,
  myPosts: "/my-posts",
};
