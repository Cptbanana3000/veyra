# Tasteful Web Design System & Aesthetic Guardrails (Anti-Slop)

This document establishes the design principles, negative constraints, and aesthetic rules for the project, paired with our MCP server toolset.

---

## 1. Hard Bans & Negative Constraints (Anti-Slop Policy)

To eliminate generic AI tropes ("crypto-SaaS" slop, dark-mode radial blobs, and neon violet borders), adhere strictly to these hard bans:

### 🚫 Banned Utility Classes & Patterns
- **No Multi-Stop Saturated Gradients**: Strictly forbid `bg-gradient-to-r`, `bg-gradient-to-tr`, `from-violet-500 to-fuchsia-500`, and similar saturated gradients on backgrounds or text.
- **No Neon AI Accents**: Do NOT use `violet-500`, `fuchsia-500`, `cyan-400`, or electric hyper-saturated colors.
- **No Blurred Radial Blobs**: Ban `blur-2xl`, `blur-3xl`, and circular background glow divs.
- **No Backdrop Blur Divs**: Avoid gratuitous `backdrop-blur-md` / `backdrop-blur-lg` layered over glowing elements.
- **No Glowing Shadows**: Forbid colored box-shadow glows (`shadow-[0_0_35px_rgba(...)]`). Shadows must be neutral charcoal/black or omitted entirely.
- **No Pastel Pill Cards**: Avoid bubbly, high-radius rounded pastel containers that look like generic templates.

---

## 2. Palette: The 90/10 Rule & Neutral Foundations

### 90% Foundation: Restrained Neutrals
- Base surfaces and text must use monochromatic neutrals:
  - **Light Mode**: Pure white (`#ffffff`), off-white (`#fcfcfc`), graded Zinc/Slate/Warm Stone (`zinc-50` through `zinc-900`).
  - **Dark Mode**: Deep charcoal/black (`#09090b`, `#121212`, `#18181b`), never saturated purple-black.
  - **Borders**: Restrained neutral borders (`border-zinc-200`, `dark:border-zinc-800/80`, `border-border/40`).
  - **Dividers**: Clean 1px hairlines with low contrast.

### 10% Accent: Single Muted Spot Color
- Use exactly **one** purposeful, editorial spot color for primary actions and key highlights (e.g., International Klein Blue `#002FA7`, Muted Burnt Orange `#D9531E`, Forest/Sage `#2D5A27`, or deliberate brand shade).
- Never use accent colors on large backgrounds or random cards.

---

## 3. Typographic Hierarchy & Spacing

### Strict Type Scale
- **Maximum 3 Font Sizes Per Viewport**: Do not scatter 6 different font sizes across a single section.
- **Hierarchy**:
  1. Display / Section Heading: Crisp, deliberate (`text-2xl` to `text-4xl`, `tracking-tight`, `font-semibold` or `font-medium`).
  2. Section Subheading / Metadata: Subtle (`text-sm` or `text-base`, `text-zinc-500`).
  3. Body / Functional Text: Clean, legible (`text-sm` or `text-base`, `leading-relaxed`, `text-zinc-700` or `dark:text-zinc-300`).

### Generous Whitespace
- Spacing rhythm must follow multiples of 16px or 24px (`gap-4`, `gap-6`, `gap-8`, `p-6`, `p-8`, `py-16`, `py-24`).
- Allow layouts to breathe. Embrace negative space rather than filling every corner with cards or widgets.

---

## 4. Component Architecture: shadcn & Radix Primitives

- Favor battle-tested accessible primitives (Radix, shadcn/ui) over improvised div soups.
- Keep border radii disciplined (`rounded-md` or `rounded-lg`, never overly bubbly `rounded-3xl` for normal cards).
- Interactive states: Subtle background transitions (`hover:bg-zinc-100`, `dark:hover:bg-zinc-800`), not floating scale or glow animations.

---

## 5. MCP Tooling Workflows

1. **Playwright MCP (`@playwright/mcp@latest`)**:
   - Inspect local development server (`http://localhost:3000` / `http://localhost:5173`).
   - Take viewport screenshots and inspect computed styles to critique whitespace, contrast, and alignment before declaring UI complete.
2. **Figma MCP (`http://127.0.0.1:3845/mcp`)**:
   - Sync real design tokens, typography scales, autolayout padding, and color variables directly from Figma Dev Mode.
3. **shadcn MCP (`shadcn@latest mcp`)**:
   - Query and scaffold registry components with accessible Radix primitives and neutral Tailwind tokens.
4. **Firecrawl MCP (`firecrawl-mcp`)**:
   - Extract layout structures, typography scales, and clean DOM trees from taste-benchmark websites (Linear, Raycast, Siteinspire).
