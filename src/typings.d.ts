export { VoteType } from "@prisma/client";

import { type AvatarProps } from "~/app/_components/Avatar";

export type ID = string;

export type Author = {
  id: ID;
  username: AvatarProps["name"];
  avatarSrc: AvatarProps["src"];
};
