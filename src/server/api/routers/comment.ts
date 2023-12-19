import { VoteType } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const commentRouter = createTRPCRouter({
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
