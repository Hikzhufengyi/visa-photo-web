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
    title: page.title,
    description: `${page.heading}. Typical size: ${page.size}, background: ${page.background}, with iPhone on-device checks plus digital and print-ready export support.`,
    keywords: getSeoPageKeywords(page),
    alternates: {
      canonical: `/en/${page.slug}`,
      languages: {
        en: `/en/${page.slug}`,
        zh: `/zh/${page.slug}`,
        "x-default": `/en/${page.slug}`
      }
    },
    openGraph: {
      title: page.title,
      description: page.intro,
      url: `${siteConfig.domain}/en/${page.slug}`,
      type: "article",
      images: [
        {
          url: "/screenshots/smart-check-score.png",
          width: 1320,
          height: 2868,
          alt: `${page.documentName} photo checks in IDPhoto Pro`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.intro,
      images: ["/screenshots/smart-check-score.png"]
    }
  };
}

export default async function EnSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  return <SeoLanding locale="en" page={page} />;
}
