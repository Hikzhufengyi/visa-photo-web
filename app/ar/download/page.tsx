import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "تنزيل IDPhoto Pro",
  description: "نزّل IDPhoto Pro على iPhone. التنزيل مجاني والفتح لمرة واحدة، وقد تختلف الأسعار حسب متجر App Store المحلي.",
  alternates: staticRouteAlternates("ar", "/download")
};

export default function ArDownloadPage() {
  return <DownloadPage locale="ar" />;
}
