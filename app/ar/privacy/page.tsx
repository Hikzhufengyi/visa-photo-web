import { PrivacyPolicyPage } from "@/components/privacy-policy-page";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for IDPhoto Pro. Photo processing stays on device, with no photo upload, no ad SDKs, and no third-party analytics SDKs."
};

export default function ArPrivacyPage() {
  return <PrivacyPolicyPage locale="ar" />;
}
