import { SupportPage } from "@/components/support-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "Technical Support",
  description:
    "Technical support for IDPhoto Pro. Get help with photo review guidance, export, purchase restore, privacy, and print layouts.",
  alternates: staticRouteAlternates("en", "/support")
};

export default function EnSupportPage() {
  return <SupportPage locale="en" />;
}
