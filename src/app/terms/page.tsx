import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions governing your use of ${SITE_CONFIG.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      updatedAt="July 1, 2026"
      intro={`These Terms of Service govern your use of ${SITE_CONFIG.url}. By accessing our site, you agree to these terms.`}
      sections={[
        {
          heading: "1. Use of Content",
          paragraphs: [
            `All articles, images, and other content on ${SITE_CONFIG.name} are owned by us or our licensors and are protected by copyright law. You may share links to our content but may not republish full articles without written permission.`,
          ],
        },
        {
          heading: "2. Not Medical Advice",
          paragraphs: [
            "Content on this site, including articles reviewed by a licensed dermatologist, is provided for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider before starting a new skincare, haircare, or wellness regimen.",
          ],
        },
        {
          heading: "3. Affiliate Relationships",
          paragraphs: [
            "Some links on this site are affiliate links, meaning we may earn a commission if you make a purchase through them, at no additional cost to you. This does not influence our editorial recommendations.",
          ],
        },
        {
          heading: "4. User Conduct",
          paragraphs: [
            "When commenting or submitting content to our site, you agree not to post anything unlawful, harassing, defamatory, or infringing on others' rights. We reserve the right to remove content that violates these terms.",
          ],
        },
        {
          heading: "5. Limitation of Liability",
          paragraphs: [
            `${SITE_CONFIG.name} and its parent company are not liable for any damages arising from your use of the site or reliance on its content, to the fullest extent permitted by law.`,
          ],
        },
        {
          heading: "6. Governing Law",
          paragraphs: [
            "These terms are governed by applicable law in the jurisdiction where our publisher is headquartered, without regard to conflict of law principles.",
          ],
        },
      ]}
    />
  );
}
