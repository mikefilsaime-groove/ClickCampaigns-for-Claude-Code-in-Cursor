# Google Workspace CLI — Use Cases for Marketers

> Practical recipes for exporting campaign assets to Google Workspace.

---

## Google Drive — Save & Organize Campaign Files

### Upload a finished HTML page to Drive

```bash
gws drive files create \
  --json '{"name": "sales-page.html", "parents": ["FOLDER_ID"]}' \
  --upload campaigns/my-campaign/output-assets/html/sales-page.html
```

### Create a campaign folder in Drive

```bash
gws drive files create \
  --json '{"name": "My Campaign Assets", "mimeType": "application/vnd.google-apps.folder"}'
```

### Upload all campaign assets to a Drive folder

Alex can loop through your `output-assets/` directory and upload each file to a matching Drive folder structure — just say:

> "Upload all finished assets to my Google Drive"

---

## Gmail — Send Campaign Emails

### Create a draft email

```bash
gws gmail users messages send \
  --params '{"userId": "me"}' \
  --json '{
    "raw": "<base64-encoded-email>"
  }'
```

### Practical workflow

Rather than manually encoding emails, just tell Alex:

> "Create Gmail drafts for my 12-email launch sequence"

Alex will encode each email from your `output-assets/emails/` folder and create drafts in your Gmail account. You review and send when ready.

### Create drafts for review (safest approach)

> "Save all my launch emails as Gmail drafts so I can review before sending"

This is the recommended workflow — Alex creates the drafts, you review and hit send.

---

## Google Sheets — Campaign Tracking & Data

### Create a campaign tracker spreadsheet

> "Create a Google Sheet to track my campaign assets and their status"

Alex builds a spreadsheet with columns for asset name, type, status, URL, and notes — then creates it directly in your Google Sheets.

```bash
gws sheets spreadsheets create \
  --json '{"properties": {"title": "Campaign Tracker - Black Friday 2026"}}'
```

### Add data rows to an existing sheet

```bash
gws sheets spreadsheets values append \
  --params '{"spreadsheetId": "ID", "range": "Sheet1!A1", "valueInputOption": "USER_ENTERED"}' \
  --json '{"values": [["Sales Page", "HTML", "Complete", "2026-03-11"]]}'
```

### Export email sequence as a spreadsheet

> "Put my email sequence into a Google Sheet — subject lines, preview text, and send dates"

Useful for sharing the email plan with your team or VA.

---

## Google Docs — Export Copy & Scripts

### Create a Google Doc from campaign copy

> "Export my VSL script to Google Docs"

Alex takes your VSL script from `output-assets/documents/` and creates a formatted Google Doc.

### Export brand guidelines as a shareable doc

> "Create a Google Doc with my brand knowledge base so I can share it with my team"

---

## Google Slides — Presentations from Campaign Content

### Create a presentation from campaign content

> "Turn my webinar outline into a Google Slides presentation"

Alex creates slides with your content, properly formatted with titles, bullet points, and section breaks.

### Export a pitch deck

> "Create a Google Slides deck with my offer stack and pricing"

---

## Google Calendar — Launch Scheduling

### Create launch timeline events

> "Add my 10-day launch sequence to Google Calendar with email send dates"

```bash
gws calendar events insert \
  --params '{"calendarId": "primary"}' \
  --json '{
    "summary": "Launch Email #1 - Problem/Agitation",
    "start": {"dateTime": "2026-04-01T09:00:00-05:00"},
    "end": {"dateTime": "2026-04-01T09:30:00-05:00"},
    "description": "Send launch email #1 from Gmail drafts"
  }'
```

### Block out content creation days

> "Block 3 days on my calendar for campaign content creation"

---

## YouTube — Video Uploads

### Upload a video to YouTube

```bash
gws youtube videos insert \
  --params '{"part": "snippet,status"}' \
  --json '{
    "snippet": {"title": "My Webinar Replay", "description": "Full replay..."},
    "status": {"privacyStatus": "unlisted"}
  }' \
  --upload webinar-replay.mp4
```

### Practical workflow

> "Upload my webinar replay to YouTube as unlisted and give me the link"

---

## Combined Workflows

These are the real power moves — tell Alex to do multiple things at once:

### Full campaign export

> "Export everything to Google Workspace: HTML pages to Drive, emails as Gmail drafts, launch timeline to Calendar, and email schedule to a Google Sheet"

### Team handoff package

> "Create a Google Drive folder with all campaign assets, a tracking Sheet, and Calendar events for the launch dates. Then share the folder with sarah@company.com"

### Post-campaign reporting

> "Create a Google Sheet with all campaign assets, their types, completion dates, and file locations"

---

## Tips

1. **Start with Drive** — it's the most universally useful (save any file type)
2. **Use Gmail drafts, not sends** — always create drafts first so you can review before sending
3. **Tell Alex what you want in plain English** — you don't need to know the commands. Alex translates your request into the right `gws` commands
4. **Check your Google Cloud API quotas** — free tier limits are generous but exist (e.g., Gmail: 250 sends/day)
