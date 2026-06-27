import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";
import { coreSeoKeywords } from "@/data/seo-keywords";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    ...coreSeoKeywords,
    "证件照",
    "护照照片",
    "签证照片",
    "美国护照照片",
    "加拿大签证照片",
    "申根签证照片",
    "印度护照照片",
    "4x6 证件照排版"
  ],
  category: "photo",
  appleWebApp: {
    capable: true,
    title: siteConfig.name
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon"
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      zh: "/zh",
      "x-default": "/en"
    }
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    images: [
      {
        url: "/screenshots/app-store-listing-1.png",
        width: 2120,
        height: 515,
        alt: "IDPhoto Pro App Store listing"
      }
    ],
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/screenshots/app-store-listing-1.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
