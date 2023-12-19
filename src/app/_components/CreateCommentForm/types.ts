export interface CreateCommentFormProps {
  postId: string;
  replyToId?: string;
}

export interface Errors {
  content?: string;
}
