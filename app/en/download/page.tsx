import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("en", "/download")
};

export default function EnDownloadPage() {
  return <DownloadPage locale="en" />;
}
