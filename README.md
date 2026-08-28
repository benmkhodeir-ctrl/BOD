# BEN ON DELIVERY — Site v1

Netlify-ready Astro publication starter built from the agreed website brief and the current BEN ON DELIVERY brand rules.

## Stack

- Astro static output
- Markdown content collection
- Netlify hosting and Forms
- Hyvor Talk comments
- Anton + Inter loaded from Google Fonts

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Netlify

1. Push this folder to a Git repository.
2. Create/import the site in Netlify.
3. Netlify should use `npm run build` and publish `dist` (also defined in `netlify.toml`).
4. Enable **Forms > Form detection** in Netlify.
5. Add an email notification for the `contact` form. Because the field is named `email`, Netlify can set Reply-To to the submitter.
6. Set the production `SITE_URL` environment variable to the final canonical domain if it differs from `https://benondelivery.com`.

## Hyvor Talk

Create a BEN ON DELIVERY website in Hyvor Talk and set Netlify environment variable:

`PUBLIC_HYVOR_WEBSITE_ID=<website id>`

In Hyvor Talk settings:

- guest commenting: on
- guest email: **required**
- premoderation: new/guest commenters as preferred
- spam protection: on

Important: requiring guest email is not the same as verifying ownership of that email address. If email ownership verification becomes a hard requirement, replace/extend the comments auth model rather than pretending Hyvor guest email proves identity.

## Content model

All publication content is in `src/content/writing/`.

Frontmatter fields:

- `title`
- `standfirst`
- `published`
- `format`: `article` or `field-note`
- `series`: `the-last-inch`, `the-process-broke-here`, or `general`
- `tags`
- `featured`
- `status`: `prototype` or `published`
- optional hero-image fields
- optional social discussion URLs
- `contactPrompt`: `commercial`, `general`, or `none`

The four supplied pieces are prototype copy only. They exist to make the layouts visible and should not be treated as published editorial without approval.

## Locked visual identity

The B4 mark is drawn as vector geometry in `BrandMark.astro` using the locked master path:

`M 309 10 H 540 V 90 H 10 V 10 H 291`

ViewBox: `550 × 100`; stroke: `18`; one interruption only.
