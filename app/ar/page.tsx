import type { Metadata } from "next";
import { MarketingHome } from "@/components/marketing-home";

export const metadata: Metadata = {
  title: "تطبيق صور الجواز والتأشيرة والإقامة على iPhone",
  description:
    "يساعدك IDPhoto Pro على تجهيز صور الجواز والتأشيرة والإقامة على iPhone مع فحوصات على الجهاز وتصدير رقمي وتخطيطات طباعة.",
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/en",
      zh: "/zh",
      ar: "/ar",
      de: "/de",
      "x-default": "/en"
    }
  }
};

export default function ArHomePage() {
  return <MarketingHome locale="ar" />;
}
