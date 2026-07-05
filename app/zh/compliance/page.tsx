import type { Metadata } from "next";
import { CompliancePage } from "@/components/compliance-page";

export const metadata: Metadata = {
  title: "证件照合规校验清单",
  description:
    "查看 IDPhoto Pro 在 iPhone 上提供的完整证件照检查项，包括尺寸、背景、脸部位置、打印导出和上传文件限制。",
  alternates: {
    canonical: "/zh/compliance",
    languages: {
      en: "/en/compliance",
      zh: "/zh/compliance",
      ar: "/ar/compliance",
      de: "/de/compliance",
      "x-default": "/en/compliance"
    }
  }
};

export default function ZhCompliancePage() {
  return <CompliancePage locale="zh" />;
}
