---
name: Industrial Intelligence
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#8990a8'
  on-tertiary-container: '#22293d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  caption:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built for an Industrial AI Developer, prioritizing precision, reliability, and technical sophistication. The aesthetic moves away from the chaotic "hacker" tropes toward a refined "Hardware-as-Software" philosophy, mirroring the clean rooms of semiconductor plants and the structured logic of smart factories.

The style is **Corporate Modern with a Technical Edge**. It utilizes generous whitespace to convey clarity and "breathing room" for complex data, while employing subtle glassmorphism and structural grids to imply layers of intelligence. The emotional response should be one of "Expertise and Stability"—the digital equivalent of a high-end, precision-engineered piece of industrial equipment.

## Colors

The palette is anchored in a deep, nocturnal spectrum that ensures high readability without the eye strain of pure black.

- **Primary (Precision Blue):** #007AFF. Used sparingly for interactive elements, status indicators, and highlights to represent the "spark" of intelligence within the machine.
- **Secondary (Steel Gray):** #94A3B8. Used for supporting text and non-interactive iconography.
- **Background (Deep Charcoal):** #020617 (Primary surface) and #0F172A (Secondary surface). This creates a tiered, structured environment.
- **Accents:** Use subtle border colors (#1E293B) to define containment without creating visual noise.

## Typography

Typography is the backbone of this design system, emphasizing the "developer-centric" nature of the portfolio.

- **Geist** is the primary typeface for all headings and body copy, chosen for its Swiss-inspired cleanliness and technical legibility.
- **JetBrains Mono** is introduced for labels, metadata, and technical specs (e.g., model accuracy, latency metrics, code snippets). It reinforces the "Industrial AI" narrative through its monospaced, functional aesthetic.
- **Scale:** Maintain a strict hierarchical scale. Headlines should feel architectural, while body text remains comfortably spaced for long-form case studies.

## Layout & Spacing

The layout philosophy is based on a **Precision Grid**. 

- **Desktop:** A 12-column fluid grid with 24px gutters. Use wide margins (up to 80px) to center-align content, creating a focused "reading lane" for engineering documentation.
- **Rhythm:** Use a 4px base unit. All margins and paddings must be multiples of 4 (8, 16, 24, 32, 40...).
- **Data Denseness:** While the overall design uses generous whitespace, data components (like performance charts or tech specs) should follow a tighter, high-density layout to mimic industrial dashboards.
- **Mobile:** Transition to a 4-column grid with 16px margins. Headlines scale down to prevent awkward wrapping.

## Elevation & Depth

Depth is communicated through **Tonal Layering** rather than traditional drop shadows. This creates a "milled aluminum" feel.

- **Surface Levels:** The base background is the darkest. Cards and containers use a slightly lighter charcoal (#0F172A).
- **Outlines:** Instead of shadows, use 1px solid borders (#1E293B) for primary containment. For hover states, transition the border color to the primary blue at 30% opacity.
- **Glass Effects:** Use subtle backdrop-blur (12px) on navigation bars and overlays to provide a sense of layered intelligence without sacrificing the professional, clean aesthetic.

## Shapes

The shape language reflects **Industrial Precision**.

- **Corners:** Use a consistent 6px or 8px radius (Soft) for cards and buttons. This avoids the "playfulness" of highly rounded pills while remaining more modern and premium than sharp 90-degree corners.
- **Icons:** Use linear, 1.5px or 2px stroke icons. Avoid filled icons unless used as status indicators.
- **Containers:** Project thumbnails and data visualizations should maintain strict rectangularity with the same 8px corner radius.

## Components

### Buttons
- **Primary:** Solid Precision Blue background with white Geist Medium text. 6px corner radius.
- **Secondary:** Transparent background with a 1px Steel Gray border. Text color matches the border.
- **Tertiary/Ghost:** Monospaced label-mono text with no background.

### Cards
- Used for project highlights and technical skills. Feature a 1px border (#1E293B) and no shadow. On hover, the border subtly glows with a 0.5px blue stroke.

### Technical Chips (Badges)
- Use JetBrains Mono for text. Dark background (#1E293B) with light gray text. Used for "Tech Stack" or "Industry Sector" tags.

### Input Fields
- Dark background with a recessed look (inset border). Focus state uses a 1px blue border.

### Data Visualizations
- Charts should use the Primary Blue and Steel Gray palette. Use thin lines and small data points to emphasize precision. Avoid rounded line caps; use square or butt caps for a more technical feel.