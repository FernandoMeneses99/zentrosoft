---
version: 2.0
name: ZentroSoft Design System
description: |
  Web development agency landing page. Deep navy dark theme with blue
  and green accents. Clean, professional aesthetic for a digital agency
  specialized in landing pages, SEO and web support in Bogotá, Colombia.
---

# ZentroSoft Design System

## Brand Identity
ZentroSoft is a Colombian web development agency founded in 2025, based in Bogotá D.C., offering landing page creation, SEO optimization, frontend development, consulting, technical support, and web maintenance for small businesses and entrepreneurs. Proprietary products: VelarisPOS and Zentro Inmobiliaria.

## Visual Language

### Color Palette

**Primary Background:**
- `canvas` — `#ffffff` (light sections)
- `canvas-dark` — `#0a1628` (hero, footer, dark sections)
- `surface` — `#f8fafc` (alternating light sections)
- `surface-dark` — `#132238` (cards on dark backgrounds)

**Brand Colors:**
- `primary` — `#4B82C3` (corporate blue — headers, CTAs, links)
- `primary-light` — `#6a9ad4` (hover states)
- `primary-dark` — `#3a6aa3` (active states)
- `secondary` — `#4FD290` (accent green — badges, highlights, success)
- `secondary-light` — `#72dea8` (hover)
- `secondary-dark` — `#3bb876` (active)

**Text Colors:**
- `text` — `#1e293b` (headings, body on light)
- `text-muted` — `#64748b` (secondary text)
- `text-light` — `#94a3b8` (text on dark backgrounds)
- `text-on-dark` — `#e2e8f0` (light text on dark)

### Typography

**Font Family:** Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800, 900
- Primary for all text roles — single font family system

**Type Scale:**
- Hero title: `clamp(2.5rem, 5.5vw, 4rem)` / weight 900 / letter-spacing -0.03em
- Section title: `clamp(2rem, 4vw, 2.75rem)` / weight 800 / letter-spacing -0.02em
- Card title: `1.05-1.15rem` / weight 700
- Body: `0.85-1.15rem` / weight 400
- Label/Tag: `0.75-0.8rem` / weight 600 / uppercase / letter-spacing 0.05em

### Spacing Scale
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)
- `4xl`: 6rem (96px)
- `5xl`: 8rem (128px)

### Border Radius
- `sm`: 6px (buttons, small elements)
- `md`: 10px (cards)
- `lg`: 16px (large cards)
- `xl`: 24px (hero cards, feature cards)
- `full`: 9999px (badges, CTAs, pills)

### Shadows
- `sm`: `0 1px 3px rgba(0,0,0,0.08)`
- `md`: `0 4px 16px rgba(0,0,0,0.1)`
- `lg`: `0 12px 40px rgba(0,0,0,0.12)`
- `glow`: `0 0 40px rgba(75,130,195,0.15)`

## Component Patterns

### Navigation
- Fixed top, backdrop-blur glass effect on `canvas-dark` with 85% opacity
- Height: 72px, horizontal links with underline hover animation
- CTA button: pill shape, primary color fill
- Mobile: hamburger menu toggle

### Hero Section
- Full viewport height, dark background with image slideshow
- 2 images rotating every 3s with 0.8s crossfade
- Left-aligned content, max-width 680px
- Gradient overlay on images: dark-to-transparent from left
- Green badge pill with pulsing dot
- Gradient text for highlights (secondary → primary)
- Stats row with large numbers + accent color

### Value Proposition Cards
- 4-column grid (2 on tablet, 1 on mobile)
- White background, subtle border, top gradient line on hover
- SVG icon in gradient-tinted container
- Hover: lift + shadow + border removal

### Experience Section
- 2-column layout: visual (dark card) + content (features list)
- Large gradient number (7rem) as hero element
- Feature items: icon + text, hover highlight

### Logo Carousel
- Infinite horizontal scroll animation (30s linear loop)
- 6 logos duplicated for seamless loop
- Grayscale filter → color on hover
- Fade mask on edges
- Pause on hover

### News Cards
- Horizontal scroll carousel with snap
- 3 cards visible on desktop, 2 on tablet, 1 on mobile
- Dark card on dark section
- Image with tag badge overlay
- Hover: lift + image zoom

### Footer
- 4-column grid: brand + 3 link columns
- Dark background with subtle borders
- Bottom bar: copyright + social links

## Animation Principles
- Subtle, purposeful motion
- Transform + opacity for reveals
- 0.2-0.3s for micro-interactions
- 0.5-0.8s for section transitions
- IntersectionObserver for scroll-triggered reveals

## Responsive Breakpoints
- Desktop: > 1024px (default)
- Tablet: 768px - 1024px
- Mobile: < 768px

## Do's
- Use Inter font family for all text
- Maintain consistent spacing from the scale
- Use brand colors only for interactive/accent elements
- Keep dark sections for hero, footer, and feature highlights
- Use white/light for content-heavy sections
- Ensure all images have alt text
- Use semantic HTML elements

## Don'ts
- Don't use more than 2 font weights per section
- Don't add decorative elements without purpose
- Don't break the color palette consistency
- Don't use heavy shadows — prefer subtle depth
- Don't clutter layouts — maintain whitespace rhythm
