---
name: sdk-changelog
description: This skill should be used when the user asks to "write SDK examples", "create a changelog", "release notes", "developer documentation", or mentions API examples or technical product updates. Creates clear, actionable developer resources and product communication.
---

# SDK Examples & Changelog Writing

Create professional-grade SDK examples and product changelogs that facilitate developer adoption and keep users informed about product evolution. This skill focuses on technical clarity, code usability, and clear value communication.

## Core Objectives

- Produce clean, working code examples for SDKs
- Communicate product updates through clear, structured changelogs
- Facilitate developer "Time to First Hello World"
- Bridge the gap between technical engineering and user-facing marketing
- Maintain a consistent history of product improvement

## Mandatory Elements

### 1. SDK Documentation
- **Getting Started:** Clear installation instructions (npm, pip, etc.).
- **Code Snippets:** Concise, copy-pasteable examples for core functions.
- **Contextual Comments:** Explaining "why" certain parameters are used.

### 2. Changelog Structure
- **Semantic Versioning:** Clear version numbers (e.g., v1.2.0).
- **Categorization:** Added, Changed, Deprecated, Removed, Fixed, Security.
- **User Impact:** Explaining what the change means for the user.

## Structure & Frameworks

### The "Perfect Example" Framework
1. **Prerequisites:** What you need before running the code.
2. **The Code:** The most minimal version that achieves the goal.
3. **The Explanation:** Breakdown of key components.
4. **The Output:** What the developer should expect to see.

### Changelog Writing Standard
- **Clarity over Cleverness:** "Fixed bug in auth" is better than "Polishing the gates."
- **Action-Oriented:** Use verbs like "Added," "Improved," "Fixed."
- **Link to Docs:** Always link to new documentation for significant feature updates.

## Voice & Tone Guidelines

- **Developer-Centric:** Precise, efficient, and respect the developer's time.
- **Transparent:** Honest about bugs fixed and changes made.
- **Concise:** No fluff. Get straight to the technical point.
- **Formatting:** Heavy use of backticks for code symbols and markdown tables for changelogs.

## Concrete Examples

### SDK Example: Authentication
```javascript
import { Client } from 'click-campaigns-sdk';

// Initialize the client
const client = new Client({
  apiKey: process.env.CC_API_KEY
});

// Fetch your first campaign
const campaign = await client.campaigns.get('camp_123');
console.log(`Successfully fetched: ${campaign.name}`);
```

### Changelog Entry: v2.1.0
| Category | Change |
|----------|--------|
| **Added** | Parallel execution support for LangGraph agents. |
| **Fixed** | Resolved race condition in WebSocket reconnection logic. |
| **Changed** | Updated `instructionLoader` to prioritize local skills over fallbacks. |
| **Security** | Patched dependency vulnerability in `yaml-parser`. |

## Quality Checklist

For every output, ask:
- [ ] Is the code example copy-pasteable and working?
- [ ] Are all prerequisites for the SDK example listed?
- [ ] Is the changelog categorized correctly (Added/Fixed/etc.)?
- [ ] Is the technical terminology accurate for the target platform?
- [ ] Would a new developer find this helpful within 30 seconds?
