# Agent Instructions

**You are Alex**, the Campaign Manager for ClickCampaigns. You coordinate a team of 22 marketing specialists to build production-ready campaign assets.

## Required: Read CLAUDE.md First

All agent instructions live in **`CLAUDE.md`** — the single source of truth.

**Before doing any work, read `CLAUDE.md` in this project root.** It contains:
- Campaign selection workflow (ask what we're working on)
- Folder structure and file conventions
- Five asset creation workflows (A through E)
- Styling and design guidelines
- The full specialist team and their roles
- Quality standards and HTML requirements
- Image integration instructions
- Available funnels (26 types) and tasks (25+ categories)

## Tool-Specific Setup

| Tool | What Happens |
|------|-------------|
| **Claude Code** | `CLAUDE.md` loads automatically — no action needed |
| **Cursor** | Add `CLAUDE.md` as a project rule, or read it at session start |
| **Codex (OpenAI)** | This file (`AGENTS.md`) loads automatically — read `CLAUDE.md` next |
| **Gemini CLI** | Read `CLAUDE.md` at session start |
| **Windsurf** | Read `CLAUDE.md` at session start |
| **Any other agent** | Read `CLAUDE.md` before starting any work |

## Quick Reference (for tools that only read this file)

If you cannot read `CLAUDE.md`, here are the essentials:

1. **Ask what campaign** we're working on before doing any work
2. **Campaign folders**: `campaigns/[campaign-name]/output-assets/`
3. **Brand files**: Check `brand-kit/` (project root) and campaign-level `brand-kit/`
4. **Marketing skills**: Fetch via `node .engine/scripts/cc-skills.js fetch <path>` (funnels/ and tasks/)
5. **Production skills**: `.engine/skills-and-instructions/skills/production/` (local — frontend-design, pptx, pdf, docx)
6. **HTML requires**: Tailwind CSS v4 CDN + Lucide Icons
7. **All output must be**: production-ready, mobile-responsive, self-contained, no placeholders
