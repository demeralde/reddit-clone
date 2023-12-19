import { clerkClient } from "@clerk/nextjs";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { type VoteType, type Post, type PostVote } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { filterUserForClient } from "~/server/utils/filterUserForClient";
import { type ID } from "~/typings";

interface PostWithVotes extends Post {
  votes: {
    type: PostVote["type"];
    userId: PostVote["userId"];
  }[];
}

const addDataToPosts = async (
  posts: PostWithVotes[],
  userId: ID | undefined | null,
) => {
  const userIds = posts.map((post) => post.authorId);
  const userList = await clerkClient.users.getUserList({
    userId: userIds,
  });
  const users = userList.map(filterUserForClient);

  return posts.map((post) => {
    const author = users.find((user) => user.id === post.authorId);

    if (!author) {
      console.error("AUTHOR NOT FOUND", post);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Author for post not found. POST ID: ${post.id}, USER ID: ${post.authorId}`,
      });
    }

    const userVote = post.votes.find((vote) => vote.userId === userId);
    const userUpvoted = userVote?.type === "UPVOTE";
    const userDownvoted = userVote?.type === "UPVOTE";
    let userVoteType: VoteType | undefined;

    if (userUpvoted) {
      userVoteType = "UPVOTE";
    } else if (userDownvoted) {
      userVoteType = "DOWNVOTE";
    }

    const upvotes = post.votes.filter((vote) => vote.type === "UPVOTE").length;
    const downvotes = post.votes.filter(
      (vote) => vote.type === "DOWNVOTE",
    ).length;

    return {
      id: post.id,
      title: post.title,
      description: post.description,
      createdAt: post.createdAt,
      author: {
        avatarSrc: author.avatarUrl,
        username: author.username,
      },
      upvotes,
      downvotes,
      userVote: userVoteType,
    };
  });
};

// Create a new ratelimiter, that allows 3 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
});

export const postRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.id },
      });

      if (!post) throw new TRPCError({ code: "NOT_FOUND" });

      return (await addDataToPosts([post], ctx.auth.userId))[0];
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      orderBy: [{ createdAt: "desc" }],
      include: {
        votes: {
          select: {
            type: true,
            userId: true,
          },
        },
      },
    });

    return addDataToPosts(posts, ctx.auth.userId);
  }),

  getMyPosts: privateProcedure.query(({ ctx }) =>
    ctx.prisma.post
      .findMany({
        where: {
          authorId: ctx.auth.userId as unknown as string,
        },
        orderBy: [{ createdAt: "desc" }],
        include: {
          votes: {
            select: {
              type: true,
              userId: true,
            },
          },
        },
      })
      .then((posts) => addDataToPosts(posts, ctx.auth.userId)),
  ),

  create: privateProcedure
    .input(
      z.object({
        title: z.string().min(3).max(300),
        description: z.string().min(10).max(40000),
      }),
    )
    .mutation(async ({ ctx, input: { title, description } }) => {
      const authorId = ctx.userId;

      const { success } = await ratelimit.limit(authorId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          title,
          description,
        },
      });

      return post;
    }),
});
