# writing.yashverma.cloud

Notes and articles by Yash Verma on running production infrastructure.
Live at <https://writing.yashverma.cloud/>. The main site is <https://yashverma.cloud/>.

Static site built with [Astro](https://astro.build), deployed to Cloudflare Pages. No runtime
services, no third-party CDNs: every dependency comes from npm and is bundled at build time.
This repository exists so that a new note builds this site only, never the main one.

## Running it locally

Requires Node 22.23.4 or newer.

```bash
npm install
npm run dev        # dev server, http://localhost:4321
npm run build      # token check + type-check + production build into dist/
npm run preview    # serve the built site
```

## Writing a post

One Markdown file per post in `src/content/writing/`. The filename is the URL:
`karpenter-cold-starts.md` becomes `https://writing.yashverma.cloud/karpenter-cold-starts/`.
The rules for a post file (frontmatter, body, content rules) are in
`src/content/writing/_contract.md`. A published entry gets a page, an Open Graph card,
`BlogPosting` data, a sitemap entry and a listing row.

## Layout

```
src/
  content/writing/  the posts, and _contract.md (the rules for a post file)
  system/           tokens.mjs (single source), tokens.css (generated), fonts, system.css,
                    Page.astro (metadata, JSON-LD, analytics), components/, templates/ (Note, Article)
  og/altitude.ts    the post card (Satori + resvg + sharp), drawn at build time
  pages/            index (the list), [slug] (a post), og/ (Open Graph images), 404
public/             fonts, icons, robots.txt, _headers (Cloudflare Pages)
scripts/system/     tokens.mjs: writes tokens.css and checks contrast
```

## Design copy

The design system, the nav, the footer, the Note and Article templates and the post card are a
one-time copy from the main site's repository (`yashverma-cloud/yashverma.cloud`) at commit
`ca48d55` (13 Nov 2026). They are not synced: a change to the main site's design reaches this
site only when it is copied here by hand.

The history of `src/content/writing/` was carried over from that repository, so each note keeps
the commit that added it.

## Deploys

- Cloudflare Pages builds the repository through its Git integration: a merge to `main` deploys
  to production. Build command `npm run build`, output `dist`, Node 22.
- Pull requests to `main` run `.github/workflows/ci.yml` (install, build, Lighthouse CI on the
  list and one note; accessibility, best practices and SEO fail the build, performance warns)
  and `.github/workflows/hygiene.yml`.
- `public/_headers` sets the security and caching headers and keeps the `*.pages.dev` address
  out of search results; the script and style sources are in the CSP `<meta>` that Astro writes
  from `security.csp` in `astro.config.mjs`.
- Old addresses on the main site (`yashverma.cloud/writing/<slug>/` and
  `yashverma.cloud/og/writing/<slug>.png`) answer with a 301 to the same post here.

## License

MIT, see `LICENSE`.
