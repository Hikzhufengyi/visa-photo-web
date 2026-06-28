import type { Metadata } from "next";
import { MarketingHome } from "@/components/marketing-home";

export const metadata: Metadata = {
  title: "Passport and Visa Photo App for iPhone",
  description:
    "IDPhoto Pro helps you create passport, visa, and ID photos on iPhone with on-device checks, digital export, and print-ready layouts.",
  alternates: {
    canonical: "/ar"
  }
};

export default function ArHomePage() {
  return <MarketingHome locale="ar" />;
}
