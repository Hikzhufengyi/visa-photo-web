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
    .filter((page) => !page.supportedLocales || page.supportedLocales.includes("de"))
    .map((page) => ({
    slug: page.slug
    }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page || (page.supportedLocales && !page.supportedLocales.includes("de"))) {
    return {};
  }

  return {
    ...buildSeoPageMetadata(page, "de"),
    keywords: getSeoPageKeywords(page)
  };
}

export default async function DeSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page || (page.supportedLocales && !page.supportedLocales.includes("de"))) {
    notFound();
  }

  return <SeoLanding locale="de" page={page} />;
}
