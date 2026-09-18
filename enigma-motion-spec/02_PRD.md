# 02 · Product Requirements Document

Reference: motion/UX language reverse-engineered in `01_RESEARCH_AND_REVERSE_ENGINEERING.md`. No content, branding, imagery, or copy from the reference video is reused here — all example copy below is placeholder/generic and must be replaced with real client content before ship.

---

## 1. Product Overview

- **Purpose:** A high-end, editorial marketing website for a technology/AI-solutions company, designed to communicate credibility and premium craft primarily through restrained visual design and purposeful scroll-driven motion, not through content density.
- **Target audience:** B2B decision-makers (technology buyers, founders, procurement leads) evaluating a technology vendor; secondary audience: investors/press forming a brand impression.
- **Brand perception goal:** Premium, confident, precise, calm — "we sweat the details." Motion should read as *engineering craft*, not decoration.
- **Primary user journey:** Land on hero → absorb value proposition in ~5s → scroll through proof points (Advantage cards with metrics) → browse case studies (horizontal gallery) → convert via "Get Started"/"Contact Us".
- **Desired emotional response:** Calm confidence and curiosity — motion should reward continued scrolling without ever feeling gimmicky, slow, or like it's blocking access to information.

## 2. Product Principles

- **Motion supports hierarchy** — animation sequences always reinforce reading order (heading before body, cause before effect metric), never fight it.
- **Motion never blocks navigation** — every pinned/scrubbed section must be skippable; a user can still reach the footer via fast scrolling, keyboard, or a "skip" affordance without waiting out an animation.
- **Premium but restrained** — one accent color, disciplined type scale, no more than one "hero" animated moment per section.
- **Large whitespace** — content breathes; density is the enemy of the premium read.
- **Visual storytelling over literal explanation** — metrics and 3D product renders do narrative work that paragraphs would do less elegantly.
- **Fast perceived performance** — the loader must never feel like a tax; real load time is hidden behind a bounded, honest-feeling progress display (see MOT-LOAD requirements).

## 3. Information Architecture

- **Home** (the page specified in detail below)
- **Technology** (referenced in nav; content out of scope for this spec — standard content page)
- **Service** (referenced in nav; out of scope)
- **Cases** (case index — the horizontal gallery's "All Works" CTA should route here)
- **Case Detail** (per-case page; out of scope for this spec, but routing/URL structure should be planned — see FR-014)
- **Contact** (destination of all "Contact Us"/"Get Started" CTAs)

## 4. Homepage Structure

```
01 Preloader          — sphere + wordmark + progress, gates first paint of content
02 Header              — persistent, sticky, logo + nav pill + CTA + section-progress dock
03 Hero                — split layout, headline, CTAs, ambient 3D visual, live stat widget
04 Advantage (pinned)  — heading pinned, 3 stacked/covering proof cards, each with a live metric
05 Stats strip         — brief 3-column trust line, revealed on Advantage unpin
06 Our Cases intro     — oversized watermark heading, pinned background layer
07 Cases gallery       — horizontal-scrub card track over the watermark, "All Works" CTA
08 CTA footer          — "Let's Get In Touch" band with primary contact action
09 Footer              — standard footer (legal, sitemap, socials) — not shown in reference clip, must be authored to match the established design system
```

### 03 Hero
- **Objective:** communicate the core value proposition in under 5 seconds and offer two clear next actions.
- **Content:** eyebrow/caption triplet, H1 (2 lines), 2 CTAs, ambient product visual, "Explore Your Data" micro-widget, live-counting stat card with 3-dot pagination synced conceptually to the Advantage section below.
- **Layout:** left-aligned text column (~45% width) + right/center ambient visual (~55%), desktop; stacks vertically on mobile with visual above or below text (see Responsive Requirements).
- **Interaction:** CTAs are standard buttons (hover state per Motion Spec); stat card pagination dots are decorative/informational only at this stage (not required to be interactive) unless product wants them to jump-scroll to the matching Advantage card (NICE TO HAVE, see FR-013).
- **Animation:** staged entrance (nav → dock → CTAs → headline → widgets), ambient looping visual, live counter on stat widget. Full spec in `04_ANIMATION_SPEC.md`.
- **Responsive:** ambient visual shrinks/simplifies or becomes a static poster below tablet width; stat widget and "Explore Your Data" widget stack under the headline on mobile.

### 04 Advantage (pinned proof section)
- **Objective:** deliver 3 credible, metric-backed proof points without the user needing to scroll past 3 full-height sections.
- **Content:** section heading + subheading + 2 CTAs (pinned throughout), 3 cards each with: eyebrow pill, H2, supporting paragraph, product image, live-counting metric widget.
- **Layout:** pinned header block top; card area beneath, each card full-bleed within the section, later card fully covers earlier card.
- **Interaction:** scroll-scrubbed card transitions; counters play once per card activation.
- **Animation:** pin + scrub + gated per-card timelines. Full spec in `04_ANIMATION_SPEC.md`.
- **Responsive:** on mobile, pin/scrub is disabled — cards render as a normal vertical stack with a simple fade/slide-in per card (see MOT-RESPONSIVE requirements) to avoid poor touch-scroll pin behavior.

### 05 Stats strip
- **Objective:** a low-commitment trust/credibility beat between two heavier storytelling sections.
- **Content:** 3 short label/value pairs (e.g. capability tag, mission microcopy, founding-year style trust marker — placeholder, real content TBD by client).
- **Layout:** 3-column row, generous horizontal spacing.
- **Animation:** simple fade/slide reveal on scroll-into-view (IntersectionObserver, not a full ScrollTrigger pin — this section is not pinned in the reference).

### 06–07 Our Cases intro + gallery
- **Objective:** showcase a portfolio of case studies with a strong, memorable visual signature (the oversized watermark + horizontal scrub) without requiring a full case-index page load.
- **Content:** oversized section title (watermark), N case cards (title label + image), "All Works" CTA, "Scroll to explore" hint.
- **Layout:** watermark title behind, card track in front, horizontal-scrolling.
- **Interaction:** vertical scroll drives horizontal card motion while pinned; "All Works" CTA routes to the full Cases index page; individual cards route to Case Detail pages (FR-014).
- **Animation:** pin + horizontal scrub, no snapping, no active-card scaling (per reference — see research doc §2.8).
- **Responsive:** below tablet, replace the scrub-pin mechanism with native `overflow-x: auto` + `scroll-snap-type: x mandatory` — same visual card design, touch-native interaction, no vertical-scroll hijacking on mobile (hijacking vertical scroll for horizontal motion is a known mobile UX anti-pattern — MUST avoid, see Risks doc).

### 08 CTA footer
- **Objective:** capture conversion intent at the natural end of the scroll story.
- **Content:** short prompt line + a prominent contact affordance (icon-button or full CTA button — client to decide button vs. link-to-form vs. tel:/mailto: action).
- **Layout:** full-width band, generous vertical padding, centered content.
- **Animation:** simple reveal-on-scroll-into-view, no pin.

---

## 5. Functional Requirements

| ID | Requirement |
|---|---|
| FR-001 | The site MUST render full, real content in the initial HTML (SSR/SSG) for SEO and no-JS baseline, independent of whether animations run. |
| FR-002 | The preloader MUST NOT block content from existing in the DOM — it overlays already-rendered content. |
| FR-003 | The header MUST remain accessible (visible, interactive) at all scroll positions on the page. |
| FR-004 | All primary CTAs ("Get Started", "Contact Us", footer contact action) MUST route to a real, working destination (contact page, form, or `tel:`/`mailto:`). |
| FR-005 | The Advantage section's 3 cards MUST be data-driven (title, copy, image, metric label+value defined in a typed content source), not hardcoded per-card markup, so content can change without touching animation code. |
| FR-006 | The Cases gallery MUST support an arbitrary number of case items (not hardcoded to exactly the count observed in the reference) driven by the same data source used for the Cases index page. |
| FR-007 | The "All Works" CTA MUST route to a real Cases index route. |
| FR-008 | Each case card MUST be a real link (or button navigating) to a Case Detail route, not a decorative-only element. |
| FR-009 | The site MUST be fully navigable and usable with the preloader/animations disabled (JS failure, `prefers-reduced-motion`, or slow connections) — see MOT-REDUCED requirements. |
| FR-010 | The site MUST work on touch devices with standard swipe/tap gestures for the gallery (native scroll fallback per §4/07). |
| FR-011 | Images MUST use responsive `srcset`/modern formats (see TDD §10) and never cause layout shift. |
| FR-012 | The stat counters MUST display their final correct value even if the user scrolls past the section faster than the count-up animation would normally complete (i.e. counters must not get "stuck" mid-count if skipped). |
| FR-013 (NICE TO HAVE) | Hero stat-card pagination dots MAY be wired to smooth-scroll to the corresponding Advantage card on click. |
| FR-014 | Case Detail routing structure MUST be planned even though Case Detail page content is out of this spec's scope (e.g. `/cases/[slug]`). |

## 6. Interaction Requirements

| ID | Requirement |
|---|---|
| INT-001 | Nav "Home/Technology/Service" items show an active-state pill fill matching the currently in-view top-level section. |
| INT-002 | "Contact Us" button and "Get Started" button have a distinct, immediate hover/focus state (see Motion Spec for exact easing/duration). |
| INT-003 | The left-edge section-progress dock highlights the icon corresponding to the current scroll section. |
| INT-004 | The "back to top"/scroll-cue control in the lower-left is clickable and smooth-scrolls to top (or to next section — product to confirm exact target; default to "scroll to next section" while in hero, "back to top" elsewhere). |
| INT-005 | Cases gallery cards are keyboard-focusable and activate on `Enter`/`Space` in addition to click/tap. |
| INT-006 | Horizontal gallery MUST respond to standard mouse-wheel and trackpad vertical input while pinned, converting it to horizontal progress (desktop); MUST respond to native horizontal swipe on touch (mobile fallback path). |
| INT-007 | All interactive elements MUST have visible `:focus-visible` states meeting WCAG 2.2 AA contrast (see Accessibility Requirements). |

## 7. Motion Requirements

(Full technical detail lives in `04_ANIMATION_SPEC.md` and `05_MOTION_DESIGN_SYSTEM.md`; this section states product-level intent only.)

| ID | Requirement |
|---|---|
| MOT-001 | Preloader plays once per session (not on every route change within an SPA navigation) and takes no longer than ~2.5s under normal load, with a hard cap (see Performance Requirements) so slow connections never leave a user staring at it indefinitely. |
| MOT-002 | Loader-to-hero transition uses a blur/fade dissolve, never an abrupt cut. |
| MOT-003 | Hero elements stagger in on entrance following reading order (nav/dock → CTAs → headline → widgets). |
| MOT-004 | Advantage section pins and reveals its 3 cards via scroll-scrubbed, covering transitions; each card's metric counts up once, gated to that card's activation. |
| MOT-005 | The "Our Cases" watermark heading fades in once to a fixed low opacity and does not move during the gallery's horizontal scrub. |
| MOT-006 | The Cases gallery track's horizontal position is directly and smoothly driven by vertical scroll distance while pinned (scrub, not time-based animation). |
| MOT-007 | All entrance/scroll animations MUST be fully disabled/simplified under `prefers-reduced-motion: reduce` per MOT-REDUCED (see Accessibility). |
| MOT-008 | No animation may run indefinitely in a way that keeps the page painting when off-screen or tab is backgrounded (must pause via `document.visibilitychange` / IntersectionObserver gating for the ambient hero loop). |

## 8. Responsive Requirements

| Breakpoint | Range | Behavioral notes |
|---|---|---|
| Desktop | 1440px+ | Full motion system as specified, all pins active |
| Laptop | 1024–1439px | Full motion system, typography/spacing scale down proportionally via `clamp()` |
| Tablet | 768–1023px | Pins remain active but simplified (see MOT-RESPONSIVE in Animation Spec — reduced blur, shorter travel distances); gallery may switch to native scroll-snap at the lower end of this range (product/engineering to confirm exact cutoff during Phase 6) |
| Mobile | 375–767px | All `ScrollTrigger.pin()` usage disabled; Advantage cards become a normal vertical stack with simple fade/slide; Cases gallery becomes native `overflow-x` scroll-snap; hero ambient visual becomes a static poster or a much shorter/smaller loop |

## 9. Accessibility Requirements (WCAG 2.2 AA)

- **Keyboard:** every interactive element (nav links, CTAs, gallery cards, footer contact action) reachable and operable via keyboard alone, in a logical tab order that matches visual order.
- **Focus:** visible focus indicator on all interactive elements, meeting 3:1 contrast against adjacent colors, never removed via `outline: none` without a compliant replacement.
- **Reduced motion:** full `prefers-reduced-motion: reduce` support — pins disabled, blur/parallax removed, counters resolve near-instantly, ambient loops replaced with static frames. This is a MUST, not optional.
- **Contrast:** body text and the muted secondary text token must meet 4.5:1 against their background; verify the sampled `color.text.muted` (~`#8A8A8A`) against `color.surface.base` before final implementation — it is borderline and may need darkening for small text.
- **Semantic HTML:** real `<h1>`–`<h3>` hierarchy, `<nav>`, `<button>`/`<a>` used correctly (never a `<div onClick>` for a real navigation/action element), case cards are real `<a>`/Link elements.
- **Screen reader:** decorative elements (watermark type, ambient hero loop, squiggle line art) marked `aria-hidden="true"`; live counters announce their final value via `aria-live="polite"` update only once settled (not spamming every intermediate tick) or are marked decorative with the real value present as static text for AT users.
- **Animation alternatives:** no content is *exclusively* revealed by an animation the user cannot complete/skip — if JS fails or motion is reduced, all content must still be reachable and readable in normal document flow.

## 10. Performance Requirements

| Metric | Target | Priority |
|---|---|---|
| Lighthouse Performance (mobile) | ≥ 90 | MUST |
| LCP | ≤ 2.5s | MUST |
| CLS | ≤ 0.1 | MUST |
| INP | ≤ 200ms | MUST |
| JS initial payload (route JS, gzipped) | ≤ 180KB | SHOULD |
| Animation frame rate | Sustained 60fps during all pinned/scrubbed sequences on a mid-tier 2023-class mobile device | MUST |
| Preloader hard timeout | ≤ 4s absolute max before forced entry regardless of asset state | MUST |

Full budget breakdown with MUST/SHOULD/NICE-TO-HAVE classification in `06_IMPLEMENTATION_PLAN.md`.

## 11. SEO Requirements

- Full SSR/SSG content for all real copy (headings, case titles/summaries, metric labels).
- Semantic heading hierarchy per page (one `<h1>` on Home = hero headline).
- `next/image` (or equivalent) for all imagery with descriptive `alt` text (not empty/decorative unless truly decorative).
- Per-route `<title>`/meta description, Open Graph tags for social sharing (especially the Cases/Case-Detail pages, which are the most shareable content).
- Structured data (Organization/WebSite JSON-LD) at minimum; Article/CreativeWork schema for Case Detail pages if/when built.
- No content gated behind client-side-only rendering with no SSR fallback.

## 12. Analytics Requirements

- Page view + route change tracking (standard).
- Event tracking on: "Get Started" click, "Contact Us" click (header and footer variants distinguished), "Explore" click, Cases gallery card click (with case identifier), "All Works" click.
- Scroll-depth or section-reached events for Hero, Advantage, Cases sections (to validate the storytelling funnel is actually being consumed, not just bounced past).
- No PII captured in event payloads; tool selection (GA4/Plausible/PostHog/etc.) left to client preference — out of scope to mandate a specific vendor here.

## 13. CMS Requirements

Recommended: a lightweight headless CMS (e.g. Sanity, Contentful, or a simpler file/Markdown-driven content source such as Next.js MDX + a typed content collection) for:
- Advantage cards (title, copy, image, metric label + numeric value + optional counter style)
- Case studies (title, image, category label, slug, and full Case Detail content when that page is built)
- CTA footer prompt copy and contact destination

Not required in the CMS: header nav labels, motion timing/tokens, design system values — these belong in code, not content, since they're implementation detail, not editable copy. **Reasoning:** keeping motion/design tokens out of the CMS prevents non-technical edits from silently breaking the carefully-tuned animation system; keeping case/metric content *in* the CMS is what actually needs frequent updates without a redeploy.

## 14. Acceptance Criteria

- [ ] Loading the homepage on a fresh session plays the preloader exactly once, then reveals the hero with the specified stagger, within the performance budget above.
- [ ] Scrolling from Hero into Advantage produces the observed heading-pin + 3-card cover sequence with each card's metric counting up exactly once, correctly, regardless of scroll speed or direction (including scrolling back up and re-entering).
- [ ] The "OUR CASES" watermark appears at a fixed low opacity and does not move during the gallery scrub.
- [ ] The Cases gallery horizontal position tracks vertical scroll input smoothly at 60fps on the target devices in Performance Requirements, and all case cards are real, keyboard-accessible links.
- [ ] Setting `prefers-reduced-motion: reduce` (via OS setting) removes all pin/scrub/parallax/blur behavior sitewide while preserving full content access.
- [ ] Lighthouse mobile score, LCP, CLS, and INP all meet the targets in §10 on a production build.
- [ ] All acceptance items in `08_QA_ACCEPTANCE_CHECKLIST.md` pass.
