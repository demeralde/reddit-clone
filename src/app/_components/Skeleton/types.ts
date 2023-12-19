import { type AvatarSize } from "~/app/_components/Avatar";

export interface SkeletonProps {
  className?: string;
}

export interface AvatarSkeletonProps extends SkeletonProps {
  size: AvatarSize;
}

export type TextSkeletonProps = SkeletonProps;
