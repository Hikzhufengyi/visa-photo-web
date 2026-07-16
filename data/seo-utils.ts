import type { Locale } from "@/data/localization";
import { buildGeoQuestions } from "@/data/geo-question-bank";
import type { SeoPage } from "@/data/seo-pages";
import { siteConfig } from "@/data/site";

const intentLabels = {
  "country-document": {
    en: "Country and document photo requirement",
    zh: "国家和证件照片规格",
    ar: "متطلبات صورة الدولة والمستند",
    de: "Fotoanforderungen nach Land und Dokument"
  },
  "document-size": {
    en: "Photo size guide",
    zh: "照片尺寸指南",
    ar: "دليل مقاس الصورة",
    de: "Ratgeber zur Fotogröße"
  },
  "export-workflow": {
    en: "Export workflow guide",
    zh: "导出流程指南",
    ar: "دليل سير عمل التصدير",
    de: "Ratgeber zum Exportablauf"
  }
};

export function buildSeoPageMetadata(page: SeoPage, locale: Locale) {
  const isZh = locale === "zh";
  const isAr = locale === "ar";
  const isDe = locale === "de";
  const title = buildSeoTitle(page, locale);
  const description = isZh
    ? `${page.heading}。常见尺寸：${page.size}。背景要求：${page.background}。可在 iPhone 上用 IDPhoto Pro 调整照片、检查细节并导出电子版或打印版。`
    : isAr
      ? `${page.heading}. المقاس الشائع: ${page.size}. الخلفية: ${page.background}. استخدم IDPhoto Pro على iPhone لضبط الصورة ومراجعة الفحوصات وتصدير ملف رقمي أو جاهز للطباعة.`
      : isDe
        ? `${page.heading}. Übliche Größe: ${page.size}. Hintergrund: ${page.background}. Mit IDPhoto Pro kannst du das Foto auf dem iPhone anpassen, Prüfungen ansehen und digital oder druckfertig exportieren.`
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
        de: `/de/${page.slug}`,
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
          alt: isZh
            ? "IDPhoto Pro 智能检测评分"
            : isAr
              ? "درجة الفحص الذكي في IDPhoto Pro"
              : isDe
                ? "IDPhoto Pro Prüfscore"
                : `${page.documentName} photo checks in IDPhoto Pro`
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

export function buildSeoTitle(page: SeoPage, locale: Locale) {
  const normalizedSize = page.size.replace(/\s+/g, " ");
  const isZh = locale === "zh";
  const isAr = locale === "ar";
  const isDe = locale === "de";

  if (isZh) {
    if (page.searchIntent === "export-workflow") {
      return `${page.title} - iPhone 证件照导出`;
    }
    return `${page.title} ${normalizedSize} - iPhone 证件照制作`;
  }

  if (isAr) {
    if (page.searchIntent === "export-workflow") {
      return `${page.title} - تصدير صور المستندات على iPhone`;
    }
    return `${page.title} ${normalizedSize} - إنشاء الصورة على iPhone`;
  }

  if (isDe) {
    if (page.searchIntent === "export-workflow") {
      return `${page.title} - Ausweisfoto auf dem iPhone exportieren`;
    }
    return `${page.title} ${normalizedSize} - auf dem iPhone erstellen`;
  }

  if (page.searchIntent === "export-workflow") {
    return `${page.title} - Make and Export on iPhone`;
  }

  if (page.searchIntent === "document-size") {
    return `${page.title} ${normalizedSize} - Maker for iPhone`;
  }

  return `${page.title} ${normalizedSize} - Requirements & iPhone Maker`;
}

export function buildSeoPageJsonLd(page: SeoPage, locale: Locale) {
  const url = `${siteConfig.domain}/${locale}/${page.slug}`;
  const faqItems = mergeFaqItems(page.faq, buildGeoQuestions(page, locale));
  const breadcrumbName = locale === "zh"
    ? "证件照规格指南"
    : locale === "ar"
      ? "أدلة صور المستندات"
      : locale === "de"
        ? "Ratgeber für Ausweisfotos"
        : "Document Photo Guides";

  return {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    qa: {
      "@context": "https://schema.org",
      "@type": "QAPage",
      mainEntity: {
        "@type": "Question",
        name: page.geoQuestion ?? page.heading,
        acceptedAnswer: {
          "@type": "Answer",
          text: page.answerSummary ?? page.intro
        }
      }
    },
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: page.geoQuestion ?? page.heading,
      description: page.answerSummary ?? page.intro,
      totalTime: "PT3M",
      supply: [
        {
          "@type": "HowToSupply",
          name: "A clear front-facing portrait"
        },
        {
          "@type": "HowToSupply",
          name: "IDPhoto Pro on iPhone"
        }
      ],
      tool: [
        {
          "@type": "HowToTool",
          name: siteConfig.name
        }
      ],
      step: page.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: step
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

function mergeFaqItems(
  primary: Array<{ question: string; answer: string }>,
  generated: Array<{ question: string; answer: string }>
) {
  const seen = new Set<string>();

  return [...primary, ...generated].filter((item) => {
    const key = item.question.trim().toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}
