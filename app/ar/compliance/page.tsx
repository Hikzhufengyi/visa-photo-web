import type { Metadata } from "next";
import { CompliancePage } from "@/components/compliance-page";

export const metadata: Metadata = {
  title: "فحوصات توافق صور المستندات",
  description:
    "اطلع على قائمة فحص صور الجواز والتأشيرة والهوية داخل IDPhoto Pro، بما يشمل المقاس والخلفية وموضع الوجه والطباعة والرفع.",
  alternates: {
    canonical: "/ar/compliance",
    languages: {
      en: "/en/compliance",
      zh: "/zh/compliance",
      ar: "/ar/compliance",
      de: "/de/compliance",
      "x-default": "/en/compliance"
    }
  }
};

export default function ArCompliancePage() {
  return <CompliancePage locale="ar" />;
}
