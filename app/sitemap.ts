import type { MetadataRoute } from "next";
import { locales } from "@/data/localization";
import { seoPages } from "@/data/seo-pages";
import { siteConfig } from "@/data/site";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;
type SitemapItem = MetadataRoute.Sitemap[number];

const staticRoutes = [
  "/about",
  "/compliance",
  "/privacy",
  "/terms",
  "/download",
  "/photo-sizes",
  "/blog",
  "/support"
];

const staticRoutePriority: Record<string, number> = {
  "": 0.9,
  "/download": 0.8,
  "/photo-sizes": 0.8,
  "/compliance": 0.7,
  "/support": 0.7,
  "/blog": 0.7,
  "/about": 0.5,
  "/privacy": 0.3,
  "/terms": 0.3
};

const siteContentUpdatedAt = new Date("2026-07-27T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedStaticRoutes = locales.flatMap((locale) => [
    ...staticRoutes.map((route): SitemapItem => {
      const changeFrequency: ChangeFrequency =
        route === "/blog" ? "weekly" : "monthly";

      return {
        url: route
          ? `${siteConfig.domain}/${locale}${route}`
          : `${siteConfig.domain}/${locale}`,
        lastModified: siteContentUpdatedAt,
        changeFrequency,
        priority: staticRoutePriority[route] ?? 0.5
      };
    })
  ]);
  const localizedSeoRoutes = seoPages.flatMap((page) =>
    (page.supportedLocales ?? locales).map((locale) => ({
      url: `${siteConfig.domain}/${locale}/${page.slug}`,
      lastModified: page.sourceReviewedAt
        ? new Date(`${page.sourceReviewedAt}T00:00:00.000Z`)
        : siteContentUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  );

  return [
    {
      url: `${siteConfig.domain}/llms.txt`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.6
    },
    {
      url: `${siteConfig.domain}/${locales[0]}`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...locales.slice(1).map((locale) => ({
      url: `${siteConfig.domain}/${locale}`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
    ...localizedStaticRoutes,
    ...localizedSeoRoutes
  ];
}
