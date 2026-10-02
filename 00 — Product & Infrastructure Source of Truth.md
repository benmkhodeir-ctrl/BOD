# BEN ON DELIVERY — Product & Infrastructure Source of Truth

**Last verified:** 02 October 2026  
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
- `public/images/social/` — permanent social-related assets already used by the site or intentionally retained
- `public/images/social/buffer/` — temporary public staging for Buffer delivery only

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

## Buffer social asset workflow

1. Finalise the approved social asset before publishing.
2. Place the exact publishing file in `public/images/social/buffer/`.
3. For carousels, use ordered filenames such as `01`, `02`, `03`.
4. Commit to `main`.
5. Confirm Cloudflare has deployed the commit.
6. Verify the final public URL on `benondelivery.com`.
7. Supply that exact public URL to Buffer.
8. Once Buffer has fetched the asset and the publishing attempt is complete, delete the staging file from `public/images/social/buffer/`.
9. If a post is wrong, remove the wrong staging asset as well, create the corrected asset, and repeat the workflow.

A successful Buffer response proves delivery, not image quality. The publishing asset must be checked before Buffer receives it.

Website content must never reference `/images/social/buffer/`.

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
- Buffer receives social media through temporary files staged under `public/images/social/buffer/`.
- The Buffer staging directory is not a social archive and must not be referenced by website content.
