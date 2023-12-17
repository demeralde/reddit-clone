import { type AvatarProps } from ".";

export const getInitials = (username: AvatarProps["username"]) =>
  username.slice(0, 2);
