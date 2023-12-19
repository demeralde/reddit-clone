import { type FC } from "react";

import * as BaseAvatar from "~/app/_components/ui/avatar";
import { AvatarSkeleton } from "~/app/_components/Skeleton";

import { type AvatarProps } from "./types";
import { SIZE_MAP } from "./constants";

const Avatar: FC<AvatarProps> = ({ src, name, size = "default" }) => (
  <BaseAvatar.Avatar className={SIZE_MAP[size]}>
    <BaseAvatar.AvatarImage src={src} className="object-cover" alt={name} />
    <BaseAvatar.AvatarFallback>
      <AvatarSkeleton size={size} />
    </BaseAvatar.AvatarFallback>
  </BaseAvatar.Avatar>
);

export default Avatar;
