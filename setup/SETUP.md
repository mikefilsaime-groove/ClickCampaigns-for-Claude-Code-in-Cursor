# ClickCampaigns Setup Wizard

**You are here because `.clickcampaigns.json` does not exist. Run this wizard to configure ClickCampaigns.**

---

## Step 1: Ask the User

Say to the user:

> "Welcome to ClickCampaigns! How would you like to work?
>
> 1. **Marketing Strategist** — I'll guide you through everything step by step, help you choose funnels, write copy, and build pages
> 2. **Self-Directed** — You already know what you want. Just tell me and I'll execute
> 3. **Load a ClickCampaigns Project File** — You have a downloaded project folder from ClickCampaigns.ai
> 4. **Connect with Auth Token** — You have a `cc-` auth token from ClickCampaigns.ai"

Then (for options 1 and 2 only) ask:

> "One more question - will you be viewing or editing the Markdown files in Obsidian?
> 1. **Yes** - use Obsidian conventions (YAML frontmatter, callout blocks)
> 2. **No / Not sure** - use standard Markdown"

---

## Option 1 or 2: Solo / Self-Directed Mode

### Step 2: Create Configuration

Create `.clickcampaigns.json` in the project root:

```json
{
  "mode": "solo",
  "obsidian": false,
  "setupDate": "YYYY-MM-DD",
  "version": "1.1"
}
```

- Set `mode` to `"solo"` for both options 1 and 2
- Set `obsidian` to `true` if they chose Yes for Obsidian
- Set `setupDate` to today's date

### Step 3: Install CLAUDE.md

Read `setup/templates/CLAUDE-solo.md` and REPLACE the entire `CLAUDE.md` file with it.

**Also update AGENTS.md:**
Read `setup/templates/AGENTS-solo.md` and write its contents to `AGENTS.md`.

### Step 4: Create Folders

Ensure these folders exist:
- `brand-kit/brand-knowledge-base/`
- `brand-kit/brand-style-guide/`
- `campaigns/`

### Step 5: Confirm and Continue

Say:
> "Setup complete! ClickCampaigns is configured for your business. What campaign would you like to build?"

**For option 1 (Strategist):** Follow the full guided session-start flow from the installed CLAUDE.md instructions.

**For option 2 (Self-Directed):** Skip the guided questioning. Ask the user what they want to build and execute immediately.

---

## Option 3: Load a ClickCampaigns Project File

The user has a downloaded project folder from ClickCampaigns.ai (a folder with campaign-brief.md, brand-kit/, selected-work/, etc.).

### Step 2: Get the folder path

Ask: "Please provide the path to your downloaded ClickCampaigns project folder."

### Step 3: Read and load the project

1. Read all files in the provided folder:
   - `campaign-brief.md` — campaign goals and settings
   - `brand-kit/brand-knowledge-base/brand-knowledge-base.md`
   - `brand-kit/brand-style-guide/brand-style-guide.md`
   - `selected-work/funnels-and-pages.md`
   - `selected-work/tasks.md`
   - `skill-map.md` (if present) — maps tasks to skill files
   - `execution-order.md` (if present) — recommended build order

2. Copy brand files into this repo's `brand-kit/`:
   - Copy knowledge base to `brand-kit/brand-knowledge-base/`
   - Copy style guide to `brand-kit/brand-style-guide/`

3. Create a campaign folder from the campaign name:
   - `campaigns/[campaign-name]/output-assets/html/`
   - `campaigns/[campaign-name]/output-assets/documents/`
   - `campaigns/[campaign-name]/output-assets/emails/`
   - `campaigns/[campaign-name]/output-assets/ads/`

### Step 4: Create Configuration

```json
{
  "mode": "file",
  "campaignName": "Campaign Name from brief",
  "sourceFolder": "/path/to/downloaded/folder",
  "obsidian": false,
  "setupDate": "YYYY-MM-DD",
  "version": "1.1"
}
```

### Step 5: Install CLAUDE.md

Read `setup/templates/CLAUDE-solo.md` and REPLACE the entire `CLAUDE.md` file with it.

Also: Read `setup/templates/AGENTS-solo.md` and write to `AGENTS.md`.

### Step 6: Confirm and Continue

Say:
> "Project loaded! Campaign '[name]' is ready with [X] tasks. Brand files are installed.
>
> Here's what's selected: [list from tasks.md and funnels-and-pages.md]
>
> Which task should I work on first? Or say 'all' to execute in order."

If `skill-map.md` was present, use it to read the matching SKILL.md before each task.
If `execution-order.md` was present, suggest following that order.

---

## Option 4: Connect with Auth Token

The user has a `cc-` auth token from ClickCampaigns.ai.

### Step 2: Get and verify the token

Ask: "Please paste your auth token (starts with `cc-`)."

Once received, verify it:
```bash
node scripts/cc-api.js verify <token>
```

If invalid, tell the user and ask them to generate a new token at ClickCampaigns.ai.

### Step 3: Fetch campaign data

```bash
node scripts/cc-api.js fetch <token>
```

This returns full campaign JSON. Parse the output and extract:
- Campaign name, description, settings
- Brand kit (knowledge base + style guide markdown)
- Selected work items with skill paths
- Task instructions
- Execution plan (if available)

### Step 4: Install campaign locally

1. Write brand files to `brand-kit/`:
   - `brand-kit/brand-knowledge-base/brand-knowledge-base.md`
   - `brand-kit/brand-style-guide/brand-style-guide.md`

2. Create campaign folder: `campaigns/[campaign-name]/output-assets/` with subfolders

3. Create `.clickcampaigns.json`:

```json
{
  "mode": "token",
  "token": "cc-abc123...",
  "apiUrl": "https://clickcampaigns.ai",
  "campaignId": 123,
  "campaignName": "Campaign Name",
  "obsidian": false,
  "setupDate": "YYYY-MM-DD",
  "version": "1.1"
}
```

### Step 5: Install CLAUDE.md

Read `setup/templates/CLAUDE-token.md` and REPLACE the entire `CLAUDE.md` file with it.

Also: Read `setup/templates/AGENTS-solo.md` and write to `AGENTS.md`.

### Step 6: Confirm and Continue

Say:
> "Connected to ClickCampaigns.ai! Campaign '[name]' loaded with [X] tasks.
>
> Tasks: [list with statuses]
>
> Which task should I work on first? Or say 'all' to execute in order."

---

## Skills Authentication

After completing any setup option above, check if marketing skills access is authenticated:

```bash
node scripts/cc-skills.js verify
```

If not authenticated, ask:
> "To access the full marketing skill library, you'll need to authenticate with your ClickCampaigns account.
> Would you like to authenticate now? (You can always do this later with `node scripts/cc-skills.js login`)"

If yes, run:
```bash
node scripts/cc-skills.js login
```

This opens the browser for the user to log in and generate a CLI token. Production skills (HTML design, PDF, PPTX, DOCX) are available locally without authentication.

---

## Re-Running Setup

The user can say `reset setup` at any time. When they do:

1. Delete `.clickcampaigns.json`
2. Re-read this file (`setup/SETUP.md`)
3. Run the wizard again from Step 1
4. This will overwrite `CLAUDE.md` and `AGENTS.md` with the new mode's templates
