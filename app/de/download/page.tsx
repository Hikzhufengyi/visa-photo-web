import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("de", "/download")
};

export default function DeDownloadPage() {
  return <DownloadPage locale="de" />;
}
