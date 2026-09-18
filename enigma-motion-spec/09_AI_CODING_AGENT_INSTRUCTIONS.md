# 09 · AI Coding Agent Instructions

You are implementing a marketing website whose visual/motion language was reverse-engineered from a reference video. **You do not need to watch that video or guess at design intent — every decision has already been made and is documented in this folder.** Your job is disciplined implementation, not creative interpretation. Read documents in this order before writing code:

1. `01_RESEARCH_AND_REVERSE_ENGINEERING.md` — why things are the way they are (skim; reference when unsure)
2. `02_PRD.md` — what to build, section by section
3. `03_TDD.md` — how the codebase is structured
4. `05_MOTION_DESIGN_SYSTEM.md` — the token vocabulary (memorize this one — every animation you write must use these tokens)
5. `04_ANIMATION_SPEC.md` — the exact spec for every individual animation, keyed by `MOT-*` ID
6. `06_IMPLEMENTATION_PLAN.md` — the phase order to build in
7. `07_TECHNICAL_DECISIONS.md` — why each library/pattern was chosen (don't re-litigate these)
8. `08_QA_ACCEPTANCE_CHECKLIST.md` — how your work will be graded

---

## What to build

A Next.js (App Router, TypeScript) marketing homepage with 8 sections (Preloader, Header, Hero, Advantage, StatsStrip, CasesSection [watermark + horizontal gallery], CTA footer, Footer), per `02_PRD.md` §4. No content, copy, images, or branding from the original reference video may be used — all copy/imagery is placeholder/client-supplied.

## Stack (do not deviate without explicit user instruction)

Next.js 16 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Lenis · `next/image` for all imagery · pre-rendered looping video for the hero centerpiece visual (never Three.js/WebGL — see `07_TECHNICAL_DECISIONS.md` #3).

## Components to build, in this order (matches `06_IMPLEMENTATION_PLAN.md`)

**Phase 0 (build and validate before anything else):** a `/prototype` route containing only: Preloader, Hero entrance, one pinned Advantage-style card-stack, one gallery card, the horizontal Cases gallery. Do not proceed to Phase 1 until this passes every PASS criterion listed in `06_IMPLEMENTATION_PLAN.md` Phase 0.

**Then, in order:** Phase 1 (static, unanimated UI for all sections) → Phase 2 (`motion/` infrastructure: tokens, `SmoothScrollProvider`, `useReducedMotion`, `matchMedia` contexts, shared `counter.ts`) → Phase 3 (wire Loader + Hero animations) → Phase 4 (wire Advantage pin) → Phase 5 (wire Cases gallery) → Phase 6 (responsive pass) → Phase 7 (performance pass) → Phase 8 (QA checklist).

## Technology you MUST use for each animation category

| If the animation is... | Use... |
|---|---|
| A scroll-pinned or scroll-scrubbed sequence (Advantage cards, Cases gallery, watermark) | `GSAP ScrollTrigger`, inside `motion/timelines/*`, never inline in a component |
| A one-time entrance triggered by scroll-into-view, no pin needed (StatsStrip, CTA footer) | `IntersectionObserver` — cheaper, do not spin up a ScrollTrigger for these |
| A hover/press/focus micro-interaction | Plain CSS transition using Motion Design System tokens — no JS library needed |
| A live-counting number | The shared `motion/timelines/counter.ts` utility — do not write a second counter implementation |

## Hard rules (breaking these fails QA — see `05_MOTION_DESIGN_SYSTEM.md` §4)

1. **Animate only `transform`, `opacity`, `filter: blur()`.** The single documented exception is `letter-spacing` in `MOT-LOAD-005`, and nowhere else. Never animate `width`/`height`/`top`/`left`/`margin`/`padding`.
2. **Every duration and easing value must be a named token** from `05_MOTION_DESIGN_SYSTEM.md` (`duration.xs..xl`, `ease.standard/enter/exit/editorial/spring`). Never write a raw `0.42s` or a hand-picked `cubic-bezier(...)` inline.
3. **No `gsap.*` or `ScrollTrigger.*` call outside the `motion/` folder.** Sections import timeline factories and pass refs/DOM hooks (`data-*` attributes); they never construct GSAP instances themselves.
4. **Every GSAP/ScrollTrigger-owning component uses `useGSAP()` from `@gsap/react`**, scoped correctly, so cleanup/revert is automatic on unmount/dependency change.
5. **`gsap.matchMedia()` for every responsive variant** — desktop/tablet get the full pin/scrub treatment (tuned per breakpoint), mobile gets structurally simpler mechanisms (no pin on Advantage, native `overflow-x`/`scroll-snap` on the Cases gallery) — this is a different code path, not a scaled-down version of the same code path. See `03_TDD.md` §11.
6. **`prefers-reduced-motion: reduce` must be checked before constructing any timeline**, not applied as a post-hoc override. Every `MOT-*` entry in `04_ANIMATION_SPEC.md` documents its exact reduced-motion behavior — implement that behavior, don't just "turn animation off" generically.
7. **All real content (headings, copy, case titles, metric labels) must exist in server-rendered HTML.** Never construct visible text purely inside a GSAP timeline or inject it into the DOM only after JS runs — animate elements that already contain real, SSR-rendered content.
8. **Counters (`MOT-HERO-007`, `MOT-ADV-003/005/007`) must be gated, not scrubbed** — they play once when their card/widget becomes active, and must resolve to their exact final value if the user scrolls past faster than the animation, in either scroll direction. Follow the exact gating pattern documented in the "Pattern note" under `MOT-ADV-003` in `04_ANIMATION_SPEC.md` — do not invent a different mechanism.
9. **The horizontal Cases gallery is `translateX` on one container element, driven by measured `scrollWidth`, never native `overflow-x` on desktop/tablet, and never a pinned transform on mobile.** See `03_TDD.md` §9 for the exact formula and code shape to follow.
10. **Never fabricate or guess a design value that wasn't provided.** Colors, spacing, and typography starting values are in `01_RESEARCH_AND_REVERSE_ENGINEERING.md` §2.2 and `05_MOTION_DESIGN_SYSTEM.md` §6–7 — use those. If a client design/brand asset is later supplied, it supersedes these inferred values; do not silently keep the inferred palette once real brand colors exist.

## Explicitly absolutely do NOT do

- Do NOT introduce Three.js, React Three Fiber, or any WebGL library. Every effect in this spec is achievable in CSS/DOM/video (see `07_TECHNICAL_DECISIONS.md` #3, #4).
- Do NOT introduce Framer Motion/Motion in addition to GSAP "just in case" — GSAP alone covers every requirement here (`07_TECHNICAL_DECISIONS.md` #1). If the project later needs component-level React transition idioms for something outside this spec's scope, that's a separate decision to make explicitly with the team, not something to add speculatively now.
- Do NOT add a global state management library (Redux/Zustand/etc.) — nothing in this spec needs cross-route shared client state (`03_TDD.md` §14).
- Do NOT use native CSS `animation-timeline: scroll()/view()` for anything load-bearing (pins, the gallery, counters) — Firefox does not yet support it unflagged as of mid-2026. It may only be used as an optional, non-critical progressive enhancement (`07_TECHNICAL_DECISIONS.md` #6).
- Do NOT let the horizontal gallery hijack vertical scroll on touch/mobile devices — this must use native `overflow-x`/`scroll-snap` below the confirmed breakpoint cutoff, full stop.
- Do NOT ship any pinned/scrubbed/parallax/blur effect without also implementing and testing its `prefers-reduced-motion` counterpart in the same PR/change.
- Do NOT copy any text, imagery, branding, or literal code from the original reference video's source site (its actual technology/source was never inspected — only visual behavior was reverse-engineered).
- Do NOT build the full site before the Phase 0 prototype passes its PASS criteria.

## Order of implementation (do not reorder)

1. Phase 0 prototype → validate against PASS criteria in `06_IMPLEMENTATION_PLAN.md`
2. Phase 1: static, fully-responsive, unanimated UI for every section
3. Phase 2: `motion/` infrastructure
4. Phase 3: Loader + Hero
5. Phase 4: Advantage pinned section
6. Phase 5: Cases gallery
7. Phase 6: responsive verification pass
8. Phase 7: performance optimization pass
9. Phase 8: full QA checklist (`08_QA_ACCEPTANCE_CHECKLIST.md`) — treat every unchecked MUST-tier item as a blocking bug, not a nice-to-have follow-up.

## Performance targets you are building against (do not ship below these)

LCP ≤ 2.5s · CLS ≤ 0.1 · INP ≤ 200ms · Lighthouse Performance ≥ 90 (mobile) · Lighthouse Accessibility ≥ 95 · sustained 60fps during every pinned/scrubbed sequence on the target device floor. Full budget with MUST/SHOULD tiers in `06_IMPLEMENTATION_PLAN.md`.

## When you're unsure

If an Animation Spec entry doesn't cover a case you've hit, or a design token is missing for something you need, do not invent a value silently — flag it and propose an addition consistent with the existing token scale (e.g. "this needs a duration between `sm` and `md`, recommend adding `duration.sm-md = 450ms`" rather than hardcoding `0.45s` inline). The system is meant to grow by deliberate, documented extension, not ad hoc exceptions.
