---
name: analytics-tracking
description: This skill should be used when the user asks to "set up analytics", "build tracking", "conversion tracking", "measurement plan", "dashboards", or mentions analytics, tracking implementation, or attribution. Creates measurement systems that drive data-informed decisions.
---

# Analytics & Tracking Implementation

Build analytics and tracking implementation plans that provide crystal-clear insight into campaign performance, attribution, and user behavior. Enable data-driven decisions with trustworthy measurement.

## Core Objectives

- Define metrics that matter for acquisition, activation, revenue, retention
- Implement privacy-compliant, resilient tracking
- Provide dashboards, alerting, and QA processes
- Enable confident decision-making with clean data

## Deliverable Package

### 1. Measurement Strategy

**Business Goals → KPIs → Metrics:**
- Cost per lead (CPL)
- Lifetime value (LTV)
- Customer acquisition cost (CAC)
- CAC payback period
- Retention rate

**Attribution Model:**
- First touch
- Last touch
- Data-driven
- Multi-touch
- MMM hybrid

**Reporting Cadence:**
- Daily (campaigns)
- Weekly (performance review)
- Monthly (strategic)
- Quarterly (planning)

### 2. Tracking Implementation Spec

**Event Taxonomy:**
- Naming conventions
- Event descriptions
- Parameters required
- Example payloads

**Key Events to Track:**
- Page views (GA4: `page_view`)
- CTA clicks (GA4: `click`)
- Form submissions (GA4: `form_submit`)
- Add to cart (GA4: `add_to_cart`)
- Initiate checkout (GA4: `begin_checkout`)
- Purchase (GA4: `purchase`)
- Lead generated (GA4: `generate_lead`)

**Tool-Specific Implementation:**
- **GA4:** Use the Google Tag (gtag.js) or GTM. Configure "Enhanced Measurement" for scrolls, clicks, and video engagement. Ensure `debug_mode: true` during testing.
- **GTM:** Implement a single container per domain. Use "Workspace Versions" to track changes. Prioritize "Triggers" that fire on specific data layer events rather than just URL patterns.
- **Meta CAPI:** Use Server-side GTM to mirror browser events. deduplicate using `event_id`.

**Consent Handling:**
- Cookie consent logic
- Server-side tracking
- Privacy compliance

### 3. Dashboard Blueprint

**Executive Dashboard:**
- Revenue metrics
- CAC and LTV
- Channel performance
- Trend lines

**Marketing Dashboard:**
- Campaign performance
- Conversion rates
- Attribution breakdown
- Budget pacing

**Paid Media Dashboard:**
- ROAS by platform
- CPL/CPA trends
- Ad creative performance
- Audience performance

**Alerts to Configure:**
- CPL increases 20%+ WoW
- CVR drops below threshold
- ROAS below target
- Budget pacing off

### 4. QA & Maintenance

**Pre-Launch Checklist:**
- Tag Assistant validation
- Pixel Helper checks
- Conversion API testing
- Test conversion firing
- Cross-device testing

**Ongoing QA:**
- Weekly quick audits
- Monthly deep dives
- Quarterly reviews

**Change Management:**
- New campaign setup
- Offer launch protocol
- Tag deployment SOP

### 5. Enablement Materials

**Metric Definitions:**
- Plain-English explanations
- How to interpret each
- Decision triggers

**Glossary:**
- Tracking terms
- Dashboard terminology
- Attribution concepts

## Essential Tracking Components

### Acquisition Tracking

**UTM Governance:**
- Required parameters
- Naming patterns
- Documentation

**Source Mapping:**
- Channel definitions
- Medium categories
- Campaign naming

**Lead-to-Revenue Stitching:**
- Form IDs
- Click IDs
- Offline conversions

### Onsite Analytics

**Core Events:**
- Page views
- Scroll depth
- CTA clicks
- Form interactions
- Video plays

**Funnel Steps:**
- Key conversion points
- Drop-off tracking
- Micro-conversions

### Ecommerce Tracking

**Transaction Data:**
- Transaction IDs
- Product SKUs
- Revenue and tax
- Discounts applied

**Enhanced Ecommerce:**
- Product impressions
- Add to cart
- Checkout steps
- Purchase complete

### Lifecycle Metrics

**Activation:**
- Time to value
- Onboarding completion
- Feature adoption

**Retention:**
- Login frequency
- Feature usage
- Support tickets
- Churn signals

## Privacy & Compliance

**Consent Management:**
- Cookie banner logic
- Preference centers
- Regional rules

**Data Policies:**
- Retention periods
- Deletion workflows
- Processor documentation

## Quality Checklist

- Every KPI ties to business objective
- Tracking IDs consistent end-to-end
- Documented deployment/rollback process
- Privacy updates addressed
- Dashboards are actionable, not vanity

## Additional Resources

### Reference Files
- **`references/tracking-specs.md`** - Event taxonomy and specifications
