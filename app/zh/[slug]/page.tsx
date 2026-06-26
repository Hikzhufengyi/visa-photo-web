import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLanding } from "@/components/seo-landing";
import { getSeoPageKeywords } from "@/data/seo-keywords";
import { getSeoPage, seoPages } from "@/data/seo-pages";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | 中文`,
    description: `${page.heading}. Typical size: ${page.size}, background: ${page.background}, with iPhone on-device checks plus digital and print-ready export support.`,
    keywords: [
      ...getSeoPageKeywords(page),
      `${page.documentName} 证件照`,
      `${page.country} 证件照`,
      `${page.country} 护照照片`,
      `${page.country} 签证照片`,
      "证件照制作",
      "护照照片尺寸",
      "签证照片尺寸"
    ],
    alternates: {
      canonical: `/zh/${page.slug}`,
      languages: {
        en: `/en/${page.slug}`,
        zh: `/zh/${page.slug}`,
        "x-default": `/en/${page.slug}`
      }
    },
    openGraph: {
      title: `${page.title} | 中文`,
      description: page.intro,
      url: `${siteConfig.domain}/zh/${page.slug}`,
      type: "article",
      images: [
        {
          url: "/screenshots/smart-check-score.png",
          width: 1320,
          height: 2868,
          alt: "IDPhoto Pro 智能检测评分"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | 中文`,
      description: page.intro,
      images: ["/screenshots/smart-check-score.png"]
    }
  };
}

export default async function ZhSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  return <SeoLanding locale="zh" page={page} />;
}
