# Session Handoff — ClickCampaigns for Claude Code

> Paste this entire document into your first message in a new chat session so the AI can pick up where we left off.

---

## What This Project Is

**ClickCampaigns for Claude Code** is a template repo that turns Claude Code (or any AI agent in Cursor, Gemini CLI, etc.) into a full marketing campaign builder. It has:

- **22 marketing specialist personas** (Ryan the copywriter, Cassidy the designer, Paige the email expert, etc.) coordinated by "Alex" the Campaign Manager
- **68+ skill files** (`skills-and-instructions/skills/`) covering funnel pages, email sequences, ad copy, VSL scripts, webinar decks, lead magnets, books, and more
- **5 production skills** for outputting HTML, PDF, PPTX, DOCX, and copy critique
- **A setup wizard** (`setup/setup-wizard.md`) that configures the repo for solo use or agency use
- **Scripts** for Pexels image search, AI image generation (Nano Banana Pro), page cloning (Firecrawl), and HTML-to-PDF conversion (Playwright)

**Repo:** `https://github.com/mikefilsaime-groove/ClickCampaigns-for-Claude-Code-in-Cursor.git`

**Owner:** Mike Filsaime (mikefilsaime-groove on GitHub)

---

## Current State (as of March 5, 2026)

### Git Status
- **Branch `main`** at commit `b58a4a0` — clean, pushed, up to date with `origin/main`
- **Branch `test-campaign-march`** at commit `f8e75d0` — pushed to GitHub. Contains a full test campaign (Affiliate Pages demo) with 36 files including 12 HTML pages, email sequences, VSL scripts, webinar slides, and copy critiques. This was an accidental test run IN the template repo that was rescued to a branch.
- **Working tree:** CLEAN — nothing to commit

### Important: Dropbox Issue
This repo was previously stored in Dropbox which corrupted GitHub Desktop's git cache (phantom "commits to pull/push" that don't exist). The CLI always showed correct state. **The user plans to move this repo OUT of Dropbox** to a normal local directory and clone fresh from GitHub. If you're reading this, the move may have already happened.

---

## Key Architecture Decisions Made (Do Not Revisit)

### 1. Single Agent, Not Agent Teams
The 22 specialists are **personas within one Claude instance**, not separate agents. Claude plays the role of each specialist as needed. This is intentional — Agent Teams (experimental Claude Code feature) was evaluated and rejected as overkill/expensive/unstable.

### 2. The Ryan Layer (Always Active)
Ryan's direct response copywriting principles are **permanently loaded into every specialist** who touches copy. This is NOT a separate handoff step. When Cassidy designs an HTML page, she already has Ryan's copy expertise. When Paige writes emails, Ryan's principles are baked in. Think of it like Neo in The Matrix downloading skills — every specialist has Ryan's copy DNA from the start.

**Where this lives:**
- Documented in both `setup/templates/CLAUDE-solo.md` and `setup/templates/CLAUDE-agency.md` under "The Ryan Layer (Always Active)" section
- Each of the 5 workflows (A-E) references it

### 3. Single-Pass Copy Critique (Never Recursive)
After every copy-containing asset is created, a ONE-TIME copy review runs. This is critically important:

- **ONE pass only** — do not score, do not rate 1-100, do not iterate
- **Why:** LLMs will never rate their own output as perfect, creating infinite improvement loops. This was an explicit design decision to prevent that trap.
- **Apply changes as diffs** to the SAME file (no draft/final split)
- **HTML pages** get a critique markdown doc saved to `documents/[asset-name]-copy-critique.md`
- **Emails, ads, scripts** get silent fixes (no separate critique doc)
- **Design lock** — after copy changes, verify HTML layout/spacing/responsive behavior wasn't broken

**Master skill file:** `skills-and-instructions/skills/production/copy-critique/SKILL.md`

**Trigger blocks:** 55 skill files have a 5-line reminder appended pointing to the master skill:
```markdown
---

## Copy Review (Required)

After completing this asset, perform a single-pass copy review following `production/copy-critique/SKILL.md`. Apply changes as diffs to the same file. For HTML pages, save the critique to `documents/[asset-name]-copy-critique.md`.
```

### 4. Cross-Asset Consistency
After completing all assets in a campaign, a consistency pass standardizes:
- Guarantee terms (same period/language everywhere)
- Pricing and savings calculations
- Dates and deadlines
- Product/offer names and capitalization
- Copyright year
- Brand voice consistency
- CTA destinations (correct next step in funnel)

### 5. Subagent Parallelization (Permission, Not Directive)
Claude MAY spawn subagents when tasks are independent (e.g., opt-in page + email sequence simultaneously). This is a permission, not a requirement. Don't parallelize when one task depends on another (e.g., Workflow C where Ryan's copy must exist before Cassidy designs).

**Where this lives:** "Parallel Execution" section in both CLAUDE.md templates.

---

## The 5 Workflows

| Workflow | What | Process |
|----------|------|---------|
| **A: Non-HTML DR** | Emails, ad copy, VSL scripts | Specialist writes with Ryan's principles → silent copy review → apply diffs |
| **B: Short HTML** | Opt-ins, registration, thank you pages | Cassidy creates HTML with Ryan's principles baked in → copy review → design lock → save critique markdown |
| **C: Long-Form HTML** | Sales pages, VSL pages, checkout with full copy | Ryan writes complete copy doc → Cassidy designs HTML with Ryan's principles → copy review → design lock → save critique markdown |
| **D: Webinar Slides** | Webinar presentations | Tyler writes script with Ryan's principles → copy review → Cassidy designs slides |
| **E: Lead Magnets & Books** | PDFs, guides, books | Kendall writes with Ryan's principles → copy review → Lena designs |

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Main instructions (currently the setup wizard version — points to templates) |
| `setup/templates/CLAUDE-solo.md` | Full CLAUDE.md for solo mode — all workflows, Ryan Layer, styling guide |
| `setup/templates/CLAUDE-agency.md` | Full CLAUDE.md for agency mode — same but with client folder structure |
| `setup/setup-wizard.md` | First-run wizard that configures solo vs agency mode |
| `README.md` | Project overview, setup instructions, workflow descriptions |
| `AGENTS.md` | Pointer file to `agents/Agents-List.md` |
| `agents/Agents-List.md` | All 22 specialist personas with descriptions |
| `skills-and-instructions/skills/production/copy-critique/SKILL.md` | Master copy critique methodology |
| `skills-and-instructions/skills/production/frontend-design/SKILL.md` | HTML design skill (uses Tailwind v4 CDN + Lucide icons) |
| `skills-and-instructions/skills/production/pptx/SKILL.md` | PowerPoint production skill |
| `skills-and-instructions/skills/production/pdf/SKILL.md` | PDF production skill |
| `skills-and-instructions/skills/production/docx/SKILL.md` | Word document production skill |
| `skills-and-instructions/skills/funnels/*/SKILL.md` | 24 funnel type skills (PLF, VSL, webinar, tripwire, etc.) |
| `skills-and-instructions/skills/tasks/*/SKILL.md` | 31+ task skills (emails, ads, SEO, social, etc.) |
| `scripts/pexels-search.js` | Search Pexels for stock photos |
| `scripts/generate-image.js` | Generate AI images via Nano Banana Pro |
| `scripts/clone-page.js` | Clone any webpage with Firecrawl (requires FIRECRAWL_API_KEY) |
| `scripts/html-to-pdf.js` | Convert HTML to PDF with Playwright's Chromium |
| `funnels/Funnel-Pages-Checklist.md` | All funnel types and their available pages |
| `tasks/Task-Checklist.md` | All available task types |

---

## Folder Structure

```
ClickCampaigns-for-Claude-Code-in-Cursor/
├── CLAUDE.md                    # Main instructions (setup wizard version)
├── AGENTS.md                    # Pointer to agents list
├── README.md                    # Project overview
├── package.json                 # Node deps (pexels, playwright, pptxgenjs, etc.)
├── .env.example                 # API key template
├── .gitignore
├── agents/                      # Specialist persona definitions
├── brand-kit/                   # Shared brand files (empty in template)
│   ├── brand-knowledge-base/
│   └── brand-style-guide/
├── campaigns/                   # Campaign output (empty in template)
├── docs/                        # Documentation (this handoff file)
├── funnels/                     # Funnel type checklists
├── scripts/                     # Utility scripts
├── setup/                       # Setup wizard + CLAUDE.md templates
│   ├── setup-wizard.md
│   └── templates/
│       ├── CLAUDE-solo.md
│       └── CLAUDE-agency.md
├── skills-and-instructions/
│   └── skills/
│       ├── funnels/             # 24 funnel skill files
│       ├── tasks/               # 31+ task skill files
│       └── production/          # Production output skills
│           ├── copy-critique/
│           ├── frontend-design/
│           ├── pptx/
│           ├── pdf/
│           └── docx/
├── tasks/                       # Task type checklists
└── templates/                   # Reusable templates
```

---

## What Was Completed in This Session

1. **Git Rescue** — Test campaign accidentally run in template repo was branched to `test-campaign-march` and main restored to clean state
2. **Created** `skills/production/copy-critique/SKILL.md` — Master single-pass copy critique methodology
3. **Updated** both CLAUDE.md templates (solo + agency) with:
   - "The Ryan Layer (Always Active)" section
   - Rewritten Workflows A-E (Ryan baked in, copy review, design lock)
   - "Cross-Asset Consistency" section
   - "Parallel Execution" section (subagent permission)
4. **Appended** copy review trigger blocks to 55 skill files
5. **Updated** README.md with new workflow descriptions and production skills table
6. **Cleaned up** Dropbox ghost files, stale branches, untracked directories
7. **Pushed** everything to GitHub — both `main` and `test-campaign-march` branches

---

## Unresolved / Known Issues

1. **Dropbox corruption** — If this repo is still in Dropbox, GitHub Desktop will show phantom commits. The CLI (`git status`, `git log`) always shows the truth. Ignore GitHub Desktop's pull/push counters. Best fix: clone fresh to a non-Dropbox location.

2. **`test-campaign-march` branch** — Contains 36 files from a demo campaign (Affiliate Pages). It's on GitHub for safekeeping. Can be deleted when no longer needed for reference. It will NOT be merged to main.

3. **The `CLAUDE.md` in the repo root** is currently the setup wizard version (it tells users to run the setup wizard which then overwrites it with either CLAUDE-solo.md or CLAUDE-agency.md). This is correct for a template repo. When someone runs the setup wizard, it gets replaced.

---

## If the User Asks to Continue Building

The template repo is complete and ready to use. If Mike wants to:

- **Test the system** — Run the setup wizard, create a campaign, build assets
- **Improve skills** — Edit individual SKILL.md files in `skills-and-instructions/skills/`
- **Add new funnel types** — Create new folders under `skills/funnels/` with a SKILL.md
- **Add new task types** — Create new folders under `skills/tasks/` with a SKILL.md
- **Modify workflows** — Edit `setup/templates/CLAUDE-solo.md` and/or `CLAUDE-agency.md`

---

## Tech Stack

- **HTML pages:** Tailwind CSS v4 (CDN), Lucide Icons, self-contained single-file HTML
- **Scripts:** Node.js (pexels API, Playwright for PDF, PptxGenJS for slides)
- **Documents:** Markdown source → PDF (html-to-pdf.js), DOCX (docx skill), PPTX (pptx skill)
- **Images:** Pexels (stock) or Nano Banana Pro (AI-generated)
- **Page cloning:** Firecrawl API (requires FIRECRAWL_API_KEY in .env)

---

## Commit History (most recent first)

```
b58a4a0 chore: Clean up leftover test artifacts
f49b043 feat: Add Ryan Layer, single-pass copy critique, and workflow restructure
9594427 feat(scripts): Add HTML-to-PDF converter and document production docs
e797b00 feat(scripts): Add Clone Page feature with Firecrawl integration
0d55fda chore: Remove demo assets and add Firecrawl API key
ef5275a feat: Add first-run setup wizard with solo/agency mode selection
c7818b7 docs: Restructure AGENTS.md as pointer file, update README compatibility
91d7e56 feat: Add client-based folder structure and Scale Plus client
e7b69df feat(campaigns): Add Product Launch 2026 campaign
709aa67 Remove generated Scale Plus test HTML assets
```

---

*Generated: March 5, 2026 | Last commit: b58a4a0 on main*
