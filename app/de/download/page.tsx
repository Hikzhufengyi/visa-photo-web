import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "IDPhoto Pro herunterladen",
  description: "IDPhoto Pro für iPhone herunterladen. Kostenlos laden, einmalig freischalten; Preise können je nach App Store variieren.",
  alternates: staticRouteAlternates("de", "/download")
};

export default function DeDownloadPage() {
  return <DownloadPage locale="de" />;
}
