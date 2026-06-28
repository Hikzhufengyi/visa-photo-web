import type { Metadata } from "next";
import { MarketingHome } from "@/components/marketing-home";

export const metadata: Metadata = {
  title: "Passport and Visa Photo App for iPhone",
  description:
    "IDPhoto Pro helps you create passport, visa, and ID photos on iPhone with on-device checks, digital export, and print-ready layouts.",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      zh: "/zh",
      ar: "/ar",
      de: "/de",
      "x-default": "/en"
    }
  }
};

export default function EnHomePage() {
  return <MarketingHome locale="en" />;
}
