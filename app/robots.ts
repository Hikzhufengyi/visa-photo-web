import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot"
        ],
        allow: "/"
      }
    ],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
    host: new URL(siteConfig.domain).host
  };
}
