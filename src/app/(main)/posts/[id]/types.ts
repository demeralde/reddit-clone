import { type ReactNode } from "react";

export interface PostPageProps {
  params: {
    id: string;
  };
}

export interface TRPCError {
  cause: {
    code: string;
  };
}

export interface BasePostPageProps {
  post: ReactNode;
  comments: ReactNode;
  postId: string;
}
