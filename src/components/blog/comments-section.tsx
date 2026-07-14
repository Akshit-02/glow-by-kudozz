"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle, Send, User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/content";
import type { Comment } from "@/types";

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
        {comment.authorAvatar ? (
          <Image src={comment.authorAvatar} alt={comment.authorName} fill sizes="40px" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <User className="h-5 w-5" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-foreground">{comment.authorName}</p>
          <span className="text-xs text-muted-foreground">{formatDate(comment.createdAt)}</span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-foreground/85">{comment.text}</p>
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 flex flex-col gap-4 border-l-2 border-border pl-4">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function CommentsSection({ comments }: { comments: Comment[] }) {
  const [localComments, setLocalComments] = React.useState(comments);
  const [draft, setDraft] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    setLocalComments((prev) => [
      {
        id: `local-${Date.now()}`,
        postId: comments[0]?.postId ?? "",
        authorName: "You",
        text: draft.trim(),
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setDraft("");
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-foreground">
        <MessageCircle className="h-5 w-5 text-primary" /> Discussion ({localComments.length})
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Share your thoughts or ask a question..."
          className="min-h-24 rounded-2xl border-border bg-card"
        />
        <Button type="submit" className="w-fit rounded-full px-6">
          Post Comment <Send className="ml-1.5 h-3.5 w-3.5" />
        </Button>
      </form>
      <div className="flex flex-col gap-6 border-t border-border pt-6">
        {localComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        {localComments.length === 0 && (
          <p className="text-sm text-muted-foreground">Be the first to share your thoughts.</p>
        )}
      </div>
    </div>
  );
}
