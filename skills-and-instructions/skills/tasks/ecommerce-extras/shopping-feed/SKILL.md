---
name: shopping-feed
description: This skill should be used when the user asks to "set up Google Shopping", "create product feed", "Merchant Center setup", "shopping ads feed", or mentions Google Merchant Center, product feeds, or shopping ads. Creates technical implementation plans for product feed optimization and Google Shopping campaigns.
---

# Shopping Feed & Merchant Center Setup

Optimize product feeds and configure Google Merchant Center to maximize visibility in Google Shopping results, drive qualified traffic, and increase sales through properly structured product data and feed optimization.

## Core Objectives

- Create compliant, optimized product feeds for Google Shopping
- Maximize product visibility in Google Shopping search results
- Optimize feed data for better ad performance and lower CPCs
- Ensure feed compliance with Google Merchant Center policies
- Automate feed updates to keep product data current

## Mandatory Elements

### 1. Product Feed Structure
- **Required Fields:** id, title, description, link, image_link, price, availability
- **Recommended Fields:** brand, gtin, mpn, condition, shipping, tax
- **Feed Format:** XML or CSV (XML preferred for automation)
- **Data Quality:** Accurate titles, descriptions, prices, images

### 2. Merchant Center Configuration
- **Account Setup:** Business verification and tax information
- **Feed Submission:** Primary feed + supplemental feeds (if needed)
- **Shipping Settings:** Accurate shipping costs by region
- **Tax Settings:** Tax rates by location (if applicable)

### 3. Feed Optimization
- **Title Optimization:** Include brand, product type, key features (150 chars max)
- **Description:** Detailed, keyword-rich descriptions (5,000 chars max)
- **Image Quality:** High-resolution images (minimum 100x100px, recommended 800x800px)
- **Category Mapping:** Accurate Google product category assignment

## Structure & Frameworks

### The "Feed-First" Framework
1. **Structure Data:** Organize product data in feed format
2. **Optimize Content:** Titles, descriptions, images for search
3. **Submit & Verify:** Upload to Merchant Center and fix errors
4. **Monitor & Optimize:** Track performance and refine feed data

### Feed Optimization Checklist
- **Titles:** Include brand, product name, key attributes, model number
- **Descriptions:** Keyword-rich, detailed, include all relevant features
- **Images:** High-quality, multiple angles, lifestyle images
- **Pricing:** Accurate, updated regularly, matches website
- **Availability:** Real-time inventory sync (if possible)
- **GTINs:** Include UPC/EAN/ISBN for better matching

## Voice & Tone Guidelines

- **Technical & Precise:** Use Google Shopping terminology accurately
- **Optimization-Focused:** Emphasize feed quality for better performance
- **Compliance-Aware:** Highlight policy requirements and best practices
- **Formatting:** Use tables for feed fields, checklists for setup steps

## Concrete Examples

### Optimized Product Title
```text
"Bad: Widget
Good: Brand Name Widget Pro - 10-Pack - Blue - Model XYZ123
Best: Brand Name Widget Pro 10-Pack Blue Model XYZ123 | Premium Quality | Fast Shipping"
```

### Product Feed XML Structure
```xml
<item>
  <id>PROD-12345</id>
  <title>Brand Name Widget Pro 10-Pack Blue Model XYZ123</title>
  <description>Premium quality widget set featuring 10 professional-grade widgets in blue. Perfect for [use case]. Includes [features].</description>
  <link>https://store.com/products/widget-pro-blue</link>
  <image_link>https://store.com/images/widget-pro-blue-800x800.jpg</image_link>
  <price>29.99 USD</price>
  <availability>in stock</availability>
  <brand>Brand Name</brand>
  <gtin>0123456789012</gtin>
  <condition>new</condition>
  <google_product_category>Home & Garden > Tools > Hand Tools</google_product_category>
</item>
```

## Quality Checklist

For every shopping feed plan, ask:
- [ ] Are all required fields present and accurate?
- [ ] Are product titles optimized with keywords and attributes?
- [ ] Are images high-quality and meet Google's requirements?
- [ ] Is pricing accurate and synced with website?
- [ ] Will this feed maximize product visibility and conversions?
