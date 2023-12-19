import { type FC, Fragment } from "react";

import Divider from "~/app/_components/Divider";
import { BasePost } from "~/app/_components/Post";
import { isLastItem } from "~/utils";

import { AVATAR_SIZE_MAP } from "~/app/_components/Avatar";
import { Skeleton } from "~/app/_components/ui/skeleton";
import { BaseAuthor } from "~/app/_components/Author";
import { BaseComment } from "~/app/_components/Comment";
import { cn } from "~/utils";

import { type TextSkeletonProps, type AvatarSkeletonProps } from "./types";

const AvatarSkeleton: FC<AvatarSkeletonProps> = ({ className = "", size }) => (
  <Skeleton
    className={cn(
      AVATAR_SIZE_MAP[size],
      "flex-shrink-0 rounded-full",
      className,
    )}
  />
);

const TextSkeleton: FC<TextSkeletonProps> = ({ className }) => (
  <Skeleton className={cn("h-3 w-28", className)} />
);

const AuthorSkeleton = () => (
  <BaseAuthor>
    <AvatarSkeleton size="default" />
    <TextSkeleton className="h-3 w-64" />
  </BaseAuthor>
);

const listIds = [...Array(10).keys()];

const PostSkeleton = () => (
  <BasePost
    votes={
      <>
        <TextSkeleton className="h-3 w-3 rounded-full" />
        <TextSkeleton className="h-4 w-5" />
        <TextSkeleton className="h-3 w-3 rounded-full" />
      </>
    }
    avatar={<AuthorSkeleton />}
    title={
      <>
        <TextSkeleton className="w-full" />
        <TextSkeleton className="w-72" />
      </>
    }
    description={
      <>
        <TextSkeleton className="h-2.5 w-full" />
        <TextSkeleton className="h-2.5 w-40" />
      </>
    }
  />
);

const PostSkeletonList = () =>
  listIds.map((id, index) => (
    <Fragment key={id}>
      <PostSkeleton />
      {!isLastItem(listIds, index) && <Divider margin="large" />}
    </Fragment>
  ));

const CommentSkeleton = () => (
  <BaseComment
    isRoot
    author={<AuthorSkeleton />}
    content={
      <>
        <TextSkeleton className="w-full" />
        <TextSkeleton className="w-full" />
      </>
    }
    footer={<TextSkeleton className="w-40" />}
  />
);

const CommentSkeletonList = () =>
  listIds.map((id, index) => (
    <Fragment key={id}>
      <CommentSkeleton />
      {!isLastItem(listIds, index) && <Divider margin="medium" />}
    </Fragment>
  ));

export {
  AvatarSkeleton,
  TextSkeleton,
  PostSkeleton,
  PostSkeletonList,
  CommentSkeleton,
  CommentSkeletonList,
};
