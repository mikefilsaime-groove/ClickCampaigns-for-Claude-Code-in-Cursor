# Brand Style Guide

## Guidelines
# Brand Color Palette Style Guide

## Overview
This brand identity combines sophistication with warmth, using a purple-dominated palette with strategic red accents to convey trust, creativity, and passion.

---

## Primary Colors

### Royal Purple
- **Hex:** `#6B3FA0`
- **RGB:** 107, 63, 160
- **Usage:** Primary brand color for logo text, main typography, and key UI elements
- **Context:** Used for the "AffiliatePages" and "AI" text in the logo
- **Characteristics:** Conveys sophistication, creativity, and innovation
- **Application:** Headlines, primary CTAs, logo applications, navigation elements

### Lavender Mist
- **Hex:** `#E8D9F0`
- **RGB:** 232, 217, 240
- **Usage:** Primary background color
- **Context:** Full background of the brand header
- **Characteristics:** Soft, approachable, creates breathing room
- **Application:** Page backgrounds, card backgrounds, section dividers, light UI elements

---

## Accent Colors

### Crimson Red (Heart Highlight)
- **Hex:** `#E63946`
- **RGB:** 230, 57, 70
- **Usage:** Primary accent for emphasis and emotional connection
- **Context:** Main color of the heart icon, lighter areas
- **Characteristics:** Energy, passion, attention-grabbing
- **Application:** CTAs, important notifications, icons, hover states

### Deep Red (Heart Shadow)
- **Hex:** `#C41E3A`
- **RGB:** 196, 30, 58
- **Usage:** Secondary accent for depth and dimension
- **Context:** Darker/shadow areas of the heart icon
- **Characteristics:** Depth, warmth, premium feel
- **Application:** Button shadows, gradients, secondary accents

---

## Supporting Colors

### White
- **Hex:** `#FFFFFF`
- **RGB:** 255, 255, 255
- **Usage:** Text on dark backgrounds, card backgrounds, clean spaces
- **Application:** Body text on purple, button text, content areas

### Dark Purple (Recommended)
- **Hex:** `#3D1F5C`
- **RGB:** 61, 31, 92
- **Usage:** Text on light backgrounds, dark UI elements
- **Application:** Body copy, secondary headings, icons

---

## Color Combinations

### Primary Combination
```
Background: #E8D9F0 (Lavender Mist)
Text: #6B3FA0 (Royal Purple)
Accent: #E63946 (Crimson Red)
```
**Use Case:** Hero sections, landing pages, main brand communications

### Inverted Combination
```
Background: #6B3FA0 (Royal Purple)
Text: #FFFFFF (White)
Accent: #E63946 (Crimson Red)
```
**Use Case:** CTAs, footer sections, emphasis blocks

### Neutral Combination
```
Background: #FFFFFF (White)
Text: #3D1F5C (Dark Purple)
Accent: #6B3FA0 (Royal Purple)
```
**Use Case:** Content areas, blog posts, documentation

---

## Technical Specifications

### CSS Variables
```css
:root {
  /* Primary Colors */
  --color-primary: #6B3FA0;
  --color-background: #E8D9F0;
  
  /* Accent Colors */
  --color-accent: #E63946;
  --color-accent-dark: #C41E3A;
  
  /* Supporting Colors */
  --color-white: #FFFFFF;
  --color-text-dark: #3D1F5C;
  
  /* Gradients */
  --gradient-heart: linear-gradient(135deg, #E63946 0%, #C41E3A 100%);
  --gradient-purple: linear-gradient(135deg, #6B3FA0 0%, #3D1F5C 100%);
}
```

### Sass Variables
```scss
$royal-purple: #6B3FA0;
$lavender-mist: #E8D9F0;
$crimson-red: #E63946;
$deep-red: #C41E3A;
$white: #FFFFFF;
$dark-purple: #3D1F5C;
```

---

## Usage Recommendations

### Do's ✓
- Use Royal Purple (#6B3FA0) for all primary brand touchpoints
- Reserve Crimson Red (#E63946) for strategic emphasis (CTAs, important icons)
- Maintain Lavender Mist (#E8D9F0) background for brand consistency
- Use sufficient white space with light backgrounds
- Combine purple and red sparingly for maximum impact

### Don'ts ✗
- Don't use red as a primary color—it's an accent only
- Avoid using multiple purple shades simultaneously without purpose
- Don't place Royal Purple text on Crimson Red backgrounds
- Avoid oversaturating designs with too much color
- Don't use gradients on small text or icons

---

## Accessibility Notes

### Contrast Ratios (WCAG 2.1)

**Royal Purple (#6B3FA0) on Lavender Mist (#E8D9F0)**
- Ratio: ~3.5:1
- Level: AA for large text (18pt+)
- ⚠️ Use for headlines only, not body text

**Royal Purple (#6B3FA0) on White (#FFFFFF)**
- Ratio: ~5.8:1
- Level: AA for normal text, AAA for large text
- ✓ Recommended for all text applications

**White (#FFFFFF) on Royal Purple (#6B3FA0)**
- Ratio: ~5.8:1
- Level: AA for normal text
- ✓ Excellent for buttons and CTAs

**Crimson Red (#E63946) on White (#FFFFFF)**
- Ratio: ~4.8:1
- Level: AA for normal text
- ✓ Good for accent elements

### Recommendations
- For body text on Lavender Mist, use Dark Purple (#3D1F5C) instead of Royal Purple
- Always test color combinations with contrast checkers
- Provide alternative indicators beyond color for important information
- Consider colorblind users: purple-red combination works well for most types

---

## Brand Personality

This color palette communicates:
- **Professional & Innovative** (Purple dominance)
- **Passionate & Energetic** (Red heart accent)
- **Approachable & Modern** (Soft lavender background)
- **Tech-Forward** (AI association with purple)
- **Human-Centered** (Heart symbol in crimson)

---

## File Naming Convention
```
affiliates-royal-purple.svg
affiliates-lavender-mist-bg.png
affiliates-crimson-accent.svg
```

## Print Specifications

**Royal Purple**
- CMYK: 70, 85, 0, 0
- Pantone: 2665 C (approximate)

**Crimson Red**
- CMYK: 0, 90, 75, 0
- Pantone: 192 C (approximate)

**Lavender Mist**
- CMYK: 10, 15, 0, 0
- Pantone: 7443 C (approximate)

---

*Last Updated: 2024*
*Version: 1.0*

## Color Palette

- **Suggested Primary**: #6B3FA0
- **Suggested Secondary**: #E63946

### Dominant Colors
- **Lavender Mist**: #E8D9F0 (45% — background)
- **Royal Purple**: #6B3FA0 (35% — primary)

### Accent Colors
- **Crimson Red**: #E63946 (12% — accent)
- **Deep Red**: #C41E3A (8% — accent)
