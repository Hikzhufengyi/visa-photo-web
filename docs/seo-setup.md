# SEO Setup

## 1. Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add the property `https://www.passportidphoto.com`.
3. Choose the HTML tag verification method.
4. Copy the verification token value only.
5. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel.

The site already exposes the verification meta tag through `app/layout.tsx`.

## 2. Sitemap

The site already serves:

- `/robots.txt`
- `/sitemap.xml`

Submit this exact URL in Search Console:

- `https://www.passportidphoto.com/sitemap.xml`

## 3. Google Analytics

1. Create a GA4 property.
2. Create a Web data stream for `https://www.passportidphoto.com`.
3. Copy the measurement ID like `G-XXXXXXXXXX`.
4. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel.

The site injects GA via `components/google-analytics.tsx`.

## 4. Programmatic SEO

The current programmatic SEO system is based on:

- route generation from `data/seo-pages.ts`
- localized landing pages under `/en/[slug]` and `/zh/[slug]`
- JSON-LD for FAQ, Article, SoftwareApplication, and Breadcrumb
- sitemap inclusion for every generated page

To scale it:

1. Add more entries to `data/seo-pages.ts`.
2. Keep each page tied to a distinct search intent.
3. Avoid duplicating the same requirement page with only tiny wording changes.
4. Expand by country-document combinations with real demand first.
