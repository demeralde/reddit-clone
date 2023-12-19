"use client";
import { useUser } from "@clerk/nextjs";
import { type FC } from "react";

import Avatar from "~/app/_components/Avatar";
import { AvatarSkeleton } from "../Skeleton";

const AvatarContainer: FC = () => {
  const { user, isLoaded } = useUser();
  const size = "default";

  if (!isLoaded) {
    return <AvatarSkeleton size={size} />;
  }

  return (
    user && (
      <Avatar
        size={size}
        name={user.fullName ?? "No username"}
        src={user.imageUrl}
      />
    )
  );
};

export default AvatarContainer;
