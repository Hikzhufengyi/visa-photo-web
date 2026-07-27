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
    .filter((page) => !page.supportedLocales || page.supportedLocales.includes("ar"))
    .map((page) => ({
    slug: page.slug
    }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page || (page.supportedLocales && !page.supportedLocales.includes("ar"))) {
    return {};
  }

  return {
    ...buildSeoPageMetadata(page, "ar"),
    keywords: getSeoPageKeywords(page),
  };
}

export default async function ArSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page || (page.supportedLocales && !page.supportedLocales.includes("ar"))) {
    notFound();
  }

  return <SeoLanding locale="ar" page={page} />;
}
