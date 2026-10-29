/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ------------------------------------------------------------------
   LINKS
   ------------------------------------------------------------------
   Every section below supports links. Fill one in and it appears on the
   site; leave it "" or [] and nothing renders. Nothing breaks either way.

     link    ""  →  nothing is clickable
             "/work/slug"        internal route (uses the router)
             "https://…"         external (opens in a new tab)
             "/certificates/x.pdf"  a file in /public

             On a card, this makes the WHOLE card clickable.
             On an award or interest row, the whole row.

     links   []  →  no link row
             [{ label: "Watch the clip", href: "https://…" }]

             A row of one or more named links at the bottom of the item.
             Use this when something has several destinations, or when
             the label matters ("Certificate", "Live site", "Highlights").

   `link` and `links` can both be used on the same item — the card-wide
   link sits underneath, the named links sit on top and win the click.
   ------------------------------------------------------------------
   SOURCE NOTES — October 2026
   ------------------------------------------------------------------
   Built from AP Sai's student portfolio PDF only. Search "TODO" to find
   details the PDF does not state (name split, location, school, dates,
   graduation year, CV, social links). Search "NOTE" for judgement calls.
   ================================================================== */

export const PROFILE = {
  first: "Sai",
  last: "P",
  fullName: "Sai P",
  // NOTE: tagline wording is a suggestion drawn from the PDF's interests; confirm.
  tagline: "Academic Exploration | Technology | Global Perspectives | Creative Pursuits",
  // An "Aspiring …" headline in the style of the other portfolios. The PDF does
  // not state an intended field of study, so confirm before using it.
  altTagline: "Aspiring Technology & Data Professional",
  location: "", // TODO: not stated in the PDF
  email: "", // TODO: not stated in the PDF
  phone: "", // TODO: not stated in the PDF
  bio: [
    "I am a Grade 11 student with a growing interest in technology, global affairs, creative expression, and the ways people understand and engage with the world around them. My experiences across coding, Model United Nations, music, sports, and community initiatives have allowed me to explore different forms of learning, from logical problem-solving and research to collaboration, communication, and creative thinking.",
    "My interest in technology began early, with an introduction to programming through Tynker and JavaScript in 2019, and has grown through design exploration, research, and debate. I am following the Cambridge IGCSE curriculum, and have taken part in Olympiad examinations, Model United Nations conferences, and the Franco Fiesta 2023 French competition conducted by Loyola College, using each to test my knowledge and build my research, communication, and critical-thinking skills.",
    "Outside the classroom, I pursue music through Trinity graded assessments, prepare for competitive sports, and have contributed to a community beach clean-up with Shore Guardians. As I continue discovering my academic interests, I hope to deepen my understanding of the subjects that interest me and apply what I learn through independent projects and meaningful contributions beyond the classroom.",
  ],
  quote:
    "I see learning as an opportunity to connect ideas across disciplines and discover new ways to approach problems.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    achievement: "",
    wespa: "",
    twitter: "",
    youtube: "",
    instagram: "",
  },
  cv: "", // TODO: add the CV PDF here
  photo: "/placeholder.png",
  aboutPhoto: "/placeholder.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Leadership & Community", to: "/volunteering",
  },

  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience & engagement (renders as "Work Experience" cards) ----
   The whole card already links to /work/{slug}. Use `links` for anything
   extra: a write-up, a certificate, a video. ---- */

export const EXPERIENCE = [
  {
    slug: "interior-design-exploration",
    role: "Interior Design Exploration",
    org: "Ramya Raman Design Studio",
    logo: "/logos/ramya-raman-design-studio.png", // TODO: add logo file or replace
    location: "Online",
    dates: "Jan 2025 – Sep 2025",
    meta: "Jan 2025 – Sep 2025 · Online ·",
    badge: "Design Exploration",
    desc: "Explored residential and interior design concepts through exposure to space planning, design visualisation, and computer-aided design. The experience introduced the importance of functionality, attention to detail, and structured problem-solving when translating ideas into practical designs.",
    bullets: [
      "Explored residential and interior design concepts, including space planning",
      "Gained exposure to design visualisation and computer-aided design",
      "Learned the importance of functionality and attention to detail in translating ideas into practical designs",
    ],
    tags: ["Interior Design", "Space Planning", "Design Visualisation", "CAD"],
    links: [],
    featured: true,
  },
  {
    slug: "whitehat-jr-foundations-of-programming",
    role: "Foundations of Programming",
    org: "WhiteHat Jr.",
    logo: "/logos/whitehat-jr.png", // TODO: add logo file or replace
    location: "Online",
    dates: "Jun – Jul 2019",
    meta: "Jun – Jul 2019 · Online ·",
    badge: "Programming",
    desc: "Learned introductory programming concepts through Tynker and JavaScript, gaining early exposure to coding, logical sequencing, and computational thinking.",
    bullets: [
      "Learned introductory programming concepts using Tynker and JavaScript",
      "Gained early exposure to coding, logical sequencing, and computational thinking",
      "Practised breaking problems into smaller steps and translating instructions into executable logic",
    ],
    tags: ["Programming", "Tynker", "JavaScript", "Computational Thinking"],
    links: [],
    featured: true,
  },
];

/* ---- Projects ----
   `link` makes the whole card clickable (a live site, a repo, a paper).
   `links` adds a named row instead — use it when there are several.
   NOTE: the PDF describes all three as prospective areas of exploration —
   update meta and desc as projects are undertaken and completed. ---- */

export const PROJECTS = [
  {
    name: "Sports Data & Performance Analysis",
    org: "Prospective Project · Sports Analytics",
    meta: "Prospective",
    desc: "Interested in exploring how data can be used to understand sporting performance, identify patterns, and evaluate progress. A potential project could involve analysing match statistics and presenting findings through charts or a simple dashboard.",
    tags: ["Sports Analytics", "Data Analysis", "Dashboards"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Global Issues Research",
    org: "Prospective Project · Independent Research",
    meta: "Prospective",
    desc: "Interested in examining international issues through independent research, comparing different countries' perspectives, and understanding how diplomacy and negotiation contribute to addressing global challenges.",
    tags: ["Global Affairs", "Research", "Diplomacy", "Negotiation"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Independent Coding Projects",
    org: "Prospective Project · Programming",
    meta: "Prospective",
    desc: "Interested in further developing programming skills through practical projects that apply computational thinking to everyday problems.",
    tags: ["Programming", "Computational Thinking", "Problem-Solving"],
    link: "",
    links: [],
    featured: true,
  },
];

/* ---- Achievements ----
   `link` makes the whole row clickable. `links` adds named links below
   the description — handy for "Certificate" plus "Write-up".
   NOTE: the PDF lists participation and graded milestones, not prizes or
   rankings — do not add results unless confirmed. ---- */

export const AWARDS = [
  {
    icon: "🌍",
    title: "Model United Nations Conferences",
    meta: "School & Inter-school · 2025",
    detail: "Participated in school and inter-school Model United Nations conferences, researching assigned country positions, delivering speeches, negotiating with delegates, and contributing to resolutions.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🎵",
    title: "Trinity Graded Music Assessments — Grade 3",
    meta: "Trinity College London · Initial, Grade 1 & Grade 3",
    detail: "Reported milestones include the Initial grade, Grade 1, and Grade 3 in Trinity graded music assessments, developed through regular practice, concentration, and discipline.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🇫🇷",
    title: "Franco Fiesta 2023 — French Competition",
    meta: "Loyola College · 2023",
    detail: "Participated in the Franco Fiesta 2023 French competition conducted by Loyola College.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🔬",
    title: "Olympiad Examinations",
    meta: "Academic Competitions",
    detail: "Participated in Olympiad examinations, exploring subjects beyond the classroom and testing subject knowledge.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🌊",
    title: "Shore Guardians Beach Clean-Up",
    meta: "Community Initiative · 2025",
    detail: "Took part in a community-led beach clean-up focused on reducing coastal litter and supporting environmental awareness.",
    link: "",
    links: [{ label: "Shore Guardians", href: "https://www.shoreguardians.com/" }],
    featured: false,
  },
];

/* ---- Areas of interest & independent learning ----
   NOTE: topics come from the PDF's "Skills & Interests" and "Projects &
   Future Exploration" sections; descriptions are written from that content. ---- */

export const ARTICLES = [
  {
    title: "Technology & Programming",
    outlet: "Building programming fundamentals and applying computational thinking to everyday problems",
    link: "",
    links: [],
  },
  {
    title: "Global Affairs & Diplomacy",
    outlet: "Researching international issues and comparing country perspectives through debate and negotiation",
    link: "",
    links: [],
  },
  {
    title: "Sports Analytics",
    outlet: "Using performance data to identify patterns, evaluate progress, and inform decisions",
    link: "",
    links: [],
  },
  {
    title: "Design & Music",
    outlet: "Interior design, design visualisation, and musical development as forms of creative expression",
    link: "",
    links: [],
  },
  {
    title: "Environmental Conservation",
    outlet: "Contributing to community-led efforts that protect shared natural spaces",
    link: "",
    links: [],
  },
];

/* ---- Leadership, service & activities ----
   Stats take a single `link` (the chip becomes clickable).
   Orgs take `link` for the whole card and `links` for named links.
   NOTE: the PDF gives no leadership titles or counts, so the stats are
   factual markers from the PDF — swap in real figures if available. ---- */

export const VOLUNTEER = {
  stats: [
    { value: "2025", label: "MUN Conferences", link: "" },
    { value: "2025", label: "Beach Clean-Up", link: "" },
    { value: "Grade 3", label: "Trinity Music", link: "" },
  ],
  orgs: [
    {
      name: "Model United Nations",
      role: "Research, Debate & Diplomacy · 2025",
      desc: "Researched assigned country positions, delivered speeches, negotiated with delegates, and contributed to resolutions at school and inter-school conferences, building the ability to communicate arguments in a formal setting.",
      link: "",
      links: [],
    },
    {
      name: "Shore Guardians",
      role: "Beach Clean-Up Initiative · 2025",
      desc: "Participated in a community-led beach clean-up focused on reducing coastal litter and supporting environmental awareness, and came away with a stronger sense of the importance of protecting shared natural spaces.",
      link: "",
      links: [{ label: "Shore Guardians", href: "https://www.shoreguardians.com/" }],
    },
  ],
};

/* ---- Sport, music & activities (renders on the /sports route) ----
   `links` is the useful one here — clubs, performance videos,
   certificates — since one activity usually has several. ---- */

export const SPORTS = [
  {
    icon: "🏅",
    name: "Competitive Sports — ISSO & SGFI Pathway",
    desc: "Preparing for potential participation in an International School Sports Organisation (ISSO) competition in Jaipur in October 2026, with the longer-term goal of qualifying for SGFI-level competition. Alongside sporting participation, I am interested in sports analysis and how performance data can help identify patterns, evaluate progress, and inform decisions.",
    link: "",
    links: [],
  },
  {
    icon: "🎵",
    name: "Music — Trinity Graded Assessments",
    desc: "Pursued musical development through regular practice and Trinity graded assessments, with reported milestones including the Initial grade, Grade 1, and Grade 3. Consistent practice has helped me develop musical ability, concentration, and discipline.",
    link: "",
    links: [],
  },
  {
    icon: "🔬",
    name: "Academic Competitions",
    desc: "Participated in multiple academic and inter-school competitions, including Olympiad examinations, Model United Nations conferences, and the Franco Fiesta 2023 French competition conducted by Loyola College, to explore subjects beyond the classroom and test my knowledge.",
    link: "",
    links: [],
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Technology",
    items: ["Programming Fundamentals", "Tynker", "JavaScript"],
  },
  {
    group: "Research & Communication",
    items: ["Public Speaking", "Research", "Debate", "Negotiation", "Presenting Arguments"],
  },
  {
    group: "Creative Interests",
    items: ["Music", "Interior Design", "Design Visualisation"],
  },
  {
    group: "Other Interests",
    items: ["Sports", "Sports Analytics", "Environmental Conservation", "Academic Competitions"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "", // TODO: school name not stated in the PDF
    location: "", // TODO: not stated in the PDF
    level: "Cambridge IGCSE · Grade 11",
    dates: "", // TODO: add expected graduation year
    gpa: "", // the PDF gives per-subject results only, no aggregate
    coursework: [
      "Information and Communication Technology — 75% (B)",
      "International Mathematics — 75% (B)",
      "Chemistry — 74% (B)",
      "Physics — 74% (B)",
      "First Language English — 70% (B)",
    ],
    link: "",
    links: [],
  },
];

/* ---- Test scores — no standardised test results appear in the PDF.
   IGCSE results live under EDUCATION instead.
   Export kept so any component importing it does not break. ---- */

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* Entries with an empty href are filtered out by the Footer. */
export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "GitHub", href: PROFILE.socials.github },
  { label: "YouTube", href: PROFILE.socials.youtube },
  { label: "Instagram", href: PROFILE.socials.instagram },
];
