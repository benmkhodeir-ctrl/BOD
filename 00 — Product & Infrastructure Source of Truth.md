# BEN ON DELIVERY — Product & Infrastructure Source of Truth

**Last verified:** 14 September 2026  
**Status:** live

## Product

BEN ON DELIVERY is Ben Khodeir’s operator publication and the permanent home for practical observations and developed thinking about parcel delivery, apartment operations, systems, behaviour, process and technology adoption.

The publication earns attention and trust through useful work. Commercial enquiries are a consequence, not the organising principle of the reading experience.

## Canonical source

- GitHub owner: `benmkhodeir-ctrl`
- Repository: `benmkhodeir-ctrl/BOD`
- Production branch: `main`
- Repository role: sole editable source of truth

Do not create or maintain a separate editable copy in another hosting or website product.

## Architecture

`GitHub main → Cloudflare Pages build → benondelivery.com`

- Application: Astro
- Output: static
- Content: Markdown in `src/content/writing/`
- Build command: `npm run build`
- Output directory: `dist`
- Production domain: `https://benondelivery.com`
- Hosting and edge delivery: Cloudflare Pages
- Contact processing: Web3Forms
- Comments: Cusdis
- CMS: none

Netlify and Hyvor Talk are retired and must not be introduced into new instructions or changes.

## Important directories

- `src/content/writing/` — articles and field notes
- `src/pages/` — page routes
- `src/components/` — reusable interface components
- `src/layouts/` — shared page layouts
- `src/styles/` — global styling
- `public/` — static website assets
- `public/images/social/` — hosted social assets

## Environment variables

Values belong in the Cloudflare deployment environment and must never be committed.

- `SITE_URL` — optional canonical URL override; code defaults to `https://benondelivery.com`
- `WEB3FORMS_ACCESS_KEY` — required for contact-form delivery
- `PUBLIC_CUSDIS_APP_ID` — required to enable comments

## Contact workflow

Visitor → website contact form → Web3Forms → configured notification destination → `/thanks`

The form collects name, email, optional phone, message, source page and referrer. Any change to the form must be tested end to end, including receipt of the notification.

## Publishing workflow

1. Prepare and approve content or an application change.
2. Add it to this repository with descriptive asset filenames.
3. Run `npm run build`.
4. Commit to `main`.
5. Allow Cloudflare to deploy the commit.
6. Verify the live route, asset, metadata and any affected interaction.

## Social asset workflow

1. Place the approved asset in `public/images/social/`.
2. Use a descriptive, stable filename.
3. Commit it to `main`.
4. Confirm Cloudflare has deployed it.
5. Verify its public URL before supplying that URL to another platform.

A GitHub file page is not the hosted media URL. The expected public URL mirrors the path beneath `public/`.

## Verification checks

For relevant changes, verify:

- Cloudflare deployed the intended GitHub commit
- `https://benondelivery.com` loads over HTTPS
- changed routes return successfully
- new assets load from their production URLs
- article and field-note archives include approved new content
- contact submissions reach their destination
- comments load when `PUBLIC_CUSDIS_APP_ID` is configured
- sitemap and RSS remain valid after content changes

## Known limitations

- Publishing requires a source commit and Cloudflare build.
- There is no CMS.
- Contact delivery depends on Web3Forms.
- Comments depend on Cusdis.
- Cloudflare dashboard configuration and secret values are not represented in GitHub; they must be checked in Cloudflare when diagnosing deployment or integration failures.

## Architecture decisions

- GitHub remains canonical to keep the site portable and auditable.
- Cloudflare replaced Netlify for hosting and deployment.
- Web3Forms replaced Netlify Forms.
- Cusdis replaced the earlier Hyvor Talk proposal.
- Markdown remains the content system until it becomes a demonstrated bottleneck.
- Assets are stored directly as files; base64 reconstruction workarounds are retired.
