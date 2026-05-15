export const siteConfig = {
  name: "Keiryan Wilson",
  shortName: "KW",
  tagline: "Building things. Writing things. Living somewhere in between.",
  description:
    "Technical operator, AI ops leader, and writer. Building things, writing things, living somewhere in between.",
  email: "keiryanwilson@gmail.com",
  location: "Leland, NC",
  social: {
    github: "https://github.com/keiryan",
    linkedin: "https://www.linkedin.com/in/keiryan/",
    instagram: "https://www.instagram.com/keiryans",
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

export type PhotoSeries = "Misc" | "Colombia" | "Spider" | "Peru";

export type Photo = {
  src: string;
  alt: string;
  series: PhotoSeries;
  title?: string;
  caption?: string;
  story?: string;
  featured?: boolean;
};

export const photos: Photo[] = [
  { src: "/photos/misc-dsc04006.png", alt: "Misc photo 01", series: "Misc", title: "Still frame", featured: true },
  { src: "/photos/colombia-messcam-4794.png", alt: "Colombia photo 01", series: "Colombia" },
  {
    src: "/photos/spider-img-6545.png",
    alt: "A momma wolf spider photographed up close",
    series: "Spider",
    title: "Momma Wolfy",
    story: "A momma wolf spider I saw and just _had_ to photograph. This shoot required a focus merge to be able to get so close and still have the entire spider in focus. It was probably the most difficult photoshoot I have done to date. Shot on my iPhone 13 Pro Max.",
  },
  {
    src: "/photos/misc-nicole.png",
    alt: "Nicole flexing her biceps at Kure Beach",
    series: "Misc",
    title: "Nicole",
    caption: "Ocean light",
    story: "My friend Nicole flexing her biceps at Kure Beach.",
  },
  { src: "/photos/misc-img-1808.png", alt: "Misc photo 02", series: "Misc" },
  {
    src: "/photos/peru-img-1130.png",
    alt: "Justin and Keiryan before leaving an Airbnb in Cusco, Peru",
    series: "Peru",
    title: "Twinergy",
    story: "Justin (one of my close friends) and I just before we left our 2nd Airbnb in Cusco, Peru.",
    featured: true,
  },
  { src: "/photos/misc-dsc07075.png", alt: "Portrait of a man wearing sunglasses near a bridge", series: "Misc", title: "In motion" },
  { src: "/photos/spider-img-6569.png", alt: "Spider photo 02", series: "Spider" },
  { src: "/photos/misc-img-1823.png", alt: "Misc photo 03", series: "Misc" },
  { src: "/photos/colombia-messcam-4797.png", alt: "Colombia photo 02", series: "Colombia" },
  { src: "/photos/misc-img-9755.png", alt: "Misc photo 04", series: "Misc" },
  {
    src: "/photos/misc-img-9751.png",
    alt: "Plane cutting through heavy clouds",
    series: "Misc",
    title: "Through the clouds",
    story: "Shot on iPhone 15 Pro Max.",
  },
  {
    src: "/photos/misc-img-0312.png",
    alt: "Portrait of Keiryan smiling outdoors with a backpack",
    series: "Misc",
    title: "Somewhere green",
    story: "Standing in Miami with Justin just before boarding our flights to Peru.",
  },
  { src: "/photos/spider-img-6582.png", alt: "Spider photo 03", series: "Spider" },
  {
    src: "/photos/peru-img-0133.png",
    alt: "Sunset over the beach in Peru",
    series: "Peru",
    title: "Sunset at La Playa",
    story: "A gorgeous burn of a sunset at the beach in Peru.",
  },
  { src: "/photos/misc-dsc07909.png", alt: "Misc photo 05", series: "Misc" },
  { src: "/photos/spider-img-6621.png", alt: "Spider photo 04", series: "Spider" },
  {
    src: "/photos/misc-ben-2.png",
    alt: "A campfire with friends in Georgia",
    series: "Misc",
    title: "A fire with friends",
    story: "A scene from a campfire with friends in Georgia.",
  },
  {
    src: "/photos/misc-img-9612.png",
    alt: "Night street scene outside a storefront in Los Angeles",
    series: "Misc",
    title: "A night in LA",
    story: "LA is often painted as very glamorous in Hollywood. I guess that’s because it is Hollywood. The reality off-screen is very different, however, and a night spent walking through LA will quickly teach you that.",
  },
  { src: "/photos/misc-img-4418.png", alt: "Misc photo 07", series: "Misc" },
  { src: "/photos/misc-img-0226.png", alt: "Misc photo 08", series: "Misc" },
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
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
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
    excerpt: "A thread from Legos to code, and why I wanted a home base on the internet.",
    image: {
      src: "/writing/cusco-window-headline.jpg",
      alt: "Keiryan standing in front of a wide window overlooking Cusco.",
      caption: "Standing in an Airbnb in Cusco, Peru, getting ready for the morning.",
    },
    content: `I have been a builder for as long as I can remember.

Long before I knew what code, systems, interfaces, or the internet were, I had Legos. My fascination with building things probably started with my first Lego set, which, if I remember correctly, was a firetruck.

![A young Keiryan holding a Lego fire truck build.](/writing/lego-fire-truck.jpg "Little me with my first Lego set. A firetruck.")

At first, I loved following the instructions. There was something satisfying about opening the manual, finding the right pieces, and turning that chaotic pile of plastic bricks into the thing on the box. But the part I loved most came after that.

Once I finished building the set, I would take it apart.

Then I would try to build something else with the same pieces. A car. A house. A transformer. Whatever I could imagine from what I had in front of me.

That became the game for me. Figuring out what else was possible with the tools I had at my disposal. I guess this is where my scrappiness was born.

As I got more Lego sets, that fascination only grew. Then I discovered Lego Creationary, which felt like someone had turned that instinct into an actual game. You drew a card, saw what you had to build, and then had to figure out how to make it real with the pieces available to you.

I loved that game. I played it with whoever I could, which was mostly my little sister at the time. But I would also play it by myself just to get better at building things, faster and more creatively.

Around 2012, Minecraft entered the picture for me.

Minecraft felt like Legos in an infinite space.

That changed everything. Suddenly, building was not limited to the pieces in a box. I could make worlds, structures, systems, hidden rooms, redstone contraptions, and whatever else I could figure out how to create. And, naturally, once I spent enough time building inside the game, I started wondering how the game itself worked. Can you see the insatiable curiosity?

That curiosity led me to modding.

I wanted to customize Minecraft. I wanted to change mobs, build my own mods, and understand how people were making the things I loved playing with. Somewhere in that curiosity, I had a thought that probably changed the direction of my life:

If I could learn to code, I could build more than what the game already gave me.

So I started learning.

When I was homeschooled for part of middle school, I was supposed to be focused on my regular schoolwork. Instead, I kept finding myself sneaking away to learn Python. Grok Academy was the website that first exposed me. I became obsessed with the idea that I could write in a language computers understood. That I could type something, run it, break it, fix it, and slowly make the machine do what I wanted.

![A Grok Academy Python lesson showing a passed beginner programming exercise.](/writing/grok-academy-python.png "One of the Grok Academy Python lessons where I learned the basics.")

At the time, I was absolutely not supposed to have much computer access. My parents were careful about how much time we spent on computers, which, honestly, was probably fair. The internet is a scary place for kids!

But I found an old laptop in the garage. Thick. The thing must have been like 5 pounds. As far as computers go, it's fair to say this thing was prehistoric. Battery life was about an hour.

I installed a Python IDE on a thumb drive, snuck the laptop out of my closet, and started writing code in the basement after everyone else had gone to sleep.

The first real thing I remember building was a terminal game based on a doll family my sister and I had invented. I wanted it to feel like some kind of hacker game. The code was terrible. Truly tragic. It was literally a pile of switch statements, broken logic, and oddly named variables.

But it worked enough to make me feel like I'd truly created something.

That was the first time I remember feeling like code could be a building block. (just like my legos from long before) Not just technical or mathematical.

It taught me how to debug. How to research. How to read documentation. How to get stuck, stay with it, and eventually find a way through.

Those basement nights became the quiet foundation for the kind of builder I kept finding my way back to.

That early love of coding sat in the background for a while. I worked at Apple retail for almost 2 years, which might seem unrelated, but it taught me more than I realized at the time. Communication. Empathy. Listening. Handling ambiguity. Explaining technical things to people without making them feel small. Staying calm when someone is frustrated and trying to understand what they actually need.

I loved aspects of that work, and for a while, I really wanted to stay with Apple. But when I moved to Wilmington, North Carolina, there was no Apple retail store nearby. I knew I had to make a shift.

So I came back to coding.

Around 2021, I revisited the thing I had loved years earlier. This time, I found a mentor named Cristian Florea, a Romanian developer who helped introduce me to front-end development. That became the beginning of my tech career.

It was also a brutal time to try to break into tech.

Companies were laying people off. The market was crowded. The path I had imagined, where I would study hard, build a portfolio, and land a development job, turned out to be much harder than I expected.

It took months and months of trying. Then more months after that.

But eventually, after about a year and a half, I landed my first development role.

Since then, my work has moved through front-end development, AI operations, systems, contributor onboarding, identity infrastructure, internal tooling, and the kind of operational problem-solving that sits between people, software, and process.

The tools have changed a lot.

Legos became Minecraft. Minecraft became Python. Python became JavaScript, React, Next.js, and whatever else the problem requires.

But the instinct is the same.

Take the pieces in front of me. Understand how they work. Build the thing the instructions describe. Then take it apart and ask what else it could become.

That is part of why I built this site.

I wanted a place on the internet that felt like mine. A home base.

A place to write. A place to document what I am learning. A place to share the things I am building and the questions I am chasing. A place to connect the different parts of my work that do not always fit neatly into one category.

I care about front-end development. I care about AI systems. I care about operations, infrastructure, writing, teaching, tooling, and the way good systems can make people's work feel lighter.

For a long time, those interests felt scattered. This site is an attempt to gather them into one place. We'll see how that works out 😂

It won't be perfect. I want it to feel alive. Like something I can keep taking apart and rebuilding as I learn more. Because that has always been the point.

Build the thing. Learn from it. Break it open. See what else it can become.`,
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
