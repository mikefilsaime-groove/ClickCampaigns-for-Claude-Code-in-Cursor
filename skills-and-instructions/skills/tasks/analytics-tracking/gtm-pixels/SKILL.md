---
name: gtm-pixels
description: This skill should be used when the user asks to "set up GTM", "install pixels", "configure tracking codes", "tag management", or mentions Google Tag Manager, Meta Pixel, or conversion tracking implementation. Creates precise, technical implementation plans for tracking tags.
---

# GTM & Pixels Implementation

Implement precise, resilient, and privacy-compliant tracking tags using Google Tag Manager (GTM) and platform-specific pixels. This skill focuses on the technical "how-to" of tag deployment, trigger logic, and data layer integration.

## Core Objectives

- Deploy a robust Google Tag Manager container (Client & Server)
- Implement platform pixels (Meta, Google, TikTok, LinkedIn) with 100% accuracy
- Configure custom events and triggers for key conversion actions
- Ensure data layer consistency across the entire funnel
- Validate tracking health using debugging tools

## Mandatory Elements

### 1. GTM Architecture
- **Container Setup:** Client-side for browser tracking, Server-side for privacy and performance.
- **Variable Governance:** Consistent naming for User IDs, Transaction IDs, and Event Names.
- **Folder Structure:** Organized by platform (e.g., [Meta], [GA4], [Ads]).

### 2. Pixel Implementation
- **Base Code:** Installation on every page via GTM.
- **Standard Events:** PageView, Lead, Purchase, AddToCart, InitiateCheckout.
- **Advanced Matching:** Securely passing hashed user data (Email, Phone) for better attribution.

## Structure & Frameworks

### Tag Deployment Workflow
1. **Audit:** Identify all current tags and conversion points.
2. **Data Layer Spec:** Define variables needed from the website code (e.g., `order_value`).
3. **Configuration:** Build Tags, Triggers, and Variables in GTM.
4. **Debug & QA:** Use GTM Preview Mode and Platform Pixel Helpers.
5. **Publish:** Version-controlled release with descriptive notes.

### Conversion API (CAPI) Strategy
**Purpose:** Bypass browser restrictions (iOS14+) by sending events directly from the server.
**Key Elements:**
- Event deduplication (Event ID matching)
- Server-side GTM (sGTM) configuration
- Direct API integrations where possible

## Voice & Tone Guidelines

- **Technical Precision:** Use exact terminology (Data Layer, Trigger, Variable).
- **Instructional:** Clear, step-by-step guidance.
- **Authoritative:** Confident in technical requirements and privacy compliance.
- **Formatting:** Code blocks for data layer snippets and tag configurations.

## Concrete Examples

### Data Layer Push for Purchase
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'transaction_id': 'T12345',
    'affiliation': 'Online Store',
    'value': 59.99,
    'currency': 'USD',
    'items': [{
      'item_name': 'Marketing Masterclass',
      'item_id': 'MM-01',
      'price': 59.99,
      'quantity': 1
    }]
  }
});
```

### Meta Pixel Lead Event (via GTM Custom HTML)
```html
<script>
  fbq('track', 'Lead', {
    content_name: '{{Page Path}}',
    content_category: 'Funnel Step 1',
    value: 10.00,
    currency: 'USD'
  });
</script>
```

## Quality Checklist

For every implementation, ask:
- [ ] Is the GTM container loading on all pages?
- [ ] Are events deduplicated between browser and server (CAPI)?
- [ ] Is hashed PII (Email/Phone) being sent correctly for Advanced Matching?
- [ ] Does the Data Layer match the technical specification?
- [ ] Have all tags been verified in GTM Preview Mode?
