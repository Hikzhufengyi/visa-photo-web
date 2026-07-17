import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteChrome } from "@/components/site-chrome";
import { coreSeoKeywords } from "@/data/seo-keywords";
import { siteConfig } from "@/data/site";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification
      }
    : undefined,
  appleWebApp: {
    capable: true,
    title: siteConfig.name
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png"
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      zh: "/zh",
      ar: "/ar",
      de: "/de",
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
    locale: "en_US",
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
    <html lang="en">
      <body>
        <Script id="document-locale" strategy="beforeInteractive">
          {`(function(){var locale=location.pathname.split('/')[1];var map={zh:'zh-CN',ar:'ar',de:'de',en:'en'};document.documentElement.lang=map[locale]||'en';document.documentElement.dir=locale==='ar'?'rtl':'ltr';})();`}
        </Script>
        <GoogleAnalytics measurementId={googleAnalyticsId} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
