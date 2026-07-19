import { ContentHubPage } from "@/components/content-hub-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "Passport & Visa Photo Size Requirements Guide",
  description:
    "Browse passport photo, visa photo, ID photo, residence permit, 4x6 print layout, and document photo size requirement guides.",
  alternates: staticRouteAlternates("en", "/blog")
};

export default function EnBlogPage() {
  return <ContentHubPage locale="en" />;
}
