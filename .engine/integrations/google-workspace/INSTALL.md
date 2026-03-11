# Google Workspace CLI — Install Guide

> Step-by-step setup for connecting ClickCampaigns to Google Workspace.

---

## Step 1: Install the CLI

Run this from your terminal:

```bash
npm install -g @googleworkspace/cli
```

Verify it installed:

```bash
gws --version
```

You should see a version number. If you get "command not found," make sure Node.js 18+ is installed.

---

## Step 2: Create a Google Cloud Project

You need a Google Cloud project to authenticate. This is free.

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click **Select a Project** (top bar) > **New Project**
3. Name it something like `clickcampaigns-workspace`
4. Click **Create**

---

## Step 3: Enable the APIs

In your Google Cloud project, enable the APIs you want to use:

1. Go to **APIs & Services > Library** in the Cloud Console
2. Search for and enable each API you want:

| API | What It Does |
|-----|-------------|
| **Google Drive API** | Upload/download files, create folders |
| **Gmail API** | Send emails, create drafts |
| **Google Sheets API** | Create and edit spreadsheets |
| **Google Docs API** | Create and edit documents |
| **Google Slides API** | Create and edit presentations |
| **Google Calendar API** | Create events, manage calendars |
| **YouTube Data API v3** | Upload videos, manage channel |

**Tip:** At minimum, enable **Drive**, **Gmail**, and **Sheets** — those are the most useful for campaign work.

---

## Step 4: Set Up Authentication

The easiest method uses the `gcloud` CLI (Google's own command-line tool):

### Option A: Automatic Setup (Recommended)

If you have `gcloud` installed:

```bash
gws auth setup
```

This opens your browser, asks you to log in, and stores encrypted credentials automatically.

### Option B: Manual Setup

If you don't have `gcloud`:

1. In Google Cloud Console, go to **APIs & Services > Credentials**
2. Click **Create Credentials > OAuth Client ID**
3. Choose **Desktop App** as the application type
4. Download the JSON file
5. Run:

```bash
export GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE=/path/to/your/credentials.json
gws auth login
```

This opens your browser for authorization.

---

## Step 5: Test the Connection

Run a quick test to confirm everything works:

```bash
gws drive files list --params '{"pageSize": 3}'
```

You should see a JSON response listing 3 files from your Google Drive. If you get an error, check the Troubleshooting section below.

---

## Step 6: Tell ClickCampaigns

Once installed, let Alex know:

> "I've set up Google Workspace CLI"

Or if you set it up during the setup wizard, it's already configured in `.clickcampaigns.json`.

---

## Scoping Down Permissions

By default, `gws auth setup` requests broad permissions. To limit access to specific services:

```bash
gws auth login -s drive,gmail,sheets
```

Available scopes: `drive`, `gmail`, `sheets`, `docs`, `slides`, `calendar`, `youtube`, `chat`, `admin`

---

## Troubleshooting

### "Access blocked" during login
Your Google Cloud project may be in testing mode. Go to **APIs & Services > OAuth consent screen** and add your email as a test user.

### "API not enabled" error
Go to **APIs & Services > Library** in Cloud Console and enable the specific API mentioned in the error.

### "Scope limit exceeded"
Testing-mode apps are limited to ~25 scopes. Use `-s` to select only the services you need:
```bash
gws auth login -s drive,gmail,sheets,calendar
```

### "Command not found: gws"
Make sure the npm global bin directory is in your PATH:
```bash
npm config get prefix
# Add [prefix]/bin to your PATH if not already there
```

---

## Uninstalling

If you want to remove the integration:

```bash
npm uninstall -g @googleworkspace/cli
```

Then tell Alex: "Disable Google Workspace integration" — this updates `.clickcampaigns.json`.
