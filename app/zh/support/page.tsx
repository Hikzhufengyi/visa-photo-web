import { SupportPage } from "@/components/support-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "IDPhoto Pro 技术支持",
  description: "IDPhoto Pro 技术支持：查看证件照制作、智能检测、购买恢复、隐私和导出相关常见问题。",
  alternates: staticRouteAlternates("zh", "/support")
};

export default function ZhSupportPage() {
  return <SupportPage locale="zh" />;
}
