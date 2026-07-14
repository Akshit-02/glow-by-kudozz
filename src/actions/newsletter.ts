"use server";

export interface NewsletterActionState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function subscribeToNewsletter(
  _prevState: NewsletterActionState,
  formData: FormData
): Promise<NewsletterActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // In production this would call the CMS/ESP subscribe endpoint.
  await new Promise((resolve) => setTimeout(resolve, 400));

  return { status: "success", message: "You're on the list! Check your inbox to confirm." };
}
