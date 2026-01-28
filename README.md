# ClickCampaigns

A marketing campaign system for Claude Code. Build complete funnel pages, email sequences, VSL scripts, and ad copy with an AI team of 22 marketing specialists.

## Quick Start

1. Open this folder in Claude Code or Cursor
2. Tell Claude what you want to build:

```
"Create a campaign called 'Black Friday 2026'. Build me a product launch funnel with sales page and checkout."
```

Claude (as "Alex", Campaign Manager) will:
- Create the campaign folder structure
- Ask for your brand files
- Build production-ready assets

## What's Inside

```
ClickCampaigns/
├── CLAUDE.md           # Instructions for Claude Code
├── campaigns/          # Your campaigns (one folder per campaign)
├── templates/          # Brand file templates to fill out
├── funnels/            # Funnel type definitions
├── tasks/              # Task type definitions
├── agents/             # The 22 specialist profiles
├── scripts/            # Image generation utilities
└── skills-and-instructions/   # Detailed skill files
```

## Campaign Structure

Each campaign gets its own folder:

```
campaigns/black-friday-2026/
├── brand-kit/
│   ├── brand-knowledge-base/
│   └── brand-style-guide/
└── output-assets/
    ├── html/
    ├── documents/
    ├── emails/
    ├── ads/
    ├── presentations/
    ├── pdfs/
    └── images/
```

## Available Funnels

- Product Launch (PLF)
- VSL / Sales Hybrid
- Live Webinar
- Automated Webinar
- Tripwire / SLO
- Book Funnel
- High Ticket
- Challenge
- Quiz / Assessment
- Membership
- Ecommerce
- Waitlist / Event Registration
- Affiliate / Referral

## Available Tasks

- VSL Scripts & Sales Letters
- Email Sequences (welcome, launch, nurture, webinar)
- Paid Ads (Meta, Google, YouTube, TikTok, LinkedIn)
- Website Pages
- Lead Magnets & Books
- SEO & Content
- Webinar Slide Decks
- And more...

## Brand Files

For best results, provide:
1. **Brand Knowledge Base** - Business info, audience, offer, voice
2. **Brand Style Guide** - Colors, fonts, visual guidelines

**Templates included:**
- [templates/brand-knowledge-base-template.md](templates/brand-knowledge-base-template.md)
- [templates/brand-style-guide-template.md](templates/brand-style-guide-template.md)

Copy these to your campaign's `brand-kit/` folder and fill them out. Or describe your brand and Claude will create the docs.

## Setup

1. **Copy environment file and add your API keys:**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This enables Pexels stock photo search and Nano Banana Pro AI image generation.

3. **Open in Claude Code or Cursor**

## API Keys (Optional but Recommended)

| Service | Purpose | Get Key |
|---------|---------|---------|
| **Pexels** | Stock photos for all assets | [pexels.com/api](https://www.pexels.com/api/) |
| **Google Gemini** | AI image generation (Nano Banana Pro) | [ai.google.dev](https://ai.google.dev/) |

## Requirements

- Claude Code CLI or Cursor with Claude
- Node.js 18+ (for image generation scripts)
- This folder opened as your workspace

## Documentation

- [CLAUDE.md](CLAUDE.md) - Full instructions and capabilities
- [funnels/Funnel-Pages-Checklist.md](funnels/Funnel-Pages-Checklist.md) - All funnel types
- [tasks/Task-Checklist.md](tasks/Task-Checklist.md) - All task types
- [agents/Agents-List.md](agents/Agents-List.md) - The specialist team
