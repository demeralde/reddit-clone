import { type FC } from "react";

import Avatar from "~/app/_components/Avatar";
import { timeFromNow } from "~/utils";

import { type BaseAuthorProps, type AuthorProps } from "./types";

export const BaseAuthor: FC<BaseAuthorProps> = ({ children }) => (
  <div className="flex items-center gap-x-2">{children}</div>
);

const Author: FC<AuthorProps> = ({ avatarSrc, username, createdAt, label }) => (
  <BaseAuthor>
    <Avatar src={avatarSrc} name={username} />
    <span className="text-sm leading-5 text-gray-600">
      {label} {username} {timeFromNow(createdAt)}
    </span>
  </BaseAuthor>
);

export default Author;
