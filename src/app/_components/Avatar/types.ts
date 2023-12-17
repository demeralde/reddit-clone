export type AvatarSize = "default" | "large";

export interface AvatarProps {
  username: string;
  src: string;
  size?: AvatarSize;
}

export type AvatarSizeMap = {
  [key in AvatarSize]: string;
};
