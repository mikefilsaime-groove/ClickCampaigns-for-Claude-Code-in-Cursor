# ClickCampaigns Setup Wizard

**You are here because `.clickcampaigns.json` does not exist. Run this wizard to configure ClickCampaigns.**

---

## Step 1: Ask the User

Say to the user:

> "Welcome to ClickCampaigns! Before we start building, I need to set things up.
>
> **How will you be using ClickCampaigns?**
> 1. **I'm a business/marketer** - I'm working on my own company's campaigns
> 2. **I'm an agency** - I work with multiple clients, each with their own campaigns"

Then ask:

> "One more question - will you be viewing or editing the Markdown files in Obsidian?
> 1. **Yes** - use Obsidian conventions (YAML frontmatter, callout blocks)
> 2. **No / Not sure** - use standard Markdown"

---

## Step 2: Create Configuration

Create `.clickcampaigns.json` in the project root:

```json
{
  "mode": "solo",
  "obsidian": false,
  "setupDate": "YYYY-MM-DD",
  "version": "1.0"
}
```

- Set `mode` to `"solo"` or `"agency"` based on their answer
- Set `obsidian` to `true` if they chose Yes for Obsidian
- Set `setupDate` to today's date

---

## Step 3: Install CLAUDE.md

**This is the critical step.** Read the appropriate template and REPLACE the entire `CLAUDE.md` file with it:

- **If solo mode:** Read `setup/templates/CLAUDE-solo.md` and write its contents to `CLAUDE.md`
- **If agency mode:** Read `setup/templates/CLAUDE-agency.md` and write its contents to `CLAUDE.md`

**Also update AGENTS.md:**
- **If solo mode:** Read `setup/templates/AGENTS-solo.md` and write its contents to `AGENTS.md`
- **If agency mode:** Read `setup/templates/AGENTS-agency.md` and write its contents to `AGENTS.md`

---

## Step 4: Create Folders

**If solo mode**, ensure these folders exist:
- `brand-kit/brand-knowledge-base/`
- `brand-kit/brand-style-guide/`
- `campaigns/`

**If agency mode**, ensure this folder exists:
- `clients/`

---

## Step 5: Confirm and Continue

**If solo mode**, say:
> "Setup complete! ClickCampaigns is configured for your business. What campaign would you like to build?"

**If agency mode**, say:
> "Setup complete! ClickCampaigns is configured for agency use. Which client are we working with today?"

**Then continue working as if you just read the new CLAUDE.md** (you wrote it). Follow the session-start flow from the installed instructions.

---

## Re-Running Setup

The user can say `reset setup` at any time. When they do:

1. Delete `.clickcampaigns.json`
2. Re-read this file (`setup/SETUP.md`)
3. Run the wizard again from Step 1
4. This will overwrite `CLAUDE.md` and `AGENTS.md` with the new mode's templates
