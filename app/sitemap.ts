import type { MetadataRoute } from "next";
import { locales } from "@/data/localization";
import { seoPages } from "@/data/seo-pages";
import { siteConfig } from "@/data/site";

const staticRoutes = [
  "/about",
  "/privacy",
  "/terms",
  "/download",
  "/blog",
  "/support"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedStaticRoutes = locales.flatMap((locale) => [
    {
      url: `${siteConfig.domain}/${locale}`,
      lastModified: now
    },
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.domain}/${locale}${route}`,
      lastModified: now
    }))
  ]);
  const localizedSeoRoutes = locales.flatMap((locale) =>
    seoPages.map((page) => ({
      url: `${siteConfig.domain}/${locale}/${page.slug}`,
      lastModified: now
    }))
  );

  return [
    {
      url: siteConfig.domain,
      lastModified: now
    },
    ...localizedStaticRoutes,
    ...localizedSeoRoutes
  ];
}
