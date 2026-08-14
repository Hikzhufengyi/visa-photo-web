import { AboutPage } from "@/components/about-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "Was IDPhoto Pro macht und was nicht",
  description: "Produktfakten, Datenschutzgrenzen, Einschränkungen und Fotogrößen-Ratgeber für IDPhoto Pro.",
  alternates: staticRouteAlternates("de", "/about")
};

export default function DeAboutPage() {
  return <AboutPage locale="de" />;
}
