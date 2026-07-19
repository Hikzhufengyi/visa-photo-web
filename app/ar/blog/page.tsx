import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "دليل مقاسات صور الجواز والتأشيرة والهوية",
  description:
    "تصفح أدلة مقاسات صور الجواز والتأشيرة والهوية والإقامة وتخطيطات الطباعة في IDPhoto Pro.",
  alternates: staticRouteAlternates("ar", "/blog")
};

export default function ArBlogPage() {
  return <ContentHubPage locale="ar" />;
}
