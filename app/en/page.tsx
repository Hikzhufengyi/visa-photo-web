import type { Metadata } from "next";
import { MarketingHome } from "@/components/marketing-home";

export const metadata: Metadata = {
  title: "Passport and Visa Photo App for iPhone",
  description:
    "IDPhoto Pro helps you prepare photo files on iPhone for passport, visa, and ID photo workflows, with on-device review guidance, digital export, and print layouts.",
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
