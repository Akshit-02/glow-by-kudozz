import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_CONFIG.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updatedAt="July 1, 2026"
      intro={`This Privacy Policy explains how ${SITE_CONFIG.name} ("we", "us") collects, uses, and shares information when you visit ${SITE_CONFIG.url} or subscribe to our newsletter.`}
      sections={[
        {
          heading: "1. Information We Collect",
          paragraphs: [
            "We collect information you provide directly, such as your email address when subscribing to our newsletter or submitting a contact form.",
            "We automatically collect certain technical information, including IP address, browser type, device information, and pages visited, via cookies and similar technologies.",
          ],
        },
        {
          heading: "2. How We Use Information",
          paragraphs: [
            "We use collected information to deliver our newsletter, respond to inquiries, improve our content and site performance, and measure the effectiveness of our editorial and marketing efforts.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "3. Cookies",
          paragraphs: [
            "We use cookies to personalize content, remember your preferences (such as theme selection), and analyze site traffic. You can control cookie preferences through our cookie banner or your browser settings.",
          ],
        },
        {
          heading: "4. Third-Party Services",
          paragraphs: [
            "We may use third-party analytics and email service providers to operate our site and newsletter. These providers are bound by their own privacy policies and data protection obligations.",
          ],
        },
        {
          heading: "5. Your Rights",
          paragraphs: [
            "You may request access to, correction of, or deletion of your personal information at any time by contacting us at " +
              SITE_CONFIG.contactEmail +
              ". You may unsubscribe from our newsletter using the link included in every email.",
          ],
        },
        {
          heading: "6. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy periodically. Material changes will be reflected by an updated 'Last updated' date at the top of this page.",
          ],
        },
      ]}
    />
  );
}
