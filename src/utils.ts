import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { type RouteName, ROUTES, type ParamMap } from "~/app/config";

dayjs.extend(relativeTime);

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const timeFromNow = (date: Date) => dayjs().to(date);

export const getTotalVotes = (
  upvotes: number,
  downvotes: number,
  userVote?: VoteType,
) => {
  let total = upvotes - downvotes;

  if (userVote === "upvote") {
    total += 1;
  } else if (userVote === "downvote") {
    total -= 1;
  }

  return total;
};

export const isLastItem = (list: Array<unknown>, index: number): boolean =>
  index === list.length - 1;

const replaceRouteParam = (path: string, params: ParamMap, key: string) => {
  let unformattedPath = path;

  if (params[key] !== undefined) {
    unformattedPath = unformattedPath.replace(`:${key}`, params[key]!);
  }

  return unformattedPath;
};

export const getRoute = (route: RouteName, params?: ParamMap) => {
  const routeObj = ROUTES[route];
  let path = routeObj.path;

  if (params && "params" in routeObj) {
    const paramKeys = routeObj.params;

    paramKeys.forEach((key) => {
      path = replaceRouteParam(path, params, key);
    });
  }

  return path;
};
