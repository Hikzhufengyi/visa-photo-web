import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for IDPhoto Pro. Photo processing stays on device, with no photo upload, no ad SDKs, and no third-party analytics SDKs.",
  alternates: staticRouteAlternates("en", "/privacy")
};

export default function EnPrivacyPage() {
  return <PrivacyPolicyPage locale="en" />;
}
