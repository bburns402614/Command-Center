// AUTO-GENERATED from bburns402614/PM-Brain repository
// Do not edit manually — re-run scripts/build-pm-brain-context.ts to refresh

export const PM_BRAIN_CONTEXT = `## PM Brain — Overview

# 🧠 PM Brain-as-Code

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/) [![GitHub stars](https://img.shields.io/github/stars/andreaskelm/pm-brain?style=social)](https://github.com/andreaskelm/pm-brain) [![GitHub forks](https://img.shields.io/github/forks/andreaskelm/pm-brain?style=social)](https://github.com/andreaskelm/pm-brain/fork)

> **Your external product management brain. Single source of truth = latest commit.**

A living knowledge base that bridges the gap between Product Management frameworks and actual operational execution. Git-versioned, shareable, ready to use.

**Product teams drown in blog posts and frameworks** but don't know *how* to run sprint planning on Tuesday morning or write a strategy document by end-of-day. This gives you battle-tested guides, templates, and playbooks. Built for everyone from junior PMs to senior leads.

🚀 **Get started:** clone the repo → add your context → start shipping

**Quick links:** [Quick Start](#-how-to-get-started) · [What's Inside](#-whats-inside) · [Structure](#-system-structure-philosophy) · [Daily Workflow](#-daily-workflow)

## 📦 What's Inside

\`\`\`text
📦 PM Brain-as-Code
├── 🧭 Frameworks: decision models and methods that actually help you choose what to do next  
├── 📋 Step-by-step guides: checklists and how-tos for running key rituals and processes  
├── 📄 Copy-paste templates: PRDs, one-pagers, roadmaps, communication, and more, ready to fill in  
├── 🚨 Scenario playbooks: what to do when things go sideways (incidents, tough conversations, tradeoffs)  
├── 🏢 Company context: vision, strategy, principles, portfolio, roadmap, and stakeholders that don't go stale  
└── 🤖 Prompt libraries: structured thinking prompts for AI tools (ChatGPT, Claude, Gemini, GitHub Copilot, Cursor, etc.)
\`\`\`

**Always up-to-date:** Latest commit = current reality. No stale documents or long forgotten context in Notion, SharePoint or Confluence that nobody updates.  

---

## 🚀 How to Get Started

### Option 1: Manual (Copy-Paste into AI Tools)

**Best for:** ChatGPT, Claude, Gemini, Microsoft Copilot, or other chat-based AI tools.

1. **Browse** to the folder you need:
   - \`01-Company-Context/\` – for company strategy, vision, stakeholders
   - \`02-Methods-and-Tools/\` – for frameworks, guides, templates, playbooks
   - \`03-Research-Artifacts/\` – for research storage structure
   - \`04-Initiatives/\` – for opportunity assessments and initiative planning

2. **Before using templates: Braindump first**
   - Don't jump straight to filling templates. Start by dumping your thoughts, ideas, and concerns.
   - Use the braindumping prompts in each framework to capture your raw thinking first.
   - Let your product sense and intuition guide initial thoughts before structuring them.

3. **Copy** the relevant README + template files.

4. **Paste** into your AI chat session with a prompt like:
   \`\`\`
   Here's the structure I use for [product strategy / PRDs / OKRs / etc.].
   
   First, help me braindump my thoughts on [topic]. Quiz me, challenge my assumptions, and help me think through this before we structure it.
   
   Then help me fill it out / adapt it for [my context].
   \`\`\`
4. **Save for reuse** (recommended):
   - Upload files to your AI tool's project feature (ChatGPT's "My GPTs", Claude's "Projects", etc.)
   - Or save the conversation for future reference
   - Reuse templates without re-copying each time

### Option 2: Technical (Clone & Use with IDE AI Tools)

**Best for:** GitHub users with VS Code, Cursor, GitHub Copilot, Replit, or similar IDE AI tools.

1. **Clone** the repo:
   \`\`\`bash
   git clone https://github.com/andreaskelm/pm-brain.git
   cd pm-brain
   \`\`\`

2. **Plug in your context:**
   - Replace placeholders in \`01-Company-Context/\` with your actual vision, strategy, principles
   - Customize templates in \`02-Methods-and-Tools/\` for your workflows

3. **Start using (think first, structure second):**
   - **Braindump before structuring**: Use the braindumping prompts in each framework to capture your raw thoughts first
   - **Develop product sense**: Use the product sense exercises and reflection prompts to build judgment
   - **Think critically**: Let frameworks guide your thinking, not replace it. Answer the quiz questions honestly.
   - Use frameworks and guides in \`02-Methods-and-Tools/\` for daily work
   - Store research in \`03-Research-Artifacts/\`
   - Document initiatives in \`04-Initiatives/\`

4. **Optional:** Point your IDE's AI tools at this repo as project context.

---

## 🏗️ System Structure Philosophy

This is a **PM brain-as-code**, not a random notes folder. The directories represent different **types of work** and **layers of your product system**, not a rigid sequential process.

### Four Core Layers

\`\`\`text
pm-brain/
├── 01-Company-Context/        # 🏢 Strategic foundation (vision, strategy, metrics, stakeholders)
├── 02-Methods-and-Tools/      # 🧭 PM operating system (frameworks, guides, templates, prompts)
├── 03-Research-Artifacts/     # 🔍 Evidence layer (interview notes, synthesis, findings)
└── 04-Initiatives/            # 🚧 Active bets (early thinking, opportunity assessments, docs)
\`\`\`

### Optional Layers

\`\`\`text
├── 08-Prototypes/             # 🧪 Experiments and prototype implementations
└── 09-Personal-Context/       # 🧑 Personal notes (keep sensitive content in private fork)
\`\`\`

## 🔄 Daily Workflow

1. **Reference** \`01-Company-Context/\` for strategic direction and company information.
2. **Use** \`02-Methods-and-Tools/\` when you need a process, framework, template, or playbook.
3. **Store** research outputs in \`03-Research-Artifacts/\` after completing discovery work.
4. **Do** your active product work in \`04-Initiatives/\` (planning, documenting, iterating).

### How Frameworks Work Together

The frameworks follow a natural product development flow:

**0. Early Thinking** (\`04-Initiatives/\`) → Capture ideas and hypotheses

**1. Discover** (\`2.3-Discovery/\`) → Interview users, observe behavior, collect stories

**2. Define** (\`2.3.3-Jobs-To-Be-Done/\`) → Frame problems as jobs and opportunities

**3. Assess** (\`2.3.4-Opportunity-Assessment/\`) → Document and assess opportunities
**4. Decide** (\`2.3.5-Idea-Validation/\`) → Generate solutions and validate assumptions

**5. Deliver** (\`2.1.4-PRD/\`) → Write requirements and build

**6. Launch & Learn** (\`2.1.2-OKR/\` and \`2.1.3-Roadmap/\`) → Measure outcomes and iterate

---

## 📂 What's Inside \`02-Methods-and-Tools/\`

Content is organized by **domain** and **numbered frameworks**:

\`\`\`text
02-Methods-and-Tools/
├── 2.1-Strategy/            # Strategy, OKRs, roadmaps, PRDs, personas
│   ├── 2.1.1-Product-Strategy/
│   ├── 2.1.2-OKR/
│   ├── 2.1.3-Roadmap/
│   ├── 2.1.4-PRD/
│   ├── 2.1.5-Personas/
│   ├── 2.1.6-North-Star/        (placeholder)
│   └── 2.1.7-Prioritization/    (placeholder)
├── 2.2-Communication/       # Newsletters, stakeholder comms, courses
│   ├── 2.2.1-Newsletter/
│   ├── 2.2.2-Meeting-Agendas/   (placeholder)
│   ├── 2.2.3-One-Pagers/        (placeholder)
│   ├── 2.2.4-Crisis-Management/ (placeholder)
│   └── 2.2.9-Courses/
├── 2.3-Discovery/           # Continuous discovery, JTBD, validation
│   ├── 2.3.1-Research-Interviews/
│   ├── 2.3.2-Continuous-Discovery-Habits/
│   ├── 2.3.3-Jobs-To-Be-Done/
│   ├── 2.3.4-Opportunity-Assessment/
│   └── 2.3.5-Idea-Validation/
└── 2.9-Other/               # Mental models and supporting methods
    └── 2.9.1-Mental-Models/
\`\`\`

**Key examples:**
- Product strategy: \`2.1-Strategy/2.1.1-Product-Strategy/\`
- OKRs: \`2.1-Strategy/2.1.2-OKR/\`
- PRDs: \`2.1-Strategy/2.1.4-PRD/\`
- Research interviews: \`2.3-Discovery/2.3.1-Research-Interviews/\`
- Continuous discovery: \`2.3-Discovery/2.3.2-Continuous-Discovery-Habits/\`
- Jobs-to-be-Done: \`2.3-Discovery/2.3.3-Jobs-To-Be-Done/\`
- Opportunity assessment: \`2.3-Discovery/2.3.4-Opportunity-Assessment/\`
- Idea validation: \`2.3-Discovery/2.3.5-Idea-Validation/\`

See \`02-Methods-and-Tools/README.md\` for complete navigation guide.

---

## 🎓 Who This Is For

**Junior PMs (APMs, Associate PMs)**
- Actionable steps: actual interview guides, templates, checklists
- Process reminders: step-by-step guides for planning, discovery, delivery
- Clear escalation paths: when to involve senior PMs or leadership

**Mid-Level PMs**
- Framework reference: prioritization models, strategy frameworks, discovery patterns
- Template library: PRDs, one-pagers, communication templates
- Stakeholder patterns: managing expectations, saying no, aligning teams

**Senior PMs & Leads**
- Onboarding accelerator: point new hires at this system instead of repeating yourself
- Team alignment: shared language, artifacts, and guides
- Knowledge preservation: your team's operating system doesn't leave when someone does

---

## 📋 Quick Start Guides

**New Team Member:**
1. Read \`01-Company-Context/\` to understand vision, strategy, decision-making
2. Browse \`02-Methods-and-Tools/\` to see team approaches
3. Study \`03-Research-Artifacts/\` before talking to customers
4. Review \`04-Initiatives/\` to see what's in-flight

**Experienced PM:**
1. Go to \`02-Methods-and-Tools/\` for the topic you need (PRDs, discovery, OKRs)
2. Grab the relevant framework + guide + template
3. Update frameworks when reality diverges — commit improvements
4. Keep \`01-Company-Context/\` updated for newcomers

**Crisis or Time Pressure:**
1. Go to relevant framework in \`02-Methods-and-Tools/\` (e.g., \`2.2.4-Crisis-Management/\`)
2. Use connected guides and templates to respond quickly
3. Log learnings in framework guides to improve the system

---

## 🔧 Maintenance

**Living document principle:**
- Update when you use it: spot gaps → fix them
- Let git be the changelog: clear commit messages
- Prefer improvements over TODOs: make the change or log it in backlog

**Review cadence:**
- **Weekly**: Update initiatives and progress
- **Monthly**: Review frameworks and templates you touched
- **Quarterly**: Revisit company context (strategy, roadmap, OKRs)
- **Annually**: Cleanup folder structure and archive stale experiments

---

## 🤝 Contributing

Two ways to use this:

1. **Fork privately** (recommended for real company context)
2. **Contribute improvements** to public template (generic frameworks, guides, patterns)

When contributing:
1. Follow established folder and naming conventions
2. Keep examples generic (no proprietary information)
3. Use clear commit messages (what changed, why, for whom)
4. Share learnings: mention scenarios the guide handles
5. Respect placeholders: use brackets where teams plug in context

---

## 👤 Created by [Andreas Kelm](https://github.com/andreaskelm)

⭐ Star this repo if you find it useful • 🔀 Fork it to customize for your team

---

## 📚 Credits & Attributions

This repository builds on frameworks from product management thought leaders. See [\`CREDITS.md\`](./CREDITS.md) for full attributions and ways to support the original creators.

---

## 📄 License

This work is licensed under CC BY-NC-SA 4.0.

Copyright © 2025 Andreas Kelm. You may view, use, modify, and share this repo with attribution for non-commercial purposes. Commercial sale is not permitted, but you may use it internally for work and business.

Full license: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode

---

## Company Vision

# [Company] Company Vision

## Introduction

This document defines your company's mission, vision, core values, target market, and competitive position. It serves as the north star for all strategic decisions and should be referenced when making product, technology, and business choices.

> **Note:** This document should be the outcome of actual strategy work using a Product Strategy method. The content below is placeholder text that should be replaced with your company's actual vision, mission, and values developed through the strategic planning process.
>
> **How to create this:** Use strategy methods in \`../02-Methods-and-Tools/2.1-Strategy/2.1.1-Product-Strategy/\` (and related guides) to conduct leadership interviews, analyze market conditions, and synthesize insights into a clear vision statement. This document should reflect the strategic decisions made during that process.

## Mission
[Company] is a leading [industry/domain] company, specializing in [key product/service areas]. Our mission is to enable [strategic goal] through innovative [solution type] and market expertise.

**Example:** [Company] is a leading SaaS platform company, specializing in customer relationship management and marketing automation. Our mission is to enable businesses to build stronger customer relationships through innovative technology solutions and market expertise.

## Vision
To be the most trusted partner in [target market], driving [strategic outcomes] and creating value for our customers and stakeholders.

**Example:** To be the most trusted partner in enterprise software solutions, driving digital transformation and creating measurable value for our customers and stakeholders.

## Core Values
- **Integrity**: We operate with the highest ethical standards
- **Innovation**: We continuously improve and adapt to market changes
- **Excellence**: We strive for operational excellence in everything we do
- **Collaboration**: We work together to achieve common goals

**Note:** Core values should be developed through leadership interviews and team workshops, reflecting what truly matters to your organization.

## Target Market
- [Target market segment 1]
- [Target market segment 2]
- [Target market segment 3]

**Example:**
- Enterprise customers with complex requirements
- Mid-market companies seeking scalable solutions
- Small businesses requiring affordable, easy-to-use tools

## Competitive Position
[Company] is positioned as a reliable, innovative partner in [target market] with deep expertise in:
- [Area of expertise 1]
- [Area of expertise 2]
- [Area of expertise 3]

**Example:** [Company] is positioned as a reliable, innovative partner in enterprise software with deep expertise in:
- Customer data management and analytics
- Integration capabilities and API-first architecture
- Industry-specific compliance and security

---

## How to Use This Document

- **Strategic Alignment**: Reference when making strategic decisions to ensure alignment with company vision
- **Product Planning**: Use to guide product roadmap and feature prioritization
- **Team Onboarding**: Share with new team members to provide company context
- **Stakeholder Communication**: Reference in presentations and communications

## How to Maintain

- **Annual Review**: Review and update annually as part of strategic planning cycle
- **After Major Changes**: Update when company direction, market position, or values evolve
- **Leadership Input**: Ensure leadership team reviews and approves any changes
- **Version History**: Track significant changes in git commit messages

> **Related Methods & Tools**: See strategy methods in \`../02-Methods-and-Tools/2.1-Strategy/2.1.1-Product-Strategy/\` and roadmap/OKR planning guides in \`../02-Methods-and-Tools/2.1-Strategy/\` for developing product strategy aligned with company vision. 		

---

## Company Strategy

# [Company] Strategy Overview

## Introduction

This document outlines your company's strategic priorities, key initiatives, success metrics, and technology strategy. It bridges the gap between vision and execution, providing actionable direction for product and technology teams.

> **Note:** This document should be the outcome of actual strategy work using the Product Strategy framework. The content below is placeholder text that should be replaced with your company's actual strategic priorities, initiatives, and metrics developed through the strategic planning process.
>
> **How to create this:** Follow the Product Strategy framework process (8-12 weeks) to conduct research, identify opportunities, score strategic pillars, and develop this strategy document. This should reflect real strategic choices made by your leadership team.

> How we create and align strategy
- We use a lightweight Product Strategy framework to bridge mission/vision to an actionable plan through 3–5 strategic pillars, explicit non-goals, and clear rationale.
- Framework and guides: see strategy methods in \`../02-Methods-and-Tools/2.1-Strategy/2.1.1-Product-Strategy/\`
- Operationalization: Pillars map to OKRs (Objective/KR IDs) and are communicated via monthly newsletters and stakeholder updates.

## Strategic Priorities

**Note:** Strategic priorities should emerge from the strategy sprint process (scoring opportunities across 4 dimensions: Expected Impact, Certainty of Impact, Clarity of Levers, and Uniqueness of Levers). These should be your top 3-5 strategic pillars.

1. **Market Leadership**: Maintain and expand our position as a leading [industry/domain] [company type]
2. **Digital Transformation**: Leverage technology to improve [key operational area] efficiency and [key capability]
3. **Sustainability Focus**: Lead in [sustainability-related area] and [green/sustainable solutions]
4. **Geographic Expansion**: Expand into new [market type] and products

**Example:**
1. **Product-Led Growth**: Enable self-service discovery and adoption of advanced features
2. **Platform Scalability**: Build infrastructure to support 10x customer growth
3. **Enterprise Readiness**: Develop enterprise-grade features for large organizations

## Key Initiatives

**Note:** Initiatives should directly support your strategic priorities and be derived from the "How Might We" statements developed for each pillar.

- **[Initiative 1]**: [Description of initiative and expected outcome]
- **[Initiative 2]**: [Description of initiative and expected outcome]
- **[Initiative 3]**: [Description of initiative and expected outcome]

**Example:**
- **In-App Feature Discovery**: Build contextual in-app guidance to help users discover advanced features, targeting 30% increase in feature adoption
- **API Performance Optimization**: Reduce API latency by 50% to support enterprise-scale usage
- **Enterprise SSO & Compliance**: Implement single sign-on and SOC 2 compliance to enable enterprise sales

## Success Metrics

**Note:** Each strategic priority should have primary, secondary, and guardrail metrics defined. These should be measurable and tied to business outcomes.

- **[Metric 1]**: [Description of what this measures]
- **[Metric 2]**: [Description of what this measures]
- **[Metric 3]**: [Description of what this measures]

**Example:**
- **Feature Adoption Rate**: Percentage of users actively using advanced features (target: 40% increase)
- **API Response Time**: P95 latency for core API endpoints (target: <200ms)
- **Enterprise Customer Acquisition**: Number of enterprise deals closed (target: 20% increase)

## Market Focus

**Note:** Market focus should be informed by competitive analysis, user research, and market opportunity assessment conducted during strategy preparation.

- **Primary Markets**: [List primary target markets]
- **Secondary Markets**: [List secondary target markets]
- **Emerging Opportunities**: [List emerging market opportunities]

**Example:**
- **Primary Markets**: North American enterprise software market, European mid-market
- **Secondary Markets**: Asia-Pacific SMB segment
- **Emerging Opportunities**: Vertical-specific solutions for healthcare and financial services

## Technology Strategy

**Note:** Technology strategy should align with your strategic priorities and support the key initiatives. This should reflect technical constraints and opportunities identified during strategy work.

- **[Technology Capability 1]**: [Description of capability and how it supports strategy]
- **[Technology Capability 2]**: [Description of capability and how it supports strategy]
- **[Technology Capability 3]**: [Description of capability and how it supports strategy]

**Example:**
- **Real-time Analytics**: Low-latency data processing to enable instant insights for enterprise customers
- **API-First Architecture**: Scalable API platform to support partner integrations and platform growth
- **Cloud-Native Infrastructure**: Auto-scaling infrastructure to handle 10x growth without performance degradation

---

## How to Use This Document

- **Roadmap Alignment**: Use strategic priorities to guide roadmap planning and initiative selection
- **OKR Development**: Map strategic priorities to OKR Objectives and Key Results
- **Decision Making**: Reference when evaluating new opportunities or making resource allocation decisions
- **Team Communication**: Share with teams to provide strategic context for their work

## How to Maintain

- **Quarterly Reviews**: Review and update quarterly as part of OKR cycle
- **After Strategy Refresh**: Update when completing new strategy cycle (typically every 1-2 years)
- **Initiative Tracking**: Update key initiatives as they progress or complete
- **Metric Updates**: Review success metrics quarterly and adjust as needed
- **Leadership Alignment**: Ensure leadership team reviews and approves changes

> **Next Steps:** Once strategy is defined, operationalize by mapping strategic priorities to OKRs and seeding your roadmap with supporting initiatives. See OKR and roadmap methods in \`../02-Methods-and-Tools/2.1-Strategy/2.1.2-OKR/\` and \`../02-Methods-and-Tools/2.1-Strategy/2.1.3-Roadmap/\`, and \`./5-company-roadmap.md\` for next steps. 

---

## Product Principles

# [Company] Product Principles

## Introduction

This document defines the core principles that guide product development at [Company]. These principles ensure consistency in decision-making, help prioritize work, and maintain quality standards across all products and initiatives.

## Core Principles

### 1. Market-Driven Innovation
- **Customer-Centric**: All products must solve real customer problems
- **Market Validation**: Test assumptions with actual market feedback
- **Iterative Development**: Build, measure, learn, and improve continuously

### 2. [Risk/Safety] Management First
- **Safety First**: Never compromise on [risk/safety] management
- **Transparency**: Clear [risk/safety] reporting and communication
- **Automation**: Automated [risk/safety] controls where possible
- **Compliance**: Always meet regulatory requirements

### 3. Technology Excellence
- **Performance**: [Performance requirement] systems (e.g., [latency target] response times, [reliability target] uptime)
- **Scalability**: Systems that grow with our business
- **Integration**: Seamless connectivity across platforms
- **Data Quality**: Accurate, timely, and complete data

### 4. Sustainability Focus
- **Green Transition**: Support [sustainability goal]
- **Environmental Impact**: Measure and minimize our footprint
- **ESG Integration**: Environmental, social, and governance considerations

## Product Development Process

### Discovery Phase
- **Market Research**: Understand customer needs and market dynamics
- **Competitive Analysis**: Identify opportunities and threats
- **Regulatory Review**: Ensure compliance with [industry] regulations
- **Risk Assessment**: Evaluate potential risks and mitigations

> **Related Methods & Tools**: See discovery methods in \`../02-Methods-and-Tools/2.3-Discovery/\` including opportunity assessment (\`2.3.4-Opportunity-Assessment/\`) and validation methods (\`2.3.5-Idea-Validation/\`).

### Design Phase
- **User Experience**: Intuitive interfaces for [primary user types]
- **System Architecture**: Robust, scalable technical design
- **Integration Planning**: Seamless connection with existing systems
- **Testing Strategy**: Comprehensive testing and validation

### Development Phase
- **Agile Methodology**: Iterative development with regular feedback
- **Quality Assurance**: Rigorous testing and validation
- **Documentation**: Comprehensive technical and user documentation
- **Training**: User training and change management

### Launch Phase
- **Go-to-Market**: Clear launch strategy and communication
- **Monitoring**: Real-time performance and [risk/safety] monitoring
- **Feedback Collection**: User feedback and improvement tracking
- **Iteration**: Continuous improvement based on usage data

> **Related Methods & Tools**: See PRD templates in \`../02-Methods-and-Tools/2.1-Strategy/2.1.4-PRD/\` and the overview in \`../02-Methods-and-Tools/README.md\`.

## Success Criteria

### Technical Excellence
- **Performance**: [Performance target] for critical functions (e.g., [time target] response times)
- **Reliability**: [Uptime target]%+ uptime for [critical systems]
- **Security**: Enterprise-grade security and data protection
- **Scalability**: Handle [growth target]x current volume without degradation

### Business Impact
- **Revenue Growth**: Measurable increase in [key business metric]
- **[Risk/Safety] Reduction**: Improved [risk/safety] management and compliance
- **Customer Satisfaction**: High user adoption and satisfaction
- **Operational Efficiency**: Reduced manual processes and errors

### Innovation Metrics
- **Time to Market**: Faster product development cycles
- **Feature Adoption**: High usage of new features
- **Market Share**: Growth in target markets
- **Competitive Advantage**: Unique capabilities and differentiation

---

## How to Use This Document

- **Decision Framework**: Reference principles when making product decisions or evaluating trade-offs
- **Team Alignment**: Use to align teams on shared values and standards
- **PRD Development**: Reference when writing product requirements to ensure alignment
- **Quality Standards**: Use success criteria to define acceptance criteria for products

## How to Maintain

- **Annual Review**: Review principles annually with product leadership team
- **After Major Changes**: Update when company direction or market conditions significantly change
- **Team Feedback**: Gather feedback from product teams on principle effectiveness
- **Evolution**: Principles should evolve with company maturity and market conditions

> **Related Methods & Tools**: See \`../02-Methods-and-Tools/README.md\` for the overall methods overview and \`../02-Methods-and-Tools/2.1-Strategy/2.1.4-PRD/\` for product requirements documentation. 

---

## Product Explanation

# [Company] Product Portfolio

## Introduction

This document provides an overview of your company's product portfolio, including core products, services, technology solutions, and customer segments. Use this to understand what products you offer, who they serve, and how they're organized.

## Core [Product Category] Products

### [Product Type 1]
- **[Sub-product 1]**: [Description of what this product does]
- **[Sub-product 2]**: [Description of what this product does]
- **[Sub-product 3]**: [Description of what this product does]

**Example:** Web & Mobile Applications
- **Web Application**: Browser-based platform for [primary use case]
- **Mobile App (iOS/Android)**: Native mobile experience for [mobile use case]
- **Progressive Web App (PWA)**: Cross-platform web application with offline capabilities

### [Product Type 2]
- **[Sub-product 1]**: [Description of what this product does]
- **[Sub-product 2]**: [Description of what this product does]
- **[Sub-product 3]**: [Description of what this product does]

**Example:** Platform & Infrastructure
- **API Platform**: RESTful APIs and developer tools for integrations
- **Data Platform**: Data storage, processing, and analytics infrastructure
- **Integration Services**: Pre-built connectors to popular third-party systems

### [Product Type 3]
- **[Sub-product 1]**: [Description of what this product does]
- **[Sub-product 2]**: [Description of what this product does]
- **[Sub-product 3]**: [Description of what this product does]

**Example:** Enterprise Solutions
- **Enterprise Edition**: Advanced features for large organizations
- **White-label Solution**: Customizable branding and deployment options
- **On-premise Deployment**: Self-hosted solution for security-sensitive customers

## [Service Category 1]

### [Service Sub-category 1]
- **[Service 1]**: [Description of service functionality]
- **[Service 2]**: [Description of service functionality]
- **[Service 3]**: [Description of service functionality]

**Example:** Customer Success
- **Implementation Services**: Onboarding and setup assistance for new customers
- **Customer Support**: Technical support via email, chat, and phone
- **Account Management**: Dedicated account managers for enterprise customers

### [Service Sub-category 2]
- **[Service 1]**: [Description of service functionality]
- **[Service 2]**: [Description of service functionality]
- **[Service 3]**: [Description of service functionality]

**Example:** Professional Services
- **Custom Development**: Tailored solutions for specific customer needs
- **Consulting Services**: Strategic guidance and best practices
- **Integration Support**: Assistance with complex system integrations

## Technology Solutions

### [Platform Category 1]
- **[Platform Component 1]**: [Description of component functionality]
- **[Platform Component 2]**: [Description of component functionality]
- **[Platform Component 3]**: [Description of component functionality]

**Example:** Platform Components
- **Authentication & Authorization**: User management and access control
- **Payment Processing**: Billing and subscription management
- **Notification System**: Email, SMS, and in-app notifications

### Analytics & Intelligence
- **[Analytics Type 1]**: [Description of analytics capability]
- **[Analytics Type 2]**: [Description of analytics capability]
- **[Analytics Type 3]**: [Description of analytics capability]

**Example:** Analytics & Intelligence
- **Business Intelligence**: Dashboards and reports for business metrics
- **User Analytics**: User behavior tracking and insights
- **Performance Monitoring**: System health and performance metrics

## Customer Segments

### [Customer Segment 1]
- [Description of customer type]
- [Description of customer type]
- [Description of customer type]

**Example:** Enterprise Customers
- Large organizations with complex requirements
- Need for custom integrations and dedicated support
- Require compliance certifications and security features

### [Customer Segment 2]
- [Description of customer type]
- [Description of customer type]
- [Description of customer type]

**Example:** Small & Medium Business (SMB)
- Mid-market companies with standard needs
- Value ease of use and quick time-to-value
- Prefer self-service onboarding and support

### [Customer Segment 3]
- [Description of customer type]
- [Description of customer type]
- [Description of customer type]

**Example:** Individual Consumers / Pro Users
- Individual users or small teams
- Focus on core functionality and affordability
- Self-serve purchase and onboarding

---

## How to Use This Document

- **Product Planning**: Reference when planning new products or features to understand portfolio context
- **Customer Understanding**: Use customer segments to inform persona development and user research
- **Stakeholder Communication**: Share with stakeholders to provide product portfolio overview
- **Strategic Planning**: Reference when making strategic decisions about product investments

## How to Maintain

- **Quarterly Reviews**: Review and update quarterly as products evolve or new ones are added
- **After Product Launches**: Update when new products or major features are launched
- **Customer Segment Updates**: Update customer segments as market understanding evolves
- **Portfolio Changes**: Update when products are retired or significantly changed

> **Related Methods & Tools**: See persona and segmentation methods in \`../02-Methods-and-Tools/2.1-Strategy/2.1.5-Personas/\` and related discovery methods in \`../02-Methods-and-Tools/2.3-Discovery/\` for guidance on defining customer segments and personas. 

---

## Company Roadmap

# [Company] Roadmap

## Introduction

This is the company-wide roadmap that aggregates strategic initiatives from all business units. It represents the company's overall product and technology direction using a confidence-based planning approach (NOW, NEXT, LATER).

> **Company-wide roadmap across all business units**  
> This roadmap aggregates strategic initiatives from all business units and represents the company's overall product and technology direction.

## Disclaimer

**This roadmap is not a commitment.** It reflects current priorities but is subject to change based on feedback, market shifts, and new opportunities.

**Updated on:** [Date] | **Next review:** [Date]

---

## 🗓️ NOW (High Confidence 70-90%) - Q[X] 2025

| Initiative | Target Outcome | Success Metrics | Confidence | Dependencies |
|------------|----------------|-----------------|------------|--------------|
| [Initiative Name] | [Business outcome this achieves] | [How we'll measure success] | 🟢 | [What we need from others] |

### Example:
| Initiative | Target Outcome | Success Metrics | Confidence | Dependencies |
|------------|----------------|-----------------|------------|--------------|
| Enhance real-time [metric] monitoring | Reduce [risk type] in [operational area] | [X]% reduction in [incident type], [Y]% improvement in [accuracy metric] | 🟢 | [External dependency] from [Team/Provider] |
| Automate [process] tracking | Eliminate manual [error type] and reduce [overhead type] | [X]% automated [process], [Y] hour reduction in daily [task] time | 🟢 | [Regulatory/Technical] approval for automated [process] |

---

## 🔄 NEXT (Medium Confidence 40-70%) - H[X] 2025

| Initiative | Target Outcome | Success Metrics | Confidence | Key Assumptions |
|------------|----------------|-----------------|------------|-----------------|
| [Initiative Name] | [Business outcome this achieves] | [How we'll measure success] | 🟡 | [What we're betting on] |

### Example:
| Initiative | Target Outcome | Success Metrics | Confidence | Key Assumptions |
|------------|----------------|-----------------|------------|-----------------|
| Cross-[domain] [analytics type] dashboard | Enable [level] [capability] across [scope] | [X]% reduction in [time metric], [Y]% improvement in [accuracy metric] | 🟡 | [Model/System] remains valid post-[transition/change] |
| Automated [system] management | Optimize [resource] utilization during [condition] | [X]% reduction in [cost type], [Y]% increase in [efficiency metric] | 🟡 | [External system] APIs provide real-time [data type] |

---

## 🔮 LATER (Low Confidence 10-40%) - 2026+

| Theme | Strategic Goal | Potential Outcomes | Confidence | Research Needed |
|-------|----------------|-------------------|------------|-----------------|
| [Theme Name] | [Long-term strategic direction] | [Possible success indicators] | 🔴 | [What we need to learn] |

### Example:
| Theme | Strategic Goal | Potential Outcomes | Confidence | Research Needed |
|-------|----------------|-------------------|------------|-----------------|
| AI-driven [capability] forecasting | Leverage machine learning to predict [pattern type] across multiple [contexts] | Improved [accuracy metric], reduced [cost type], optimized [resource] allocation | 🔴 | [Data type] analysis, [behavior type] studies, AI model validation |
| [Technology]-based [solution type] | Enable [capability] at scale | New revenue streams, reduced [cost type], enhanced [benefit type] | 🔴 | Regulatory framework development, [technology] scalability assessment |

---

## How to Read This Roadmap

### Confidence Levels:
- 🟢 **High Confidence (70-90%):** Well-defined scope, clear requirements, minimal dependencies
- 🟡 **Medium Confidence (40-70%):** General direction clear, some scope uncertainty, moderate dependencies  
- 🔴 **Low Confidence (10-40%):** Exploring opportunities, high uncertainty, significant dependencies

### Time Horizons:
- **NOW:** 0-3 months - Specific quarters with concrete deliverables
- **NEXT:** 3-9 months - Half-year ranges with outcome targets
- **LATER:** 9-18+ months - Annual themes with strategic direction

### Business Unit Alignment:
This roadmap represents initiatives across all business units. Individual business units may maintain their own detailed roadmaps that roll up to this company-level view.

---

## Quick Writing Tips

### Initiative Names (Action-oriented):
- ✅ "Optimize [key process]"  
- ❌ "[Process] project"

### Target Outcomes (Business value):
- ✅ "Reduce [error type] by 20%"
- ❌ "Add [technology] algorithms"

### Success Metrics (Specific, measurable):
- ✅ "Increase [key metric] by [target amount]"
- ❌ "Better [performance area]"

---

## How to Use This Document

- **Strategic Planning**: Reference when planning quarterly and annual initiatives
- **Stakeholder Communication**: Share with leadership and stakeholders to communicate priorities
- **Resource Allocation**: Use to guide resource allocation decisions
- **Team Alignment**: Help teams understand company priorities and how their work fits

## How to Maintain

- **Weekly Updates**: Update NOW section weekly with progress and dependency status
- **Monthly Reviews**: Full review of NOW section, adjust confidence levels
- **Quarterly Reviews**: Complete roadmap refresh, move items between time horizons
- **Annual Reviews**: Strategic theme evaluation and long-term planning
- **After Major Changes**: Update when strategic priorities or market conditions change significantly

---

## Review Schedule

### Weekly Updates (NOW items):
- Progress against success metrics
- Dependency status updates
- Scope adjustments based on learnings

### Monthly Reviews (NOW section):
- Full review of current initiatives
- Confidence level adjustments
- Market impact assessment

### Quarterly Reviews (All sections):
- Complete roadmap refresh
- Strategic priority adjustments
- Capacity allocation changes
- Business unit alignment check

### Annual Reviews:
- Strategic theme evaluation
- Long-term capacity planning
- Stakeholder alignment sessions

---

## Stakeholder Communication

### For Leadership:
- Focus on outcomes and strategic themes
- Emphasize confidence levels and assumptions
- Highlight dependencies needing executive support

### For Engineering Teams:
- Provide detailed technical context
- Clear dependency mapping
- Regular scope and timeline discussions

### For Business Users:
- Connect initiatives to business performance
- Explain confidence levels and market factors
- Provide scenario planning based on conditions

### For Compliance/Legal:
- Share compliance-related outcomes
- Communicate timelines with regulatory caveats
- Focus on risk mitigation

---

## Common Questions and Redirects

**Q: "When exactly will the new [feature/system] be ready?"**  
**Redirect:** "The [feature/system] is part of our [Initiative] aimed at [Outcome]. Based on our current confidence level of [🟢🟡🔴], we expect to achieve [Outcome] by [Time Range]. What specific [needs/requirements] do you have that this outcome would address?"

**Q: "Why can't you give me a firm date for the [system] upgrade?"**  
**Redirect:** "We prioritize delivering value over hitting arbitrary dates. Our confidence levels help you plan appropriately. For [Initiative], we're [Confidence Level] confident in the [Time Range]. What decisions or risks are you trying to manage that would be affected by this timeline?"

**Q: "This roadmap keeps changing with [condition type]!"**  
**Redirect:** "Exactly! This roadmap reflects our current best understanding of [dynamics] and adapts as we learn. The changes mean we're building the right capabilities for current [conditions]. Let's focus on whether [Outcome] is still the most valuable goal for your [business performance area]."

**Q: "How do [external factor] changes affect these timelines?"**  
**Redirect:** "[External factor] changes are factored into our confidence levels. [Initiative] has [Confidence Level] confidence, which accounts for [External Factor]. We'll adjust priorities if [conditions] change significantly. What [compliance/regulatory] needs do you have that this outcome would address?"

---

> **Related Methods & Tools**: See roadmap methods in \`../02-Methods-and-Tools/2.1-Strategy/2.1.3-Roadmap/\` and communication guides in \`../02-Methods-and-Tools/2.2-Communication/\` for complete framework guidelines, review schedules, and stakeholder communication strategies.

---

## Stakeholders

# [Company] Stakeholders – Technology & Product Org

## Introduction

This document provides a structured directory of key stakeholders in the Technology & Product organization. Use this to quickly look up roles, reporting lines, and management levels when preparing for meetings, communications, or stakeholder mapping.

This file is optimized for both human reference and AI/LLM parsing.

---

## ⭐ Key Stakeholders I'm Currently Working With

| Name | Title | Role/Function | Level/Position | Reports To | Nickname | Email |
|------|-------|---------------|----------------|------------|----------|-------|
| [Name] | [Title] | [Role/Function] | [Level/Position] | [Manager Name] | | |
| [Name] | [Title] | [Role/Function] | [Level/Position] | [Manager Name] | | |
| [Name] | [Title] | [Role/Function] | [Level/Position] | [Manager Name] | | |

**Example:**
| Name | Title | Role/Function | Level/Position | Reports To | Nickname | Email |
|------|-------|---------------|----------------|------------|----------|-------|
| Sarah Johnson | VP Product & Engineering | Product & Engineering Leadership | Executive | Robert Thompson | | |
| Michael Chen | Director, Head of Product | Product Management | Director | Sarah Johnson | | |
| Emma Williams | Director, Business Strategy | Business Strategy | Director | Sarah Johnson | | |
| David Martinez | Engineering Manager, Platform | Software Engineering | Manager | Christopher Brown | | |
| James Anderson | Principal Software Engineer | Software Engineering | Principal Engineer | David Martinez | | |

---

## Stakeholder Overview (Markdown Table)

| Name | Title | Role/Function | Level/Position | Reports To | Nickname | Email |
|------|-------|---------------|----------------|------------|----------|-------|
| [Name] | [Executive Title, e.g., CIO, VP Head of Technology] | Technology Leadership | Executive | - | | |
| [Name] | [Director Title, e.g., Director, Head of [Department]] | [Department] Leadership | Director | [Executive Name] | | |
| [Name] | [Manager Title, e.g., Manager, Head of [Team]] | [Team Function] | Manager | [Director Name] | | |
| [Name] | [Individual Contributor Title] | [Function] | [Level, e.g., Senior, Lead, Staff] | [Manager Name] | | |

**Example:**
| Name | Title | Role/Function | Level/Position | Reports To | Nickname | Email |
|------|-------|---------------|----------------|------------|----------|-------|
| Robert Thompson | CTO, VP Technology | Technology Leadership | Executive | - | | |
| Jennifer Lee | Director, Head of Product | Product Management | Director | Sarah Johnson | | |
| Christopher Brown | Director, Head of Engineering | Software Engineering | Director | Sarah Johnson | | |
| Lisa Garcia | Senior Product Manager | Product Management | Senior Manager | Jennifer Lee | | |
| Thomas Wilson | Principal Software Engineer | Software Engineering | Principal Engineer | David Martinez | | |

---

## How to Use This Document

- **Meeting Preparation**: Look up stakeholders before meetings to understand their role and reporting structure
- **Stakeholder Mapping**: Use to identify key decision-makers and influencers for initiatives
- **Communication Planning**: Reference when planning communications to understand audience hierarchy
- **Org Structure Understanding**: Use to understand the Technology & Product organization structure

## How to Maintain

- **Quarterly Reviews**: Review and update quarterly or when organizational changes occur
- **After Org Changes**: Update immediately when reporting lines, roles, or team structure changes
- **New Hires**: Add new stakeholders when they join the organization
- **Departures**: Remove or mark stakeholders who leave the organization
- **Key Stakeholders Section**: Keep the "Key Stakeholders I'm Currently Working With" section current with your active collaborators

---

## Notes

- **Level/Position** should reflect the individual's level (e.g., Executive, Director, Manager, Senior, Lead, Staff, Individual Contributor)
- **Role/Function** should indicate their primary function or team (e.g., Product Management, Engineering, Design, Data)
- **Reports To** should list the name of their direct manager (use "-" for top-level executives)
- **Nickname** and **Email** fields are optional but useful for quick reference


---

## Product Strategy Quickstart

# Product Strategy — Quickstart

## Basics
**What it is:** Strategy sits between mission/vision and plan/roadmap. Forces choices to deploy scarce resources for maximum impact by selecting 3–5 strategic pillars and explicit non-goals.

**Why it matters:** Aligns teams on "why these bets," reduces unproductive debates, and connects daily work to business outcomes.

**When you need it:** Teams are confused about project priorities, debates are circular, or there's a disconnect between vision and roadmap decisions.

## Prerequisites Checklist
- [ ] Leadership commitment for 8-12 week process
- [ ] Working group availability (PM + Eng + Design + Data leads)
- [ ] Access to user data, research, and analytics
- [ ] Calendar blocked for strategy sprint week (all working group members)

## Small "s" Strategy (2-year) — 5 Steps

### Step 1: Preparation (3–5 weeks, part-time)

**Core Working Group:** PM (owner), Engineering Lead, Design Lead, Data Lead
**Optional:** Product Marketing, User Research, Content Design

**Key Deliverables:**

#### Data Lead: Behavioral Insights Pack
- Meta-analysis of past behavioral studies and usage data
- User segment analysis and key usage patterns
- Performance metrics baseline (reliability, latency, cost)
- Identify critical gaps needing new analysis

#### Design Lead: UX Research Synthesis  
- Meta-analysis of qualitative and quantitative research
- Key user needs, frustrations, and unmet desires
- User journey pain points and moments of delight
- Commission scrappy studies for critical gaps (5 user interviews max)

#### PM + Working Group: Leadership Interviews (45-60 min each)
**Essential Questions:**
1. "What does success look like in 2 years? What does failure look like?"
2. "What are the most important measures of success?"
3. "What principles should guide our product decisions?"
4. "Why haven't things worked in the past?"
5. "What pet ideas should we consider?"

**Pro Tip:** Distribute interviews across working group members. Capture verbatim quotes.

#### PM/PMM: Competitive & Comparables Analysis
**Required Components:**
- Feature comparison heatmap with color coding
- Investment themes: where competitors are focusing R&D
- Positioning analysis: how each player talks about the problem
- White space opportunities: unmet needs no one addresses well

#### All Members: User Observation (1-3 sessions each)
- Watch user interviews or observe user sessions
- Focus on building empathy, not gathering insights
- Note emotional reactions and language users employ
- Ground strategy in human reality, not just data

#### PM + Eng Lead: Constraints Assessment
- Technical constraints and platform limitations
- Resource constraints and team capacity
- Compliance requirements (legal, regulatory, security)
- Business constraints (partnerships, brand guidelines)

**End of Preparation:** Consolidated insights deck (substance over polish)

### Step 2: Strategy Sprint (1 week) ⭐ **Most Critical**

**Day 1: Share-outs & Problem Identification**

**Morning (9 AM - 12 PM):** Present all preparation deliverables
- 30 min per major section with Q&A
- Focus on top 3 surprising findings from each area
- Take notes on problems affecting users or preventing growth

**Afternoon (1 PM - 5 PM):** Problem Generation
- **Individual Brainstorm:** Each person writes 15-30 problem statements on sticky notes
- **Problem Sharing:** Present problems (1 min each), post on wall
- **Initial Clustering:** Group similar problems, name clusters (10-15 clusters)

**Day 2: Strategy Selection** 🎯 **Single Most Important Day**

**Morning (9 AM - 12 PM):**
- **Refine Clusters:** Merge/split to get 8-12 opportunity areas
- **Flip to Opportunities:** "Users can't find features" → "Discovery & Findability"
- **Review Scoring Framework:** Understand 4 dimensions

**4-Dimension Scoring Framework (1-5 scale each):**

1. **Expected Impact:** User base affected × frequency × pain/value level
2. **Certainty of Impact:** Strength of supporting evidence
3. **Clarity of Levers:** How clear the solution approaches are  
4. **Uniqueness of Levers:** Competitive advantages enabling differentiation ⭐ *Critical 4th dimension*

**Afternoon (1 PM - 5 PM):**
- **Individual Scoring:** Each member scores all opportunity areas
- **Group Discussion:** Reach consensus on scores with evidence
- **Pillar Selection:** Top 3-5 scoring areas become strategic pillars
- **Sanity Check:** Does this portfolio feel right strategically?

**Day 3: Winning Aspiration & Development**

**Morning (9 AM - 12 PM):** Create 2-Year Winning Aspiration
- **Creative Exercise:** "Journalist headline in 2 years after we succeed"
- **Individual Headlines:** Each person writes 3-5 options
- **Synthesis:** Blend best elements into inspiring, believable aspiration

**Afternoon (1 PM - 5 PM):** Pillar Development
- **"How Might We" Statements:** 3-5 per pillar to spark ideation
- **Success Metrics:** Primary, secondary, and guardrail metrics per pillar
- **Risks & Assumptions:** What has to be true? What could prevent success?

### Step 3: Design Sprint (1 week)

**Goal:** Create 1-2 illustrative concepts per strategic pillar

**Team:** Design lead facilitates, working group participates

**Key Principle:** Concepts are for understanding strategy, NOT "shovel-ready" specs

**Process:**
- **Day 1:** Review pillars, divergent concept sketching
- **Day 2:** Refine concepts, create storyboards  
- **Day 3:** Before/after scenarios, low-fi mockups
- **Day 4-5:** Polish artifacts, prepare presentation

**Outputs:** Visual concepts that make each pillar tangible and understandable

### Step 4: Document Writing (1–2 weeks)

**Owner:** PM (primarily solo work)

**Document Structure:**
1. **Executive Summary** (1 page): Context, pillars, aspiration, bottom line
2. **Context/Why Now** (1-2 pages): Current situation, why these choices now
3. **Strategic Pillars** (2-3 pages each): Definition, rationale, vision, concepts, metrics, risks
4. **Non-Goals** (1 page): What we explicitly WON'T focus on
5. **2-Year Winning Aspiration** (0.5 pages): Inspirational vision
6. **Success Measurement** (1 page): Metrics definitions, baselines, targets
7. **Dependencies & Risks** (1 page): Critical dependencies, mitigation strategies
8. **Next Steps** (0.5 pages): Immediate actions, decision criteria

**Quality Checks:**
- **Clarity:** Can newcomer understand why these pillars?
- **Defensibility:** Would skeptical stakeholder be convinced?
- **Actionability:** Can teams build roadmaps from this?

### Step 5: Rollout (2–3 weeks)

**Week 1: Gatekeeper Alignment**
- **1:1 Reviews:** CEO, direct manager, key functional leaders
- **Process:** Send doc 2 days prior, 60-90 min meetings
- **Adjustments:** Minor language changes OK, major pillar changes require strong evidence

**Week 2: Group Review**
- **Stakeholder Meeting:** All gatekeepers + functional leaders + adjacent teams
- **Focus:** Clarification, not re-debating pillar selection
- **Goal:** Explicit commitment: "Can you support this direction?"

**Week 3: Team Roadshows & Operationalization**
- **Roadshow Format:** 8-10 people, 60 minutes per session
- **Agenda:** Why strategy now → Pillar walkthrough → Impact on daily work
- **Operationalization:** 
  - Map pillars → OKRs and dashboards
  - Seed roadmap with pillar-supporting initiatives
  - Create decision framework: "How does this support our pillars?"

## Big "S" Strategy (3/5/10-year) — 5 Steps

**Owner:** Senior Design Lead (typically)
**Timeline:** 4-6 months  
**Focus:** Aspirational futures, not current product problems

1. **Prep (design-led):** Mission/vision anchor, trend analysis, leadership interviews
2. **Distinct Futures:** 3+ different end-state narratives with learning goals
3. **Prototypes:** "Concept car" artifacts to test assumptions
4. **Convergence:** UXR testing to identify winning components  
5. **Roadmap/Testing:** Push promising components into near-term roadmap

## Quick Decision Framework

**Before Starting Any Initiative:**
1. Which strategic pillar does this support?
2. How will we measure success?
3. What assumptions are we testing?
4. What would we stop doing to make room for this?

**If answers aren't clear → Don't start the initiative**

## Common Pitfalls to Avoid

❌ **Function-shaped pillars:** "Improve mobile experience"  
✅ **Choice-shaped pillars:** "Enable discovery of advanced features"

❌ **Missing 4th scoring dimension:** Uniqueness of levers  
✅ **Complete scoring:** Impact + Certainty + Clarity + Uniqueness

❌ **Skipping non-goals:** Everything feels like priority  
✅ **Explicit non-goals:** Clear choices about what not to focus on

❌ **No visual concepts:** Strategy document is text-heavy  
✅ **Illustrated strategy:** Design sprint makes pillars tangible

## [Company] Integration

**Traceability:**
- Map pillars → OKR Objective/KR IDs  
- Link to company strategy: \`../../01-Company-Context/2-company-strategy.md\`
- Monthly newsletter progress updates

**Decision Integration:**
- Use pillar alignment for project approval
- Reference strategy in resource allocation
- Include in quarterly planning context

## Success Indicators

**You've succeeded when:**
- Teams can explain how their work connects to strategic pillars
- Project requests reference pillar alignment  
- Debates shift from "what to build" to "how to build it"
- Leadership stops asking "why are we doing this?"

**Timeline:** 8-12 weeks from kickoff to operationalized strategy

## Links & references
Source: https://www.lennysnewsletter.com/p/strategy-blocks-an-operators-guide


---

## OKR Framework

# OKR Framework

## Overview

This framework helps you create and manage Objectives and Key Results (OKRs) that align teams around measurable outcomes. OKRs operationalize strategy into actionable, measurable goals that connect daily work to business results.

## Step 0: Braindump & Product Sense (Do this first!)

**Before setting OKRs, braindump:**
- What outcomes are you trying to achieve? Dump everything - don't structure yet.
- What does your product sense tell you? What feels like the right outcome?
- What assumptions are you making? List them explicitly.
- What biases might affect your OKRs? (Vanity metrics? Activity vs. outcome?)

**Product sense exercise:**
- If you had to pick ONE outcome that matters most, what would it be? Why?
- What would make you say "these OKRs are obviously wrong"?
- What would make you say "these OKRs are obviously right"?

**When to use OKRs:**
- Operationalizing strategic priorities into measurable outcomes
- Aligning teams around shared objectives
- Tracking progress on key initiatives
- Connecting product work to business metrics

**When OKRs might not be needed:**
- Very small teams (<5 people) where alignment is already strong
- Exploratory research phases before clear objectives emerge
- One-off projects with clear, single success criteria

## How to Use This Framework

1. **Set Objectives**: Align with strategic priorities (1-2 per team)
2. **Define Key Results**: Create measurable outcomes (2-4 per objective)
3. **Track Weekly**: Update confidence and progress
4. **Review Quarterly**: Grade results and set next cycle
5. **Link to Work**: Connect PRDs and initiatives to KR IDs

## How to Maintain

- **Weekly Reviews**: Update confidence (0/1/2) and track progress
- **Mid-Cycle**: Assess if objectives need adjustment
- **End of Cycle**: Grade KRs (0.0-1.0) and set next cycle
- **Quarterly**: Archive completed OKRs and document learnings

## Principles
- Outcome over output: tie to business results and job outcomes.
- Evidence before investment: RAT-style KRs with thresholds.
- Small docs, fast loops: 1–2 pages; weekly confidence checks.
- Traceability: link OKRs to JTBD → Opportunity → RAT → PRD → Decision Log.

## Inputs (each cycle)
- Company/BU priorities and constraints.
- Team mission and core metrics (SLAs, latency, cost-to-serve).
- Opportunity backlog tied to JTBD and ODI outcomes.
- Last cycle’s decision log and post-mortems.

## OKR Types
- Impact OKRs: move a core business metric.
- Enabler OKRs: unlock future impact (platform, data quality, compliance).
Keep 1–2 Objectives per team; 2–4 KRs per Objective.

## KR Quality
- Specific, measurable, time-bound; mix lagging/leading.
- Instrumented with event/ID definitions and pass/fail thresholds.
- Avoid milestone/project KRs; use outcome proxies when needed.

## Process (2-week spin-up; rolling thereafter)
1) Prep (async): compile inputs; propose problem spaces and candidate metrics.
2) Framing workshop: align on “why now,” pick 1–2 Objectives, brainstorm KRs.
3) Convert top assumptions into RAT-style KRs with thresholds.
4) Stakeholder review: validate metrics, guardrails, dependencies.
5) Publish to company OKRs; assign owners; link dashboards.

## Cadence
- Weekly 20–30 min: KR status, confidence (0/1/2), risks, next RAT test.
- Mid-cycle: decide to double-down, pivot, or stop; snapshot if materially changed.
- End-cycle: grade KRs (0.0–1.0); roll learnings into decision log.

## Scoring & Confidence
- Scoring at cycle end: 0.0–1.0 per KR; average → Objective score.
- Weekly confidence: 0 (off-track), 1 (at-risk), 2 (on-track); cite evidence.

## Linking Rules
- Assign stable KR IDs \`O#-KR#\`. Use everywhere (initiatives, PRDs, dashboards).
- Initiatives list KR IDs they contribute to and link evidence; do not duplicate metrics.
- Material changes recorded in \`decision-log.md\`; archive snapshots on change.

## Example Objectives (illustrative)
- Reduce time-to-signal from insight to product changes by 30%.
- Improve post-release operational reliability.
- Strengthen governance and compliance for key product decisions.

-----

## References

- OKR Template: \`2-okr-template.md\`
- OKR Evaluation: \`3-okr-evaluation.md\`
- Company Context: \`../../01-Company-Context/README.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- Roadmap: \`../2.1.3-Roadmap/README.md\`
- PRD Framework: \`../2.1.4-PRD/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`




---

## OKR Template

# OKR Templates

## Introduction

This document provides ready-to-use templates for creating and managing OKRs. Choose the template that fits your needs: Objective Canvas for individual objectives, Team OKRs for team-level planning, or Weekly Check-in for progress tracking.

## How to Use These Templates

1. **Objective Canvas**: Use for individual objective planning and stakeholder communication
2. **Team OKRs**: Use for team-level OKR documentation and tracking
3. **Weekly Check-in**: Use for regular progress updates and confidence tracking

## How to Maintain

- **Weekly**: Use weekly check-in template to track progress
- **Quarterly**: Update team OKRs document with new cycle
- **As Needed**: Update objective canvas when objectives change

---

## Objective Canvas (one-pager)
\`\`\`
# Objective Canvas — Objective [YYYY-QN or Rolling]
- Objective (ID: O#): [clear, outcome-focused, time-bound]
- Why now: [evidence; links to JTBD/Opportunity]
- Business link: [how this ladders to BU/company goals]
- Owner(s): [PM | Eng | Data]
- Stakeholders: [Risk, Ops, Design, Trading, etc.]

## Key Results (2–4)
1) O#-KR1: [metric] baseline → target by [date] (threshold: [pass/fail])
2) O#-KR2: [metric] baseline → target by [date]
3) O#-KR3: [assumption test] [method, threshold, date]

## Telemetry & Guardrails
- Events/IDs: [source, definition, dashboard link]
- Guardrails: [latency, error rate, cost, compliance]

## Dependencies & Risks
- Dependencies: [team/owner]
- Risks & mitigations: [top 2–3]

## Decision Points
- Mid-cycle: [criteria]
- Rollback/kill switch: [how]
\`\`\`

## Team OKRs (rolling)
\`\`\`
# Team OKRs — Rolling
## Context
- Strategy link: [doc]
- Constraints: [timeline, resources, compliance]

## Objectives
### O1: [title]
- Owner(s): [names]
- KRs:
  - O1-KR1: [metric] baseline → target (threshold: …)
  - O1-KR2: …
- Evidence links: [JTBD, Opportunity, PRD]

### O2: [title]
- Owner(s): [names]
- KRs: …

## Cadence & Dashboards
- Weekly check-in: [time]
- Dashboards: [links]

## Decision Log (rolling)
- [Date | Decision | Evidence | Owner]
\`\`\`

## Weekly OKR Check-in
\`\`\`
## Weekly OKR Check-in — Week [N]
- O1 confidence: [0/1/2]; Evidence: [link]
  - KR1: [value vs target]; next action
  - KR2: …
- O2 confidence: [0/1/2]; risks/asks
- Blockers/Dependencies: [owner/date]
- Decisions this week: [log link]
\`\`\`

-----

## References

- OKR Framework: \`1-okr-framework.md\`
- OKR Evaluation: \`3-okr-evaluation.md\`
- OKR README: \`README.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- Roadmap: \`../2.1.3-Roadmap/README.md\`
- PRD Framework: \`../2.1.4-PRD/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`



---

## Roadmap Framework

# Roadmap Framework

## Overview

This framework helps product managers create roadmaps that effectively communicate product direction while maintaining the flexibility needed for successful product development.

## Step 0: Braindump & Product Sense (Do this first!)

**Before creating roadmap, braindump:**
- What initiatives are you considering? Dump everything - don't prioritize yet.
- What does your product sense tell you? What feels urgent vs. important?
- What assumptions are you making about timing? List them.
- What biases might affect your roadmap? (Recency bias? Squeaky wheel? Status quo?)
- What would great product sense look like here? What would an experienced PM prioritize?

**Product sense exercise:**
- If you had to ship ONE thing in the next quarter, what would it be? Why?
- What would make you say "this roadmap is obviously wrong"?
- What would make you say "this roadmap is obviously right"?

## Core Philosophy

### Roadmaps are NOT Commitments

A roadmap is a strategic communication tool, not a project plan. It should:

- **Enable agility over rigidity** - Market conditions and user feedback can shift priorities
- **Prevent stakeholder misalignment** - Clear communication prevents overpromising
- **Encourage data-driven decisions** - Teams can pivot based on new insights
- **Reduce team pressure** - Realistic expectations improve morale and sustainability

### Confidence-Based Planning

Different time horizons require different approaches:

- **NOW (0-3 months)** - High confidence, specific deliverables
- **NEXT (3-9 months)** - Medium confidence, outcome targets
- **LATER (9-18+ months)** - Low confidence, strategic themes

## Framework Structure

### 1. Header Section

Always include:
- **Disclaimer** - "This roadmap is not a commitment"
- **Last updated date**
- **Next review date**
- **Confidence level legend**

### 2. NOW Section (High Confidence 70-90%)

**Use when:**
- Requirements are well-defined
- Dependencies are minimal
- Team capacity is allocated

**Structure:**
- Initiative name (action-oriented)
- Target outcome (business value)
- Success metrics (measurable)
- Dependencies (external needs)

### 3. NEXT Section (Medium Confidence 40-70%)

**Use when:**
- General direction is clear
- Some scope uncertainty exists
- Dependencies are manageable

**Structure:**
- Same as NOW section
- Add "Key Assumptions" column

### 4. LATER Section (Low Confidence 10-40%)

**Use when:**
- Exploring opportunities
- High uncertainty exists
- Significant research needed

**Structure:**
- Theme (broad direction)
- Strategic goal (long-term vision)
- Potential outcomes (directional)
- Research needed (what to learn)

## Writing Guidelines

### Initiative Names
- ✅ "Improve onboarding flow for new teams"
- ❌ "Onboarding project"

### Target Outcomes
- ✅ "Reduce onboarding time by 20%"
- ❌ "Make onboarding nicer"

### Success Metrics
- ✅ "Increase weekly active teams by 15%"
- ❌ "Better team engagement"

### Dependencies
- External teams
- Market data providers
- Regulatory approvals
- Technical infrastructure

## Review Schedule

### Weekly Updates (NOW items)
- Progress against success metrics
- Dependency status updates
- Scope adjustments based on learnings

### Monthly Reviews (NOW section)
- Full review of current initiatives
- Confidence level adjustments
- Market impact assessment

### Quarterly Reviews (All sections)
- Complete roadmap refresh
- Strategic priority adjustments
- Capacity allocation changes

### Annual Reviews
- Strategic theme evaluation
- Long-term capacity planning
- Stakeholder alignment sessions

## Stakeholder Communication

### For Leadership
- Focus on outcomes and strategic themes
- Emphasize confidence levels and assumptions
- Highlight dependencies needing executive support

### For Engineering Teams
- Provide detailed technical context
- Clear dependency mapping
- Regular scope and timeline discussions

### For Business Users
- Connect initiatives to business performance
- Explain confidence levels and market factors
- Provide scenario planning based on conditions

### For Compliance/Legal
- Share compliance-related outcomes
- Communicate timelines with regulatory caveats
- Focus on risk mitigation

## Common Challenges and Solutions

### "When exactly will X be ready?"
**Response pattern:**
"Feature X is part of [Initiative] aimed at [Outcome]. Based on our [Confidence Level], we expect to achieve [Outcome] by [Time Range]. What specific needs do you have that this outcome would address?"

### "Why can't you commit to dates?"
**Response pattern:**
"We prioritize delivering value over hitting arbitrary dates. Our confidence levels help you plan appropriately. What decisions are you trying to make that would be affected by this timeline?"

### "The roadmap keeps changing!"
**Response pattern:**
"Changes mean we're building the right capabilities for current conditions. Let's focus on whether [Outcome] is still the most valuable goal for your needs."

### "How do external factors affect timelines?"
**Response pattern:**
"External factors are included in our confidence levels. [Initiative] has [Confidence Level] which accounts for [External Factor]. We'll adjust if conditions change significantly."

## Best Practices

### Do's
- Update regularly (weekly for NOW, monthly for NEXT/LATER)
- Focus on outcomes over outputs
- Use clear, measurable success criteria
- Maintain appropriate confidence levels
- Communicate assumptions transparently

### Don'ts
- Promise specific delivery dates beyond 3 months
- Include every small feature or bug fix
- Use technical jargon without context
- Hide dependencies or risks
- Let the roadmap become stale

## Metrics for Success

Track these roadmap effectiveness metrics:

- **Stakeholder satisfaction** - Regular feedback surveys
- **Prediction accuracy** - How often NOW items deliver on time
- **Strategic alignment** - Percentage of delivered outcomes supporting business goals
- **Communication effectiveness** - Reduction in timeline clarification requests

## Templates and Tools

- Use the provided template in \`2-roadmap-template.md\`
- Consider tools like simple spreadsheets, post-its, Confluence or JIRA Product Discovery
- Maintain version control for roadmap updates
- Archive old versions for retrospective analysis

-----

## References

- Roadmap Template: \`2-roadmap-template.md\`
- Roadmap Evaluation: \`3-roadmap-evaluation.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- OKR Framework: \`../2.1.2-OKR/README.md\`
- PRD Framework: \`../2.1.4-PRD/README.md\`
- North Star: \`../2.1.6-North-Star/README.md\`
- Prioritization: \`../2.1.7-Prioritization/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`

---

## Roadmap Template

# Product Roadmap Template

## Disclaimer
**This roadmap is not a commitment.** It reflects current priorities but is subject to change based on feedback, market shifts, and new opportunities.

**Updated on:** [Date] | **Next review:** [Date]

---

## 🗓️ NOW (High Confidence 70-90%) - Q[X] 2025

| Initiative | Target Outcome | Success Metrics | Confidence | Dependencies |
|------------|----------------|-----------------|------------|--------------|
| [Initiative Name] | [Business outcome this achieves] | [How we'll measure success] | 🟢 | [What we need from others] |

### Example:
| Initiative | Target Outcome | Success Metrics | Confidence | Dependencies |
|------------|----------------|-----------------|------------|--------------|
| Improve signup funnel conversion | Increase activation rate for new accounts | 20% increase in signup → activation conversion, 15% reduction in drop-off on step 2 | 🟢 | Design support for updated flows; analytics tracking in place |
| Automate invoice reconciliation | Eliminate manual billing errors and reduce finance workload | 95% automated matching of invoices, 2-hour reduction in daily reconciliation time | 🟢 | Access to billing system APIs; approval from Finance lead |

---

## 🔄 NEXT (Medium Confidence 40-70%) - H[X] 2025

| Initiative | Target Outcome | Success Metrics | Confidence | Key Assumptions |
|------------|----------------|-----------------|------------|-----------------|
| [Initiative Name] | [Business outcome this achieves] | [How we'll measure success] | 🟡 | [What we're betting on] |

### Example:
| Initiative | Target Outcome | Success Metrics | Confidence | Key Assumptions |
|------------|----------------|-----------------|------------|-----------------|
| Customer health dashboard | Enable CSMs to proactively manage at-risk accounts | 40% reduction in surprise churn, 25% increase in proactive outreach | 🟡 | Leading indicators of risk (usage, NPS, tickets) are reliable predictors of churn |
| Internal tooling for support | Reduce time-to-resolution for common tickets | 30% reduction in median resolution time, higher CSAT for support interactions | 🟡 | Common issues can be solved with standardized flows and macros |

---

## 🔮 LATER (Low Confidence 10-40%) - 2026+

| Theme | Strategic Goal | Potential Outcomes | Confidence | Research Needed |
|-------|----------------|-------------------|------------|-----------------|
| [Theme Name] | [Long-term strategic direction] | [Possible success indicators] | 🔴 | [What we need to learn] |

### Example:
| Theme | Strategic Goal | Potential Outcomes | Confidence | Research Needed |
|-------|----------------|-------------------|------------|-----------------|
| AI-assisted feature discovery | Help users find and adopt underused features | Improved feature adoption, increased expansion revenue, reduced support load | 🔴 | User research on discovery pain points, experiments with in-app guidance and recommendations |
| Usage-based pricing evolution | Align pricing with customer value and usage | New revenue streams, reduced pricing friction, better retention in key segments | 🔴 | Willingness-to-pay studies, billing/usage data analysis, experiments with new plans |

---

## How to Read This Roadmap

### Confidence Levels:
- 🟢 **High Confidence (70-90%):** Well-defined scope, clear requirements, minimal dependencies
- 🟡 **Medium Confidence (40-70%):** General direction clear, some scope uncertainty, moderate dependencies  
- 🔴 **Low Confidence (10-40%):** Exploring opportunities, high uncertainty, significant dependencies

### Time Horizons:
- **NOW:** 0-3 months - Specific quarters with concrete deliverables
- **NEXT:** 3-9 months - Half-year ranges with outcome targets
- **LATER:** 9-18+ months - Annual themes with strategic direction

---

## Quick Writing Tips

### Initiative Names (Action-oriented):
- ✅ "Improve onboarding flow for new teams"  
- ❌ "Onboarding project"

### Target Outcomes (Business value):
- ✅ "Reduce onboarding time by 20%"
- ❌ "Make onboarding nicer"

### Success Metrics (Specific, measurable):
- ✅ "Increase weekly active teams by 15%"
- ❌ "Better team engagement"

---

-----

## References

- Roadmap Framework: \`1-roadmap-framework.md\`
- Roadmap Evaluation: \`3-roadmap-evaluation.md\`
- Roadmap README: \`README.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- OKR Framework: \`../2.1.2-OKR/README.md\`
- Prioritization: \`../2.1.7-Prioritization/README.md\`

---

## PRD Framework

# PRD Framework

> **Before using this framework:** Braindump first! Dump your thoughts, concerns, and ideas about what to build. Use your product sense. Challenge your assumptions. Then use this framework to structure your thinking.


## Purpose
The PRD (Product Requirements Document) bridges discovery and execution. It translates validated opportunities into actionable specifications that align cross-functional teams around what to build, why, and how success will be measured.

## Principles
- **Clarity over completeness**: Start lean; add detail as uncertainty reduces.
- **Outcomes over features**: Define success metrics before specifications.
- **Traceability**: Link back to opportunity docs, JTBD, and validation tests.
- **Living document**: Update as scope evolves; track major changes in version history.
- **Single source of truth**: One PRD per initiative; avoid duplicate specs.

## When to Write a PRD

**Write a PRD when:**
- Solution approach is validated (passed RAT tests from Idea Validation)
- Cross-functional execution is required (design, eng, ops, marketing)
- Significant engineering investment needed (>2 weeks)
- Clear success metrics can be defined
- Stakeholder alignment on scope is critical

**Skip the PRD when:**
- Small experiments or prototypes (<1 week effort)
- Discovery-phase work (use opportunity docs instead)
- Technical spikes (use lightweight spec)
- Infrastructure/operations work (use tech design doc)

## Inputs Required

Before writing, ensure you have:
- **Validated opportunity**: Problem statement backed by user research
- **JTBD/Job stories**: Clear understanding of user needs and context
- **Validation results**: Evidence from idea validation (RAT) tests
- **Success metrics**: Defined measurement approach and baselines
- **Stakeholder buy-in**: Leadership approval and resource allocation

## PRD Structure

### Minimal Viable PRD (2-3 pages)
For well-understood problems with clear solutions:
1. Executive Summary (problem, solution, success metrics)
2. Goals & Success Metrics
3. Core Requirements (must-have features only)
4. Scope (in/out, constraints)
5. Open Questions & Decisions

### Standard PRD (5-8 pages)
For complex features requiring detailed alignment:
- Add: User flows, detailed acceptance criteria, technical specs
- Add: Dependencies, risks, implementation phases
- Add: Testing strategy, go-to-market plan

### Comprehensive PRD (10-15 pages)
For platform features or high-risk initiatives:
- Add: Architecture diagrams, data models, integration specs
- Add: Security/compliance requirements, performance benchmarks
- Add: Post-launch monitoring, iteration plan
- Add: Detailed appendices with research and design links

## Writing Process

### Phase 1: Foundation (1-2 days)
1. **Review inputs**: Opportunity doc, validation results, JTBD
2. **Define success**: Write section 3 (Goals & Metrics) first
3. **Draft executive summary**: 1-paragraph version of the PRD
4. **Map user flows**: Sketch primary and edge-case paths
5. **Prioritize requirements**: Tag as P0 (must), P1 (should), P2 (could)

### Phase 2: Detail (2-3 days)
1. **Write acceptance criteria**: Given/When/Then for each requirement
2. **Define scope boundaries**: Explicitly state what's NOT included
3. **Identify dependencies**: Internal teams, external APIs, data sources
4. **List risks**: Technical, timeline, resource, market risks
5. **Draft implementation phases**: Break into incremental releases

### Phase 3: Alignment (3-5 days)
1. **Stakeholder review**: Circulate for feedback (PM, Eng, Design, Ops)
2. **Technical feasibility**: Validate with engineering leads
3. **UX review**: Confirm flows and requirements with design
4. **Business approval**: Get sign-off from leadership
5. **Finalize and publish**: Lock version 1.0; communicate to team

## Quality Checklist

**Problem & Goals:**
- [ ] Problem statement backed by evidence (user quotes, data)
- [ ] Clear JTBD or job story included
- [ ] Success metrics have baselines and targets
- [ ] Guardrails defined (what NOT to break)

**Solution & Requirements:**
- [ ] User flows cover primary and edge cases
- [ ] All P0 requirements have acceptance criteria
- [ ] Technical constraints documented
- [ ] Dependencies identified with owners and dates

**Scope & Alignment:**
- [ ] In-scope items prioritized (P0/P1/P2)
- [ ] Out-of-scope items explicitly listed with rationale
- [ ] Risks identified with mitigation plans
- [ ] All stakeholders reviewed and approved

**Traceability:**
- [ ] Links to opportunity doc, JTBD, validation results
- [ ] OKR IDs referenced (if applicable)
- [ ] Related documents linked (roadmap, designs, tech specs)

## Common Anti-Patterns

**Over-specification:**
- ❌ Writing detailed specs before validation
- ✅ Start lean; add detail as uncertainty reduces

**Feature-focus:**
- ❌ "Build a dashboard with 15 charts"
- ✅ "Reduce time-to-insight for risk decisions by 50%"

**Missing constraints:**
- ❌ No mention of technical, timeline, or budget limits
- ✅ Explicit constraints in section 6.4

**Ignoring edge cases:**
- ❌ Only documenting happy-path flows
- ✅ Document error handling, failures, and corner cases

**Stale documents:**
- ❌ PRD never updated after launch
- ✅ Version history tracks major changes; post-launch section maintained

## Maintenance & Evolution

### During Development
- **Weekly**: Review open questions; update as decisions made
- **Sprint by sprint**: Track scope changes in version history
- **Pivot moment**: Archive current version; create new version with rationale

### Post-Launch
- **First 2 weeks**: Track success metrics daily; update monitoring section
- **First quarter**: Assess metrics against targets; document learnings
- **Iteration**: Add post-launch findings to section 12 (Post-Launch Plan)
- **Archive**: When initiative complete, move to archive with final results

## Integration with Other Frameworks

**From Discovery:**
- JTBD (2.7) → Job stories inform problem statement
- Continuous Discovery (2.5) → Interview insights validate user needs
- Idea Validation (2.6) → RAT results prove solution viability

**To Execution:**
- OKRs (2.2) → Success metrics map to Key Results
- Roadmap (2.3) → PRD drives NOW section initiatives
- Newsletter (2.4) → PRD outcomes communicated monthly

**Cross-functional:**
- Design: PRD defines user flows → Design creates mockups
- Engineering: PRD defines requirements → Tech specs define implementation
- Marketing: PRD defines value → Go-to-market plan communicates it

## Example PRD Summaries

### Minimal (2-page)
\`\`\`
Initiative: Automated alert prioritization
Problem: 200+ daily alerts; 80% false positives; 30 min avg triage time
Solution: ML-based scoring; auto-dismiss low-confidence alerts
Success: Reduce triage time from 30min → 5min; 90% precision on P0 alerts
Scope: P0 only - scoring model, dismiss logic, audit log
Timeline: 6 weeks; 1 engineer, 1 data scientist
\`\`\`

### Standard (6-page)
- Above + detailed user flows (3 scenarios)
- Acceptance criteria for 8 requirements
- Risk assessment (model accuracy, alert fatigue)
- Phased rollout (10% → 50% → 100% traffic)

### Comprehensive (12-page)
- Above + architecture diagrams, model training pipeline
- Security review (PII handling, audit compliance)
- Performance benchmarks (p95 latency <100ms)
- Post-launch iteration plan (weekly model retraining)

## LLM Helper Prompts

**Before writing PRD - Braindump & Think:**
\`\`\`markdown
Act as a product management coach. Help me think through what to build before we structure it into a PRD. Your role is to help me think, not to think for me.

1) FIRST: Help me braindump (don't structure yet):
- Ask me to dump everything I know about this feature/initiative - thoughts, concerns, ideas, gut feelings
- Don't ask me to structure it yet. Just get it all out.
- Ask: "What's your product sense telling you? What feels right or wrong?"
- Ask: "What assumptions are you making? List them all."
- Ask: "What biases might be affecting your view?" (Solution bias? Feature bias? Confirmation bias?)

2) THEN: Quiz me to help me think:
- "Before looking at any docs, what problem are we solving? What's your gut feeling?"
- "Who is this for? What does your product sense tell you about them?"
- "What would make this obviously wrong? What would make it obviously right?"
- "If you had to explain this to a skeptical stakeholder in 2 minutes, what would you say?"
- "What's the smallest thing that could work? What's the riskiest assumption?"

3) THEN: Help me structure:
- Only after I've thought through it, help me structure into PRD format
- Challenge my thinking as we structure: "Why this requirement? What evidence supports it?"
- Help me use my product sense: "What does your intuition tell you about this section?"

4) END with reflection:
- "What did you learn? How did your thinking evolve?"
- "What biases did you catch? What would you do differently?"
\`\`\`

**PRD Drafting (after braindump):**
- "Convert this opportunity doc into a PRD executive summary with problem, solution, and success metrics."
- "Generate acceptance criteria in Given/When/Then format for these 5 requirements."
- "Identify technical dependencies and risks for this feature based on our tech stack."

**Review & Quality:**
- "Review this PRD for missing edge cases, unclear requirements, or unvalidated assumptions."
- "Challenge my thinking: What biases might be affecting this PRD? What would great product sense notice?"
- "Suggest guardrail metrics to ensure this feature doesn't degrade existing performance."
- "Identify gaps between this PRD and the original opportunity doc."

-----

## References

- PRD Template: \`2-prd-template.md\`
- PRD JTBD Template: \`3-prd-jtbd-template.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- OKR Framework: \`../2.1.2-OKR/README.md\`
- Opportunity Assessment: \`../../2.3-Discovery/2.3.4-Opportunity-Assessment/README.md\`
- Idea Validation: \`../../2.3-Discovery/2.3.5-Idea-Validation/README.md\`
- Jobs to Be Done: \`../../2.3-Discovery/2.3.3-Jobs-To-Be-Done/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`



---

## PRD Template

# Product Requirements Document (PRD)

**Product Name:** [Product/Feature Name]  
**Product Manager:** [Name]  
**Date:** [Date]  
**Status:** [Draft | Under Review | Approved | In Development | Launched]  
**Related:** [Link to opportunity-assessment.md]

---

## 1. Executive Summary

**What:** [Brief description of the product/feature]  
**Why:** [Primary business/user value]  
**When:** [Target timeline]  
**Success:** [Top outcome metric + target/date]

**Context:** This PRD builds on [opportunity-assessment.md] which validated the problem and solution approach.

---

## 2. Problem Statement

### 2.1 The Problem
**Current State:** [What's happening now that's problematic]  
**Impact:** [Who is affected and how severely]  
**Evidence:** [Data, research, or feedback supporting this problem]

**Job Story:** "When I [situation], I want to [motivation], so I can [outcome]."

### 2.2 Target Users
**Primary Users:** [Main user segment with specific context]  
**Secondary Users:** [Additional affected users]  
**User Pain Points:** 
- [Specific pain point 1]
- [Specific pain point 2]
- [Specific pain point 3]

---

## 3. Goals & Success Metrics

### 3.1 Business Goals
**Primary Goal:** [Main business objective]  
**Secondary Goals:** [Supporting objectives]

### 3.2 Success Metrics
**Key Metrics:**
- [Metric 1]: [Current baseline] → [Target] by [Date]
- [Metric 2]: [Current baseline] → [Target] by [Date]
- [Metric 3]: [Current baseline] → [Target] by [Date]

**Timeline for Measurement:** [When we'll evaluate success]

**Guardrails:**
- [Constraint 1]: [Threshold/limit]
- [Constraint 2]: [Threshold/limit]

---

## 4. Solution Overview

### 4.1 Proposed Solution
[Describe the solution at a conceptual level - avoid detailed specifications]

**Key Principles:**
- [Principle 1]
- [Principle 2]
- [Principle 3]

### 4.2 Key User Flows
*Main paths users will take*

**Flow 1: [Primary Flow Name]**
1. User [action/trigger]
2. System [response]
3. User [next action]
4. System [outcome]
5. User achieves [desired outcome]

**Flow 2: [Secondary Flow Name]**
[Similar step-by-step breakdown]

**Flow 3: [Edge Case Flow]**
[How edge cases are handled]

### 4.3 Core Requirements

**Must Have (P0):**
- **[Requirement 1]**
  - **Description:** [What it does]
  - **Acceptance Criteria:**
    - Given [context], When [action], Then [expected outcome]
    - Given [context], When [action], Then [expected outcome]
  - **Dependencies:** [What's needed]
  
- **[Requirement 2]**
  - [Similar structure]

**Should Have (P1):**
- **[Requirement 3]**
  - [Similar structure]

**Could Have (P2):**
- **[Requirement 4]**
  - [Nice-to-have, deferrable]

---

## 5. Detailed Features & Acceptance Criteria

### Feature 1: [Feature Name]

**Description:** [What this feature does and why]

**User Story:** "As a [user], I want [capability], so that [benefit]"

**Acceptance Criteria:**
- ✅ **AC1:** Given [precondition], When [action], Then [expected result]
- ✅ **AC2:** Given [precondition], When [action], Then [expected result]
- ✅ **AC3:** [Edge case handling]

**Technical Requirements:**
- [Technical constraint 1]
- [Technical constraint 2]

**Dependencies:**
- [Internal dependency]
- [External dependency]

**Success Metrics:**
- [Metric name]: [How to measure]

---

### Feature 2: [Feature Name]

[Similar structure for each feature]

---

## 6. Scope & Constraints

### 6.1 In Scope (This Version)
- [Feature/component 1]
- [Feature/component 2]
- [Feature/component 3]

### 6.2 Out of Scope (Explicitly NOT Doing)
- [Feature 1]: [Why not - technical/business/priority reason]
- [Feature 2]: [Why not]
- [Feature 3]: [Why not]

### 6.3 Future Considerations
- [Feature that may be added later]: [Conditions for adding]
- [Enhancement]: [When to consider]

### 6.4 Constraints
**Technical:** [Technology limitations, API constraints, platform restrictions]  
**Timeline:** [Schedule constraints, deadlines]  
**Resources:** [Team capacity, budget limitations]  
**Business:** [Policy, regulatory, or strategic constraints]  
**Compliance:** [Legal, privacy, security requirements]

---

## 7. User Experience & Interface Requirements

### 7.1 User Interface Requirements
- [UI requirement 1]: [Description]
- [UI requirement 2]: [Description]

### 7.2 User Experience Principles
- [Principle 1]: [How it applies]
- [Principle 2]: [How it applies]

### 7.3 Accessibility Requirements
- [Accessibility requirement 1]
- [Accessibility requirement 2]

---

## 8. Technical Specifications

### 8.1 Architecture Overview
[High-level system architecture - link to detailed technical docs]

### 8.2 Data Requirements
- **Data Sources:** [Where data comes from]
- **Data Storage:** [Where data is stored]
- **Data Processing:** [How data is processed]
- **Data Privacy:** [Privacy considerations]

### 8.3 Integration Requirements
- [Integration 1]: [What it integrates with, how]
- [Integration 2]: [What it integrates with, how]

### 8.4 Performance Requirements
- [Performance metric 1]: [Target/threshold]
- [Performance metric 2]: [Target/threshold]

### 8.5 Security & Compliance
- [Security requirement 1]
- [Security requirement 2]
- [Compliance requirement 1]

---

## 9. Dependencies & Risks

### 9.1 Dependencies
**Internal:**
- [Team/System]: [What's needed and by when]

**External:**
- [Vendor/API/Service]: [What's needed and by when]

**Technical:**
- [Technology/Infrastructure]: [What's needed]

### 9.2 Key Risks & Mitigation
**Risk 1: [Risk Description]**
- **Probability:** [High/Med/Low]
- **Impact:** [High/Med/Low]
- **Mitigation:** [How we'll address it]
- **Contingency:** [Backup plan]

**Risk 2: [Risk Description]**
[Similar structure]

---

## 10. Implementation Plan

### 10.1 High-Level Timeline
**Phase 1: [Phase Name]** - [Timeframe]
- [Milestone 1]
- [Milestone 2]
- [Deliverable]

**Phase 2: [Phase Name]** - [Timeframe]
- [Milestone 1]
- [Milestone 2]
- [Deliverable]

**Phase 3: [Phase Name]** - [Timeframe]
- [Milestone 1]
- [Milestone 2]
- [Deliverable]

### 10.2 Development Approach
- [Agile/Sprint approach, Waterfall, etc.]
- [Sprint duration, release cadence]
- [Testing strategy]

### 10.3 Go-to-Market Plan
**Launch Strategy:** [How we'll roll out]
- [Beta/Alpha testing]
- [Phased rollout]
- [Full launch]

**Marketing/Communication:** [How users will learn about it]  
**Support Plan:** [Customer support considerations]  
**Training:** [Training requirements]

---

## 11. Testing & Validation

### 11.1 Testing Strategy
**Unit Tests:** [What will be unit tested]  
**Integration Tests:** [What will be integration tested]  
**User Acceptance Tests:** [UAT criteria]  
**Performance Tests:** [Performance testing approach]

### 11.2 Validation Plan
**Validation Method:** [How we'll validate success]
- [Method 1]: [What we'll measure]
- [Method 2]: [What we'll measure]

**Success Criteria:** [What "done" looks like]
- [Criteria 1]
- [Criteria 2]

---

## 12. Post-Launch Plan

### 12.1 Monitoring & Metrics
**Key Metrics to Track:**
- [Metric 1]: [How to measure, dashboard link]
- [Metric 2]: [How to measure, dashboard link]

**Alert Thresholds:**
- [Alert condition]: [Action to take]

### 12.2 Iteration Plan
**Feedback Collection:** [How we'll gather user feedback]
- [Method 1]
- [Method 2]

**Review Timeline:** [When we'll assess and iterate]
- [Review 1]: [Date, focus area]
- [Review 2]: [Date, focus area]

**Success Criteria for Iteration:**
- [When to iterate]
- [When to pivot]
- [When to kill]

---

## 13. Open Questions & Decisions Needed

### 13.1 Open Questions
- ❓ **[Question 1]:** [Owner, decision date]
- ❓ **[Question 2]:** [Owner, decision date]

### 13.2 Decisions Needed
- [ ] **[Decision 1]:** [Context, options, recommendation]
- [ ] **[Decision 2]:** [Context, options, recommendation]

---

## 14. Appendix

### 14.1 Research & Data
- [Link to user research]
- [Link to competitive analysis]
- [Link to data analysis]

### 14.2 Wireframes/Mockups
- [Link to design assets]
- [Link to prototypes]

### 14.3 Technical Specifications
- [Link to detailed technical documentation]
- [Link to API specifications]
- [Link to database schema]

### 14.4 Related Documents
- [Link to opportunity-assessment.md]
- [Link to roadmap.md]
- [Link to decisions.md]

---

## 15. Document History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| [Date] | 1.0 | Initial PRD | [Name] |
| [Date] | 1.1 | [Change description] | [Name] |

---

## 16. Stakeholder Sign-off

**Product Manager:** [ ] Reviewed and Approved - [Name, Date]  
**Engineering Lead:** [ ] Reviewed and Approved - [Name, Date]  
**Design Lead:** [ ] Reviewed and Approved - [Name, Date]  
**Marketing:** [ ] Reviewed and Approved - [Name, Date]  
**Legal/Compliance:** [ ] Reviewed and Approved - [Name, Date]  
**Leadership:** [ ] Reviewed and Approved - [Name, Date]

---

**Next Steps:**
1. [Action 1] - [Owner] - [Due Date]
2. [Action 2] - [Owner] - [Due Date]

-----

## References

- PRD Framework: \`1-prd-framework.md\`
- PRD JTBD Template: \`3-prd-jtbd-template.md\`
- PRD README: \`README.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- OKR Framework: \`../2.1.2-OKR/README.md\`
- Opportunity Assessment: \`../../2.3-Discovery/2.3.4-Opportunity-Assessment/README.md\`
- Idea Validation: \`../../2.3-Discovery/2.3.5-Idea-Validation/README.md\`
- Jobs to Be Done: \`../../2.3-Discovery/2.3.3-Jobs-To-Be-Done/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`

---

## Personas Framework

# Personas Framework

## Overview

This framework provides two approaches for creating personas: HEART (human-centered) and JOBS (outcome-driven). Personas help teams build empathy and make user-centered decisions.

## Step 0: Braindump & Product Sense (Do this first!)

**Before creating personas, braindump:**
- Who are your users? Dump everything you know - don't structure yet.
- What does your product sense tell you? What user segments matter most?
- What assumptions are you making about users? List them explicitly.
- What biases might affect your personas? (Stereotyping? Confirmation bias?)
- What would great product sense look like here? What would an experienced PM notice?

**Product sense exercise:**
- If you had to pick ONE user type to focus on, who would it be? Why?
- What would make you say "these personas are obviously wrong"?
- What would make you say "these personas are obviously right"?

-----

## HEART Framework

**Purpose:**
- Lightweight persona framework focused on human motivations and triggers.
- Keeps personas actionable and emotionally relatable for product decisions.

**Structure:**
- H — Human: identity, role, background, experience
- E — Emotions: motivations, frustrations, success feeling
- A — Actions: daily responsibilities, decision authority, collaboration style
- R — Results: key metrics, constraints, stakes
- T — Triggers: pain points, catalysts, blockers

**When to use:**
- Early product scoping, feature prioritization, UX conversations, stakeholder alignment.

**Notes:**
- Keep entries concise (1–3 bullet points per field).
- Update with real user data after interviews or telemetry.

-----

## JOBS Framework (Jobs-to-be-Done)

**Purpose:**
- Focuses on the core "job" the user hires a solution to complete.
- Best for discovering real user needs and outcome-driven design.

**Structure:**
- Job to be Done: the goal the user wants to achieve
- Trigger: event that makes the job urgent
- Outcome: success criteria / desired result
- Obstacles: what prevents the user from succeeding
- Context: when, where, and why the job appears

**When to use:**
- Feature ideation, prioritization, experiment design, messaging.

**Notes:**
- Capture verbs and context — JOBS is action-first.

-----

## References

- Personas Template: \`2-personas-template.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- Research Interviews: \`../../2.3-Discovery/2.3.1-Research-Interviews/README.md\`
- Jobs to Be Done: \`../../2.3-Discovery/2.3.3-Jobs-To-Be-Done/README.md\`
- PRD Framework: \`../2.1.4-PRD/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`


---

## North Star Framework

# North Star Framework

## Overview

This framework helps product teams align around a single metric that captures customer value and drives sustainable growth. The North Star Framework is NOT a project plan or feature list—it's a strategic alignment tool.

## Step 0: Braindump & Product Sense (Do this first!)

**Before defining your North Star, braindump:**
- What outcomes are you trying to achieve? Dump everything - don't structure yet.
- What does your product sense tell you? What metric feels like it captures real value?
- What assumptions are you making? List them explicitly.
- What biases might affect your metric choice? (Vanity metrics? Activity vs. outcome?)
- What would great product sense look like here? What would an experienced PM focus on?

**Product sense exercise:**
- If you had to pick ONE metric that represents customer value, what would it be? Why?
- What would make you say "this North Star is obviously wrong"?
- What would make you say "this North Star is obviously right"?

## Core Philosophy

### The North Star Framework is NOT a Silver Bullet

A North Star Framework is a living document that should:

- **Enable customer-centricity over vanity metrics** - Focus on value delivered, not just activity
- **Drive cross-functional alignment** - Everyone understands how their work connects to growth
- **Encourage strategic focus** - Teams prioritize work that moves the metric
- **Reduce organizational friction** - Clear metrics prevent endless debates

### Three Types of Product “Games”

Choose the game your product is playing:

- **ATTENTION** - Users return frequently (social media, content platforms)
- **TRANSACTION** - Users complete purchases (e-commerce, marketplaces)
- **PRODUCTIVITY** - Users accomplish tasks efficiently (SaaS, tools)

## Framework Structure

### 1. Header Section

Always include:

- **Disclaimer** - “This North Star reflects our current strategy and may evolve”
- **Product game** - Which game are you playing?
- **Last updated date**
- **Next review date**

### 2. North Star Metric (The “What”)

**Use when:**

- You can measure it consistently
- It represents customer value delivered
- It connects to business outcomes
- Teams can explain how their work impacts it

**Structure:**

- Metric name (customer-value focused)
- Definition (precise and measurable)
- Why this metric (connects value to growth)
- Current baseline

### 3. Input Metrics (The “How”)

**Use when:**

- Teams can directly influence them
- They’re leading indicators of the North Star
- You have 3-5 key inputs (not more)
- Each maps to team capabilities

**Structure:**

- Input name (action-oriented)
- How it influences North Star
- Owning team
- Current value and target

### 4. Work Connections (The “Execution”)

**Use when:**

- Initiatives clearly move an input
- You can define success criteria
- Teams need prioritization clarity

**Structure:**

- Initiative or bet
- Which input it moves
- Expected impact
- How you’ll measure success

## Writing Guidelines

### North Star Metric Names

- ✅ “Weekly Learning Users” (Amplitude)
- ✅ “Messages sent per week” (Slack)
- ✅ “Nights booked” (Airbnb)
- ❌ “Total registered users”
- ❌ “Page views”

### Input Metrics

- ✅ “New user activation rate within first session”
- ✅ “Percentage of users discovering personalized content”
- ❌ “Users who saw the onboarding flow”
- ❌ “Feature adoption”

### Why This Metric

- ✅ “Measures value exchange between users”
- ✅ “Predicts retention and expansion”
- ❌ “It’s easy to measure”
- ❌ “Our competitors use it”

## Review Schedule

### Weekly Check-ins (Input Metrics)

- Progress against input targets
- Early signals and trends
- Blockers and adjustments

### Monthly Reviews (North Star + Inputs)

- Full metric review
- Initiative performance
- Strategic recalibration

### Quarterly Deep-Dives (Full Framework)

- North Star Metric validity check
- Input metric relevance
- New opportunities or threats
- Capacity and resource alignment

### Annual Reviews

- Product strategy alignment
- Market positioning check
- Consider North Star changes

## Stakeholder Communication

### For Leadership

- Focus on North Star and business correlation
- Highlight strategic bets and trade-offs
- Show how inputs drive sustainable growth

### For Product Teams

- Emphasize inputs they can directly influence
- Connect daily work to North Star movement
- Celebrate wins and share learnings

### For Cross-Functional Teams

- Show how their function contributes
- Provide clear success criteria
- Explain interdependencies

### For Individual Contributors

- Make the connection personal: “My work → Input → North Star → Customer value”
- Share impact stories regularly
- Create feedback loops

## Common Challenges and Solutions

### “This metric doesn’t capture everything we do”

**Response pattern:**
“You’re right—no single metric can. That’s why we have inputs that break down how we deliver value. What aspect of customer value do you think we’re missing?”

### “Can’t we just track everything?”

**Response pattern:**
“Tracking everything means focusing on nothing. Our North Star and inputs help us make trade-offs. What decision are you trying to make that requires additional metrics?”

### “My work doesn’t impact the North Star”

**Response pattern:**
“Let’s map it together. What outcome does your work enable? How does that connect to one of our inputs? If we can’t draw the connection, we should discuss priorities.”

### “The metric isn’t moving despite our efforts”

**Response pattern:**
“Let’s examine our beliefs. Do our inputs actually drive the North Star? Are we measuring the right things? This is exactly when the framework helps us learn and adapt.”

## Best Practices

### Do’s

- Start with customer value, not business goals
- Keep inputs between 3-5 (focus matters)
- Revisit and refine regularly
- Celebrate input movement, not just North Star
- Use workshops for definition and alignment
- Tell stories of how work connects to impact

### Don’ts

- Don’t choose vanity metrics as your North Star
- Don’t create North Stars for every team (one product = one North Star)
- Don’t set and forget—it requires cultivation
- Don’t skip the input metrics (they’re how teams act)
- Don’t ignore qualitative insights
- Don’t expect perfection on day one

## Metrics for Framework Success

Track these to know if your framework is working:

- **Alignment** - Can everyone explain the North Star and their contribution?
- **Prioritization clarity** - Fewer debates about “what to work on next”
- **Strategic decisions** - Features evaluated against North Star impact
- **Team autonomy** - Teams make better local decisions
- **Learning velocity** - Faster insight to action cycles

## Workshop Facilitation

### 90-120 Minute North Star Workshop

**Preparation:**

- Select 5-10 key contributors (product, engineering, data, design, business)
- Share pre-read on North Star Framework basics
- Gather existing metrics and strategy docs

**Agenda:**

**Part 1: Alignment (20 min)**

- Review product strategy and vision
- Discuss customer value proposition
- Identify which “game” you’re playing

**Part 2: North Star Candidates (30 min)**

- Brainstorm potential North Star Metrics
- Apply criteria: customer value, measurable, actionable, connected to revenue
- Narrow to top 2-3 candidates

**Part 3: Input Mapping (30 min)**

- For each North Star candidate, identify 3-5 inputs
- Discuss which inputs teams can influence
- Map inputs to team capabilities

**Part 4: Selection & Definition (20 min)**

- Choose North Star Metric
- Write clear definitions
- Define measurement approach

**Part 5: Next Steps (10 min)**

- Assign owners
- Set review cadence
- Plan rollout communication

### Anti-Workshop: Bad North Star Exercise

Spend 10 minutes brainstorming what a TERRIBLE North Star would be for your company. This frees thinking and sets guardrails:

- What metrics would make us feel good but deliver no value?
- What could we optimize that would hurt customers?
- What's easy to measure but meaningless?

-----

## References

- North Star Template: \`2-north-star-template.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- OKR Framework: \`../2.1.2-OKR/README.md\`
- Roadmap: \`../2.1.3-Roadmap/README.md\`
- Metrics Framework: \`../../2.9-Other/2.9.5-Metrics/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`

---

## Prioritization Framework

# Product Prioritization Framework

## Overview

This framework helps product teams make systematic decisions about what to build next. Prioritization is NOT about pleasing everyone—it’s about maximizing value delivery with limited resources.

## Core Philosophy

### Prioritization is NOT Guesswork

Effective prioritization should:

- **Drive strategic focus over tactical firefighting** - Align work to goals, not just urgency
- **Reduce bias over gut feelings** - Use data and frameworks, not HiPPO (Highest Paid Person’s Opinion)
- **Increase transparency over politics** - Make decisions defensible and repeatable
- **Enable team autonomy over micromanagement** - Teams understand the “why” behind priorities

### Understanding Prioritization Dimensions

Every initiative can be evaluated across multiple dimensions:

- **VALUE ←→ EFFORT** - What you gain vs. what it costs
- **CERTAINTY ←→ RISK** - Confidence in estimates and outcomes
- **STRATEGIC ←→ TACTICAL** - Long-term positioning vs. short-term needs
- **BROAD ←→ NARROW** - How many users/customers affected

## Framework Structure

### 1. Header Section

Always include:

- **Disclaimer** - “Priorities reflect current strategy and will shift as we learn”
- **Prioritization method** - Which framework(s) are you using?
- **Last prioritization date**
- **Next review date**
- **Decision owner**

### 2. Prioritization Methods

**RICE Scoring (Comprehensive)**

- Best for: Feature development, product roadmaps
- Factors: Reach, Impact, Confidence, Effort
- Time investment: Medium to high
- Bias reduction: High

**ICE Scoring (Quick & Simple)**

- Best for: Growth experiments, rapid testing
- Factors: Impact, Confidence, Ease
- Time investment: Low
- Bias reduction: Medium

**Effort-Impact Matrix (Visual)**

- Best for: Workshops, stakeholder alignment
- Factors: Impact (value) vs. Effort (cost)
- Time investment: Low
- Bias reduction: Low to medium

**Value vs. Complexity (Strategic)**

- Best for: Long-term planning, portfolio decisions
- Factors: Business value vs. Technical complexity
- Time investment: Medium
- Bias reduction: Medium

### 3. Responsibility Assignment (RACI)

**Use when:**

- Multiple stakeholders involved
- Unclear ownership causing delays
- Cross-functional dependencies
- Need decision clarity

**Structure:**

- R = Responsible (does the work)
- A = Accountable (owns the outcome)
- C = Consulted (provides input)
- I = Informed (kept in the loop)

### 4. Decision Criteria

Define what matters most:

- Strategic alignment (does this support our strategy?)
- Customer value (does this solve a real problem?)
- Business impact (does this move key metrics?)
- Technical feasibility (can we actually build this?)
- Resource availability (do we have capacity?)

## Writing Guidelines

### Initiative Names

- ✅ “Add multi-factor authentication for enterprise users”
- ✅ “Redesign checkout flow to reduce abandonment”
- ✅ “Build API integration with Salesforce”
- ❌ “Security improvements”
- ❌ “Better UX”
- ❌ “Technical debt”

### Scoring Rationale

- ✅ “Reach: 5,000 enterprise users × 90% adoption = 4,500/quarter”
- ✅ “Impact: 3x (massive) - Directly addresses #1 churn reason”
- ✅ “Effort: 4 person-months based on engineering estimate”
- ❌ “This seems important”
- ❌ “High impact”
- ❌ “Won’t take long”

### Priority Decisions

- ✅ “Prioritized due to RICE score of 625 and strategic alignment with enterprise expansion”
- ✅ “Deprioritized despite stakeholder interest due to low reach (50 users) and high effort (8 person-months)”
- ❌ “Leadership wants this”
- ❌ “Competitors have it”

## Review Schedule

### Weekly Check-ins (Active Work)

- Progress on prioritized initiatives
- Blockers and impediments
- Quick wins or deprioritization needs

### Bi-weekly Backlog Grooming

- Score new ideas
- Re-evaluate scores based on learnings
- Remove obsolete items

### Monthly Strategic Review

- Portfolio balance check
- Resource allocation
- Stakeholder alignment

### Quarterly Planning

- Full re-prioritization
- Strategy alignment check
- Capacity planning
- Major initiative sequencing

## Stakeholder Communication

### For Leadership

- Focus on strategic initiatives and business impact
- Show portfolio balance (quick wins vs. big bets)
- Highlight trade-offs and opportunity costs
- Use scores to defend decisions

### For Product Teams

- Emphasize customer value and impact
- Connect work to metrics and outcomes
- Show how initiatives ladder up to strategy
- Make scoring transparent and participatory

### For Engineering Teams

- Provide technical context and effort estimates
- Show why high-effort items are worth it
- Balance innovation with maintenance
- Make dependencies visible

### For Customer-Facing Teams

- Connect priorities to customer pain points
- Share timeline expectations
- Explain what’s NOT being built and why
- Gather input for future prioritization

## Common Challenges and Solutions

### “Everything is a priority”

**Response pattern:**
“If everything is a priority, nothing is. Let’s use RICE scoring to objectively rank these. Which initiatives have the highest reach × impact relative to effort? What are we willing to say ‘not now’ to?”

### “But [executive/customer] really wants this”

**Response pattern:**
“Let’s score it objectively. What’s the reach, impact, confidence, and effort? How does it compare to our current priorities? If it scores higher, we can re-prioritize. If not, we can explain why with data.”

### “We need to balance quick wins with strategic bets”

**Response pattern:**
“Agreed. Let’s aim for 70-20-10: 70% high-confidence improvements, 20% medium-confidence bets, 10% experimental long-shots. Does our current portfolio match this?”

### “The scoring feels subjective and gameable”

**Response pattern:**
“You’re right to be concerned. Let’s: (1) Use consistent scoring scales, (2) Score collaboratively as a team, (3) Base estimates on data when possible, (4) Review scores against actual results to calibrate.”

## Best Practices

### Do’s

- Score collaboratively with cross-functional teams
- Use data to support estimates when available
- Re-score based on learnings and new information
- Make scoring scales consistent across initiatives
- Document assumptions behind scores
- Review actual outcomes vs. predicted scores
- Balance portfolio across effort/impact quadrants

### Don’ts

- Let HiPPO (Highest Paid Person’s Opinion) override scores
- Score in isolation without team input
- Set scores once and never revisit
- Game the system to get pet projects approved
- Ignore effort estimates from engineering
- Forget to communicate deprioritization decisions
- Prioritize solely based on ease (avoid “easy button” trap)

## Prioritization Success Metrics

Track these to know if your framework is working:

- **Delivery predictability** - Are we completing prioritized work on time?
- **Value realization** - Do completed initiatives move target metrics?
- **Team alignment** - Can everyone explain current priorities?
- **Decision speed** - How fast can we make priority calls?
- **Stakeholder satisfaction** - Do stakeholders understand trade-offs?
- **Score accuracy** - How close are actual results to predictions?

## RICE Scoring Deep Dive

### Reach: How many people will this impact?

**Definition:** Number of people/events affected per time period (usually per quarter)

**How to estimate:**

- Use product analytics for existing flows
- Base on current user segments
- Account for adoption rate (not everyone will use it)
- Be specific: “customers/quarter” or “sessions/month”

**Scoring guidance:**

- Use actual numbers, not T-shirt sizes
- 1,000+ users per quarter = significant reach
- 100-1,000 = moderate reach
- <100 = low reach (may still be valuable for strategic reasons)

**Example:**

- Feature used by 2,000 customers/month = 6,000 reach per quarter
- New signup flow with 500 signups/month × 80% see change = 1,200 reach per quarter

### Impact: How much will this improve the metric we care about?

**Definition:** How much each person/event is affected

**Scoring scale:**

- **3.0** = Massive impact - Game-changing, primary differentiator
- **2.0** = High impact - Significant improvement to key metric
- **1.0** = Medium impact - Noticeable improvement
- **0.5** = Low impact - Minor improvement
- **0.25** = Minimal impact - Barely noticeable

**How to estimate:**

- Connect to North Star or input metrics
- Look at similar features’ historical impact
- Use A/B test results when available
- Consider competitive differentiation

**Example:**

- Solves #1 churn reason = 3.0 (massive)
- Improves conversion by 15-20% = 2.0 (high)
- Nice-to-have quality improvement = 0.5 (low)

### Confidence: How sure are you about reach, impact, and effort?

**Definition:** Certainty in your estimates

**Scoring scale:**

- **100%** = High confidence - Strong data, proven approach
- **80%** = Medium confidence - Some data, reasonable assumptions
- **50%** = Low confidence - Mostly assumptions, high uncertainty

**What increases confidence:**

- User research validating the problem
- Historical data on similar features
- Customer requests and feedback
- Technical prototype or proof of concept
- Engineering estimates with specifications

**What decreases confidence:**

- Whiteboard sketches only
- Gut feelings without data
- Untested assumptions
- New technical territory
- External dependencies

**Example:**

- 100%: We have A/B test data showing 25% improvement
- 80%: We have user research but no hard metrics yet
- 50%: This is a hypothesis we want to test

### Effort: How much work will this take?

**Definition:** Total person-months across all functions (product, design, engineering)

**How to estimate:**

- Break down by discipline (PM, design, engineering, QA)
- Use person-months (work one person can do in a month)
- Keep estimates rough: whole numbers or 0.5
- Include all phases: design, development, testing, launch

**Scoring guidance:**

- 0.5 = Less than 2 weeks total effort
- 1 = About 1 month
- 2-3 = Moderate project (quarter)
- 5+ = Major initiative
- 10+ = Multi-quarter epic

**Example:**

- Small UI change: 1 designer (0.5) + 1 engineer (1 week) = 0.5 person-months
- New feature: 2 engineers (6 weeks) + 1 designer (3 weeks) = 3.5 person-months
- Platform rebuild: 4 engineers (3 months) = 12 person-months

### RICE Formula

**RICE Score = (Reach × Impact × Confidence) / Effort**

**Example Calculation:**

Initiative: Add dark mode

- Reach: 80,000 users per quarter
- Impact: 1.0 (medium - quality of life improvement)
- Confidence: 80% (0.8) - we have survey data
- Effort: 2 person-months

RICE Score = (80,000 × 1.0 × 0.8) / 2 = **32,000**

Initiative: AI-powered recommendations

- Reach: 150,000 users per quarter
- Impact: 2.0 (high - drives engagement)
- Confidence: 50% (0.5) - untested hypothesis
- Effort: 6 person-months

RICE Score = (150,000 × 2.0 × 0.5) / 6 = **25,000**

→ Prioritize dark mode (32,000) over AI recommendations (25,000)

## ICE Scoring Alternative

### When to Use ICE Instead of RICE

ICE is faster and simpler, best for:

- Growth experiments and A/B tests
- Early-stage ideas without clear reach data
- Rapid prioritization (minutes, not hours)
- Marketing campaigns and tactics

### ICE Components

**Impact (1-10 scale):**

- 10 = Transformative
- 7-9 = Very high
- 4-6 = Medium
- 1-3 = Low

**Confidence (1-10 scale):**

- 10 = Proven (data-backed)
- 7-9 = High confidence
- 4-6 = Medium confidence
- 1-3 = Low confidence

**Ease (1-10 scale):**

- 10 = Trivial (hours to days)
- 7-9 = Easy (days to week)
- 4-6 = Moderate (1-2 weeks)
- 1-3 = Hard (weeks to months)

**ICE Score = (Impact + Confidence + Ease) / 3**

Or simpler: **Impact × Confidence × Ease**

## RACI Matrix Deep Dive

### When to Use RACI

RACI is essential when:

- Multiple teams/stakeholders involved
- Unclear who makes final decisions
- Frequent “who owns this?” questions
- Cross-functional dependencies
- New initiatives without established ownership

### RACI Roles Explained

**R = Responsible (Doer)**

- Does the actual work
- Completes the task or deliverable
- Can have multiple people
- Cannot delegate their responsibility

**Examples:**

- Engineer writes the code
- Designer creates the mockups
- PM writes the specification

**A = Accountable (Owner)**

- Owns the outcome
- Makes final decisions
- Approves the work
- **ONLY ONE per task**
- Cannot be delegated

**Examples:**

- Product Manager accountable for feature delivery
- Engineering Lead accountable for technical quality
- VP Product accountable for roadmap

**C = Consulted (Advisor)**

- Provides input and expertise
- Two-way communication
- Subject matter experts
- Input happens BEFORE work is done

**Examples:**

- Legal consulted on privacy features
- Security consulted on authentication changes
- Customer success consulted on UX changes

**I = Informed (Stakeholder)**

- Kept updated on progress
- One-way communication
- No input required
- Notified of completion or major milestones

**Examples:**

- Executive team informed of launch
- Marketing informed of feature release
- Support team informed of changes

### RACI Best Practices

**One Accountable Rule:**

- Each task must have exactly ONE accountable person
- This is your decision-maker and ultimate owner
- Two accountables = no accountability

**Not Everyone Needs a Letter:**

- It’s okay to have blank cells
- Not every role needs involvement in every task
- Too many C’s = decision paralysis
- Too many I’s = email overload

**Balance Responsible Assignments:**

- Don’t overload individuals with too many R’s
- Distribute work across the team
- Check for capacity and bandwidth

**RACI is Living Document:**

- Update as project evolves
- Review when responsibilities shift
- Remove completed tasks regularly

## Effort-Impact Matrix

### Four Quadrants

**Quick Wins (High Impact, Low Effort)**

- **Do First**
- Easy wins that move the needle
- Build momentum and team confidence
- Target: 40% of capacity

**Major Projects (High Impact, High Effort)**

- **Do Next**
- Strategic bets worth the investment
- Require cross-functional commitment
- Target: 40% of capacity

**Fill-Ins (Low Impact, Low Effort)**

- **Do Later**
- Nice-to-haves when capacity allows
- Good for new team members
- Target: 10% of capacity

**Money Pits (Low Impact, High Effort)**

- **Avoid**
- High cost, low return
- Question why these exist
- Target: 0% of capacity (unless strategic requirement)

### Using the Matrix

1. Plot all initiatives on the matrix
1. Identify where most items cluster
1. Aim for portfolio balance:
- 40% Quick Wins
- 40% Major Projects
- 10% Fill-Ins
- 10% Innovation/Exploration
1. Ruthlessly cut or defer Money Pits

-----

## References

- Prioritization Template: \`2-prioritization-template.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- OKR Framework: \`../2.1.2-OKR/README.md\`
- Roadmap: \`../2.1.3-Roadmap/README.md\`
- North Star: \`../2.1.6-North-Star/README.md\`
- Opportunity Assessment: \`../../2.3-Discovery/2.3.4-Opportunity-Assessment/README.md\`
- Bias Framework: \`../../2.9-Other/2.9.4-Bias/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`



---

## Prioritization Template

# Product Prioritization Template

## Disclaimer

This prioritization reflects our current strategy and understanding. Priorities will evolve as we learn, as market conditions change, and as new opportunities emerge.

**Last prioritization:** [Date]
**Next review:** [Date]
**Method used:** [RICE / ICE / Impact-Effort / Other]
**Decision owner:** [Name/Role]

-----

## 📋 Prioritization Backlog

### Initiative Scoring (RICE Method)

|Initiative|Reach |Impact |Confidence|Effort |RICE Score |Priority|Status |
|----------|-----------|--------|----------|---------------|------------|--------|--------|
|[Name] |[#/quarter]|[0.25-3]|[50-100%] |[person-months]|[calculated]|[rank] |[Status]|
| | | | | | | | |
| | | | | | | | |

**Example:**

|Initiative |Reach |Impact|Confidence|Effort|RICE Score|Priority|Status |
|--------------------------------|-------|------|----------|------|----------|--------|-----------|
|Multi-factor auth for enterprise|5,000 |3.0 |100% |4 |**3,750** |1 |In Progress|
|Redesign onboarding flow |4,500 |2.0 |80% |3 |**2,400** |2 |Next |
|Dark mode |80,000 |1.0 |80% |2 |**32,000**|3 |Backlog |
|AI recommendations |150,000|2.0 |50% |6 |**25,000**|4 |Backlog |

-----

## 📊 Initiative Deep-Dive Template

For each top-priority initiative, document detailed scoring rationale:

### Initiative: [Name]

**One-liner:** [Concise description of what this is]

**Problem:** [What customer/business problem does this solve?]

**Solution:** [High-level approach]

-----

#### RICE Scoring Detail

**Reach: [Number per time period]**

- Data source: [Where this number comes from]
- Calculation: [Show your math]
- Assumptions: [What we’re assuming]

**Example:**

- **Reach: 5,000 enterprise users per quarter**
- Data source: Customer segmentation analysis
- Calculation: 50 enterprise accounts × 100 avg users/account = 5,000
- Assumptions: 90% adoption based on similar security features

**Impact: [0.25 to 3.0]**

- Metric affected: [Which metric this moves]
- Expected change: [How much it will move]
- Why this score: [Rationale]

**Example:**

- **Impact: 3.0 (Massive)**
- Metric affected: Enterprise churn rate
- Expected change: Reduces churn from 15% to 8%
- Why this score: MFA is #1 requested feature; blocke 3 deals last quarter

**Confidence: [50-100%]**

- Evidence: [What gives you confidence]
- Risks/unknowns: [What could change]
- How to increase: [What would raise confidence]

**Example:**

- **Confidence: 100%**
- Evidence: Customer interviews (20), contract requirements (3), competitive analysis
- Risks/unknowns: None - this is table stakes for enterprise
- How to increase: N/A - already high

**Effort: [Person-months]**

- Breakdown: [PM, Design, Eng, QA time]
- Dependencies: [External factors]
- Risk factors: [What could increase effort]

**Example:**

- **Effort: 4 person-months**
- Breakdown: PM (0.5), Design (1), Engineering (2), QA (0.5)
- Dependencies: Security audit required (included in estimate)
- Risk factors: Third-party integration complexity (mitigated by vendor partnership)

-----

**RICE Score:** [Calculated value]

**Priority Rank:** [Position in backlog]

**Decision:** [Prioritize / Deprioritize / Defer]

**Rationale:** [Why this decision given the score]

-----

## 🎯 Portfolio Balance

### Current Distribution

|Quadrant |# of Initiatives|% of Total Effort|Target %|Gap |
|-----------------------------------------|----------------|-----------------|--------|-----|
|Quick Wins (High Impact, Low Effort) |[count] |[%] |40% |[+/-]|
|Major Projects (High Impact, High Effort)|[count] |[%] |40% |[+/-]|
|Fill-Ins (Low Impact, Low Effort) |[count] |[%] |10% |[+/-]|
|Money Pits (Low Impact, High Effort) |[count] |[%] |0% |[+/-]|
|Innovation/Exploration |[count] |[%] |10% |[+/-]|

### Actions Needed

Based on portfolio analysis:

- **Overweighted in:** [Which quadrant]
- **Action:** [What to do about it]
- **Underweighted in:** [Which quadrant]
- **Action:** [What to do about it]

-----

## 👥 RACI Matrix

### For Key Initiatives

|Initiative / Task|Product|Engineering|Design|Marketing|Legal|Customer Success|
|-----------------|-------|-----------|------|---------|-----|----------------|
|[Initiative 1] |A,R |R |C |I |C |I |
|[Sub-task 1] |A |R |R |- |- |I |
|[Sub-task 2] |C |A,R |C |I |- |I |
| | | | | | | |

**Example: Multi-Factor Authentication Launch**

|Task |Product|Engineering|Design|Marketing|Legal|Support|
|------------------------|-------|-----------|------|---------|-----|-------|
|Feature specification |A,R |C |C |- |C |C |
|Technical implementation|C |A,R |- |- |- |- |
|UI/UX design |C |C |A,R |- |- |C |
|Security audit |A |R |- |- |C |- |
|Go-to-market plan |C |I |I |A,R |- |C |
|Customer documentation |C |C |C |C |- |A,R |
|Launch communication |I |I |I |A |I |R |

**Key:**

- **R** = Responsible (does the work)
- **A** = Accountable (owns the outcome) - ONE per task
- **C** = Consulted (provides input)
- **I** = Informed (kept in loop)

-----

## 📅 Prioritization Timeline

### Now (Q[X] 20XX)

**Committed Work:**

|Initiative |RICE Score|Team |Expected Completion|Success Criteria |
|------------|----------|------|-------------------|-----------------|
|[Initiative]|[Score] |[Team]|[Date] |[Metric movement]|
| | | | | |

### Next (Q[X+1] 20XX)

**Planned Work:**

|Initiative |RICE Score|Team |Tentative Start|Dependencies|
|------------|----------|------|---------------|------------|
|[Initiative]|[Score] |[Team]|[Date] |[Blockers] |
| | | | | |

### Later (Q[X+2] 20XX & Beyond)

**Future Considerations:**

|Initiative |RICE Score|Strategic Value |What We Need to Learn |
|------------|----------|------------------|------------------------|
|[Initiative]|[Score] |[Why this matters]|[To increase confidence]|
| | | | |

-----

## 🔄 Deprioritization Log

**Track what we’re NOT doing and why:**

|Initiative|RICE Score|Why Deprioritized|Revisit When |
|----------|----------|-----------------|----------------|
|[Name] |[Score] |[Rationale] |[Condition/Date]|
| | | | |

**Example:**

|Initiative |RICE Score|Why Deprioritized |Revisit When |
|---------------|----------|---------------------------------------------------------------|---------------------------------------------|
|Social sharing |450 |Low RICE score; narrow reach (500 users); 6 months effort |Q3 when we reach 5K users |
|Custom branding|200 |Nice-to-have; not tied to key metric; 3 months effort |Enterprise accounts >25% of revenue |
|Mobile app |800 |High effort (12 months); unproven demand; strategic uncertainty|After web product achieves product-market fit|

-----

## 🎯 Decision Framework

### Decision Criteria Weighting

**What matters most in our prioritization?** (Total = 100%)

|Criterion |Weight|How We Evaluate |
|-------------------|------|----------------------------------------------------|
|Strategic Alignment|[%] |Does this support our North Star and strategy? |
|Customer Value |[%] |Does this solve a real, validated customer problem? |
|Business Impact |[%] |Does this move our key business metrics? |
|Feasibility |[%] |Can we realistically build and ship this? |
|Market Timing |[%] |Is now the right time (competitive, seasonal, etc.)?|

**Example:**

|Criterion |Weight|How We Evaluate |
|-------------------|------|--------------------------------------------------------|
|Strategic Alignment|30% |Does this support enterprise expansion (our #1 goal)? |
|Customer Value |30% |Is this a top-3 requested feature with validated demand?|
|Business Impact |25% |Does this reduce churn or increase expansion revenue? |
|Feasibility |10% |Can we ship within one quarter? |
|Market Timing |5% |Does this match buying cycles or competitive landscape? |

-----

## 📈 Prioritization Health Metrics

### Track These Over Time

|Metric |Current|Target |Trend|Notes |
|----------------------------|-------|-------|-----|------------------------------------------------|
|**Delivery Accuracy** |[%] |80% |[↑↓→]|% of prioritized items actually completed |
|**Value Realization** |[%] |70% |[↑↓→]|% of shipped features moving target metrics |
|**Team Alignment** |[%] |90% |[↑↓→]|% of team who can explain top 3 priorities |
|**Decision Speed** |[days] |<7 days|[↑↓→]|Avg time from idea to priority decision |
|**Score Accuracy** |[%] |60% |[↑↓→]|Actual impact vs. predicted impact score |
|**Stakeholder Satisfaction**|[1-5] |4.0 |[↑↓→]|Survey: “Do you understand priority trade-offs?”|

-----

## 💡 Scoring Workshop Template

### 90-Minute Prioritization Session

**Pre-work (Before Meeting):**

- [ ] List all initiatives to prioritize
- [ ] Gather available data (analytics, customer feedback, estimates)
- [ ] Share framework overview with participants

**Agenda:**

**Part 1: Alignment (15 min)**

- Review business goals and strategy
- Confirm decision criteria and weights
- Set context for prioritization

**Part 2: Individual Scoring (20 min)**

- Each participant scores initiatives independently
- Use RICE or chosen framework
- Document assumptions

**Part 3: Discussion (40 min)**

- Compare scores for each initiative
- Discuss major discrepancies
- Challenge assumptions
- Reach consensus on scores

**Part 4: Prioritization (15 min)**

- Rank by score
- Apply decision criteria
- Agree on top 3-5 priorities
- Document deprioritization decisions

**Outputs:**

- Scored and ranked backlog
- Top priorities with owners
- Deprioritization rationale
- Next steps and timeline

-----

## ⚠️ Common Prioritization Anti-Patterns

### Anti-Pattern #1: HiPPO-Driven Priorities

**What it looks like:**

- Highest Paid Person’s Opinion overrides scoring
- “Because the CEO wants it” ends debate
- Team scores initiatives but leadership ignores them

**Why it’s harmful:**

- Demotivates team
- Poor accountability (can’t say no)
- Builds wrong features

**Solution:**

- Leadership scores alongside team
- Scores are starting point, not end point
- Require data-backed overrides

### Anti-Pattern #2: Analysis Paralysis

**What it looks like:**

- Spending weeks perfecting RICE scores
- Endless debates over 0.5 vs 1.0 impact
- Never making a decision

**Why it’s harmful:**

- Slows progress
- Opportunity cost of delay
- Perfect is enemy of good

**Solution:**

- Set time limits (1 hour per initiative max)
- Use T-shirt sizes before detailed scoring
- Make decision with 70% confidence

### Anti-Pattern #3: Score Gaming

**What it looks like:**

- Inflating impact scores for pet projects
- Deflating effort estimates
- Cherry-picking data

**Why it’s harmful:**

- Destroys framework trust
- Leads to poor decisions
- Creates political environment

**Solution:**

- Collaborative scoring with diverse perspectives
- Track actual vs. predicted outcomes
- Reward accuracy, not optimism

### Anti-Pattern #4: The “Everything is High Priority” Trap

**What it looks like:**

- All initiatives marked as “critical”
- Unable to say no to anything
- Team constantly context-switching

**Why it’s harmful:**

- Nothing gets finished
- Team burnout
- Low-value work dilutes impact

**Solution:**

- Force-rank everything
- Use portfolio targets (70-20-10 rule)
- Accept trade-offs explicitly

### Anti-Pattern #5: Set-and-Forget Prioritization

**What it looks like:**

- Prioritize once at year/quarter start
- Never revisit despite new information
- Ignore changing conditions

**Why it’s harmful:**

- Waste effort on obsolete work
- Miss timely opportunities
- Lose competitive advantage

**Solution:**

- Regular review cadence (bi-weekly minimum)
- Trigger-based re-prioritization
- Build learning into process

-----

## References

- Prioritization Framework: \`1-prioritization-framework.md\`
- Prioritization README: \`README.md\`
- Product Strategy: \`../2.1.1-Product-Strategy/README.md\`
- OKR Framework: \`../2.1.2-OKR/README.md\`
- Roadmap: \`../2.1.3-Roadmap/README.md\`
- North Star: \`../2.1.6-North-Star/README.md\`

---

## Newsletter Framework

# Newsletter Framework (Stakeholder-Friendly, Monthly)

## Purpose
A comprehensive guide for product managers and product owners to create stakeholder-friendly newsletters.

## Structure & Guidelines
- Recommended frequency: Monthly
- Recommended length: Less than one page
- Target audience: Leadership, engineering, commercial/business users, customers

### Sections (order)
1. Welcome & Introduction — Headline
2. Focus 1: Key achievement or major update
3. Focus 2: Strategic initiative or important change
4. Spotlight: Customer success story or team recognition
5. Focus 3: Looking ahead or recent learning
6. Work in progress & what's next
7. Call to action & engagement

## How to Use the Template (summary)
- Keep the welcome brief and consistent; set expectations and why now
- Lead with impact; use metrics where possible
- Explain changes and what they mean for stakeholders; give timelines/next steps
- Humanize with a spotlight (quote/story)
- Share learnings and what they imply
- Limit WIP/Next to “big rocks” (max 3 each)
- End with a specific, actionable CTA

## Customization Tips
- Leadership: emphasize business impact, metrics, alignment
- Engineering: include concise technical context as needed
- Commercial users: highlight customer benefits and competitive angle
- Business users: call out implications for their area and opportunities
- Seniority: junior → use helper text; senior → adapt structure, keep clarity

## Quality Checklist
- Fits on one page
- Each section answers “what” and “why”
- Technical terms explained or avoided
- Metrics and outcomes where relevant
- Next steps clear and actionable
- Tone matches [Company] culture
- Content provides value beyond status

## Cadence & Ownership
- Frequency: monthly per BU
- Owners: PM/PO (content), Eng/Design/Data (review as needed)
- Archive: keep \`YYYY-MM.md\` files per BU under company context

-----

## References

- Newsletter Template: \`2-newsletter-template.md\`
- Company Context: \`../../01-Company-Context/README.md\`
- OKR Framework: \`../../2.1-Strategy/2.1.2-OKR/README.md\`
- Roadmap Framework: \`../../2.1-Strategy/2.1.3-Roadmap/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`


---

## Newsletter Template

# Newsletter Template

## 1) Welcome & introduction — Headline
Template:
Welcome to the <Edition Number> edition of the <Product/Platform Name> newsletter!

This regular update keeps you informed about our latest developments, milestones, and insights as we continue to build and improve <Product/Platform Name>.
<Brief context about what drove this newsletter's content — e.g., “This month, we're focusing on...” or “Following feedback from stakeholders...”>

Helper:
- Keep welcome brief and consistent
- State purpose/value and why now

Example:
Welcome to the 5th edition of the CustomerHub newsletter!
This month, we're excited to share major performance improvements and upcoming features based on your feedback.

## 2) Focus 1: Key achievement or major update
Template:
Focus 1: <Achievement/Update Title>

<1–2 paragraphs describing the achievement, its impact, and what it means for stakeholders>

Key outcomes:
- <Impact point 1>
- <Impact point 2>
- <Impact point 3 — optional>

Helper:
- Lead with the most significant milestone
- Focus on business impact, use metrics; avoid jargon

Example:
Customer Onboarding Time Reduced by 60%

## 3) Focus 2: Strategic initiative or important change
Template:
Focus 2: <Initiative/Change Title>

<1–2 paragraphs explaining the initiative, rationale, and expected impact>

What this means for you:
- <Stakeholder impact 1>
- <Stakeholder impact 2>
- <Timeline or next steps>

Helper:
- Explain the why, be transparent on trade-offs, give next steps

## 4) Spotlight: Customer success story or team recognition
Template:
Spotlight: <Story/Recognition Title>

<2–3 paragraphs featuring a customer story, team achievement, or testimonial>

“<Direct quote>” — <Name, Title, Company/Team>

Helper:
- Humanize with real stories; use quotes

## 5) Focus 3: Looking ahead or recent learning
Template:
Focus 3: <Forward-looking topic or key insight>

<1–2 paragraphs about upcoming developments, lessons learned, or strategic insights>

Key takeaways:
- <Learning/insight 1>
- <Learning/insight 2>
- <Action item or implication>

## 6) Work in progress & what's next
Template:
Work in Progress (max 3):
- <Current initiative 1>: <Brief description & expected completion>
- <Current initiative 2>: <Brief description & expected completion>
- <Current initiative 3>: <Brief description & expected completion>

What’s Next (max 3):
- <Upcoming priority 1>: <Brief description & timing>
- <Upcoming priority 2>: <Brief description & timing>
- <Upcoming priority 3>: <Brief description & timing>

Helper:
- Focus on big rocks, 1–2 sentences each, realistic timelines

## 7) Call to action & engagement
Template:
Join the Conversation!

<Specific call-to-action based on your goals>

Ways to get involved:
- <Action 1>: <How to participate>
- <Action 2>: <How to participate>
- <Contact method>: <When to reach out>

Helper:
- Specific CTA; multiple ways to engage; end positive

---

## Raw template (copy-paste)
1. Welcome to the <Edition Number> edition of the <Product/Platform Name> newsletter!
This regular update keeps you informed about our latest developments, milestones, and insights as we continue to build and improve <Product/Platform Name>.

<Brief context about what drove this newsletter's content — e.g., “This month, we're focusing on...” or “Following feedback from stakeholders...”>.

2. Focus 1: <Key Achievement/Major Update Title>
<1–2 paragraphs describing the achievement, its impact, and what it means for stakeholders>

Key outcomes:
- <Impact point 1>
- <Impact point 2>
- <Impact point 3 — optional>

3. Focus 2: <Initiative/Change Title>
<1–2 paragraphs explaining the initiative, rationale, and expected impact>

What this means for you:
- <Stakeholder impact 1>
- <Stakeholder impact 2>
- <Timeline or next steps>

4. Spotlight: <Story/Recognition Title>
<2–3 paragraphs featuring a customer success story, team achievement, or user testimonial>

“<Direct quote from customer, team member, or stakeholder>” — <Name, Title, Company/Team>

5. Focus 3: <Forward-looking topic or key insight>
<1–2 paragraphs about upcoming developments, lessons learned, or strategic insights>

Key takeaways:
- <Learning/insight 1>
- <Learning/insight 2>
- <Action item or implication>

6. Work in Progress & What's Next
Work in Progress (max 3 items):
- <Current initiative 1>: <Brief description and expected completion>
- <Current initiative 2>: <Brief description and expected completion>
- <Current initiative 3>: <Brief description and expected completion>

What's Next (max 3 items):
- <Upcoming priority 1>: <Brief description and timing>
- <Upcoming priority 2>: <Brief description and timing>
- <Upcoming priority 3>: <Brief description and timing>

7. Call to Action & Engagement
Join the Conversation!

<Specific call-to-action based on your goals>

Ways to get involved:
- <Action 1>: <How to participate>
- <Action 2>: <How to participate>
- <Contact method>: <When to reach out>

Thank you for being part of this journey. Your continued support and feedback help drive our success.

-----

## References

- Newsletter Framework: \`1-newsletter-framework.md\`
- Newsletter README: \`README.md\`
- Company Context: \`../../01-Company-Context/README.md\`
- OKR Framework: \`../../2.1-Strategy/2.1.2-OKR/README.md\`
- Roadmap Framework: \`../../2.1-Strategy/2.1.3-Roadmap/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`

---

## One-Pager Framework

# One-Pager Framework

## Overview

This framework helps product teams create compelling one-page documents that drive alignment and action. One-pagers are NOT bureaucracy—they're strategic communication tools that enable quick decision-making and clear communication.

## Core Philosophy

### Good Communication is NOT Optional

Effective one-pagers should:

- **Drive decisions over discussions** - Move things forward, not in circles
- **Respect time over tradition** - Every word must add value
- **Enable clarity over comprehension** - Make understanding effortless
- **Foster action over information** - Create clear next steps

### Understanding One-Pagers

**ONE-PAGERS (Asynchronous Communication)**

- Standalone documents that inform and persuade
- Enable pre-reading and independent review
- Create lasting reference materials
- Time-efficient and distributable

## Framework Structure

### 1. Header Section

Always include:

- **Disclaimer** - "One-pagers should be adapted to your audience and context"
- **Last updated date**
- **Framework owner**

### 2. One-Pager Types

**Product One-Pager**
- Propose new product/feature, get buy-in
- Need executive approval
- Cross-functional alignment required

**Strategy One-Pager**
- Communicate product strategy and direction
- Quarterly planning
- Strategy changes

**Launch One-Pager**
- Coordinate product launch across teams
- Preparing for launch
- Cross-functional coordination

**Decision One-Pager**
- Get decision on specific issue/trade-off
- Need executive decision
- Major trade-off to evaluate

**Project Status One-Pager**
- Update stakeholders on project progress
- Monthly/quarterly updates
- High-visibility projects

### 3. Universal Structure

Every one-pager should follow this basic structure:

\`\`\`
┌─────────────────────────────────┐
│ TITLE/HEADLINE (attention) │
├─────────────────────────────────┤
│ TL;DR/Executive Summary │
│ (2-3 sentences max) │
├─────────────────────────────────┤
│ PROBLEM │
│ (Why this matters) │
├─────────────────────────────────┤
│ SOLUTION/PROPOSAL │
│ (What we're proposing) │
├─────────────────────────────────┤
│ WHY NOW │
│ (Timing/urgency) │
├─────────────────────────────────┤
│ IMPACT │
│ (Expected outcomes) │
├─────────────────────────────────┤
│ APPROACH/PLAN │
│ (How we'll do it) │
├─────────────────────────────────┤
│ TRADE-OFFS/RISKS │
│ (What we're not doing) │
├─────────────────────────────────┤
│ ASK/DECISION NEEDED │
│ (What we need from reader) │
└─────────────────────────────────┘
\`\`\`

## Writing Guidelines

### Writing Style

**Do's:**

- ✅ Write for busy executives (assume 3-minute read time)
- ✅ Lead with the punchline (TL;DR first)
- ✅ Use specific numbers and data
- ✅ Be concise (every word must earn its place)
- ✅ Use formatting (bold, bullets, whitespace)
- ✅ Tell a story (problem → solution → impact)

**Don'ts:**

- ❌ Use jargon or acronyms without defining them
- ❌ Write long paragraphs (3-4 sentences max)
- ❌ Bury the lead (get to the point fast)
- ❌ Be vague ("improve significantly" → "increase by 25%")
- ❌ Assume prior context (provide just enough)
- ❌ Include everything (this isn't the PRD)

### Formatting Best Practices

**Visual Hierarchy:**

\`\`\`
Use this order of prominence:
1. Headlines (═══ or bold, large)
2. Section headers (─── or bold)
3. Key numbers/metrics (bold or highlighted)
4. Bullet points (keep to 3-5 per section)
5. Body text (short paragraphs)
\`\`\`

**Whitespace:**

- Leave breathing room between sections
- Don't cram to fit on one page (better to be clear than squeezed)
- Use section dividers

**Data Visualization:**

- Simple charts > tables > paragraphs
- One chart can replace 100 words
- Make sure axes/labels are clear

## Review Schedule

### Before Sharing

- [ ] Reviewed by peer for clarity
- [ ] Checked for jargon and acronyms
- [ ] Verified all numbers are accurate
- [ ] Confirmed decision/ask is clear
- [ ] Tested with one person from target audience

### After Sharing

- [ ] Track if decision was made
- [ ] Note questions or confusion
- [ ] Update based on feedback
- [ ] Archive for future reference

## Stakeholder Communication

### For Leadership

- Focus on business impact and strategic alignment
- Highlight trade-offs and risks explicitly
- Make the ask crystal clear
- Provide context but keep it brief

### For Cross-Functional Teams

- Emphasize how this affects their work
- Show dependencies clearly
- Make timeline and resource needs explicit
- Create shared understanding

### For Executives

- Lead with the business case
- Show ROI and impact
- Make decision criteria clear
- Provide recommendation with rationale

## Common Challenges and Solutions

### "This is too long for one page"

**Response pattern:**
"One-pagers don't have to literally be one page—they should be concise and scannable. If you need 1.5 pages to be clear, that's fine. The goal is clarity, not arbitrary page limits."

### "I don't know what decision I need"

**Response pattern:**
"Start with what you're trying to achieve. What's blocking you? What would unblock you? That's your decision. If you're not sure, that's a signal you need to think through the problem more first."

### "My stakeholder won't read this"

**Response pattern:**
"Make the TL;DR so compelling they can't ignore it. Put the decision/ask in the first paragraph. If they only read one section, make sure it's the TL;DR and it tells them everything they need to know."

## Best Practices

### Do's

- Start with the problem, not the solution
- Use data to support claims
- Make the ask explicit and time-bound
- Include trade-offs and risks
- Test with one person before broad distribution
- Update based on feedback

### Don'ts

- Don't bury the lead
- Don't assume prior knowledge
- Don't use vague language
- Don't skip the problem statement
- Don't forget the decision/ask
- Don't make it longer than necessary

## One-Pager Success Metrics

Track these to know if your one-pagers are effective:

- **Decision velocity** - Are decisions made faster?
- **Clarity** - Do stakeholders understand without follow-up questions?
- **Action** - Do people take the requested action?
- **Reusability** - Can others use this as a template?
- **Stakeholder satisfaction** - Do readers find them valuable?

## One-Pager Quality Checklist

Before sharing any one-pager, validate it passes these tests:

- [ ] **Clarity Test** - Can someone understand it in 3 minutes?
- [ ] **Action Test** - Is the decision/ask crystal clear?
- [ ] **Data Test** - Are claims supported by numbers?
- [ ] **Problem Test** - Is the problem clearly stated?
- [ ] **Solution Test** - Is the proposal clear and feasible?
- [ ] **Impact Test** - Are expected outcomes defined?
- [ ] **Trade-off Test** - Are risks and alternatives addressed?

-----

For ready-to-use templates, see \`2-one-pager-templates.md\`.

-----

## References

- One-Pager Templates: \`2-one-pager-templates.md\`
- Meeting Agendas: \`../2.2.2-Meeting-Agendas/README.md\`
- Stakeholder Management: \`../2.2.7-Stakeholder-Management/README.md\`
- Newsletter: \`../2.2.1-Newsletter/README.md\`
- Product Strategy: \`../../2.1-Strategy/2.1.1-Product-Strategy/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`



---

## Saying No Framework

# Saying No Framework

## Overview

This framework helps PMs decline requests gracefully without burning bridges. Saying no is a critical skill in large organizations where requests often exceed capacity.

-----

## Saying No Gracefully Guide

### The Art of Declining Without Burning Bridges

**Core Principle:** Never say “no” without explaining why or offering an alternative.

-----

### STEP 1: Diagnose the Request Type

**What are they really asking for?**

\`\`\`
TYPE A: Specific Feature Request
→ "Can you build [feature]?"

TYPE B: Priority Change
→ "Can we move [feature] up?"

TYPE C: Additional Scope
→ "Can we add [requirement] to current work?"

TYPE D: Resource Request
→ "Can I borrow [person] for [project]?"

TYPE E: Information/Time
→ "Can you attend [meeting] / provide [analysis]?"
\`\`\`

Each type needs a different response.

-----

### STEP 2: The “No” Response Framework

**Three-Part Structure:**

1. **Acknowledge** the request and why it matters
1. **Explain** the constraint or trade-off
1. **Offer** an alternative or path forward

**Formula:**

\`\`\`
"I understand why [this matters]. Given [constraint], we can't [do this] because [reason]. Instead, what if we [alternative]?"
\`\`\`

-----

### STEP 3: Response Templates by Request Type

#### TYPE A: Feature Requests

**❌ Don’t say:**

> “No, that’s not on the roadmap.”

**✅ Do say:**

**Template 1: Not Now, Here’s When**

\`\`\`
"I love this idea, and I can see why it's important for [use case].

Right now we're focused on [current priority] because [strategic reason]. Adding this would mean:
- Delaying [committed work] by [timeframe]
- Affecting [stakeholder/customer]

What if we:
- Add this to Q[X] roadmap for evaluation
- Capture detailed requirements now for future
- Revisit in [timeframe] after we ship [current work]

Does that work?"
\`\`\`

**Template 2: Not This, But This**

\`\`\`
"I hear you need to [accomplish goal]. While we can't build [exact request], we could:

Option A: [Different solution that achieves same goal]
Option B: [Workaround using existing features]
Option C: [Smaller scope version]

Would any of these solve your problem?"
\`\`\`

**Template 3: Yes If (Conditional Yes)**

\`\`\`
"We can do this IF:
- We descope [other feature]
- OR we push [deadline] to [date]
- OR we get [additional resource]

Which trade-off makes sense given your priorities?"
\`\`\`

-----

#### TYPE B: Priority Changes

**❌ Don’t say:**

> “The roadmap is locked, can’t change it.”

**✅ Do say:**

**Template: Trade-Off Transparency**

\`\`\`
"Help me understand the urgency. What's driving the need to move this up?

Current roadmap:
- Q[X]: [Current priority] - [Why it's prioritized]
- Q[X+1]: [Your request] - [Current plan]

If we reprioritize:
- [Your request] moves to Q[X]
- [Current priority] slips to Q[X+1]
- Impact: [Who/what is affected]

Is that trade-off worth it given [business context]?

If yes, I'll update stakeholders and adjust plans.
If no, let's stick with current priorities."
\`\`\`

-----

#### TYPE C: Scope Creep

**❌ Don’t say:**

> “No, we already agreed on scope.”

**✅ Do say:**

**Template: Scope vs. Timeline**

\`\`\`
"I want to make sure we deliver [original commitment] on time. Adding [new requirement] would:

Impact to timeline: +[X weeks]
Impact to quality: [Risk introduced]
Impact to team: [Capacity stretched]

Options:
1. Add to scope, extend deadline to [new date]
2. Add to scope, remove [other feature] to stay on timeline
3. Defer new requirement to [next phase]

What matters most: timeline or this requirement?"
\`\`\`

-----

#### TYPE D: Resource Requests

**❌ Don’t say:**

> “No, my team is busy.”

**✅ Do say:**

**Template: Capacity Clarity**

\`\`\`
"I'd love to help. [Person] is currently:
- [Current work]: [% time]
- [Current work]: [% time]
- Available: [X hours/week]

Lending them to [your project] means:
- [Current work] delays by [timeframe]
- [Stakeholder] affected

Alternatives:
- [Person] can advise (2-3 hours/week) instead of owning
- We delay [my lower priority work] to free them up
- Different person: [Alternative] could help instead

What works best?"
\`\`\`

-----

#### TYPE E: Meeting/Time Requests

**❌ Don’t say:**

> “I don’t have time.”

**✅ Do say:**

**Template: Async Alternative**

\`\`\`
"I won't be able to make [meeting] because [conflict/priority].

To still help:
- I can review [doc/deck] async and provide feedback
- [Teammate] can attend and represent product
- We can schedule 15-min sync after to discuss
- I can answer specific questions via Slack/email

Would one of those work?"
\`\`\`

-----

### STEP 4: Saying No to Leadership

**When executive requests something you can’t/shouldn’t do:**

**Framework: Respectful Pushback**

\`\`\`
"I want to make sure I understand the full context before committing.

**What I heard:**
[Restate their request]

**My concerns:**
- [Concern 1: specific impact or trade-off]
- [Concern 2: specific impact or trade-off]

**Questions to help me think through this:**
- What's driving the timeline?
- What's the priority relative to [current commitments]?
- What happens if we don't do this?
- What could we stop doing to make room?

**My recommendation:**
[Your suggested approach]

If you still want us to proceed differently, I'll make it happen and communicate the trade-offs to affected stakeholders."
\`\`\`

**Key principles:**

- Ask clarifying questions (they may have context you don’t)
- Make trade-offs explicit
- Offer recommendation but commit to their decision
- Don’t be defensive or passive-aggressive

-----

### STEP 5: Saying No to Sales/Customers

**When sales wants a feature to close a deal:**

**Template: Business Case Challenge**

\`\`\`
"I understand this feature is important for [deal/customer].

Let's evaluate the business case:

**This Deal:**
- Value: [$X]
- Timeline: [When needed]
- Probability: [How likely]

**Feature Requirements:**
- Effort: [X weeks, Y people]
- Affects: [What gets delayed]
- Ongoing cost: [Maintenance, support]

**Questions:**
- How many other customers need this?
- Is this a one-time custom or repeatable feature?
- What's our policy on custom features for deals?
- Can we solve differently (services, workaround)?

If this is truly strategic, let's get [decision-maker] involved to make the call on prioritization."
\`\`\`

-----

### STEP 6: The “No For Now” Pattern

**Use when you want to say no but keep the door open:**

\`\`\`markdown
## Current Status: Not Now

**Why not now:**
[Specific reason tied to strategy/capacity/priorities]

**When we'll revisit:**
[Specific trigger or timeframe]

**What would change our mind:**
- [Condition 1: e.g., "10+ customers request this"]
- [Condition 2: e.g., "Current priority ships successfully"]
- [Condition 3: e.g., "Strategic direction shifts"]

**In the meantime:**
[Alternative or temporary solution]

**How to stay in the loop:**
[How they'll know if status changes]
\`\`\`

-----

### STEP 7: Building Your “No” Muscle

**Practice saying no in low-stakes situations:**

\`\`\`
Low-stakes practice:
- Declining non-critical meetings
- Deferring nice-to-have features
- Pushing back on minor requests

High-stakes situations:
- Executive feature requests
- Customer escalations
- Priority conflicts

Build confidence with small nos before big ones.
\`\`\`

-----

## 🎯 Common Scenarios

### Scenario: “This Will Only Take 5 Minutes”

**❌ Don’t:**

- Agree without thinking
- “Let me check my calendar”

**✅ Do:**

\`\`\`
"5 minutes to discuss, but how long to implement?

If it's truly 5 minutes:
- Let's do it right now

If it's actually [X hours]:
- Let's schedule properly to do it right
- OR add to backlog for prioritization
- OR find a faster alternative

Which is it?"
\`\`\`

-----

### Scenario: “But the Competitor Has This”

**❌ Don’t:**

- “We’re not copying competitors”
- “Our strategy is different”

**✅ Do:**

\`\`\`
"Good catch. Let's think through whether we should match this.

Questions:
- How is competitor positioning this?
- What customer segment values this?
- Is this core to their strategy or us?
- What would we not build to build this?

Our strategy is [X]. This feature is [aligned / not aligned] because [reason].

If we're losing deals over this, let's quantify:
- How many deals?
- How much revenue?
- What's the pattern?

Then we can make a data-informed decision."
\`\`\`

-----

### Scenario: “Can We Just…”

**❌ Don’t:**

- Say yes immediately
- Say no without exploring

**✅ Do:**

\`\`\`
"Let's unpack 'just':
- What's the full scope of this?
- What problem are we solving?
- What's the user impact?
- How will we know it worked?
- What's the ongoing maintenance?

'Just' features often aren't. Let's make sure we understand the actual cost before committing."
\`\`\`

-----

## ✅ “No” Effectiveness Checklist

**Before saying no:**

- [ ] Understand the real need behind the request
- [ ] Consider if there’s a yes you’re missing
- [ ] Identify the constraint preventing yes
- [ ] Prepare an alternative or path forward

**When saying no:**

- [ ] Acknowledge why request matters
- [ ] Explain constraint or trade-off clearly
- [ ] Offer alternative or timeline
- [ ] Keep door open for future

**After saying no:**

- [ ] Document in backlog with rationale
- [ ] Follow up if situation changes
- [ ] Don’t relitigate the decision
- [ ] Maintain relationship with requester

-----

## References

- Escalation: \`../2.2.5-Escalation/README.md\`
- Stakeholder Management: \`../2.2.7-Stakeholder-Management/README.md\`
- Prioritization: \`../../2.1-Strategy/2.1.7-Prioritization/README.md\`
- Roadmap: \`../../2.1-Strategy/2.1.3-Roadmap/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`

---

## Escalation Framework

# Escalation Framework

## Overview

This framework helps PMs navigate when to escalate issues in large organizations. Escalation is a critical skill that junior PMs often struggle with—knowing when to handle something yourself vs. involve leadership.

-----

## When to Escalate Guide

### The Escalation Decision Framework

**Core Principle:** Escalate when you lack authority, information, or resources to resolve—not when it’s just hard or uncomfortable.

-----

### STEP 1: Before Escalating, Try These First

**Self-Checklist:**

\`\`\`
Have I...
☐ Fully understood the problem?
☐ Talked to all relevant people?
☐ Explored multiple solutions?
☐ Attempted to resolve myself?
☐ Considered the trade-offs?
☐ Documented the situation?

If NO to most → Work on these first
If YES to most → Escalation may be appropriate
\`\`\`

-----

### STEP 2: The Escalation Decision Tree

\`\`\`
Issue Identified
│
▼
┌─────────────────────────┐
│ Do I have authority │
│ to make this decision? │
└─────────┬───────────────┘
│
┌─────────────┴─────────────┐
│ │
YES NO
│ │
▼ ▼
┌─────────────┐ ┌──────────────┐
│ Do I have │ │ ESCALATE │
│ information │ │ (Decision │
│ to decide? │ │ Authority) │
└──────┬──────┘ └──────────────┘
│
┌─────┴─────┐
YES NO
│ │
▼ ▼
┌────────┐ ┌──────────┐
│ Do I │ │ ESCALATE │
│ have │ │(Need Info)│
│resources│ └──────────┘
│ to │
│execute?│
└───┬────┘
│
┌───┴───┐
YES NO
│ │
▼ ▼
HANDLE ESCALATE
MYSELF (Resources)
\`\`\`

-----

### STEP 3: Escalation Scenarios & Responses

#### Scenario 1: Cross-Team Conflict

**ESCALATE when:**

- Teams fundamentally disagree on direction
- Both teams have valid but incompatible positions
- Conflict affects roadmap or commitments
- You’ve tried to mediate unsuccessfully

**DON’T escalate when:**

- Minor disagreement on implementation
- Can be resolved with more conversation
- Just need clearer requirements

**How to escalate:**

\`\`\`markdown
Subject: [ESCALATION NEEDED] Cross-Team Alignment Issue - [Topic]

Hi [Manager],

I need your help resolving a cross-team disagreement that's blocking progress.

**SITUATION:**
[Product Team] and [Engineering Team] disagree on [specific issue].

**POSITIONS:**
- Product perspective: [Position and rationale]
- Engineering perspective: [Position and rationale]

**WHAT I'VE TRIED:**
- [Action 1]: [Outcome]
- [Action 2]: [Outcome]
- [Action 3]: [Outcome]

**IMPACT OF NOT RESOLVING:**
- Timeline: [Impact]
- Scope: [Impact]
- Team morale: [Impact]

**MY RECOMMENDATION:**
[What you think should happen and why]

**WHAT I NEED:**
- Decision between [Option A] and [Option B]
- OR facilitation of conversation with [stakeholders]
- By when: [Date] (because [reason])

Happy to provide more context.
\`\`\`

-----

#### Scenario 2: Technical Feasibility Questions

**ESCALATE when:**

- Engineering says something is impossible but business critically needs it
- Massive technical effort required (6+ months)
- Architectural decisions with long-term implications
- Involves platform or infrastructure teams

**DON’T escalate when:**

- Normal engineering complexity
- Just need more conversation with tech lead
- Can be scoped down or phased

**How to escalate:**

\`\`\`markdown
Subject: [INPUT NEEDED] Technical Feasibility Assessment - [Feature]

Hi [Engineering Manager / CTO],

I need technical guidance on a business-critical feature that's raising feasibility concerns.

**BUSINESS NEED:**
[Customer problem, revenue impact, strategic importance]

**PROPOSED SOLUTION:**
[What we want to build]

**TECHNICAL CONCERN:**
Engineering team indicates this would require:
- [Technical constraint 1]
- [Technical constraint 2]
- Estimated effort: [X months]

**QUESTION:**
- Is this technically feasible within [timeframe]?
- If not as specified, what alternative approaches exist?
- What would need to change to make this possible?

**TRADE-OFF SPACE:**
We're open to:
- Phased approach
- Reduced scope
- Alternative technical approach
- Extended timeline (if justified)

**NEXT STEP:**
Could we schedule 30 minutes to discuss options?
Target decision: [Date]
\`\`\`

-----

#### Scenario 3: Resource/Budget Needs

**ESCALATE when:**

- Need additional headcount
- Need budget for vendors/tools
- Current resources insufficient for commitments
- Competing priorities need arbitration

**DON’T escalate when:**

- Can reprioritize existing work
- Can use existing resources differently
- Haven’t fully utilized current resources

**How to escalate:**

\`\`\`markdown
Subject: [RESOURCE REQUEST] Additional [Headcount/Budget] for [Initiative]

Hi [Manager],

I need [resource] to deliver [commitment].

**CURRENT SITUATION:**
- Commitment: [What we committed to]
- Current resources: [What we have]
- Gap: [What we're short]

**IMPACT OF GAP:**
Without additional resources:
- [Commitment] delays by [timeframe]
- [Stakeholder] expectations not met
- [Business impact]

**REQUEST:**
[Specific resource needed]:
- [Headcount]: [Role, when needed, duration]
- [Budget]: [Amount, what for, ROI]

**ALTERNATIVES CONSIDERED:**
- Reduce scope: [Would require cutting [features]]
- Extend timeline: [Would mean [date] instead of [date]]
- Deprioritize other work: [Would affect [initiative]]

**BUSINESS CASE:**
- Customer impact: [Quantify]
- Revenue impact: [Quantify]
- Strategic importance: [Explain]

**DECISION NEEDED:**
- Approve resource request
- OR accept [alternative]
By: [Date]
\`\`\`

-----

#### Scenario 4: Scope/Priority Changes

**ESCALATE when:**

- Executive requests conflict with roadmap
- Customer commitment conflicts with strategy
- Major scope change mid-development
- Conflicting priorities from multiple executives

**DON’T escalate when:**

- Minor scope adjustments
- Can absorb within current plan
- Trade-offs are clear and within your authority

**How to escalate:**

\`\`\`markdown
Subject: [DECISION NEEDED] Priority Conflict - [Initiative A] vs [Initiative B]

Hi [Manager],

I need help prioritizing conflicting requests from [Stakeholder A] and [Stakeholder B].

**REQUEST A (from [Stakeholder A]):**
- What: [Description]
- Why: [Business justification]
- When: [Deadline]
- Effort: [Estimate]

**REQUEST B (from [Stakeholder B]):**
- What: [Description]
- Why: [Business justification]
- When: [Deadline]
- Effort: [Estimate]

**THE CONFLICT:**
Both require [same resource / same timeframe / mutually exclusive approaches]

**IMPACT OF CHOOSING A:**
- Delivers: [Benefit]
- Delays: [What B stakeholder loses]
- Risk: [Potential downside]

**IMPACT OF CHOOSING B:**
- Delivers: [Benefit]
- Delays: [What A stakeholder loses]
- Risk: [Potential downside]

**MY RECOMMENDATION:**
[Your suggested priority and reasoning]

**WHAT I NEED:**
- Priority decision between A and B
- OR revised timeline/scope for one
- OR additional resources to do both

I can communicate the decision to both stakeholders once made.
\`\`\`

-----

### STEP 4: How to Communicate Escalations

**Framework: Situation-Impact-Options-Recommendation (SIOR)**

\`\`\`markdown
## Escalation: [Clear, specific title]

**SITUATION** (What's happening)
[2-3 sentences, facts only]

**IMPACT** (Why it matters)
- Customer impact: [Specific]
- Business impact: [Specific]
- Timeline impact: [Specific]

**OPTIONS** (Paths forward)
1. [Option A]: [Pros/Cons]
2. [Option B]: [Pros/Cons]
3. [Option C]: [Pros/Cons]

**RECOMMENDATION** (What you think should happen)
[Your suggested path and reasoning]

**REQUEST** (What you need)
☐ [Specific decision or resource]
☐ By when: [Date and why]
\`\`\`

-----

### STEP 5: After Escalating

**Once escalated:**

\`\`\`
☐ Follow up if no response within 24-48 hours
☐ Document the decision made
☐ Communicate outcome to affected parties
☐ Execute on the decision (don't relitigate)
☐ Thank the person who helped resolve
\`\`\`

-----

## References

- Saying No: \`../2.2.6-Saying-No/README.md\`
- Stakeholder Management: \`../2.2.7-Stakeholder-Management/README.md\`
- Crisis Management: \`../2.2.4-Crisis-Management/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`

---

## Stakeholder Management


Andreas Kelm Rudfeld <kelmhansen@gmail.com>
tors. 1. jan., 19.37 (for 17 timer siden)
til mig

# Stakeholder Management Framework

## Overview

This framework helps product managers identify, prioritize, and effectively manage stakeholders in large organizations. Stakeholder management is NOT about politics—it’s about ensuring the right people have the right information at the right time to make good decisions.

## Core Philosophy

### Stakeholders are NOT Obstacles

Effective stakeholder management should:

- **Build relationships over transactions** - Invest early, not just when you need something
- **Create alignment over control** - Influence through shared understanding, not mandates
- **Enable transparency over surprises** - Regular communication prevents crisis escalations
- **Foster partnership over hierarchy** - Everyone has something valuable to contribute

### Understanding Stakeholder Types

**PRIMARY STAKEHOLDERS (Must Have Buy-In)**

- Executive sponsors and decision-makers
- Engineering, Design, Data leads
- Key customers or customer-facing teams

**SECONDARY STAKEHOLDERS (Need to Stay Informed)**

- Adjacent product teams
- Marketing, Sales, Support
- Legal, Security, Compliance

**PERIPHERAL STAKEHOLDERS (Minimal Engagement)**

- Tangentially related teams
- Optional reviewers
- Informational distribution lists

-----

## Stakeholder Mapping Guide

### Step-by-Step: Creating Your Stakeholder Map

**When to do this:**

- When joining a new team or organization
- When starting a new initiative
- Quarterly refresh of existing map

**Time required:** 2-3 hours for initial map, 30 min for updates

-----

### STEP 1: Identify All Stakeholders (30 minutes)

**Brainstorm everyone who:**

- Makes decisions affecting your product
- Provides resources (budget, people)
- Uses or sells your product
- Has influence over your success
- Needs to know what you’re building

**Categories to consider:**

\`\`\`
EXECUTIVE LAYER:
- Your manager
- Your skip-level (manager's manager)
- VP/C-level sponsors
- Board members (for major initiatives)

PRODUCT & TECH:
- Engineering leads
- Engineering managers
- Tech leads/Architects
- Design leads
- Data/Analytics leads
- Adjacent product managers
- Platform/Infrastructure teams

GO-TO-MARKET:
- Sales leadership
- Sales enablement
- Marketing teams
- Customer success
- Support teams
- Customer education

OPERATIONS:
- Finance/Business operations
- IT/Systems
- People/HR
- Legal
- Security
- Compliance/Risk

EXTERNAL:
- Key customers
- Partners/Integrations
- Vendors
- Industry analysts (for enterprise products)
\`\`\`

**Action:** List every name in a spreadsheet or document. Don’t filter yet.

-----

### STEP 2: Assess Power & Interest (45 minutes)

For each stakeholder, rate on two dimensions:

**POWER (Decision-Making Authority):**

- **High:** Can approve, veto, or provide resources
- **Medium:** Strong influence but not final say
- **Low:** Limited formal authority

**INTEREST (Engagement Level):**

- **High:** Actively engaged, cares deeply about outcomes
- **Medium:** Pays attention but not day-to-day
- **Low:** Needs awareness but not deeply involved

**Create Power/Interest Grid:**

\`\`\`
High Interest
│
┌─────────┼─────────┐
│ │ │
│ MANAGE │ KEY │ High
│ CLOSELY │ PLAYERS │ Power
│ │ │
────┼─────────┼─────────┼────
│ │ │
│ MONITOR │ KEEP │ Low
│ │INFORMED │ Power
│ │ │
└─────────┴─────────┘
Low Interest
\`\`\`

**Quadrant Definitions:**

**KEY PLAYERS (High Power, High Interest)**

- Your core stakeholder group
- Require active management and engagement
- Regular 1-on-1s and updates
- Early involvement in decisions

**MANAGE CLOSELY (Low Power, High Interest)**

- Champions and allies
- Keep engaged and informed
- Leverage their enthusiasm
- Good for feedback and testing

**KEEP INFORMED (High Power, Low Interest)**

- Need awareness but not involvement
- Regular updates but don’t overwhelm
- Engage when decisions need their authority
- Respect their time

**MONITOR (Low Power, Low Interest)**

- Minimal communication
- Include in broad updates
- Don’t consume much energy here

-----

### STEP 3: Document Stakeholder Details (45 minutes)

**For each KEY PLAYER and important stakeholders, document:**

|Attribute |What to Capture |Why It Matters |
|----------------------------|---------------------------------|---------------------|
|**Name & Role** |Full name, title, team |Basic identification |
|**Power Level** |High/Med/Low + source of power |Prioritization |
|**Interest Level** |High/Med/Low in your work |Engagement strategy |
|**Communication Preference**|Email, Slack, meetings, frequency|Effective outreach |
|**Key Concerns** |What they care about most |Frame your updates |
|**Decision Authority** |What they can approve/veto |Escalation path |
|**Relationship Status** |Strong/Neutral/Weak |Investment needed |
|**Influence Network** |Who they influence/listen to |Indirect paths |
|**Best Contact Time** |When/how to reach them |Respectful engagement|

**Template:**

\`\`\`markdown
## Stakeholder: [Name]

**Role:** [Title, Team]
**Quadrant:** [Key Player / Manage Closely / Keep Informed / Monitor]

### Profile
- **Power:** [High/Med/Low] - [Source: budget authority / technical expertise / executive role]
- **Interest:** [High/Med/Low] - [Why: owns adjacent product / strategic priority / operational dependency]
- **Decision Authority:** [What they can approve/veto]
- **Relationship Status:** [Strong/Neutral/Weak]

### Engagement Strategy
- **Communication Preference:** [Slack DM / Email / 1-on-1 meetings / Standing meeting]
- **Frequency:** [Daily / Weekly / Bi-weekly / Monthly / As-needed]
- **Best Contact Time:** [Morning / Afternoon / Avoid Mondays / etc.]

### Context
- **Key Concerns:** [What keeps them up at night]
- **Success Criteria:** [How they measure success]
- **Potential Blockers:** [What might cause them to push back]
- **Influence Network:** [Who they listen to, who listens to them]

### Interaction Log
- [Date]: [Brief note on interaction and outcome]
- [Date]: [Brief note on interaction and outcome]
\`\`\`

-----

### STEP 4: Create Engagement Plan (30 minutes)

**For KEY PLAYERS, define:**

**Regular Touchpoints:**

- Standing 1-on-1s (frequency)
- Recurring updates (email, Slack, dashboard)
- Milestone reviews

**Critical Moments:**

- When to involve them (decision points)
- How to escalate to them
- What needs their pre-approval

**Relationship Building:**

- Coffee chats or informal meetings
- Shared interests or connection points
- Ways to provide value to them

**Example Engagement Plan:**

\`\`\`markdown
## KEY PLAYER: Sarah Chen (VP Engineering)

**Regular Cadence:**
- Bi-weekly 30-min 1-on-1 (Tuesdays 2pm)
- Weekly Slack update on sprint progress
- Monthly roadmap review

**Involve When:**
- Any architectural decisions
- Headcount requests
- Cross-team dependencies
- Technical trade-offs requiring leadership input

**Relationship Building:**
- She mentors junior engineers → ask for her input on eng career paths
- Interested in AI/ML → share interesting papers
- Values data-driven decisions → always bring metrics

**Current Status:**
- Strong relationship (worked together 18 months)
- Trust built through consistent delivery
- Open to challenging conversations
\`\`\`

-----

### STEP 5: Set Up Tracking System (30 minutes)

**Choose your tool:**

- **Spreadsheet:** Simple, flexible (Google Sheets, Excel)
- **Notion/Confluence:** Rich documentation
- **CRM-style:** Dedicated stakeholder management tool

**Minimum tracking:**

- Stakeholder list with power/interest scores
- Last interaction date
- Next scheduled interaction
- Outstanding asks or commitments
- Relationship health indicator

**Sample Spreadsheet Structure:**

|Name |Role |Quadrant |Power|Interest|Last Contact|Next Contact|Status |Notes |
|----------|----------|-------------|-----|--------|------------|------------|---------|----------------|
|Sarah Chen|VP Eng |Key Player |High |High |2024-12-15 |2024-12-17 |🟢 Strong |Bi-weekly 1-on-1|
|Marcus Liu|Sales Lead|Keep Informed|High |Low |2024-12-10 |2025-01-05 |🟡 Neutral|Monthly update |

-----

### STEP 6: Maintain and Update (Ongoing)

**Weekly:**

- [ ] Log significant interactions
- [ ] Note any shifts in power/interest
- [ ] Check if follow-ups are needed

**Monthly:**

- [ ] Review relationship health
- [ ] Identify stakeholders you haven’t engaged recently
- [ ] Update contact preferences or concerns

**Quarterly:**

- [ ] Full stakeholder map refresh
- [ ] Add new stakeholders (org changes)
- [ ] Remove departed stakeholders
- [ ] Reassess power/interest scores

**Triggers for immediate update:**

- Organizational changes (new leaders, departures)
- Major initiative launches
- Shift in product strategy
- New funding or budget cycles

-----

## Managing Up Guide

### Step-by-Step: Effective Executive Engagement

**When to use:**

- Regular manager updates
- Executive decision-making
- Handling “can you just…” requests
- Career growth conversations

-----

### Building the Foundation

**Before asking for anything, establish:**

✅ **Credibility:**

- Deliver on commitments consistently
- Communicate proactively (no surprises)
- Bring solutions, not just problems
- Show understanding of business context

✅ **Understanding:**

- What does your manager care about most?
- What are their goals and OKRs?
- What makes them look good to their boss?
- What keeps them up at night?

✅ **Rhythm:**

- Regular 1-on-1s (don’t skip these)
- Consistent update format
- Predictable communication pattern

-----

### STEP 1: Prepare for Manager 1-on-1s

**Your Agenda (You Own This):**

\`\`\`markdown
## 1-on-1 Agenda: [Date]

### FOR DECISION (5-10 min)
☐ [Decision needed]: [Context + recommendation + ask]
☐ [Decision needed]: [Context + recommendation + ask]

### FOR AWARENESS (5-10 min)
- **Wins:** [What went well this week]
- **Concerns:** [What's at risk or blocked]
- **Asks:** [Specific help needed]

### FOR FEEDBACK (10-15 min)
- [Topic where I want coaching/input]
- [Career development discussion]

### PARKING LOT
- [Topics if time permits]
\`\`\`

**Preparation Checklist:**

- [ ] Agenda sent 24 hours before meeting
- [ ] Decisions framed with recommendation (not open-ended)
- [ ] Context docs linked (don’t make them dig)
- [ ] Anticipated questions thought through
- [ ] Clear asks identified

-----

### STEP 2: Structure Executive Briefings

**The BLUF Format (Bottom Line Up Front):**

\`\`\`markdown
## Executive Brief: [Topic]

**TL;DR:** [One sentence with recommendation]

**Decision Needed:** [Specific ask with deadline]

---

**SITUATION** (2-3 sentences)
[What's happening, why it matters now]

**RECOMMENDATION** (1 sentence)
[What you propose]

**RATIONALE** (3-5 bullets)
- [Why this is the right choice]
- [Key data point supporting it]
- [Risk if we don't act]

**ALTERNATIVES CONSIDERED** (2-3 bullets)
- [Option B: Why not]
- [Option C: Why not]

**IMPACT**
- Customer: [How this affects users]
- Business: [Metric/revenue impact]
- Team: [Resource/timeline implications]

**NEXT STEPS** (if approved)
1. [Immediate action]
2. [Follow-on action]
3. [Timeline checkpoint]

**ASKS**
☐ [Specific approval or resource]
☐ [Decision by: DATE]
\`\`\`

**Example:**

\`\`\`markdown
## Executive Brief: Delay Q1 Launch for Security Review

**TL;DR:** Recommend pushing Q1 feature launch by 2 weeks for comprehensive security audit due to enterprise customer requirements.

**Decision Needed:** Approval to move launch from Jan 15 to Jan 29 (decide by Dec 18)

---

**SITUATION**
Our top 3 enterprise prospects (combined $2M ARR) require SOC 2 compliance before purchase. Security team identified need for additional penetration testing for new authentication feature before we can certify compliance.

**RECOMMENDATION**
Delay launch by 2 weeks to complete security audit and obtain SOC 2 certification.

**RATIONALE**
- Launching without cert blocks $2M in near-term revenue
- Re-work after launch costs 3x more than doing it right
- Enterprise sales team can't progress deals without cert
- 2-week delay is minimal compared to opportunity cost

**ALTERNATIVES CONSIDERED**
- Launch now, cert later: Blocks enterprise sales for 6+ months
- Split launch: Increases complexity and technical debt
- Rush audit: Security team can't compress timeline safely

**IMPACT**
- Customer: No impact (existing users unaffected, new enterprises prefer secure launch)
- Business: Short-term timeline slip, but unlocks $2M+ pipeline
- Team: 2-week buffer helps quality and reduces crunch

**NEXT STEPS** (if approved)
1. Inform engineering/design/marketing of new timeline (this week)
2. Schedule penetration testing (week of Dec 23)
3. Updated launch plan published (by Dec 20)

**ASKS**
☐ Approval for 2-week delay
☐ Decision by: Dec 18 (security team needs notice)
\`\`\`

-----

### STEP 3: Respond to “Can You Just…” Requests

**When executive asks for unplanned work:**

**IMMEDIATE RESPONSE (In the Moment):**

“Let me understand the context:

- What’s driving this request?
- What’s the timeline?
- How does this compare to [current priorities]?

I want to make sure we’re making the right trade-offs.”

**FOLLOW-UP RESPONSE (Within 24 Hours):**

\`\`\`markdown
## Response: [Request]

**Summary of Ask:**
[Restate request in your words]

**My Recommendation:**
[Yes with plan / No with alternative / Yes but with trade-offs]

**Impact Analysis:**

IF WE SAY YES:
- **Delivery:** [What we can deliver by when]
- **Trade-off:** [What gets delayed/descoped]
- **Risk:** [What might go wrong]

IF WE SAY NO:
- **Alternative:** [Different approach to address need]
- **Timeline:** [When we could do this instead]
- **Rationale:** [Why not now]

**Decision Needed:**
☐ Proceed with [recommendation]
☐ Discuss trade-offs
☐ Explore alternative

By when: [Date]
\`\`\`

**Response Templates:**

**YES WITH PLAN:**

> “We can do this. Here’s how: [approach]. Trade-off: [what delays]. I’ll update the roadmap and communicate to the team. Any concerns with this approach?”

**NO WITH ALTERNATIVE:**

> “Given [current priority], I recommend [alternative] instead because [rationale]. This addresses [core need] without derailing [committed work]. Does this work?”

**YES BUT WITH TRADE-OFFS:**

> “Yes, AND here’s what it means: [scope] delays by [timeframe], which affects [stakeholder/commitment]. Want me to communicate this trade-off or would you prefer to?”

-----

### STEP 4: Navigate Disagreements

**When you disagree with leadership direction:**

**Framework: Disagree and Commit**

**STEP 1: Make Your Case (Once, Clearly)**

\`\`\`markdown
"I want to share a different perspective before we finalize this decision:

**My Concern:** [Specific issue]

**Why It Matters:** [Impact/risk]

**Alternative Proposal:** [What you recommend instead]

**Data/Evidence:** [Supporting information]

I understand you may have context I don't. If you still want to proceed differently, I'll commit fully and make it work."
\`\`\`

**STEP 2: Listen to Response**

Actually listen. They may have:

- Different information
- Higher-level strategic context
- Constraints you don’t see

**STEP 3: Choose Your Path**

**If they’re convinced:** Great, advocate for your approach

**If they’re not:**

- “I understand. I’ll execute [their decision] and make it successful.”
- **Then actually commit.** Don’t sabotage or slow-walk.

**If it’s a serious integrity/ethics issue:**

- Escalate appropriately (skip level, HR)
- Document your concerns
- This is rare—don’t overuse

-----

### STEP 5: Provide Strategic Context

**Help your manager understand the ground truth:**

**Weekly Summary Email Template:**

\`\`\`markdown
Subject: Weekly Update - [Your Product] - [Date]

**TL;DR:**
🟢 [Key win or milestone]
🟡 [Watch item or risk]
🔴 [Blocker or concern]

---

**SHIPPED THIS WEEK**
- [Feature/improvement with impact]
- [Bug fixes or tech debt]

**IN PROGRESS**
- [Major initiative]: [% complete, on track / at risk]
- [Major initiative]: [% complete, on track / at risk]

**NEXT WEEK**
- [Planned work]
- [Decisions needed]

**METRICS**
- [Key metric]: [value] ([trend])
- [Key metric]: [value] ([trend])

**HELP NEEDED**
☐ [Specific ask with context]
☐ [Specific ask with context]

**FYI / CONTEXT**
- [Interesting customer feedback]
- [Market/competitive development]
- [Team dynamics or morale note]
\`\`\`

-----

### Common Managing Up Scenarios

**Scenario 1: Manager Changed Direction Suddenly**

**❌ Don’t:**

- Complain about wasted effort
- Resist or slow-walk
- Go silent or passive-aggressive

**✅ Do:**

\`\`\`
"I want to make sure I understand the new direction:
- [Restate new direction]
- [Key change from before]
- [What stays the same]

Questions:
- What drove this change?
- Timeline expectations?
- How should I communicate this to the team?

I'll draft an updated plan by [date] for your review."
\`\`\`

-----

**Scenario 2: Manager is Too Busy / Not Responsive**

**❌ Don’t:**

- Wait indefinitely for responses
- Make major decisions without approval
- Complain to peers

**✅ Do:**

**Email Template:**

\`\`\`
Subject: [DECISION NEEDED by DATE] - [Topic]

Hi [Manager],

I know you're slammed. I need a decision by [DATE] on [TOPIC].

**Quick Context:** [2 sentences]

**My Recommendation:** [One sentence]

**If I Don't Hear Back:** I'll proceed with [recommendation] by [date]. Hit reply if you want to discuss or change course.

Thanks,
[You]
\`\`\`

-----

**Scenario 3: Need to Deliver Bad News**

**❌ Don’t:**

- Hide or delay bad news
- Blame others
- Come without a plan

**✅ Do:**

**Template:**

\`\`\`
"I need to share some bad news: [What happened]

**Impact:**
- [Customer impact]
- [Timeline impact]
- [Resource impact]

**Root Cause:** [Honest assessment]

**Already Done:**
- [Immediate action taken]

**Plan Forward:**
- [Short-term mitigation]
- [Long-term fix]
- [Prevention for future]

**What I Need from You:**
- [Decision or resource]
- [Communication guidance]

I take responsibility for [your part]. How do you want to handle this?"
\`\`\`

-----

## Cross-Functional Alignment Guide

### Step-by-Step: Getting Teams Aligned

**When to use:**

- Starting new initiatives
- Handling dependencies
- Resolving cross-team conflicts
- Making major decisions

-----

### STEP 1: Map the Alignment Needs

**Before scheduling any meeting, answer:**

**Who needs to align?**

- [ ] Engineering
- [ ] Design
- [ ] Data/Analytics
- [ ] Marketing
- [ ] Sales
- [ ] Customer Success/Support
- [ ] Legal/Compliance
- [ ] Security
- [ ] Finance/Operations

**What do they need to align on?**

- [ ] Strategic direction (Why we’re doing this)
- [ ] Scope and requirements (What we’re building)
- [ ] Timeline and dependencies (When and in what order)
- [ ] Success criteria (How we’ll measure)
- [ ] Roles and responsibilities (Who does what)
- [ ] Communication plan (How we’ll stay synced)

**What’s the decision-making process?**

- **Consensus:** Everyone must agree
- **Consent:** No one blocks (good enough for now)
- **Consultative:** Input gathered, PM decides
- **Informed:** PM decides, others informed

-----

### STEP 2: Pre-Align Before the Meeting

**DON’T schedule a big alignment meeting first**

**DO this instead:**

**1. Individual Pre-Meetings (15-30 min each)**

Talk to each key player 1-on-1:

\`\`\`
"I'm pulling together [initiative]. Want to get your input before we align the full group.

**Context:** [2-3 sentences on what and why]

**My initial thinking:** [Current proposal]

**Questions for you:**
- Does this make sense from [their function]'s perspective?
- What concerns or constraints should I know about?
- What would you need from other teams?
- Who else should be involved?

I'll incorporate your feedback before the group session."
\`\`\`

**Benefits:**

- Surface concerns privately (people more honest 1-on-1)
- Build buy-in incrementally
- Identify landmines before group meeting
- Show respect for their expertise

**2. Iterate Your Proposal**

After 1-on-1s, update your proposal to reflect:

- Valid concerns raised
- Constraints discovered
- Additional stakeholders identified

**3. Pre-Share Materials**

Send at least 24 hours before group meeting:

- Updated proposal
- Decision needed
- Each person’s role/input needed

-----

### STEP 3: Run the Alignment Meeting

**Structure (60-90 minutes):**

\`\`\`
## Alignment Meeting: [Initiative]

**GOAL:** [What we need to decide/align on]
**DECISION-MAKER:** [Who has final say]

---

**SECTION 1: CONTEXT (10 min)**
- Why we're here
- What we need to align on
- How we'll make decisions

**SECTION 2: PROPOSAL REVIEW (15 min)**
- Walk through pre-shared proposal
- Highlight changes from 1-on-1s
- Open for clarifying questions (not debate yet)

**SECTION 3: CONCERNS & TRADE-OFFS (25 min)**
- Each function shares concerns
- Identify conflicts or dependencies
- Surface trade-offs

**SECTION 4: SOLUTION FINDING (20 min)**
- Brainstorm solutions to concerns
- Evaluate trade-offs
- Find acceptable path forward

**SECTION 5: DECISIONS & NEXT STEPS (10 min)**
- Document decisions made
- Assign action items with owners
- Set next checkpoint

**PARKING LOT:**
- [Issues to handle separately]
\`\`\`

**Facilitation Tips:**

✅ **Keep on track:**

- “That’s important, but let’s parking lot for now”
- “We have 10 minutes left—let’s land on a decision”

✅ **Draw out quiet people:**

- “Design team, we haven’t heard from you yet”
- “Data, what’s your take on this?”

✅ **Manage strong personalities:**

- “Thanks [Name], let’s hear from others too”
- “Let’s timebox this discussion to 5 minutes”

✅ **Synthesize as you go:**

- “So far I’m hearing…”
- “It sounds like the core issue is…”

✅ **End with clarity:**

- “Let me summarize what we decided…”
- “Are there any blockers to moving forward?”

-----

### STEP 4: Document and Communicate

**Within 24 hours, send:**

\`\`\`markdown
## Alignment Meeting Notes: [Initiative]

**DATE:** [Date]
**ATTENDEES:** [Names]

---

**DECISIONS MADE:**
1. [Decision]: [Rationale]
2. [Decision]: [Rationale]

**ACTION ITEMS:**
- [ ] [Action] - Owner: [Name] - Due: [Date]
- [ ] [Action] - Owner: [Name] - Due: [Date]

**OPEN QUESTIONS:**
- [Question]: [Who's researching, by when]

**NEXT STEPS:**
- Next checkpoint: [Date]
- Next full alignment: [Date]

**PARKING LOT (For Future Discussion):**
- [Topic]
- [Topic]

---

**FULL NOTES:**
[Detailed discussion points if relevant]
\`\`\`

-----

### STEP 5: Maintain Alignment

**Weekly:**

- [ ] Send status update to aligned stakeholders
- [ ] Flag any changes that affect shared plans
- [ ] Give heads-up on upcoming decisions

**Bi-weekly:**

- [ ] Quick sync meeting (30 min) to catch issues early
- [ ] Update shared project tracker

**Monthly:**

- [ ] Deeper review of progress and risks
- [ ] Adjust plans based on learnings

**Triggers for re-alignment:**

- Scope changes
- Timeline shifts
- Resource changes
- New information that changes plans

-----

## 🎯 Common Cross-Functional Scenarios

### Scenario: Engineering Says “That’s Technically Impossible”

**❌ Don’t:**

- Accept at face value without understanding
- Fight or pressure them
- Go around them to their manager

**✅ Do:**

**Step 1: Understand the Constraint**

\`\`\`
"Help me understand the technical constraint:
- What makes this impossible?
- Is it impossible or just very hard/expensive?
- What would need to be true to make it possible?
- Are there alternative approaches?"
\`\`\`

**Step 2: Explore Options**

\`\`\`
"If we couldn't do [exact solution], could we:
- Do a simplified version that's technically feasible?
- Do it in phases (what's possible now, what needs more work)?
- Use a different technical approach?
- Partner with another team who has the capability?"
\`\`\`

**Step 3: Make Trade-Off Explicit**

\`\`\`
"I hear that [technical constraint].

Given that, we have options:
A) Descope to [simpler version]
B) Extend timeline for [complex version]
C) Pursue [alternative approach]

The business need is [problem]. Which option best addresses that need given the technical reality?"
\`\`\`

-----

### Scenario: Design Wants More Time, Deadline is Fixed

**❌ Don’t:**

- Force them to rush
- Compromise on quality without discussion
- Let scope creep

**✅ Do:**

\`\`\`
"I hear you need more time for [design aspect]. Our deadline is fixed because [reason].

Let's figure out the right trade-off:

**Option 1: Reduce Scope**
- What's the MVP design we could ship?
- What could we iterate on post-launch?

**Option 2: Extend Specific Parts**
- Which design elements are must-have vs. nice-to-have?
- Could we launch with [simpler design] and enhance later?

**Option 3: Add Resources**
- Could another designer help?
- Could we buy more time by descoping engineering?

What would you recommend given the constraints?"
\`\`\`

-----

### Scenario: Marketing and Product Disagree on Positioning

**❌ Don’t:**

- “Product knows best” attitude
- Ignore market realities
- Escalate immediately

**✅ Do:**

**Step 1: Align on Goal**

\`\`\`
"We both want [same outcome]. Let's start there.

Product perspective: [Your view]
Marketing perspective: [Their view]

Where's the disconnect?"
\`\`\`

**Step 2: Validate with Data**

\`\`\`
"What if we test both approaches?
- Run messaging test with customers
- A/B test positioning on website
- Try both in sales calls

Agree to go with what performs better?"
\`\`\`

**Step 3: Find Middle Ground**

\`\`\`
"Could we:
- Use your positioning for [audience A]
- Use our positioning for [audience B]
- Combine elements from both?
- Try one approach for 30 days then reassess?"
\`\`\`

-----

## References

- Escalation: \`../2.2.5-Escalation/README.md\`
- Saying No: \`../2.2.6-Saying-No/README.md\`
- Meeting Agendas: \`../2.2.2-Meeting-Agendas/README.md\`
- One-Pagers: \`../2.2.3-One-Pagers/README.md\`
- Newsletter: \`../2.2.1-Newsletter/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`



---

## Research Interviews Guide

# Interview Guide

## Overview

This guide provides principles and best practices for conducting effective customer discovery interviews, heavily inspired by Teresa Torres' Continuous Discovery Habits methodology. Use this as a reference before, during, and after interviews to ensure high-quality research outcomes.

> **Before using this guide:** Braindump first! What do you think you know about customers? What are your assumptions? What does your product sense tell you? Then use this guide to structure your interview approach.

## How This Fits in the System

- **01-Company-Context/** – Strategic foundation and company context.  
- **02-Methods-and-Tools/** – Frameworks and methods (this interview guide lives under \`2.3-Discovery/2.3.1-Research-Interviews/\`).  
- **03-Research-Artifacts/** – Archive for interview notes, synthesis docs, and research findings.  
- **04-Initiatives/** – Active initiatives and opportunity assessments that link to your research.

## Before Conducting Interviews: Braindump & Product Sense

**Before preparing your interview questions, take 10-15 minutes to braindump:**

- What do you think you know about customers? Dump all assumptions.
- What does your product sense tell you? What feels off or interesting?
- What biases might affect your interviews? (Confirmation bias? Solution bias?)
- What would great product sense notice? What would an experienced PM see?
- What questions does your gut tell you to ask?

**Product sense exercise:**
- If you had to interview ONE customer and learn everything important, what would you ask?
- What would make you say "this interview is obviously going wrong"?
- What would make you say "this interview is obviously going well"?

**Then use this guide** to structure your approach and avoid common pitfalls.

## Core Principles

### 1. Focus on Past Behavior, Not Hypotheticals
- Ask about specific past experiences, not future intentions
- "Tell me about the last time you..." instead of "Would you use..."
- People are poor predictors of future behavior but accurate reporters of past actions

### 2. Seek Stories, Not Opinions
- Look for concrete examples and narratives
- Avoid leading questions that solicit opinions
- Stories reveal real needs, constraints, and motivations

### 3. Understand the Job to Be Done
- Focus on what customers are trying to accomplish
- Understand the context, constraints, and desired outcomes
- Avoid feature-focused questions

### 4. Interview Regularly, Not Just When Needed
- Build continuous discovery habits
- Interview weekly, not just during specific projects
- Maintain ongoing customer connection

## Common Biases to Avoid

### Interviewer Biases

**Confirmation Bias**
- **Problem**: Seeking information that confirms your existing beliefs
- **Solution**: Actively look for disconfirming evidence, ask open-ended questions

**Leading Questions**
- **Problem**: Unintentionally guiding interviewees toward desired answers
- **Solution**: Use neutral language, avoid suggesting answers

**Social Desirability Bias**
- **Problem**: Interviewees give answers they think you want to hear
- **Solution**: Ask about past behavior, not opinions; create safe space for honesty

**Anchoring Bias**
- **Problem**: First piece of information influences subsequent responses
- **Solution**: Vary question order, don't reveal your assumptions early

### Interviewee Biases

**Recency Bias**
- **Problem**: Overweighting recent experiences
- **Solution**: Ask about multiple past experiences, not just the most recent

**Availability Heuristic**
- **Problem**: Recalling only memorable or extreme examples
- **Solution**: Ask for specific, detailed examples; probe for typical experiences

**Hindsight Bias**
- **Problem**: Reinterpreting past events with current knowledge
- **Solution**: Focus on what they knew and felt at the time, not what they know now

## How to Ask Questions

### Question Types

**Opening Questions**
- Start broad: "Tell me about your role..." or "Walk me through a typical day..."
- Build rapport and context before diving deep
- Avoid jumping straight to your product area

**Follow-up Questions**
- "Can you tell me more about that?"
- "What happened next?"
- "How did that make you feel?"
- "What were you trying to accomplish?"

**Probing Questions**
- "Can you give me a specific example?"
- "When was the last time this happened?"
- "What was going on in your life at that time?"
- "Who else was involved?"

**Avoid These Question Types**
- ❌ Leading: "Don't you think X would be better?"
- ❌ Hypothetical: "Would you use X if we built it?"
- ❌ Feature-focused: "Do you want feature X?"
- ❌ Yes/No: "Do you have this problem?"

### Question Frameworks

**The Five Whys**
- Ask "why" five times to get to root causes
- Helps uncover underlying motivations and needs

**STAR Method (Situation, Task, Action, Result)**
- Situation: What was the context?
- Task: What were you trying to accomplish?
- Action: What did you do?
- Result: What happened?

**Jobs to Be Done Questions**
- What job were you trying to get done?
- What were the circumstances?
- What constraints were you facing?
- What would a better experience look like?

## Interview Structure

### Pre-Interview

1. **Prepare Your Questions**
   - Write open-ended questions focused on past behavior
   - Avoid leading or hypothetical questions
   - Prepare follow-up probes

2. **Set Context**
   - Explain the purpose: learning about their experiences
   - Clarify you're not selling anything
   - Get permission to record (if applicable)

3. **Review Your Assumptions**
   - List what you think you know
   - Be ready to be wrong
   - Stay curious, not defensive

### During Interview

1. **Build Rapport (5-10 minutes)**
   - Start with easy, open questions
   - Show genuine interest
   - Create comfortable environment

2. **Explore the Problem Space (20-30 minutes)**
   - Ask about past experiences
   - Seek specific examples
   - Understand context and constraints
   - Avoid jumping to solutions

3. **Understand Desired Outcomes (10-15 minutes)**
   - What would success look like?
   - What are they trying to accomplish?
   - What would make their life better?

4. **Wrap Up (5 minutes)**
   - Ask if there's anything else they want to share
   - Thank them for their time
   - Offer to share findings (if appropriate)

### Post-Interview

1. **Capture Insights Immediately**
   - Document within 24 hours while memory is fresh
   - Use your preferred interview notes template (for example in \`02-Methods-and-Tools/templates/research/\`) or the structure in \`03-Research-Artifacts/3.1-User-Interviews/\`
   - Note surprises, contradictions, and patterns

2. **Save Artifacts**
   - Save raw transcript PDFs to \`3.1-User-Interviews/transcripts/\`
   - Save AI-generated snapshot markdowns to \`3.1-User-Interviews/snapshots/\`
   - Add synthesis docs under \`3.1-User-Interviews/synthesis/\`

3. **Reflect on Your Biases**
   - What assumptions were confirmed?
   - What assumptions were challenged?
   - What surprised you?

## Best Practices

### Do's
- ✅ Listen more than you talk (aim for 80/20)
- ✅ Ask about specific past experiences
- ✅ Probe for details and context
- ✅ Take notes, but maintain eye contact
- ✅ Show empathy and understanding
- ✅ Follow interesting tangents
- ✅ Ask "what else?" multiple times

### Don'ts
- ❌ Don't pitch your product or solution
- ❌ Don't ask hypothetical questions
- ❌ Don't interrupt or finish their sentences
- ❌ Don't defend your ideas or assumptions
- ❌ Don't ask leading questions
- ❌ Don't rush to solutions
- ❌ Don't assume you understand—ask for clarification

## Common Mistakes

1. **Talking Too Much**: You should listen 80% of the time
2. **Asking About Solutions**: Focus on problems and jobs to be done
3. **Ignoring Contradictions**: When someone says one thing but does another, explore it
4. **Not Probing Deep Enough**: Surface-level answers don't reveal real needs
5. **Confirmation Seeking**: Only hearing what confirms your beliefs
6. **Rushing**: Good interviews take time; don't rush to cover everything

## Resources

- **Continuous Discovery Habits** by Teresa Torres  
- Discovery methods: \`02-Methods-and-Tools/2.3-Discovery/\`  
- Research artifacts structure: \`03-Research-Artifacts/\`


---

## Continuous Discovery: Interview Snapshot

# Creating Interview Snapshots (Continuous Discovery Habits)

## Goal
Create structured snapshots that capture **ALL** specific customer stories, behaviors, and needs from qualitative interviews or user research sessions, following the Continuous Discovery Habits methodology.

**If using with AI:** The AI's role is to help you think and structure your thoughts, not to think for you. Always braindump first (see section below).

> **Important:** Capture **ALL** stories and insights from the interview, not just 2-3. Every story matters. The "2-3" in quality checklists refers to a minimum, not a limit.

## Before You Start: Braindump & Product Sense

**STOP. Don't just copy-paste this into AI. Think first.**

Before creating the interview snapshot, take 5-10 minutes to braindump your thoughts:

**Braindumping prompts:**
- What do you remember from this interview? Dump everything - don't structure yet.
- What stories stood out? What felt important?
- What surprised you? What confirmed your assumptions?
- What does your product sense tell you? What feels significant?
- What biases might affect how you interpret this? (Confirmation bias? Recency bias?)

**Product sense exercise:**
- If you had to explain this interview in 2 minutes, what would you say?
- What would make you say "this interview revealed something important"?
- What would make you say "this interview didn't reveal much"?
- What does your gut tell you about the key insights?

**Then proceed** to create the structured snapshot using the framework below.

## Output
- **Format:** Markdown (\`.md\`)
- **Location:** \`03-Research-Artifacts/3.1-User-Interviews/snapshots/\`
- **Filename:** \`snapshot-[participant-identifier]-[YYYY-MM-DD].md\`

## Process

**IMPORTANT:** If you're using this with an AI assistant, your role is to help the user think, not to think for them.

**Step 0: Help User Braindump First**
- Ask the user to braindump their thoughts about the interview (see "Before You Start" section above)
- Quiz them: "What do you remember? What stood out? What surprised you?"
- Help them use their product sense: "What does your gut tell you? What feels important?"
- Only after they've thought through it, proceed to process the interview data

0. **Follow the rules:** Start by telling me your plan for approaching this task in a way that is optimized to uphold these guidelines above all, and eliminates any chance of violating them. Make sure it includes a final phase of verifying every single quote, and fixing any violations, repeating this until there are no violations. 

1. **Parse Interview Data:** Process transcript, notes, or session recordings
2. **Identify Session Type:** Categorize as discovery interview, usability test, feedback session, etc.
3. **Extract Customer Stories:** Focus on specific behavioral instances, not generalizations
4. **Map Customer Journey:** Document the participant's experience flow
5. **Identify Needs & Pain Points:** Extract underlying customer needs from stories
6. **Capture Behavioral Insights:** Note interesting patterns or unexpected behaviors
7. **Create Structured Snapshot:** Compile findings using standard template
8. **Tag for Retrieval:** Add relevant tags for future synthesis

## Story Extraction Principles
**DO capture:**
- **Specific instances:** "The last time I..." or "Yesterday when I..."
- **Actual behavior:** What they did step-by-step, in sequence
- **Contextual details:** Environment, timing, tools used, people involved
- **Emotional reactions:** Moments of frustration, delight, confusion, surprise
- **Current workarounds:** How they solve problems today with existing tools
- **Failed attempts:** What they've tried that didn't work and why

**AVOID capturing:**
- **Generalizations:** "I always..." "I never..." without specific examples
- **Hypothetical scenarios:** "I would probably..." or "If I could..."
- **Feature requests:** Unless you probe for the underlying need/problem
- **Opinions about competitors:** Focus on their actual experience, not comparisons
- **Wishful thinking:** What they think they want vs. what they actually do

## Interview Snapshot Template
\`\`\`markdown
# Interview Snapshot: [Participant Role/ID] - [Date]

## Participant Context
- **Role/Position:** [Their job function or user type]
- **Experience Level:** [Novice/Intermediate/Expert in relevant domain]
- **Usage Context:** [How/when they use the product/service]
- **Interview Type:** [Discovery/Usability/Feedback/etc.]

## Key Stories Captured

### Story 1: [Brief descriptive title]
**Situation:** [Context and trigger]
**Actions:** [Step-by-step what they did]
**Outcome:** [What happened as a result]
**Emotion:** [How they felt about the experience]

### Story 2: [Brief descriptive title]
**Situation:** [Context and trigger]
**Actions:** [Step-by-step what they did]
**Outcome:** [What happened as a result]
**Emotion:** [How they felt about the experience]

## Customer Journey Moments
- **Trigger:** What initiated their process
- **Key Steps:** Major phases of their workflow
- **Decision Points:** Where they had to make choices
- **Pain Points:** Friction or frustration moments
- **Success Moments:** When things worked well

## Needs Identified
- **Explicit Needs:** What they directly said they needed
- **Implicit Needs:** Underlying needs inferred from their stories
- **Unmet Needs:** Problems they're solving with workarounds

## Behavioral Insights
- **Surprising Behaviors:** Actions that differed from expectations
- **Workaround Patterns:** How they adapt when primary solution fails
- **Mental Models:** How they think about the problem space
- **Success Patterns:** What conditions lead to positive outcomes

## Quotes & Evidence
> "[Exact quote that illustrates key insight]"
> 
> "[Another relevant quote with context]"

## Opportunities Suggested
- [Potential opportunity based on unmet needs]
- [Another opportunity from behavioral patterns]

## Follow-up Questions
- [Questions to explore in future interviews]
- [Assumptions to test based on this conversation]

## Tags
#[customer-segment] #[use-case] #[product-area] #[priority-level]
\`\`\`

## Quality Checklist
Before saving, verify:
- [ ] **ALL** specific stories captured with full context (not just 2-3 - capture everything)
- [ ] Clear distinction between what they said vs. what they did
- [ ] Underlying needs identified, not just surface complaints
- [ ] Direct quotes captured to support insights
- [ ] Behavioral patterns noted, not just preferences
- [ ] Tagged appropriately for future synthesis
- [ ] No stories or insights left out - completeness is key
\`\`\`

---

## Continuous Discovery: Opportunities

# Creating Opportunities from Customer Insights (Continuous Discovery Habits)

## Goal
Transform customer insights from interview snapshots into clear, evidence-based opportunities that represent unmet customer needs and can guide product development decisions.

> **Important:** Include **ALL** supporting customer stories and evidence for each opportunity. Don't limit to 2-3 examples - more evidence makes opportunities stronger.

## Before You Start: Braindump & Product Sense

**STOP. Don't just copy-paste this into AI. Think first.**

Before creating opportunities, take 10-15 minutes to braindump your thoughts:

**Braindumping prompts:**
- What opportunities do you think exist? Dump everything - don't structure yet.
- What customer needs feel real? What feels like noise?
- What does your product sense tell you? What feels like a real opportunity?
- What biases might affect your view? (Solution bias? Feature bias? Confirmation bias?)
- What would make you say "this is obviously not an opportunity"?

**Product sense exercise:**
- If you had to pick ONE opportunity to pursue, what would it be? Why?
- What would make you say "this opportunity is obviously worth pursuing"?
- What would make you say "this opportunity is obviously not worth it"?
- What does your gut tell you about the most promising opportunities?

**Then proceed** to create opportunities using the framework below.

## Output
- **Format:** Markdown (\`.md\`)
- **Location:** \`03-Research-Artifacts/3.1-User-Interviews/opportunities/\`
- **Filename:** \`opportunity-[brief-description]-[YYYY-MM-DD].md\`

## Process

**IMPORTANT:** If you're using this with an AI assistant, your role is to help the user think, not to think for them.

**Step 0: Help User Braindump First**
- Ask the user to braindump their thoughts about opportunities (see "Before You Start" section above)
- Quiz them: "What opportunities do you think exist? What feels like a real opportunity?"
- Help them use their product sense: "What does your gut tell you? What feels worth pursuing?"
- Only after they've thought through it, proceed to create opportunities

1. **Review Interview Evidence:** Analyze multiple interview snapshots for patterns
2. **Identify Customer Need Patterns:** Look for recurring themes across different customers
3. **Frame as Opportunities:** Express patterns as "How might we..." statements
4. **Validate with Evidence:** Ensure each opportunity is backed by specific customer stories
5. **Assess Opportunity Size:** Estimate breadth and depth of customer impact
6. **Connect to Business Outcomes:** Link opportunities to measurable business results
7. **Document Opportunity:** Create structured opportunity document
8. **Share for Feedback:** Circulate with team for validation and prioritization

## Opportunity Identification Principles
**Strong opportunities have:**
- **Multiple customer evidence:** Supported by stories from 3+ different customers
- **Clear unmet need:** Specific problem customers are trying to solve
- **Current workarounds:** Customers are cobbling together solutions
- **Measurable impact:** Can connect to business metrics or customer success
- **Actionable scope:** Specific enough to generate targeted solutions

**Weak opportunities:**
- **Single source:** Only one customer mentioned this
- **Feature requests:** Customers asking for specific features vs. expressing needs
- **Edge cases:** Problems only affecting very specific, uncommon scenarios
- **Vague statements:** Too broad or abstract to act upon
- **Already solved:** Existing solutions adequately address the need

## Opportunity Validation Framework
Before documenting, ask:
- **Evidence:** What specific customer stories support this opportunity?
- **Frequency:** How many customers experience this need?
- **Intensity:** How painful is this problem for customers?
- **Workarounds:** What are customers doing today to solve this?
- **Business Impact:** How does solving this connect to business outcomes?

## Opportunity Document Template
\`\`\`markdown
# Opportunity: [Clear, customer-focused title]

## Opportunity Statement
**How might we** [specific customer need or desired outcome] **so that** [customer value/benefit]?

## Customer Evidence

### Supporting Stories
**Customer A:** [Brief story showing this need]
**Customer B:** [Different customer, same underlying need]
**Customer C:** [Third example with additional context]
**Customer D:** [Additional example]
*[Include ALL stories that support this opportunity - don't limit to 2-3]*

### Customer Quotes
> "[Direct quote illustrating the need]" - Customer A
> 
> "[Another quote showing impact]" - Customer B
> 
> "[Additional quote]" - Customer C
*[Include ALL relevant quotes - more evidence strengthens the opportunity]*

## Current State Analysis

### How Customers Solve This Today
- **Primary workaround:** [Most common current solution]
- **Alternative approaches:** [Other ways customers handle this]
- **Failure modes:** [When current solutions break down]

### Pain Points
- **Friction:** [Where current solutions create extra work]
- **Risk:** [What goes wrong with current approaches]
- **Inefficiency:** [Time/resource waste in current state]

### Success Indicators
- **When it works:** [Conditions where customers succeed today]
- **Positive outcomes:** [What good results look like]

## Opportunity Scope

### Customer Segments Affected
- **Primary:** [Main customer type experiencing this need]
- **Secondary:** [Other segments with similar but different needs]
- **Not affected:** [Who doesn't have this problem]

### Frequency & Context
- **How often:** [Daily/weekly/monthly/situational]
- **Trigger conditions:** [What circumstances create this need]
- **Seasonal/temporal patterns:** [Time-based variations]

## Business Impact Potential

### Customer Value
- **Time savings:** [Estimated efficiency gains]
- **Quality improvement:** [Better outcomes for customers]
- **Risk reduction:** [Problems prevented]
- **Satisfaction:** [Emotional/experience benefits]

### Business Metrics Connection
- **Revenue impact:** [How this could affect revenue]
- **Cost reduction:** [Operational efficiencies gained]
- **Customer retention:** [Impact on churn or satisfaction]
- **Competitive advantage:** [Market positioning benefits]

## Prioritization Factors

### Opportunity Size
- **Breadth:** How many customers are affected? [High/Medium/Low]
- **Depth:** How significant is the impact per customer? [High/Medium/Low]
- **Growth:** Is this need increasing over time? [Yes/No/Unknown]

### Strategic Alignment
- **Business objectives:** How does this support company goals?
- **Product strategy:** Alignment with product roadmap direction
- **Competitive positioning:** Impact on market differentiation

### Implementation Considerations
- **Technical complexity:** [Estimated difficulty]
- **Resource requirements:** [Team/time investment needed]
- **Dependencies:** [What else needs to happen first]

## Success Metrics
If we address this opportunity, we would expect to see:
- **Leading indicators:** [Early signals of progress]
- **Customer behavior changes:** [How usage patterns would shift]
- **Business metric improvements:** [Quantifiable business impact]

## Next Steps
- [ ] Validate opportunity sizing with additional customer research
- [ ] Generate multiple solution approaches
- [ ] Estimate implementation effort with technical team
- [ ] Prioritize against other opportunities

## Tags
#customer-need #[customer-segment] #[product-area] #[priority] #opportunity

## Related Documents
- **Interview snapshots:** [Links to supporting interviews]
- **Previous research:** [Related findings]
- **Solutions explored:** [Any solution brainstorming done]
\`\`\`

## Quality Checklist
Before saving, verify:
- [ ] Backed by evidence from multiple customers - include **ALL** supporting stories (not just 3+)
- [ ] Framed as customer need, not solution
- [ ] Clear connection to business outcomes
- [ ] Specific enough to guide solution generation
- [ ] Current customer workarounds documented
- [ ] Success metrics identified
- [ ] All relevant customer evidence included - completeness is key

---

## Jobs To Be Done

# Jobs-to-be-Done (JTBD) for Product Discovery

## Goal
Understand the progress customers seek in specific situations (jobs), along with the forces and desired outcomes, so solutions remain customer-centric, technology-agnostic, and testable.

> **Before using this framework:** Braindump first! What do you think customers are trying to accomplish? What does your product sense tell you? What feels like the real job? Then use this framework to structure your thinking.

## Output
- **Format:** Markdown (\`.md\`)
- **Location:** \`/discovery/jobs/\`
- **Filename:** \`job-[concise-job-handle]-[YYYY-MM-DD].md\`

## Core Concepts
- **Job (core functional job):** The progress someone is trying to make in a given circumstance.
- **Emotional jobs:** Personal and social dimensions (how they want to feel or be perceived).
- **Related jobs:** Other jobs happening before/after or alongside the core job.
- **Consumption chain jobs:** Steps to find, acquire, set up, use, maintain, upgrade, and replace a solution.
- **Forces of progress (Switch):** Push (problems with current), Pull (attraction to new), Anxieties (fears), Habits (status quo).
- **Outcomes vs. Solutions:** Outcomes describe what “better” means; solutions are ways to achieve it (keep jobs tech-agnostic).

## Job Statement Patterns
- **Job story:** When [situation], I want to [progress], so I can [outcome].
- **ODI-style outcome:** Minimize/Increase [metric] when [circumstance] while [constraint].

## Process
1. **Define scope:** Target segment and recurring situation. Avoid features/solutions in framing.
2. **Plan research:** Use switch interviews and recent, specific stories (not hypotheticals).
3. **Capture job stories:** Concrete instances with context, sequence, and triggers.
4. **Extract forces:** Push, Pull, Anxieties, Habits that shaped choices.
5. **Articulate outcomes:** Desired measures of success (time, accuracy, confidence, cost, risk).
6. **Normalize statements:** Write clean job stories and outcome statements (ODI-style).
7. **Validate patterns:** Seek 3+ independent stories with consistent outcomes/language.
8. **Score opportunities:** Rate importance and satisfaction, compute opportunity score.
9. **Traceability:** Link to interviews, synthesis, opportunities, solutions, and validation plans.
10. **Handoffs:** Use jobs to inform opportunity framing and assumptions for validation.

## Template Structure
\`\`\`markdown
# Job: [Clear job story]
When [situation], I want to [progress], so I can [outcome].

## Meta
- **Owner:** [Name]
- **Date:** [YYYY-MM-DD]
- **Status:** [Draft | Validating | Validated]
- **Segments:** [Primary audience(s)]
- **Evidence sources:** [Links to snapshots/interviews/data]

## Context
- **Situation/Trigger:** [When does this job arise?]
- **Constraints:** [Time, tools, compliance, environment]
- **Frequency:** [How often? Cadence? Seasonality?]

## Forces of Progress (Switch)
- **Push (from current):** [What’s not working]
- **Pull (to new):** [What’s attractive]
- **Anxieties (about new):** [Risks/unknowns]
- **Habits (status quo):** [What keeps them in place]

## Current Solutions & Workarounds
- **Primary approach:** [What they do today]
- **Alternatives:** [Other ways they handle it]
- **Failure modes:** [When/how it breaks]
- **Social/organizational context:** [Who else is involved]

## Outcome Statements (ODI-style)
- Minimize/Increase [metric] when [circumstance] while [constraint]
- Minimize/Increase [...]
- [List 5–10 clear, measurable outcomes]

## Evidence & Patterns
- **Customer stories (3+):**
  - [Story A: brief, with quote and outcome]
  - [Story B: brief, with quote and outcome]
  - [Story C: brief, with quote and outcome]
- **Quote bank:**
  > “[Verbatim that reflects job/outcome]” — [Persona/Role]
- **Pattern strength:** [Strong/Moderate/Weak] — why

## Segment Differences
- **Segment A:** [Unique context/outcomes]
- **Segment B:** [Differences in frequency/constraints]

## Opportunity Scoring
| Outcome/Need | Importance (1–10) | Satisfaction (1–10) | Opportunity = Importance + max(Importance - Satisfaction, 0) |
|--------------|-------------------|---------------------|----------------------------------------------------------------|
|              |                   |                     |                                                                |

- **Top opportunities:** [Outcomes with highest scores and evidence]
- **Risks/unknowns:** [Key assumptions to validate]

## Implications
- **For product:** [How jobs/outcomes inform scope or solution space]
- **For research:** [What to learn/test next; riskiest assumptions]
- **For business:** [Expected impact/risks]

## Links
- **Interview snapshots:** [refs]
- **Synthesis:** [ref]
- **Opportunities:** [ref to \`3-create-opportunities\`]
- **Solutions:** [ref to \`4-generate-solutions\`]
- **Validation plan:** [ref to \`idea-validation\`]

## Tags
#[segment] #[job-theme] #[priority] #[date]
\`\`\`

## Evidence Strength (guidance)
- **Stronger:** Multiple recent, independent stories; observed behavior; quantified outcome gaps; consistent language across segments.
- **Weaker:** Hypotheticals; single anecdote; solution-laden phrasing; generic complaints.

## Quality Checklist
- [ ] Job story is solution-agnostic and context-specific.
- [ ] Forces of progress captured (Push/Pull/Anxieties/Habits).
- [ ] 5–10 ODI-style outcome statements are clear and measurable.
- [ ] ≥3 independent stories support the job and outcomes.
- [ ] Opportunity scoring completed with rationale.
- [ ] Segment differences and constraints noted.
- [ ] Links to supporting research and handoffs to next frameworks.
- [ ] Assumptions flagged for validation (RAT-first).

## Common Pitfalls
- **Jobs ≠ features:** Avoid embedding tools/tech in job statements.
- **“Implementation jobs” confusion:** Current workflows are not jobs; treat as consumption chain steps.
- **Anecdote-as-pattern:** Triangulate across customers and contexts.
- **Vague outcomes:** Use measurable ODI phrasing (time, likelihood, accuracy, effort, risk).
- **Persona lock-in:** Jobs often cut across personas; segment by situation/context.

## LLM Helper Prompts

**Before mapping jobs - Braindump & Think:**
\`\`\`markdown
Act as a product management coach. Help me think through customer jobs before we structure them. Your role is to help me think, not to think for me.

1) FIRST: Help me braindump (don't structure yet):
- Ask me to dump everything I think I know about what customers are trying to do
- Don't ask me to structure it yet. Just get it all out.
- Ask: "What does your product sense tell you? What feels like the real job?"
- Ask: "What biases might be affecting your view?" (Feature bias? Solution bias?)
- Ask: "If you had to explain the customer's job in one sentence, what would it be?"

2) THEN: Help me identify jobs:
- "Before looking at interview notes, what do you think customers are trying to accomplish?"
- "What would make you say 'this is obviously not the job'?"
- "What would make you say 'this is obviously the job'?"
- "What does your product sense tell you about the real job here?"

3) THEN: Help me structure:
- Only after I've thought through it, help me extract and structure job statements
- Challenge my thinking: "Why this job? What evidence supports it?"
- Help me use my product sense: "What does your intuition tell you about this job?"

4) END with reflection:
- "How did your understanding of the job evolve?"
- "What biases did you catch? What would you do differently?"
\`\`\`

**After braindump - Job mapping:**
- "Extract job stories, forces of progress, and outcome statements from these interview notes."
- "Rewrite this job statement to be solution-agnostic and context-specific."
- "Generate 10 ODI-style outcomes for this job and propose importance/satisfaction questions."
- "Compute opportunity scores from this survey data and rank outcomes."
- "Propose riskiest assumptions and minimal tests linked to this job's top outcome gaps."

## Cross-Framework Navigation
- Start with: interview snapshots → \`../2.3.2-Continuous-Discovery-Habits/1-create-interview-snapshot.md\`
- Find patterns → \`../2.3.2-Continuous-Discovery-Habits/2-synthesize-interview-snapshots.md\`
- Frame opportunities → \`../2.3.2-Continuous-Discovery-Habits/3-create-opportunities.md\`
- Generate solutions → \`../2.3.2-Continuous-Discovery-Habits/4-generate-solutions.md\`
- Assess opportunities → \`../2.3.4-Opportunity-Assessment/1-opportunity-assessment-framework.md\`
- Validate assumptions → \`../2.3.5-Idea-Validation/1-idea-validation.md\`

---

## Opportunity Assessment Framework

# Opportunity Assessment Framework

## Overview

An opportunity assessment helps you structure early thinking about a potential product initiative. It captures what you know, what you assume, and what needs validation before committing resources to build.

**Purpose:** Bridge the gap between initial idea and evidence-based discovery.

## Core Principles

### 1. Document Assumptions Explicitly
- Mark all assumptions with confidence levels (High/Med/Low) - this helps you know what to validate
- Distinguish between facts and hypotheses
- Identify what would change your mind
- **Note:** Confidence here refers to your confidence in the assumption being true, which helps prioritize validation

### 2. Focus on Outcomes, Not Solutions
- Start with the problem/opportunity, not the solution
- Define success metrics before proposing solutions
- Keep solution ideas high-level initially

### 3. Plan Validation Before Building
- Identify key questions to answer
- Define decision criteria (kill/pivot/commit thresholds)
- Link to discovery methods you'll use

### 4. Make It Living
- Update as you learn
- Return after discovery to refine
- Use evidence to replace assumptions

## Framework Structure

### Objective
**What to capture:**
- What outcome are you trying to achieve and why now?
- Business value hypothesis (revenue, risk reduction, cost, speed)
- Time horizon and exit criteria (what "good" looks like)

**Why it matters:** Clarifies the "why" before the "what" or "how"

### Target Customer
**What to capture:**
- Primary customer/user segment and context (JTBD, key workflows)
- Stakeholders impacted (internal/external) and success definition for each
- Where/how you'll reach them (channels, touchpoints)

**Why it matters:** Ensures you know who you're building for before building

### Success Metrics
**What to capture:**
- Leading indicators (early signals of progress)
- Lagging outcomes (ultimate business impact)
- Guardrails (compliance, risk appetite, experience thresholds)

**Why it matters:** Defines how you'll measure success before you start

### What We Know
**What to capture:**
- Facts and evidence (link sources: data, interviews, prior initiatives)
- Constraints (regulatory, technical, operational, capacity)
- Assumptions with confidence level (High/Med/Low)

**Why it matters:** Separates what's certain from what's uncertain

### What We Should Research
**What to capture:**
- Key questions/hypotheses to validate
- Methods (interviews, data analysis, discovery experiments, prototypes)
- Participants, sample size, and timeline
- Decision criteria (what would change your mind; kill/pivot/commit thresholds)

**Why it matters:** Creates a research plan before jumping to solutions

### Solution Ideas
**What to capture:**
- Concept 1: [one-liner] — first slice MVP scope
- Concept 2: [one-liner] — alternative approach
- Out of scope (for now) to protect focus

**Why it matters:** Keeps solution thinking high-level until validated

### Risks and Questions to Validate
**What to capture:**
- Desirability (customer value, adoption risks)
- Viability (commercial model, business impact, go-to-market)
- Feasibility/Tech (integration, scalability, data availability)
- Usability (flow, UX, accessibility)
- Compliance/Legal (market rules, privacy, auditability)
- Dependencies (teams, vendors, data sources, timelines)
- Unknowns/Red flags and how you'll de-risk

**Why it matters:** Identifies risks early so you can plan mitigation

## How to Use This Framework

### Step 1: Initial Assessment
1. Copy the template from \`2-opportunity-assessment-template.md\`
2. Fill in what you know with current knowledge
3. Mark unknowns explicitly with \`[to fill]\` or \`[unknown]\`
4. Identify assumptions and assign confidence levels

### Step 2: Plan Research
1. Use "What we should research" to create a research plan
2. Link to discovery methods you'll use (interviews, validation experiments)
3. Define decision criteria for kill/pivot/commit decisions

### Step 3: Conduct Discovery
1. Use discovery frameworks in \`../2.3-Discovery/\` to validate assumptions
2. Store research artifacts in \`03-Research-Artifacts/\`
3. Update opportunity assessment as you learn

### Step 4: Make Decisions
1. Use decision criteria to determine next steps
2. Update opportunity assessment with findings
3. Move to PRD/roadmap when validated, or kill/pivot if not

## Common Pitfalls

**Too solution-focused too early**
- Problem: Jumping to solutions before understanding the problem
- Solution: Focus on outcomes and customer needs first

**Not updating with evidence**
- Problem: Opportunity assessment becomes stale
- Solution: Update weekly or after each discovery activity

**Vague assumptions**
- Problem: "We assume customers want this" without confidence level
- Solution: Mark all assumptions with High/Med/Low confidence (your confidence the assumption is true - helps prioritize validation)

**No decision criteria**
- Problem: Never clear when to kill, pivot, or commit
- Solution: Define thresholds upfront (e.g., "If <30% of interviews show need, kill")

## Quick start: self-quiz + AI collaboration

Use this to get unstuck fast, challenge assumptions, and move from thoughts → evidence → decisions.

- How it works:
  - You paste the prompt below into the model.
  - You paste your latest notes.
  - The model quizzes you section-by-section, fills gaps, and challenges assumptions.
  - You iterate until confident enough to move into a PRD/roadmap.

\`\`\`markdown
Act as a product management coach. Help me think through my opportunity assessment. Your role is to help me think, not to think for me. We'll work iteratively and challenge assumptions. I may switch between multiple languages (e.g. [Primary Language] and English). Keep content, quotes, and context in the original language, but translate important highlights to English when helpful. If I use mixed language, maintain it unless I ask you to standardize.

0) FIRST: Help me braindump (don't structure yet):
- Ask me to dump everything I know about this opportunity - thoughts, concerns, ideas, gut feelings
- Don't ask me to structure it yet. Just get it all out.
- Ask: "What's your product sense telling you? What feels right or wrong?"
- Ask: "What assumptions are you making? List them all."
- Ask: "What biases might be affecting your view?"

1) THEN: Quiz me section-by-section on:
- Objective
- Target customer
- Success metrics
- What we know
- What we should research
- Solution ideas
- Risks and questions to validate

2) For each section:
- DON'T just ask me to paste notes. First ask: "Before looking at your notes, what do you think about [section]? What's your gut feeling?"
- Ask 3–7 sharp questions that make me think
- Challenge my thinking: "What biases might be affecting this? What would someone with different product sense say?"
- Help me use my product sense: "What does your intuition tell you here? What feels off?"
- Only then propose initial draft answers based on my notes; clearly mark gaps as [to fill]
- Challenge assumptions and call out confidence (High/Med/Low)
- Suggest 1–3 fast experiments or research tasks

3) End with:
- Ask me to reflect: "What did you learn? How did your thinking evolve? What surprised you?"
- Updated section summaries
- Top 3 decision points
- Next 3 actions with owners/dates placeholders
- Self-reflection: "What would you do differently? What biases did you catch?"
\`\`\`

-----

## References

- Opportunity Assessment Template: \`2-opportunity-assessment-template.md\`
- Research Interviews: \`../2.3.1-Research-Interviews/README.md\`
- Continuous Discovery Habits: \`../2.3.2-Continuous-Discovery-Habits/README.md\`
- Jobs To Be Done: \`../2.3.3-Jobs-To-Be-Done/README.md\`
- Idea Validation: \`../2.3.5-Idea-Validation/README.md\`
- Problem-Solution Space: \`../2.3.6-Problem-Solution-Space/README.md\`
- PRD Framework: \`../../2.1-Strategy/2.1.4-PRD/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`



---

## Opportunity Assessment Template

# [Initiative Working Title] – Opportunity Assessment

> **How to use:** Copy this template to your initiative folder in \`04-Initiatives/[INIT-CODE]/opportunity-assessment.md\` and fill it out. Update as you learn.

## Objective

- What outcome are we trying to achieve and why now?
- Business value hypothesis (e.g., revenue, risk reduction, cost, speed).
- Time horizon and exit criteria (what "good" looks like).

## Target Customer

- Primary customer/user segment and context (JTBD, key workflows).
- Stakeholders impacted (internal/external) and success definition for each.
- Where/how we'll reach them (channels, touchpoints).

## Success Metrics

- **Leading indicators:**
  - [Metric] — baseline: [x], target: [y] by [date]
- **Lagging outcomes:**
  - [Metric] — baseline: [x], target: [y] by [date]
- **Guardrails** (e.g., compliance, risk appetite, experience thresholds).

## What We Know

- Facts and evidence (link sources: data, interviews, prior initiatives).
- Constraints (regulatory, technical, operational, capacity).
- Assumptions with confidence level (e.g., High/Med/Low):
  - [Assumption 1] — [High/Med/Low]
  - [Assumption 2] — [High/Med/Low]

## What We Should Research

- **Key questions/hypotheses to validate:**
  - [Question 1]
  - [Question 2]
- **Methods** (interviews, data analysis, discovery experiments, prototypes).
- **Participants, sample size, and timeline.**
- **Decision criteria** (what would change our mind; kill/pivot/commit thresholds):
  - **Kill if:** [condition]
  - **Pivot if:** [condition]
  - **Commit if:** [condition]

## Solution Ideas

- **Concept 1:** [one-liner] — first slice MVP scope.
- **Concept 2:** [one-liner] — alternative approach.
- **Out of scope** (for now) to protect focus.

## Risks and Questions to Validate

- **Desirability** (customer value, adoption risks).
- **Viability** (commercial model, business impact, go-to-market).
- **Feasibility/Tech** (integration, scalability, data availability).
- **Usability** (flow, UX, accessibility).
- **Compliance/Legal** (market rules, privacy, auditability).
- **Dependencies** (teams, vendors, data sources, timelines).
- **Unknowns/Red flags** and how we'll de-risk.

## Next Steps

- [Owner] → [action] by [date]
- [Owner] → [action] by [date]

## Links & Artifacts

- Research notes: [link to \`03-Research-Artifacts/…\`]
- Data/dashboard: [link]
- Stakeholders & comms rhythm: [link or notes]
- Decision log: [\`decisions.md\` entry]
- Related frameworks: [links to discovery methods used]

-----

## References

- Opportunity Assessment Framework: \`1-opportunity-assessment-framework.md\`
- Opportunity Assessment README: \`README.md\`
- Research Interviews: \`../2.3.1-Research-Interviews/README.md\`
- Continuous Discovery Habits: \`../2.3.2-Continuous-Discovery-Habits/README.md\`
- Jobs to Be Done: \`../2.3.3-Jobs-To-Be-Done/README.md\`
- Idea Validation: \`../2.3.5-Idea-Validation/README.md\`
- Problem-Solution Space: \`../2.3.6-Problem-Solution-Space/README.md\`
- PRD Framework: \`../../2.1-Strategy/2.1.4-PRD/README.md\`
- Self-Reflection: \`../../2.9-Other/2.9.2-Self-Reflection/README.md\`


---

## Mental Models

# Product Management Mental Models

This document distills essential mental models for product managers and data platform teams at [Company]. These frameworks offer practical tools to navigate common challenges—whether you're exploring new opportunities, scaling proven solutions, or aligning teams around outcomes. Use these models to clarify thinking, guide discussions, and drive better decisions at every stage of the product lifecycle.

**Note:** These are complementary decision-making tools that work alongside the process frameworks (2.1-2.10). Use mental models for strategic thinking and team alignment; use process frameworks for structured workflows.

## Pre-mortems

| Element | Type | Description | Purpose |
|---------|------|-------------|---------|
| **Initial Prompt** | Process | "Imagine this project has failed six months from now - what went wrong?" | Creates psychological safety to discuss potential failures |
| **Tigers** | Risk Category | Threats that will actually kill the project | Identify critical risks that must be mitigated |
| **Paper Tigers** | Risk Category | Seeming threats that aren't actually dangerous | Distinguish real vs. perceived risks |
| **Elephants** | Risk Category | Uncomfortable truths no one is discussing | Surface unspoken concerns and assumptions |

### Process Flow
1. **Gather team** early in project lifecycle
2. **Present failure scenario** using the prompt
3. **Categorize risks** into Tigers, Paper Tigers, Elephants
4. **Prioritize threats** voted on by team
5. **Create action plan** to address highest priority risks

## 60-30-10 Framework

| Allocation | Focus Area | Description | Examples |
|------------|------------|-------------|----------|
| **60%** | **Incrementals** | High-ROI features that improve users' daily experience | Bug fixes, UI improvements, small feature enhancements, performance optimizations |
| **30%** | **Big New Initiatives** | Major opportunities that could significantly change trajectory (1-2 initiatives max) | New product lines, major feature launches, platform rewrites, strategic pivots |
| **10%** | **Stability & Infrastructure** | Technical debt and foundational work | Code refactoring, security updates, tooling improvements, monitoring systems |

### Key Benefits
- Prevents roadmap from being filled entirely with quick wins
- Ensures dedicated time for high-impact opportunities
- Balances immediate needs with long-term strategic goals
- Forces prioritization of big initiatives (can't do 5 with only 30% allocation)

## The 3 Levels of Product Work

| Level | Focus | Typical Roles | Common Activities | Potential Issues |
|-------|-------|---------------|-------------------|------------------|
| **Impact** | Outcomes, customer experience, business results | Executives, CEOs, founders | Strategy discussions, customer impact analysis, business metrics | May miss execution realities |
| **Execution** | Delivery, milestones, getting things done | PMs, engineers, designers | Sprint planning, task management, bug fixes, feature delivery | May lose sight of bigger picture |
| **Optics** | Creating awareness and visibility | All roles (necessary function) | Status updates, presentations, documentation, communication | Can become the goal instead of means |

### Conflict Patterns
- **Impact vs Execution**: CEO asks "Why is customer service poor?" PM explains resource constraints
- **Execution vs Optics**: Team focused on delivery vs. stakeholders wanting visibility
- **Impact vs Optics**: Results-focused leaders vs. perception-focused team members

### Resolution Strategy
Use shared vocabulary to identify which level each person is operating at, then align on what's most important for the current context.

## Product 0-1 vs 1-100

| Stage      | Focus                | Key Activities                        | Success Metrics                | Common Pitfalls                |
|------------|----------------------|---------------------------------------|-------------------------------|-------------------------------|
| **0-1**    | Discovery & Fit      | User research, rapid prototyping, MVPs, hypothesis testing | User engagement, speed of learning, qualitative feedback | Over-engineering, skipping user validation, building for scale too early |
| **1-100**  | Scaling & Optimization | Performance, automation, process standardization, team specialization | Usage growth, system reliability, operational efficiency | Premature optimization, losing user focus, excessive complexity |

- **0-1:** "What should we build?" — Emphasize learning, user problems, and rapid iteration. Small, flexible teams validate assumptions before scaling.
- **1-100:** "How do we scale what works?" — Focus on execution, reliability, and efficiency. Specialized teams optimize and standardize proven solutions.
- **Key Insight:** Success depends on recognizing your stage and adapting team structure, metrics, and mindset accordingly.

## One-Way vs Two-Way Door Decisions

A mental model for matching decision-making speed and rigor to the reversibility of the decision.

| Type         | Description                        | Decision Process                | Examples (Data Platform)                |
|--------------|------------------------------------|----------------------------------|-----------------------------------------|
| **Two-Way**  | Reversible, low-cost to undo       | Decide quickly, experiment, empower teams | Tool selection, batch timing, alert thresholds |
| **One-Way**  | Hard/impossible to reverse, high impact | Slow down, analyze, consult widely | Cloud provider, core architecture, compliance standards |

- **Two-Way Doors:** Favor speed and experimentation. If it fails, you can easily reverse course.
- **One-Way Doors:** Require thorough analysis and broad alignment. Mistakes are costly or permanent.
- **Key Practice:** Always ask, "Is this a one-way or two-way door?"—then match your process to the risk.

## The Alignment Check

A simple diagnostic to surface hidden misalignment before it derails execution.

| Element | Description | Purpose |
|---------|-------------|---------|
| **Core Question** | "What are our top 3 priorities and how do we measure success?" | Reveals gaps between what people think they're working toward |
| **Expected Result** | Different definitions of success and timeframes | Exposes the real problem: everyone working hard in different directions |

### Warning Signs of Misalignment
- Multiple functional plans stapled together as "the plan"
- High effort, low meaningful output
- Team frustration despite individual hard work

### Process
1. **Ask each team member** the core question independently
2. **Compare responses** for consistency in priorities and success metrics
3. **Surface differences** openly in team discussion
4. **Align on shared definition** before proceeding with execution

**Key Insight:** Teams often assume they're aligned when they're not. This simple check prevents wasted effort on competing priorities.

## The Assumptions Framework

A diagnostic for understanding the root cause of product disagreements and building shared conviction.

| Element | Description | Purpose |
|---------|-------------|---------|
| **Core Principle** | "When two people disagree about product strategy, they have different assumptions" | Shifts focus from arguing solutions to aligning on underlying beliefs |
| **Assumption Mapping** | Identify what each person believes to be true about users, market, or constraints | Surface hidden differences in worldview |
| **Shared Foundation** | Align on key assumptions before debating solutions | Create basis for genuine agreement and conviction |

### Process Flow
1. **When disagreement occurs**, pause solution discussion
2. **Ask "What assumptions"** lead each person to their preferred approach
3. **Map differences** in beliefs about users, market, technical constraints
4. **Align or validate** assumptions through data, research, or testing
5. **Revisit solutions** once assumptions are shared

### Application Patterns

| Scenario | Assumption Check | Resolution Path |
|----------|------------------|-----------------|
| **Top-Down Strategy** | "What assumptions led leadership to this direction?" | Understand reasoning before building roadmap |
| **Bottom-Up Proposals** | "What do I assume that others might not?" | Ensure stakeholders share your foundational beliefs |
| **Team Misalignment** | "What different assumptions explain our different views?" | Surface and reconcile conflicting worldviews |

### Key Benefits
- Transforms arguments into productive assumption discussions
- Builds genuine conviction rather than compliance
- Reveals when disagreement is actually about facts vs. opinions
- Creates pathway to passionate execution through shared beliefs

**Key Insight:** Passionate execution flows naturally from shared assumptions. Focus on aligning beliefs, not just agreeing on tasks.

## Cross-Framework Navigation

- **Strategic Planning**: Use with \`../../2.1-Strategy/2.1.1-Product-Strategy/\` for strategy development
- **Team Alignment**: Use with \`../../2.1-Strategy/2.1.2-OKR/\` when setting objectives
- **Decision Making**: Use with \`../../2.3-Discovery/2.3.4-Opportunity-Assessment/\` for opportunity decisions and \`../../2.3-Discovery/2.3.5-Idea-Validation/\` for validation decisions
- **Roadmap Planning**: Use with \`../../2.1-Strategy/2.1.3-Roadmap/\` for prioritization



---

## Metrics Framework

# Product Metrics Framework

## Overview

This framework helps product teams distinguish between meaningful metrics and misleading ones, ensuring you measure what actually drives your product and business forward. Metrics are NOT status symbols—they're strategic tools for decision-making.

## Step 0: Braindump & Think First (Critical!)

**Before defining metrics, braindump:**
- What outcomes are you trying to achieve? Dump everything - don't structure yet.
- What does your product sense tell you? What metrics feel meaningful?
- What assumptions are you making about what to measure?
- What biases might affect your metric choices? (Vanity metrics? Activity bias?)

**Product sense exercise:**
- If you had to pick ONE metric that matters most, what would it be? Why?
- What would make you say "these metrics are obviously wrong"?
- What would make you say "these metrics are obviously right"?

## Core Philosophy

### Metrics are NOT Magic

Good metrics should:

- **Drive action over appearance** - Make you do something, not just feel good
- **Predict outcomes over report history** - Look forward, not just backward
- **Connect work to results** - Show how daily efforts impact business goals
- **Enable learning over confirmation** - Challenge assumptions, don’t just validate them

### Understanding the Metric Spectrum

Metrics exist on several spectrums:

- **VANITY ←→ ACTIONABLE** - Impressive vs. Useful
- **LAGGING ←→ LEADING** - Results vs. Predictors
- **OUTPUT ←→ OUTCOME** - Activity vs. Impact
- **QUANTITATIVE ←→ QUALITATIVE** - Numbers vs. Stories

## Framework Structure

### 1. Header Section

Always include:

- **Disclaimer** - “Metrics reflect our current understanding and will evolve”
- **Metric tier** - Which level of metric is this?
- **Last reviewed date**
- **Review owner**

### 2. Metric Classification

**Vanity Metrics (Avoid These)**

- Look impressive but lack context
- Don’t inform strategy
- Can’t be acted upon
- Not reproducible

**Actionable Metrics (Focus Here)**

- Connected to business decisions
- Reproducible through specific actions
- Provide clear next steps
- Auditable and accessible

### 3. Metric Timing

**Leading Indicators (Predictive)**

- Predict future outcomes
- Teams can directly influence
- Short feedback loops (days/weeks)
- Enable course correction

**Lagging Indicators (Historical)**

- Report past results
- Validate strategy success
- Long feedback loops (months/quarters)
- Confirm business impact

### 4. Metric Purpose

**Health Metrics**

- Monitor system stability
- Track performance
- Ensure product quality

**Growth Metrics**

- Drive acquisition
- Increase engagement
- Measure retention

**Business Metrics**

- Revenue and profitability
- Market position
- Customer value

## Writing Guidelines

### Metric Names

- ✅ “Trial-to-paid conversion rate”
- ✅ “Weekly active users completing core action”
- ✅ “Time to first value realization”
- ❌ “Total users”
- ❌ “Page views”
- ❌ “Engagement”

### Metric Definitions

- ✅ “% of free trial users who upgrade to paid within 14 days”
- ✅ “Count of users who complete at least 3 tasks in a 7-day period”
- ❌ “Users who are engaged with the product”
- ❌ “People who like the feature”

### Why This Metric Matters

- ✅ “Predicts 6-month retention with 85% accuracy”
- ✅ “Moves 72 hours before revenue changes, enabling proactive intervention”
- ❌ “It’s what competitors track”
- ❌ “Leadership asked for it”

## Review Schedule

### Daily Check-ins (Health Metrics)

- System performance
- Error rates
- Critical user flows
- Immediate blockers

### Weekly Reviews (Leading Indicators)

- Progress against targets
- Trend identification
- Early warning signals
- Quick wins and blockers

### Monthly Deep-Dives (Lagging + Leading)

- Business metric review
- Cohort analysis
- Strategic adjustments
- Experiment results

### Quarterly Audits (Full Portfolio)

- Metric relevance check
- Sunset obsolete metrics
- Add new strategic metrics
- Validate measurement accuracy

### Annual Strategy Reviews

- Align metrics with strategy shifts
- Market positioning assessment
- Competitive landscape changes

## Stakeholder Communication

### For Leadership

- Focus on business and lagging metrics
- Show leading indicators that predict results
- Highlight strategic trade-offs and bets
- Connect metrics to revenue and growth

### For Product Teams

- Emphasize leading indicators they can influence
- Show how daily work moves metrics
- Provide context on why metrics matter
- Celebrate metric movement, not just targets

### For Engineering Teams

- Health and performance metrics
- Technical quality indicators
- Deployment and reliability metrics
- Clear correlation to user impact

### For Data Teams

- Measurement methodology
- Data quality and accuracy
- Instrumentation requirements
- Analysis and insights process

## Common Challenges and Solutions

### “Why aren’t we tracking [popular metric]?”

**Response pattern:**
“Let’s evaluate it. Can we act on this metric? Does it predict outcomes we care about? If we move this metric up, does our business definitely improve? What decision would this metric help us make?”

### “Our metrics look great but business results don’t”

**Response pattern:**
“This signals a vanity metric problem. Let’s audit: Are we measuring outputs or outcomes? Are these leading or lagging? What’s the connection between what we’re measuring and what we’re trying to achieve?”

### “We have too many metrics to track”

**Response pattern:**
“Quality over quantity. Let’s apply the 5-3-1 rule: 5 key metrics per team, 3 North Star inputs for the product, 1 North Star Metric company-wide. If a metric doesn’t drive decisions, cut it.”

### “This metric is gaming our behavior”

**Response pattern:**
“Good catch—this is Goodhart’s Law in action. When a measure becomes a target, it ceases to be a good measure. Let’s add counterbalance metrics or reframe this as an input to a more holistic outcome.”

## Best Practices

### Do’s

- Start with business goals, work backward to metrics
- Mix leading and lagging indicators
- Choose 3-5 key metrics per team (not 20)
- Make metrics accessible to everyone
- Review and refine metrics regularly
- Tell stories behind the numbers
- Use ratios over raw numbers (percentages, rates, averages)

### Don’ts

- Track metrics just because competitors do
- Rely solely on lagging indicators
- Create metrics without clear ownership
- Ignore qualitative data
- Set metrics and forget them
- Use cumulative charts for everything
- Track what’s easy vs. what matters

## Metrics for Metric Success

Track these to know if your metric framework is working:

- **Decision velocity** - Are decisions faster with clear metrics?
- **Strategic alignment** - Do metrics connect to business goals?
- **Team autonomy** - Can teams make local decisions with metric insights?
- **Learning rate** - How quickly do insights translate to action?
- **Metric coverage** - Do we have balanced leading/lagging indicators?

## Metric Quality Checklist

Before adopting any metric, validate it passes these tests:

- [ ] **Actionable Test** - Can we take specific actions to improve this metric?
- [ ] **Accessible Test** - Can everyone understand what this metric means?
- [ ] **Auditable Test** - Can we trace this metric back to raw data?
- [ ] **Aligned Test** - Does this connect to business goals?
- [ ] **Predictive Test** - Does this help us see what’s coming?
- [ ] **Comparative Test** - Can we benchmark this over time or against others?
- [ ] **Simple Test** - Can someone explain this in 30 seconds?

-----

# Product Metrics Template

## Disclaimer

This metrics framework reflects our current product strategy. Metrics will evolve as we learn what drives real outcomes vs. what just looks good.

**Updated on:** [Date]
**Next review:** [Date]
**Framework owner:** [Name/Role]

-----

## 🎯 Primary Business Goals

Before defining metrics, state what you’re trying to achieve:

1. **Business Goal 1:** [e.g., Grow revenue by 40% YoY]
1. **Business Goal 2:** [e.g., Improve gross retention to 95%]
1. **Business Goal 3:** [e.g., Expand into enterprise market]

-----

## 📊 Metric Hierarchy

### Tier 1: North Star Metric (Company-Level)

The one metric that best captures customer value and predicts sustainable growth.

|Element |Details |
|--------------------|--------------------------------|
|**Metric Name** |[Your North Star] |
|**Classification** |Leading / Lagging / Both |
|**Definition** |[Precise measurement method] |
|**Why It Matters** |[Connection to value and growth]|
|**Current Value** |[Baseline] |
|**Target** |[Goal] |
|**Review Frequency**|[Weekly/Monthly] |
|**Owner** |[Name/Team] |

**Example:**

|Element |Details |
|--------------------|---------------------------------------------------------------------------|
|**Metric Name** |Weekly Active Users (WAU) completing core action |
|**Classification** |Leading indicator |
|**Definition** |Count of users who complete at least one analysis in a 7-day rolling window|
|**Why It Matters** |Predicts 30-day retention (r²=0.87) and expansion revenue within 90 days |
|**Current Value** |42,500 WAU |
|**Target** |55,000 WAU by Q2 |
|**Review Frequency**|Weekly |
|**Owner** |Chief Product Officer |

-----

### Tier 2: Input Metrics (Product Team Level)

The 3-5 metrics that drive your North Star Metric.

#### Input Metric #1

|Element |Details |
|---------------------------|--------------------------|
|**Metric Name** |[Action-oriented name] |
|**Classification** |Leading / Lagging |
|**Definition** |[How you measure it] |
|**Type** |Vanity / Actionable |
|**Why It Matters** |[Connection to North Star]|
|**Current Value** |[Baseline] |
|**Target** |[Goal] |
|**Review Frequency** |[Cadence] |
|**Owner** |[Team/Person] |
|**Actions if Above Target**|[What we do] |
|**Actions if Below Target**|[What we do] |

**Example:**

|Element |Details |
|---------------------------|------------------------------------------------------------------------|
|**Metric Name** |New user activation rate |
|**Classification** |Leading indicator |
|**Definition** |% of new signups who complete setup and run first analysis within 7 days|
|**Type** |Actionable |
|**Why It Matters** |Activated users are 3.2x more likely to become WAU within 30 days |
|**Current Value** |42% |
|**Target** |55% |
|**Review Frequency** |Weekly |
|**Owner** |Growth Product Team |
|**Actions if Above Target**|Document what’s working; scale successful patterns |
|**Actions if Below Target**|Run onboarding experiments; improve time-to-value |

#### Input Metric #2

[Repeat structure]

#### Input Metric #3

[Repeat structure]

-----

### Tier 3: Feature/Initiative Metrics

Specific metrics for experiments, features, or initiatives.

|Initiative|Metric |Type |Target|Result |Learning |
|----------|--------|---------------|------|---------|-----------------|
|[Name] |[Metric]|Leading/Lagging|[Goal]|[Outcome]|[What we learned]|
| | | | | | |

**Example:**

|Initiative |Metric |Type |Target |Result |Learning |
|---------------------|----------------------------------------|-------|--------------------|----------------|-----------------------------------------------|
|Redesigned onboarding|Time to first analysis |Leading|< 5 min (from 8 min)|4.2 min achieved|Removing account setup step was key driver |
|Smart recommendations|% users discovering personalized content|Leading|50% (from 35%) |48% achieved |Algorithm accuracy mattered more than placement|
|Team collaboration |Analyses shared per user |Leading|2.5 (from 1.8) |2.1 achieved |Need better sharing triggers, not just features|

-----

## 🎨 Metric Classification Matrix

Map your metrics to understand portfolio balance:

### Vanity vs. Actionable

|Vanity Metrics (Eliminate)|Why It’s Vanity |Actionable Alternative |
|--------------------------|--------------------------------|---------------------------|
|Total registered users |Doesn’t show engagement or value|Weekly/Monthly Active Users|
|Page views |Doesn’t indicate value or goals |Task completion rate |
|Social media followers |No revenue correlation |Qualified leads from social|
|Total downloads |Doesn’t show actual usage |Daily/Weekly Active Users |
| | | |

### Leading vs. Lagging Balance

**Current Portfolio:**

- Leading Indicators: [Count/List]
- Lagging Indicators: [Count/List]
- **Ratio:** [X:Y] (Target: 70% leading, 30% lagging)

### Output vs. Outcome

|Output Metrics (Activity)|Better Outcome Alternative|
|-------------------------|--------------------------|
|Features shipped |User problems solved |
|Experiments run |Validated learnings |
|Stories completed |Customer value delivered |
| | |

-----

## 📈 Metric Relationships (Belief Tree)

Map how you believe metrics connect:

\`\`\`
Business Goal: [e.g., 40% revenue growth]
↑
|
Lagging: [Revenue, MRR]
↑
|
North Star: [Weekly Active Users]
↑
|
┌───┴───┬───────┬───────┐
│ │ │ │
Input 1 Input 2 Input 3 Input 4
(Activation) (Engagement) (Retention) (Referral)
│ │ │ │
└───┬───┴───┬───┴───┬───┘
│ │ │
Feature Feature Feature
Metrics Metrics Metrics
\`\`\`

**Describe your belief chain:**

1. We believe [Input 1: Activation] drives [North Star: WAU] because [activated users return 3x more frequently]
1. We believe [Input 2: Engagement] drives [North Star: WAU] because [engaged users create habits and perceive more value]
1. We believe [North Star: WAU] drives [Lagging: Revenue] because [historical correlation of 0.85 and 60-day lag time]

-----

## 📅 Review Cadence & Rituals

### Daily (5-10 min standup check)

**Metrics:**

- Critical health metrics
- Error rates
- System performance

**Format:** Quick dashboard review, flag anomalies only

### Weekly (30-60 min team review)

**Metrics:**

- All leading indicators
- Feature/initiative progress
- Early trends

**Format:**

- What moved? Why?
- What’s trending? Implications?
- What needs attention?
- Quick wins to try?

### Monthly (90 min cross-functional)

**Metrics:**

- North Star + all inputs
- Lagging business metrics
- Cohort analysis

**Format:**

- Deep dive on 1-2 metrics
- Experiment results review
- Strategic adjustments
- Resource allocation decisions

### Quarterly (Half-day workshop)

**Metrics:**

- Full portfolio audit
- Metric relevance check
- New metric proposals

**Format:**

- Strategy alignment check
- Sunset obsolete metrics
- Add new strategic metrics
- Validate measurement methods

-----

## 🔬 Metric Validation & Testing

### Vanity Metric Test

Ask these questions. If you answer “No” to 2+, it’s likely vanity:

- [ ] Can we take specific actions to improve this metric?
- [ ] Does improving this metric definitely improve business outcomes?
- [ ] Can we reproduce the results intentionally?
- [ ] Does this metric tell us something we didn’t already know?
- [ ] Would this metric reveal bad news if things were going poorly?

### Leading Indicator Validation

Test if your leading indicator actually predicts your lagging outcome:

|Leading Metric|Lagging Metric|Correlation|Time Lag|Confidence |
|--------------|--------------|-----------|--------|------------|
|[Input 1] |[North Star] |[r² = 0.XX]|[X days]|High/Med/Low|
|[Input 2] |[North Star] |[r² = 0.XX]|[X days]|High/Med/Low|
|[North Star] |[Revenue] |[r² = 0.XX]|[X days]|High/Med/Low|

**Example:**

|Leading Metric |Lagging Metric |Correlation|Time Lag|Confidence|
|----------------|-------------------------|-----------|--------|----------|
|Activation rate |Weekly Active Users |r² = 0.82 |14 days |High |
|WAU |Monthly Recurring Revenue|r² = 0.87 |60 days |High |
|Feature adoption|Upgrade rate |r² = 0.45 |30 days |Medium |

-----

## 🎯 Metric-Driven Decision Making

### Decision Framework

**For each metric, define:**

1. **Green Zone (Above Target):**
- What this means: [Interpretation]
- What we do: [Actions]
- Who decides: [Owner]
1. **Yellow Zone (Near Target):**
- What this means: [Interpretation]
- What we do: [Actions]
- Who decides: [Owner]
1. **Red Zone (Below Target):**
- What this means: [Interpretation]
- What we do: [Actions]
- Who decides: [Owner]

**Example: New User Activation Rate**

1. **Green Zone (>60%):**
- What this means: Onboarding is working well; focus on scale
- What we do: Document success patterns; invest in acquisition
- Who decides: Growth Team Lead
1. **Yellow Zone (50-60%):**
- What this means: Acceptable but room for improvement
- What we do: Run small experiments; monitor closely
- Who decides: Growth Team Lead
1. **Red Zone (<50%):**
- What this means: Critical issue; impacts North Star
- What we do: Stop all new work; focus on activation fixes
- Who decides: VP Product (escalation)

-----

## 🚨 Metric Red Flags

Watch for these warning signs:

### Gaming Signals

- [ ] Metric improves but customer satisfaction decreases
- [ ] Teams optimize for metric in ways that hurt other areas
- [ ] Metric movement doesn’t correlate with qualitative feedback
- [ ] Unusual spikes that can’t be explained by product changes

### Vanity Metric Indicators

- [ ] Metric always goes up (even when things are bad)
- [ ] No clear action emerges from metric changes
- [ ] Leadership loves it but teams don’t use it
- [ ] Can’t explain causation, only correlation

### Metric Fatigue Symptoms

- [ ] More than 10 metrics per team
- [ ] Metrics haven’t been reviewed in 6+ months
- [ ] No one can explain why we track certain metrics
- [ ] Dashboards are ignored in meetings

-----

## 🔄 Metric Evolution Log

Track major changes to your metrics framework:

|Date |Change |Reason |Impact |Owner |
|------|--------------|-------------------|---------------|-------------|
|[Date]|[What changed]|[Why we changed it]|[What happened]|[Who decided]|
| | | | | |

**Example:**

|Date |Change |Reason |Impact |Owner |
|-------|---------------------------------------------------|-------------------------------------------------------|---------------------------------------------|----------|
|2024-Q2|Changed from “Total Users” to “Weekly Active Users”|Total users was vanity; didn’t predict retention |Better alignment; teams focused on engagement|CPO |
|2024-Q3|Added “Time to first value” as input metric |Realized activation timing matters more than completion|30% improvement in retention |Growth PM |
|2024-Q4|Sunset “NPS score” as primary metric |Lagging and not actionable; moved to quarterly survey |Freed team to focus on behavioral metrics |VP Product|

-----

## 📚 Metric Definitions Library

Maintain clear definitions for all metrics:

### [Metric Name 1]

**Definition:** [Precise formula or measurement method]

**Calculation:** [Numerator / Denominator × 100] or [Specific counting method]

**Data Source:** [Where the data comes from]

**Frequency:** [How often it’s calculated]

**Owner:** [Who’s responsible]

**Related Metrics:** [Metrics that influence or are influenced by this one]

**Example:**

\`\`\`
Weekly Active Users (WAU)

Definition: Unique count of users who complete at least one core action
within a rolling 7-day window.

Calculation: COUNT(DISTINCT user_id) WHERE action_type IN
('create_analysis', 'share_insight', 'export_data') AND
action_timestamp >= CURRENT_DATE - 7

Data Source: events.user_actions table

Frequency: Calculated daily, reported weekly

Owner: Growth Product Manager

Related Metrics:
- Influenced by: Activation Rate, Feature Adoption
- Influences: Monthly Recurring Revenue, Retention Rate
\`\`\`

-----

## 🎓 Metric Education

### For New Team Members

**Week 1 Onboarding:**

- [ ] Review metric framework document
- [ ] Attend weekly metric review
- [ ] Shadow metric owner for one review cycle

**Key Concepts to Understand:**

1. The difference between vanity and actionable metrics
1. How leading indicators predict lagging outcomes
1. Our North Star Metric and why we chose it
1. The 3-5 input metrics and how work connects to them

### Ongoing Learning

**Monthly “Metric Moments”:**

- 15-minute session on one metric
- Why it matters
- Recent trends
- How teams can influence it

**Quarterly Deep-Dives:**

- Full framework review
- Case studies of decisions driven by metrics
- Anti-patterns and what to avoid

-----

## ✅ Quick Reference: Good vs. Bad Metrics

### Actionable vs. Vanity

|❌ Vanity Metric |✅ Actionable Alternative |Why It’s Better |
|----------------------|---------------------------------|------------------------|
|Total users |Weekly/Monthly Active Users |Shows actual engagement |
|Page views |Pages per session or time to task|Shows value realization |
|Downloads |Daily Active Users (DAU) |Shows actual usage |
|Email subscribers |Email click-through rate |Shows engagement quality|
|Social media followers|Conversion rate from social |Shows business impact |
|Server uptime % |Error rate affecting users |Shows user impact |

### Leading vs. Lagging

|📊 Lagging (Results) |⚡ Leading (Predictors) |Time Advantage|
|---------------------|------------------------------|--------------|
|Revenue |Qualified pipeline |30-60 days |
|Churn rate |Product engagement score |14-30 days |
|Customer satisfaction|Support ticket resolution time|7-14 days |
|Market share |New user acquisition rate |60-90 days |
|Retention rate |Activation rate |30-60 days |

-----

## 🔧 Tools & Resources

### Recommended Reading

- “Lean Analytics” by Alistair Croll & Benjamin Yoskovitz
- “The Lean Startup” by Eric Ries (Chapter on Vanity Metrics)
- Amplitude’s “North Star Playbook”
- John Cutler’s work on product metrics

### Dashboard Tools

- Amplitude (product analytics)
- Mixpanel (behavioral analytics)
- Looker/Tableau (business intelligence)
- Mode Analytics (SQL-based analysis)

### Metric Templates

- North Star Metric Canvas
- Metric Definition Template
- Weekly Metric Review Template
- Quarterly Metric Audit Checklist

-----

## References

- North Star: \`../../2.1-Strategy/2.1.6-North-Star/README.md\`
- OKR Framework: \`../../2.1-Strategy/2.1.2-OKR/README.md\`
- Roadmap: \`../../2.1-Strategy/2.1.3-Roadmap/README.md\`
- Self-Reflection: \`../2.9.2-Self-Reflection/README.md\``;
