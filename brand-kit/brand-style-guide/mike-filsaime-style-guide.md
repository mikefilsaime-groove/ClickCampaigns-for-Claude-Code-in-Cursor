---
title: Mike Filsaime — Brand Style Guide
date: 2026-03-12
campaign: mike-filsaime-rebrand
tags: [brand, style-guide, design]
---

# Mike Filsaime — Brand Style Guide

## Design Philosophy

Premium tech visionary. Not corporate. Not startup-casual. The aesthetic of someone who's built $175M in real businesses and is now building the future. Think: Stripe meets Tony Robbins meets OpenAI — clean, bold, intelligent.

The site supports **light and dark modes** with a user-selectable toggle.

---

## Color System

### Primary Palette

| Token | Hex | Role |
|-------|-----|------|
| `electric` | `#6366F1` | Primary brand color — indigo electric. Used for CTAs, links, key accents |
| `electric-light` | `#818CF8` | Hover states, secondary accents |
| `electric-dark` | `#4F46E5` | Active states, dark mode CTA backgrounds |
| `volt` | `#22D3EE` | Secondary accent — electric cyan. Used for highlights, badges, gradients |
| `amber` | `#F59E0B` | Tertiary warm accent — used sparingly for emphasis, stars, premium indicators |

### Dark Mode

| Token | Hex | Role |
|-------|-----|------|
| `surface-dark` | `#09090B` | Page background (zinc-950) |
| `surface-dark-raised` | `#18181B` | Cards, raised surfaces (zinc-900) |
| `surface-dark-subtle` | `#27272A` | Borders, dividers (zinc-800) |
| `text-dark-primary` | `#FAFAFA` | Primary text (zinc-50) |
| `text-dark-secondary` | `#A1A1AA` | Secondary/muted text (zinc-400) |

### Light Mode

| Token | Hex | Role |
|-------|-----|------|
| `surface-light` | `#FFFFFF` | Page background |
| `surface-light-raised` | `#F4F4F5` | Cards, raised surfaces (zinc-100) |
| `surface-light-subtle` | `#E4E4E7` | Borders, dividers (zinc-200) |
| `text-light-primary` | `#09090B` | Primary text (zinc-950) |
| `text-light-secondary` | `#71717A` | Secondary/muted text (zinc-500) |

### Gradients

| Name | Definition | Usage |
|------|-----------|-------|
| `hero-gradient` | `from-electric via-electric-dark to-indigo-900` | Hero section overlays, large CTAs |
| `accent-gradient` | `from-electric to-volt` | Badges, highlight bars, small accents |
| `glow` | `box-shadow: 0 0 60px rgba(99,102,241,0.3)` | Hover glow on cards and buttons |

---

## Typography

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Display / H1** | **Instrument Serif** | 400 (regular) | Georgia, serif |
| **Headings (H2-H4)** | **DM Sans** | 700 (bold) | system-ui, sans-serif |
| **Body** | **DM Sans** | 400 (regular) | system-ui, sans-serif |
| **Accent / Labels** | **DM Sans** | 500 (medium) | system-ui, sans-serif |
| **Code / Tech** | **JetBrains Mono** | 400 | monospace |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Size (desktop) | Size (mobile) | Line Height | Letter Spacing |
|---------|---------------|---------------|-------------|----------------|
| **H1 (Display)** | 4.5rem (72px) | 2.5rem (40px) | 1.1 | -0.02em |
| **H2** | 3rem (48px) | 2rem (32px) | 1.2 | -0.01em |
| **H3** | 1.875rem (30px) | 1.5rem (24px) | 1.3 | 0 |
| **H4** | 1.25rem (20px) | 1.125rem (18px) | 1.4 | 0 |
| **Body** | 1.125rem (18px) | 1rem (16px) | 1.7 | 0 |
| **Small / Labels** | 0.875rem (14px) | 0.875rem (14px) | 1.5 | 0.02em |

---

## Spacing & Layout

| Property | Value |
|----------|-------|
| **Max content width** | 1280px |
| **Section padding** | 6rem (96px) top/bottom desktop, 4rem mobile |
| **Card border radius** | 1rem (16px) |
| **Button border radius** | 0.75rem (12px) |
| **Grid gap** | 2rem (32px) |
| **Container padding** | 1.5rem (24px) horizontal |

---

## Buttons

### Primary CTA
- Background: `electric` gradient (`from-electric to-electric-dark`)
- Text: White, DM Sans 500, tracking slightly wider
- Padding: `1rem 2.5rem`
- Border radius: `0.75rem`
- Hover: Slight lift (`translateY(-2px)`) + glow shadow
- Transition: `all 0.2s ease`

### Secondary CTA
- Background: Transparent
- Border: 1px solid `electric`
- Text: `electric` (dark mode) / `electric-dark` (light mode)
- Hover: Fill with `electric` at 10% opacity

### Ghost / Text Link
- No background, no border
- Text: `electric` with arrow icon
- Hover: Underline + slight translate right on arrow

---

## Cards

- Background: `surface-raised` (mode-aware)
- Border: 1px solid `surface-subtle` (mode-aware)
- Border radius: 1rem
- Padding: 2rem
- Hover: Subtle glow effect + slight lift
- Transition: `all 0.3s ease`

---

## Dark/Light Mode Toggle

- Toggle button in the header navigation
- Uses sun/moon Lucide icons
- Respects `prefers-color-scheme` on first visit
- Stores preference in `localStorage`
- Smooth transition on all color properties (0.3s)
- Implementation: CSS custom properties + `data-theme` attribute on `<html>`

---

## Imagery Style

| Type | Guidelines |
|------|-----------|
| **Hero / Background** | Abstract tech textures, subtle gradients, neural network patterns — never cheesy stock photos |
| **Portrait** | Professional headshot of Mike — confident, approachable, modern (not suit-and-tie corporate) |
| **Product** | Clean device mockups showing ClickCampaigns, Scale.gg, GodMode interfaces |
| **Icons** | Lucide icon set — consistent 24px stroke, `electric` color for feature icons |
| **Social Proof** | Real photos for testimonials (Tony Robbins, Rich Schefren), slight circular crop |

---

## Motion & Animation

| Element | Animation |
|---------|-----------|
| **Page load** | Sections fade in + slide up (staggered, 0.1s delay each) |
| **Cards hover** | Subtle lift (4px) + glow |
| **CTA hover** | Lift (2px) + expanded glow shadow |
| **Stats counter** | Count-up animation on scroll into view |
| **Theme toggle** | Smooth icon rotation (180deg) |
| **Scroll** | Smooth scroll behavior on anchor links |

---

## Iconography

**Lucide Icons** — the full set. Key icons for this brand:

| Concept | Icon |
|---------|------|
| AI / Agents | `bot`, `brain`, `cpu` |
| Marketing | `megaphone`, `target`, `trending-up` |
| Scale | `rocket`, `zap`, `layers` |
| Community | `users`, `globe`, `ship` (cruise) |
| Tech | `code`, `terminal`, `workflow` |
| Results | `bar-chart-3`, `trophy`, `check-circle` |

---

## Logo Treatment

- **Primary logo:** "MF" monogram or "Mike Filsaime" wordmark in DM Sans Bold
- **Color:** White on dark backgrounds, `zinc-950` on light backgrounds
- **Spacing:** Minimum clear space = height of the "M" on all sides
- **Never:** Stretch, rotate, add effects, or place on busy backgrounds
