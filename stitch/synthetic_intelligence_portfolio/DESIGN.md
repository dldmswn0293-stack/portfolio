---
name: Synthetic Intelligence Portfolio
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#faf3ff'
  on-tertiary: '#3c0090'
  tertiary-container: '#e1d2ff'
  on-tertiary-container: '#7213ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
  element-gap: 24px
---

## Brand & Style

The design system is engineered for an AI Developer specializing in Smart Factory and Digital Twin ecosystems. It evokes a "Command Center" aesthetic—precise, analytical, and high-performance. The brand personality is technical yet visionary, bridging the gap between raw industrial data and intelligent automation.

The visual style is **Corporate Modern with a "Cyber-Industrial" edge**. It utilizes a dark mode foundation to minimize eye strain and maximize the impact of glowing data visualizations. Elements are characterized by high-precision layouts, subtle glassmorphism to represent layered digital twins, and a "schematic" feel achieved through fine lines and monospaced accents. The interface should feel like a premium diagnostic tool: responsive, information-dense, and authoritative.

## Colors

The palette is rooted in a "Deep Space" industrial spectrum. The background uses a near-black slate to provide infinite depth, while UI surfaces use slightly lighter shades to establish hierarchy.

- **Primary (Neon Cyan):** Used for critical data points, active states, and "system-ready" indicators. It represents the AI's analytical clarity.
- **Secondary (Neon Magenta):** Used for highlighting specialized technologies, call-to-actions, and accentuating industrial "hotspots."
- **Tertiary (Electric Violet):** Used for gradients and background blurs to add dimension and a sense of futuristic energy.
- **Neutrals:** A range of cool greys and slates ensure that text remains legible without breaking the dark-room atmosphere. Semantic colors (Red/Amber) should be used sparingly for "System Error" or "Warning" metaphors in project case studies.

## Typography

The typography strategy pairs technical precision with modern readability. **Geist** provides a sharp, geometric feel for headlines that echoes architectural blueprints. **Inter** is used for body text to ensure maximum legibility across dense project descriptions. **JetBrains Mono** is utilized for labels, metadata, and technical specs, reinforcing the developer-centric nature of the portfolio.

Type hierarchy is aggressive. Large display headings use tight tracking and bold weights to command attention, while small labels use increased tracking and uppercase styling to feel like telemetry data on a HUD.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. The layout is "Result-Oriented," meaning content is structured to lead the eye directly to KPIs and project outcomes.

- **Schematic Alignment:** Elements should feel snapped to a grid. Use thin vertical and horizontal "guide lines" (0.5px opacity) to separate sections, mimicking a technical drawing.
- **Sectioning:** Deep vertical spacing (120px+) is used to let complex AI concepts breathe. 
- **Data Density:** While the overall layout is spacious, internal components (like "System Specs" cards) can be dense, using a tight 8px base unit to group related technical attributes.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering and Backdrop Blurs** rather than traditional heavy shadows.

1.  **The Void (Level 0):** The base background (`#0A0B10`).
2.  **Plates (Level 1):** Project cards and containers use a slightly lighter slate (`#161821`) with a subtle 1px border.
3.  **Overlays (Level 2):** Modals and navigation menus use a high-saturation backdrop blur (20px) with a semi-transparent dark fill to create a "glass cockpit" effect.
4.  **Glow (Level 3):** Interactive elements and "active" status indicators use a soft, colored outer glow (bloom effect) in Cyan or Magenta to simulate light emitting from a screen.

## Shapes

The shape language is **Technical and Precise**. The "Soft" setting (4px - 12px) is used to prevent the UI from feeling too sharp or aggressive while maintaining a professional, engineered look. 

- **Containers:** 8px (`rounded-md`) is the standard for most cards and sections.
- **Interactive Elements:** Buttons use a slightly larger 12px (`rounded-lg`) or occasionally a full pill-shape for "system-level" actions.
- **Accents:** Use 45-degree chamfered corners on decorative elements or corner-brackets to reinforce the industrial/manufacturing theme.

## Components

### Buttons
- **Primary:** Solid gradient from Tertiary to Secondary with white text. Includes a subtle "scanline" overlay effect on hover.
- **Secondary:** Ghost style with a 1px Primary color border. On hover, the border glows and the background fills with a 10% opacity tint.

### Data Chips
- Small, rectangular tags with a background color at 15% opacity and a 100% opacity border of the same hue. Text is in `label-code` (JetBrains Mono).

### Project Cards
- Features a "Technical Spec" header. Images should have a subtle blue-tinted overlay that clears on hover. Borders should be visible but low-contrast (`#2D313E`).

### Input Fields
- Dark backgrounds with bottom-only borders that "activate" by glowing Cyan when focused. Labels should always be visible in `label-caps` style above the field.

### Progress & Metrics
- Use linear "bar-graphs" rather than circular ones. All metrics should be accompanied by a "System Check" icon or a small pulsing dot to indicate real-time data simulation.

### Navigation
- A top-fixed "Control Bar" with a blurred background. Navigation items use `label-caps` and indicate the active section with a glowing Cyan underline.