import type { Metadata } from "next";
import { CompliancePage } from "@/components/compliance-page";

export const metadata: Metadata = {
  title: "Passport Photo Review Guidance on iPhone",
  description:
    "See the photo review guidance in IDPhoto Pro, including size, background, face position, print readiness, and upload file guidance.",
  alternates: {
    canonical: "/en/compliance",
    languages: {
      en: "/en/compliance",
      zh: "/zh/compliance",
      ar: "/ar/compliance",
      de: "/de/compliance",
      "x-default": "/en/compliance"
    }
  }
};

export default function EnCompliancePage() {
  return <CompliancePage locale="en" />;
}
