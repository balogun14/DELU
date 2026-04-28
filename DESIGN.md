# Design System Specification: The Academic Curator

## 1. Overview & Creative North Star
The "Academic Curator" is the creative North Star for this design system. It moves away from the "utility-only" look of standard marketplaces, instead adopting a high-end editorial feel that mirrors a premium campus lifestyle. 

We achieve this through **Intentional Asymmetry** and **Tonal Depth**. By breaking the rigid, boxy constraints of traditional UI, we create a sense of movement and energy. Our layouts should feel like a curated gallery—utilizing generous whitespace, overlapping elements, and high-contrast typography scales—to establish ADEL as the most sophisticated and trustworthy platform for student exchange.

---

## 2. Colors
Our palette is rooted in a balance between "Trustworthy Emerald" and "Energetic Electric Blue." The color application must feel intentional and layered, never flat.

### The Color Tokens
- **Primary (`#006947`)**: The anchor of trust. Used for core branding and high-level navigation.
- **Secondary (`#0050d4`)**: The action driver. Used for high-priority interactive elements.
- **Tertiary (`#815100`)**: The warmth factor. Reserved for food-related categories and human-centric accents.
- **Background (`#f5f7f9`)**: A clean, off-white canvas that allows imagery to breathe.

### The "No-Line" Rule
**Explicit Instruction:** Sectioning via 1px solid borders is strictly prohibited. Boundaries must be defined solely through background color shifts or tonal transitions. To separate a header from a body, transition from `surface` to `surface-container-low`. 

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. Use the `surface-container` tiers to define importance:
- **`surface-container-lowest`**: Used for the primary content cards (elevating them from the background).
- **`surface-container-high`**: Used for nested elements within a card, such as a "Buy Now" section or a price tag.
- **The Glass & Gradient Rule**: To provide visual "soul," use subtle gradients on primary CTAs (e.g., `primary` to `primary-container`). For floating elements like navigation bars or verification badges, apply **Glassmorphism** (semi-transparent surface colors with a `backdrop-blur: 20px` effect).

---

## 3. Typography
This system utilizes a dual-typeface strategy to balance academic authority with youthful energy.

- **Display & Headlines (Plus Jakarta Sans)**: Used for all `display-` and `headline-` tokens. This typeface features modern, geometric curves that feel premium and editorial. Use `headline-lg` (2rem) for product titles to create an immediate visual hierarchy.
- **Body & Titles (Inter)**: Used for all `title-`, `body-`, and `label-` tokens. Inter provides exceptional legibility for marketplace descriptions and technical details.

**The Editorial Contrast:** Pair a large `display-md` headline with a significantly smaller `body-md` subheader. This dramatic scale difference is what elevates the system from "standard app" to "digital curator."

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than structural lines.

- **The Layering Principle**: Instead of shadows, stack surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
- **Ambient Shadows**: For high-priority floating elements (like a FAB or a modal), use "Ambient Shadows." These must be extra-diffused (`blur: 32px`) and low-opacity (4%–8%). The shadow color should not be grey; it should be a tinted version of `on-surface` to mimic natural light.
- **The "Ghost Border" Fallback**: If a border is required for accessibility, use a **Ghost Border**: the `outline-variant` token at 15% opacity. Never use 100% opaque borders.
- **Glassmorphism**: When content scrolls behind headers or navigation bars, the use of `surface` tokens at 80% opacity with a blur effect ensures the layout feels integrated and fluid.

---

## 5. Components

### Buttons
- **Primary**: Uses a subtle gradient from `primary` to `primary-dim`. Roundedness: `full`. No border.
- **Secondary**: `secondary_container` background with `on_secondary_container` text. High-contrast, no border.
- **States**: On hover, increase the brightness of the gradient; on press, scale the component down to 98% to simulate physical depth.

### Cards & Lists
- **Rule**: Forbid the use of divider lines.
- **Layout**: Use vertical white space (from the `xl` or `lg` spacing scale) or subtle background shifts (`surface-container-low`) to separate content. 
- **Product Cards**: Should use `rounded-xl` corners. The image should be the hero, often bleeding to the edges of the card container.

### Verification Badges (Trust Indicators)
- **Visual Style**: Use a Glassmorphism effect—a semi-transparent `primary_container` background with a `backdrop-blur`. This makes the "Verified" status feel like a premium watermark rather than a sticker.

### Input Fields
- **Background**: `surface-container-highest` with a `none` border.
- **Focus State**: A subtle `primary` "Ghost Border" (20% opacity) and a slight tonal shift to `surface-container-lowest`.

---

## 6. Do's and Don'ts

### Do
- **DO** use asymmetrical margins (e.g., more padding on the left than the right in hero sections) to create an editorial feel.
- **DO** use the `tertiary` (Orange/Yellow) colors exclusively for food or "hot" items to maintain cognitive clarity.
- **DO** leverage high-quality, lifestyle-focused imagery. The system relies on "The Digital Curator" aesthetic, which requires beautiful content.

### Don't
- **DON'T** use 1px solid dividers to separate list items; use 16px–24px of whitespace instead.
- **DON'T** use pure black for shadows. Always tint shadows with the surface color.
- **DON'T** use the `secondary` (Electric Blue) for non-interactive elements. It is strictly reserved for "Action."
- **DON'T** crowd the layout. If a screen feels "busy," increase the surface-container padding to the next tier in the scale.