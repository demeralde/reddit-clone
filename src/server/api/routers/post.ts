import { clerkClient } from "@clerk/nextjs";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import {
  type VoteType,
  type Post,
  type PostVote,
  type Comment,
  type CommentVote,
} from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { filterUserForClient } from "~/server/utils/filterUserForClient";
import { type ID } from "~/typings";

interface Vote<T extends PostVote | CommentVote> {
  type: T["type"];
  userId: T["userId"];
}

interface PostWithVotes extends Post {
  votes: Vote<PostVote>[];
}

interface CommentWithReplyIds extends Comment {
  votes: Vote<CommentVote>[];
  replies: {
    id: Comment["id"];
  }[];
}

interface StructuredComment extends Comment {
  upvotes: number;
  downvotes: number;
  userVoteType?: VoteType;
  replies: StructuredComment[];
  author: {
    id: string;
    avatarSrc: string;
    username: string;
  };
}

interface PostWithComments extends PostWithVotes {
  comments: CommentWithReplyIds[];
}

type VoteUnion = PostWithVotes["votes"] | CommentWithReplyIds["votes"];

const getVoteCount = (votes: VoteUnion, type: VoteType) =>
  votes.filter((vote) => vote.type === type).length;

const getVoteData = (votes: VoteUnion, userId: ID | undefined | null) => {
  const userVote = votes.find((vote) => vote.userId === userId);
  const userUpvoted = userVote?.type === "UPVOTE";
  const userDownvoted = userVote?.type === "UPVOTE";
  let userVoteType: VoteType | undefined;

  if (userUpvoted) {
    userVoteType = "UPVOTE";
  } else if (userDownvoted) {
    userVoteType = "DOWNVOTE";
  }

  const upvotes = getVoteCount(votes, "UPVOTE");
  const downvotes = getVoteCount(votes, "DOWNVOTE");

  return {
    userVoteType,
    upvotes,
    downvotes,
  };
};

const buildCommentTree = (
  flatComments: CommentWithReplyIds[],
  parentId: string | null,
  userId: ID | undefined | null,
  authors: ReturnType<typeof filterUserForClient>[],
) => {
  const tree: StructuredComment[] = [];

  for (const comment of flatComments) {
    if (comment.replyToId === parentId) {
      const nestedReplies = buildCommentTree(
        flatComments,
        comment.id,
        userId,
        authors,
      );
      const newComment: StructuredComment = {
        ...comment,
        replies: nestedReplies,
        ...getVoteData(comment.votes, userId),
        author: authors.find(
          (author) => author.id === comment.authorId,
        ) as StructuredComment["author"],
      };

      tree.push(newComment);
    }
  }

  return tree;
};

const addDataToPosts = async (
  posts: PostWithVotes[] | PostWithComments[],
  userId: ID | undefined | null,
) => {
  const userIds = posts.map((post) => post.authorId);
  const userList = await clerkClient.users.getUserList({
    userId: userIds,
  });
  const users = userList.map(filterUserForClient);

  return await Promise.all(
    posts.map(async (post) => {
      const author = users.find((user) => user.id === post.authorId);

      if (!author) {
        console.error("AUTHOR NOT FOUND", post);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Author for post not found. POST ID: ${post.id}, USER ID: ${post.authorId}`,
        });
      }

      let comments;

      if ("comments" in post) {
        const authorIds = post.comments.map((comment) => comment.authorId);
        const authorList = await clerkClient.users.getUserList({
          userId: authorIds,
        });
        const authors = authorList.map(filterUserForClient);
        comments = buildCommentTree(post.comments, null, userId, authors);
      }

      return {
        id: post.id,
        title: post.title,
        description: post.description,
        createdAt: post.createdAt,
        author: {
          avatarSrc: author.avatarSrc,
          username: author.username,
        },
        ...getVoteData(post.votes, userId),
        comments,
      };
    }),
  );
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
        include: {
          votes: {
            select: {
              type: true,
              userId: true,
            },
          },
          comments: {
            select: {
              id: true,
              content: true,
              authorId: true,
              votes: {
                select: {
                  type: true,
                  userId: true,
                },
              },
              postId: true,
              createdAt: true,
              replyToId: true,
              replies: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
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
