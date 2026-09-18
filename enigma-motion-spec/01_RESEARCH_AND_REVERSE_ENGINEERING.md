# 01 · Research & Reverse-Engineering — Reference Video Analysis

**Source file:** `enigma.mp4` (local, user-supplied)
**Method:** ffprobe metadata extraction + ffmpeg frame extraction at 4 fps (250 ms steps, 85 frames) with additional on-demand high-resolution frame grabs at specific timestamps for pixel-level color sampling (Python/PIL). No external source for this video was available or used — all findings below come from the file itself.
**Analysis date:** 2026-09-18

> **Labeling convention used throughout this document:**
> **[FACT]** = verifiable from ffprobe/pixel data. **[OBSERVATION]** = seen directly in frames, described in programmable terms. **[INFERENCE]** = reasoned conclusion from observation (e.g. "this is probably a WebGL canvas because..."). **[RECOMMENDATION]** = our proposed implementation choice. **[ASSUMPTION]** = filled gap where the video doesn't show enough to be sure.
> We could not identify the actual source technology of the reference site (no DOM/inspector access, only a screen recording). Every "how it's built" statement below is an INFERENCE from visual behavior, never a claim of certainty.

---

## 0. Video Facts [FACT]

| Property | Value |
|---|---|
| Duration | 21.13 s |
| Resolution | 1280 × 960 (4:3 capture, not a native web aspect ratio — this is a **screen recording inside a presentation mockup**, not a raw browser capture) |
| Frame rate | 30 fps source, sampled at 4 fps for analysis |
| Codec | H.264 / AAC audio track present (21.0s, not analyzed — no narration relevant to motion spec) |
| Loop | The recording appears to be a seamless capture of one scroll pass, cutting to a blank card at 21.1s — consistent with a looping product-demo GIF/MP4 rather than a full page session |

**[OBSERVATION]** The entire UI lives inside a white rounded-rectangle card floating on a flat neutral-gray backdrop (`#E2E2E2`) decorated with thin lime-colored squiggle line-art and a drop shadow. This outer frame is a **presentation/mockup wrapper** (typical of a Dribbble/Behance shot or a marketing GIF), not part of the actual website chrome. All specs below describe the content *inside* that card only; the outer frame is explicitly out of scope for implementation.

---

## 1. Full Timeline Breakdown

Timestamps are derived from 250 ms sampling; treat as ±125 ms accuracy. Where the source is a demo capture (likely auto-scrolled by a script, not a real user's variable-speed input), scroll-linked timings are recorded as **scroll-progress ratios**, not fixed durations — production behavior must be scroll-distance-driven (scrubbed), not time-driven.

| Time | Section | What happens |
|---|---|---|
| 0.00–2.50s | Preloader | Sphere + "Enigma" wordmark reveal, % counter 1→100, header logo/CTA sync-typing in background |
| 2.50–3.00s | Loader exit | Sphere/text dissolve into a radial swirl-blur mask transition |
| 3.00–4.75s | Hero enter | Nav bar, left icon dock, headline, CTAs, stat card, floating widget stagger in |
| 4.75–6.25s | Hero idle | Ambient 3D spiral rotation continues; stat counter settles at 20% |
| 6.25–7.00s | Scroll transition 1 | Hero block translates up and out; "Advantage" heading cross-fades in |
| 7.00–12.25s | Advantage pinned section | Heading + CTAs pin; 3 cards stack-transition beneath, each with a live counter |
| 12.25–12.75s | Unpin | Advantage block scrolls away as one unit; a 3-column stat row is briefly revealed |
| 12.75–14.50s | Our Cases reveal | Oversized "OUR CASES" wordmark fades in to a low, fixed opacity (watermark) |
| 14.50–18.50s | Cases gallery pinned | Vertical scroll drives horizontal translateX of a variable-width card track |
| 18.50–20.00s | Gallery settle | Track returns to rest position; pin releases |
| 20.00–21.13s | CTA footer | "Let's Get In Touch" band revealed; recording ends/loops |

---

## 2. Section-by-Section Detailed Analysis

### 2.1 Preloader

**[OBSERVATION]**
- Center stage: a large sphere (~45% of viewport width) rendered with a soft radial highlight top-left, a warm ambient-occlusion shadow bottom-right rim, and a subtle secondary rim-light on the right edge — a classic **3-point studio light setup on a matte white material**.
- The sphere itself does **not visibly rotate, scale, or deform** during the 2.5s loading window — it is a static hero object; only the *text inside/near it* and the *global brightness/vignette* animate.
- Brand wordmark "Enigma" is revealed letter-by-letter with a **horizontal motion-blur streak** trailing each new letter (t=0.25s shows "En" with a blur trail to its right, t=0.5s shows "Enig", t=0.75s shows full "Enigma" still slightly blurred, sharp by t=1.0s). This reads as a fast `blur → 0` + slight `translateX` settle per character group, not a full typewriter — likely 2–3 reveal steps, not per-letter timed steps, synced loosely to the percentage counter.
- Percentage counter, bottom-center, monospace-leaning numerals, counts 1% → 100% over ~2.25s. Increments are **non-linear-looking but close to linear** (1, 10, 30, 56, 73, 85, 92, 97, 99, 100 at the sampled frames) — consistent with simulated asset-loading progress (fetch progress or a simple `requestAnimationFrame` tween with easing, not raw XHR progress, since 8 real asset loads would rarely land on such evenly-spaced samples).
- **Simultaneously**, top-left header logo mark + wordmark and top-right "Contact Us" pill fade/type in with the *same* letter-streak treatment, perfectly synced to the sphere's text — meaning the header is likely already mounted (opacity 0) and reveals in lockstep with the loader, not sequenced after it.
- At 100% (t≈2.5s) the counter holds for ~250ms, then the wordmark letters visibly **drift apart horizontally** (kerning increases) for one frame — a "release" cue — immediately followed by a full-bleed **radial swirl/blur dissolve** (t≈2.75–3.0s) that reads as a mix of heavy Gaussian blur + a soft circular mask wipe emanating from the sphere's position, revealing the hero underneath.

**[INFERENCE]**
- Sphere: **CSS is sufficient.** No parallax-of-light, no rotation, no specular movement was observed across 10 sampled frames — a single radial-gradient + box-shadow (or 2 stacked radial-gradients for the rim light) reproduces this exactly. Reaching for WebGL/Three.js for a static-lit sphere would be pure over-engineering.
- The letter-streak reveal is consistent with a **CSS `filter: blur()` transition combined with a clip/mask or opacity stagger** per text chunk — achievable with GSAP `SplitText` (now free, see §3) animating `opacity`, small `x` offset, and `filter: blur()` per character group, OR a simpler CSS `@keyframes` with `blur(6px)→blur(0)` if only 2–3 groups are needed (the video shows only ~3 distinct reveal states, not 6 per-letter states — likely word-chunk stagger, not per-character).
- The exit transition (radial swirl blur) is very likely a **large blurred circular div that scales/fades while the loader's opacity drops**, combined with the hero content's own entrance blur — i.e. two overlapping animations (loader-exit-blur-out, hero-enter-blur-in) that *together* create the illusion of a single "swirl" wipe. A literal SVG circular clip-path wipe is a plausible alternative but the softness/blur in the captured frames points more toward a blur-based cross-fade than a hard-edged clip-path.

**[RECOMMENDATION]** Build the sphere in pure CSS (radial-gradient + layered box-shadow), animate the percentage with GSAP tweening a JS counter (not real network progress — decouple perceived loading from actual asset loading, see Performance section in TDD), and use `SplitText`-style chunk reveal + `filter:blur` for the wordmark. Do not use WebGL for this element.

---

### 2.2 Global Visual Language — Design Tokens (Reverse-Engineered)

**[OBSERVATION + pixel sampling, [ASSUMPTION] on exact hex — treat as a starting palette to refine against the reference visually]**

| Token | Sampled value | Usage |
|---|---|---|
| `color.surface.base` | `#F8F8F6` – `#FDFDFD` | Page/card background |
| `color.surface.pill` | `#F4F2F5` – `#F6F4F7` | Nav pill, secondary button bg, CTA-footer band |
| `color.accent.lime.100` | `#FAFFE0` – `#FBFFE1` | Advantage card backgrounds, active-state pill fills |
| `color.accent.lime.200` | `#DFE2C8` | Icon badge chips (muted olive-lime) |
| `color.ink.900` | `#17151A` – `#201D22` | Primary text, "Contact Us" / "Get Started" solid buttons |
| `color.ink.800` | `#1E1C1E` | Dark stat-widget card background (3rd advantage card) |
| `color.text.muted` | `#8A8A8A` – `#B3B3B1` | Secondary copy, pinned section heading at rest, disabled states |
| `color.watermark` | `#F0F0EC` @ ~8–12% perceived opacity over white | "OUR CASES" oversized heading |
| *(presentation-only, not site)* `#E2E2E2` | Outer mockup backdrop — **do not implement** |

- **Border radius:** consistently large and soft — outer card ≈ 24–28px, nav pill / buttons fully rounded (`9999px` pill), advantage cards ≈ 24px, gallery cards ≈ 16–20px, stat widgets ≈ 16px. No sharp corners anywhere in the UI.
- **Spacing:** generous whitespace; hero left padding ≈ 5–6% of container width; consistent ~24–32px gaps between grouped elements (chips, buttons). Reads as an 8pt spacing scale (8/16/24/32/48/64/96).
- **Typography:** a clean, grotesque/geometric sans-serif (visually close to **Inter, General Sans, or Neue Montreal** — cannot be identified with certainty from a video, **[ASSUMPTION]**: pick a high-quality variable grotesque such as **Inter** or **General Sans** for parity; do not attempt to clone a proprietary/paid font). Hero H1 is very large (~56–64px desktop-equivalent scaled to the 1280px capture, i.e. genuinely oversized editorial type), section headings ~32–40px, body copy small and muted (~14–15px), the "OUR CASES" watermark spans nearly full container width — this is `clamp()`-scale, viewport-relative type, not a fixed px value.
- **Imagery:** all product/case imagery is **3D-rendered soft-lit product photography** (blender/appliance renders, abstract pill/capsule renders) in a consistent pastel palette (cream, sage, blush) — not photography, not illustration. This is a deliberate, consistent art direction the implementation must respect: **do not substitute flat illustrations or stock photos**, use soft-studio-lit 3D renders or equivalent-quality photography with matching color grading.
- **Iconography:** thin 1.5px stroke line icons (anchor, gear, calendar/expand, help "?", user, phone, chevrons) — consistent stroke weight, rounded joins.

---

### 2.3 Header

**[OBSERVATION]**
- Lives *inside* the rounded content card, not edge-to-edge of the viewport — i.e., it's a header bar with its own padding within a bounded, centered container (this matches a "boxed layout" product page, not a full-bleed marketing site).
- Structure: left = logo mark (small fragmented-circle "C" glyph) + wordmark "Enigma"; center = pill-shaped nav bar (own rounded-rect background, distinct from the page background) containing "Home" (active — lime-filled pill), "Technology", "Service", each with a small trailing icon; right = help icon, user/account icon, solid black "Contact Us" pill button.
- During the Advantage pinned section, the center nav items (**Home/Technology/Service**) **disappear**, leaving only "Get Started" / "Contact Us" inline under the pinned heading, while the *original* header's "Contact Us" button remains fixed top-right throughout. This reads as: the header is **sticky/fixed for its whole life**, and it's the *page content underneath* that swaps in a secondary in-flow CTA pair as part of the Advantage section's own copy block — not the header itself changing.
- No visible background blur/blend-mode change on the header when scrolling — it stays on the same flat card background throughout (the card itself doesn't scroll away, only inner content does), so no glassmorphism/blur-on-scroll effect was observed. **[INFERENCE]**: keep the header simple — `position: sticky/fixed`, same static background, no scroll-linked style change needed. Do not over-build a scroll-shrink or blur-on-scroll header that wasn't observed.
- A secondary **left-edge vertical dock** (anchor / gear / expand / calendar-ish icons, each in its own small pill, connected by a thin vertical line) sits independently pinned to the left edge, staggers in after the header, and the *active* icon carries the lime highlight — this behaves like a **section/progress indicator** (scrollspy), not primary navigation. Only 2 icons are ever clearly visible at once with a fading tail below, suggesting more icons exist off-frame for additional sections.
- A small circular button bottom-left (loop/refresh glyph) + a down-chevron beneath it reads as a **"back to top" / "scroll cue"** control, present from hero through at least the Advantage section.

---

### 2.4 Hero

**[OBSERVATION]**
- Split/editorial layout: text block left-aligned (headline, CTAs, stat card), a large abstract 3D graphic occupying the right-to-center area, a short "Advantages Delivered, Promises Kept, Your Ongoing Success." triplet of lines top-right as a tertiary caption.
- The centerpiece graphic is a continuously, slowly rotating/morphing **spiral ribbon** — the silhouette visibly changes shape (tighter spiral → more open ribbon) across ~1.5s of idle time with no scroll input, i.e. it has **ambient autonomous motion**, independent of scroll. This, plus the soft self-shadowing and consistent studio lighting matching the loader sphere and product renders, strongly suggests a **pre-rendered video/WebM loop or Lottie/APNG sprite of a 3D render**, *not* a live WebGL scene — a live Three.js scene would be a legitimate way to build it too, but the visual complexity (soft global illumination, no visible aliasing) is easier and cheaper to fake with a looping video/transparent WebM than to hand-roll in real-time WebGL. **[INFERENCE, medium confidence]**.
- Headline "AI Powered Tech Solutions For Your Business" types/reveals across two lines with a translateY + blur settle, overlapping in time with the spiral graphic's own fade-in (both animate concurrently, not sequentially) — confirmed by a mid-transition frame where both the heading and the graphic are simultaneously semi-blurred.
- Two pill CTAs ("Get Started" solid lime, "Explore" outlined) sit *above* the headline in the capture — i.e., vertical order top-to-bottom is: CTAs → Headline → floating widgets, an intentional inverted hierarchy that still reads fine because the headline is visually dominant by size.
- Two floating widgets anchor the bottom of the hero: a small "Explore Your Data" card with a tiny bar-chart glyph and diagonal arrow icon, and (entering ~250ms later) a lime "Increased Revenue" stat card with a **live-counting percentage** (13%→16%→18%→19%→20%, settling at 20%) plus a 3-dot pagination control (`01 02 03`, dot 2 active) — this pagination is a strong signal that this card is a **mini carousel synced to the Advantage section below** (same 3-count as the 3 Advantage cards observed later), foreshadowing content the user will reach on scroll.

**[RECOMMENDATION]** Treat the spiral hero visual as a **looped, transparent WebM/MP4 (with an AVIF/PNG poster fallback)** rendered in Blender/Spline and exported — this gets 90% of the visual fidelity at a fraction of the engineering and runtime GPU cost of a hand-built WebGL scene, and trivially respects `prefers-reduced-motion` (swap to a static poster frame). Only escalate to React Three Fiber if the client explicitly wants the object to react to cursor/scroll input in ways a pre-rendered loop cannot fake (not observed in this video).

---

### 2.5 Scroll-Driven Storytelling — Pin/Scrub Inventory

**[OBSERVATION]** Three distinct scroll-driven behaviors were identified, each a candidate for a dedicated `ScrollTrigger`:

1. **Hero → Advantage cross-fade** (t≈6.25–7.0s): a simple in-and-out content swap, content translates up and off, new heading fades up. **Not pinned** — ordinary scroll with entrance/exit animation on each block. Low engineering risk.
2. **Advantage stacked cards** (t≈7.0–12.25s): the section **heading and CTA row stay visually fixed** (pinned) while three content cards enter from below in sequence, each **fully covering the previous one** (a "card peel/stack" pattern — the outgoing card is briefly visible peeking above the incoming one before being fully hidden). This is a **pinned parent + internal scrubbed sub-timeline**, the canonical GSAP `ScrollTrigger.pin` + nested timeline pattern. Each card also runs its own **independent counter animation** timed to *when that card is active*, not to absolute scroll position — meaning counters should be triggered by "this card just became active," playing once (not scrubbed) with a fixed duration, layered inside the scrubbed parent pin.
3. **Our Cases horizontal gallery** (t≈14.5–18.5s): the giant "OUR CASES" wordmark **pins at a fixed, low opacity** as a watermark while a **horizontal card track translates leftward** in direct response to continued vertical scroll input, revealing progressively more cards (at least 8 distinct cards seen, of varying width/height) before the section releases and normal vertical scroll resumes. No visible native horizontal scrollbar at any point, and the mouse cursor never moves outside normal vertical-drag territory — this rules out native `overflow-x: scroll` and confirms **vertical-scroll-distance mapped to `translateX`** via `ScrollTrigger` scrub, the standard "horizontal gallery inside a vertical pin" pattern.

**Choice between implementation options (per prompt's question A/B/C) for the Advantage section:**

| Option | Description | Verdict |
|---|---|---|
| A. Plain stacked sections | Each card is its own normal-flow section, scrolled past normally | ❌ Does not reproduce the observed pin-and-cover behavior; heading would not stay fixed |
| B. Sticky parent + animated internal states | One `position:sticky`/`ScrollTrigger.pin` wrapper sized to `3 × 100vh` (or scroll-distance), heading stays put, inner card layer swaps/covers via a scrubbed timeline | ✅ **Selected** — matches the observed "heading fixed, cards cover each other" behavior exactly, and is the standard, well-documented GSAP pattern for this exact effect |
| C. Single GSAP master timeline for the whole page | One giant timeline driving every section | ❌ Over-engineered and fragile: couples unrelated sections, makes responsive `matchMedia` overrides and code-splitting much harder, and isn't how the observed behavior segments (each pin clearly starts/ends independently with its own release point) |

**[RECOMMENDATION]** One `ScrollTrigger.pin()` per major storytelling section (Advantage, Cases-gallery), each with its **own** internal GSAP timeline (`scrub: true` for the pin-scoped motion, discrete `.play()` triggers for card-local counters), coordinated by `ScrollTrigger.refresh()` on resize — not one monolithic master timeline. See TDD §4–§9 for exact architecture.

---

### 2.6 Advantage / Service Cards — Content & Motion Detail

Three cards observed, each following the same shape (pill badge → H2 → paragraph → image with floating stat widget) but a different **counter widget style**, which is itself useful signal that these are data-driven, templated cards, not bespoke one-offs:

| Card | Badge | Heading | Counter style | Counter range (observed) |
|---|---|---|---|---|
| 1 | "Increased Revenue" | "Cultivating Growth, Maximizing Revenue" | Small white floating tag, bar-chart glyph, plain numeral | 0% → 4% → 11% → 16% → 19% → 20% |
| 2 | "Problem-Solving Expertise" | "Empowering Excellence through Expertise" | Circular SVG progress ring (stroke-dashoffset) + centered numeral | 8% → 18% → 24% → 28% → 29% |
| 3 | "Innovation Leadership" | "Shaping Tomorrow through Innovation Today" | Dark rounded card, 3-dot step indicator, large numeral + label | 8% → 33% → 58% → 70% → 76% → 78% |

**[OBSERVATION]** All three counters animate **upward only, never resetting mid-card**, and appear to start counting the moment each card becomes the "active"/fully-covering card in the stack — i.e., counter start is gated on scroll-progress crossing a threshold (card N reaches ~100% cover), not on initial pin entry. Numbers do not perfectly land on the label's "final" implied value in every sampled frame (e.g., card 3 settles at 78%, not a round number) — this is consistent with the counter's duration being *slightly longer* than the scroll dwell time captured at this demo's scroll speed, i.e. **in production the counter duration must be tuned to comfortably complete within the scroll dwell time of that card**, or better, be scroll-scrubbed rather than time-based so it always finishes exactly in sync (see Animation Spec for both options).

---

### 2.7 Large Typography Transition — "OUR CASES"

**[OBSERVATION]**
- Full-bleed width, nearly touching both edges of the container.
- Extremely low, flat opacity (~8–12%, no gradient) the entire time it's on screen — it never reaches full-strength black. It behaves as a **background watermark layer**, sitting *behind* the gallery cards in z-index, visible through/around them.
- It does **not move** once settled (no parallax drift was detected across the 4s it's tracked on screen) — it fades in once, then holds static while foreground cards animate over/past it.
- `overflow: hidden` on the parent is required (the text is wider than useful safe margins and is deliberately clipped/bled at the container edge in the earlier partial-reveal frames).

**[RECOMMENDATION]** `clamp(3.5rem, 12vw, 9rem)`-scale heading, `position: absolute` inside the gallery section (not `fixed` — it scrolls away with the section, it just doesn't move *during* the section, consistent with being pinned together with the gallery's own `ScrollTrigger.pin`), rendered once at low fixed opacity, z-index below the card track.

---

### 2.8 Case Study Gallery — Mechanism Determination

**[OBSERVATION, decisive evidence]**
- No native scrollbar ever appears at the bottom of the gallery, in any of the ~16 sampled frames covering this section.
- The mouse cursor position stays roughly static (normal vertical mouse-wheel/trackpad interaction territory — no horizontal drag gesture visible), while the card track visibly shifts left continuously.
- Cards of clearly different widths and heights sit in a single row with consistent gutter, sliding as one rigid track (no independent per-card easing/lag) — consistent with one `xPercent`/`x` transform on a flex/grid container, not per-card animation.
- At the point the track has scrolled several cards past, it **settles back to (or near) its starting card set** before the section releases into the CTA footer (frames 79–81 show the original 4-card layout again after having shown 7–8 cards mid-scroll) — this indicates either (a) the pin's scroll distance is long enough that the demo's playback shows scroll-forward-then-the-recording-loops/resets, or (b) more likely, **[INFERENCE]** the capture is a scripted auto-scroll that overshoots and the CTA footer section actually begins its own reveal from the bottom while the gallery is still settling, which our eyes read as a "reset." Do not over-interpret this as a bounce-back animation — build a **one-directional scrub** (scroll forward = track moves left; scroll back = track moves right, standard bidirectional scrub) and treat any apparent "reset" as a capture artifact, not a spec requirement.
- No card is visually more "active"/scaled-up than its neighbors at any point (all cards are uniform scale throughout) — **contradicts** a common "active card zooms" pattern; this reference does **not** do center-scaling. Do not add scale-on-active unless product wants to deviate from the reference.
- A pill "All Works" button and "Scroll to explore" hint text remain fixed at the bottom of the section throughout the horizontal scroll — these do not move with the track, confirming they're pinned UI chrome, not gallery items.

**Determination:** **Vertical-scroll-driven horizontal transform** (not native horizontal scroll, not draggable/inertial in the observed capture — [ASSUMPTION]: touch/drag-to-pan may exist on touch devices even if not exercised in this desktop capture; recommend adding it as a progressive enhancement, see TDD).

**[RECOMMENDATION architecture:**
```
scrollDistance (vertical, consumed by the pin) = trackWidth - viewportWidth (+ padding)
horizontal progress = ScrollTrigger progress (0→1)
track.x = -progress * scrollDistance
```
No snapping observed (cards stop at arbitrary sub-card offsets in the sampled frames) — **free-scrub motion, no `scrollSnap`**, confirmed by cards sitting mid-crop at container edges in multiple frames.

---

## 3. Technology Stack Research

### 3.1 Does this need Three.js / WebGL? — **NO, not for what's observed.**
Every visual effect in this 21s capture (sphere, spiral hero graphic, product renders, card stack, horizontal gallery, giant type) is reproducible with **CSS + a 2D transform/scroll-animation library + pre-rendered imagery/video loops**. Nothing in the footage shows real-time 3D interactivity (no cursor-parallax on the sphere or spiral graphic, no drag-to-orbit, no lighting that responds to input). Introducing Three.js/R3F here would add bundle size, GPU battery cost on mobile, and hydration complexity for zero observed visual gain. **[RECOMMENDATION]**: reserve WebGL as an *optional* Phase-2 upgrade only if the client later wants the hero object to be truly interactive.

### 3.2 CSS vs WebGL — where CSS wins here
Radial-gradient sphere, blur-based loader transition, card stacking/covering, horizontal track transform, giant watermark type, counters — **all** are transform/opacity/filter-only effects, the exact domain CSS/compositor-thread animation excels at. WebGL would only be justified for true 3D geometry manipulation, which this reference doesn't exhibit.

### 3.3 GSAP vs Motion (Framer Motion) — **GSAP wins for this build**
[FACT, verified 2026-09-18] **GSAP is 100% free for commercial use since v3.13 (April 30, 2025), including ScrollTrigger, ScrollSmoother, SplitText, and every previously-paid "Club GreenSock" plugin**, following Webflow's acquisition/sponsorship of GreenSock. This removes what used to be the single biggest argument *against* GSAP (plugin licensing cost) for club-only features like `ScrollTrigger`/`SplitText`, both of which this build needs. Motion (formerly Framer Motion, rebranded and now framework-independent, package renamed `framer-motion` → `motion`, docs at motion.dev) is excellent for **component-level, React-idiomatic** transitions (route transitions, layout animations, simple enter/exit), but its scroll-linked tooling (`useScroll`, `useTransform`) is meaningfully less capable than `ScrollTrigger` for **pinning + multi-stage scrubbed timelines with nested triggers** — exactly what the Advantage-cards and Cases-gallery sections require. **[RECOMMENDATION]**: GSAP + ScrollTrigger as the scroll-motion engine; Motion is not required given GSAP covers both timeline and simple-transition needs, and mixing two animation engines would add bundle weight and cognitive overhead without benefit here. (If the team is deeply React-idiomatic and wants declarative `<motion.div>` markup for *non-scroll* micro-interactions like hover/tap states, Motion can coexist safely since it doesn't touch the scroll thread — optional, not required.)

### 3.4 Is Lenis necessary?
[FACT] Lenis (darkroom.engineering, github.com/darkroomengineering/lenis) is a ~3–4 kB dependency-free smooth-scroll wrapper around native scroll, designed explicitly to sync with GSAP ScrollTrigger. [FACT] GSAP's own `ScrollSmoother` (also free since 3.13) does the same job but **requires a specific `#smooth-wrapper > #smooth-content` DOM structure** and is a heavier, more opinionated dependency. The reference video's scroll feels continuous/eased (visible slight deceleration between sampled frames rather than raw 1:1 wheel mapping) — consistent with *some* scroll-smoothing being present, though this is subtle and could also just be the demo's own auto-scroll easing. **[RECOMMENDATION]**: use **Lenis**, for its lighter footprint, framework-agnostic integration (works cleanly with Next.js App Router without forcing a wrapper on every route), and because it is the de-facto standard pairing with ScrollTrigger in current (2026) production sites in this exact visual genre. `ScrollSmoother` remains noted as a valid, now-free alternative in the Technical Decision Record if the team already standardizes on all-GSAP tooling.

### 3.5 CSS Scroll-Driven Animations (`animation-timeline: scroll()/view()`) / View Transitions API
[FACT, verified 2026-09-18] Chrome/Edge shipped scroll-driven animations unflagged since Chrome 115 (2023); **Safari shipped support in Safari 26 (September 2025)**; **Firefox still ships it behind a flag as of Firefox 152 (June 2026)** — it is *not yet* universally baseline. Given this build's pinning + horizontal-track + nested-counter requirements exceed what `animation-timeline` alone can express anyway (no native pin-and-cover-stack primitive, no native "translate X in response to vertical scroll distance with a release point" primitive), and cross-browser reliability is a hard requirement, **native CSS scroll-driven animations are not used as the primary mechanism**. They are permitted as a **progressive-enhancement micro-optimization** for simple, non-critical decorative effects only (e.g. a fade-in on a static paragraph) behind `@supports (animation-timeline: scroll())`, never for anything load-bearing to the story (pins, gallery, counters). The View Transitions API is not relevant here — no full-page navigation/route transition was observed in this single-page capture.

### 3.6 GSAP vs Framer Motion, IntersectionObserver, Web Animations API — division of labor
- **GSAP + ScrollTrigger**: all scroll-pinned/scrubbed sequences (Advantage stack, Cases gallery, giant-type reveal).
- **IntersectionObserver** (native, zero-dependency): simple once-only reveal-on-view animations for non-pinned content (e.g. any future simple fade-up sections not covered above) — cheaper than spinning up a ScrollTrigger instance for trivial cases.
- **Web Animations API / plain CSS transitions**: micro-interactions — button hover/press states, nav pill active-state swap, icon color changes. No library needed for these.
- **Framer Motion/Motion**: optional, only if the team wants declarative React component transition idioms; not required by anything observed.

### 3.7 Performance, FPS, and correctness answers (per brief's required Q&A)

| Question | Answer |
|---|---|
| Transform vs layout properties? | Every animation identified above is expressible via `transform` (translate/scale) and `opacity`, plus `filter: blur()` for the loader/text-reveal moments. None require animating `width`/`height`/`top`/`left`/`margin` — **[RECOMMENDATION]**: enforce this as a hard rule (see Motion Design System). `filter: blur()` is GPU-composited but is the single most expensive property used here — keep blur radii small (≤8–10px) and duration short (≤900ms) to avoid frame drops, especially on the loader text and hero entrance. |
| 60 FPS strategy | Compositor-only properties (`transform`/`opacity`/`filter`) + `will-change` applied *only* during the active animation window (added on trigger start, removed on complete) + GSAP's built-in `force3D` + batching all ScrollTrigger reads via its internal rAF loop rather than manual scroll listeners. |
| Avoiding layout thrashing | Never read `getBoundingClientRect()`/`offsetWidth` inside a scroll/rAF callback without batching; let ScrollTrigger own all scroll-position reads (it already batches). Compute gallery `trackWidth`/`scrollDistance` once on load and on debounced `resize`/`ScrollTrigger.refresh()`, not per frame. |
| CLS avoidance | Reserve explicit `aspect-ratio`/fixed dimensions for every image and the hero graphic *before* its data/asset loads; never let the loader's removal shift layout — loader is an overlay (`position: fixed`, full viewport) so its unmount cannot reflow page content beneath it. |
| Responsive animation handling | `gsap.matchMedia()` with three breakpoint contexts (desktop/tablet/mobile) — simplify or fully disable pin/scrub-heavy sections below `768px` (see §4 and TDD §11). |
| `prefers-reduced-motion` | Global media-query check gates: (a) loader skips straight to 100%/instant reveal, (b) all pins are disabled (sections become normal static-flow, cards simply stack vertically with a plain fade, no scrub), (c) counters still count but instantly or over a very short duration, (d) ambient hero graphic shows a static poster frame instead of the looping video. This is a MUST, not a nice-to-have — see PRD §9. |
| SEO on a heavily-animated page | All real content (headings, paragraphs, case titles) must exist in the DOM at initial render (SSR/SSG via Next.js), *not* injected only after JS/animation runs — GSAP should animate elements that already exist with real text content, never lazily create/inject text nodes purely for animation purposes. Confirmed pattern: animate `opacity`/`transform` on already-rendered semantic HTML. |
| SSR/hydration | GSAP and ScrollTrigger are browser-only (`window`/`document` dependent) — must be initialized inside `useEffect`/`useGSAP` (client component), never at module scope evaluated during SSR. Next.js App Router: mark motion-orchestrating components `"use client"`; keep data-fetching/layout as Server Components wherever possible. |
| Mobile GPU limits | Reduce or drop `filter: blur()` usage on mobile (expensive on lower-end GPUs), cap the hero looping video to a shorter/lower-resolution asset or a static poster below a defined breakpoint, disable the horizontal-gallery pin on narrow viewports in favor of native `overflow-x: auto` with `scroll-snap` (a well-supported, cheap, touch-native pattern) — see TDD §11. |
| Safari/iOS issues | Known class of bugs: `position: sticky`/GSAP pin interactions with iOS Safari's dynamic toolbar (viewport height changes on scroll) can cause jitter; mitigate with `ScrollTrigger.normalizeScroll(true)` (a documented GSAP utility for exactly this) and testing against `100dvh` rather than `100vh`. `backdrop-filter`/heavy `filter: blur()` can be janky on older iOS Safari — budget accordingly and test on real hardware, not just simulator. |

---

## 4. Benchmark Table

**[OBSERVATION/RECOMMENDATION — no branding, content, or code from these sites is to be copied; listed purely as implementation-pattern references for the patterns identified above.]**

| Studio / Site | Relevant interaction | Similarity to reference | Technology (if publicly known) | Lesson to take |
|---|---|---|---|---|
| Active Theory (activetheory.net) | Pinned narrative scroll sequences, oversized type reveals | High | WebGL/GSAP-heavy, bespoke | Shows how far pinned storytelling can be pushed — use as an upper-bound reference, not a target; this build needs far less |
| RESN (resn.co.nz) | 3D product hero objects, playful counters | Medium-high | WebGL/Three.js | Confirms that a "sphere/abstract 3D hero" doesn't require live WebGL if pre-rendered well |
| Lusion (lusion.co) | Cursor-reactive 3D hero | Medium (reference has no cursor-reactivity) | WebGL | Good example of *when* WebGL is actually justified — informs the "no WebGL needed here" call |
| Locomotive (locomotive.ca) | Smooth-scroll + pinned sections, agency portfolio grid | High | Locomotive Scroll (their own lib) / GSAP | Pattern precedent for smooth-scroll + pin combo at agency-portfolio scale |
| Cuberto (cuberto.com) | Card-stack service sections, large type, product renders | Very high | GSAP-based (public case studies) | Closest visual/IA match to the Advantage-card pattern observed here |
| Studio Freight / darkroom.engineering case sites | Lenis + GSAP horizontal galleries | High | Lenis + GSAP ScrollTrigger (documented) | Direct precedent for the horizontal-gallery-inside-vertical-pin technique |
| GSAP Showcase (gsap.com/showcase) | Countless ScrollTrigger pin/scrub demos | High (technique level) | GSAP (confirmed) | Reference implementations for exact ScrollTrigger pin/scrub code patterns |
| Codrops (tympanus.net/codrops) | Horizontal gallery tutorials, text-reveal tutorials | High (technique level) | GSAP/vanilla JS tutorials | Good source of implementation-pattern tutorials for each isolated effect |
| Awwwards SOTD archive — "AI/tech SaaS" category | Editorial hero + stat-card sections | Medium-high | Mixed (Next.js/GSAP common) | Confirms this visual genre (AI/tech product marketing site) commonly uses exactly this stack |
| Immersive Garden (immersive-garden.com) | Large-scale narrative scroll, luxury product sites | Medium | WebGL-heavy | Upper-bound reference for production values; not required here |
| Ana Tudor / CSS-Tricks scroll-driven-animation demos | Pure-CSS scroll timelines | Low-medium (browser support gap) | Native CSS `animation-timeline` | Informs the "progressive enhancement only" call for native CSS scroll animations |
| Zajno (zajno.com) | Editorial product marketing, counter widgets | Medium-high | GSAP-based | Similar stat-counter-on-card pattern to Advantage section |

---

## 5. Final Conclusions (Required Answers)

1. **What makes this feel "premium"?** The combination of (a) generous, disciplined whitespace and a boxed/editorial layout rather than full-bleed chaos, (b) a tightly restrained 3-color palette (off-white, near-black, one pale-lime accent) used with total consistency, (c) soft, consistent 3D-render art direction for every image, (d) motion that is *slow and purposeful* — nothing snaps, everything eases — and (e) the pinned "card-cover" and "watermark type" techniques, which are non-trivial to build and instantly signal engineering craft.
2. **Top 5 animations that create that feeling:** (1) the preloader sphere + synced text/counter reveal, (2) the loader→hero blur-swirl dissolve, (3) the Advantage pinned card-stack-and-cover, (4) the "OUR CASES" low-opacity watermark pin, (5) the horizontal gallery scrub.
3. **Must-reproduce:** #3 and #5 above (the pinned card-stack and the horizontal gallery) — they are the structural backbone of the page's "storytelling" identity; without them this is just a normal marketing page.
4. **Can be simplified:** The preloader sphere lighting can be simplified to a single radial-gradient if timeline is tight; the hero's continuous idle spiral rotation is nice-to-have, not core; per-card counter widget *style* variety (tag vs ring vs dark-card) can be unified to one style without losing the core effect.
5. **Is WebGL/Three.js needed?** No — see §3.1. Every observed effect is CSS/transform/pre-rendered-media achievable.
6. **Optimal stack:** Next.js (App Router) + TypeScript + Tailwind CSS + GSAP/ScrollTrigger + Lenis. Full reasoning and alternatives in `07_TECHNICAL_DECISIONS.md`.
7. **Hardest engineering part:** The Advantage card-stack-and-cover pin with per-card gated (not globally scrubbed) counters nested inside a scrubbed parent pin — getting the "counter starts exactly when its card becomes active, regardless of scroll speed" behavior robust across scroll directions (forward/backward) and speeds is the single trickiest piece of state management in this build.
8. **What to prototype first:** The Advantage pin + card-stack-cover + gated counter (hardest problem, proves the core technique), alongside the horizontal gallery (second-hardest). See `06_IMPLEMENTATION_PLAN.md` Phase 0 and the dedicated prototype scope in that document.
9. **Common mistakes that make a clone look cheap despite matching layout:** using default/linear easing instead of the soft `cubic-bezier` decel curves observed throughout; snapping counters to their end value instantly instead of counting up; forgetting the blur component in text reveals (opacity+translateY alone reads noticeably cheaper); using a hard cut instead of a cross-fade/cover for card transitions; not respecting `prefers-reduced-motion`; letting the horizontal gallery janky-scroll because scroll reads weren't batched; mismatched image art direction (stock photos instead of consistent 3D renders) breaks the "premium" read instantly.
10. **How to hit 90–95% fidelity without hurting performance:** build every effect with `transform`/`opacity`/`filter` only (never layout properties), pre-render the hero 3D graphic as video rather than live WebGL, gate all scroll-linked work behind `matchMedia`-scoped, disposable `ScrollTrigger` contexts that are properly reverted on breakpoint change/unmount, and tune easing curves (see Motion Design System) rather than chasing pixel-perfect geometry — motion *feel* is what reads as premium, not exact px matching.
