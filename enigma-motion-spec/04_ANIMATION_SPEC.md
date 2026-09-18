# 04 · Animation Specification

This is the authoritative, implementation-ready spec for every animation identified in `01_RESEARCH_AND_REVERSE_ENGINEERING.md`. Values marked **[OBS]** are read from the reference video; values marked **[REC]** are recommended production values chosen to feel equivalent when not literally measurable at 4fps sampling. Token names (`ease.*`, `duration.*`) are defined in `05_MOTION_DESIGN_SYSTEM.md`.

Format per animation: ID · Element · Trigger · Initial state · Animation · Duration · Easing · Stagger · ScrollTrigger · Desktop/Tablet/Mobile · Reduced motion · Performance note · Dependencies.

---

## Section A — Preloader

### MOT-LOAD-001 — Sphere ambient presence
- **Element:** Preloader sphere (`[data-loader-sphere]`)
- **Trigger:** Component mount
- **Initial state:** `opacity: 1; transform: scale(0.98)`
- **Animation:** One-time settle: `scale(0.98) → scale(1)`. No continuous rotation/deformation **[OBS: static across all 10 sampled loader frames]**.
- **Duration:** `duration.md` (0.6s)
- **Easing:** `ease.enter`
- **Stagger:** n/a
- **ScrollTrigger:** none (time-based, pre-scroll)
- **Desktop/Tablet/Mobile:** identical; sphere diameter scales via `clamp(220px, 32vw, 420px)`
- **Reduced motion:** skip scale-in, render at final state immediately
- **Performance note:** pure CSS radial-gradient + box-shadow element; `transform` only, cheap
- **Dependencies:** none (first thing rendered)

### MOT-LOAD-002 — Wordmark chunked reveal (sphere + header, synced)
- **Element:** `[data-loader-wordmark]` and `[data-header-wordmark]` (two instances, same timeline)
- **Trigger:** Progress tween crossing 3 thresholds (~15%, ~45%, ~85%) **[OBS: "En"→"Enig"→"Enigma" at t=0.25/0.5/0.75s against a 0–100% progress spanning ~2.25s]**
- **Initial state:** each chunk `opacity: 0; filter: blur(6px); transform: translateX(6px)`
- **Animation:** chunk → `opacity: 1; filter: blur(0); translateX(0)`, chunks revealed in 3 groups (not per-letter)
- **Duration:** `duration.sm` (0.3s) per chunk
- **Easing:** `ease.enter`
- **Stagger:** groups triggered by progress thresholds, not a fixed GSAP `stagger` value — drive via `onUpdate` checking `progress.value` against the 3 thresholds (see TDD §7 pseudo-code)
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** Mobile/Tablet **[REC]**: collapse to a single reveal step (no multi-chunk streak) to reduce blur-filter cost on weaker GPUs (research doc §3.7)
- **Reduced motion:** render final wordmark instantly, no blur/streak
- **Performance note:** `filter: blur()` is the most expensive property in this whole spec — cap radius ≤6px, keep duration short
- **Dependencies:** MOT-LOAD-003 (same progress driver)

### MOT-LOAD-003 — Percentage counter
- **Element:** `[data-loader-counter]`
- **Trigger:** Component mount
- **Initial state:** `1%` (never start at literal 0 — matches **[OBS]** first sampled frame at 1%, and avoids a "stuck at 0" perception)
- **Animation:** numeric tween 1 → 90 (bounded, simulated) → holds until critical assets ready → 90 → 100
- **Duration:** 1.6s (1→90) + variable wait (capped 4s total, TDD §7) + 0.3s (90→100)
- **Easing:** `ease.standard` for both legs
- **Stagger:** n/a
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** identical logic; mobile hard-cap may trigger more often on slow connections (acceptable — still bounded)
- **Reduced motion:** may jump straight to counting 1→100 over a short fixed 0.4s with no asset-wait, or skip preloader entirely (product decision — recommend: keep the preloader but shorten to ≤0.6s total, since it also establishes brand, not pure friction)
- **Performance note:** update via `onUpdate` writing `textContent`, not React state (avoids re-render thrash at 60fps)
- **Dependencies:** critical-asset readiness promise (fonts + hero poster decode)

### MOT-LOAD-004 — Header sync-reveal
- **Element:** Header logo mark, wordmark, "Contact Us" pill (`[data-header-*]`)
- **Trigger:** identical progress driver as MOT-LOAD-002 (same timeline instance, different target selector)
- **Initial state:** `opacity: 0`
- **Animation:** fades/streaks in lockstep with the sphere wordmark — **[OBS]** confirmed same visual cadence in every sampled frame
- **Duration/Easing/Stagger:** identical to MOT-LOAD-002
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** identical
- **Reduced motion:** appears instantly with final loader state
- **Performance note:** shares one timeline with MOT-LOAD-002 — do not create a second GSAP tween for this, target both selectors in one `.to()` call
- **Dependencies:** MOT-LOAD-002

### MOT-LOAD-005 — Hold + release cue
- **Element:** `[data-loader-wordmark]`
- **Trigger:** counter reaches 100%
- **Initial state:** settled wordmark, `letter-spacing: normal`
- **Animation:** hold 200ms, then `letter-spacing: 0 → 0.08em` over 150ms (the observed "drift apart" cue) immediately before exit begins
- **Duration:** 200ms hold + 150ms drift = 350ms
- **Easing:** `ease.standard`
- **Stagger:** n/a
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** identical
- **Reduced motion:** skip, go straight to exit
- **Performance note:** `letter-spacing` is not a compositor-only property (it affects layout) — acceptable here only because it's a single short, isolated transition on a small text element at the very end of the loader, not a repeating/scroll-linked effect. Do not generalize this exception elsewhere.
- **Dependencies:** MOT-LOAD-003 completion

### MOT-LOAD-006 — Loader exit dissolve
- **Element:** `[data-loader-root]` (full-viewport overlay) + concurrently, Hero entrance begins (MOT-HERO-001+) with ~150ms overlap
- **Trigger:** MOT-LOAD-005 complete
- **Initial state:** `opacity: 1; filter: blur(0)`
- **Animation:** `opacity: 1→0; filter: blur(0)→blur(14px); transform: scale(1)→scale(1.04)` — radial swirl illusion achieved by combining this with the Hero's own concurrent blur-in entrance (research doc §2.1)
- **Duration:** `duration.lg` (0.9s)
- **Easing:** `ease.exit`
- **Stagger:** n/a
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** Mobile **[REC]**: reduce blur radius to 8px (GPU cost)
- **Reduced motion:** instant `display: none`, no blur/scale
- **Performance note:** apply `will-change: filter, opacity` only for this element's animation window; remove from DOM (not just `opacity:0`) on complete to stop it from being painted
- **Dependencies:** triggers MOT-HERO-001 start (overlapping, not sequential)

---

## Section B — Hero

### MOT-HERO-001 — Left section-progress dock stagger-in
- **Element:** `[data-hero-dock] > *` (icon pills)
- **Trigger:** MOT-LOAD-006 start (overlap ~150ms into loader exit)
- **Initial state:** `opacity: 0; translateX(-12px)`
- **Animation:** → `opacity: 1; translateX(0)`
- **Duration:** `duration.sm` (0.3s) per item
- **Easing:** `ease.enter`
- **Stagger:** 80ms
- **ScrollTrigger:** none (time-based post-loader sequence)
- **Desktop/Tablet/Mobile:** hidden entirely below `tablet` breakpoint **[REC]** — this is a secondary/decorative nav aid, not essential on small screens
- **Reduced motion:** instant appear, no translate
- **Performance note:** transform+opacity only
- **Dependencies:** MOT-LOAD-006

### MOT-HERO-002 — Nav bar stagger-in
- **Element:** `[data-hero-nav]`, `[data-hero-nav-cta]`
- **Trigger:** same as MOT-HERO-001, +60ms delay
- **Initial state:** `opacity: 0; translateY(-8px)`
- **Animation:** → `opacity: 1; translateY(0)`
- **Duration:** 0.35s
- **Easing:** `ease.enter`
- **Stagger:** n/a (single group)
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** on mobile, nav collapses to a menu icon (standard responsive nav pattern) — same fade-in treatment applies to the collapsed trigger
- **Reduced motion:** instant appear
- **Performance note:** transform+opacity only
- **Dependencies:** MOT-HERO-001

### MOT-HERO-003 — Hero CTA pills stagger-in
- **Element:** `[data-hero-cta] > *` ("Get Started", "Explore")
- **Trigger:** +150ms after MOT-HERO-002 start
- **Initial state:** `opacity: 0; translateY(10px)`
- **Animation:** → `opacity: 1; translateY(0)`
- **Duration:** 0.4s
- **Easing:** `ease.enter`
- **Stagger:** 70ms
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** identical
- **Reduced motion:** instant appear
- **Performance note:** transform+opacity only
- **Dependencies:** MOT-HERO-002

### MOT-HERO-004 — Headline reveal
- **Element:** `[data-hero-headline] > .line` (2 lines, pre-split at build/render time — not runtime `SplitText` string-splitting, since content is static per render; use two `<span>` wrapped lines directly in markup for SEO-safety, see TDD §11)
- **Trigger:** +100ms after MOT-HERO-003 start (overlapping, matches **[OBS]** simultaneous blur states seen in captured frame)
- **Initial state:** `opacity: 0; translateY(28px); filter: blur(8px)`
- **Animation:** → `opacity: 1; translateY(0); filter: blur(0)`
- **Duration:** `duration.lg` (0.9s)
- **Easing:** `ease.enter` (`cubic-bezier(0.22,1,0.36,1)`)
- **Stagger:** 90ms between the 2 lines
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** identical technique; font-size via `clamp()` per Design System
- **Reduced motion:** instant appear, no blur/translate
- **Performance note:** this is the single most important entrance beat for perceived quality (research doc conclusion #9) — do not simplify this one even under time pressure; if budget is tight, cut MOT-HERO-001/006 stagger detail before this
- **Dependencies:** none blocking (runs concurrently with MOT-HERO-003/005)

### MOT-HERO-005 — Ambient hero visual entrance + idle loop
- **Element:** `[data-hero-visual]` (`<video>` loop + poster)
- **Trigger:** concurrent with MOT-HERO-004
- **Initial state:** `opacity: 0; scale(0.94)`
- **Animation entrance:** → `opacity: 1; scale(1)`, duration 1.0s, `ease.editorial`
- **Animation idle:** native video loop (`loop` attribute) — **[OBS]** slow, continuous shape morph, no scroll-linkage detected during the hero-idle window
- **Duration:** entrance 1.0s; idle loop length = source asset duration (author the loop to be seamless, ~4–6s recommended)
- **Easing:** `ease.editorial` for entrance
- **Stagger:** n/a
- **ScrollTrigger:** none for entrance; **[REC]** add an IntersectionObserver (not ScrollTrigger — cheaper for a simple play/pause gate) that calls `video.pause()` when the hero scrolls out of view and `video.play()` when it re-enters, and always pauses on `document.visibilitychange` (tab hidden) — PRD MOT-008
- **Desktop/Tablet/Mobile:** Tablet: same video, smaller box. Mobile **[REC]**: replace `<video>` with the static poster image only (no autoplay loop) — matches TDD §11 responsive motion table
- **Reduced motion:** static poster frame, no entrance scale/opacity animation beyond a simple instant fade
- **Performance note:** this is the highest sustained GPU/battery cost element on the page (a looping video) — must be gated by visibility (above) and must not autoplay with sound (muted required for autoplay policy compliance anyway)
- **Dependencies:** poster image used as part of MOT-LOAD-003's asset-readiness gate

### MOT-HERO-006 — "Explore Your Data" widget entrance
- **Element:** `[data-hero-widget-explore]`
- **Trigger:** +200ms after MOT-HERO-005 start
- **Initial state:** `opacity: 0; translateY(16px)`
- **Animation:** → `opacity: 1; translateY(0)`
- **Duration:** 0.5s
- **Easing:** `ease.enter`
- **Stagger:** n/a
- **ScrollTrigger:** none
- **Desktop/Tablet/Mobile:** stacks below headline on mobile, same fade treatment
- **Reduced motion:** instant appear
- **Performance note:** transform+opacity only
- **Dependencies:** MOT-HERO-005

### MOT-HERO-007 — Stat card entrance + live counter
- **Element:** `[data-hero-widget-stat]` (card), `[data-hero-widget-stat-value]` (number)
- **Trigger:** +100ms after MOT-HERO-006
- **Initial state:** card `opacity: 0; translateY(16px)`; counter value `0`
- **Animation:** card → `opacity:1; translateY(0)` (0.5s, `ease.enter`); counter → tweens `0 → 20` (integer, `%` suffix) **[OBS: 13→16→18→19→20 across sampled frames, settling at 20]**
- **Duration:** card 0.5s; counter 1.2s (`duration.xl`-ish, deliberately slower than the card reveal so the count-up is legible, not instant)
- **Easing:** card `ease.enter`; counter `power1.out` (fast start, gentle settle — reads more "alive" than a linear count)
- **Stagger:** n/a
- **ScrollTrigger:** none (this instance is time-based post-loader; the *Advantage* section's counters, by contrast, are scroll-gated — see MOT-ADV-003/005/007)
- **Desktop/Tablet/Mobile:** identical logic; card repositions in mobile stack
- **Reduced motion:** counter resolves to `20%` instantly (no count-up), card appears instantly
- **Performance note:** update via GSAP tween's `onUpdate` writing to a ref'd DOM node's `textContent`, not React state per tick (avoid re-render cost at 60fps — reusable `counter.ts` utility, see TDD §4)
- **Dependencies:** MOT-HERO-006; shares implementation with `motion/timelines/counter.ts` used again in Section C

---

## Section C — Advantage (pinned card-stack)

### MOT-ADV-001 — Section pin
- **Element:** `[data-advantage-pin]` (wraps heading+CTA row and the card layer)
- **Trigger:** `ScrollTrigger` — `start: 'top top'`, `end: '+=300%'` (3 cards × 100% viewport height each — tune in implementation against real content height, not a magic number)
- **Initial state:** section at natural document position
- **Animation:** `pin: true`, `pinSpacing: true`, `anticipatePin: 1`
- **Duration:** scroll-distance bound (not time-based)
- **Easing:** n/a (structural pin, easing applies to the nested tweens below)
- **Stagger:** n/a
- **ScrollTrigger:** self — this *is* the ScrollTrigger; all MOT-ADV-00x below are nested/gated within its progress range
- **Desktop/Tablet/Mobile:** **Tablet:** same pin, shorter `end` distance (e.g. `+=220%`) to keep dwell time reasonable on shorter, wider viewports. **Mobile: no pin** (TDD §11) — cards render in normal flow instead; MOT-ADV-002/004/006 become simple `IntersectionObserver`-gated fade/slide-ins with no "cover" behavior (each card is its own normal-height block)
- **Reduced motion:** pin disabled entirely, same as mobile path, regardless of viewport width
- **Performance note:** `invalidateOnRefresh: true` mandatory — card image heights affect total pin distance
- **Dependencies:** MOT-SCROLL-001 (hero-to-advantage transition) completing first

### MOT-ADV-002 — Card 1 enter-and-cover
- **Element:** `[data-advantage-card="1"]`
- **Trigger:** parent pin local progress 0% → 5%
- **Initial state:** `translateY(100%)` (fully below viewport, within the card stack container), `opacity: 1` (not opacity-animated — it's a hard cover, not a cross-fade, per **[OBS]**)
- **Animation:** `translateY(100%) → translateY(0)`
- **Duration:** scrubbed 1:1 with the 0–5% local progress window (`scrub: true`, no independent duration)
- **Easing:** linear (scrub-driven; any extra easing here would fight the scrub feel) — **[OBS]** matches the reference's direct scroll-coupling
- **Stagger:** n/a
- **ScrollTrigger:** nested timeline position inside MOT-ADV-001, `start: 0%`, `end: 5%` of parent
- **Desktop/Tablet/Mobile:** Mobile: replaced by a simple fade+translateY-24px-to-0 entrance on `IntersectionObserver`, 0.6s, `ease.enter` (not scrubbed)
- **Reduced motion:** card appears at rest position instantly, no cover animation
- **Performance note:** transform only
- **Dependencies:** MOT-ADV-001

### MOT-ADV-003 — Card 1 counter (tag-style widget)
- **Element:** `[data-advantage-card="1"] [data-counter]`
- **Trigger:** card 1 reaches "fully active" (parent local progress = 5%) — **gated, plays once**, not scrubbed
- **Initial state:** `0%`
- **Animation:** tween `0 → 20` (integer %) **[OBS: 0→4→11→16→19→20]**
- **Duration:** 1.1s, must comfortably fit within the card's ~23% local-progress dwell window at typical scroll speed — if the user scrolls past faster than the tween completes, **jump to final value immediately** on the card's exit trigger (FR-012)
- **Easing:** `power1.out`
- **Stagger:** n/a
- **ScrollTrigger:** `onEnter` callback of a child trigger scoped to the parent pin (not its own `scrub`) — see pattern note below
- **Desktop/Tablet/Mobile:** Mobile: triggers on the card's own `IntersectionObserver` entry instead
- **Reduced motion:** resolves to final value instantly
- **Performance note:** shared `motion/timelines/counter.ts` utility (same as MOT-HERO-007); `onUpdate` writes `textContent` directly
- **Dependencies:** MOT-ADV-002 complete

> **Pattern note (applies to MOT-ADV-003/005/007):** "gated once" counters inside a scrubbed pin are implemented via `ScrollTrigger.create({ trigger: cardEl, start: 'top top', onEnter: playCounter, onEnterBack: replayOrSkipToEndIfAlreadyPlayed })` as a **separate, non-scrubbed** trigger layered on top of the same pinned track — do not try to force the counter itself into the scrub timeline, since scrub-driven counters would run backward when the user scrolls up, which reads as broken, not "rewinding." Track a `hasPlayed` flag per card so `onEnterBack` doesn't unnecessarily re-trigger a full replay (jump straight to end value instead, matching FR-012's intent for the reverse-scroll direction too).

### MOT-ADV-004 — Card 2 enter-and-cover
Same spec shape as MOT-ADV-002, parent local progress **28%→33%**, target `[data-advantage-card="2"]`. **[OBS]** difference: card 1 remains visible for a brief peek (a rounded top edge peeking above card 2) during the first ~30% of this transition — achieved by *not* removing card 1 from the DOM/visibility, simply letting card 2's `translateY` cover it while card 1 stays at `translateY(0)` underneath (z-index: card2 > card1). No extra animation needed on card 1 itself for this — the peek is a natural consequence of stacking order + card 2's incoming edge rounding.

### MOT-ADV-005 — Card 2 counter (circular ring widget)
Same pattern as MOT-ADV-003, target `[data-advantage-card="2"] [data-counter-ring]`. **Additional property:** SVG `circle` `stroke-dashoffset` animated in parallel with the numeral, `0 → circumference * (1 - value/100)`, same duration/easing/gating as the numeral tween (drive both from one GSAP tween's `onUpdate`, computing both outputs from one `progress.value`). **[OBS: 8→18→24→28→29]**.

### MOT-ADV-006 — Card 3 enter-and-cover
Same spec shape as MOT-ADV-002, parent local progress **61%→66%**, target `[data-advantage-card="3"]`.

### MOT-ADV-007 — Card 3 counter (dark widget, dot pagination)
Same pattern as MOT-ADV-003, target `[data-advantage-card="3"] [data-counter]`. **[OBS: 8→33→58→70→76→78]**. Additional: the 3-dot step indicator (`[data-advantage-card="3"] [data-dots] > *`) fills sequentially (dot opacity/fill `0.3 → 1`) at 3 evenly-spaced points during the counter tween — purely decorative pacing cue, `duration.xs` per dot, no separate trigger needed (drive off the same tween's progress via 3 fixed thresholds).

### MOT-ADV-008 — Secondary CTA row entrance
- **Element:** `[data-advantage-cta]` ("Get Started" / "Contact Us" pair under the pinned heading)
- **Trigger:** MOT-SCROLL-001 (section entrance) +150ms
- **Initial state:** `opacity: 0; filter: blur(4px)`
- **Animation:** → `opacity: 1; filter: blur(0)`
- **Duration:** 0.5s
- **Easing:** `ease.enter`
- **Stagger:** 60ms between the two buttons
- **ScrollTrigger:** part of the same entrance trigger as the pinned heading (`onEnter` of MOT-ADV-001, not scrubbed)
- **Desktop/Tablet/Mobile:** identical
- **Reduced motion:** instant appear
- **Performance note:** small element, negligible cost
- **Dependencies:** MOT-SCROLL-001

### MOT-ADV-009 — Section release
- **Element:** `[data-advantage-pin]` (whole block)
- **Trigger:** parent pin local progress reaches 100%
- **Initial state:** pinned, at rest
- **Animation:** pin releases (native `ScrollTrigger` unpin — no manual transform needed beyond what unpinning does); the block's own exit is simply "scrolls away," no extra exit animation was observed
- **Duration:** n/a (structural)
- **Easing:** n/a
- **Stagger:** n/a
- **ScrollTrigger:** self (end of MOT-ADV-001)
- **Desktop/Tablet/Mobile:** identical
- **Reduced motion:** n/a (no pin exists to release)
- **Performance note:** ensure `pinSpacing` collapses correctly so no leftover empty gap remains post-unpin
- **Dependencies:** MOT-ADV-006/007 complete

---

## Section D — Transitions & Cases Gallery

### MOT-SCROLL-001 — Hero → Advantage cross-fade
- **Element:** Hero content block (`[data-hero-content]`) exits; `[data-advantage-heading]` enters
- **Trigger:** `ScrollTrigger` on the Hero→Advantage boundary, `start: 'bottom center'` (of Hero) or equivalent, non-pinned, plain entrance/exit pair
- **Initial state:** Hero content `opacity:1`; Advantage heading `opacity:0; translateY(20px); filter: blur(6px)`
- **Animation:** Hero content `opacity:1→0` while translating up slightly (`translateY(-24px)`) as it scrolls past naturally (this can piggyback on normal document flow — no forced animation needed beyond a subtle exit fade so the swap doesn't feel like a hard cut); Advantage heading → `opacity:1; translateY(0); filter:blur(0)`
- **Duration:** 0.6s each, overlapping
- **Easing:** `ease.editorial`
- **Stagger:** n/a
- **ScrollTrigger:** `start: 'top 80%', end: 'top 40%', scrub: 0.5` (light scrub, not a hard trigger — matches the soft cross-fade **[OBS]**)
- **Desktop/Tablet/Mobile:** identical technique, distances scale with viewport
- **Reduced motion:** instant swap, no blur/translate
- **Performance note:** transform+opacity+filter, short duration keeps blur cost low
- **Dependencies:** none

### MOT-CASES-001 — "OUR CASES" watermark reveal
- **Element:** `[data-cases-watermark]`
- **Trigger:** Cases section pin start
- **Initial state:** `opacity: 0`
- **Animation:** → `opacity: 0.1` (final low, flat value — **[OBS]** confirmed no further movement/opacity change once settled)
- **Duration:** scrubbed across the first 8% of the pin's local progress
- **Easing:** linear (scrub)
- **Stagger:** n/a
- **ScrollTrigger:** nested in the Cases pin (TDD §9 code), `start: 'top top'`, `end: '+=8%'`, `scrub: true`
- **Desktop/Tablet/Mobile:** font-size `clamp(2.5rem, 12vw, 9rem)`; identical behavior all breakpoints (mobile keeps this — it's cheap, just opacity)
- **Reduced motion:** appears instantly at final 0.1 opacity, no scrub-linkage (static)
- **Performance note:** opacity-only, single paint, negligible cost even though the element is huge — no `filter`/`blur` used here
- **Dependencies:** none

### MOT-CASES-002 — Gallery track horizontal scrub
- **Element:** `[data-cases-track]`
- **Trigger:** Cases section pin, full duration
- **Initial state:** `x: 0`
- **Animation:** `x: 0 → -scrollDistance` (see TDD §9 formula), directly driven by scroll progress
- **Duration:** scroll-distance bound
- **Easing:** none beyond `scrub: 1` smoothing lag (~1s catch-up, not raw 1:1) — **[OBS]** soft deceleration feel
- **Stagger:** n/a
- **ScrollTrigger:** self — full pin, see TDD §9 code sample
- **Desktop/Tablet/Mobile:** **Mobile/lower-tablet [REC cutoff <1024px]:** replaced entirely by native `overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;` — no pin, no transform-driven scrub, each card `scroll-snap-align: start`
- **Reduced motion:** desktop: pin/scrub disabled, track becomes a normal horizontally-scrollable native region (same as the mobile fallback) so the user can still browse cases via native scroll/arrow keys without motion-triggered pinning
- **Performance note:** single `x` transform on one container element (not per-card) — cheapest possible implementation of this effect; avoid animating individual card transforms during scrub
- **Dependencies:** MOT-CASES-001 (shares the same pin instance)

### MOT-CASES-003 — Gallery card initial stagger-in
- **Element:** `[data-cases-track] > * ` (first visible set, ~4 cards)
- **Trigger:** Cases section enters viewport (before scrub begins, i.e. pin start)
- **Initial state:** `opacity: 0; translateY(16px)`
- **Animation:** → `opacity: 1; translateY(0)`
- **Duration:** 0.5s
- **Easing:** `ease.enter`
- **Stagger:** 70ms
- **ScrollTrigger:** `onEnter` of the Cases pin trigger, plays once, not scrubbed
- **Desktop/Tablet/Mobile:** identical concept; mobile fallback triggers this on the native-scroll container's own viewport entry
- **Reduced motion:** instant appear
- **Performance note:** transform+opacity only; only the first visible batch needs this — cards revealed later via scrub are already `opacity:1` (no fade needed since they're revealed by track translation, not their own opacity change)
- **Dependencies:** none

### MOT-CTA-001 — CTA footer reveal
- **Element:** `[data-cta-footer]`
- **Trigger:** enters viewport (post Cases-gallery release)
- **Initial state:** `opacity: 0; translateY(24px)`
- **Animation:** → `opacity: 1; translateY(0)`
- **Duration:** 0.7s
- **Easing:** `ease.editorial`
- **Stagger:** n/a (or 100ms between heading and the icon-button if treated as 2 elements)
- **ScrollTrigger:** simple `IntersectionObserver` (threshold 0.3) — **not** a GSAP ScrollTrigger, this is a plain once-only reveal with no scrub/pin need (research doc §3.6 division of labor)
- **Desktop/Tablet/Mobile:** identical
- **Reduced motion:** instant appear
- **Performance note:** cheapest tier of animation on the page — IntersectionObserver avoids the overhead of a ScrollTrigger instance for a trivial reveal
- **Dependencies:** none

---

## Section E — Global Micro-interactions

### MOT-GLOBAL-001 — Button hover/press
- **Element:** all `<Button>`/pill components
- **Trigger:** `:hover` / `:active` / `:focus-visible`
- **Initial state:** rest style per Design System
- **Animation:** `hover`: `scale(1.02)`, background lightens/darkens per token; `active`: `scale(0.98)`
- **Duration:** 0.15s (`duration.xs`)
- **Easing:** `ease.standard`
- **Stagger:** n/a
- **ScrollTrigger:** none — plain CSS transition, no JS
- **Desktop/Tablet/Mobile:** hover state N/A on touch (CSS `@media (hover: hover)` guard); active/press state applies everywhere
- **Reduced motion:** keep (this is a micro-interaction feedback cue, not a motion-sickness trigger — scale of 2–5% at 150ms is universally considered safe and is commonly exempted from reduced-motion stripping, but still gate the *transition* duration to `0.01ms` under reduced-motion for full compliance safety per WCAG guidance)
- **Performance note:** pure CSS `transition: transform, background-color`
- **Dependencies:** none

### MOT-GLOBAL-002 — Nav active-pill swap
- **Element:** `[data-nav-item]` active background pill
- **Trigger:** scroll-spy section change (IntersectionObserver on each top-level section)
- **Initial state:** previous item's lime background
- **Animation:** background/position cross-fades or slides to the newly active item (`layoutId`-style shared-element move if using Motion for this micro-interaction, or a simple opacity cross-fade of two absolutely-positioned pill backgrounds if pure GSAP/CSS)
- **Duration:** 0.3s
- **Easing:** `ease.standard`
- **Stagger:** n/a
- **ScrollTrigger:** none (IntersectionObserver-driven, not scroll-position-scrubbed)
- **Desktop/Tablet/Mobile:** hidden on mobile (nav collapses)
- **Reduced motion:** instant swap, no slide
- **Performance note:** transform/opacity only
- **Dependencies:** none

### MOT-GLOBAL-003 — Section-progress dock highlight
Same trigger/pattern as MOT-GLOBAL-002, applied to `[data-hero-dock] > *`.

### MOT-GLOBAL-004 — `prefers-reduced-motion` master override
- **Element:** document root (`<html data-motion="reduced">` set via a top-level provider reading the media query once on mount + `matchMedia` change listener)
- **Trigger:** OS-level `prefers-reduced-motion: reduce`
- **Behavior:** every timeline factory in `motion/timelines/*` checks this flag first and returns a "reduced" branch (documented per-animation above) instead of the full timeline — this is a single shared utility (`motion/utils/reducedMotion.ts`), not a per-file re-implementation
- **Performance note:** checking this flag must happen before any GSAP instance is created, not as a post-hoc override, to avoid ever constructing (and then immediately killing) the full-motion timeline
- **Dependencies:** none — this is the first thing every other timeline factory consults
