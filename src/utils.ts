import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { type ZodError } from "zod";

import { type VoteType } from "~/typings";

dayjs.extend(relativeTime);

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const timeFromNow = (date: Date) => dayjs().to(date);

export const getTotalVotes = (
  upvotes: number,
  downvotes: number,
  userVoteType: VoteType | null,
) => {
  const authorVote = 1;
  let total = authorVote + (upvotes - downvotes);

  if (userVoteType === "UPVOTE") {
    total += 1;
  } else if (userVoteType === "DOWNVOTE") {
    total -= 1;
  }

  return total;
};

export const isLastItem = (list: Array<unknown>, index: number): boolean =>
  index === list.length - 1;

export const capitalizeFirstLetter = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const getValidationErrors = (error: ZodError) =>
  error.errors.reduce((acc, err) => {
    const fieldName = err.path.join(".");
    const fieldLabel = capitalizeFirstLetter(fieldName);

    let message;

    if (err.code === "too_small") {
      message = `${fieldLabel} must be at least ${err.minimum} characters`;
    } else if (err.code === "too_big") {
      message = `${fieldLabel} must be less than ${err.maximum} characters`;
    }

    const newObj = { ...acc, [fieldName]: message };
    return newObj;
  }, {});
