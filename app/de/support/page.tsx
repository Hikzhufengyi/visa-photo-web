import { SupportPage } from "@/components/support-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "IDPhoto Pro Support",
  description:
    "Support für IDPhoto Pro: Hilfe zu Passfotos, Visa-Fotos, Datenschutz, Export und einmaliger Freischaltung.",
  alternates: staticRouteAlternates("de", "/support")
};

export default function DeSupportPage() {
  return <SupportPage locale="de" />;
}
