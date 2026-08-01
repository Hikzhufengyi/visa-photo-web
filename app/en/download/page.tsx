import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "Download IDPhoto Pro",
  description: "Download IDPhoto Pro for iPhone. It is free to download with a one-time unlock; local App Store prices may vary.",
  alternates: staticRouteAlternates("en", "/download")
};

export default function EnDownloadPage() {
  return <DownloadPage locale="en" />;
}
