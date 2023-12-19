import { type FC, Fragment } from "react";

import Divider from "~/app/_components/Divider";
import { BasePost } from "~/app/_components/Post";
import { isLastItem } from "~/utils";

import { AVATAR_SIZE_MAP } from "~/app/_components/Avatar";
import { Skeleton } from "~/app/_components/ui/skeleton";
import { BaseAuthor } from "~/app/_components/Author";
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

const postListIds = [...Array(10).keys()];

const SkeletonPostList = () =>
  postListIds.map((id, index) => (
    <Fragment key={id}>
      <BasePost
        votes={
          <>
            <TextSkeleton className="h-3 w-3 rounded-full" />
            <TextSkeleton className="h-4 w-5" />
            <TextSkeleton className="h-3 w-3 rounded-full" />
          </>
        }
        avatar={
          <BaseAuthor>
            <AvatarSkeleton size="default" />
            <TextSkeleton className="h-3 w-64" />
          </BaseAuthor>
        }
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
      {!isLastItem(postListIds, index) && <Divider margin="large" />}
    </Fragment>
  ));

export { AvatarSkeleton, TextSkeleton, SkeletonPostList };
