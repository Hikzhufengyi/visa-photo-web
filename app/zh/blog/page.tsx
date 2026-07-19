import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "护照照、签证照与证件照规格指南",
  description:
    "按国家、证件类型、证件照尺寸和打印排版浏览 IDPhoto Pro 的证件照规格指南。",
  alternates: staticRouteAlternates("zh", "/blog")
};

export default function ZhBlogPage() {
  return <ContentHubPage locale="zh" />;
}
