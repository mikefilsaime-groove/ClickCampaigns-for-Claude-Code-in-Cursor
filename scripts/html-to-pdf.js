/**
 * HTML to PDF — Convert any HTML file into a professional PDF
 * Usage: node scripts/html-to-pdf.js <input.html> [output.pdf] [options]
 *
 * Renders HTML using Playwright's Chromium engine for pixel-perfect output.
 * Supports full CSS (flexbox, grid, custom fonts, animations frozen at frame 0).
 *
 * Options:
 *   --landscape          Landscape orientation (default: portrait)
 *   --letter             US Letter size (default: A4)
 *   --no-margin          Remove all margins
 *   --scale=N            Scale factor 0.1-2.0 (default: 1)
 *   --header="text"      Add header text to every page
 *   --footer="text"      Add footer text to every page
 *   --page-numbers       Add page numbers to footer
 *   --print-background   Include background colors/images (default: true)
 *   --wait=N             Wait N milliseconds for JS/fonts to load (default: 1000)
 *
 * Requires: npx playwright install chromium (one-time setup)
 */

import { chromium } from 'playwright';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname, basename } from 'path';

// ─────────────────────────────────────────────
// Parse CLI Arguments
// ─────────────────────────────────────────────

function parseArgs(args) {
  const options = {
    input: null,
    output: null,
    landscape: false,
    format: 'A4',
    margin: { top: '0.75in', bottom: '0.75in', left: '0.75in', right: '0.75in' },
    scale: 1,
    headerTemplate: '',
    footerTemplate: '',
    displayHeaderFooter: false,
    printBackground: true,
    waitTime: 1000,
  };

  const positional = [];

  for (const arg of args) {
    if (arg === '--landscape') {
      options.landscape = true;
    } else if (arg === '--letter') {
      options.format = 'Letter';
    } else if (arg === '--no-margin') {
      options.margin = { top: '0', bottom: '0', left: '0', right: '0' };
    } else if (arg.startsWith('--scale=')) {
      options.scale = parseFloat(arg.split('=')[1]) || 1;
    } else if (arg.startsWith('--header=')) {
      options.headerTemplate = `<div style="font-size:10px; width:100%; text-align:center; color:#666;">${arg.split('=').slice(1).join('=')}</div>`;
      options.displayHeaderFooter = true;
    } else if (arg.startsWith('--footer=')) {
      options.footerTemplate = `<div style="font-size:10px; width:100%; text-align:center; color:#666;">${arg.split('=').slice(1).join('=')}</div>`;
      options.displayHeaderFooter = true;
    } else if (arg === '--page-numbers') {
      options.footerTemplate = `<div style="font-size:10px; width:100%; text-align:center; color:#999; padding:0 0.75in;">
        <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>`;
      options.displayHeaderFooter = true;
    } else if (arg.startsWith('--wait=')) {
      options.waitTime = parseInt(arg.split('=')[1]) || 1000;
    } else if (arg === '--no-background') {
      options.printBackground = false;
    } else if (!arg.startsWith('--')) {
      positional.push(arg);
    }
  }

  options.input = positional[0] || null;
  options.output = positional[1] || null;

  return options;
}

// ─────────────────────────────────────────────
// PDF Generation
// ─────────────────────────────────────────────

async function htmlToPdf(options) {
  const inputPath = resolve(options.input);

  if (!existsSync(inputPath)) {
    console.error(`❌ File not found: ${inputPath}`);
    process.exit(1);
  }

  // Default output path: same name but .pdf
  const outputPath = options.output
    ? resolve(options.output)
    : inputPath.replace(/\.html?$/i, '.pdf');

  // Ensure output directory exists
  const outputDir = dirname(outputPath);
  mkdirSync(outputDir, { recursive: true });

  console.log(`\n📄 Converting HTML to PDF`);
  console.log(`   Input:  ${inputPath}`);
  console.log(`   Output: ${outputPath}`);
  console.log(`   Format: ${options.format} ${options.landscape ? '(landscape)' : '(portrait)'}`);

  const startTime = Date.now();

  // Launch headless Chromium
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Load the HTML file
  const fileUrl = `file://${inputPath}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  // Wait for fonts, images, and any JS to settle
  if (options.waitTime > 0) {
    await page.waitForTimeout(options.waitTime);
  }

  // Wait for all images to load
  await page.evaluate(() => {
    return Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        }))
    );
  });

  // Wait for web fonts
  await page.evaluate(() => document.fonts?.ready);

  // Generate PDF
  const pdfOptions = {
    path: outputPath,
    format: options.format,
    landscape: options.landscape,
    margin: options.margin,
    scale: options.scale,
    printBackground: options.printBackground,
    displayHeaderFooter: options.displayHeaderFooter,
  };

  if (options.headerTemplate) pdfOptions.headerTemplate = options.headerTemplate;
  if (options.footerTemplate) pdfOptions.footerTemplate = options.footerTemplate;

  // If displaying header/footer, ensure margins have space
  if (options.displayHeaderFooter) {
    if (pdfOptions.margin.top === '0') pdfOptions.margin.top = '0.5in';
    if (pdfOptions.margin.bottom === '0') pdfOptions.margin.bottom = '0.5in';
  }

  await page.pdf(pdfOptions);

  await browser.close();

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const fileSize = readFileSync(outputPath).length;

  console.log(`\n   ✅ PDF created (${(fileSize / 1024).toFixed(0)} KB) in ${elapsed}s`);
  console.log(`\n   Open with: open "${outputPath}"\n`);

  return outputPath;
}

// ─────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────

const options = parseArgs(process.argv.slice(2));

if (!options.input) {
  console.log(`
HTML to PDF — Convert any HTML file into a professional PDF

Usage:
  node scripts/html-to-pdf.js <input.html> [output.pdf] [options]

Examples:
  node scripts/html-to-pdf.js campaigns/my-campaign/output-assets/html/sales-page.html
  node scripts/html-to-pdf.js sales-page.html sales-page.pdf --landscape
  node scripts/html-to-pdf.js lead-magnet.html output.pdf --page-numbers --letter
  node scripts/html-to-pdf.js report.html report.pdf --no-margin --scale=0.8

Options:
  --landscape          Landscape orientation (default: portrait)
  --letter             US Letter paper size (default: A4)
  --no-margin          Remove all page margins
  --scale=N            Scale 0.1-2.0 (default: 1)
  --header="text"      Header text on every page
  --footer="text"      Footer text on every page
  --page-numbers       Auto page numbers in footer
  --no-background      Skip background colors/images
  --wait=N             Wait N ms for content to load (default: 1000)

What it does:
  Renders your HTML with Chromium's engine (same as Chrome/Edge) for
  pixel-perfect PDF output. Supports modern CSS: flexbox, grid, custom
  fonts, gradients, shadows — everything that works in a browser.

Setup (one-time):
  npx playwright install chromium
`);
  process.exit(1);
}

htmlToPdf(options).catch((error) => {
  console.error(`\n❌ PDF generation failed: ${error.message}`);
  if (error.message.includes('Executable doesn\'t exist') || error.message.includes('browserType.launch')) {
    console.error('\n   Chromium not installed. Run this once:');
    console.error('   npx playwright install chromium\n');
  }
  process.exit(1);
});
