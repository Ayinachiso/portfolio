# BuildDesk — Ayinachiso Nweze's portfolio

## Purpose

Redesign an existing personal portfolio for Ayinachiso Nweze, a full-stack developer. Help prospective clients and collaborators understand the developer's work, explore projects, and start a conversation. BuildDesk is the portfolio's creative identity, not a SaaS product.

This brief distinguishes existing content from proposed design direction. Preserve factual content; improve visual hierarchy, composition, and usability. Start with the homepage before extending the system to other routes.

## Creative direction

Proposed direction: a thoughtful developer's workbench with the personality of a small independent creative studio. Expressive, warm, confident, and readable. Retain a little of the existing paper-and-sticker character, with more breathing room and stronger emphasis on actual projects.

Make the name and selected work the memorable elements. Use a few purposeful paper notes, colourful icons, or lightly tilted accents. Avoid putting every paragraph inside an outlined card, repeating identical tiles, or scattering decorative stickers everywhere. Avoid generic startup dashboards, invented statistics, and oversized decorative gradients.

## Content and hierarchy

Owner: Ayinachiso Nweze.

Role: Full-stack developer.

Existing introduction: “I build polished interfaces and dependable backend systems for SaaS, fintech, accessibility tools, ecommerce, business sites, and unusual little web experiences.”

Primary action: “See the work” → `/work`.

Secondary action: “Start a project” → `/contact`.

Skills: React, Next.js, TypeScript, Tailwind, Python, FastAPI, D1/R2, REST APIs. Present these as supporting information rather than a wall of equally prominent badges.

Proposed homepage composition:

1. Clear navigation and an accessible light/dark theme control.
2. A generous, asymmetrical introduction with the name, role, short description, two actions, and an optional portrait area.
3. Selected project previews with space for real screenshots, concise descriptions, and case-study links. Use varied scale to establish hierarchy.
4. Compact entry points to About, Notes, Playground, and Services.
5. A simple contact invitation.

The current homepage prioritises six route cards. The redesign may replace that arrangement with a more project-led layout. Keep all routes discoverable.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home / Desk |
| `/work` | Project collection |
| `/work/[slug]` | Individual project detail |
| `/about` | Developer introduction and approach |
| `/blog` | Notes, including curated Substack writing |
| `/playground` | Experiments, UI explorations, and email designs |
| `/services` | Full-stack apps, frontend implementation, business websites, HTML email design |
| `/contact` | Project enquiry |

The existing `/admin` route is outside this public redesign scope.

## Project content from the repository

Treat these descriptions as repository content, not independently verified claims. Several project roles, dates, and features still need owner review.

| Project | Description | Case-study route | Content constraint |
| --- | --- | --- | --- |
| Deafly | Accessibility-focused classroom platform for deaf and hard-of-hearing students | `/work/deafly` | Exact feature list and year need review |
| SIWES Placement Recommendation System | Matches students with industrial-training companies using profiles, skills, tools, and preferences | `/work/siwes-recommender` | Stack, methodology, and year need review |
| SuperTed Innovators | Business website for solar systems, smart-home automation, CCTV, and related services | `/work/superted-innovators` | Role, stack, and year need review |
| SwingsXStore | Ecommerce and business-management platform | `/work/swingsxstore` | Team project; contribution boundaries need review |
| Swings CRM | Customer, lead, call, and ticket management for small businesses | `/work/swings-crm` | Team project; contribution boundaries need review |
| UtiliPay | Community payments and utility management | `/work/utilipay` | Private; do not invent a live URL |

Additional existing entries: Personalised Celebration Website and HTML Email Design and Development. Family media requires approved or obscured assets. Email samples are placeholders.

Do not invent testimonials, credentials, company logos, metrics, launch dates, availability, contact details, or project outcomes. Use clearly identified placeholders for missing images and copy. Do not turn pending review notes into public marketing claims.

## Colour system

These are the existing palette values, provided as a starting point rather than a restriction on redesign. Keep light and dark modes coordinated, with warmth and personality in both.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| Paper | `#FFF7E8` | `#101812` | Main background |
| Surface | `#FFEFCB` | `#18241B` | Secondary surface |
| Ink | `#241B16` | `#F8EEDC` | Primary text |
| Muted | `#6F5B4D` | `#BEAF9A` | Supporting text |
| Primary | `#E94B35` | `#FF6F56` | Main action accent |
| Secondary | `#26745B` | `#61C393` | Supporting green |
| Accent | `#F4B942` | `#F4B942` | Small highlights |
| Sky | `#79B9E8` | `#7BBBE5` | Optional supporting accent |
| Lilac | `#BFA7F2` | `#CCB8FF` | Optional supporting accent |

Use a restrained subset per screen. Check text contrast rather than assuming existing button colour combinations are accessible. Dark mode should use intentional surface, border, icon, and focus colours.

## Typography

The repository loads Bricolage Grotesque, Fraunces, and JetBrains Mono. Prefer bold Bricolage Grotesque for consistent sans-serif section headings and readable body copy. Fraunces may remain a selective identity treatment for the owner's name; do not spread it across every heading. Use JetBrains Mono sparingly for technical metadata. Do not introduce additional families.

Use fluid headings, comfortable line spacing, and body text around 16–18px. Keep text measures around 60–75 characters. Avoid excessive uppercase labels or artificial letter spacing.

## Layout and components

Use a centred content area around 1200–1280px wide, generous section spacing, and a consistent spacing scale based on 4px and 8px. Align text and project media deliberately. Use borders and offset shadows selectively where they support the paper/workbench metaphor.

Design reusable navigation, buttons, project previews, skill labels, image placeholders, form fields, and a theme toggle. Provide visible hover, focus, active, and disabled treatments where relevant. Keep icons consistent with the existing Lucide style.

On mobile, stack content in reading order, keep actions reachable, and provide an obvious navigation control. Do not depend on sideways swiping to discover pages. Prevent long names and skill labels from causing horizontal overflow. Keep project-image aspect ratios deliberate and avoid cropping important UI.

Contact fields: Name, Email, Project type, Budget range, Timeline, and Message. Proposed action label: “Send enquiry”. Design validation, pending, success, and failure states as future implementation requirements. The current form is a nonfunctional scaffold; a mockup must not imply the backend already works. Keep implementation details out of visitor-facing copy.

## Accessibility and motion

Target WCAG AA contrast, visible keyboard focus, semantic heading order, explicit form labels, and comfortable touch targets of at least 44px. Do not communicate state through colour alone. Respect reduced-motion preferences. Keep animation restrained and avoid essential content in moving marquees.

## Assets and implementation handoff

No approved portrait or project screenshots are supplied with this brief. Use clearly labelled image placeholders rather than fabricated product screens or an invented portrait. Keep all images, copy, icons, and destinations easy to replace.

The implementation uses Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons. Preserve routes and data in `src/lib/projects.ts`. Avoid requiring a new UI framework, CMS, or animation dependency.

Light/dark theme markup must render consistently on the server and on the client's initial render. Browser preferences are read after hydration for the toggle, while the existing early theme script handles the page palette.

## Requested design deliverables

First create a homepage proposal at desktop (1440px) and mobile (390px), each in light and dark mode. Show the same content and design system across all four views. Include reusable component states and identify missing assets. Once the homepage direction is selected, extend it to Work, project detail, About, Notes, Playground, Services, and Contact.
