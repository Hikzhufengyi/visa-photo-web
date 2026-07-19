import { SupportPage } from "@/components/support-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "الدعم الفني",
  description:
    "الدعم الفني لـ IDPhoto Pro: مساعدة في فحوصات صور المستندات والتصدير واستعادة الشراء والخصوصية وتخطيطات الطباعة.",
  alternates: staticRouteAlternates("ar", "/support")
};

export default function ArSupportPage() {
  return <SupportPage locale="ar" />;
}
