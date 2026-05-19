# Motion Design + Interaction Design Skill for JSX Case Study Presentations

**Purpose:** Use this file as a Claude/Cursor/AI coding reference when building a React/JSX design case study presentation app. The app is slide/section-based, navigated with arrows, and should demonstrate polished motion, high craft, product taste, interaction design maturity, and accessibility awareness.

**Intended output:** A refined, cinematic, product-design presentation experience — not a gimmicky website. Motion should help the audience understand the story, feel continuity between sections, and notice the designer’s craft without becoming distracted.

---

## 1. North Star

Build a presentation that feels like a high-end product demo: calm, intentional, spatial, responsive, tactile, and editorial.

The best motion system should communicate:

1. **Narrative control** — the presenter is guiding the viewer through a clear arc.
2. **Spatial continuity** — slides feel connected, not like disconnected screens.
3. **Material quality** — surfaces, cards, UI mockups, diagrams, and metrics feel physical and crafted.
4. **Interaction intelligence** — every arrow press, hover, focus, and content reveal has a predictable response.
5. **Restraint** — the presentation feels elevated because the motion is selective, not because everything moves.

The design principle to keep repeating: **make it as simple as possible, then execute it to an unusually high bar.**

---

## 2. Motion Philosophy

### Motion is not decoration

Motion should answer at least one of these questions:

- Where did this thing come from?
- Where did it go?
- What changed?
- What should the viewer look at next?
- How are these two ideas connected?
- Did the system understand my interaction?
- Is this a new section, a supporting detail, or a conclusion?

### Use motion as storytelling grammar

Think of the deck like film editing:

- **Cut** = hard transition, useful for pivots or contrast.
- **Dissolve** = gentle conceptual shift.
- **Push / slide** = progression in a sequence.
- **Zoom / dolly** = going deeper into an idea.
- **Pull back** = summarizing or revealing system context.
- **Match cut / shared element** = preserving continuity between related ideas.
- **Staggered reveal** = directing attention line by line.
- **Parallax** = communicating depth, only when subtle.
- **Morph** = showing transformation, evolution, or cause/effect.

### The “uncommon care” bar

The presentation should include at least a few moments where the hiring team thinks:

> “Most candidates would not have taken the time to make this detail feel this good.”

Examples:

- A metric card smoothly expands into a full insight panel.
- A journey map node morphs into a detailed UI screen.
- A timeline marker becomes the active slide indicator.
- A prototype screenshot subtly tilts toward the cursor.
- A slide transition reuses the previous slide’s hero element rather than fading everything away.
- A diagram draws itself in the same order you explain it verbally.
- A “before” state collapses into a “problem” label, then expands into the “after” solution.

Use these sparingly. One or two exceptional moments are more memorable than constant fireworks.

---

## 3. Recommended Tech Stack

### Primary animation library: Motion for React

Use `motion` / `motion/react` as the default animation layer.

Use it for:

- Slide enter/exit transitions.
- Staggered text and content reveals.
- Layout animations.
- Shared element transitions with `layoutId`.
- Hover/tap/focus states.
- Reduced-motion branching with `useReducedMotion`.
- Variants and transition orchestration.

Install:

```bash
npm install motion
```

Import:

```jsx
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "motion/react";
```

### Secondary animation library: GSAP

Use GSAP only when Motion is not enough.

Use GSAP for:

- Complex timeline choreography.
- Scrubbed sequences.
- SVG path drawing with precise control.
- Multi-element FLIP transitions where DOM structure changes heavily.
- One-off “hero moments” that need exact sequencing.

Install:

```bash
npm install gsap
```

Use GSAP Flip when:

- A visual element moves between containers.
- A card becomes a full-screen panel.
- A slide thumbnail becomes the current slide.
- A diagram node becomes a detailed mockup.
- DOM hierarchy changes and Motion shared layout is not behaving well.

### Optional 3D layer: React Three Fiber

Use React Three Fiber only if the case study benefits from dimensionality.

Use it for:

- A subtle 3D product object.
- A dental scan / CAD-inspired model metaphor.
- Spatial background particles.
- A rotating system map.
- Depth transitions between problem, workflow, and outcome.

Do not use 3D just to show technical ability. Use it only if it supports the case study narrative.

Install:

```bash
npm install three @react-three/fiber @react-three/drei
```

### Optional interactive illustration layer: Rive

Use Rive for:

- State-machine-driven icons.
- Microinteractions.
- Interactive illustrations.
- A “living” product diagram.
- A visual metaphor that changes based on slide state.

Rive is better than Lottie when the animation needs to respond to user input.

### Optional vector animation layer: Lottie

Use Lottie for:

- Lightweight pre-rendered motion graphics.
- Small decorative loops.
- Icon transitions.
- Brand-like visual accents.

Avoid using large Lottie animations as slide backgrounds unless heavily optimized.

---

## 4. Core Presentation Architecture

### Slides should be data-driven

Create a `slides` array. Each slide should define its motion role.

```jsx
const slides = [
  {
    id: "intro",
    section: "Opening",
    transition: "hero",
    mood: "calm",
    eyebrow: "Dandy Design Case Study",
    title: "Designing clarity into complex dental workflows",
    subtitle: "A product design case study on reducing friction, increasing confidence, and helping teams move faster.",
  },
  {
    id: "problem",
    section: "Problem",
    transition: "push",
    mood: "tension",
    title: "The workflow was high-stakes, fragmented, and hard to trust.",
  },
  {
    id: "solution",
    section: "Solution",
    transition: "shared-element",
    mood: "confident",
    title: "I redesigned the experience around visibility, actionability, and confidence.",
  },
];
```

### App state model

Track:

- `activeSlideIndex`
- `direction` (`1` for next, `-1` for previous)
- `isAnimating`
- `hasInteracted`
- `reducedMotion`
- optional `activeFragmentIndex` for progressive reveals inside a slide

```jsx
const [activeIndex, setActiveIndex] = useState(0);
const [direction, setDirection] = useState(1);
const shouldReduceMotion = useReducedMotion();
```

### Navigation behavior

Keyboard support:

- ArrowRight / Space = next
- ArrowLeft = previous
- Home = first slide
- End = last slide
- Escape = exit focus-heavy overlays if present

Rules:

- Prevent double navigation during active transitions.
- Preserve focus.
- Give visible focus states.
- Keep slide position predictable.
- Never trap the user.

---

## 5. Motion System Tokens

Define motion tokens the same way you define color/type/spacing tokens.

```jsx
export const motionTokens = {
  duration: {
    instant: 0.08,
    micro: 0.16,
    short: 0.28,
    medium: 0.48,
    long: 0.72,
    cinematic: 1.1,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1],
    emphasized: [0.16, 1, 0.3, 1],
    entrance: [0.21, 1.02, 0.73, 1],
    exit: [0.4, 0, 1, 1],
    sharp: [0.2, 0, 0, 1],
  },
  spring: {
    gentle: { type: "spring", stiffness: 120, damping: 22, mass: 0.8 },
    snappy: { type: "spring", stiffness: 360, damping: 30, mass: 0.7 },
    expressive: { type: "spring", stiffness: 180, damping: 18, mass: 0.9 },
    heavy: { type: "spring", stiffness: 90, damping: 20, mass: 1.2 },
  },
  stagger: {
    tight: 0.035,
    standard: 0.06,
    spacious: 0.1,
  },
  distance: {
    subtle: 12,
    standard: 28,
    expressive: 64,
    slide: 120,
  },
};
```

### Timing guidance

Use this as a baseline:

| Use case | Duration |
|---|---:|
| Button hover/tap | 120–180ms |
| Tooltip/popover | 160–240ms |
| Text reveal | 240–400ms |
| Card reveal | 320–520ms |
| Slide transition | 500–850ms |
| Cinematic hero transition | 900–1200ms |
| Background ambient motion | 8–30s loop |

---

## 6. Slide Transition Patterns

Use a small set of high-quality transitions. Do not create a new transition for every slide.

Recommended system:

1. **Opening / Hero transition**
2. **Directional push transition**
3. **Shared element transition**
4. **Depth / zoom transition**
5. **Stack / card transition**
6. **Final resolve transition**

---

### Pattern 1: Directional Push

Best for linear narrative progression.

Use when:

- Moving from problem → insight → solution.
- Advancing through process.
- Showing cause and effect.

```jsx
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.985,
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.985,
  }),
};

function SlideFrame({ activeSlide, direction }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.section
        key={activeSlide.id}
        custom={direction}
        variants={slideVariants}
        initial={shouldReduceMotion ? { opacity: 0 } : "enter"}
        animate={shouldReduceMotion ? { opacity: 1 } : "center"}
        exit={shouldReduceMotion ? { opacity: 0 } : "exit"}
        transition={{
          duration: shouldReduceMotion ? 0.18 : 0.62,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        {/* slide content */}
      </motion.section>
    </AnimatePresence>
  );
}
```

Taste note: Keep x-distance subtle. A presentation should not feel like a carousel ad.

---

### Pattern 2: Shared Element / Match Cut

Best for demonstrating design thinking.

Use when:

- A small artifact on one slide becomes the focus of the next.
- A metric card expands into a results slide.
- A journey node opens into a UI screen.
- A quote becomes a principle.
- A problem label transforms into a solution framework.

```jsx
<LayoutGroup>
  {activeSlide.id === "problem" && (
    <motion.div layoutId="workflow-card" className="card compact">
      Fragmented workflow
    </motion.div>
  )}

  {activeSlide.id === "workflow" && (
    <motion.div layoutId="workflow-card" className="card expanded">
      <WorkflowDiagram />
    </motion.div>
  )}
</LayoutGroup>
```

Rules:

- Shared elements should keep the same visual identity.
- Do not overuse it.
- The element should be meaningful, not arbitrary.
- Keep the transformation readable.
- Pair with content fade/stagger so the shared object leads the transition.

---

### Pattern 3: Depth / Zoom

Best for “going deeper.”

Use when:

- Moving from overview to detail.
- Entering a specific product flow.
- Zooming into a prototype.
- Showing “what is happening under the hood.”

```jsx
const depthVariants = {
  enter: {
    opacity: 0,
    scale: 1.04,
    y: 16,
    filter: "blur(10px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -12,
    filter: "blur(10px)",
  },
};
```

Taste note: Avoid aggressive zoom. A 4–8% scale change is enough.

---

### Pattern 4: Stack / Card Deck

Best for process, iteration, concept testing, or alternatives.

Use when:

- Showing design explorations.
- Comparing concepts.
- Walking through research findings.
- Revealing constraints.
- Presenting before/after states.

Interaction idea:

- Cards sit in a layered stack.
- Arrow press brings the next card forward.
- Previous card moves back with a slight rotation.
- Active card has a sharper shadow and clearer contrast.

```jsx
function CardStack({ cards, activeCardIndex }) {
  return (
    <div className="relative h-[520px] w-full">
      {cards.map((card, index) => {
        const offset = index - activeCardIndex;
        return (
          <motion.div
            key={card.id}
            animate={{
              x: offset * 28,
              y: Math.abs(offset) * 14,
              scale: index === activeCardIndex ? 1 : 0.94,
              rotate: offset * -2,
              opacity: Math.abs(offset) > 2 ? 0 : 1,
              zIndex: cards.length - Math.abs(offset),
            }}
            transition={motionTokens.spring.gentle}
            className="absolute inset-0 rounded-3xl border bg-white shadow-xl"
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
}
```

Taste note: Rotation should be 1–3 degrees, not scrapbook-like unless the brand calls for it.

---

### Pattern 5: Curtain / Mask Reveal

Best for dramatic before/after or strategic pivots.

Use when:

- Revealing the redesigned solution.
- Showing “from complexity to clarity.”
- Transitioning from research chaos to distilled framework.
- Uncovering a final design screen.

```jsx
<motion.div
  initial={{ clipPath: "inset(0 100% 0 0 round 24px)" }}
  animate={{ clipPath: "inset(0 0% 0 0 round 24px)" }}
  exit={{ clipPath: "inset(0 0 0 100% round 24px)" }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  <FinalDesignMockup />
</motion.div>
```

Taste note: Mask reveals are powerful. Use only at key story turns.

---

### Pattern 6: Final Resolve

Best for outcomes, learnings, or closing.

Use when:

- Showing impact.
- Ending the case study.
- Returning to the thesis statement.
- Summarizing designer strengths.

Motion direction:

- Slow down.
- Reduce movement.
- Use opacity and gentle upward motion.
- Let the last slide breathe.

```jsx
const resolveVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
```

---

## 7. Component Entrance Patterns

Each slide should have internal choreography. Use content reveal order to reinforce hierarchy.

### Standard slide reveal order

1. Background / section marker
2. Eyebrow / section label
3. Title
4. Main visual
5. Supporting copy
6. Metrics / proof
7. Navigation hint or speaker note affordance

### Staggered reveal variant

```jsx
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SlideContent({ children }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
```

### Text reveal

Use word or line reveals only for major titles. Do not animate every paragraph word by word.

```jsx
function WordReveal({ text }) {
  const words = text.split(" ");

  return (
    <motion.h1
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.035 },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
```

Taste note: For interview presentations, line-by-line is often more mature than word-by-word.

---

## 8. High-Craft Interaction Patterns

### 8.1 Magnetic navigation controls

Navigation arrows should feel tactile but not playful to the point of distraction.

```jsx
<motion.button
  whileHover={{ scale: 1.04, x: 2 }}
  whileTap={{ scale: 0.96 }}
  transition={motionTokens.spring.snappy}
  className="rounded-full border bg-white/70 backdrop-blur px-4 py-3 shadow-sm"
>
  →
</motion.button>
```

Enhancement:

- Add a progress ring around the arrow.
- Slightly magnetize toward cursor.
- Show next slide title on hover.
- Support focus-visible.

### 8.2 Slide progress rail

A progress rail can double as navigation and story structure.

Ideas:

- Horizontal rail at bottom.
- Active marker morphs between section dots.
- Section labels appear on hover.
- Current section has a liquid-pill background using `layoutId`.

```jsx
<LayoutGroup>
  {slides.map((slide, index) => (
    <button key={slide.id} onClick={() => goTo(index)}>
      {index === activeIndex && (
        <motion.div layoutId="active-progress-pill" className="active-pill" />
      )}
      <span>{slide.section}</span>
    </button>
  ))}
</LayoutGroup>
```

### 8.3 Cursor-responsive hero cards

Use subtle 3D tilt on product mockups.

Rules:

- Max rotateX/rotateY: 4–8 degrees.
- Add shine only if tasteful.
- Disable on reduced motion.
- Keep shadows soft.
- Avoid making text tilt too much.

```jsx
function TiltCard({ children }) {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  function onMouseMove(event) {
    if (shouldReduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setRotate({
      x: (0.5 - py) * 8,
      y: (px - 0.5) * 8,
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={motionTokens.spring.gentle}
      style={{ transformStyle: "preserve-3d" }}
      className="rounded-3xl"
    >
      {children}
    </motion.div>
  );
}
```

### 8.4 Interactive “before → after” scrubber

Use when showing product improvement.

```jsx
function BeforeAfter({ before, after }) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <img src={after} className="block w-full" alt="After design" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <img src={before} className="block h-full max-w-none" alt="Before design" />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute bottom-4 left-4 right-4"
        aria-label="Compare before and after design"
      />
    </div>
  );
}
```

Enhance with:

- Soft haptic-like snap at 50%.
- Label pills that fade in/out.
- Cursor-following divider.
- Keyboard accessible range input.

### 8.5 Diagram path drawing

Use for journeys, process maps, system flows, and architecture.

```jsx
<motion.path
  d="M10 80 C 80 10, 180 10, 250 80"
  fill="transparent"
  stroke="currentColor"
  strokeWidth="2"
  initial={{ pathLength: 0, opacity: 0 }}
  animate={{ pathLength: 1, opacity: 1 }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
/>
```

Rules:

- Draw paths in the same order you explain the flow.
- Use subtle delays between nodes.
- Node reveals should follow line drawing.
- Keep labels readable before and after animation.

### 8.6 Morphing controls

A control can become the next needed control instead of adding more UI.

Example:

- “Next” button morphs into “Done”
- “View research” morphs into “Close”
- “1 insight” chip morphs into expanded insight card

```jsx
<LayoutGroup>
  <motion.button layout className="control">
    {mode === "idle" ? "View research" : "Done"}
  </motion.button>
</LayoutGroup>
```

Design principle:

- Reuse existing spatial affordances.
- Reduce UI noise.
- Make state changes feel inevitable.
- Morph only between semantically related controls.

---

## 9. Signature “Set Me Apart” Moments

Pick 2–4 from this list. Do not use all of them.

### Moment A: The Case Study Opens Like a Product

Opening slide:

- Soft ambient gradient.
- Title enters line-by-line.
- A small product mockup floats in with depth.
- A timeline/progress rail quietly resolves at bottom.
- Arrow hint pulses once, then stops.

Claude prompt:

```text
Create an opening slide that feels like a premium product keynote. Use a restrained ambient gradient, subtle parallax background, and a line-by-line title reveal. The arrow navigation should appear only after the title settles. Keep the motion calm, confident, and high-craft. Respect prefers-reduced-motion.
```

### Moment B: Research Chaos Collapses Into Insight

Use for problem framing.

Interaction:

- Several messy pain point cards float in.
- On arrow press, they collapse into 3 clean insight pillars.
- The movement tells the story of synthesis.

Implementation:

- Use `layoutId` for each pain point group.
- Use opacity/stagger for supporting quotes.
- Use a slight blur during collapse.

Claude prompt:

```text
Build a slide transition where scattered research cards synthesize into three clean insight pillars. The cards should move with shared-layout continuity, not disappear and reappear. The motion should feel like sensemaking: messy inputs becoming a clear framework.
```

### Moment C: Journey Map Node Becomes UI Screen

Use for process or solution walkthrough.

Interaction:

- Slide shows a journey map.
- Active node expands into a detailed UI mockup on next slide.
- Other nodes recede into the background.

Implementation:

- `layoutId="active-journey-node"`
- Background nodes animate opacity to 0.18 and scale to 0.96.
- Detail panel enters with a delayed stagger.

Claude prompt:

```text
Create a shared element transition where a journey map node expands into a full UI mockup. Preserve continuity by using the same shape, label, and accent color. Fade the rest of the journey map into the background so the audience understands we are zooming into one part of the system.
```

### Moment D: Before/After With Scrubbable Clarity

Use for design iteration.

Interaction:

- Scrubber compares old and new.
- Supporting annotations appear based on scrubber position.
- Final state snaps to after.

Claude prompt:

```text
Create a before/after comparison component with a keyboard-accessible range input. The divider should feel tactile and polished. Add contextual annotation pills that appear when the scrubber crosses relevant thresholds. Keep it elegant, not flashy.
```

### Moment E: Metrics Count Up Only When Relevant

Use for impact.

Rules:

- Count only 2–4 metrics.
- Count fast but readable.
- Do not count every number in the deck.
- Add a small “why it matters” line below each metric.

Claude prompt:

```text
Create impact metric cards that count up when the slide enters. Use subtle spring entrance, no excessive bounce. Each metric should include a short human-readable meaning, not just a number. Respect reduced motion by showing final values immediately.
```

### Moment F: Final Slide Resolves Into Personal Pitch

Use for closing.

Interaction:

- Earlier themes reappear as small artifacts.
- They align into a final statement.
- Motion slows down.

Claude prompt:

```text
Create a final slide that resolves the case study into a personal design philosophy. Bring back subtle visual artifacts from earlier slides and align them into a calm final composition. The motion should feel resolved, reflective, and confident.
```

---

## 10. Visual Effects That Can Be Tasteful

Use with restraint.

### Soft blur on entrance/exit

Good:

```jsx
initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
```

Avoid:

- 30px blur everywhere.
- Blur on small text for too long.
- Blur on elements users need to read immediately.

### Backdrop blur panels

Good for:

- Navigation controls.
- Speaker notes.
- Floating slide controls.
- Section labels.

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.48);
}
```

### Subtle grain

Use to avoid sterile AI-generated gradients.

```css
.noise::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.05;
  background-image: url("/noise.png");
  mix-blend-mode: multiply;
}
```

### Light sweep

Use only on hero mockups or cards.

```jsx
<motion.div
  className="absolute inset-0 pointer-events-none"
  initial={{ x: "-120%", opacity: 0 }}
  animate={{ x: "120%", opacity: 0.18 }}
  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
  style={{
    background:
      "linear-gradient(100deg, transparent 20%, rgba(255,255,255,.8) 50%, transparent 80%)",
  }}
/>
```

### Ambient gradient

Use slow movement only.

```css
.ambient-gradient {
  background:
    radial-gradient(circle at 20% 20%, rgba(180, 150, 255, 0.28), transparent 35%),
    radial-gradient(circle at 80% 60%, rgba(80, 180, 255, 0.2), transparent 40%);
  animation: ambientShift 18s ease-in-out infinite alternate;
}

@keyframes ambientShift {
  from { background-position: 0% 0%, 100% 100%; }
  to { background-position: 10% 8%, 90% 92%; }
}

@media (prefers-reduced-motion: reduce) {
  .ambient-gradient {
    animation: none;
  }
}
```

---

## 11. Accessibility Requirements

### Always support reduced motion

Use both CSS and JS.

CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

React:

```jsx
const shouldReduceMotion = useReducedMotion();

const transition = shouldReduceMotion
  ? { duration: 0.01 }
  : { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
```

Reduced motion should not mean “no design.” Replace spatial motion with:

- opacity fades
- instant state changes
- subtle color changes
- clear focus movement
- static progress indicators

### Avoid vestibular triggers

Avoid or reduce:

- large parallax
- fast zooms
- full-screen rotations
- oscillating scaling
- excessive perspective shifts
- scroll-jacking
- constant background motion
- rapid flashes

### Keyboard navigation

- All arrows/buttons must be keyboard focusable.
- Use `aria-label`.
- Use `focus-visible` rings.
- Do not remove outlines without replacing them.
- Make slide navigation work without a mouse.
- Ensure interactive demos do not trap focus.

### Timing accessibility

- Do not auto-advance slides.
- Do not hide critical content too quickly.
- Avoid animations that block reading.
- Keep all content available after motion completes.

---

## 12. Performance Rules

### Animate only transform and opacity whenever possible

Prefer:

- `transform`
- `opacity`
- `filter` sparingly
- `clip-path` sparingly
- SVG `pathLength` for line drawing

Avoid animating:

- `top`
- `left`
- `width`
- `height`
- `margin`
- `padding`
- large `box-shadow`
- heavy backdrop filters on many elements

### Keep 60fps in mind

- Use GPU-friendly transforms.
- Avoid too many simultaneous blurred elements.
- Keep 3D canvases lightweight.
- Lazy-load heavy slide visuals.
- Use `will-change` only for elements actively animating.
- Remove `will-change` after animation if possible.

### Image and asset guidance

- Use optimized images.
- Use AVIF/WebP where possible.
- Preload the next slide’s hero image.
- Avoid embedding giant videos unless necessary.
- Use poster frames for video.
- Avoid full-screen Lottie files with thousands of paths.

### Performance checklist

Before presenting:

- Test on the actual machine you will present from.
- Test plugged in and unplugged.
- Test in the browser you will use.
- Test with reduced motion enabled.
- Test keyboard-only.
- Test at 100%, 125%, and 150% zoom.
- Check CPU usage during heavy slides.
- Record one run-through and watch for distracting motion.

---

## 13. Slide Types and Recommended Motion

### Title slide

Motion:

- line-by-line title reveal
- subtle hero mockup entrance
- ambient background
- one-time arrow hint

Avoid:

- excessive looping
- spinning objects
- too many particles

### Context slide

Motion:

- calm fade/slide
- supporting artifacts appear around thesis
- low motion density

### Problem slide

Motion:

- slight tension
- cards may feel fragmented
- use stagger to show complexity
- avoid chaotic motion that harms readability

### Research slide

Motion:

- quotes reveal one at a time
- research cards can cluster/synthesize
- highlight key phrase with underline draw

### Process slide

Motion:

- timeline/path drawing
- active stage marker
- prior stages become subdued
- next stage enters with direction

### Iteration slide

Motion:

- stack/card deck
- before/after scrubber
- shared element from concept to final direction

### Solution slide

Motion:

- confident reveal
- mockup enters first
- annotations appear after mockup settles
- microinteractions in the mockup can play once

### Results slide

Motion:

- metrics count up
- supporting explanation fades in
- no gimmicky celebration unless impact is huge

### Learnings slide

Motion:

- slower pacing
- simple fade/stagger
- artifacts settle into a tidy layout

### Closing slide

Motion:

- calm resolve
- fewer elements
- final statement appears last
- progress indicator completes

---

## 14. Claude Implementation Rules

When Claude builds or edits the app, instruct it to follow these rules:

1. Use `motion/react` for standard slide transitions and component reveals.
2. Use `AnimatePresence mode="wait"` for slide enter/exit sequencing.
3. Use `layoutId` for meaningful shared element transitions.
4. Keep motion tokens centralized.
5. Use reduced-motion branches for all major movement.
6. Do not animate everything.
7. Use 2–4 signature moments only.
8. Prefer transform/opacity.
9. Keep durations consistent.
10. Ensure keyboard navigation works.
11. Ensure focus states are visible.
12. Avoid scroll-jacking.
13. Keep visual hierarchy readable before, during, and after animation.
14. Add comments for complex motion logic.
15. Do not use random animation values across components; use tokens.
16. Make every transition explainable in product design terms.
17. If a motion idea does not support comprehension, remove it.
18. Optimize for presentation reliability over technical novelty.

---

## 15. Claude Prompt Library

### Prompt: Build the core slide shell

```text
Build a React/JSX presentation shell with data-driven slides, arrow-key navigation, previous/next buttons, a progress rail, and high-craft slide transitions using motion/react. Use AnimatePresence mode="wait", track direction, and support reduced motion with useReducedMotion. Keep motion tokens centralized in a motionTokens object. The design should feel like a premium product case study presentation, not a generic carousel.
```

### Prompt: Add refined slide choreography

```text
For each slide, add internal choreography: eyebrow, title, hero visual, supporting copy, and metrics should enter in a clear hierarchy with subtle stagger. Use blur + y + opacity for entrances, but keep text readable quickly. Do not animate every word unless it is a hero title. Respect reduced motion by using opacity-only transitions.
```

### Prompt: Improve taste and restraint

```text
Review the motion system like a Staff Product Designer. Remove any animation that feels decorative, repetitive, too bouncy, or distracting. Keep only motion that supports narrative continuity, attention direction, state change, or interaction feedback. Make the presentation feel more editorial, premium, and calm.
```

### Prompt: Add shared element transitions

```text
Identify 2–3 meaningful shared element transitions in the deck. Use layoutId to connect related objects across slides, such as a metric card expanding into an impact slide, a journey node becoming a UI mockup, or a research quote becoming an insight pillar. Keep the transition smooth, readable, and semantically meaningful.
```

### Prompt: Add interaction polish

```text
Add subtle interaction polish to navigation controls, cards, and mockups. Use whileHover and whileTap for tactile feedback, focus-visible styles for accessibility, and reduced-motion fallbacks. Keep hover movement under 4px or scale under 1.04 unless there is a strong reason.
```

### Prompt: Add a before/after component

```text
Create a keyboard-accessible before/after comparison component with a range input. The divider should be polished and tactile. Add annotation pills that appear at relevant thresholds. The component should work with mouse, touch, and keyboard. Respect reduced motion.
```

### Prompt: Add a journey map transition

```text
Create a journey map slide where nodes and paths draw in sequentially. On the next slide, the active journey node should expand into a detailed UI mockup using layoutId. Other nodes should recede with opacity and slight scale. The motion should communicate zooming into a specific part of the workflow.
```

### Prompt: Add accessibility pass

```text
Audit the presentation for accessibility. Add reduced-motion support, keyboard navigation, aria-labels, focus-visible rings, and ensure no animation is required to understand content. Replace large spatial motion with opacity changes when prefers-reduced-motion is enabled.
```

### Prompt: Add performance pass

```text
Audit the presentation for animation performance. Prefer transform and opacity. Reduce heavy filter/backdrop-filter usage. Avoid animating layout properties. Lazy-load heavy visuals. Ensure the app runs smoothly during slide transitions and does not drop frames on a typical laptop.
```

---

## 16. Motion QA Checklist

Use this before calling the presentation done.

### Narrative

- [ ] Does every transition support the story?
- [ ] Does the motion help the audience understand what changed?
- [ ] Is the reveal order aligned to how the presenter will speak?
- [ ] Are the most important points given enough breathing room?

### Taste

- [ ] Is there enough restraint?
- [ ] Are there 2–4 memorable signature moments?
- [ ] Are any animations too bouncy, flashy, or template-like?
- [ ] Does the deck feel intentionally designed rather than AI-generated?
- [ ] Would the motion still feel professional in a senior/staff-level interview?

### Interaction

- [ ] Are arrows responsive?
- [ ] Is keyboard navigation smooth?
- [ ] Is focus visible?
- [ ] Are hover states subtle?
- [ ] Is the progress rail clear?
- [ ] Is there no accidental double navigation?

### Accessibility

- [ ] Does `prefers-reduced-motion` work?
- [ ] Can users disable non-essential motion?
- [ ] Are large zooms/parallax/rotations avoided or reduced?
- [ ] Are interactive controls keyboard accessible?
- [ ] Is content readable without animation?

### Performance

- [ ] Are transform and opacity used for most animations?
- [ ] Are heavy assets optimized?
- [ ] Are 3D scenes lightweight?
- [ ] Are background effects subtle?
- [ ] Does the deck run smoothly on the presentation laptop?

---

## 17. Suggested Motion Direction for a Dandy / Dental-Tech Case Study

Because this case study is for Dandy, the motion language should feel:

- precise
- clinical but warm
- technically advanced
- workflow-oriented
- confidence-building
- calm under complexity
- premium but not flashy

Use metaphors from the product space:

- scans becoming structured data
- messy cases becoming clear workflows
- dots/paths showing case progression
- lab/practice collaboration represented as connected nodes
- order status moving through a clean fabrication pipeline
- AI review represented as a quiet layer of intelligence, not a sci-fi robot
- “chairside confidence” represented by immediate feedback and reduced uncertainty

Avoid:

- cheesy dental icons flying around
- over-medical blue gradients everywhere
- sci-fi AI clichés
- excessive tooth animations
- childish bounce
- gratuitous 3D

Better:

- precise line drawing
- CAD-like grid overlays
- subtle 3D model rotation
- clean step transitions
- glassy diagnostic panels
- elegant annotations
- calm confidence

---

## 18. Example Slide Motion Concepts for Dandy

### Slide: “The problem”

Motion:

- Fragmented cards enter from different directions.
- Each card represents a workflow pain: unclear scan quality, delayed lab feedback, manual follow-up, patient callbacks.
- Cards settle slightly misaligned to represent fragmentation.

Then:

- On next slide, cards align into a clean framework: Visibility, Confidence, Speed.

### Slide: “The insight”

Motion:

- A quote appears.
- Key phrase is highlighted with an animated underline.
- The quote collapses into an insight card.

### Slide: “The workflow”

Motion:

- A horizontal path draws from scan → review → order → design preview → fabrication → delivery.
- Each node appears as the path reaches it.
- The active node expands on click/arrow.

### Slide: “The solution”

Motion:

- UI mockup appears through a mask reveal.
- Annotations appear after 300ms.
- The active annotation gently pulses once.
- Do not loop pulse forever.

### Slide: “Impact”

Motion:

- Metrics count up.
- Cards rise in with stagger.
- A final statement fades in after metrics complete.

---

## 19. Advanced Patterns Worth Considering

### Parametric generative visuals

Use code-generated visuals for brand depth:

- wave fields
- dotted grids
- contour lines
- scan-like meshes
- subtle CAD construction lines
- radial confidence indicators

Prompt:

```text
Create a subtle parametric background inspired by CAD scan precision: a dotted grid with wave-like depth, very low contrast, slow ambient movement, and reduced-motion support. It should feel premium and technical, not decorative or distracting.
```

### Fidgetable controls

For interactive components, make controls feel tactile.

Examples:

- draggable before/after divider
- timeline scrubber
- slide progress rail
- small hover reveals
- card stack exploration

Rule:

- Fidgetability should reward curiosity without blocking the main story.

### Magic slider concept

A single slider can control multiple properties:

- progress through a workflow
- opacity of annotations
- active state of a diagram
- depth/scale of mockup
- color intensity of a visual layer

Prompt:

```text
Create a single elegant slider that controls multiple visual properties at once: active workflow stage, annotation opacity, and mockup depth. Keep the implementation readable and accessible. The control should feel magical but still understandable.
```

### Cinematic camera move with R3F

Use only if relevant.

Example:

- Camera starts above a 3D case/workflow map.
- It gently pushes into one product area.
- UI overlay fades in as camera settles.

Prompt:

```text
Create a lightweight React Three Fiber scene that acts as a subtle hero visual for a dental workflow case study. Use a minimal 3D path/map metaphor, not a literal tooth unless needed. Add a gentle camera push-in on slide enter and freeze after it settles. Respect reduced motion by rendering a static scene.
```

---

## 20. Common Mistakes to Avoid

1. **Animating every element**  
   Makes the deck feel generated and immature.

2. **Using too much bounce**  
   Bouncy motion can feel consumer-app playful, not senior-product-design polished.

3. **No reduced-motion support**  
   This undercuts accessibility credibility.

4. **Slide transitions that fight the content**  
   The viewer should never wait for motion to finish to understand the point.

5. **Overusing blur**  
   Blur can feel premium, but too much makes text hard to read.

6. **Too many libraries**  
   Do not combine Motion, GSAP, R3F, Rive, and Lottie unless each has a job.

7. **Random durations/easing**  
   Inconsistent motion feels unprofessional.

8. **No keyboard support**  
   A presentation app must be reliable.

9. **Overly literal metaphors**  
   Dental case study does not need teeth flying around.

10. **AI-generated visual sameness**  
   Add taste through spacing, restraint, hierarchy, and carefully chosen signature moments.

---

## 21. Recommended Build Order

1. Build static slide content first.
2. Add keyboard and button navigation.
3. Add basic slide transition.
4. Add internal stagger reveals.
5. Add progress rail.
6. Add reduced-motion support.
7. Add 2–4 signature moments.
8. Add hover/focus/tap polish.
9. Run accessibility pass.
10. Run performance pass.
11. Remove unnecessary motion.
12. Practice presenting with the actual pacing.

---

## 22. Final Direction

The winning presentation should feel like this:

- calm enough to be taken seriously
- crafted enough to be memorable
- interactive enough to prove product thinking
- accessible enough to show maturity
- technically polished enough to show AI-native design fluency
- restrained enough to show taste

When in doubt, ask:

> Does this motion help the audience understand the story better?

If yes, refine it.

If no, remove it.

---

## 23. Research Basis / Inspiration Notes

This skill file is informed by current motion and interaction design practices across:

- Motion for React / Framer Motion-style layout, shared element, gesture, and exit animations.
- GSAP FLIP transitions for complex DOM state changes.
- Native View Transitions API principles for preserving context between views.
- React Three Fiber and Theatre.js approaches for cinematic 3D and timeline-based animation.
- Rive state-machine thinking for interactive motion graphics.
- WCAG and `prefers-reduced-motion` guidance for accessible animation.
- Contemporary AI-native designer workflows: using code prototypes, motion tokens, and implementation-level craft rather than relying only on static design files.
- Interface craft principles: fidgetability, uncommon care, restraint, conceptual range/depth, and high-quality execution of a small number of memorable moments.
