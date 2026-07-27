import type { Metadata } from "next";
import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "All Photo Sizes | IDPhoto Pro",
  description: "Browse all IDPhoto Pro photo-size presets by country, document type, dimensions, or pixels.",
  alternates: staticRouteAlternates("en", "/photo-sizes")
};

export default function EnPhotoSizesPage() {
  return <ContentHubPage locale="en" />;
}
