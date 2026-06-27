import type { MetadataRoute } from "next";
import { locales } from "@/data/localization";
import { seoPages } from "@/data/seo-pages";
import { siteConfig } from "@/data/site";

const staticRoutes = [
  "",
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
    ...staticRoutes.map((route) => ({
      url: route ? `${siteConfig.domain}/${locale}${route}` : `${siteConfig.domain}/${locale}`,
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
    {
      url: `${siteConfig.domain}/en`,
      lastModified: now
    },
    {
      url: `${siteConfig.domain}/zh`,
      lastModified: now
    },
    ...localizedStaticRoutes,
    ...localizedSeoRoutes
  ];
}
