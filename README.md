# Visa Photo Web

A minimal Next.js marketing site starter for a visa/passport photo product.

## What is included

- Next.js App Router structure
- Home page with product-style sections
- Privacy policy page
- Terms page
- Basic metadata for SEO and sharing

## Local setup

This machine currently does not have `npm`, `pnpm`, or `yarn` available, so dependencies were not installed here.

Once you have a package manager available, run:

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a new GitHub repository and push this folder.
2. Import the repository into Vercel.
3. Add your custom domain in Vercel.
4. Update Aliyun DNS records using the values shown by Vercel.

## Before production

- Replace placeholder domain in `app/layout.tsx`
- Write the real privacy policy and terms
- Add your upload / image processing flow
- Add analytics and conversion tracking
