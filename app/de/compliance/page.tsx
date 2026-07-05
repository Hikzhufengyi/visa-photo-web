import type { Metadata } from "next";
import { CompliancePage } from "@/components/compliance-page";

export const metadata: Metadata = {
  title: "Prüfliste für Ausweisfotos",
  description:
    "Sieh dir die vollständige Checkliste in IDPhoto Pro an, inklusive Größe, Hintergrund, Gesichtsposition, Druckbereitschaft und Upload-Hinweisen.",
  alternates: {
    canonical: "/de/compliance",
    languages: {
      en: "/en/compliance",
      zh: "/zh/compliance",
      ar: "/ar/compliance",
      de: "/de/compliance",
      "x-default": "/en/compliance"
    }
  }
};

export default function DeCompliancePage() {
  return <CompliancePage locale="de" />;
}
