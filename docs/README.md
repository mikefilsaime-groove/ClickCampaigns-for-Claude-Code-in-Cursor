# GodMode-App — Cross-Repo Context Document

> **Read this first** if you're an AI agent starting work in this repo. It explains what this project is, how it connects to the ClickCampaigns-ai sister repo, and the full architecture of the system.

---

## What This Repo Is

**GodMode-App** (GitHub: `mikefilsaime-groove/GodMode-App`) is a **portable prompt engineering framework** that turns any AI coding agent (Claude Code, Cursor, Codex, Gemini CLI) into a full-service marketing team.

It contains:
- **22 marketing specialist personas** with detailed backstories and expertise (see `.engine/agents/Agents-List.md`)
- **26 funnel types** with complete implementation skill files (see `.engine/funnels/Funnel-Pages-Checklist.md`)
- **25+ task categories** covering every marketing channel (see `.engine/tasks/Task-Checklist.md`)
- **Production skills** for HTML, PowerPoint, PDF, and Word document generation (in `.engine/skills-and-instructions/skills/production/`)
- **A first-run setup wizard** with 4 modes: solo, agency, file import, and SaaS token connection
- **Utility scripts** for image search (Pexels), AI image generation (Gemini), page cloning (Firecrawl), and HTML-to-PDF (Playwright)

This repo is **not** the Electron desktop app or the VS Code extension. Those live in the sister repo.

---

## The Four Components

The God Mode ecosystem consists of four components that work together:

| # | Component | Repo | Path | Purpose |
|---|-----------|------|------|---------|
| 1 | **ClickCampaigns SaaS** | ClickCampaigns-ai | `server/`, `client/` | Web app + API + database (clickcampaigns.ai) |
| 2 | **GodMode-App** (this repo) | GodMode-App | `/` (root) | Portable prompt framework (22 agents, 26 funnels, 25+ tasks) |
| 3 | **God Mode Electron App** | ClickCampaigns-ai | `god-mode/` | Desktop shell with embedded SaaS webviews |
| 4 | **VS Code Extension** | ClickCampaigns-ai | `extensions/clickcampaigns-god-mode/` | Editor-native control plane (**recommended path** for Cursor/VS Code) |

### How they relate:

- **Components 3 and 4** are two ways to do the same thing: authenticate, download this repo, and manage tokens. The extension is the recommended path for editor users; Electron stays for standalone desktop users.
- **This repo (Component 2)** is the framework that users clone/download and open in Claude Code or Cursor. It's what the AI agents actually interact with.
- **Component 1 (SaaS)** is the backend that provides token auth, campaign data sync, protected skill files, and the web UI.

---

## The Sister Repo: ClickCampaigns-ai

**Location:** `/Users/mikefilsaime/GitHub/ClickCampaigns-ai`
**GitHub:** `MonarchLabsLLC/clickcampaigns-ai` (private)

ClickCampaigns-ai is the **SaaS platform** (web app + API + database) that powers clickcampaigns.ai. Inside it live both the Electron app and the VS Code extension.

### What lives where:

| Component | Repo | Path |
|-----------|------|------|
| Prompt engineering framework (this) | GodMode-App | `/` (root) |
| God Mode Electron app | ClickCampaigns-ai | `god-mode/` |
| VS Code extension | ClickCampaigns-ai | `extensions/clickcampaigns-god-mode/` |
| SaaS backend (Express/Node) | ClickCampaigns-ai | `server/` |
| SaaS frontend (React) | ClickCampaigns-ai | `client/` |
| God Mode hub page (web) | ClickCampaigns-ai | `client/src/pages/god-mode.tsx` |
| Extension download page | ClickCampaigns-ai | `client/src/pages/vscode-extension.tsx` |
| Electron download page | ClickCampaigns-ai | `client/src/pages/god-mode-thank-you.tsx` |
| In-app user guide | ClickCampaigns-ai | `client/src/pages/god-mode-guide.tsx` |
| CLI token management page | ClickCampaigns-ai | `client/src/pages/cli-auth.tsx` |
| CI/CD build workflow (Electron) | ClickCampaigns-ai | `.github/workflows/god-mode-release.yml` |
| Download proxy route | ClickCampaigns-ai | `server/routes.ts` (~line 6384) |
| VS Code extension plan | ClickCampaigns-ai | `docs/plans/VS-Code-Ext-Plan.md` |

---

## How The Repos Connect

### 1. Getting This Repo onto the User's Machine

There are three ways users get this repo:

| Method | Where | How |
|--------|-------|-----|
| **VS Code Extension** (recommended) | Command palette → "God Mode: Download Framework Repo" | Extension downloads ZIP, extracts, writes `.clickcampaigns.json` with stored token |
| **Electron App** | Sidebar → "Download Repo" | Electron downloads ZIP via IPC, extracts, writes token to `.clickcampaigns.json` |
| **Manual** | Terminal or browser | `git clone` or download ZIP from GitHub, manually create `.clickcampaigns.json` |

All three methods download from: `https://github.com/ClickCampaigns/ClickCampaigns-for-Claude-Code/archive/refs/heads/main.zip`

### 2. Auth Token Flow

Two token types connect this repo to the SaaS:

| Token | Format | Scope | Used By |
|-------|--------|-------|---------|
| **CLI auth token** | `cliauth-*` | User-scoped, 30-day expiry | `cc-skills.js` (fetch protected skills) |
| **Campaign token** | `cc-*` | Single campaign | `cc-api.js` (sync campaign data) |

```
ClickCampaigns.ai SaaS (/cli-auth page)
        │
        │  User generates cliauth-* token
        ▼
VS Code Extension (SecretStorage)     OR     Electron App (electron-store)
        │                                            │
        │  User pastes token                         │  User pastes token
        │  Stored in VS Code SecretStorage           │  Stored in electron-store
        │                                            │  App calls POST /api/auth/cli-session
        ▼                                            ▼
This Repo (.clickcampaigns.json)
        │
        │  Token written by extension or Electron during download or on set-token
        │  { "mode": "token", "cliAuthToken": "cliauth-...", "campaignToken": "cc-..." }
        ▼
Claude Code / AI Agent
        │
        │  Reads .clickcampaigns.json → follows CLAUDE-token.md template
        │  Uses token for cc-api.js (campaign sync) and cc-skills.js (skill fetch)
```

### 3. Protected Marketing Skills

The funnel and task skill files (`.engine/skills-and-instructions/skills/funnels/` and `.engine/skills-and-instructions/skills/tasks/`) are **gitignored** — they're proprietary marketing methodologies fetched at runtime from the SaaS API.

**Script:** `.engine/scripts/cc-skills.js`
- `node .engine/scripts/cc-skills.js login` — Opens browser auth, generates cliAuthToken
- `node .engine/scripts/cc-skills.js fetch <path>` — Downloads a specific skill file
- `node .engine/scripts/cc-skills.js list` — Lists available skills
- **API URL:** `https://app.scaleplus.gg`

**Production skills** (in `.engine/skills-and-instructions/skills/production/`) are NOT protected — they ship with the repo.

### 4. Campaign Data Sync

**Script:** `.engine/scripts/cc-api.js`
- `node .engine/scripts/cc-api.js fetch <token>` — Gets full campaign data from SaaS
- `node .engine/scripts/cc-api.js verify <token>` — Checks token validity
- `node .engine/scripts/cc-api.js status <token> <taskId> <status>` — Reports task completion back to SaaS
- **API URL:** `https://clickcampaigns.ai`

---

## The Setup System

When an AI agent opens this repo, `CLAUDE.md` acts as a setup gate:

1. **No `.clickcampaigns.json`** → Run setup wizard (`.engine/setup/SETUP.md`)
2. **`.clickcampaigns.json` exists** → Load the appropriate mode template

### 4 Setup Modes

| Mode | Template | How It Works |
|------|----------|-------------|
| **Solo** | `.engine/setup/templates/CLAUDE-solo.md` | Self-directed marketer, campaigns at root |
| **Agency** | `.engine/setup/templates/CLAUDE-agency.md` | Multi-client, each client gets own folder |
| **File** | Uses solo/agency template | Imported from downloaded project folder |
| **Token** | `.engine/setup/templates/CLAUDE-token.md` | Connected to ClickCampaigns.ai SaaS via auth token |

Token mode is the bridge between the SaaS and this framework — it's what God Mode users (Electron or VS Code extension) end up in.

---

## `.clickcampaigns.json` Format

Written by the VS Code extension, Electron app, or setup wizard:

```json
{
  "mode": "token",
  "cliAuthToken": "cliauth-...",
  "campaignToken": "cc-...",
  "saasBaseUrl": "https://clickcampaigns.ai",
  "setupDate": "2026-03-20T...",
  "version": "1.1"
}
```

| Field | Description |
|-------|-------------|
| `mode` | `"token"` when connected to SaaS; `"solo"` or `"agency"` otherwise |
| `cliAuthToken` | User-scoped `cliauth-*` for skills / CLI scripts |
| `campaignToken` | Optional `cc-*` scoped to one campaign |
| `saasBaseUrl` | Optional; default `https://clickcampaigns.ai` |
| `setupDate` | ISO timestamp of when config was written |
| `version` | Config format version (currently `"1.1"`) |

---

## Build & Release Pipeline

### Electron App

Built and released via GitHub Actions on the ClickCampaigns-ai repo.

```bash
cd /Users/mikefilsaime/GitHub/ClickCampaigns-ai

# 1. Bump version in god-mode/package.json
# 2. Commit the change
# 3. Tag and push:
git tag godmode-v1.2.0
git push origin main
git push origin godmode-v1.2.0
```

**Workflow:** `.github/workflows/god-mode-release.yml` → 3 parallel builds (Mac .dmg, Windows .exe, Linux .AppImage) → GitHub Release

**Download proxy:** `GET /api/downloads/god-mode/:platform` → redirects to GitHub S3 CDN
**Customer-facing download page:** `clickcampaigns.ai/god-mode-thank-you`

### VS Code Extension

Published to **Open VSX** (for Cursor) and distributed as **`.vsix` sideload** (for VS Code and direct download).

**Extension download page:** `clickcampaigns.ai/vscode-extension`
**Source:** `ClickCampaigns-ai/extensions/clickcampaigns-god-mode/`

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     ClickCampaigns.ai SaaS                       │
│              (MonarchLabsLLC/clickcampaigns-ai)                  │
│                                                                   │
│  Server (Express/Node)                                           │
│  ├─ POST /api/auth/cli-session     (token → session cookie)     │
│  ├─ GET  /api/downloads/god-mode/* (installer proxy → S3 CDN)   │
│  ├─ GET  /api/external/campaign    (campaign data for cc-api)   │
│  └─ GET  /api/external/skills      (protected skill files)      │
│                                                                   │
│  Client (React)                                                  │
│  ├─ /god-mode             (hub page — hidden, extension opens)  │
│  ├─ /god-mode-thank-you   (Electron download page)              │
│  ├─ /vscode-extension     (VS Code extension download page)     │
│  ├─ /god-mode-guide       (in-app user guide)                   │
│  └─ /cli-auth             (token generation/management)         │
│                                                                   │
│  Database                                                        │
│  ├─ cliAuthTokens table   (token, userId, expiry, revocation)   │
│  └─ campaignTokens table  (token, campaignId, expiry)           │
│                                                                   │
│  god-mode/ (Electron App Source)                                 │
│  ├─ Main process: window mgmt, IPC, download, webview auth      │
│  ├─ Renderer: React UI (AuthGate, Sidebar, pages + webviews)    │
│  └─ Preload: 8 APIs via window.godmode                          │
│                                                                   │
│  extensions/clickcampaigns-god-mode/ (VS Code Extension)         │
│  ├─ Auth-first TreeView sidebar (activity bar)                   │
│  ├─ SecretStorage for CLI + campaign tokens                      │
│  ├─ Framework ZIP download + folder picker                       │
│  └─ Opens SaaS pages in browser (hub, campaigns, guide, auth)   │
│                                                                   │
│  .github/workflows/god-mode-release.yml                          │
│  └─ Tag godmode-v* → Build Mac/Win/Linux → GitHub Release        │
└──────────────────────────────┬────────────────────────────────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
   Downloads ZIP        Serves installers    Authenticates
   of this repo         & extension          sessions & tokens
          │                    │                    │
          ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│              GodMode-App (This Repo)                             │
│           (mikefilsaime-groove/GodMode-App)                      │
│                                                                   │
│  CLAUDE.md → Setup gate → .clickcampaigns.json                   │
│                                                                   │
│  22 Agent Personas          .engine/agents/Agents-List.md        │
│  26 Funnel Types            .engine/funnels/Funnel-Pages-...md   │
│  25+ Task Categories        .engine/tasks/Task-Checklist.md      │
│  Production Skills          .engine/skills-.../skills/prod/      │
│  Protected Skills (API)     .engine/skills-.../funnels/ & tasks/ │
│                                                                   │
│  .engine/scripts/                                                │
│  ├─ cc-api.js      (campaign sync with SaaS)                    │
│  ├─ cc-skills.js   (fetch protected skill files)                │
│  ├─ pexels-search  (stock photos)                                │
│  ├─ generate-image (Gemini AI)                                   │
│  ├─ clone-page     (Firecrawl)                                   │
│  └─ html-to-pdf    (Playwright)                                  │
│                                                                   │
│  Campaigns                                                       │
│  └─ campaigns/[name]/output-assets/{html,docs,emails,ads,...}    │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│              AI Coding Agent (Claude Code, Cursor, etc.)         │
│                                                                   │
│  Reads CLAUDE.md → loads mode template → activates Alex          │
│  Alex orchestrates 22 specialists to build campaign assets       │
│  Uses cc-skills.js to fetch marketing methodologies              │
│  Uses cc-api.js to sync progress back to SaaS                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Key File Paths

### In This Repo (GodMode-App)

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI agent entry point (setup gate) |
| `AGENTS.md` | Pointer for Codex/other tools → CLAUDE.md |
| `.clickcampaigns.json` | Runtime config (not committed, created by setup or God Mode app/extension) |
| `.engine/setup/SETUP.md` | First-run setup wizard |
| `.engine/setup/templates/CLAUDE-token.md` | Token mode instructions (SaaS-connected) |
| `.engine/scripts/cc-api.js` | Campaign data sync with SaaS |
| `.engine/scripts/cc-skills.js` | Protected skill file fetcher |
| `.engine/agents/Agents-List.md` | 22 specialist profiles |
| `.engine/funnels/Funnel-Pages-Checklist.md` | 26 funnel types reference |
| `.engine/tasks/Task-Checklist.md` | 25+ task categories reference |
| `docs/auto-update-plan.md` | Electron auto-update implementation plan |
| `docs/apple-developer-setup.md` | macOS code signing guide |

### In The Sister Repo (ClickCampaigns-ai)

| File | Purpose |
|------|---------|
| `god-mode/package.json` | Electron app config (version, electron-builder) |
| `god-mode/src/main/index.ts` | Main Electron process (IPC, download, auth) |
| `god-mode/src/renderer/App.tsx` | React app router + webview integration |
| `god-mode/src/renderer/components/AuthGate.tsx` | CLI token authentication screen |
| `extensions/clickcampaigns-god-mode/package.json` | VS Code extension config |
| `extensions/clickcampaigns-god-mode/src/extension.ts` | Extension entry point (TreeView, commands) |
| `client/src/pages/god-mode.tsx` | God Mode hub page (hidden, opened by extension) |
| `client/src/pages/vscode-extension.tsx` | Extension download page |
| `client/src/pages/god-mode-thank-you.tsx` | Electron download page |
| `client/src/pages/god-mode-guide.tsx` | In-app user guide |
| `client/src/pages/cli-auth.tsx` | Token generation/management |
| `server/routes.ts` (~line 6384) | Download proxy for Electron installers |
| `docs/plans/VS-Code-Ext-Plan.md` | VS Code extension implementation plan |
| `.github/workflows/god-mode-release.yml` | CI/CD build + release workflow |

---

## Other Docs In This Folder

- **`auto-update-plan.md`** — Plan for adding automatic update detection to the Electron app using `electron-updater` with GitHub Releases. Phased approach: Phase 1 (skip), Phase 2 (GitHub API check + banner), Phase 3 (full auto-update after Apple Developer enrollment).
- **`apple-developer-setup.md`** — Step-by-step guide for Apple Developer Program enrollment ($99/year), code signing certificates, notarization, and electron-builder configuration for signed macOS builds.
- **Google Workspace integration** — See `.engine/integrations/google-workspace/` for optional Google Drive, Gmail, Sheets, Slides, Calendar, and YouTube export integration.
