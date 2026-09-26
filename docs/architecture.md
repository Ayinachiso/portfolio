# BuildDesk Architecture

BuildDesk is the working name for Ayinachiso Nweze's portfolio experience. The public identity remains Ayinachiso Nweze.

## Deployment

- Framework: Next.js App Router, React, TypeScript, Tailwind CSS.
- Current deployment: Vercel using `npm ci` and `npm run build`. Commit `package-lock.json` to keep dependency versions reproducible.
- Cloudflare deployment tooling is disabled: `@opennextjs/cloudflare`, `wrangler`, and their npm scripts have been removed. `wrangler.toml` is retained for a possible future Cloudflare deployment.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel to the public site URL.

## Planned Cloudflare Backend

The following describes the original backend plan; these services are not enabled by the current Vercel deployment.

- Structured data: Cloudflare D1.
- Uploaded media: Cloudflare R2.
- Initial URL: Cloudflare Workers free deployment URL through `NEXT_PUBLIC_SITE_URL`.
- Custom domain later: update Cloudflare route/domain and `NEXT_PUBLIC_SITE_URL`; avoid hard-coded absolute domains in application code.

## MVP Backend

- Single administrator only.
- Email/password login.
- No public registration.
- Password hash and session secret are environment variables.
- Admin sessions use secure HTTP-only cookies.
- Contact submissions are validated server-side, rate-limited, and stored in D1.
- Contact email delivery is intentionally excluded from MVP. Resend or Gmail OAuth can be added later.

## Content Strategy

- Projects are managed as structured records with flexible sections.
- Blog is a curated Substack shelf, not a duplicate blog platform.
- Blog links can be added, edited, removed, featured, and reordered.
- Substack RSS can be investigated later to prefill metadata while preserving manual curation.
- Gallery/Playground stores experiments, screenshots, email examples, doodles, and approved personal web previews.

## Privacy

- WhatsApp, Snapchat, and Facebook are not public in the initial version.
- LinkedIn, GitHub, email, and X are primary placeholders.
- Instagram and TikTok can appear as secondary links.
- Family photographs and personal celebration media remain placeholders until approved.
- The private unreleased ISWIS dilemma-management website is excluded.
