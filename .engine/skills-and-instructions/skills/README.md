# Skills (Authenticated Access Required)

Marketing skills (funnels and tasks) are loaded on-demand from the ClickCampaigns API.

## Setup

```bash
node .engine/scripts/cc-skills.js login
```

This opens your browser to authenticate with your ClickCampaigns account.

## Usage

```bash
# List all available skills
node .engine/scripts/cc-skills.js list

# Fetch a specific skill
node .engine/scripts/cc-skills.js fetch funnels/product-launch-plf/SKILL.md

# Check if your token is valid
node .engine/scripts/cc-skills.js verify
```

## What's Local

Production skills (HTML design, PDF, PPTX, DOCX) are available locally in the `production/` directory without authentication.
