export const siteConfig = {
  name: "Keiryan Wilson",
  shortName: "KW",
  tagline: "Building things. Writing things. Living somewhere in between.",
  description:
    "Technical operator, AI ops leader, and writer. Building things, writing things, living somewhere in between.",
  email: "keiryanwilson@gmail.com",
  phone: "(404) 360-3613",
  location: "Leland, NC",
  social: {
    github: "#",
    linkedin: "#",
  },
};

export const navLinks = [
  { href: "/writing", label: "Writing" },
  { href: "/photos", label: "Photos" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export const hobbies = [
  { emoji: "🎮", label: "PC Gaming", note: "FPS games, hardware tuning, and the eternal quest for higher framerates." },
  { emoji: "🛠️", label: "Building & Tinkering", note: "From code to hardware. If it can be built, it's interesting." },
  { emoji: "✍️", label: "Writing", note: "Trying to get better at saying things clearly." },
  { emoji: "🎧", label: "Music", note: "Always have something going. Genre varies wildly." },
  { emoji: "🤖", label: "AI & Ops", note: "The day job that doesn't feel like one." },
];

export type WorkRole = {
  company: string;
  title: string;
  type?: string;
  start: string;
  end: string;
  location: string;
  bullets: { label: string; text: string }[];
};

export const workHistory: WorkRole[] = [
  {
    company: "G2i",
    title: "AI Operations Lead",
    type: "Contract",
    start: "Aug 2025",
    end: "Feb 2026",
    location: "Remote",
    bullets: [
      { label: "Human Data Pipeline Pilot", text: "Designed and executed an internal human data pipeline pilot that produced actionable operational insights, validating feasibility and directly supporting early client acquisition for simulated-environment AI research." },
      { label: "Zero-to-One Execution", text: "Built core AI operations from inception through scale, standing up foundational systems and processes to support rapid growth from 0 to 200 contributors." },
      { label: "AI Operations Enablement", text: "Owned operational execution after client acquisition, setting up the infrastructure, workflows, and tooling required for teams building simulated software environments used in reinforcement learning research." },
      { label: "Identity & Access Management", text: "Architected secure identity and access infrastructure using Okta, implementing SSO, SAML, and SCIM-based provisioning to enforce one-click onboarding and offboarding across all services." },
      { label: "Enterprise Tooling & Automations", text: "Researched, selected, deployed, and integrated enterprise SaaS tooling — Slack, Google Workspace, Linear, Cursor, OnePassword — tying systems together through internal automations to reduce manual ops overhead." },
      { label: "Operational Scaling", text: "Managed day-to-day AI operations spanning account provisioning, access controls, service reliability, vendor negotiations, and enterprise subscription upgrades in a fast-moving research environment." },
      { label: "Cross-Functional Partnership", text: "Partnered with IT, engineering, and research stakeholders to align AI operations with security, compliance, and human data delivery requirements." },
    ],
  },
  {
    company: "Mercor",
    title: "Operations Manager",
    start: "Nov 2024",
    end: "Apr 2025",
    location: "Remote",
    bullets: [
      { label: "Largest AI Training Project", text: "Spearheaded sourcing & onboarding of 600+ domain experts in <7 days, enabling client to launch their next-gen AI model on schedule." },
      { label: "Revenue-Driving Execution", text: "Co-led AI training programs that directly supported $80M+ in ARR, managing delivery pipelines and execution across multiple high-complexity domains." },
      { label: "Strategic Vendor Leadership", text: "Shaped vendor strategy alongside C-suite and represented the company in evaluations with a trillion-dollar partner — securing a $40M ARR engagement." },
      { label: "Operational Excellence", text: "Designed human-in-the-loop QA pipelines that increased dataset accuracy from 90% to 98%, reducing retraining cycles by two weeks." },
      { label: "Exceptional Impact", text: "Achieved 100% NPS — driving repeat engagement and earning client acknowledgment for exceptional operational leadership." },
    ],
  },
  {
    company: "Mercor",
    title: "QA Engineer",
    type: "Contract",
    start: "Aug 2024",
    end: "Oct 2024",
    location: "Leland, NC",
    bullets: [
      { label: "High-Volume QA Sprints", text: "Executed 40+ rubric-based LLM evaluation tasks per week, performing A/B response comparisons under strict week-long sprint SLAs." },
      { label: "Edge-Case Discovery", text: "Identified and documented critical model failure patterns and edge cases, crafting feedback that informed the client's next AI training iteration." },
      { label: "Cross-Functional Handoff", text: "Partnered with the project manager to escalate issues and deliver polished QA deliverables on schedule." },
    ],
  },
  {
    company: "Thatcher Technology Group",
    title: "Front End Lead",
    type: "Contract",
    start: "Mar 2023",
    end: "Dec 2023",
    location: "Remote / Illinois",
    bullets: [
      { label: "Project Ownership", text: "Led the complete front-end lifecycle for a Fortune 500 client, delivering accessible, responsive desktop and mobile web applications." },
      { label: "Accessibility", text: "Implemented ADA-compliant code aligning deliverables with modern standards." },
      { label: "UI Modernization", text: "Redesigned legacy webpages into engaging, modern interfaces that improved usability and engagement." },
      { label: "Cross-Functional Collaboration", text: "Worked closely with UX designers and backend engineers to ensure seamless functionality." },
    ],
  },
  {
    company: "Developer PRO",
    title: "React Developer",
    start: "Aug 2021",
    end: "Mar 2023",
    location: "Leland, NC",
    bullets: [
      { label: "Modernization", text: "Led migration of legacy React codebases to containerized architectures using Docker, improving scalability and deployment efficiency." },
      { label: "Mentorship", text: "Mentored junior developers and refined code review processes to maintain high-quality, maintainable code." },
      { label: "Next.js Applications", text: "Developed data-driven applications using Next.js and Chart.js, boosting user engagement through interactive visualizations." },
      { label: "Design Implementation", text: "Transformed complex design specs into scalable, accessible web apps that met WCAG standards across browsers." },
    ],
  },
  {
    company: "Apple Inc.",
    title: "Technical Specialist & RCC Advisor",
    start: "Nov 2020",
    end: "Jul 2021",
    location: "Remote / Greensboro, NC",
    bullets: [
      { label: "Customer Advocacy", text: "Provided remote support in Retail At Home, resolving technical issues and turning detractors into promoters." },
      { label: "Technical Enablement", text: "Simplified complex Apple ecosystem concepts to empower users and increase product confidence." },
      { label: "Relationship Repair", text: "Applied strong communication and problem-solving skills to rebuild strained customer relationships." },
    ],
  },
  {
    company: "Apple Inc.",
    title: "Specialist",
    start: "Nov 2019",
    end: "Nov 2020",
    location: "Greensboro, NC",
    bullets: [
      { label: "Customer Engagement", text: "Guided customers in identifying their needs to recommend the right Apple products, deepening brand connection." },
      { label: "Sales Performance", text: "Consistently exceeded performance targets through adaptability and consultative selling." },
      { label: "Innovation", text: "Created workflow efficiencies using Apple Shortcuts that improved team-wide customer experience strategies." },
    ],
  },
];

export const skills = [
  { group: "AI Operations", items: ["Human Data Pipelines", "Contributor Onboarding", "QA / Evals", "Vendor Strategy", "Okta SSO/SAML/SCIM"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Accessibility (WCAG/ADA)", "Chart.js"] },
  { group: "Tooling", items: ["Slack", "Linear", "Google Workspace", "Cursor", "1Password", "Docker", "GitHub"] },
  { group: "Leadership", items: ["Cross-functional alignment", "Mentorship", "Stakeholder demos", "Zero-to-one execution"] },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: "Tech" | "Ops" | "Life" | "Reflections";
  excerpt: string;
  content: string; // markdown-lite
};

export const posts: Post[] = [
  {
    slug: "the-ops-layer",
    title: "The Ops Layer Nobody Talks About",
    date: "2026-04-15",
    category: "Ops",
    excerpt: "The unglamorous infrastructure that lets AI teams move at the speed everyone assumes they already do.",
    content: `When people picture an AI company, they picture model training. GPUs humming, researchers staring at loss curves, the whole cinematic version of the work.

## The part nobody photographs

What they don't picture is the ops layer underneath all of it: identity, access, tooling, contributor onboarding, vendor contracts, the thousand quiet decisions that determine whether the people doing the model work can actually do it.

I've spent the last few years building that layer at a couple of different companies, and I keep being surprised by how invisible it is — even to the people benefiting from it most.

## What it actually looks like

> If you can onboard a new contributor in five minutes instead of five days, you've already won.

A short, incomplete list of things that fall into "ops" at an AI company:

- Identity infrastructure — SSO, SAML, SCIM-based provisioning
- A consolidated tooling surface (Slack, Linear, Cursor, Workspace, 1Password)
- Contributor pipelines: sourcing, vetting, onboarding, offboarding
- QA loops that catch model and data failures *before* they reach the customer
- Vendor relationships that don't fall apart on the second renewal

None of that is glamorous. All of it determines whether the company ships.

## Why I keep writing about this

Because the people doing this work usually aren't the ones telling the story. And the story is worth telling.`,
  },
  {
    slug: "why-i-built-this",
    title: "Why I Built This Site",
    date: "2026-04-02",
    category: "Life",
    excerpt: "Notes on having a place on the internet that's actually yours.",
    content: `For years I had a LinkedIn, a resume PDF, and not much else. That worked, in the sense that it didn't fail. It also wasn't *anywhere*. It wasn't a place.

## A home, not a profile

A LinkedIn profile is a record. A resume is a document. Neither of them is a home. Neither of them lets you sit down and just *say something* without it being filed under the wrong heading.

I wanted somewhere that wasn't optimized for recruiters or algorithms. Somewhere I could write a paragraph about a PC build, a thought about ops infrastructure, and a half-finished essay about Apple retail teaching me more than any engineering job — and have all of those live next to each other without anyone being confused.

## Writing as thinking

> I don't really know what I think about something until I've written it down.

That's the other reason. Writing forces you to be specific. It catches the parts of an idea that were waving their arms confidently while having nothing underneath them. If I want to keep getting better at the work I do, I need a place to think out loud.

## The plan

Post when there's something to say. Don't post when there isn't. Treat it like a notebook more than a publication. Let it grow weird around the edges.`,
  },
  {
    slug: "hardware-obsession",
    title: "The Never-Ending PC Build",
    date: "2026-03-18",
    category: "Tech",
    excerpt: "Why building a PC is less about the rig and more about a small, repeatable lesson in patience.",
    content: `My PC has been "done" approximately four times. Each time I was sure. Each time I wasn't.

## The trap

The hobby looks like it's about hardware — GPUs, fans, custom cables, the satisfying click of a cleanly seated CPU. But after a few builds you realize the hardware is the lure. The actual hobby is decision-making under constraint.

## What it teaches

> You have a budget, a case, a use case, and a thousand opinions on the internet. Pick a rig.

Every upgrade is a tiny exercise in:

- Researching enough to be useful, not so much you stall
- Spending where it actually matters and not where it just feels good
- Being honest about what you'll really use the machine for
- Letting "good enough" be good enough, on purpose

It's the same skill I use at work. Just with more thermal paste.

## What I'm running right now

Whatever it is, by the time you read this it's already on a list of things I want to upgrade. That's the joke. That's also the point.`,
  },
];
