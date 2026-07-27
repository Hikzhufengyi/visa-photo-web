import type { Metadata } from "next";
import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata: Metadata = {
  title: "كل مقاسات الصور | IDPhoto Pro",
  description: "تصفح جميع قوالب مقاسات الصور في IDPhoto Pro حسب الدولة أو نوع المستند أو المقاس أو البكسل.",
  alternates: staticRouteAlternates("ar", "/photo-sizes")
};

export default function ArPhotoSizesPage() {
  return <ContentHubPage locale="ar" />;
}
