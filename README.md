# ClickCampaigns for Claude Code

> Build production-ready marketing campaigns entirely inside Claude Code, Cursor, or any AI coding agent.

**Alex**, your AI Campaign Manager, coordinates a team of 22 marketing specialists to create complete campaign assets: HTML funnel pages, email sequences, VSL scripts, ad copy, webinar slide decks, lead magnet PDFs, and more — all from natural language requests.

---

## What This Is

ClickCampaigns is a **prompt engineering framework** packaged as a portable project folder. Drop it into any AI coding environment (Claude Code, Cursor, Windsurf, Gemini CLI) and you get:

- **22 specialized marketing agents** with detailed personas, backstories, and expertise areas
- **26 funnel types** with complete implementation skill files
- **25+ task categories** covering every marketing channel
- **Production skills** for generating HTML, PowerPoint, PDF, and Word documents
- **First-run setup wizard** — configures for solo marketers or agencies
- **Client/campaign organization** with brand kit management
- **Image integration** via Pexels (stock photos) and Google Gemini (AI-generated images)
- **Clone Page** — scrape any webpage into a self-contained HTML file with Firecrawl
- **HTML-to-PDF** — convert any HTML page to pixel-perfect PDF with Playwright's Chromium engine

No SaaS subscription. No API beyond optional image generation and page cloning. Everything runs locally through your AI coding tool.

---

## Quick Start

### 1. Clone or Copy the Folder

Place the `ClickCampaigns-for-Claude-Code-in-Cursor/` folder anywhere on your machine.

### 2. Install Dependencies (Optional — for image generation, PDF, and page cloning)

```bash
cd .engine && npm run setup
cp .engine/.env.example .engine/.env
# Add your API keys to .engine/.env:
#   GEMINI_API_KEY=your-key    (AI image generation)
#   PEXELS_API_KEY=your-key    (stock photo search)
#   FIRECRAWL_API_KEY=your-key (Clone Page feature)
```

This installs npm packages and Playwright's Chromium browser (used for HTML-to-PDF conversion).

### 3. Open in Your AI Coding Tool

- **Claude Code**: Open the folder — `CLAUDE.md` loads automatically
- **Codex**: Open the folder — `AGENTS.md` loads automatically and points to `CLAUDE.md`
- **Cursor**: Open the folder and add `CLAUDE.md` as a project rule
- **Other AI agents**: Have the agent read `CLAUDE.md` at the start of each session

### 4. First-Time Setup

On first launch, Alex asks two questions:

1. **How will you use ClickCampaigns?**
   - **Business/Marketer (Solo mode)** — campaigns at the root, no client folders needed
   - **Agency mode** — each client gets their own folder with brand files and campaigns

2. **Do you use Obsidian for Markdown?** — enables YAML frontmatter and callout syntax if yes

Alex configures the project automatically. This only happens once.

### 5. Start Working

```
"Create a campaign called 'Summer Launch'. I need a product launch funnel with
webinar registration, sales page, checkout, and a 12-email launch sequence."
```

---

## How It Works

### The Alex Orchestration Model

Alex (Campaign Manager) acts as the central coordinator. When you request work:

1. **Setup/Selection** — On first run, Alex asks about your workflow (solo vs agency). Then each session: solo mode asks about campaigns, agency mode asks about clients
2. **Brand Context** — Alex loads brand knowledge base and style guide
3. **Specialist Assignment** — Alex delegates to the right specialist(s) based on the work type
4. **Asset Creation** — Specialists follow their SKILL.md files with Ryan's direct response copy principles always active
5. **Copy Review** — Single-pass copy critique applied as diffs to the same file (no draft/final split), with design lock for HTML pages
6. **Consistency Check** — Cross-asset pass standardizes guarantees, pricing, dates, and offer names across all campaign assets
7. **File Output** — Everything saves to the organized `output-assets/` folder structure

### The Ryan Layer

Ryan's direct response copywriting principles are permanently loaded into every specialist who touches copy — not as a separate handoff, but as a permanent lens. After each asset is created, a single-pass copy review runs and changes are applied as diffs to the same file.

### Five Core Workflows

| Workflow | Who Leads | What It Produces |
|----------|-----------|-----------------|
| **A: Non-HTML Direct Response** | Ryan (Copywriter) + copy review | Email sequences, ad copy, VSL scripts as Markdown |
| **B: Short HTML Pages** | Cassidy (Designer) with Ryan's lens + copy review + design lock | Landing pages, opt-ins, thank-you pages |
| **C: Long-Form HTML Pages** | Ryan (Copywriter) → Cassidy designs with Ryan's lens + copy review + design lock | Sales pages, VSL pages, checkout pages |
| **D: Webinar Slides** | Tyler (Webinar) with Ryan's lens + copy review → Cassidy designs | Scripts + PPTX/HTML slide decks |
| **E: Lead Magnets & Books** | Kendall (Ghostwriter) with Ryan's lens + copy review → Lena designs | PDFs, DOCX, guides, books |

---

## Project Structure

The folder structure depends on which mode you choose during setup:

### After Setup: Solo Mode
```
ClickCampaigns/
├── .clickcampaigns.json              # Configuration (mode: solo)
├── CLAUDE.md                         # AI agent instructions
├── brand-kit/                        # Your brand files (shared across campaigns)
│   ├── brand-knowledge-base/
│   └── brand-style-guide/
├── campaigns/                        # Your campaigns
│   └── [campaign-name]/
│       └── output-assets/
│           ├── html/, documents/, emails/, ads/, presentations/, pdfs/, images/
```

### After Setup: Agency Mode
```
ClickCampaigns/
├── .clickcampaigns.json              # Configuration (mode: agency)
├── CLAUDE.md                         # AI agent instructions
├── clients/                          # Client workspaces
│   └── [client-name]/
│       ├── brand-kit/                # Client brand files (shared across campaigns)
│       │   ├── brand-knowledge-base/
│       │   └── brand-style-guide/
│       └── campaigns/
│           └── [campaign-name]/
│               └── output-assets/
│                   ├── html/, documents/, emails/, ads/, presentations/, pdfs/, images/
```

### Shared Structure (both modes)
```
├── CLAUDE.md                         # AI agent instructions (configured for your mode)
├── AGENTS.md                         # Pointer for Codex/other tools → reads CLAUDE.md
├── README.md                         # This file
│
└── .engine/                          # Engine internals (don't modify)
    ├── package.json                  # Node.js dependencies (image scripts)
    ├── setup/templates/              # Setup wizard templates
    ├── agents/                       # 22 specialist profiles
    ├── funnels/                      # 26 funnel type reference
    ├── tasks/                        # 25+ task category reference
    ├── templates/                    # Brand kit templates
    │
    ├── skills-and-instructions/skills/
    │   ├── funnels/                  # 26 funnel skill files
    │   ├── tasks/                    # 25+ task skill files
    │   └── production/              # HTML, PPTX, PDF, DOCX production skills
    │
    └── scripts/                     # Image, clone page, and PDF utilities
```

---

## The Specialist Team

Alex coordinates 22 marketing specialists, each with a distinct persona, expertise, and task assignments.

### Core Specialists

| Specialist | Role | Primary Work |
|------------|------|-------------|
| **Alex** | Campaign Manager | Orchestration, planning, client coordination |
| **Ryan** | Direct Response Copywriter | VSL scripts, sales pages, ad copy, copy critiques |
| **Cassidy** | Website Designer | HTML page design and implementation |
| **Paige** | Email Marketing Expert | All email and SMS sequences |
| **Tyler** | Webinar Specialist | Webinar scripts and slide decks |
| **Kendall** | Book Ghostwriter | Books, long-form content, lead magnets |
| **Dylan** | SEO & Content Strategist | SEO, content strategy, blog posts |
| **Alexis** | Funnel Architect | Funnel strategy and conversion optimization |
| **Jordan** | Website Strategist | Website UX and conversion optimization |
| **Cole** | Facebook Ads Expert | Meta ad campaigns |
| **Lena** | Graphic Designer | Visual assets, design briefs, PDF layouts |

### Additional Specialists

| Specialist | Role |
|------------|------|
| **Kayla** | Instagram Specialist |
| **Reid** | LinkedIn Marketing Expert |
| **Aubrey** | TikTok Specialist |
| **Morgan** | X/Twitter Specialist |
| **Brianna** | Video Marketing |
| **Chase** | Media Buyer |
| **Miles** | Illustrator |
| **Devin** | Marketing Automation |
| **Taylor** | PR Specialist |
| **Sage** | Analytics & Tracking |
| **Jamie** | Course & Education |

Full profiles with backstories and special instructions: [.engine/agents/Agents-List.md](.engine/agents/Agents-List.md)

---

## Available Funnels (26 Types)

| Funnel Type | Use Case |
|-------------|----------|
| **Product Launch (PLF)** | Jeff Walker-style launch with pre-launch content drops |
| **VSL / Sales Hybrid** | Video sales letter with long-form sales page |
| **Live Webinar** | Registration → webinar → offer → follow-up |
| **Automated Webinar** | Evergreen webinar funnel |
| **Tripwire / SLO** | Low-ticket frontend with upsell stack |
| **Book Funnel** | Free + shipping book offer |
| **High Ticket (VSL → App)** | VSL to application to sales call |
| **Challenge** | Multi-day challenge leading to offer |
| **Quiz / Assessment** | Lead qualification through quiz |
| **Membership** | Recurring subscription funnel |
| **Ecom (One-Page)** | Single-product direct response ecommerce |
| **Ecom (Catalog)** | Multi-product catalog storefront |
| **Waitlist / Event Registration** | Pre-launch list building |
| **Discovery Call** | Consultation booking funnel |
| **Shock & Awe Launch** | High-impact launch sequence |
| **Freemium / Free Trial** | Software trial conversion |
| **Affiliate / Referral** | Partner recruitment funnels |

Plus 9 more specialized funnel types. Each has available pages (opt-in, sales, checkout, upsell, downsell, thank you, etc.).

Full details: [.engine/funnels/Funnel-Pages-Checklist.md](.engine/funnels/Funnel-Pages-Checklist.md)

---

## Available Tasks (25+ Categories)

### Copywriting
- VSL Script (John Benson + Caleb O'Dowd methodology)
- Long-form Sales Letter (direct response frameworks)

### Email & SMS
- Welcome Series (1-12 emails)
- Nurture Sequence
- Launch Sequence
- Affiliate Swipe Pack
- Webinar sequences (invitation, reminders, no-show, follow-up)
- Reactivation / Winback

### Paid Ads
- Meta Lead Gen (Facebook/Instagram)
- YouTube VSL Ads
- Google Search Ads
- TikTok Spark Ads
- LinkedIn Lead Gen

### Website
- Core Pages (Home, About, Services, Contact)
- Case Studies
- Booking / Calendar pages
- Legal & Policy pages

### Content & Lead Magnets
- Blog articles and content plans
- PDF guides, checklists, workbooks
- Books (MVB, short, full-length)

### Events & Presentations
- Webinar scripts with slide decks (PPTX + HTML)
- Speaker reels and presentation outlines

### And More
SEO strategy, social media systems, CRM automation, analytics setup, design briefs, course launches, ecommerce extras, influencer partnerships...

Full details: [.engine/tasks/Task-Checklist.md](.engine/tasks/Task-Checklist.md)

---

## Brand Kit System

Your brand kit provides context for all generated assets.

### Brand Knowledge Base
Captures your business identity — story, audience, offer, voice, differentiators, credibility, and competitive positioning. This drives the **copy** in every asset.

### Brand Style Guide
Captures your visual identity — colors, fonts, imagery style, brand personality. This drives the **design** of HTML pages, PDFs, and presentations.

### Template Files
Start from the included templates:
- [.engine/templates/brand-knowledge-base-template.md](.engine/templates/brand-knowledge-base-template.md)
- [.engine/templates/brand-style-guide-template.md](.engine/templates/brand-style-guide-template.md)

### Brand File Locations

| Level | Solo Mode | Agency Mode |
|-------|-----------|-------------|
| **Shared** | `brand-kit/` (project root) | `clients/[client]/brand-kit/` |
| **Campaign override** | `campaigns/[campaign]/brand-kit/` | `clients/[client]/campaigns/[campaign]/brand-kit/` |

Alex checks both levels and uses campaign-specific files when present.

---

## Styling System

The brand knowledge base is **always used for copy**. The brand style guide is used selectively based on asset type:

| Asset Type | Default Style | Alex Asks? | Rationale |
|------------|---------------|------------|-----------|
| **Funnel pages** | Direct response | Yes | Conversion > aesthetics |
| **Brand websites** | Full brand | No | Brand representation |
| **Presentations** | Professional + brand hints | Yes | Focus on speaker |
| **Lead magnets / PDFs** | Full brand | No | Credibility pieces |
| **Books** | Full brand | No | Authority assets |
| **Emails** | Minimal / plain text | No | Deliverability |

### Funnel Page Design Options

For funnel pages, Alex asks three questions:

**1. Styling approach:**
- **Direct response style** (recommended) — proven conversion patterns, high-contrast CTAs
- **Full brand style guide** — match corporate look
- **DR with brand hints** — DR patterns + brand colors/fonts

**2. Design era** (if direct response or brand hints):
- **Classic ClickFunnels** — traditional 2015-2020 aesthetic (white backgrounds, bold ALL CAPS headlines, bright red/orange/green CTAs, yellow urgency highlights, "As Seen On" bars, thick borders)
- **Modern Premium** — contemporary 2024+ aesthetic (elegant serif + sans-serif typography, gradient CTA buttons, subtle urgency, generous whitespace, soft card shadows)

**3. Theme** (if Modern Premium):
- **Dark theme** — dark backgrounds, light text, dramatic feel
- **Light theme** — light backgrounds, dark text, accessible feel

---

## Production Skills

Production skills ensure high-quality final output. Available as both skill files (any AI agent) and Claude Code slash commands.

| Asset Type | Skill File | Claude Code Command |
|------------|-----------|---------------------|
| **HTML pages** | `.engine/skills-and-instructions/skills/production/frontend-design/SKILL.md` | `/frontend-design` |
| **Copy critique** | `.engine/skills-and-instructions/skills/production/copy-critique/SKILL.md` | — |
| **PowerPoint decks** | `.engine/skills-and-instructions/skills/production/pptx/SKILL.md` | `/pptx` |
| **PDF documents** | `.engine/skills-and-instructions/skills/production/pdf/SKILL.md` | `/pdf` |
| **Word documents** | `.engine/skills-and-instructions/skills/production/docx/SKILL.md` | `/docx` |

### How Skills Work Together

- **Marketing skills** (`.engine/skills-and-instructions/skills/funnels/`, `.engine/skills-and-instructions/skills/tasks/`) = **WHAT** to write (frameworks, structure, persuasion)
- **Production skills** (`.engine/skills-and-instructions/skills/production/`) = **HOW** to output it (design, formatting, file generation)
- **Copy critique** (`.engine/skills-and-instructions/skills/production/copy-critique/`) = **QUALITY** — single-pass direct response review applied to every asset

### Example: Building a Sales Page

1. Read the marketing skill: `.engine/skills-and-instructions/skills/funnels/vsl-hybrid/SKILL.md`
2. Ryan writes the copy following direct response principles
3. Read the production skill: `.engine/skills-and-instructions/skills/production/frontend-design/SKILL.md`
4. Cassidy creates production-quality HTML following design guidelines

---

## HTML Standards

All HTML assets are production-ready, self-contained single files.

### Required CDN Includes

```html
<!-- Tailwind CSS (v3 CDN - required for single-file pages) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Custom colors (if page uses custom Tailwind classes) -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          // Define every custom color this page uses
        }
      }
    }
  }
</script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>document.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>
```

### Using Lucide Icons

```html
<i data-lucide="check-circle" class="w-6 h-6 text-green-500"></i>
<i data-lucide="arrow-right" class="w-5 h-5"></i>
<i data-lucide="star" class="w-4 h-4 text-yellow-400"></i>
```

### Quality Standards

- **Mobile-responsive** — works on all devices
- **Self-contained** — single HTML file, no build step required
- **Real images** — Pexels URLs for stock photos, no placeholders
- **Production-ready** — deploy immediately

---

## Image Integration

Two image sources are available for campaign assets:

| Source | Best For | Speed |
|--------|----------|-------|
| **Pexels** (stock photos) | Hero images, backgrounds, lifestyle shots | Instant |
| **Gemini** (AI-generated) | Custom branded visuals, specific scenes, product mockups | 15-20 sec |

### Usage

**Search Pexels for stock photos:**
```bash
node .engine/scripts/pexels-search.js "business team celebrating" 5
```
Returns URLs you can use directly in HTML/CSS.

**Generate AI image with Gemini:**
```bash
# Path depends on your mode (solo or agency):
node .engine/scripts/generate-image.js "Professional team in modern office" campaigns/[campaign]/output-assets/images/hero.png
```
Saves image file to specified path.

### Assets That Need Images

| Asset Type | Typical Images |
|------------|----------------|
| **Landing pages** | Hero image, background |
| **Sales pages** | Hero, testimonial photos, product shots |
| **PDFs / Lead magnets** | Cover image, chapter headers, illustrations |
| **Presentations** | Slide backgrounds, icons, diagrams |
| **Ad creatives** | Primary image for each ad variation |

---

## Clone Page

Clone any existing webpage into a self-contained HTML file. Uses [Firecrawl](https://www.firecrawl.dev/) to scrape the page, embed all CSS inline, remove tracking scripts, and extract the site's branding.

**Requires:** `FIRECRAWL_API_KEY` in `.engine/.env`

```bash
# Solo mode:
node .engine/scripts/clone-page.js "https://example.com/sales-page" campaigns/[campaign]/output-assets/html/cloned-page.html

# Agency mode:
node .engine/scripts/clone-page.js "https://example.com/sales-page" clients/[client]/campaigns/[campaign]/output-assets/html/cloned-page.html
```

**What it produces:**
- **`cloned-page.html`** — Self-contained HTML with all CSS embedded, images as absolute URLs, tracking scripts removed
- **`cloned-page-branding.md`** — Extracted brand analysis (colors, fonts, typography, button styles)

**Use cases:**
- Clone a competitor's page as a starting point, then rewrite the copy with your brand voice
- Study a page's design system via the branding report
- Use a great layout as a structural template for your own funnel

---

## HTML to PDF

Convert any HTML page into a professional PDF using Playwright's Chromium engine. This is the **highest-quality approach** for lead magnets, branded reports, eBooks, and any document where design matters — full CSS support including flexbox, grid, custom fonts, gradients, and shadows.

```bash
# Basic conversion:
node .engine/scripts/html-to-pdf.js campaigns/[campaign]/output-assets/html/lead-magnet.html

# Custom output path:
node .engine/scripts/html-to-pdf.js input.html output.pdf

# With options:
node .engine/scripts/html-to-pdf.js input.html output.pdf --page-numbers --letter
node .engine/scripts/html-to-pdf.js input.html output.pdf --landscape --no-margin --scale=0.8
```

**Options:** `--landscape`, `--letter` (US Letter vs A4), `--no-margin`, `--scale=N`, `--header="text"`, `--footer="text"`, `--page-numbers`, `--no-background`, `--wait=N`

**One-time setup:** `npx playwright install chromium` (included in `cd .engine && npm run setup`)

**Workflow:** Alex's team builds beautiful HTML/CSS first (Kendall writes, Lena designs), then converts to PDF — the PDF inherits all the styling.

---

## Marketing Methodologies

The skill files encode proven direct response and digital marketing frameworks:

| Area | Frameworks & Influences |
|------|------------------------|
| **VSL Scripts** | John Benson + Caleb O'Dowd hybrid (14-part structure) |
| **Email Sequences** | Gary Halbert, Frank Kern, Mike Filsaime principles |
| **Landing Pages** | Russell Brunson, Anik Singal, Mike Filsaime frameworks |
| **Sales Letters** | Gary Halbert, John Carlton, Dan Kennedy, Clayton Makepeace |
| **Webinars** | Perfect Webinar framework |
| **Product Launches** | Jeff Walker's Product Launch Formula (PLF) |
| **Funnels** | Mike Filsaime's Launch Tree methodology |

---

## Workflow Details

### Workflow A: Non-HTML Direct Response

**Emails, ad copy, VSL scripts, sales letters (as documents)**

Ryan (Direct Response Copywriter) creates the asset with his principles baked in:
1. Ryan writes the copy → Markdown document
2. Single-pass copy review → apply improvements as diffs to the same file
3. Save to appropriate folder (`emails/`, `ads/`, `documents/`)

**Examples:** Email sequences, Meta ads, YouTube ad scripts, VSL scripts, affiliate swipe copy

### Workflow B: Short HTML Pages (Design-First + Copy Review)

**Pages with headlines, bullets, and CTAs — not long-form copy**

Cassidy (Website Designer) creates the page with Ryan's copy principles loaded:
1. For funnel pages, ask about styling first
2. Cassidy creates HTML with strong copy from the start (Ryan's principles baked in)
3. Single-pass copy review — apply improvements as diffs to the same file
4. Design lock — verify copy changes haven't broken layout or responsive behavior

**Output files:**
- `html/[page-name].html` — The finished page (copy already refined)
- `documents/[page-name]-copy-critique.md` — What was changed and why (user reference)

**Pages using this workflow:** Opt-in pages, webinar registration, thank you pages, simple checkout, about pages, contact pages

### Workflow C: Long-Form HTML Pages (Copy-First)

**Sales pages, VSL pages, and any page with substantial persuasion copy**

Ryan (Copywriter) leads, Cassidy (Designer) implements with Ryan's principles loaded:
1. Ryan writes complete copy first → Markdown document (4,000-10,000+ words)
2. Cassidy designs HTML around the copy with Ryan's principles still active
3. Single-pass copy review → apply final improvements as diffs
4. Design lock — verify copy changes haven't broken layout

**Output files:**
- `documents/[page-name]-copy.md` — Ryan's full copy document
- `html/[page-name].html` — The finished designed page (copy already refined)
- `documents/[page-name]-copy-critique.md` — What was changed and why (user reference)

**Pages using this workflow:** Long-form sales pages, VSL pages with sales copy below, checkout pages with full offer copy, upsell/downsell pages

### Workflow D: Webinar Slides

**Webinar presentations with script**

Tyler (Webinar Specialist) leads with Ryan's principles loaded, Cassidy designs:
1. Tyler writes the complete webinar script (50+ slides with speaker notes, Ryan's persuasion baked in)
2. Single-pass copy review → apply improvements as diffs to the script
3. Alex asks about format (PPTX, HTML, or both) and styling
4. Cassidy designs the slide deck (5 words max per slide rule)

**Output files:**
- `documents/webinar-script.md` — Full script with speaker notes (copy already refined)
- `presentations/webinar-slides.pptx` — PowerPoint (if chosen)
- `html/webinar-slides.html` — HTML Reveal.js slides (if chosen)

### Workflow E: Lead Magnets & Books

**PDFs, guides, checklists, workbooks, reports, and books**

Kendall (Book Ghostwriter) leads with Ryan's principles loaded, Lena (Graphic Designer) designs:
1. Kendall writes the complete content (Ryan's persuasion for headlines, CTAs, key takeaways)
2. Single-pass copy review → apply improvements as diffs
3. Alex asks: "Do you want PDF, DOCX (editable), or both?"
4. Lena designs the formatted document using full Brand Style Guide

**Asset types:** Freemium PDF guides, checklists and workbooks, research reports, MVB (30-50 pages), short books (50-100 pages), full books (100-200+ pages)

**Output files:**
- `documents/[asset-name]-content.md` — Full content (copy already refined)
- `pdfs/[asset-name].pdf` — Designed PDF (if chosen)
- `documents/[asset-name].docx` — Editable Word doc (if chosen)

---

## Commands

Quick commands you can use in conversation with Alex:

| Command | Solo Mode | Agency Mode |
|---------|-----------|-------------|
| `list campaigns` | Show all campaigns | Show campaigns for current client |
| `new campaign [name]` | Create a campaign folder | Create campaign under current client |
| `list clients` | — | Show all clients |
| `new client [name]` | — | Create a new client folder |
| `list funnels` | Show funnel types | Show funnel types |
| `list tasks` | Show task types | Show task types |
| `list specialists` | Show the team | Show the team |
| `status` | Current campaign + progress | Current client, campaign + progress |
| `reset setup` | Re-run setup wizard | Re-run setup wizard |

---

## Example Sessions

### Solo Mode

```
Alex:   What are we working on today?

User:   Create a campaign called "Q3 Launch". I need a VSL funnel
        with sales page, checkout, upsell, and a 7-email launch sequence.

Alex:   Created campaigns/q3-launch/ with output-assets folder.
        Let me check your brand files... Got it.

        For your VSL funnel, I'll build:
        1. VSL Page  2. Checkout Page  3. Upsell Page  4. Thank You Page

        For the sales page styling — do you want:
        1. Direct response style (recommended)
        2. Full brand style guide
        3. DR with brand hints

        Starting with the VSL script. Handing off to Ryan...
```

### Agency Mode

```
Alex:   Which client are we working with today?

User:   Acme SaaS

Alex:   Got it. What would you like to build for Acme SaaS?

User:   Create a campaign called "Q3 Launch". I need a VSL funnel
        with sales page, checkout, upsell, and a 7-email launch sequence.

Alex:   Created clients/acme-saas/campaigns/q3-launch/ with output-assets folder.
        Starting with the VSL script. Handing off to Ryan...
```

---

## Previewing HTML Files

**Option 1: Live Server Extension (Recommended)**
Install the "Live Server" extension by ritwickdey in VS Code/Cursor. Right-click any HTML file → "Open with Live Server" for auto-refresh on save.

**Option 2: Node.js Server**
```bash
# Solo mode:
npx serve campaigns/[campaign-name]/output-assets/html
# Agency mode:
npx serve clients/[client-name]/campaigns/[campaign-name]/output-assets/html
```

**Option 3: Open Directly**
Double-click the HTML file in Finder — works fine since all files are self-contained.

---

## Compatibility

| AI Coding Tool | Auto-Reads | Setup |
|----------------|-----------|-------|
| **Claude Code** | `CLAUDE.md` | Just open the folder — works immediately |
| **Cursor** | `.cursorrules` | Add `CLAUDE.md` as a project rule, or read it at session start |
| **Codex (OpenAI)** | `AGENTS.md` | `AGENTS.md` loads automatically and points to `CLAUDE.md` |
| **Gemini CLI** | `GEMINI.md` | Have agent read `CLAUDE.md` at session start |
| **Windsurf** | `.windsurfrules` | Have agent read `CLAUDE.md` at session start |
| **Any AI agent** | Varies | Point the agent to read `CLAUDE.md` first |

### How the Instruction Files Work

| File | Purpose | Who reads it |
|------|---------|-------------|
| **`CLAUDE.md`** | AI agent instructions — starts as setup wizard, then configured for your mode | All tools (directly or via pointer) |
| **`AGENTS.md`** | Pointer file — tells agents to check setup and read `CLAUDE.md` | Codex and tools that look for AGENTS.md |
| **`.clickcampaigns.json`** | Configuration file — stores mode (solo/agency) and preferences | Created during setup, read by agents |
| **`.engine/setup/templates/`** | Mode-specific templates — used during setup and mode switching | Read by agents during setup only |
| **`README.md`** | Human-facing documentation (this file) | Developers on GitHub |

The system is AI-tool agnostic — the intelligence lives in the skill files and agent personas, not in any specific platform. `CLAUDE.md` is the canonical instruction set regardless of which tool you use.

---

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GEMINI_API_KEY` | Optional | AI image generation via Google Gemini |
| `PEXELS_API_KEY` | Optional | Stock photo search via Pexels API |
| `FIRECRAWL_API_KEY` | Optional | Clone Page feature (scrape any webpage) |

All API keys are optional. Core functionality (copy, funnels, emails, ads) works without any keys.

---

## File Reference

| What | Where |
|------|-------|
| AI agent instructions | `CLAUDE.md` (configured for your mode), `AGENTS.md` (pointer for Codex) |
| Setup configuration | `.clickcampaigns.json` (created during first-time setup) |
| Setup templates | `.engine/setup/templates/` (mode-specific CLAUDE.md/AGENTS.md templates) |
| Specialist profiles | [.engine/agents/Agents-List.md](.engine/agents/Agents-List.md) |
| Funnel reference | [.engine/funnels/Funnel-Pages-Checklist.md](.engine/funnels/Funnel-Pages-Checklist.md) |
| Task reference | [.engine/tasks/Task-Checklist.md](.engine/tasks/Task-Checklist.md) |
| Brand kit templates | `.engine/templates/` |
| Funnel skill files | `.engine/skills-and-instructions/skills/funnels/[type]/SKILL.md` |
| Task skill files | `.engine/skills-and-instructions/skills/tasks/[type]/SKILL.md` |
| Production skills | `.engine/skills-and-instructions/skills/production/[type]/SKILL.md` |
| Image scripts | `.engine/scripts/pexels-search.js`, `.engine/scripts/generate-image.js` |
| Clone page script | `.engine/scripts/clone-page.js` |
| HTML-to-PDF script | `.engine/scripts/html-to-pdf.js` |
| Campaign workspaces (solo) | `campaigns/[campaign-name]/` |
| Client workspaces (agency) | `clients/[client-name]/` |

---

## What You Can Build

With a single conversation, Alex and the team can produce:

- **Complete HTML funnel pages** — 5-15 page funnels with linked navigation
- **Email sequences** — welcome, launch, nurture, webinar, affiliate, winback
- **VSL scripts** — video sales letters with 14-part John Benson framework
- **Platform-specific ad copy** — Facebook, Google, TikTok, LinkedIn, YouTube
- **Lead magnets** — PDF guides, checklists, workbooks, calculators
- **Webinar presentations** — PPTX decks with themed slides + speaker scripts
- **Long-form sales letters** — direct response copy, 4,000-10,000+ words
- **Books** — MVB to full-length, with chapters, outlines, and designed PDFs
- **Brand websites** — multi-page with Home, About, Services, Contact, Blog
- **SEO strategies** — content plans, keyword research, technical audits
- **Social media systems** — content calendars, platform-specific strategies
- **CRM automations** — workflow design, tagging, segmentation

**All output is production-ready — deploy, send, or present immediately.**

---

*Built by Mike Filsaime. Powered by direct response marketing frameworks refined over 20+ years.*
