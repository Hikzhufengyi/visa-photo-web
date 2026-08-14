import { AboutPage } from "@/components/about-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "ما الذي يفعله IDPhoto Pro وما الذي لا يفعله",
  description: "حقائق المنتج وحدود الخصوصية والقيود وأدلة مقاسات الصور في IDPhoto Pro.",
  alternates: staticRouteAlternates("ar", "/about")
};

export default function ArAboutPage() {
  return <AboutPage locale="ar" />;
}
