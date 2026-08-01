import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "下载 IDPhoto Pro",
  description: "下载 iPhone 版 IDPhoto Pro。免费下载，一次性解锁；各地区 App Store 价格可能不同。",
  alternates: staticRouteAlternates("zh", "/download")
};

export default function ZhDownloadPage() {
  return <DownloadPage locale="zh" />;
}
