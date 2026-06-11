export const siteConfig = {
  name: "Keiryan Wilson",
  shortName: "KW",
  tagline: "Build the thing. Break it open. See what else it can become.",
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

export const currently = [
  { label: "Playing", text: "Fortnite (3,500 hours and counting) and Overwatch.", to: "/hobbies" },
  { label: "Building", text: "This site, and resisting a fifth \"final\" PC build.", to: "/writing/hardware-obsession" },
  { label: "Shooting", text: "Macro spiders, travel, and the occasional handstand.", to: "/photos" },
  { label: "Listening", text: "Whatever people send me. There's a form for that.", to: "/hobbies" },
  { label: "Working on", text: "Wrapping an AI ops contract at G2i. Open to what's next.", to: "/work" },
];

export type PhotoCamera = "iPhone" | "Sony";

export const cameraLabels: Record<PhotoCamera, string> = {
  iPhone: "Shot on iPhone",
  Sony: "Shot on Sony",
};

export type Photo = {
  src: string;
  alt: string;
  camera: PhotoCamera;
  location: string;
  title?: string;
  caption?: string;
  story?: string;
  instagram?: string;
  featured?: boolean;
};

export const photos: Photo[] = [
  {
    src: "/photos/misc-dsc04006.png",
    alt: "Ripples on dark water catching low sunlight",
    camera: "Sony",
    location: "Leland, NC",
    title: "An inviting lake.",
    story: "The lake just behind my house on a breezy day.",
    instagram: "https://www.instagram.com/p/DBysdFoO3MT/",
    featured: true,
  },
  {
    src: "/photos/colombia-messcam-4794.png",
    alt: "A woman with curly hair smiling on a high-rise balcony, mountains hazy behind her",
    camera: "Sony",
    location: "Medellin, Colombia",
    title: "A foreign friend.",
    story: "One of the many beautiful people I met in Colombia. Turned out to be an impromptu photoshoot.",
    instagram: "https://www.instagram.com/p/DUzEsdQDK-U/?img_index=1",
  },
  {
    src: "/photos/spider-img-6545.png",
    alt: "A momma wolf spider photographed up close",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Momma Wolfy",
    story: "A momma wolf spider I saw and just _had_ to photograph. This shoot required a focus merge to be able to get so close and still have the entire spider in focus. It was probably the most difficult photoshoot I have done to date. Shot on my iPhone 13 Pro Max.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/misc-nicole.png",
    alt: "Nicole flexing her biceps at Kure Beach",
    camera: "Sony",
    location: "Kure Beach, NC",
    title: "Nicole",
    caption: "Ocean light",
    story: "My friend Nicole flexing her biceps at Kure Beach.",
    instagram: "https://www.instagram.com/reel/C_rZMf-NWWL/",
  },
  {
    src: "/photos/misc-img-1808.png",
    alt: "A handstand on parallette bars in a driveway, trees in the background",
    camera: "Sony",
    location: "Leland, NC",
    title: "Calisthenics & I.",
    story: "One of my many fitness goals is a handstand pushup. Haven’t quite got it yet, but I am always trying for it.",
  },
  {
    src: "/photos/peru-img-1130.png",
    alt: "Justin and Keiryan before leaving an Airbnb in Cusco, Peru",
    camera: "Sony",
    location: "Cusco, Peru",
    title: "Twinergy",
    story: "Justin (one of my close friends) and I just before we left our 2nd Airbnb in Cusco, Peru.",
    instagram: "https://www.instagram.com/p/DB_3ZYEygVh/",
    featured: true,
  },
  {
    src: "/photos/misc-dsc07075.png",
    alt: "Portrait of a man wearing sunglasses near a bridge",
    camera: "Sony",
    location: "Miami, FL",
    title: "In motion",
    story: "A guy Justin and I encountered in our travels in Miami. His name was “Nick”. I thought his vibe was such an aesthetic I had to ask him for a photoshoot. Very impromptu.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/spider-img-6569.png",
    alt: "A wolf spider in the grass, her back covered in spiderlings",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Momma Wolfy II",
    story: "Another shot of mama bear holding her babies.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/misc-img-1823.png",
    alt: "A handstand on parallettes in the middle of a baseball diamond",
    camera: "Sony",
    location: "Leland, NC",
    title: "Calisthenics & I Pt. II",
    story: "One of my many fitness goals is a handstand pushup. Haven’t quite got it yet, but I am always trying for it.",
  },
  {
    src: "/photos/colombia-messcam-4797.png",
    alt: "A woman in a blue dress dancing on a balcony above a sprawling city skyline",
    camera: "Sony",
    location: "Medellin, Colombia",
    title: "A foreign friend II",
    story: "One of the many beautiful people I met in Colombia. Turned out to be an impromptu photoshoot.",
    instagram: "https://www.instagram.com/p/DUzEsdQDK-U/",
  },
  {
    src: "/photos/misc-img-9755.png",
    alt: "A jet crossing an overcast sky, contrail trailing behind",
    camera: "iPhone",
    location: "Leland, NC",
    title: "On Cloud 9",
    story: "A plane traveling through the clouds over my house.",
    instagram: "https://www.instagram.com/p/C-A4BSLOXxa/",
  },
  {
    src: "/photos/misc-img-9751.png",
    alt: "Plane cutting through heavy clouds",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Through the clouds",
    story: "Shot on iPhone 15 Pro Max.",
    instagram: "https://www.instagram.com/p/C-A4BSLOXxa/",
  },
  {
    src: "/photos/misc-img-0312.png",
    alt: "Portrait of Keiryan smiling outdoors with a backpack",
    camera: "Sony",
    location: "Miami, FL",
    title: "Miami just before Peru.",
    story: "Standing in Miami with Justin just before boarding our flights to Peru.",
  },
  {
    src: "/photos/spider-img-6582.png",
    alt: "Macro close-up of a wolf spider's face, spiderlings riding on her back",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Mama Wolfy III",
    story: "Another shot of mama bear holding her babies.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/peru-img-0133.png",
    alt: "Sunset over the beach in Peru",
    camera: "Sony",
    location: "Lima, Peru",
    title: "Sunset at La Playa",
    story: "A gorgeous burn of a sunset at the beach in Peru.",
  },
  {
    src: "/photos/misc-dsc07909.png",
    alt: "Black-and-white street portrait of a man resting on marble steps outside a storefront",
    camera: "Sony",
    location: "Lima, Peru",
    title: "The streets of Peru.",
    story: "The reality of the streets of Lima, Peru.",
    instagram: "https://www.instagram.com/p/DCKUlSiSBD2/",
  },
  {
    src: "/photos/spider-img-6621.png",
    alt: "A wolf spider facing the camera head-on, eyes in sharp focus",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Mama Wolfy IV",
    story: "Another shot of mama bear holding her babies.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/misc-ben-2.png",
    alt: "A campfire with friends in Georgia",
    camera: "Sony",
    location: "Dallas, GA",
    title: "A fire with friends",
    story: "A scene from a campfire with friends in Georgia.",
    instagram: "https://www.instagram.com/p/DCCbFdkvzN0/",
  },
  {
    src: "/photos/misc-img-9612.png",
    alt: "Night street scene outside a storefront in Los Angeles",
    camera: "iPhone",
    location: "Los Angeles, CA",
    title: "A night in LA",
    story: "LA is often painted as very glamorous in Hollywood. I guess that's because it is Hollywood. The reality off-screen is very different, however, and a night spent walking through LA will quickly teach you that.",
    instagram: "https://www.instagram.com/p/DCFIbrIyd_l/",
  },
  {
    src: "/photos/misc-img-4418.png",
    alt: "A smiling man with FPV drone goggles pushed up on his forehead, green field behind him",
    camera: "Sony",
    location: "Leland, NC",
    title: "Me flying FPV.",
    story: "BTS of me flying my drone. One of my many hobbies.",
  },
  {
    src: "/photos/misc-img-0226.png",
    alt: "Golden wild grass catching the afternoon sun",
    camera: "iPhone",
    location: "Los Angeles, CA",
    title: "Sunset in LA",
    story: "Some plants right outside of a stadium in LA.",
  },
];

export type WorkRole = {
  company: string;
  title: string;
  type?: string;
  start: string;
  end: string;
  location: string;
  bullets: { text: string }[];
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
      { text: "Designed and executed an internal human data pipeline pilot that produced actionable operational insights, validating feasibility and directly supporting early client acquisition for simulated-environment AI research." },
      { text: "Built core AI operations from inception through scale, standing up foundational systems and processes to support rapid growth from 0 to 200 contributors." },
      { text: "Owned operational execution after client acquisition, setting up the infrastructure, workflows, and tooling required for teams building simulated software environments used in reinforcement learning research." },
      { text: "Architected secure identity and access infrastructure using Okta, implementing SSO, SAML, and SCIM-based provisioning to enforce one-click onboarding and offboarding across all services." },
      { text: "Researched, selected, deployed, and integrated enterprise SaaS tooling (Slack, Google Workspace, Linear, Cursor, OnePassword), tying systems together through internal automations to reduce manual ops overhead." },
      { text: "Managed day-to-day AI operations spanning account provisioning, access controls, service reliability, vendor negotiations, and enterprise subscription upgrades in a fast-moving research environment." },
      { text: "Partnered with IT, engineering, and research stakeholders to align AI operations with security, compliance, and human data delivery requirements." },
    ],
  },
  {
    company: "Mercor",
    title: "Operations Manager",
    start: "Nov 2024",
    end: "Apr 2025",
    location: "Remote",
    bullets: [
      { text: "Spearheaded sourcing & onboarding of 600+ domain experts in <7 days, enabling client to launch their next-gen AI model on schedule." },
      { text: "Co-led AI training programs that directly supported $80M+ in ARR, managing delivery pipelines and execution across multiple high-complexity domains." },
      { text: "Shaped vendor strategy alongside C-suite and represented the company in evaluations with a trillion-dollar partner, securing a $40M ARR engagement." },
      { text: "Designed human-in-the-loop QA pipelines that increased dataset accuracy from 90% to 98%, reducing retraining cycles by two weeks." },
      { text: "Achieved 100% NPS, driving repeat engagement and earning client acknowledgment for exceptional operational leadership." },
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
      { text: "Executed 40+ rubric-based LLM evaluation tasks per week, performing A/B response comparisons under strict week-long sprint SLAs." },
      { text: "Identified and documented critical model failure patterns and edge cases, crafting feedback that informed the client's next AI training iteration." },
      { text: "Partnered with the project manager to escalate issues and deliver polished QA deliverables on schedule." },
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
      { text: "Led the complete front-end lifecycle for a Fortune 500 client, delivering accessible, responsive desktop and mobile web applications." },
      { text: "Implemented ADA-compliant code aligning deliverables with modern standards." },
      { text: "Redesigned legacy webpages into engaging, modern interfaces that improved usability and engagement." },
      { text: "Worked closely with UX designers and backend engineers to ensure seamless functionality." },
    ],
  },
  {
    company: "Developer PRO",
    title: "React Developer",
    start: "Aug 2021",
    end: "Mar 2023",
    location: "Leland, NC",
    bullets: [
      { text: "Led migration of legacy React codebases to containerized architectures using Docker, improving scalability and deployment efficiency." },
      { text: "Mentored junior developers and refined code review processes to maintain high-quality, maintainable code." },
      { text: "Developed data-driven applications using Next.js and Chart.js, boosting user engagement through interactive visualizations." },
      { text: "Transformed complex design specs into scalable, accessible web apps that met WCAG standards across browsers." },
    ],
  },
  {
    company: "Apple Inc.",
    title: "Technical Specialist & RCC Advisor",
    start: "Nov 2020",
    end: "Jul 2021",
    location: "Remote / Greensboro, NC",
    bullets: [
      { text: "Provided remote support in Retail At Home, resolving technical issues and turning detractors into promoters." },
      { text: "Simplified complex Apple ecosystem concepts to empower users and increase product confidence." },
      { text: "Applied strong communication and problem-solving skills to rebuild strained customer relationships." },
    ],
  },
  {
    company: "Apple Inc.",
    title: "Specialist",
    start: "Nov 2019",
    end: "Nov 2020",
    location: "Greensboro, NC",
    bullets: [
      { text: "Guided customers in identifying their needs to recommend the right Apple products, deepening brand connection." },
      { text: "Consistently exceeded performance targets through adaptability and consultative selling." },
      { text: "Created workflow efficiencies using Apple Shortcuts that improved team-wide customer experience strategies." },
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
    excerpt: "A new contributor signs at 9am. Are they working by lunch? That question is the whole job.",
    content: `When people imagine an AI company, they imagine the research. GPUs, loss curves, the occasional dramatic whiteboard. I've spent the last few years inside two of these companies, and I can tell you where the drama actually lives: provisioning.

Here is the test I use. A new contributor signs their agreement at 9am. Are they working by lunch?

At most companies the honest answer is "by Thursday." Their manager has to remember every tool the team uses, file six access requests, chase down two of them, and apologize in Slack about a third. Multiply that by a few hundred contributors and you are not running a research lab anymore. You are running a very slow ticketing system with a research lab attached.

That gap between Thursday and lunch is the job. At G2i I built the operations layer from zero while we grew from 0 to 200 contributors. Okta sat at the center, with SSO and SCIM provisioning wired into everything, so one click onboarded a person into Slack, Google Workspace, Linear, Cursor, and 1Password. One click offboarded them too, which matters more than people think. Security reviews stop being archaeology when access has a single source of truth.

At Mercor the same instinct showed up at a different scale. We sourced and onboarded 600+ domain experts in under a week so a client could launch their next-generation model on schedule. Nothing about that week was glamorous. It worked because the boring machinery underneath it had been built to absorb exactly that kind of load: accounts, access, QA loops, escalation paths.

The QA loops deserve their own mention. Human-in-the-loop pipelines we designed there took dataset accuracy from 90% to 98%, which sounds like a rounding error until you realize it cut two weeks of retraining out of the cycle. The model people got the credit. The pipeline made it possible. I have made my peace with that ordering. Mostly.

This is the layer nobody talks about because when it works, it's invisible. Nobody writes a launch tweet about offboarding. But every AI team that feels fast is standing on someone's identity infrastructure, and every team that feels slow is drowning in access requests it has stopped noticing.

If you're standing up one of these teams, build the boring layer first. You will never get a better excuse than day one.`,
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

I loved following the instruction manual. There was something satisfying about turning that chaotic pile of plastic bricks into the thing on the box. But once I'd built the set, I would take it apart and challenge myself to build whatever else I could think of with the pieces I had. Instead of just a fire truck, I'd try to build a car, or a house, or a transformer, whatever I could imagine from what was in front of me. That became the game: figuring out what else was possible with the pieces I had.

The fascination only grew as I got more Lego sets, and then I discovered Lego Creationary, which felt like someone had turned that exact instinct into a board game. You drew a card and had to figure out how to build whatever was on it with the pieces available to you. I absolutely adored that game. I played it with whoever I could, which was mostly my little sister at the time, and when nobody would play, I'd play it solo just to get better at building things faster and more creatively.

Then Minecraft entered the picture, and Minecraft was basically Legos in an infinite space. Suddenly building wasn't limited to the pieces in a box. I could make worlds, structures, systems, hidden rooms, redstone contraptions, and whatever else I could figure out how to create. And once I'd spent enough time building inside the game, I started wondering how the game itself worked.

That led me to mods. I wanted to change mobs, build my own mods, and understand how people were making the things I loved playing with. Somewhere in there I had a thought that probably changed the direction of my life: if I could learn to code, I could build more than what the game already gave me.

I was homeschooled for sixth grade, and when I was supposed to be completing my studies, I kept sneaking off to learn Python on Grok Academy instead. I was in love with the idea that I could write in a language computers understood. I could type something, run it, break it, fix it, and slowly make the machine do what I wanted.

![A Grok Academy Python lesson showing a passed beginner programming exercise.](/writing/grok-academy-python.png "One of the Grok Academy Python lessons where I learned the basics.")

There was one problem: I wasn't allowed to have a computer. My parents were careful about how much computer time we got, which, honestly, was probably fair. The internet is a scary place for kids!

But I found a really old laptop in the garage. Thick, prehistoric, the kind of thing that must have weighed five pounds and got about an hour of battery life. I installed a Python IDE on a thumb drive, snuck the laptop out of the garage, and since my room was in the basement, I'd wait until everyone else was asleep and write code at night.

The first real thing I remember building was a terminal game based on a doll family my sister and I had invented. I wanted it to feel like some kind of hacker game. The code was absolutely terrible, just a pile of switch statements, broken logic, and oddly named variables, but it worked enough to make me feel like I'd actually created something. Code turned out to be a building block, just like my Legos from long before. And building that awful little game taught me how to debug, how to research, how to read documentation, and how to get stuck and stay with it until I found a way through.

That love of coding sat on the back burner for years. I worked at Apple retail for almost two years, which might seem unrelated, but it taught me more than I realized at the time: communication, empathy, listening, explaining technical things to people without making them feel small, staying calm when someone is frustrated and figuring out what they actually need.

I really, really wanted to stay with Apple. But when I moved to Wilmington, North Carolina, there was no Apple retail store anywhere nearby, and I knew I had to jump into something different.

So in 2021, I came back to coding. I found a mentor named Cristian Florea, a Romanian developer who introduced me to front-end development, and that was the beginning of my tech career.

It was also maybe the worst time in history to try to break into tech. The market was collapsing, companies were laying people off left and right, and my hopes and dreams of jumping straight into a development job kind of shattered. It took months and months of trying, then more months after that. After about a year and a half, I finally landed my first development role.

Since then the work has moved through front-end development, AI operations, identity infrastructure, internal tooling, and the kind of operational problem-solving that sits between people, software, and process. The tools keep changing. Legos became Minecraft, Minecraft became Python, Python became JavaScript and React and whatever else the problem requires. But the instinct hasn't changed: take the pieces in front of me, understand how they work, build the thing the instructions describe, then take it apart and see what else it could become.

That's why I built this site. I wanted a place on the internet that felt like mine. A home base where I can write things down, document what I'm learning, and connect the parts of my work that don't always fit neatly into one category. For a long time those interests felt scattered. This site is an attempt to gather them into one place. We'll see how that works out 😂

It won't be perfect, and I don't want it to be. I want it to feel alive, like something I can keep taking apart and rebuilding as I learn more. That has always been the point.

Build the thing. Learn from it. Break it open. See what else it can become.

::lego And then do it again.`,
  },
  {
    slug: "hardware-obsession",
    title: "The Never-Ending PC Build",
    date: "2026-03-18",
    category: "Tech",
    excerpt: "Four \"final\" builds in, still on a 2018 GPU, and weirdly at peace with it.",
    content: `My PC has been "done" four times now. I can prove it, because I still have the parts lists.

The current build, the fourth final one, is an i7-8700, an RTX 2080, 32GB of RAM, and a terabyte of storage. If you know hardware, you just winced. That is a 2018-class machine, and every spec sheet on the internet agrees I should have replaced it years ago.

Here's the thing though: I have 3,500 hours in Fortnite, and it has never once been the PC's fault that I lost.

Every year or so the itch comes back. I open the parts sites, spec out a full replacement, watch the total climb past what I'd actually pay, and start the real exercise, which is not shopping. It's being honest. What do I actually play? Competitive FPS games that are built to run on everything. What do I actually do? Code, browsers, too many Slack workspaces. Where is the actual bottleneck? Reader, it is not the GPU.

So the full rebuild collapses into one targeted upgrade, or none at all, and the 2080 lives another year.

I used to think this cycle meant I was bad at the hobby. I've come around to thinking the cycle _is_ the hobby. The research, the benchmarks, the forum threads from people whose use case is almost-but-not-quite mine, the moment you catch yourself justifying a purchase with a workload you do twice a year. Every loop through it sharpens the same skill: making decisions under constraint, with imperfect information and a real budget.

That skill turns out to be most of my actual job. Vendor evaluations, tooling decisions, build-versus-buy: it's all the parts list exercise wearing a collared shirt. Hardware is just the version with RGB and an honest feedback loop, because when you choose wrong, your frames drop where you can see them.

The 2080 will need to be replaced eventually. Something will come out that I genuinely can't run, the fifth final build will happen, and it will be glorious for about a month before the first upgrade thought arrives.

I already know what the post about it will be called.`,
  },
];
