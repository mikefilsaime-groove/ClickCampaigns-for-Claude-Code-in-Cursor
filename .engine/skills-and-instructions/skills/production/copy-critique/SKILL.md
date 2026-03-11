# Copy Critique — Single-Pass Direct Response Review

This skill defines the copy review process that runs after every copy-containing asset is created. Ryan's direct response principles are the lens.

**CRITICAL: This is a SINGLE PASS. Do not score the asset. Do not rate it 1-100. Do not iterate or loop. Make your best improvements in one review and move on.**

---

## When This Runs

This review runs automatically after creating any asset that contains persuasion copy:
- HTML funnel pages (sales pages, opt-ins, checkout, upsell, VSL pages)
- HTML brand pages (home, about, services, contact)
- Email sequences and individual emails
- Ad copy (Meta, Google, YouTube, TikTok, LinkedIn)
- VSL scripts and sales letter documents
- Webinar scripts
- Lead magnets and book content

---

## The Review Lens

Read the completed asset wearing ONLY the direct response copy lens. You are looking for weaknesses in persuasion, not design or layout. Check each element:

### Headlines & Subheadlines
- **Specificity:** Replace vague claims with specific numbers, timeframes, or outcomes. "Grow your business" → "Add $10K/month in recurring revenue within 90 days"
- **Curiosity + Benefit:** Does the headline make the reader NEED to keep reading? Does it promise a clear benefit?
- **Power words:** Are we using words that trigger emotion? (discover, proven, secret, exclusive, breakthrough, guaranteed, instant, free)
- **Length:** Is the headline the right length for its context? (short for ads, longer for sales pages)

### Calls to Action
- **Urgency:** Does the CTA create a reason to act NOW, not later?
- **Specificity:** "Get started" is weak. "Claim your free strategy session" is strong. "Yes, I want the 7-day blueprint" is stronger.
- **Button copy:** Does it describe what happens next, using first person? ("Get My Free Guide" > "Submit" > "Download")
- **Frequency:** On long pages, is the CTA repeated every 2-3 scroll lengths?

### Proof Stack
- **Social proof:** Are testimonials specific with names, results, and timeframes? (not "Great product!" but "We added $47K in Q3 after implementing the email sequence — Sarah M., Founder of Acme SaaS")
- **Authority markers:** Logos, media mentions, certifications, "as seen on" — are they present where needed?
- **Statistics:** Are claims backed by numbers? Specificity builds credibility.
- **Risk reversal:** Is there a guarantee? Is it bold and specific? ("30-day money-back, no questions asked" minimum)

### Offer Positioning
- **Value stack:** Is the total value clearly communicated before the price?
- **Price anchoring:** Does the reader understand what this SHOULD cost before seeing what it DOES cost?
- **Bonuses:** Are bonuses framed as valuable standalone items, not afterthoughts?
- **Scarcity/urgency:** Is there a legitimate reason to act now? (deadline, limited spots, bonus expiration)

### Emotional Triggers
- **Pain points:** Are we agitating the problem enough before presenting the solution?
- **Future pacing:** Can the reader SEE themselves succeeding with this?
- **Objection handling:** Are the top 3-5 objections addressed before the reader thinks of them?
- **Story/narrative:** Is there a relatable story that builds connection?

### Copy Mechanics
- **Benefit vs. feature language:** Every feature should be translated to what it MEANS for the reader
- **Sentence rhythm:** Mix short punchy sentences with longer explanatory ones. Avoid monotone paragraph length.
- **Transition hooks:** Does each section end with a reason to keep reading?
- **Weasel words:** Remove "might," "could," "possibly," "we believe" — replace with confident, direct language
- **Passive voice:** Rewrite passive constructions to active voice

---

## How to Apply Changes

### For HTML pages (Workflow B & C assets):

1. **Review** the completed HTML file using the lens above
2. **Identify** specific changes — be concrete: "Change headline from X to Y" not "headline could be stronger"
3. **Apply** all copy changes as diffs to the SAME HTML file — do not create a draft/final split
4. **Design lock** — after applying copy changes, verify the page layout and visual design remain intact. Copy edits must not break responsive behavior, spacing, or visual hierarchy. Text changes only.
5. **Save** a copy critique document to `documents/[asset-name]-copy-critique.md` with:
   - What was changed and why (brief, specific line items)
   - This is for the user's reference so they can see what was improved and revert if they disagree

### For emails, ads, and scripts (Workflow A assets):

1. **Review** the completed asset using the lens above
2. **Apply** all changes as diffs to the same file
3. **Do NOT** create a separate critique document — these assets are simpler and the critique is overkill

### For webinar scripts and lead magnet content (Workflow D & E):

1. **Review** the completed content using the lens above
2. **Apply** all changes as diffs to the same file
3. **Do NOT** create a separate critique document

---

## Copy Critique Document Format

When a critique document is required (HTML pages only), use this format:

```markdown
# Copy Critique: [Asset Name]

## Changes Applied

### Headlines
- **[Section]:** Changed "[old headline]" → "[new headline]" — [reason]

### CTAs
- **[Location]:** Changed "[old CTA]" → "[new CTA]" — [reason]

### Proof/Credibility
- [What was added or strengthened]

### Copy Improvements
- [Specific changes to body copy, bullet points, etc.]

## Notes for Review
- [Any suggestions the user might want to consider but weren't auto-applied]
```

---

## Cross-Asset Consistency (Campaign-Level)

When building multiple assets for the same campaign, apply a consistency pass after completing all assets. This catches discrepancies that per-asset reviews miss:

- **Guarantee terms:** Same guarantee period and language across all pages, emails, and scripts (e.g., "365-day money-back guarantee" everywhere, not "30-day" on one page and "365-day" on another)
- **Pricing and savings:** Consistent dollar amounts, discount percentages, and savings calculations across checkout, upsell, sales page, and emails
- **Dates and deadlines:** Launch dates, webinar times, bonus expiration dates match across all assets
- **Product/offer names:** Exact same naming, capitalization, and description everywhere
- **Copyright year:** Current year on all pages
- **Brand voice consistency:** Same tone, formality level, and personality across all assets
- **CTA destinations:** CTAs on different pages should point to the correct next step in the funnel

Apply fixes as diffs across all affected files. No separate document needed — just fix them.

---

## What This Is NOT

- **NOT a scoring system.** Do not rate the copy 1-100 or assign grades.
- **NOT recursive.** One pass. Make your improvements and move on. Do not re-review.
- **NOT a rewrite.** Improve what's there. Don't restructure the entire page or change the fundamental approach.
- **NOT design feedback.** This is copy only. Don't comment on colors, layout, fonts, or spacing.
- **NOT optional for HTML pages.** The review always runs for Workflow B and C assets.
