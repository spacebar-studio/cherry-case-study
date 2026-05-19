# Claude Code Instructions — Rework Journeys Case Study for Cherry

## Purpose
Rework the existing 35-slide Firstup Journeys case study presentation app into a **10-slide, 10-minute Cherry interview project** focused on **business impact**.

Cherry’s prompt for this project is:

> “1 project focused on business impact, where design or user insight shaped a real business decision or outcome.”

The new deck should make one clear argument:

> I helped reframe Firstup Journeys from a surface-level clarity problem into an activation-burden problem. That user insight changed the product direction from “clean up the existing flow” to “create a more guided, lower-effort setup experience,” which improved efficiency, reduced setup time, and created a stronger path to activation, adoption, and later Journeys AI.

---

# Important Context for Claude Code

You will **not** have access to any PDFs. You should work directly from the existing presentation app and its current 35 slides.

When this file references an “original slide,” it means the slide already present in the app. Use the existing slide/component implementation and visual assets already available in the app.

Do **not** look for PDFs. Do **not** create references to PDFs. Do **not** leave comments like “pull from PDF.” Instead, reuse or adapt visuals from the existing app slides listed below.

---

# Non-Negotiable Preservation Rules

## Keep the existing presentation system
Do **not** redesign the presentation app from scratch.

Preserve the current deck’s:
- layout system
- components / reusable card styles
- theme and color palette
- typography choices
- spacing rhythm
- pale gradient / soft background treatment
- browser-window presentation frame, if currently used
- progress / navigation UI, if currently used
- slide transitions
- element entrance animations
- keyboard / arrow navigation behavior
- interaction design patterns
- overall calm, minimal, airy visual style

## Only change what is necessary
Update the deck by changing:
- slide count
- slide titles
- on-slide copy
- slide-level content structure
- visual assets/screenshots used on each slide
- Dandy-specific language so it becomes Cherry-specific

Do **not** change:
- animation system
- transition system
- routing
- navigation logic
- core presentation wrapper
- visual identity
- spacing / typography / color system

## Keep copy short
The script does the heavy lifting. On-slide copy should stay sparse.

Target on-slide copy limits:
- titles: 2–6 words
- headlines: 4–10 words
- card titles: 1–4 words
- card descriptions: 1 short sentence max
- no dense paragraphs
- no long bullet lists
- no more than 3–4 cards on most slides

Tone:
- calm
- sharp
- business-aware
- systems-minded
- evidence-based
- strategic, not overly theoretical
- focused on user confidence + business impact

---

# Existing App Slide Reference Map

Use the visuals, layouts, components, and assets from these original slides already in the app.

## Slides to remove or exclude from the new Cherry version
- **Original slide 1:** title slide
- **Original slide 2:** agenda
- **Original slide 3:** about me section divider
- **Original slide 4:** my trifecta
- **Original slide 5:** my interests
- **Original slide 6:** my principles
- **Original slide 7:** my process
- **Original slide 8:** cross-functional collaboration
- **Original slide 9:** “the work” section divider
- **Original slide 19:** “develop” section divider
- **Original slide 29:** “reflection” section divider
- **Original slide 32:** “the final pitch” section divider
- **Original slide 35:** thank you, unless the app requires a terminal slide

## Original slides to reuse or adapt
- **Original slide 10 — case study overview:** left-side overview cards + right-side product visuals / flow fragments.
- **Original slide 11 — how the project started:** centered stacked cards describing hypothesis, opportunity, and “why this mattered.”
- **Original slide 12 — defining the real problem:** three-card horizontal reframing flow with a bottom HMW line.
- **Original slide 13 — discovery work and confidence building:** three top cards with discovery artifacts / whiteboard-style visuals beneath.
- **Original slide 14 — user journey:** horizontal journey line with cards and numbered touchpoints.
- **Original slide 15 — initial measures of success:** three success-measure cards plus small bottom notes.
- **Original slide 16 — design strategy:** three centered strategy cards.
- **Original slide 17 — strategic levers explored:** three cards and a long screenshot / flow strip near the bottom.
- **Original slide 18 — project-specific principles:** three stacked principle cards.
- **Original slide 20 — direction 1:** Direction 1 concept card with three screenshots underneath.
- **Original slide 21 — direction 2:** Direction 2 concept card with four larger workflow screenshots underneath.
- **Original slide 22 — strategy comparison:** two comparison cards, a three-metric row, and a bottom decision/summary note.
- **Original slide 23 — key design decisions:** four-card grid of specific design decisions.
- **Original slide 24 — tradeoffs and decision-making:** scattered tradeoff cards across the canvas.
- **Original slide 25 — refinement, handoff, and developer collaboration:** three stacked rows/cards with numbered blocks.
- **Original slide 26 — change management:** collage of annotated product screens and cross-functional enablement artifacts.
- **Original slide 27 — final design:** three large final product screenshots: Builder, Management/Configuration, and Reporting.
- **Original slide 28 — post-release follow-up and measurement:** stacked list/card layout for post-release learning.
- **Original slide 30 — impact, success reflection, and what happened next:** metric-card row with 40%, 20%, and 50%, plus reflection cards underneath.
- **Original slide 31 — challenges, learnings, and future approach:** card grid covering hypothesis, myth, measurement, what we’d do, and final lesson.
- **Original slide 33 — what sets me apart:** centered heading with three stacked cards.
- **Original slide 34 — why this matters:** two-column / split layout with small cards around a center divider.

---

# Current Deck to New Deck Mapping

| New slide | New purpose | Use visuals/layout from existing app slides |
|---|---|---|
| 1 | Case study overview + thesis | Original slide 10 |
| 2 | Business problem | Original slide 11 |
| 3 | User insight / reframing | Original slide 12 |
| 4 | Validation and journey evidence | Original slides 13–14 |
| 5 | Success definition | Original slide 15 |
| 6 | Strategic levers | Original slides 16–18, especially 17 |
| 7 | Product decision / comparison | Original slides 20–24, especially 22 |
| 8 | From decision to shipped system | Original slides 23, 25, 26, 27; use 27 as hero |
| 9 | Impact, learning, and what changed next | Original slides 28, 30, 31; use 30 as hero |
| 10 | Why this maps to Cherry | Original slides 33–34 as layout/tone references only |

---

# 10-Slide Content Specification

## Slide 1 — Case Study Overview

### Slide title
`firstup journeys`

### Headline
`turning setup friction into activation`

### Layout
Reuse the layout from **original slide 10**:
- left-side overview cards
- right-side product visuals / screenshots
- subtle bottom summary card or strip if the existing slide has one

### On-slide cards
**context**  
Enterprise teams used Journeys to build and manage multi-step employee communication experiences.

**problem**  
Users stalled during setup, slowing activation and adoption.

**role**  
Owned framing, workflow direction, prototyping, refinement, and launch support.

**business focus**  
Reduce setup friction so users could reach value faster.

### Visual instructions
Use the same product visual cluster from **original slide 10**. It includes product screenshots and flow fragments on the right. Replace only the text content; preserve the composition and animation behavior.

---

## Slide 2 — Business Problem

### Slide title
`the business problem`

### Headline
`setup friction was slowing activation`

### Layout
Reuse the centered stacked-card structure from **original slide 11**.

### On-slide cards
**users were dropping off**  
Configuration created too much friction before launch.

**value was delayed**  
If users could not launch, they could not realize product value.

**adoption was at risk**  
Setup became a business problem, not just a usability issue.

### Bottom note
`design question: how do we help users get to value faster?`

### Visual instructions
Use the same visual treatment as **original slide 11**: centered heading, three stacked insight cards, small numbered/icon markers, and generous whitespace.

---

## Slide 3 — User Insight / Reframing

### Slide title
`the reframing`

### Headline
`from clarity issue → activation burden`

### Layout
Reuse the three-card horizontal transformation layout from **original slide 12**.

### On-slide cards
**surface problem**  
The flow was hard to understand.

**deeper insight**  
The workflow asked users to do too much too early.

**strategic shift**  
Reduce effort before launch, not just improve readability.

### Bottom HMW
`how might we help teams move through setup with less friction, less ambiguity, and more confidence?`

### Visual instructions
Use the same composition as **original slide 12**: three cards, subtle arrow/transformation logic, and a bottom HMW callout. This slide should feel like the core “user insight changed the direction” moment.

---

## Slide 4 — Validation and Journey Evidence

### Slide title
`validating the pattern`

### Headline
`complexity showed up before momentum`

### Layout
Combine the evidence style from **original slide 13** with the journey-line motif from **original slide 14**.

### On-slide cards
**customer signal**  
Where were teams asking for help or creating workarounds?

**workflow behavior**  
Where did users stall, slow down, or abandon setup?

**journey evidence**  
Where was the system asking for commitment too early?

### Bottom note
`pattern: confidence was dropping before launch.`

### Visual instructions
Use these existing visuals from the app:
- From **original slide 13**, reuse the discovery-artifact feel: small whiteboard / spreadsheet / affinity-map artifacts beneath the cards.
- From **original slide 14**, reuse the horizontal journey-line concept as a subtle lower visual anchor.

Recommended treatment:
- Keep the three validation cards as the primary content.
- Place cropped/faded discovery artifacts beneath them.
- Add or adapt a subtle journey line near the bottom to show this evidence came from the end-to-end workflow.
- Do not overcrowd the slide.

---

## Slide 5 — Success Definition

### Slide title
`what success meant`

### Headline
`measure activation, not just comprehension`

### Layout
Reuse the three-card success-measure layout from **original slide 15**.

### On-slide cards
**task efficiency**  
Could users complete core setup actions faster?

**setup time**  
Could teams move from configuration to launch with less effort?

**progression**  
Could more users continue through setup without drop-off?

### Bottom note
`qualitative signal: did the workflow feel more manageable and confidence-building?`

### Visual instructions
Use **original slide 15** as the base visual layout: three compact cards, centered structure, small bottom notes/callouts, and minimal copy.

---

## Slide 6 — Strategic Levers

### Slide title
`strategic levers`

### Headline
`clarify, guide, lower the barrier`

### Layout
Use the three-card structure and subtle screenshot strip from **original slide 17**. Borrow the strategic tone from **original slides 16 and 18** if useful.

### On-slide cards
**clarify the flow**  
Improve hierarchy, labels, and validation.

**guide the experience**  
Reduce decision load and make next steps clearer.

**lower activation burden**  
Use templates and starting points to reduce blank-slate setup.

### Bottom note
`learning: clarity helped, but guidance created a stronger path to activation.`

### Visual instructions
Use the same composition as **original slide 17**:
- three strategy cards across the center
- a screenshot / flow strip along the bottom
- soft card styling and pale background

If the slide needs more structure, incorporate the principle-card pattern from **original slide 18**, but do not add too much text.

---

## Slide 7 — Product Decision

### Slide title
`the product decision`

### Headline
`guided setup over surface cleanup`

### Layout
Use the comparison and metric structure from **original slide 22** as the primary reference.

### Column 1
**surface cleanup**
- faster to ship
- lower technical risk
- improved readability
- did not reduce effort enough

### Column 2
**guided setup**
- reduced decision load
- created clearer next steps
- supported activation
- scaled into reusable patterns

### Validation metric row
Use the same metric-card style as **original slide 22**:

**82%**  
completion rate

**27%**  
faster next-step identification

**35%**  
fewer setup errors

### Decision statement
`make the path into the workflow more directed while preserving flexibility underneath.`

### Visual instructions
Use these existing app slides:
- **Original slide 20** for Direction 1 / surface-cleanup screenshots.
- **Original slide 21** for Direction 2 / guided-experience screenshots.
- **Original slide 22** for the two-column comparison and metric row.
- **Original slide 24** for tradeoff language / tension if you need a small supporting note.

Recommended treatment:
- Make the two-column comparison and three metrics the hero.
- If space allows, show small cropped thumbnails from original slides 20 and 21 under each comparison column.
- If space is tight, omit the thumbnails and preserve the metric row + decision statement.

### Important emphasis
This is the business-judgment slide. It should show why the decision was not simply “prettier UI,” but a product decision to improve activation.

---

## Slide 8 — From Decision to Shipped System

### Slide title
`what changed`

### Headline
`less effort, clearer momentum, stronger confidence`

### Layout
Use final product screenshots as the hero, with 4 compact cards.

### On-slide cards
**structured IA**  
Setup became easier to navigate.

**clearer salience**  
Validation, requirements, and next steps became more visible.

**guided orientation**  
The system did more of the context-setting work.

**reusable starts**  
Templates reduced the effort of beginning from zero.

### Optional micro-note
`implementation artifacts helped engineering, product, and customer-facing teams preserve the design intent.`

### Visual instructions
Use these existing app slides:
- **Original slide 27** as the primary visual reference. It shows three large final product screenshots: Builder, Management/Configuration, and Reporting. These should be the hero visuals.
- **Original slide 23** for the four-card “key design decisions” structure if you need a content pattern.
- **Original slide 25** for handoff/developer-collaboration artifacts if you want small supporting thumbnails.
- **Original slide 26** for change-management artifacts if you want small supporting thumbnails.

Recommended treatment:
- Use the final product screenshots from **original slide 27** across the lower or right portion of the slide.
- Place the four “what changed” cards above or beside the screenshots.
- Keep supporting artifact thumbnails small or omit them if the slide becomes busy.
- Do not turn this into a full product tour.

---

## Slide 9 — Impact, Learning, and What Changed Next

### Slide title
`business impact`

### Headline
`a clearer path to activation and value realization`

### Layout
Use the metric-card structure from **original slide 30** as the primary reference.

### Metric cards
**+40%**  
task efficiency

**−20%**  
setup time

**50%**  
Journeys AI adoption in Q1

### Bottom learning callout
`reducing startup friction improved activation — and revealed the next opportunity: stronger on-ramps, prefilled configurations, and smarter defaults.`

### Optional small reflection cards
Use only if space allows:

**what worked**  
Guidance reduced cognitive load.

**what changed next**  
Smarter defaults became the next activation lever.

### Visual instructions
Use these existing app slides:
- **Original slide 30** as the hero visual reference. It already has the 40%, 20%, and 50% metric cards and reflection cards underneath.
- **Original slide 28** for the post-release follow-up / measurement list if you need a small supporting pattern.
- **Original slide 31** for learning/reflection cards if you need a small supporting pattern.

Recommended treatment:
- Make the three numbers the hero.
- Keep the bottom learning callout short.
- Use lots of negative space.
- Do not add charts unless the existing deck already has a matching chart component.

---

## Slide 10 — Why This Maps to Cherry

### Slide title
`why this maps to cherry`

### Headline
`growth depends on confidence through complexity`

### Layout
Create a new closing slide using the same calm, sparse, card-based style as **original slides 33 and 34**.

### Column 1
**journeys**  
setup → launch → value

### Column 2
**cherry**  
discovery → demo → sign-up → activation

### Bottom line
`in both cases, design influences progression, trust, and adoption.`

### Final line
`I’m energized by work where user confidence and business performance are deeply connected.`

### Visual instructions
Do not use Dandy-specific content or visuals here.

Use these existing app slides only as style references:
- **Original slide 33:** centered heading with three stacked cards.
- **Original slide 34:** split-card composition around a central divider.

Recommended composition:
- two small journey cards in the center
- thin connector line or arrow between them
- one short final statement at the bottom
- same typography, pale background, card styling, shadows, spacing, and animation rhythm as the rest of the deck

---

# Deck-Level Copy Replacement Rules

## Replace Dandy language with Cherry language
Remove references to:
- Dandy
- dental workflows
- chairside workflows
- scanning and ordering
- dentists / labs / restoratives

Replace with Cherry-relevant language:
- provider acquisition
- provider decision journey
- business-critical funnel
- discovery → demo → sign-up → activation
- trust and clarity in consequential decisions
- conversion and time to value
- business impact and operational leverage

## Keep Firstup/Journeys domain language
Keep references to:
- Firstup Journeys
- enterprise communication workflows
- orchestration
- setup
- launch
- activation
- adoption
- task efficiency
- setup time
- Journeys AI

## Do not overfit the whole case study to Cherry
The project is still Firstup Journeys. It should not pretend to be a Cherry project.

Only the final bridge slide should explicitly map the work to Cherry.

---

# Design / Style QA Checklist

Before finalizing, confirm:

- [ ] The deck uses only existing app assets, screenshots, and components.
- [ ] No code comments or content refer to PDFs.
- [ ] Background matches the existing pale, soft, minimal deck style.
- [ ] Typography matches the existing deck.
- [ ] Headings remain short and lowercase if the current deck uses lowercase headings.
- [ ] Card radius, shadows, borders, and spacing match existing components.
- [ ] Animations and transitions are preserved.
- [ ] Navigation behavior is unchanged.
- [ ] On-slide copy is minimal.
- [ ] No slide feels like a dense document.
- [ ] Each slide has one clear message.
- [ ] The deck can be presented in 10 minutes.
- [ ] The visual pacing feels premium and calm, not rushed.
- [ ] The business-impact story is obvious without relying entirely on the speaker.

---

# Timing Guide

Target timing:

| Slide | Target time |
|---|---:|
| 1 | 0:45 |
| 2 | 0:55 |
| 3 | 1:00 |
| 4 | 1:00 |
| 5 | 0:50 |
| 6 | 1:00 |
| 7 | 1:20 |
| 8 | 1:15 |
| 9 | 1:25 |
| 10 | 0:55 |

Total: ~10:05

If the deck needs to run under 10:00, shorten Slide 4, Slide 8, or Slide 9 speaker notes rather than removing a slide.

---

# Final QA Prompt for Claude Code

After updating the deck, run this self-check:

1. Does this deck clearly answer Cherry’s prompt for a business-impact project?
2. Is the main story about user insight changing a product/business decision?
3. Does the deck connect design decisions to activation, adoption, and time to value?
4. Does the product decision slide clearly show why guided setup beat surface cleanup?
5. Does the impact slide show measurable outcomes without overcrowding?
6. Are the slides short enough that the speaker can tell the story verbally?
7. Does the deck preserve the existing visual system, motion system, typography, colors, and interaction behavior?
8. Does the final slide make the Cherry connection explicit without making the whole case study feel artificially retrofitted?
9. Are there zero references to PDFs anywhere in the code, copy, comments, or slide metadata?

If any answer is no, revise the deck before stopping.
