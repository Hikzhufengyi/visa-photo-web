import type { Locale } from "@/data/localization";
import type { SeoPage } from "@/data/seo-pages";
import { siteConfig } from "@/data/site";

const intentLabels = {
  "country-document": {
    en: "Country and document photo requirement",
    zh: "国家和证件照片规格",
    ar: "متطلبات صورة الدولة والمستند"
  },
  "document-size": {
    en: "Photo size guide",
    zh: "照片尺寸指南",
    ar: "دليل مقاس الصورة"
  },
  "export-workflow": {
    en: "Export workflow guide",
    zh: "导出流程指南",
    ar: "دليل سير عمل التصدير"
  }
};

export function buildSeoPageMetadata(page: SeoPage, locale: Locale) {
  const isZh = locale === "zh";
  const isAr = locale === "ar";
  const title = isZh ? `${page.title} | 中文` : isAr ? `${page.title} | العربية` : page.title;
  const description = isZh
    ? `${page.heading}。常见尺寸：${page.size}。背景要求：${page.background}。可在 iPhone 上用 IDPhoto Pro 调整照片、检查细节并导出电子版或打印版。`
    : isAr
      ? `${page.heading}. المقاس الشائع: ${page.size}. الخلفية: ${page.background}. استخدم IDPhoto Pro على iPhone لضبط الصورة ومراجعة الفحوصات وتصدير ملف رقمي أو جاهز للطباعة.`
    : `${page.heading}. Typical size: ${page.size}. Background: ${page.background}. Use IDPhoto Pro on iPhone to adjust the photo, review checks, and export digital or print-ready files.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/${page.slug}`,
      languages: {
        en: `/en/${page.slug}`,
        zh: `/zh/${page.slug}`,
        ar: `/ar/${page.slug}`,
        "x-default": `/en/${page.slug}`
      }
    },
    openGraph: {
      title,
      description: page.intro,
      url: `${siteConfig.domain}/${locale}/${page.slug}`,
      type: "article" as const,
      images: [
        {
          url: "/screenshots/smart-check-score.png",
          width: 1320,
          height: 2868,
          alt: isZh ? "IDPhoto Pro 智能检测评分" : `${page.documentName} photo checks in IDPhoto Pro`
        }
      ]
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: page.intro,
      images: ["/screenshots/smart-check-score.png"]
    }
  };
}

export function buildSeoPageJsonLd(page: SeoPage, locale: Locale) {
  const url = `${siteConfig.domain}/${locale}/${page.slug}`;
  const breadcrumbName = locale === "zh" ? "证件照规格指南" : locale === "ar" ? "أدلة صور المستندات" : "Document Photo Guides";

  return {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.appStoreName,
      applicationCategory: "PhotographyApplication",
      operatingSystem: "iOS",
      url: siteConfig.appStoreUrl,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      }
    },
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.heading,
      description: page.intro,
      url,
      mainEntityOfPage: url,
      articleSection: intentLabels[page.searchIntent][locale],
      about: [
        page.country,
        page.documentName,
        page.keyword
      ],
      author: {
        "@type": "Organization",
        name: siteConfig.name
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name
      }
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteConfig.name,
          item: `${siteConfig.domain}/${locale}`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbName,
          item: `${siteConfig.domain}/${locale}/blog`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.heading,
          item: url
        }
      ]
    }
  };
}
