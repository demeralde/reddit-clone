import { type FC } from "react";

import Avatar from "~/app/_components/Avatar";
import { timeFromNow } from "~/utils";

import { type AuthorProps } from "./types";

const Author: FC<AuthorProps> = ({ avatarSrc, username, createdAt, label }) => (
  <div className="flex items-center gap-x-2">
    <Avatar src={avatarSrc} name={username} />
    <span className="text-sm leading-5 text-gray-600">
      {label} {username} {timeFromNow(createdAt)}
    </span>
  </div>
);

export default Author;
