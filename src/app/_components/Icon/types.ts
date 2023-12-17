import { type ComponentType } from "react";

type IconColor =
  | "gray-600"
  | "gray-700"
  | "gray-800"
  | "primary-500"
  | "primary-600";

type IconSize = "small" | "default";

export type IconType =
  | "home"
  | "login"
  | "upvote"
  | "downvote"
  | "myPosts"
  | "backArrow"
  | "comment";

export interface IconProps {
  type: IconType;
  size: IconSize;
  color: IconColor;
}

export type IconSVGProps = {
  size: number;
};

export type IconColorMap = {
  [key in IconColor]: string;
};

export type IconSizeMap = {
  [key in IconSize]: number;
};

export type IconTypeMap = {
  [key in IconType]: ComponentType<IconSVGProps>;
};
