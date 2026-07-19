import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("zh", "/download")
};

export default function ZhDownloadPage() {
  return <DownloadPage locale="zh" />;
}
