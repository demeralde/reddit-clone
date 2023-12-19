import { type FC } from "react";
import Link from "next/link";

import { cn } from "~/utils";
import { ROUTES } from "~/config/routes";

import { type NotFoundProps } from "./types";

const NotFound: FC<NotFoundProps> = ({ label, centreText }) => (
  <div className={cn("flex flex-col gap-y-2", centreText && "text-center")}>
    <h1 className="text-4xl font-medium text-gray-900">{label} Not Found</h1>
    <p className="text-gray-600">
      Go back to the{" "}
      <Link href={ROUTES.posts} className="font-medium text-blue-950">
        posts page
      </Link>
    </p>
  </div>
);

export default NotFound;
