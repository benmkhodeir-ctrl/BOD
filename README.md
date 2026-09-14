# BEN ON DELIVERY

BEN ON DELIVERY is an Astro publication about the point where systems meet reality.

## Canonical architecture

`benmkhodeir-ctrl/BOD` on GitHub is the sole source of truth.

Production flow:

`GitHub main → Cloudflare Pages → https://benondelivery.com`

Netlify is not part of the current architecture.

## Stack

- Astro static site
- Markdown content collections
- GitHub source control
- Cloudflare Pages hosting and delivery
- Web3Forms contact-form processing
- Cusdis comments
- Anton and Inter through Google Fonts
- no CMS

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The generated site is written to `dist/`.

## Deployment

1. Make the approved change in this repository.
2. Build and verify it locally where possible.
3. Commit the change to `main`.
4. Cloudflare builds and deploys the new commit automatically.
5. Verify the affected page or asset at `https://benondelivery.com`.

Do not create a separate deployment copy of the site. Do not configure Netlify.

## Environment variables

Configure these in Cloudflare, never in the repository:

- `SITE_URL` — optional; defaults to `https://benondelivery.com`
- `WEB3FORMS_ACCESS_KEY` — contact-form access key
- `PUBLIC_CUSDIS_APP_ID` — Cusdis website/application identifier

## Content

Publication content lives in `src/content/writing/`.

Frontmatter fields:

- `title`
- `standfirst`
- `published`
- optional `updated`
- `format`: `article` or `field-note`
- `series`: `the-last-inch`, `the-process-broke-here`, or `general`
- `tags`
- `featured`
- `status`: `prototype` or `published`
- optional hero-image fields
- optional social discussion URLs
- `contactPrompt`: `commercial`, `general`, or `none`

Only content explicitly marked and approved as published should be treated as public editorial.

## Static and social assets

Store ordinary site assets in `public/`.

Store reusable social assets in `public/images/social/` using descriptive filenames. An asset committed there is served from the equivalent root URL after Cloudflare deploys it.

Example:

`public/images/social/example.jpg → https://benondelivery.com/images/social/example.jpg`

## Visual identity

The B4 mark is drawn as vector geometry in `src/components/BrandMark.astro` using the locked master path:

`M 309 10 H 540 V 90 H 10 V 10 H 291`

ViewBox: `550 × 100`; stroke: `18`; one interruption only.

See `00 — Product & Infrastructure Source of Truth.md` for the current operational record.
