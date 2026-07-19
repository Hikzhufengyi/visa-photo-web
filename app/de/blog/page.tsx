import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "Leitfaden für Pass-, Visa- und Ausweisfoto-Größen",
  description:
    "Durchsuche IDPhoto Pro Ratgeber für Passfotos, Visafotos, Ausweisfotos, Aufenthaltsdokumente und Drucklayouts.",
  alternates: staticRouteAlternates("de", "/blog")
};

export default function DeBlogPage() {
  return <ContentHubPage locale="de" />;
}
