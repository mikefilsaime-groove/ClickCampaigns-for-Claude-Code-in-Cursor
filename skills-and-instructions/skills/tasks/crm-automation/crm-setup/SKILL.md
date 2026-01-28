---
name: crm-setup
description: This skill should be used when the user asks to "set up CRM", "configure CRM", "CRM implementation", "CRM objects and fields", or mentions HubSpot, Salesforce, Pipedrive, or CRM platforms. Creates technical implementation plans for CRM configuration and data architecture.
---

# CRM Setup & Configuration

Design and implement robust CRM architectures that organize customer data, automate workflows, and enable data-driven marketing and sales decisions through proper object modeling, field mapping, and pipeline configuration.

## Core Objectives

- Organize customer data with logical object relationships
- Configure pipelines that reflect actual sales/marketing processes
- Enable automation through proper field mapping and triggers
- Ensure data integrity and consistency across the system
- Facilitate reporting and analytics through proper data structure

## Mandatory Elements

### 1. Object Architecture
- **Core Objects:** Contacts, Companies, Deals/Opportunities, Activities
- **Custom Objects:** Industry-specific entities (Projects, Events, etc.)
- **Relationships:** One-to-many, many-to-many relationships defined
- **Field Types:** Text, number, date, picklist, formula fields

### 2. Pipeline Configuration
- **Stages:** Logical progression from lead to customer
- **Stage Criteria:** Clear definitions of when to move between stages
- **Automation Rules:** Auto-advance based on activities or criteria
- **Win/Loss Reasons:** Tracking why deals close or don't close

### 3. Data Import & Migration
- **Data Mapping:** Source fields → CRM fields mapping
- **Data Cleaning:** Deduplication, standardization, validation
- **Import Process:** Step-by-step migration plan
- **Verification:** Post-import data quality checks

## Structure & Frameworks

### The "Process-First" Framework
1. **Map Current Process:** Document existing workflows first
2. **Design CRM Structure:** Model CRM to match (not force process change)
3. **Configure Automation:** Automate repetitive tasks
4. **Train & Iterate:** User adoption and continuous improvement

### CRM Setup Checklist
- **Objects & Fields:** Core and custom objects defined
- **Pipelines:** Sales and marketing pipelines configured
- **Users & Permissions:** Role-based access control set up
- **Integrations:** Email, calendar, website forms connected
- **Automation:** Workflow rules and triggers configured
- **Reporting:** Dashboards and reports created

## Voice & Tone Guidelines

- **Technical & Precise:** Use CRM platform terminology accurately
- **Process-Oriented:** Focus on workflows and business logic
- **Implementation-Focused:** Provide actionable configuration steps
- **Formatting:** Use tables for field mappings, checklists for setup steps

## Concrete Examples

### Object Relationship Example
```text
"Object Architecture:

• Contact (One) → Company (Many): One contact belongs to one company
• Contact (Many) → Deal (Many): Contacts can have multiple deals
• Deal (One) → Pipeline Stage (Many): Deals move through stages
• Activity (Many) → Contact/Deal (One): Activities linked to records"
```

### Pipeline Stage Definition
```text
"Sales Pipeline Stages:

1. Lead: Initial inquiry received
2. Qualified: BANT criteria met (Budget, Authority, Need, Timeline)
3. Demo Scheduled: Product demo booked
4. Proposal Sent: Formal proposal delivered
5. Negotiation: Terms being discussed
6. Closed Won: Deal closed successfully
7. Closed Lost: Deal lost (with reason tracked)"
```

## Quality Checklist

For every CRM setup plan, ask:
- [ ] Does the object structure match the actual business process?
- [ ] Are pipeline stages clearly defined with criteria?
- [ ] Is data migration plan complete and tested?
- [ ] Are automation rules configured to reduce manual work?
- [ ] Will this structure enable meaningful reporting and insights?
