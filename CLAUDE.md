# zhekaby.github.io — Personal Portfolio

Forked from [mldangelo/personal-site](https://github.com/mldangelo/personal-site) (MIT). Next.js 16 + Tailwind 4 + Biome. Static export to GitHub Pages.

## Quick Commands

```bash
pnpm dev          # Dev server on :3000 (Turbopack)
pnpm build        # Static export to ./out (used by deploy workflow)
pnpm lint         # Biome
pnpm type-check   # tsc --noEmit
```

## Single Source of Truth

All content lives in `src/data/` — edit there, not in components.

- `src/data/about.ts` — About page markdown (rendered via `markdown-to-jsx`)
- `src/data/contact.ts` — social links + email (icons from FontAwesome)
- `src/data/routes.ts` — top nav (drop entries to remove pages from menu)
- `src/data/projects.ts` — featured + other project cards
- `src/data/resume/{work,degrees,skills,courses}.ts` — resume sections
- `src/lib/utils.ts` — `SITE_URL`, `AUTHOR_NAME`
- `src/components/Template/Hero.tsx` — homepage hero (hardcoded, edit JSX)

`work[i].highlights` are rendered as **plain text** (no markdown, no HTML). Use plain prose.
`work[i].summary` and `about.ts` go through markdown-to-jsx — markdown supported.

## Navigation

- Nav drops a page when removed from `routes.ts`, but the page file under `app/` keeps existing. Delete `app/<route>/` to fully remove.
- Sitemap routes are hardcoded in `app/sitemap.ts` — update there too.
- Skills component takes `{ skills, categories }` — both must be exported from `src/data/resume/skills.ts`.

## Pitfalls

- **`@fortawesome` private registry**: user's `~/.npmrc` forces `@fortawesome:registry=https://npm.fontawesome.com/`. Public packages 401 without paid token. Project-local `.npmrc` overrides with `@fortawesome:registry=https://registry.npmjs.org/` — do not delete.
- **GitHub Pages cannot be disabled** for user-domain repos (`<user>.github.io`) via `gh api -X DELETE`. To take site down: switch source to a branch with no `index.html` (`gh api -X PUT repos/.../pages -f build_type=legacy -f source.branch=main -f source.path=/`) and push `.nojekyll` so README isn't rendered.
- **User-domain repo MUST be named `<user>.github.io`** for the default URL to work. Project pages get `<user>.github.io/<repo>/`.
- **NDA-leak risk on a public CV**: do not name internal services / repo names / commit counts / LOC for the current employer. Speak in roles and outcomes, not codenames.
- **AI-tells in writing**: em-dash `—`, "end-to-end", "leverage", "robust", "delve into", spelled-out small numbers ("Twenty-one"). Grep `'—'` before pushing copy.

## Strip / Don't add

When syncing from upstream `mldangelo/personal-site`, re-strip:

- `app/writing/`, `app/stats/`, `app/feed.xml/`, `content/writing/`
- `src/data/writing.ts`, `src/data/stats/`
- `src/lib/posts.ts`, `src/components/Schema/ArticleSchema.tsx`
- `src/data/__tests__/`, `src/components/**/__tests__/`, `vitest.*`
- `public/CNAME`, `public/images/me.jpg`, `public/images/projects/*`, `public/images/writing/`

Mldangelo's `EmailLink` animates an email prefix against a custom domain. Replaced with plain `mailto:` because zhekaby uses gmail. Don't restore unless we move to a custom domain.
