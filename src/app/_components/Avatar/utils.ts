import { type AvatarProps } from ".";

export const getInitials = (username: AvatarProps["name"]) =>
  username.slice(0, 2);
