# IDPhoto Pro Machine Understanding, GEO, and Growth Diagnosis

Date: 2026-08-01
Mode: read-only production and repository audit
Scope: `https://www.passportidphoto.com` and the `visa-photo-web` repository

## Evidence examined

- Production HTTP checks on `/en`, `/en/privacy`, `/en/download`, `/en/us-visa-photo-last-six-months`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt` on 2026-08-01.
- Current site metadata, route, schema, sitemap, robots, analytics, product profile, evidence ledger, observations, and opportunity portfolio.
- Apple iTunes lookup for App Store ID `6771586096` on 2026-08-01.

## Confirmed facts

- IDPhoto Pro prepares passport, visa, and ID photo files on iPhone. It is not an authority and does not guarantee acceptance.
- Production `robots.txt`, sitemap, and `llms.txt` return HTTP 200. `llms.txt` is served as `text/plain`; sitemap is `application/xml`.
- Canonical and localized alternate links are present on the inspected English routes.
- The App Store lookup describes the product as free to download. The website describes a one-time purchase and no subscription, but does not state an unlock amount or explain the free-download/in-app-unlock relationship.
- The historical observed Search Console baseline is 1,236 impressions, 0 clicks, and average position 75.53 for 2026-06-19 through 2026-07-16. A current page-level export has not been obtained.
- Historical GA4 `app_store_click` data is contaminated by Receipt Vault traffic. Current code sends `product: idphoto_pro`, hostname, source, and locale on tracked clicks, but custom-dimension/report availability has not been verified.
- 113 preset rows lack linked authority URL, review date, market scope, and evidence owner. Four recent country/visa guides have approved primary-source claims.

## Key judgments and hypotheses

- The principal machine-understanding risk is unsupported country/document detail presented at scale, not crawler access.
- The principal growth bottleneck is reliable source-to-App-Store-click attribution. Without it, a page or AI-referral improvement cannot be separated from Receipt Vault or direct traffic.
- `HowTo.totalTime = PT3M` has no linked evidence in the current claim ledger. It should be removed or supported before being treated as a factual schema assertion.
- The `All Photo Sizes | IDPhoto Pro | IDPhoto Pro` title is duplicated in production.

## Explicit limitations

- No current GA4, Search Console, Bing Webmaster, App Store Connect, or AI prompt-panel export was available during this audit.
- IndexNow implementation and Bing Webmaster ownership were not found in the repository. Their absence does not prove they were never configured elsewhere.
- An AI system understanding or citing a page cannot establish a Google ranking, and AI mentions without a click are normally invisible to GA4. Brand/direct traffic and App Store downloads can include unobservable AI influence.

## Required gates

1. Product manager and growth operations: complete row-level authority evidence before expanding, refreshing, or asserting exact long-tail country/document requirements.
2. CTO and QA: verify GA4 event dimensions in production and build a hostname/product/landing-page/source exploration before any content ROI decision.
3. CEO: choose whether evidence-backed English guides or the long-tail directory receive the next 30-day resource allocation.
4. Chairman: approve any public price amount, changed unlock terms, ad spend, or new commercial claim.
