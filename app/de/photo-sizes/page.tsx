import type { Metadata } from "next";
import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "Alle Fotogrößen | IDPhoto Pro",
  description: "Durchsuche alle IDPhoto-Pro-Fotogrößen nach Land, Dokumenttyp, Größe oder Pixeln.",
  alternates: staticRouteAlternates("de", "/photo-sizes")
};

export default function DePhotoSizesPage() {
  return <ContentHubPage locale="de" />;
}
