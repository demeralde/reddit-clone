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
import { getRoute } from "~/utils";

const AVATAR_SIZE = "large";

const UserButton: FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const logout = useCallback(async () => {
    router.push(getRoute("posts"));
    await signOut();
  }, [signOut]);

  return (
    user && (
      <div className="mt-auto">
        <DropdownMenu>
          <DropdownMenuTrigger disabled={!user}>
            <span className="flex items-center gap-x-4 px-4 py-3">
              {user && (
                <>
                  <Avatar
                    name={user.fullName ?? ""}
                    src={user.imageUrl}
                    size={AVATAR_SIZE}
                  />
                  <span className="font-medium leading-6 text-gray-700">
                    {user.fullName}
                  </span>
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
