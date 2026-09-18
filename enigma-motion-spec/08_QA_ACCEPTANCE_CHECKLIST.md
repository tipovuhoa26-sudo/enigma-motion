# 08 · QA & Acceptance Checklist

## 1. Visual Fidelity Checklist

Rate each against the reference video using **MATCH / CLOSE / NEEDS WORK** (no vague "looks good"). Re-run this checklist at the end of Phase 8 with actual screenshots/recordings side-by-side with the reference frames extracted during research.

| Area | Criterion | Rating |
|---|---|---|
| Layout | Boxed/editorial container proportions match reference framing | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Typography | Hero H1 scale/weight reads as "oversized editorial", not merely "large" | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Typography | "OUR CASES" watermark spans full container width at correct low opacity | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Spacing | Whitespace density matches the generous, uncluttered reference feel | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Animation timing | Loader total duration feels equivalent (~2–2.5s, not rushed, not draggy) | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Easing | Entrances use soft-decel curve, never linear or bouncy (except explicit micro-interaction spring use) | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Scroll speed | Advantage pin dwell time per card feels comparable, not rushed/draggy | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Image scaling | Product renders maintain consistent art direction/crop, no stretch/distortion | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Card transitions | Advantage cards fully cover previous card with the brief "peek" edge behavior | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Loader | Sphere lighting/shadow reads as soft 3D-lit object | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Loader | Text reveal streak/blur effect present and synced with counter | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Horizontal gallery | Track motion feels directly scroll-coupled with a soft smoothing lag, no snapping | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Horizontal gallery | Variable card widths/heights preserved, no forced uniform grid | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Microinteraction | Button hover/press feels immediate and subtle, not sluggish or exaggerated | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |
| Color | Palette restraint (off-white + near-black + one lime accent) preserved, no extra colors introduced | ☐ MATCH ☐ CLOSE ☐ NEEDS WORK |

## 2. Functional Acceptance (from PRD §14)

- [ ] Preloader plays once per session, hero reveals with specified stagger, within performance budget
- [ ] Advantage section: pin + 3-card cover + gated counters correct in both scroll directions, all speeds
- [ ] "OUR CASES" watermark fixed opacity, no movement during gallery scrub
- [ ] Cases gallery: 60fps on target devices, all cards real keyboard-accessible links
- [ ] `prefers-reduced-motion: reduce` removes all pin/scrub/parallax/blur sitewide, content fully accessible
- [ ] Lighthouse mobile: Performance ≥90, Accessibility ≥95, LCP/CLS/INP within budget on production build
- [ ] All CTAs route to real, working destinations
- [ ] Site fully usable with JavaScript disabled or failed (SSR content readable, links work; animation absent is acceptable, broken content is not)
- [ ] No console errors/warnings in production build across Chrome/Firefox/Safari

## 3. Accessibility Audit

- [ ] Automated scan (axe-core or equivalent) — zero critical/serious violations
- [ ] Full keyboard-only pass: every interactive element reachable, operable, visible focus state, logical tab order
- [ ] Screen reader pass (VoiceOver or NVDA): decorative elements silent (`aria-hidden`), real content announced correctly, counters don't spam intermediate values
- [ ] Color contrast verified for `--color-text-muted` against `--color-surface-base` at actual deployed font sizes (flagged as borderline in Motion Design System §7 — must be re-verified with final values, not assumed)
- [ ] `prefers-reduced-motion` verified via OS-level toggle (not just DevTools emulation) on at least one real device

## 4. Risk Register & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Over-animation (motion fatigue, feels gimmicky) | Medium | High (undermines "premium, restrained" principle) | Strict adherence to Motion Design System tokens; no animation added outside the documented Animation Spec without a deliberate, reviewed addition |
| Poor mobile performance (jank on pinned sections) | Medium-High | High | Mobile explicitly uses structurally simpler mechanisms (no pin) per TDD §11, not a "lighter" version of the desktop pin; Phase 0 prototype gates this before full build |
| Safari/iOS differences (pin jitter from dynamic toolbar) | Medium | Medium | `ScrollTrigger.normalizeScroll(true)`, `100dvh` usage, mandatory real-device testing in Phase 6 (TDD §6, §13) |
| Scroll jank from unbatched reads | Low (if GSAP/Lenis own all scroll reads) | High if it occurs | Hard rule: no manual `getBoundingClientRect()`/scroll listeners outside the motion layer (TDD §12) |
| Layout shift (CLS) | Medium | High (fails MUST performance budget) | Explicit dimensions/`aspect-ratio` on all images; preloader is an overlay, cannot reflow underlying content (TDD §7) |
| Font loading flash/shift | Low-Medium | Medium | `font-display: swap`, subset fonts, `document.fonts.ready` gates preloader exit timing (TDD §7) |
| Oversized images | Medium | Medium (LCP/JS payload budget) | `next/image` responsive `srcset`, AVIF/WebP negotiation, lazy-load below-fold gallery cards (TDD §10) |
| Hydration mismatches | Low-Medium | Medium (console errors, potential visual flash) | All GSAP/Lenis code strictly client-only, initialized in `useEffect`/`useGSAP`, never at module scope or during SSR render (TDD §5) |
| Resize bugs (pin distances stale after content/viewport change) | Medium | Medium | `invalidateOnRefresh: true` on all dynamic-distance ScrollTriggers (gallery, Advantage pin), TDD §5/§9 |
| Pinned-section bugs (counter re-firing, stuck mid-count, pin not releasing cleanly) | Medium-High | High (this is the hardest engineering problem per research doc conclusion #7) | Dedicated Phase 0 prototype specifically to de-risk this; documented gating pattern in Animation Spec MOT-ADV-003 pattern note; `hasPlayed` flag per counter |
| Touch interaction (gallery mis-mapped on touch) | Medium | Medium | Dedicated native `overflow-x`/`scroll-snap` mobile path, not a touch-adapted version of the desktop pin (TDD §11, Technical Decision #7) |
| Accessibility regressions from motion | Medium | High (legal/compliance exposure, WCAG 2.2 AA is a stated PRD requirement) | `prefers-reduced-motion` is a MUST gate on every timeline, tested with real OS toggle, not assumed from code review alone |
| SEO impact from animated/client-heavy sections | Low (if SSR discipline held) | High if it occurs | FR-001: all real content SSR/SSG-rendered before any animation runs; verified via "view source"/disabled-JS check in QA |
| WebGL memory leaks | N/A | N/A | Not applicable — WebGL is not used in this build (Technical Decision #3) |
