# Cloud Chasers — Next.js Duplicate

A pixel-faithful **Next.js 14** rebuild of the existing WordPress site
[cloud-chasers.cc](https://cloud-chasers.cc/), using the **original design and the
original image assets** pulled straight from the live WordPress install.

> OEM vape / e-cigarette manufacturer — Shah Alam, Selangor, Malaysia.

---

## Stack

- **Next.js 14.2.35** (App Router, static export)
- **React 18** + **TypeScript**
- **Tailwind CSS 3** (utility layer) + custom design tokens in `app/globals.css`
- Fonts: **Be Vietnam Pro** (body/headings) + **Google Material Symbols Rounded** (icons)

## Design tokens (extracted from the live site)

| Token | Value |
|---|---|
| Accent (brand maroon) | `#5c0b12` |
| Accent dark | `#45080e` |
| Ink (headings) | `#1a191d` |
| Body text | `#666666` |
| Line / border | `#ededed` |
| Alt background | `#f3f3f3` |
| Font family | `Be Vietnam Pro` |
| Logo mark | `Frame-7.png` (the maroon mark the live site actually uses) |

## Pages (18 routes, all statically exported)

| Route | Source |
|---|---|
| `/` | Home |
| `/about-us` | About Us |
| `/our-services` | Our Services |
| `/ordering-policy` | Ordering Policy |
| `/get-in-touch` | Get In Touch |
| `/our-latest-projects` | Projects index |
| `/service/[slug]` | 5 service detail pages |
| `/lq-project/[slug]` | 6 project detail pages |

## Assets

All images are the **originals copied from the WordPress uploads directory** and keep
their original WordPress paths under `public/`:

```
public/wp-content/uploads/2025/01/...
public/wp-content/uploads/2025/02/...
public/wp-content/uploads/2020/12/...
```

That means every image reference in the code maps 1:1 to the current live site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)

```bash
npm run build      # outputs ./out
npx serve out      # preview the static build
```

`next.config.mjs` sets `output: "export"`, so the build produces a fully static site
in `out/` that can be hosted anywhere static.

### Deploying under a sub-path (e.g. GitHub Pages project site)

```bash
NEXT_PUBLIC_BASE_PATH=/cloudchasers-next npm run build
```

## Known limitation

The contact form is **client-side only** — it validates and confirms, but has no
backend. On the WordPress original this posted to Contact Form 7 / Formidable Forms.
Wire it to an API route, Formspree, or Resend before going live.

## Credits

Design and content © Cloud Chasers. Rebuilt by Apehtech Solutions.
