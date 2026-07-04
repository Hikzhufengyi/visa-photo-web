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
  "/privacy",
  "/terms",
  "/download",
  "/blog",
  "/support"
];

const staticRoutePriority: Record<string, number> = {
  "": 0.9,
  "/download": 0.8,
  "/support": 0.7,
  "/blog": 0.7,
  "/about": 0.5,
  "/privacy": 0.3,
  "/terms": 0.3
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedStaticRoutes = locales.flatMap((locale) => [
    ...staticRoutes.map((route): SitemapItem => {
      const changeFrequency: ChangeFrequency =
        route === "/blog" ? "weekly" : "monthly";

      return {
        url: route
          ? `${siteConfig.domain}/${locale}${route}`
          : `${siteConfig.domain}/${locale}`,
        lastModified: now,
        changeFrequency,
        priority: staticRoutePriority[route] ?? 0.5
      };
    })
  ]);
  const localizedSeoRoutes = locales.flatMap((locale) =>
    seoPages.map((page) => ({
      url: `${siteConfig.domain}/${locale}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  );

  return [
    {
      url: siteConfig.domain,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.domain}/${locales[0]}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...locales.slice(1).map((locale) => ({
      url: `${siteConfig.domain}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
    ...localizedStaticRoutes,
    ...localizedSeoRoutes
  ];
}
