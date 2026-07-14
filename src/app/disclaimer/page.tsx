import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Editorial, medical, and affiliate disclaimers for ${SITE_CONFIG.name}.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      path="/disclaimer"
      updatedAt="July 1, 2026"
      intro={`The following disclaimers apply to all content published on ${SITE_CONFIG.url}.`}
      sections={[
        {
          heading: "Medical Disclaimer",
          paragraphs: [
            "Content is provided for general informational and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a physician or qualified dermatologist regarding any skin, hair, or health condition.",
            "Clinical claims are reviewed by our medical reviewer for general accuracy, but individual results vary based on skin type, health history, and product formulation.",
          ],
        },
        {
          heading: "Affiliate Disclosure",
          paragraphs: [
            `${SITE_CONFIG.name} participates in affiliate marketing programs. We may earn a commission when you purchase products through links on our site, at no additional cost to you. Product features and placement are determined by editorial judgment, not commission rates.`,
          ],
        },
        {
          heading: "Testing & Review Disclosure",
          paragraphs: [
            "Where we state a product was tested by our editorial team, this reflects the personal experience of that individual editor and may not represent the experience of all users.",
          ],
        },
        {
          heading: "Accuracy of Information",
          paragraphs: [
            "We strive to keep content accurate and current, updating evergreen guides periodically. However, product formulations, pricing, and availability may change after publication without our knowledge.",
          ],
        },
      ]}
    />
  );
}
