import type { Metadata } from "next";
import { MarketingHome } from "@/components/marketing-home";

export const metadata: Metadata = {
  title: "护照照、签证照与证件照制作 App",
  description:
    "IDPhoto Pro 支持多国证件规格、本地合规检查、电子版导出和打印排版，适合在 iPhone 上制作护照照、签证照和常见证件照。",
  alternates: {
    canonical: "/zh"
  }
};

export default function ZhHomePage() {
  return <MarketingHome locale="zh" />;
}
