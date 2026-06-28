# SEO Setup

## 1. Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add the property `https://www.passportidphoto.com`.
3. Choose one verification method:
   - HTML tag: copy the verification token value only.
   - HTML file: download the file from Google and place it in `public/`.
4. For HTML tag verification, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the deployment environment.
5. Redeploy the site, then click Verify in Search Console.

The site exposes the HTML tag verification meta tag through `app/layout.tsx`.
The repo also includes `public/google-site-verification.example.html` as a placeholder. Replace it with the exact file Google gives you if you choose file verification.

## 2. Sitemap

The site already serves:

- `/robots.txt`
- `/sitemap.xml`

Submit this exact URL in Search Console:

- `https://www.passportidphoto.com/sitemap.xml`

After submission, use Search Console URL Inspection for these URLs:

- `https://www.passportidphoto.com/`
- `https://www.passportidphoto.com/en/us-passport-photo-size`
- `https://www.passportidphoto.com/zh/us-passport-photo-size`

## 3. Google Analytics

1. Create a GA4 property.
2. Create a Web data stream for `https://www.passportidphoto.com`.
3. Copy the measurement ID like `G-XXXXXXXXXX`.
4. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the deployment environment.
5. Redeploy the site.
6. Open GA4 Realtime and visit the production site to confirm traffic is received.

The site injects GA via `components/google-analytics.tsx`.

## 4. Programmatic SEO

The current programmatic SEO system is based on:

- route generation from `data/seo-pages.ts`
- localized landing pages under `/en/[slug]` and `/zh/[slug]`
- JSON-LD for FAQ, Article, SoftwareApplication, and Breadcrumb
- sitemap inclusion for every generated page

To scale it:

1. Add more entries to `data/seo-pages.ts`.
2. Keep each page tied to a distinct `searchIntent`.
3. Avoid duplicating the same requirement page with only tiny wording changes.
4. Expand by country-document combinations with real demand first.
5. Run `npm run build` before deployment so broken slugs or metadata errors are caught.

Good next batches:

- UK passport photo size
- Australia passport photo size
- China visa photo size
- Japan visa photo size
- Malaysia passport photo size
- Singapore passport photo size
- Germany passport photo size
- France visa photo size
