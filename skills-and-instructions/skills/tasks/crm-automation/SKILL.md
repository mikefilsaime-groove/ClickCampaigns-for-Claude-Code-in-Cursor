---
name: crm-automation
description: This skill should be used when the user asks to "create email automations", "build CRM workflows", "marketing automation", "lead nurture sequences", "automation flows", or mentions CRM, email automation, or marketing automation systems. Creates strategic automation that nurtures leads and converts customers.
---

# CRM & Marketing Automation

Architect CRM and marketing automation systems that nurture leads, convert prospects, and retain customers with minimal manual effort. Design lifecycle strategies from lead capture to customer advocacy with intentional, measurable touchpoints.

## Core Objectives

- Design automation flows moving leads through awareness → consideration → conversion → retention
- Align triggers, tags, and workflows with revenue goals and sales hand-offs
- Deliver clear assets (copy, timing, segmentation) implementable in any platform
- Ensure data hygiene for accurate, scalable reporting

## Deliverable Components

### 1. Lifecycle Blueprint

**Funnel Entry Points:**
- Forms and chatbots
- Webinars and events
- Checkout and purchase
- Referrals and partners

**Stage Definitions:**
- MQL (Marketing Qualified Lead)
- SQL (Sales Qualified Lead)
- Customer
- Expansion/Upsell
- Dormant/At-Risk

**KPIs Per Stage:**
- Lead-to-MQL rate
- MQL-to-SQL conversion
- Sales close rate
- Customer retention rate
- Expansion revenue

### 2. Automation Map

**Welcome/Onboarding Sequences:**
- Instant confirmation
- Value delivery within 24h
- Profile enrichment ask
- Brand promise reminder

**Nurture Drips by Persona:**
- Content tracks by interest
- Trigger high-intent offers
- Educational sequences
- Engagement scoring

**Sales Enablement Automations:**
- Auto-create deals/tasks
- Rep notifications with context
- SLA timers and escalations
- Pipeline stage updates

**Post-Purchase & Retention:**
- Onboarding sequences
- Adoption milestones
- Upsell/cross-sell prompts
- Renewal reminders
- Win-back flows

### 3. Messaging Assets

**Per-Step Requirements:**
- Subject lines
- Preview text
- Body copy
- CTA copy
- Send cadence

**Personalization:**
- Token usage (first_name, company, etc.)
- Fallback logic
- Dynamic content blocks

### 4. Data & Tagging Framework

**Custom Fields:**
- Field names and formats
- Population triggers
- Required vs. optional

**Tag Naming Conventions:**
- Source: `src_webinar-2025`
- Stage: `stage_mql`
- Interest: `int_email-marketing`
- Action: `act_clicked-pricing`

**Lead Scoring Model:**
- Points per action
- Decay rules
- Hand-off thresholds

### 5. Operational SOP

**Team Instructions:**
- Task workflows
- Notification handling
- Manual interventions

**QA Checklist:**
- Test form submissions
- Email render testing
- CRM record updates
- Tag application verification

**Reporting Dashboard:**
- Key metrics
- Review frequency
- Dashboard owners

## Key Automation Types

### Lead Capture → Welcome Series

1. Instant confirmation
2. Value delivery (24h)
3. Brand promise reminder
4. Profile enrichment ask
5. Next step invitation

### Behavior-Based Nurture

- Content tracks by persona/source
- High-intent triggers
- Asset consumption tracking
- Re-engagement sequences

### Sales Pipeline Enablement

- Score threshold deal creation
- Context-rich rep notifications
- Follow-up SLA timers
- Escalation rules

### Customer Onboarding

- Time-based milestones
- Feature adoption tracking
- Education sequences
- Community invitations

### Retention & Win-Back

- Usage monitoring alerts
- Renewal countdowns
- Dormant reactivation
- Churn prevention flows

## Platform Best Practices

- Plain-language flow labels
- Folder organization by lifecycle stage
- UTM tracking in all links
- GDPR/CCPA compliance
- SMS fallback content

## Examples

### Welcome Sequence Automation

**Trigger:** New subscriber via lead magnet opt-in

**Flow:**
```
Day 0 (Immediate) → Email 1: Welcome + Lead Magnet Delivery
    ↓
Day 1 → Email 2: Value Story + Quick Win
    ↓
Day 2 → Email 3: Introduction + Why We're Different
    ↓
Day 4 → Email 4: Common Mistake to Avoid
    ↓
Day 7 → Email 5: Soft CTA + Resource Offer
    ↓
[Exit to Nurture Sequence or Sales Sequence based on engagement]
```

**Email 1 Copy (Immediate):**

Subject: Your [Lead Magnet Name] is ready! 📥

```
Hey {first_name}!

Welcome to the [Brand] family! 🎉

Your [Lead Magnet Name] is ready and waiting for you.

👉 [DOWNLOAD YOUR [LEAD MAGNET] HERE]

Here's what to do with it:

1. Download it now (takes 10 seconds)
2. Read pages 3-7 first (the good stuff)
3. Pick ONE thing to implement today

Most people download stuff like this and never use it.

Don't be most people.

Over the next few days, I'll send you some exclusive tips that aren't in the guide—stuff that's helped our clients [specific result].

Talk soon,
[Name]

P.S. - Reply to this email and tell me: What's your #1 challenge with [topic] right now? I read every response.
```

### Lead Scoring Model Example

**Point System:**

| Action | Points | Decay |
|--------|--------|-------|
| Email open | +1 | -1/30 days |
| Email click | +3 | -1/14 days |
| Website visit | +2 | -1/14 days |
| Pricing page visit | +10 | -2/7 days |
| Demo request | +25 | No decay |
| Content download | +5 | -1/30 days |
| Webinar registration | +10 | -2/30 days |
| Webinar attendance | +15 | -2/30 days |
| Free trial signup | +30 | No decay |
| Email reply | +20 | -2/30 days |

**Thresholds:**

| Score | Status | Action |
|-------|--------|--------|
| 0-10 | Cold | Nurture sequence |
| 11-25 | Warming | Increase frequency |
| 26-50 | MQL | Sales notification |
| 51-75 | SQL | Priority follow-up |
| 76+ | Hot | Immediate sales call |

### Behavior-Based Automation Example

**Trigger:** Visited pricing page but didn't convert

**Wait:** 30 minutes

**Condition Check:** Did they start checkout?
- Yes → Exit flow
- No → Continue

**Email:**

Subject: Quick question about [Product]

```
Hey {first_name},

I noticed you were checking out [Product] earlier.

No pressure at all—I just wanted to see if you had any questions I could help with.

Common things people ask:

• "Is this right for my situation?" [LINK to quiz]
• "What if it doesn't work for me?" [LINK to guarantee]
• "Can I talk to someone first?" [LINK to book call]

If you're still on the fence, reply to this email and tell me what's holding you back.

I'm here to help (not to sell you something you don't need).

[Name]
```

**Wait:** 2 days

**Condition Check:** Did they convert?
- Yes → Welcome/onboarding sequence
- No → Continue

**SMS (optional):**
```
Hey {first_name}! Saw you were interested in [Product]. Have questions? Reply here or call/text me: [Number] -[Name]
```

### Tag Naming Convention

**Format:** `category_subcategory_value`

**Examples:**

| Tag | Meaning |
|-----|---------|
| `src_leadmagnet_email-guide` | Source: Email Guide lead magnet |
| `src_webinar_2024-q4-launch` | Source: Q4 2024 Launch Webinar |
| `int_product_course` | Interested in: Course product |
| `int_topic_email-marketing` | Interested in: Email marketing |
| `stage_mql` | Stage: Marketing Qualified Lead |
| `stage_customer_active` | Stage: Active customer |
| `act_clicked_pricing` | Action: Clicked pricing |
| `act_watched_demo` | Action: Watched demo video |
| `eng_high` | Engagement: High |
| `eng_dormant_30d` | Engagement: Dormant 30+ days |

## Guidelines

**Avoid Automation Mistakes:**
- Never: Send immediately without testing
- Never: Over-automate personal touchpoints
- Avoid: Complex sequences without clear exit points
- Skip: Generic messages that could be from anyone

**Email Timing Best Practices:**
- Welcome email: Within 5 minutes of signup
- Nurture emails: Same day/time each week
- Behavior triggers: 30 min to 2 hours after action
- Abandoned cart: 1 hour, 24 hours, 72 hours
- Re-engagement: After 30 days of inactivity

**Sequence Design Principles:**
- Every sequence needs ONE clear goal
- Every email should have ONE primary CTA
- Include exit conditions (unsubscribe, convert, etc.)
- Build in wait steps—don't overwhelm

**Personalization Rules:**
- Use first name in subject lines sparingly (1-2x/month)
- Dynamic content based on tags/segments
- Always have fallback values: `{first_name|there}`
- Reference their specific actions when possible

**Lead Scoring Best Practices:**
- Start simple (5-10 actions tracked)
- Include decay to reflect recency
- Set clear MQL/SQL thresholds
- Review and adjust quarterly

**Data Hygiene:**
- Remove bounced emails immediately
- Suppress unsubscribes across all lists
- Merge duplicates regularly
- Validate email addresses on entry

**Testing Checklist:**
- Send test to yourself first
- Verify all links work
- Check merge tags render correctly
- Confirm triggers fire properly
- Test on mobile email clients

**Compliance Requirements:**
- CAN-SPAM: Physical address, unsubscribe link
- GDPR: Explicit consent, right to deletion
- CCPA: Clear opt-out mechanism
- All: Honor unsubscribes within 10 days

## Quality Standards

- Every email individually crafted
- Every sequence has clear conversion path
- Every trigger strategically placed
- Every message feels personal
- Every workflow tested and optimized

## Additional Resources

### Reference Files
- **`references/automation-templates.md`** - Workflow templates and sequences
