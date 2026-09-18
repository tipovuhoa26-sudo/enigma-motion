# 03 · Technical Design Document

Prerequisite reading: `01_RESEARCH_AND_REVERSE_ENGINEERING.md` (why), `02_PRD.md` (what). This document is the *how*, detailed enough to estimate and implement without re-watching the reference video.

---

## 1. Recommended Stack (final)

| Layer | Choice | Why (short) — full comparison in `07_TECHNICAL_DECISIONS.md` |
|---|---|---|
| Framework | **Next.js 16 (App Router)**, TypeScript | SSR/SSG for SEO (PRD FR-001), React Server Components reduce client JS for non-animated content, current stable LTS as of 2026-09-18 |
| Styling | **Tailwind CSS** | Fast implementation of the observed spacing/radius/color scale as design tokens; avoids one-off CSS drift |
| Scroll motion | **GSAP + ScrollTrigger** | Free since v3.13 (Apr 2025), including previously-paid features this build needs; only library that cleanly expresses pin+scrub+nested-gated-timelines (research doc §3.3, §3.5) |
| Smooth scroll | **Lenis** | Lightweight, framework-agnostic, standard ScrollTrigger pairing (research doc §3.4); `ScrollSmoother` documented as viable alternative in Technical Decisions |
| Micro-interactions (optional) | Plain CSS transitions / Web Animations API | No extra library needed for hover/focus states |
| 3D hero visual | Pre-rendered looping video (WebM/MP4) + poster, **not** Three.js (research doc §3.1) | Matches observed visual complexity at a fraction of the cost |
| Images | `next/image` | Responsive `srcset`, AVIF/WebP, built-in lazy loading |
| CMS | Headless (Sanity/Contentful) or typed MDX/JSON content collection | PRD §13 |

## 2. Architecture

```
src/
  app/                    # Next.js App Router routes (page.tsx, layout.tsx per route)
  components/             # Reusable, mostly presentational UI (Button, Pill, Card, Icon…)
  sections/                # One component per homepage section (Hero, Advantage, CasesGallery…)
  motion/                  # ALL animation code lives here — see §4
    tokens.ts
    easings.ts
    durations.ts
    timelines/
    scrollTriggers/
    utils/
  hooks/                   # useGSAP wrappers, useLenis, useReducedMotion, useMatchMedia
  lib/                     # Non-motion utilities (cn/classnames helper, formatters)
  content/                 # Typed content collections (advantage cards, case studies) — or CMS client
  styles/                  # globals.css, Tailwind config, design-token CSS variables
  assets/                  # Static images, hero loop video, fonts
```

**Responsibility boundaries:**
- `sections/*` own layout/markup and *declare* what should animate (via refs/data-attributes) but never hand-roll `gsap.to()` calls inline in JSX — they call into `motion/timelines/*`.
- `motion/*` owns all GSAP/ScrollTrigger instances, tokens, and cleanup — this is the only place `gsap`/`ScrollTrigger` are imported outside of a thin provider.
- This separation is what makes the "change content later without breaking animation" requirement (PRD principle #16 in the user's brief) achievable: content components re-render with new props/copy, the motion layer targets stable `data-motion="..."` hooks, not literal text/DOM structure.

## 3. Component Architecture

```tsx
<AppShell>                                  // app/layout.tsx
  <SmoothScrollProvider>                     // Lenis instance + GSAP ticker wiring, client component
    <Header />                               // sticky, own client component (needs scroll-spy state)
    <ReducedMotionProvider>                  // reads prefers-reduced-motion once, provides via context
      {children}                             // app/page.tsx
    </ReducedMotionProvider>
  </SmoothScrollProvider>
</AppShell>

// app/page.tsx (Home)
<Preloader />                                // overlay, unmounts after intro completes
<main>
  <Hero />
  <AdvantageSection advantages={data} />
  <StatsStrip stats={data} />
  <CasesSection cases={data} />              // owns both the watermark + the gallery track
  <CtaFooter />
</main>
<Footer />
```

- `Preloader`, `Hero`, `AdvantageSection`, `CasesSection` are Client Components (`"use client"`) because they own GSAP/ScrollTrigger instances. `StatsStrip`, `CtaFooter`, `Footer` can be Server Components with a thin client wrapper only for their scroll-reveal (IntersectionObserver-based, no GSAP needed — see §4 for when to use which tool).

## 4. Motion Architecture

**Hard rule, no exceptions:** no component outside `motion/` calls `gsap.*` or `ScrollTrigger.*` directly. Sections import a hook/function from `motion/timelines/` and pass it refs.

```
motion/
  tokens.ts          // color/radius re-exports if needed by JS (rare; prefer CSS vars)
  easings.ts          // named cubic-bezier/GSAP ease strings, see 05_MOTION_DESIGN_SYSTEM.md
  durations.ts         // named duration constants (ms)
  timelines/
    loader.ts           // preloader intro + exit timeline factory
    hero.ts              // hero entrance stagger timeline factory
    advantage.ts          // pin + scrub + nested gated-counter timelines
    casesGallery.ts        // watermark reveal + horizontal scrub timeline
    counter.ts              // reusable "count up a number" timeline factory (shared by hero widget + 3 advantage cards)
  scrollTriggers/
    createPin.ts          // small wrapper standardizing pin config (pinSpacing, anticipatePin, invalidateOnRefresh)
  utils/
    matchMediaContexts.ts   // desktop/tablet/mobile gsap.matchMedia() breakpoint definitions
    reducedMotion.ts          // prefers-reduced-motion gate helper
```

**Motion Tokens** (full values in `05_MOTION_DESIGN_SYSTEM.md`):
```ts
// motion/durations.ts
export const duration = { xs: 0.15, sm: 0.3, md: 0.6, lg: 0.9, xl: 1.4 } as const; // seconds, GSAP-native unit

// motion/easings.ts
export const ease = {
  standard: 'power2.out',
  enter:    'cubic-bezier(0.22, 1, 0.36, 1)',   // soft decel, used for all entrance reveals
  exit:     'power1.in',
  editorial:'cubic-bezier(0.65, 0, 0.35, 1)',   // slower, weightier — section-level transitions
  spring:   'back.out(1.4)',                    // reserved for micro-interactions only (button press)
} as const;
```

## 5. GSAP Architecture

- **Registration:** `gsap.registerPlugin(ScrollTrigger)` once, in a module-level guard (`if (typeof window !== 'undefined' && !registered)`) inside `motion/index.ts`, imported only by client components.
- **Instance lifecycle:** every component that creates GSAP/ScrollTrigger instances uses `@gsap/react`'s `useGSAP(() => { ... }, { scope, dependencies })` hook — `useGSAP` auto-reverts (kills tweens/ScrollTriggers) on unmount and on dependency change, which is what makes route changes and Fast Refresh safe.
- **Responsive variants:** every section's timeline factory is wrapped in `gsap.matchMedia()` with three named contexts (`isDesktop`, `isTablet`, `isMobile` — breakpoints defined once in `matchMediaContexts.ts` and reused everywhere so thresholds never drift between sections). Mobile context registers **no pins**, only simple `IntersectionObserver`-driven fades (see §11).
- **SSR handling:** `motion/` code never runs during SSR — all timeline factories are called from inside `useGSAP`/`useEffect`, never at module top-level or during render.
- **Refresh discipline:** call `ScrollTrigger.refresh()` after: (a) hero ambient video's poster/first-frame is confirmed loaded (layout may have shifted), (b) fonts finish loading (`document.fonts.ready`), (c) on debounced window resize (GSAP's own `ScrollTrigger.addEventListener('refreshInit', ...)` + built-in resize handling covers most of this automatically — only add manual refresh calls for the async-content cases above).
- **Cleanup on route change:** since this is a single-page homepage spec, cross-route cleanup is mostly moot for Home itself, but any shared components (Header) mounted in the root layout must scope their `useGSAP` calls correctly so navigating to `/cases` or `/contact` doesn't leave orphaned ScrollTriggers from Home's sections — `useGSAP`'s auto-revert on unmount handles this as long as Home's sections are actually unmounted by the router (standard Next.js App Router behavior).

## 6. Smooth Scroll Architecture

```
User input (wheel/touch)
        ↓
     Lenis                  — intercepts native scroll, applies easing, updates a virtual scroll position
        ↓
requestAnimationFrame loop  — driven by GSAP's own ticker (not a second independent rAF loop)
        ↓
   GSAP ticker              — gsap.ticker.add(time => lenis.raf(time * 1000))
        ↓
  ScrollTrigger.update()    — Lenis's 'scroll' event calls ScrollTrigger.update() to keep triggers in sync
```

```ts
// motion/SmoothScrollProvider.tsx (client component, mounted once in AppShell)
'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0); // avoid GSAP's own lag compensation fighting Lenis

    ScrollTrigger.normalizeScroll(true); // mitigates iOS Safari toolbar-resize jitter (research doc §3.7)

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return <>{children}</>;
}
```
On mobile-context `matchMedia` breakpoints, Lenis remains active (it still improves touch-scroll feel) but individual sections disable their `pin`s — smooth scroll and pinning are independent decisions.

## 7. Preloader Architecture

```
Mount (SSR-rendered hero content already in DOM, hidden behind loader overlay)
        ↓
Simulated progress state (NOT raw network progress — see rationale below)
        ↓
GSAP tween: progressValue 0→100 over ~2.2s, eased, onUpdate writes to counter text + drives sphere/text reveal keyframes
        ↓
Text reveal: SplitText (or manual chunked spans) staged blur+opacity reveal, synced to progress crossing ~20/55/95% thresholds
        ↓
Hold at 100% (~200ms)
        ↓
Exit timeline: loader opacity/blur out + hero entrance timeline starts with a small overlap (not fully sequential — matches observed simultaneous blur states)
        ↓
Loader unmounts (remove from DOM/display:none), enable page scroll (was locked via `document.documentElement.style.overflow` or Lenis `.stop()`/`.start()`)
```

**Rationale for simulated vs. real progress:** real asset-loading progress is spiky/unpredictable (a font or one large image can stall it near 90% for a long, ugly pause). **[RECOMMENDATION]**: run a *bounded, honest-feeling* simulated progress tween (e.g. 0→90% over 1.6s, hold, jump to 100% once `document.fonts.ready` **and** the hero poster image `decode()` both resolve, with a hard max wait of ~4s per PRD MOT-001/Performance §10) — this is the standard pattern for premium sites and avoids both "lying" progress bars and janky real-progress stalls.

```ts
// pseudo-code, motion/timelines/loader.ts
export function createLoaderTimeline({ progressEl, counterEl, wordmarkChars, onComplete }) {
  const tl = gsap.timeline({ onComplete });
  const progress = { value: 0 };

  tl.to(progress, {
    value: 90,
    duration: 1.6,
    ease: ease.standard,
    onUpdate: () => {
      counterEl.textContent = `${Math.round(progress.value)}%`;
      updateSphereVignette(progress.value); // opacity/shadow-intensity tied to progress
    },
  });

  // wait for real readiness, capped
  tl.add(() => waitFor(criticalAssetsReady(), { timeoutMs: 4000 }));

  tl.to(progress, { value: 100, duration: 0.3, onUpdate: () => counterEl.textContent = `${Math.round(progress.value)}%` });
  tl.to(wordmarkChars, { filter: 'blur(0px)', opacity: 1, x: 0, stagger: 0.06, duration: 0.5, ease: ease.enter }, '<');
  tl.to({}, { duration: 0.2 }); // hold at 100%
  tl.to('[data-loader-root]', { filter: 'blur(14px)', opacity: 0, duration: 0.6, ease: ease.exit });

  return tl;
}
```

## 8. Scroll Timeline Architecture (per section, scroll-progress based)

Progress percentages below describe **that section's own local scroll-progress (0–100%)**, not global page scroll — i.e. "scroll 0%" means "this pin just started."

**Hero (not pinned, simple entrance + idle):**
```
On mount (post-loader): 0.0s  nav/dock fade+slide in
                         0.15s CTAs fade+slide in
                         0.3s  headline blur+translateY settle (staggered per line)
                         0.5s  ambient visual fades/scales in, begins ambient idle loop
                         0.65s widgets (Explore Your Data, stat card) fade+slide in, counter starts
Idle (no scroll):        ambient visual loops continuously (paused if tab hidden / out of view)
```

**Advantage (pinned, `ScrollTrigger.pin`, total pin distance ≈ 300vh desktop, i.e. ~100vh dwell per card):**
```
local 0%      Heading + CTA row fully visible, static (pinned, does not move for the rest of this section)
local 0–5%    Card 1 slides up from below, covers empty state
local 5–28%   Card 1 fully active; its counter plays once (gated, see §4/09)
local 28–33%  Card 2 slides up, covers Card 1 (Card 1 remains visible peeking behind briefly — see Animation Spec MOT-ADV-004)
local 33–61%  Card 2 fully active; its counter plays once
local 61–66%  Card 3 slides up, covers Card 2
local 66–94%  Card 3 fully active; its counter plays once
local 94–100% Section releases pin; heading/CTA/card block translates up and out together
```

**Our Cases (pinned, `ScrollTrigger.pin`, total pin distance ≈ scrollDistance computed from track width, see §9):**
```
local 0%     Watermark "OUR CASES" begins fade-in (0→~10% opacity over first 8% of local progress), track at rest position (x=0)
local 8–100% Watermark holds static at its settled opacity; track.x animates from 0 to -scrollDistance, 1:1 with local progress (linear scrub, no extra easing beyond Lenis's own smoothing)
local 100%   Pin releases; section scrolls away normally into the CTA footer
```

## 9. Horizontal Cases Gallery — Implementation Detail

```
scrollDistance = trackScrollWidth - viewportWidth-of-track-container (+ optional end padding, e.g. one card-gap worth)
```

```ts
// motion/timelines/casesGallery.ts (pseudo-code, close to production shape)
export function createCasesGalleryScrollTrigger({ pinTarget, track, watermark }: Refs) {
  return gsap.matchMedia().add('(min-width: 1024px)', () => {
    const getScrollDistance = () => track.scrollWidth - track.parentElement!.clientWidth;

    const st = ScrollTrigger.create({
      trigger: pinTarget,
      start: 'top top',
      end: () => `+=${getScrollDistance()}`,
      pin: true,
      scrub: 1,               // small smoothing lag (1s), not raw 1:1 — matches observed eased feel
      anticipatePin: 1,
      invalidateOnRefresh: true, // recompute getScrollDistance() on resize
      onUpdate: (self) => {
        gsap.set(track, { x: -self.progress * getScrollDistance() });
      },
    });

    gsap.fromTo(watermark, { opacity: 0 }, {
      opacity: 0.1, duration: 0.4,
      scrollTrigger: { trigger: pinTarget, start: 'top top', end: '+=8%', scrub: true },
    });

    return () => st.kill();
  });
}
```
- **Pin:** yes, parent section pins for the full `scrollDistance`.
- **`xPercent` vs `x`:** use `x` (px) driven by measured `scrollWidth`, not `xPercent`, because card widths are heterogeneous (research doc §2.8) — a percentage-based approach would need per-card math anyway, so absolute px against measured `scrollWidth` is simpler and more robust to content changes (FR-006, arbitrary case count).
- **Scrub:** `scrub: 1` (slight smoothing) not `scrub: true` (raw) — matches the observed soft deceleration, and pairs naturally with Lenis's own easing philosophy.
- **Snapping:** none (research doc §2.8 confirms free-scrub, no snap-to-card).
- **Resize recalculation:** `invalidateOnRefresh: true` + the `getScrollDistance` closure re-measures on every refresh, so window resize / card-count changes (CMS content updates) self-correct without a full page reload.

## 10. Image Architecture

- `next/image` for every raster image: hero poster, product renders, case thumbnails.
- Responsive `sizes` attribute per component (e.g. hero visual `sizes="(min-width: 1024px) 55vw, 100vw"`).
- Formats: let `next/image` negotiate AVIF/WebP automatically; author source assets as high-quality PNG/JPEG masters.
- The ambient hero visual: served as `<video>` (WebM primary, MP4 fallback), `autoplay muted loop playsinline`, with a `poster` attribute pointing to a `next/image`-optimized first-frame — this poster is what's shown under `prefers-reduced-motion` and before the video can play.
- `object-fit: cover` for all case-gallery/advantage card imagery to preserve the consistent art-directed crop regardless of container aspect ratio.
- Explicit `width`/`height` (or `fill` + a sized parent with `aspect-ratio`) on every image — required for CLS budget (PRD §10).
- Case gallery images: `loading="lazy"` for cards beyond the first viewport-visible set; hero/first-Advantage-card imagery: `priority` (eager) since they're above/near the fold.

## 11. Responsive Motion

| Section | Desktop (1440+) | Laptop (1024–1439) | Tablet (768–1023) | Mobile (375–767) |
|---|---|---|---|---|
| Preloader | Full sphere + text-streak + counter | Same | Same, sphere slightly smaller | Same content, shorter max duration budget, simpler single-blur text reveal (no multi-stage streak) |
| Hero | Full stagger, looping video ambient visual | Same | Same, visual scaled down | Visual becomes static poster (no autoplay video) or a much shorter/lighter loop if bandwidth allows; stagger simplified to 2 steps |
| Advantage | Pinned, 3-card cover, gated counters | Same | Pinned, but travel distances/blur reduced (see Motion Spec MOT-RESPONSIVE) | **No pin.** Normal vertical stack, each card fades/slides in independently via IntersectionObserver; counters still count up on reveal |
| Cases gallery | Pinned horizontal scrub | Same | Pinned horizontal scrub OR native scroll-snap (confirm cutoff in Phase 6 — recommend switching at `<1024px`, since horizontal scroll-jacking is a known bad pattern on any touch-primary device, see Risks doc) | Native `overflow-x: auto; scroll-snap-type: x mandatory;` — no pin, no vertical-scroll hijack |
| CTA footer | Simple reveal | Same | Same | Same |

Mobile is not "desktop minus effects" — the Advantage and Cases sections use **structurally different, simpler mechanisms** (normal flow, native scroll-snap) rather than a crippled version of the desktop pin. This is a deliberate architecture decision, not a shortcut: scroll-jacking (hijacking vertical scroll for horizontal motion) is broadly considered a mobile UX anti-pattern, and `ScrollTrigger.pin` combined with mobile browser dynamic-toolbar viewport changes is a known source of jank (research doc §3.7).

## 12. Performance Architecture

- **Animate only `transform`/`opacity`/`filter`** — enforced by code review + the Motion Design System's token API (helpers only expose these properties).
- **`will-change`**: applied via GSAP's automatic handling (`force3D: true` default) plus explicit `will-change: transform` added at animation start and removed at animation end for the few longest-running elements (hero ambient loop container, gallery track) — never applied blanket/permanently across the page (excessive layer promotion wastes GPU memory).
- **RAF ownership:** single rAF loop (GSAP's ticker, driving Lenis — see §6), never multiple independent `requestAnimationFrame` loops competing.
- **Passive listeners:** Lenis and ScrollTrigger already register passive wheel/touch listeners internally; do not add additional non-passive scroll listeners anywhere in the app.
- **GPU compositing:** confirmed compositor-only property usage (see §01 research doc §3.7) keeps all scroll-linked work off the main thread's layout/paint phases.
- **Image decode:** hero poster and first-viewport imagery use `decode()`-aware loading gates in the preloader's readiness check (§7) to avoid a flash of undecoded image right as the loader exits.
- **Lazy loading:** all below-the-fold imagery (Cases gallery cards beyond the first ~4) lazy-loaded by default via `next/image`.
- **Dynamic import / code splitting:** `Preloader`, `AdvantageSection`, `CasesSection` motion logic dynamically imported (`next/dynamic`, `ssr: false` only for the parts that truly need browser APIs at init) so GSAP/Lenis JS doesn't block initial HTML parse/hydration of content that doesn't need it.
- **No Three.js lifecycle concerns** — not used (research doc §3.1).
- **ScrollTrigger cleanup:** every `useGSAP` call scoped correctly (§5); no manual `ScrollTrigger.create` outside that pattern.

## 13. Browser Compatibility

| Browser | Status | Known issues / mitigation |
|---|---|---|
| Chrome/Edge (desktop) | Full support | None expected |
| Firefox (desktop) | Full support via GSAP (not relying on native `animation-timeline`, which Firefox still gates behind a flag as of mid-2026 — research doc §3.5) | None expected |
| Safari (desktop) | Full support | `filter: blur()` performance is weaker than Chromium — keep blur radii conservative (research doc §3.7); test `position: sticky`/pin interactions explicitly |
| iOS Safari | Full support with mitigation | Dynamic toolbar viewport resize can jitter pinned sections — mitigated via `ScrollTrigger.normalizeScroll(true)` and `100dvh` usage (§6, §07 research doc); test on real devices, not only simulator |
| Android Chrome | Full support | Test scroll-snap fallback path on the Cases gallery specifically (lower-end GPU budget) |

## 14. State Management

No global state library required. Local component state (`useState`/`useRef`) plus the motion-layer's own GSAP/ScrollTrigger internal state is sufficient — this app has no complex shared client state (no cart, no multi-step form state spanning routes in the scope of this spec). Only introduce something like Zustand/Jotai if a future requirement (e.g. a multi-step contact wizard) actually needs cross-component client state — do not add it speculatively.

## 15. Error Handling

- Preloader readiness check (§7) has a hard timeout — a failed/slow asset can never permanently block entry.
- Hero ambient `<video>` has an `onError` fallback to the static poster image (treat exactly like the reduced-motion path).
- GSAP/ScrollTrigger initialization wrapped so a failure to register (e.g. unexpected SSR execution) logs a warning and degrades to static, unanimated (but fully readable) content rather than throwing and breaking the page.
- CMS/content-fetch failures for Advantage/Case data render an empty-state, not a crash — sections should be defensively coded against a missing/short data array (e.g. fewer than 3 advantage cards should not break the pin-distance math; compute pin distance from `advantages.length`, not a hardcoded `3`).

## 16. Analytics

Implementation detail for PRD §12's requirements: fire events via whatever analytics client is chosen, attached at the component level (button `onClick` handlers), not inside the `motion/` layer — motion code should stay free of business/analytics concerns. Section-reached scroll-depth events can be derived cheaply from the same `ScrollTrigger` `onEnter` callbacks already present for each pinned section (no separate IntersectionObserver needed for that specific case, since the pin trigger firing *is* "section reached").

## 17. Deployment

**Recommended: Vercel** (native Next.js App Router support, image optimization pipeline, zero-config preview deployments per PR — standard, low-risk choice for this stack). Alternative: any Node-capable host (Netlify, self-hosted with `next start`) if the client has an existing hosting standard — no part of this architecture is Vercel-exclusive; the only Vercel-specific convenience lost elsewhere is the managed image-optimization CDN, which would need `next/image`'s `loader` config pointed at a self-hosted or third-party image CDN instead.
