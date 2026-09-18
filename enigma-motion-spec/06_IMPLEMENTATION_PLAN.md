# 06 · Implementation Plan

Includes the required **Prototype-First** scope (brief §M) as Phase 0, and the Scroll Storyboard + Performance Budget (brief §I, §K) folded in here since they are planning artifacts.

---

## Phase 0 — Technical Prototype (Motion Prototype, build FIRST, before the full site)

**Do not start building the full website before this passes.** Goal: prove the chosen stack (Next.js + GSAP/ScrollTrigger + Lenis) can reproduce the reference's core *feel* — if it can't, better to find out in a 1–2 day prototype than mid-way through full build.

**Prototype scope (exactly these 5 pieces, using placeholder content/imagery):**
1. Preloader (sphere + chunked text reveal + counter + exit dissolve)
2. Hero entrance (stagger sequence + ambient looping visual + live stat counter)
3. One sticky/pinned scroll section (the Advantage 3-card stack-and-cover with gated counters — the hardest problem, per research doc conclusion #7)
4. One animated card (isolated, reusable — proves the counter/widget component works standalone too)
5. Horizontal case gallery (pin + scroll-driven `translateX`, variable card widths)

**PASS criteria (all required):**
- [ ] All 5 pieces run at a sustained 60fps on a mid-tier 2023-class mobile device (throttled Chrome DevTools CPU 4x as a proxy is acceptable for this gate; confirm on at least one real device before Phase 8)
- [ ] Advantage section counters correctly gate to "plays once when card becomes active" in both scroll directions, at both slow and fast scroll speeds, without getting stuck mid-count or double-firing
- [ ] Horizontal gallery track position stays in sync with scroll input with no visible lag/rubber-banding beyond the intentional `scrub` smoothing
- [ ] `prefers-reduced-motion: reduce` correctly disables all 3 pinned/scrubbed behaviors in the prototype and content remains fully readable
- [ ] No console errors/warnings related to SSR/hydration mismatches from the GSAP/Lenis setup
- [ ] Lighthouse Performance ≥ 85 on this prototype page (full target is 90 on the real site; prototype gets a slightly looser bar since it's not final-content-weighted)

**FAIL → response:** if pinned-counter gating (#2) cannot be made robust within ~1 extra day of engineering, fall back to a **simplified reduced-motion-by-default Advantage section** (normal flow, IntersectionObserver-gated fades, no pin) for the real build's first release, and revisit the pin as a fast-follow — do not let one hard problem block the whole project timeline. If FPS (#1) cannot be hit even after removing `filter:blur()` usage and reducing to CSS-only where possible, escalate to the team: this likely signals the target device floor needs revisiting, not a full re-architecture.

**Output:** a throwaway or reusable `/prototype` route (team's choice) demonstrating all 5 pieces, plus a short written note on any technique that deviated from `04_ANIMATION_SPEC.md` and why (feed corrections back into that document before Phase 3).

---

## Phase 1 — Static UI (no motion)
- **Task:** build all sections' markup/layout/responsive CSS with the Motion Design System's tokens (radius/spacing/color) applied, but zero animation — every section should look correct and be fully readable/navigable at rest, at every breakpoint.
- **Dependency:** Phase 0 passed (de-risked the stack choice).
- **Output:** Header, Hero, AdvantageSection (static, cards simply stacked), StatsStrip, CasesSection (static grid, no scrub), CtaFooter, Footer — all as real components consuming real/placeholder typed content data.
- **Acceptance:** Lighthouse Accessibility ≥ 95 on this static build (motion adds risk to a11y later, so the static baseline should be excellent); all content keyboard-navigable; no CLS from missing image dimensions.

## Phase 2 — Motion Foundation
- **Task:** build out `motion/` folder structure, tokens, `SmoothScrollProvider`, `useReducedMotion` hook, `gsap.matchMedia()` breakpoint contexts, the shared `counter.ts` utility, `createPin.ts` wrapper.
- **Dependency:** Phase 1 (needs real DOM hooks/`data-*` attributes to target).
- **Output:** all `motion/` infrastructure files, unit-testable in isolation (e.g. `counter.ts` tested with a headless DOM/jsdom for correct start/end/gating behavior).
- **Acceptance:** infrastructure code reviewed against Motion Design System rules (property allow-list, token-only durations/easings) before any section wires into it.

## Phase 3 — Hero + Loader
- **Task:** implement MOT-LOAD-001 through MOT-LOAD-006 and MOT-HERO-001 through MOT-HERO-007 exactly per Animation Spec.
- **Dependency:** Phase 2.
- **Output:** working preloader + hero entrance matching the prototype's proven pattern.
- **Acceptance:** visual fidelity checklist (`08_QA_ACCEPTANCE_CHECKLIST.md`) items for Loader/Hero all at MATCH or CLOSE; reduced-motion path verified.

## Phase 4 — Scroll Storytelling (Advantage section)
- **Task:** implement MOT-ADV-001 through MOT-ADV-009 and MOT-SCROLL-001.
- **Dependency:** Phase 3; reuses the pin pattern already de-risked in Phase 0.
- **Output:** full pinned card-stack-and-cover behavior with gated counters, desktop/tablet variants.
- **Acceptance:** PRD Acceptance Criteria item on Advantage section scroll behavior passes in both scroll directions and at varying speeds.

## Phase 5 — Cases Gallery
- **Task:** implement MOT-CASES-001 through MOT-CASES-003, plus the mobile native-scroll-snap fallback path.
- **Dependency:** Phase 2 (independent of Phase 4's specific content, can be parallelized with Phase 4 by a second engineer if team size allows).
- **Output:** working horizontal gallery, both desktop-pin and mobile-native-scroll variants.
- **Acceptance:** PRD Acceptance Criteria items on gallery behavior + keyboard/link accessibility of case cards.

## Phase 6 — Responsive Pass
- **Task:** verify/tune every `matchMedia` breakpoint variant across all sections against real devices (not just DevTools emulation); finalize the exact tablet-vs-mobile cutoff for the Cases gallery pin-vs-native-scroll decision (TDD §11 flags this as needing confirmation here).
- **Dependency:** Phases 3–5 complete.
- **Output:** confirmed, documented breakpoint behavior for every section; update `03_TDD.md` §11 table with final confirmed cutoffs if they changed from the initial recommendation.
- **Acceptance:** manual test pass on at least: 1 iOS Safari device, 1 Android Chrome device, desktop Chrome/Firefox/Safari, at each named breakpoint range.

## Phase 7 — Performance Optimization
- **Task:** run Lighthouse/WebPageTest against the full, real-content build; address any LCP/CLS/INP/JS-payload regressions against the Performance Budget below; verify sustained 60fps on pinned sections with real (not placeholder) imagery/video weight.
- **Dependency:** Phases 1–6 complete with real content loaded.
- **Output:** performance report + fixes.
- **Acceptance:** all MUST-tier budget items met (see Performance Budget below); SHOULD-tier items met or explicitly deferred with reasoning logged.

## Phase 8 — QA
- **Task:** execute the full `08_QA_ACCEPTANCE_CHECKLIST.md`, including the Visual Fidelity Checklist and accessibility audit (axe or equivalent automated scan + manual keyboard/screen-reader pass).
- **Dependency:** Phase 7.
- **Output:** signed-off checklist, bug list for any NEEDS WORK items with owners/fixes before launch.
- **Acceptance:** zero MUST-tier failures; all NEEDS WORK items on the Visual Fidelity Checklist resolved to at least CLOSE.

---

## Scroll Storyboard (macro overview, global page scroll 0–100%)

| Scroll % | Visible elements | Motion | Pinned? | Background | User perception |
|---|---|---|---|---|---|
| 0% | Preloader (pre-scroll) | Sphere/text/counter | n/a | `surface-base` | "The brand is loading, feels deliberate" |
| 5% | Hero | Stagger entrance, ambient loop | No | `surface-base` | "Clear value prop, feels premium immediately" |
| 15% | Hero idle | Ambient loop only | No | `surface-base` | "Confident pause before scrolling further" |
| 20–35% | Advantage — heading + card 1 | Pin engages, card 1 covers, counter 1 | Yes | `surface-base` → `lime-100` (card bg) | "Proof point #1 landing with a concrete number" |
| 35–55% | Advantage — card 2 | Card 2 covers card 1, counter 2 (ring) | Yes | `surface-pill`-ish neutral card bg | "A second, different kind of proof" |
| 55–70% | Advantage — card 3 | Card 3 covers card 2, counter 3 (dark widget) | Yes | `lime-100` | "Third proof point, section building momentum" |
| 70–75% | Advantage release → Stats strip | Block scrolls away, strip fades in | No | `surface-base` | "Quick trust beat before the next big moment" |
| 78–85% | Our Cases watermark reveal | Watermark fades to 0.1 opacity, holds | Yes (pin begins) | `surface-base` w/ watermark | "A new, confident section title, very editorial" |
| 85–95% | Cases gallery scrub | Track translates left, more cards reveal | Yes | `surface-base` | "Browsing a portfolio via a satisfying horizontal motion" |
| 95–100% | CTA footer | Simple fade/slide reveal | No | `surface-pill` band | "Clear, calm call to action to close the journey" |

---

## Performance Budget

| Metric | Target | Priority |
|---|---|---|
| LCP | ≤ 2.5s (mobile, throttled 4G) | MUST |
| CLS | ≤ 0.1 | MUST |
| INP | ≤ 200ms | MUST |
| JS initial payload (gzipped, route-level) | ≤ 180KB | SHOULD |
| GSAP + ScrollTrigger + Lenis combined (gzipped) | ≤ 45KB (accounted for within the 180KB above) | MUST — verify actual bundle size, these libraries are lean but must be confirmed, not assumed |
| Hero ambient video (compressed WebM, first loop) | ≤ 1.5MB | SHOULD |
| Total image weight, first viewport | ≤ 800KB | SHOULD |
| WebGL weight | N/A — not used | — |
| Font loading | `font-display: swap`, ≤ 2 font families, subset to used character sets | MUST |
| Animation frame rate, pinned/scrubbed sections | Sustained 60fps on target device floor (Phase 0 PASS criteria device) | MUST |
| Preloader hard timeout | ≤ 4s absolute | MUST |
| Lighthouse Performance (mobile) | ≥ 90 | MUST |
| Lighthouse Accessibility | ≥ 95 | MUST |
