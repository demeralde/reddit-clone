import { type FC } from "react";

import * as BaseAvatar from "~/app/_components/ui/avatar";

import { type AvatarProps } from "./types";
import { getInitials } from "./utils";
import { SIZE_MAP } from "./constants";

const Avatar: FC<AvatarProps> = ({ src, name, size = "default" }) => (
  <BaseAvatar.Avatar className={SIZE_MAP[size]}>
    <BaseAvatar.AvatarImage src={src} className="object-cover" />
    <BaseAvatar.AvatarFallback>{getInitials(name)}</BaseAvatar.AvatarFallback>
  </BaseAvatar.Avatar>
);

export default Avatar;
