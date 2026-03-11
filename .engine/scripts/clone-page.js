/**
 * Clone Page — Scrape any webpage and save as self-contained HTML
 * Usage: node scripts/clone-page.js "https://example.com" [output-path]
 *
 * Scrapes the target URL using Firecrawl, fetches all external CSS,
 * embeds everything into a single self-contained HTML file, and
 * extracts branding data (colors, fonts, typography).
 *
 * Requires FIRECRAWL_API_KEY in .env
 * Get your key at: https://www.firecrawl.dev/
 */

import Firecrawl from '@mendable/firecrawl-js';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { config } from 'dotenv';

config();

// ─────────────────────────────────────────────
// CSS Fetching & Embedding
// ─────────────────────────────────────────────

async function fetchExternalCSS(html, baseUrl) {
  const cssContents = [];
  const linkRegex = /<link[^>]*href=["']([^"']+)["'][^>]*>/gi;
  const urls = new Set();
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    const fullTag = match[0];
    const href = match[1];
    if (fullTag.includes('rel="stylesheet"') || fullTag.includes("rel='stylesheet'")) {
      urls.add(href);
    }
  }

  if (urls.size === 0) return cssContents;

  console.log(`   Found ${urls.size} external stylesheet(s) — fetching...`);

  for (const url of Array.from(urls)) {
    try {
      const absoluteUrl = new URL(url, baseUrl).href;
      const response = await fetch(absoluteUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ClickCampaigns/1.0)' },
      });
      if (response.ok) {
        const css = await response.text();
        cssContents.push(`/* Source: ${absoluteUrl} */\n${css}`);
      }
    } catch (e) {
      // Skip failed CSS — non-critical
    }
  }

  console.log(`   Embedded ${cssContents.length} stylesheet(s)`);
  return cssContents;
}

function embedCSSInHTML(html, cssContents) {
  if (cssContents.length === 0) return html;

  const styleBlock = `<style type="text/css">\n${cssContents.join('\n\n')}\n</style>`;

  if (html.includes('</head>')) {
    return html.replace('</head>', `${styleBlock}\n</head>`);
  }
  if (html.includes('<head>')) {
    return html.replace('<head>', `<head>\n${styleBlock}`);
  }
  return styleBlock + html;
}

// ─────────────────────────────────────────────
// HTML Cleanup
// ─────────────────────────────────────────────

function removeTrackingScripts(html) {
  // Remove common analytics/tracking scripts to keep the clone clean
  const patterns = [
    // Google Analytics / Tag Manager
    /<script[^>]*(?:google-analytics|googletagmanager|gtag|ga\.js|analytics\.js)[^>]*>[\s\S]*?<\/script>/gi,
    // Facebook Pixel
    /<script[^>]*(?:fbevents|facebook\.net\/en_US\/fbevents|fbq\()[\s\S]*?<\/script>/gi,
    // HubSpot, Hotjar, Intercom, Drift, etc.
    /<script[^>]*(?:hs-scripts|hotjar|intercom|drift|crisp|tawk|zendesk)[^>]*>[\s\S]*?<\/script>/gi,
    // Generic noscript tracking pixels
    /<noscript[^>]*>[\s\S]*?(?:facebook|google|analytics)[\s\S]*?<\/noscript>/gi,
  ];

  let cleaned = html;
  for (const pattern of patterns) {
    cleaned = cleaned.replace(pattern, '');
  }
  return cleaned;
}

function makeImagesAbsolute(html, baseUrl) {
  // Convert relative image src to absolute URLs
  return html.replace(
    /(<img[^>]*src=["'])(?!https?:\/\/|data:)([^"']+)(["'])/gi,
    (match, prefix, src, suffix) => {
      try {
        const absoluteUrl = new URL(src, baseUrl).href;
        return `${prefix}${absoluteUrl}${suffix}`;
      } catch {
        return match;
      }
    }
  );
}

function addSourceComment(html, sourceUrl) {
  const comment = `<!-- Cloned from: ${sourceUrl} | Date: ${new Date().toISOString().split('T')[0]} | Tool: ClickCampaigns Clone Page -->\n`;
  if (html.includes('<!DOCTYPE') || html.includes('<!doctype')) {
    return html.replace(/(<!DOCTYPE[^>]*>|<!doctype[^>]*>)/i, `$1\n${comment}`);
  }
  return comment + html;
}

// ─────────────────────────────────────────────
// Branding Extraction → Markdown Report
// ─────────────────────────────────────────────

function formatBrandingReport(branding, metadata, sourceUrl) {
  if (!branding) return null;

  const lines = [];
  lines.push(`# Cloned Page — Brand Analysis`);
  lines.push(`\n**Source:** ${sourceUrl}`);
  lines.push(`**Cloned:** ${new Date().toISOString().split('T')[0]}`);
  if (metadata?.title) lines.push(`**Page Title:** ${metadata.title}`);
  if (metadata?.description) lines.push(`**Meta Description:** ${metadata.description}`);

  // Color scheme
  if (branding.colorScheme) {
    lines.push(`\n## Color Scheme\n`);
    lines.push(`**Mode:** ${branding.colorScheme}`);
  }

  // Colors
  if (branding.colors) {
    lines.push(`\n## Colors\n`);
    lines.push(`| Role | Color |`);
    lines.push(`|------|-------|`);
    for (const [key, value] of Object.entries(branding.colors)) {
      if (value) lines.push(`| ${key} | \`${value}\` |`);
    }
  }

  // Typography
  if (branding.typography?.fontFamilies || branding.fonts) {
    lines.push(`\n## Typography\n`);
    if (branding.typography?.fontFamilies) {
      const ff = branding.typography.fontFamilies;
      if (ff.heading) lines.push(`- **Heading Font:** ${ff.heading}`);
      if (ff.primary) lines.push(`- **Primary Font:** ${ff.primary}`);
      if (ff.code) lines.push(`- **Code Font:** ${ff.code}`);
    }
    if (branding.fonts?.length) {
      lines.push(`- **Detected Fonts:** ${branding.fonts.map(f => f.family).join(', ')}`);
    }
    if (branding.typography?.fontSizes) {
      const fs = branding.typography.fontSizes;
      lines.push(`\n**Font Sizes:**`);
      if (fs.h1) lines.push(`- H1: ${fs.h1}`);
      if (fs.h2) lines.push(`- H2: ${fs.h2}`);
      if (fs.h3) lines.push(`- H3: ${fs.h3}`);
      if (fs.body) lines.push(`- Body: ${fs.body}`);
    }
    if (branding.typography?.fontWeights) {
      const fw = branding.typography.fontWeights;
      lines.push(`\n**Font Weights:**`);
      if (fw.regular) lines.push(`- Regular: ${fw.regular}`);
      if (fw.medium) lines.push(`- Medium: ${fw.medium}`);
      if (fw.bold) lines.push(`- Bold: ${fw.bold}`);
    }
  }

  // Spacing & Borders
  if (branding.spacing) {
    lines.push(`\n## Spacing\n`);
    if (branding.spacing.baseUnit) lines.push(`- **Base Unit:** ${branding.spacing.baseUnit}px`);
    if (branding.spacing.borderRadius) lines.push(`- **Border Radius:** ${branding.spacing.borderRadius}`);
  }

  // Button Components
  if (branding.components) {
    lines.push(`\n## Button Styles\n`);
    if (branding.components.buttonPrimary) {
      const btn = branding.components.buttonPrimary;
      lines.push(`**Primary Button:**`);
      if (btn.background) lines.push(`- Background: \`${btn.background}\``);
      if (btn.textColor) lines.push(`- Text: \`${btn.textColor}\``);
      if (btn.borderRadius) lines.push(`- Radius: ${btn.borderRadius}`);
    }
    if (branding.components.buttonSecondary) {
      const btn = branding.components.buttonSecondary;
      lines.push(`\n**Secondary Button:**`);
      if (btn.background) lines.push(`- Background: \`${btn.background}\``);
      if (btn.textColor) lines.push(`- Text: \`${btn.textColor}\``);
      if (btn.borderColor) lines.push(`- Border: \`${btn.borderColor}\``);
    }
  }

  // Images/Logos
  if (branding.images) {
    lines.push(`\n## Images\n`);
    if (branding.images.logo) lines.push(`- **Logo:** ${branding.images.logo}`);
    if (branding.images.favicon) lines.push(`- **Favicon:** ${branding.images.favicon}`);
    if (branding.images.ogImage) lines.push(`- **OG Image:** ${branding.images.ogImage}`);
  }

  lines.push(`\n---\n*Extracted by ClickCampaigns Clone Page*`);

  return lines.join('\n');
}

// ─────────────────────────────────────────────
// Main: Scrape + Process + Save
// ─────────────────────────────────────────────

async function clonePage(url, outputPath) {
  const client = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });

  console.log(`\n🔗 Cloning page: ${url}\n`);
  console.log(`   Scraping with Firecrawl (this may take 10-30 seconds)...`);

  // Scrape with Firecrawl — get raw HTML + branding data
  const result = await client.scrape(url, {
    formats: ['rawHtml', 'branding'],
    onlyMainContent: false,
    waitFor: 2000,
    timeout: 60000,
    actions: [
      { type: 'scroll', direction: 'down' },
      { type: 'wait', milliseconds: 500 },
      { type: 'scroll', direction: 'down' },
      { type: 'wait', milliseconds: 500 },
      { type: 'scroll', direction: 'down' },
      { type: 'wait', milliseconds: 500 },
      { type: 'scroll', direction: 'down' },
      { type: 'wait', milliseconds: 500 },
      { type: 'scroll', direction: 'down' },
      { type: 'wait', milliseconds: 1000 },
    ],
  });

  let html = result.rawHtml || '';

  if (!html) {
    console.error('❌ No HTML content returned. The page may be blocked or inaccessible.');
    process.exit(1);
  }

  console.log(`   ✅ Page scraped (${(html.length / 1024).toFixed(0)} KB raw HTML)`);

  // Step 1: Fetch and embed external CSS
  const cssContents = await fetchExternalCSS(html, url);
  html = embedCSSInHTML(html, cssContents);

  // Step 2: Make relative image URLs absolute
  html = makeImagesAbsolute(html, url);

  // Step 3: Remove tracking scripts
  html = removeTrackingScripts(html);

  // Step 4: Add source comment
  html = addSourceComment(html, url);

  // Ensure output directory exists
  const outputDir = dirname(resolve(outputPath));
  mkdirSync(outputDir, { recursive: true });

  // Save HTML
  writeFileSync(outputPath, html, 'utf-8');
  console.log(`\n   📄 HTML saved to: ${outputPath}`);
  console.log(`      File size: ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB`);

  // Save branding report if available
  const branding = result.branding || null;
  const metadata = result.metadata || {};

  if (branding) {
    const report = formatBrandingReport(branding, metadata, url);
    const brandingPath = outputPath.replace(/\.html?$/i, '-branding.md');
    writeFileSync(brandingPath, report, 'utf-8');
    console.log(`   🎨 Branding report saved to: ${brandingPath}`);

    // Print quick summary
    console.log(`\n   Brand Summary:`);
    if (branding.colorScheme) console.log(`   • Theme: ${branding.colorScheme}`);
    if (branding.colors?.primary) console.log(`   • Primary color: ${branding.colors.primary}`);
    if (branding.typography?.fontFamilies?.heading) console.log(`   • Heading font: ${branding.typography.fontFamilies.heading}`);
    if (branding.typography?.fontFamilies?.primary) console.log(`   • Body font: ${branding.typography.fontFamilies.primary}`);
  }

  console.log(`\n✅ Clone complete! Open the HTML file to see the result.\n`);

  return { html, branding, metadata };
}

// ─────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────

const url = process.argv[2];
const outputPath = process.argv[3] || 'cloned-page.html';

if (!url) {
  console.log(`
Clone Page — Scrape any webpage into a self-contained HTML file

Usage:
  node scripts/clone-page.js <url> [output-path]

Examples:
  node scripts/clone-page.js "https://example.com/sales-page" campaigns/my-campaign/output-assets/html/cloned-sales-page.html
  node scripts/clone-page.js "https://competitor.com/landing" cloned-page.html

What it does:
  1. Scrapes the full page (scrolls to trigger lazy-loaded content)
  2. Fetches all external CSS and embeds it inline (self-contained)
  3. Converts relative image URLs to absolute
  4. Removes tracking scripts (GA, FB Pixel, etc.)
  5. Extracts branding data (colors, fonts, typography) → saves as -branding.md
  6. Saves the clean HTML file

Requires: FIRECRAWL_API_KEY in .env (get one at https://www.firecrawl.dev/)
`);
  process.exit(1);
}

// Validate URL
try {
  new URL(url);
} catch {
  console.error(`❌ Invalid URL: "${url}"`);
  console.error('   Please provide a full URL including https://');
  process.exit(1);
}

if (!process.env.FIRECRAWL_API_KEY) {
  console.error('❌ FIRECRAWL_API_KEY not found in .env');
  console.error('   Get your API key at: https://www.firecrawl.dev/');
  console.error('   Then add it to your .env file: FIRECRAWL_API_KEY="your-key-here"');
  process.exit(1);
}

clonePage(url, outputPath).catch((error) => {
  console.error(`\n❌ Clone failed: ${error.message}`);
  if (error.message.includes('402') || error.message.includes('payment')) {
    console.error('   Your Firecrawl account may need credits. Check https://www.firecrawl.dev/');
  }
  if (error.message.includes('401') || error.message.includes('unauthorized')) {
    console.error('   Your FIRECRAWL_API_KEY may be invalid. Check your .env file.');
  }
  process.exit(1);
});
