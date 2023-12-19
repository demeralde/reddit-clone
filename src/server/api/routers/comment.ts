import { VoteType } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { createCommentValidation } from "~/config/validation";

import { rateLimit } from "./utils";

export const commentRouter = createTRPCRouter({
  create: privateProcedure
    .input(createCommentValidation)
    .mutation(async ({ ctx, input: { postId, replyToId, content } }) => {
      const authorId = ctx.auth.userId!;

      const { success } = await rateLimit.limit(authorId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const comment = await ctx.prisma.comment.create({
        data: {
          content,
          authorId,
          postId,
          replyToId,
        },
      });

      return comment;
    }),

  toggleVote: privateProcedure
    .input(
      z.object({
        commentId: z.string(),
        type: z.enum([VoteType.UPVOTE, VoteType.DOWNVOTE]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.userId!;

      const existingVote = await ctx.prisma.commentVote.findUnique({
        where: {
          userId_commentId: {
            userId,
            commentId: input.commentId,
          },
        },
      });

      let commentVote;

      if (!!existingVote) {
        const shouldUndoVote = existingVote.type === input.type;

        if (shouldUndoVote) {
          commentVote = await ctx.prisma.commentVote.delete({
            where: {
              userId_commentId: {
                userId,
                commentId: input.commentId,
              },
            },
          });
        } else {
          commentVote = await ctx.prisma.commentVote.update({
            where: {
              userId_commentId: {
                userId,
                commentId: input.commentId,
              },
            },
            data: {
              type: input.type,
            },
          });
        }
      } else {
        commentVote = await ctx.prisma.commentVote.create({
          data: {
            userId,
            commentId: input.commentId,
            type: input.type,
          },
        });
      }

      return commentVote;
    }),
});
