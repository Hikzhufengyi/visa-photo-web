import type { Metadata } from "next";
import { MarketingHome } from "@/components/marketing-home";

export const metadata: Metadata = {
  title: "Passfoto- und Visafoto-App für iPhone",
  description:
    "IDPhoto Pro hilft dir, Pass-, Visa- und Ausweisfotos auf dem iPhone zu erstellen, mit Prüfungen auf dem Gerät, digitalem Export und Drucklayouts.",
  alternates: {
    canonical: "/de",
    languages: {
      en: "/en",
      zh: "/zh",
      ar: "/ar",
      de: "/de",
      "x-default": "/en"
    }
  }
};

export default function DeHomePage() {
  return <MarketingHome locale="de" />;
}
