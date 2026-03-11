# Google Workspace Integration

> Export campaign assets directly to Google Drive, Docs, Slides, Sheets, Gmail, Calendar, and YouTube — all from the command line.

---

## What Is This?

**Google Workspace CLI (`gws`)** is a free, open-source command-line tool from Google that gives you access to every Google Workspace service from your terminal. It's built for both humans and AI agents.

When connected to ClickCampaigns, your AI Campaign Manager (Alex) can:

- **Save finished pages** directly to your Google Drive
- **Export email sequences** into Gmail drafts
- **Create slide decks** from campaign content
- **Build spreadsheets** with campaign tracking data
- **Schedule launch events** on your Google Calendar
- **Upload videos** to YouTube

All without leaving your workflow.

---

## Why Would I Want This?

| Without Google Workspace CLI | With Google Workspace CLI |
|-----|------|
| Build an HTML page, then manually upload to Drive | "Save this page to my Google Drive" |
| Copy email text, paste into Gmail one by one | "Create Gmail drafts for all 12 launch emails" |
| Export a spreadsheet, then upload to Sheets | "Create a Google Sheet with my campaign tracker" |
| Manually create calendar events for launch dates | "Add all launch dates to my Google Calendar" |

**Bottom line:** It removes the copy-paste step between building assets and getting them into the tools you already use.

---

## Is It Free?

Yes. The CLI tool is free and open-source. You just need a Google account and a Google Cloud project (also free for personal use).

---

## Do I Need It?

**You do NOT need this to use ClickCampaigns.** All campaign assets are built and saved locally in your `campaigns/` folder regardless.

This is an **optional add-on** for users who want to push finished assets directly into Google Workspace. If you work primarily in Google's ecosystem, it's a nice time-saver.

---

## Requirements

- A Google account (personal or Workspace)
- Node.js 18+ (you likely already have this for ClickCampaigns)
- A Google Cloud project (free — the install guide walks you through creating one)
- 5-10 minutes for initial setup

---

## Getting Started

1. Read [INSTALL.md](INSTALL.md) for step-by-step setup
2. Read [USE-CASES.md](USE-CASES.md) for what you can do with it

Or just tell Alex: **"Set up Google Workspace integration"** and he'll walk you through it.

---

## Quick Links

- [GitHub Repository](https://github.com/googleworkspace/cli)
- [npm Package](https://www.npmjs.com/package/@googleworkspace/cli)
