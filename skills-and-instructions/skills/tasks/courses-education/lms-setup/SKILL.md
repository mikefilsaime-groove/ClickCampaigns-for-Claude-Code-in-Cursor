---
name: lms-setup
description: This skill should be used when the user asks to "set up an LMS", "configure course platform", "install learning management system", "setup member area", or mentions Kajabi, Teachable, Thinkific, or custom LMS configuration. Creates technical setup plans for online course platforms.
---

# LMS Setup & Configuration

Configure robust, user-friendly Learning Management Systems (LMS) that provide a seamless learning experience for students. This skill focuses on the technical architecture of the student portal, payment integration, and content delivery mechanics.

## Core Objectives

- Architect a secure, organized student portal
- Configure course access and drip-feed mechanics
- Integrate payment gateways with user account creation
- Set up community and engagement features (forums, comments)
- Ensure mobile-responsive and high-performance lesson delivery

## Mandatory Elements

### 1. Platform Architecture
- **Membership Levels:** Defining access tiers (e.g., Bronze, Silver, Gold).
- **Navigation:** Clear sidebar/top-bar for course progress and resources.
- **Security:** SSL, password management, and anti-piracy measures.

### 2. Integration Stack
- **Payment Gateway:** Stripe/PayPal integration with recurring or one-time options.
- **Webhook Logic:** Auto-creating accounts upon purchase.
- **Email Notification:** "Access Granted" and "Login Details" automation.

## Structure & Frameworks

### The "Frictionless Onboarding" Framework
1. **Purchase:** Success page redirects to account creation.
2. **Setup:** User sets password and completes profile.
3. **Tour:** Immediate guided tour of the LMS interface.
4. **Quick Start:** Link to "Lesson 0" or "Welcome Video."

### Technical Setup Checklist
- **Domain Mapping:** Custom subdomains (e.g., members.yourbrand.com).
- **Video Hosting:** Integration with Wistia, Vimeo, or YouTube.
- **File Storage:** Secure downloads for worksheets and PDFs.
- **Progress Tracking:** Enabling student completion markers.

## Voice & Tone Guidelines

- **Professional & Structured:** Focus on technical reliability and organization.
- **Clear & Actionable:** Use simple labels for complex configurations.
- **Supportive:** Anticipate student friction points (e.g., login issues).
- **Formatting:** Use checklists for setup steps and tables for membership tier comparisons.

## Concrete Examples

### Webhook Specification: Purchase to LMS
| Field | Value | Action |
|-------|-------|--------|
| `event` | `charge.succeeded` | Trigger Account Creation |
| `email` | `{{customer_email}}` | Set as Username |
| `product_id` | `prod_987` | Grant Access to [Course A] |

### Student Portal Layout Spec
- **Sidebar:** [Course Modules] [Resources] [Community]
- **Header:** [My Profile] [Support] [Logout]
- **Main Area:** [Video Player] [Lesson Text] [Comments Section]

## Quality Checklist

For every setup plan, ask:
- [ ] Is the payment-to-account automation verified?
- [ ] Are membership levels clearly defined and restricted?
- [ ] Is the mobile experience as smooth as the desktop?
- [ ] Are all external resources (PDFs, Videos) linked and working?
- [ ] Does the student receive immediate access after payment?
