import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLanding } from "@/components/seo-landing";
import { getSeoPageKeywords } from "@/data/seo-keywords";
import { getSeoPage, seoPages } from "@/data/seo-pages";
import { buildSeoPageMetadata } from "@/data/seo-utils";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return seoPages
    .filter((page) => !page.supportedLocales || page.supportedLocales.includes("zh"))
    .map((page) => ({
    slug: page.slug
    }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page || (page.supportedLocales && !page.supportedLocales.includes("zh"))) {
    return {};
  }

  return {
    ...buildSeoPageMetadata(page, "zh"),
    keywords: [
      ...getSeoPageKeywords(page),
      `${page.documentName} 证件照`,
      `${page.country} 证件照`,
      `${page.country} 护照照片`,
      `${page.country} 签证照片`,
      "证件照制作",
      "护照照片尺寸",
      "签证照片尺寸"
    ]
  };
}

export default async function ZhSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page || (page.supportedLocales && !page.supportedLocales.includes("zh"))) {
    notFound();
  }

  return <SeoLanding locale="zh" page={page} />;
}
