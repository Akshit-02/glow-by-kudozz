import type { Comment } from "@/types";

export const comments: Comment[] = [];

export function getCommentsByPostId(postId: string) {
  return comments.filter((c) => c.postId === postId);
}
