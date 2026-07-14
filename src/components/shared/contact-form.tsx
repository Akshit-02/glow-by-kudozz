"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactActionState } from "@/actions/contact";

const initialState: ContactActionState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-success/30 bg-success/10 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" />
        <p className="font-display text-xl font-semibold text-foreground">Message sent</p>
        <p className="text-sm text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" className="h-12 rounded-2xl" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="h-12 rounded-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="What's this about?" className="h-12 rounded-2xl" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us more..."
          className="min-h-36 rounded-2xl"
        />
      </div>
      {state.status === "error" && (
        <p className="text-sm font-medium text-destructive">{state.message}</p>
      )}
      <Button type="submit" disabled={isPending} size="lg" className="w-fit rounded-full px-8">
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Send Message <Send className="ml-1.5 h-4 w-4" /></>}
      </Button>
    </form>
  );
}
