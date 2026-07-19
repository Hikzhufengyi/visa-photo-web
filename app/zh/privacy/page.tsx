import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "IDPhoto Pro 隐私政策",
  description: "IDPhoto Pro 隐私政策：照片处理在设备本地完成，不上传照片，不包含广告 SDK 或第三方分析 SDK。",
  alternates: staticRouteAlternates("zh", "/privacy")
};

export default function ZhPrivacyPage() {
  return <PrivacyPolicyPage locale="zh" />;
}
