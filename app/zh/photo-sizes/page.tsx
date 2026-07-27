import type { Metadata } from "next";
import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "全部照片尺寸 | IDPhoto Pro",
  description: "按国家、证件类型、尺寸或像素浏览 IDPhoto Pro 的全部照片尺寸模板。",
  alternates: staticRouteAlternates("zh", "/photo-sizes")
};

export default function ZhPhotoSizesPage() {
  return <ContentHubPage locale="zh" />;
}
