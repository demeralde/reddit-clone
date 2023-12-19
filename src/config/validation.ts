import { z } from "zod";

export const createPostValidation = z.object({
  title: z.string().min(3).max(300),
  description: z.string().min(10).max(40000),
});

export const createCommentValidation = z.object({
  postId: z.string(),
  replyToId: z.string().optional(),
  content: z.string().min(3).max(40000),
});
