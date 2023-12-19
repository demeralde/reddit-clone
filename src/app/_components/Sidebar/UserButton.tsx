"use client";
import { useCallback, type FC } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/app/_components/ui/dropdown-menu";
import Avatar from "~/app/_components/Avatar";
import { AvatarSkeleton, TextSkeleton } from "~/app/_components/Skeleton";
import { ROUTES } from "~/config/routes";

const UserButton: FC = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const avatarSize = "large";

  const logout = useCallback(async () => {
    router.push(ROUTES.posts);
    await signOut();
  }, [signOut]);

  return (
    (user ?? !isLoaded) && (
      <div className="mt-auto">
        <DropdownMenu>
          <DropdownMenuTrigger disabled={!user}>
            <span className="flex items-center gap-x-4 px-4 py-3">
              {user ? (
                <>
                  <Avatar
                    name={user.fullName ?? "no username"}
                    src={user.imageUrl}
                    size={avatarSize}
                  />
                  <span className="text-left font-medium leading-6 text-gray-700">
                    {user.fullName ?? "no username"}
                  </span>
                </>
              ) : (
                <>
                  <AvatarSkeleton size={avatarSize} />
                  <TextSkeleton />
                </>
              )}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  );
};

export default UserButton;
