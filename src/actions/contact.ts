"use server";

export interface ContactActionState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || message.length < 10) {
    return {
      status: "error",
      message: "Please fill out your name, a valid email, and a message of at least 10 characters.",
    };
  }

  // In production this would forward to a support inbox or CRM.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { status: "success", message: "Thanks for reaching out! We'll reply within 1-2 business days." };
}
