# 05 · Motion Design System

A fixed vocabulary of durations, easings, and rules. **No animation in this codebase may use a raw/inline duration or cubic-bezier value — every animation must reference a token from this file.** This is what prevents "animation drift" (every developer picking slightly different, uncoordinated timings) as the codebase grows.

---

## 1. Duration Tokens

```css
:root {
  --motion-duration-xs:  150ms;  /* micro-interactions: hover, press, dot fills */
  --motion-duration-sm:  300ms;  /* small UI reveals: nav pill swap, chunk text reveal */
  --motion-duration-md:  600ms;  /* standard entrance: cards, widgets, section headings */
  --motion-duration-lg:  900ms;  /* prominent entrance: hero headline, loader exit */
  --motion-duration-xl:  1400ms; /* counters, slow narrative beats */
}
```
```ts
// motion/durations.ts (GSAP uses seconds, not ms)
export const duration = { xs: 0.15, sm: 0.3, md: 0.6, lg: 0.9, xl: 1.4 } as const;
```

| Token | Use for |
|---|---|
| `xs` (150ms) | Button hover/press, dot-indicator fills, icon color swaps |
| `sm` (300ms) | Nav active-pill swap, loader text-chunk reveal, small badge fades |
| `md` (600ms) | Card entrances, widget reveals, standard section-element fade-ins |
| `lg` (900ms) | Hero headline reveal, loader exit dissolve, CTA-footer reveal |
| `xl` (1400ms) | Live counters (hero + advantage cards) |

## 2. Easing Tokens

```css
:root {
  --ease-standard:  cubic-bezier(0.4, 0, 0.2, 1);     /* general-purpose UI motion */
  --ease-enter:     cubic-bezier(0.22, 1, 0.36, 1);    /* soft decel — all content entrances */
  --ease-exit:      cubic-bezier(0.4, 0, 1, 1);        /* accelerating exit / dissolve */
  --ease-editorial: cubic-bezier(0.65, 0, 0.35, 1);    /* slow, weighty — section-level transitions */
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1); /* micro-interactions only, e.g. button press */
}
```
```ts
// motion/easings.ts
export const ease = {
  standard:  'power2.out',                         // GSAP named ease equivalent for quick internal use
  enter:     'cubic-bezier(0.22, 1, 0.36, 1)',
  exit:      'power1.in',
  editorial: 'cubic-bezier(0.65, 0, 0.35, 1)',
  spring:    'back.out(1.4)',
} as const;
```

| Token | Personality | Use for |
|---|---|---|
| `ease.standard` | Neutral, quick | Hover states, small UI swaps |
| `ease.enter` | Soft deceleration, confident arrival | Every content entrance (headline, cards, widgets) — this is the single most-used token in the system |
| `ease.exit` | Accelerating away | Loader dissolve, element exits |
| `ease.editorial` | Slow, deliberate, "weighty" | Section-to-section transitions, CTA footer — reinforces the "premium/restrained" brand principle |
| `ease.spring` | Slight overshoot | **Micro-interactions only** (button press feedback) — never use on content entrances, it reads as playful/bouncy, which contradicts the "premium, restrained" principle |

**Rule:** scrubbed (`scrub: true/number`) animations use **linear** easing (or none) at the tween level — the "easing" in a scrubbed animation comes from Lenis's own scroll smoothing + the `scrub` lag value, not from a cubic-bezier on the tween itself. Applying `ease.enter` *inside* a scrub tween produces a double-eased, mushy feel — do not do this (called out explicitly in Animation Spec MOT-ADV-002).

## 3. Stagger Tokens

```ts
export const stagger = { tight: 0.06, normal: 0.08, loose: 0.15 } as const; // seconds
```
- `tight` (60ms): text-chunk/character-group reveals
- `normal` (80ms): icon docks, nav items, multi-CTA groups
- `loose` (150ms): large card groups, gallery initial batch

## 4. Property Allow-list

Animations in this system MAY animate: `transform` (translate/scale/rotate), `opacity`, `filter: blur()`. Animations MAY NOT animate `width`, `height`, `top`, `left`, `margin`, `padding`, or any other layout-triggering property, **except** the single, explicitly-documented exception in MOT-LOAD-005 (`letter-spacing` on a small, isolated, non-repeating text element). Any new animation proposing a layout-property change must be re-expressed via `transform`/clip-path first; if genuinely impossible, it requires explicit sign-off noted in code comments, not silent addition.

## 5. `will-change` Policy

Apply `will-change` only for the duration of an active animation, added at animation start and removed at completion (GSAP: use `onStart`/`onComplete` callbacks, or rely on GSAP's own automatic `force3D` handling for `transform`/`opacity` which usually makes manual `will-change` unnecessary). Never apply `will-change` as a permanent/static CSS rule on a selector — this wastes GPU memory via excessive layer promotion (TDD §12).

## 6. Radius & Spacing Tokens (visual system, supports the motion system's "premium" feel)

```css
:root {
  --radius-sm: 12px;   /* small chips, dots */
  --radius-md: 16px;   /* gallery cards, widgets */
  --radius-lg: 24px;   /* advantage cards, page container */
  --radius-full: 9999px; /* pills, buttons, nav bar */

  --space-1: 8px; --space-2: 16px; --space-3: 24px; --space-4: 32px; --space-6: 48px; --space-8: 64px; --space-12: 96px;
}
```

## 7. Color Tokens (from `01_RESEARCH_AND_REVERSE_ENGINEERING.md` §2.2 — starting palette, refine visually against the client's real brand before ship)

```css
:root {
  --color-surface-base: #F8F8F6;
  --color-surface-pill: #F5F3F6;
  --color-accent-lime-100: #FAFFDE;
  --color-accent-lime-200: #DFE2C8;
  --color-ink-900: #17151A;
  --color-ink-800: #1E1C1E;
  --color-text-muted: #6E6E6E; /* darkened from raw sample #8A8A8A to meet 4.5:1 AA contrast on --color-surface-base — verify with a contrast checker against final type sizes */
  --color-watermark: rgba(23, 21, 26, 0.1);
}
```

## 8. `prefers-reduced-motion` Contract

Every token-consuming timeline factory must branch on the shared `useReducedMotion()`/`isReducedMotion()` check (Animation Spec MOT-GLOBAL-004) **before** constructing any GSAP instance. The reduced-motion branch for each animation family is documented per-entry in `04_ANIMATION_SPEC.md`; the general rule: replace `duration.lg`/`xl` timed reveals and all `scrub`/`pin` behavior with instant (`duration: 0` or CSS-only) final-state application, while keeping `xs`-tier micro-interaction feedback (button press) intact.

## 9. Naming Convention

- Motion IDs: `MOT-<SECTION>-<NNN>` (e.g. `MOT-ADV-003`) — used in code comments and Animation Spec cross-references, never invented ad hoc.
- DOM hooks: `data-motion="<id-or-role>"` or scoped `data-*` attributes as shown in Animation Spec selectors (`[data-hero-headline]`, `[data-advantage-card="2"]`) — motion code targets these attributes, never raw class names or text content, so redesigns/copy changes never silently break animation targeting (supports the brief's requirement #16: content can change without breaking animation).
