import { AboutPage } from "@/components/about-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "What IDPhoto Pro Does and Does Not Do",
  description: "Product facts, privacy boundary, limitations, and photo-size guidance for IDPhoto Pro on iPhone.",
  alternates: staticRouteAlternates("en", "/about")
};

export default function EnAboutPage() {
  return <AboutPage locale="en" />;
}
