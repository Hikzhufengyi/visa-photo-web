import { PrivacyPolicyPage } from "@/components/privacy-policy-page";

export const metadata = {
  title: "سياسة الخصوصية",
  description:
    "سياسة الخصوصية لـ IDPhoto Pro: تتم معالجة الصور على الجهاز بدون رفع الصور وبدون SDK للإعلانات أو تحليلات خارجية."
};

export default function ArPrivacyPage() {
  return <PrivacyPolicyPage locale="ar" />;
}
