# Agent Design & Coding Guidelines (Anti-Slop)

Follow the constraints in `DESIGN_SYSTEM.md` on all UI and frontend tasks:

## Negative Constraints (Strictly Enforced)
- **NO AI Clichés**: Ban `bg-gradient-to-*` multi-stop gradients, `blur-2xl`/`blur-3xl` radial blobs, neon violet/cyan/fuchsia accents, and floating glowing box-shadows.
- **90/10 Rule**: 90% neutral foundation (Zinc, Slate, or Warm Stone; pure white / deep charcoal), 10% single muted spot accent color.
- **Typographic Discipline**: Maximum 3 font sizes per viewport. Use `tracking-tight` for titles and `leading-relaxed` for prose.
- **Spatial Rhythm**: Padding and gap spacing in multiples of 16px/24px (`gap-4`, `gap-6`, `gap-8`, `p-6`, `p-8`).
- **Primitives Over Div Soups**: Use shadcn/ui and Radix primitives with restrained neutral styling (`border-border/40`, `rounded-md`/`rounded-lg`).

## MCP Server Integrations
- **Playwright MCP**: Validate visual layout, contrast, and alignment on `http://localhost:3000` or local dev server.
- **Figma MCP**: Fetch exact human-designed tokens, autolayout padding, and typography from Figma desktop app at `http://127.0.0.1:3845/mcp`.
- **shadcn MCP**: Fetch standard registry components and neutral patterns.
- **Firecrawl MCP**: Inspect and reference taste-benchmark sites when designing new layouts.
