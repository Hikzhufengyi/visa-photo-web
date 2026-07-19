import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("ar", "/download")
};

export default function ArDownloadPage() {
  return <DownloadPage locale="ar" />;
}
