import { AboutPage } from "@/components/about-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "IDPhoto Pro 能做什么，不能做什么",
  description: "查看 IDPhoto Pro 的产品事实、隐私边界、使用限制和照片尺寸指南。",
  alternates: staticRouteAlternates("zh", "/about")
};

export default function ZhAboutPage() {
  return <AboutPage locale="zh" />;
}
