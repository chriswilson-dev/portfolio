/**
 * ============================================================================
 *  SITE CONTENT — single source of truth
 * ============================================================================
 *  Every piece of text, link, and personal detail on the site lives here.
 *  Components read from this file. You should almost never need to edit a
 *  component to change wording.
 *
 *  ⚠️  SEARCH THIS FILE FOR "TODO" BEFORE YOU DEPLOY.
 *      Anything marked TODO is a placeholder I could not fill in for you.
 *      I have deliberately NOT invented job dates, metrics, achievements,
 *      or years-of-experience numbers — those go on a site recruiters read,
 *      and they need to be yours and accurate.
 * ============================================================================
 */

import {
  Code, Brain, Database, Cloud, Wrench, Monitor,
  Layout, Link as LinkIcon, Rocket, Bot, Upload,
  Users, Lightbulb, Zap, Server, GitBranch, Layers, Boxes,
} from "lucide-react";

import {
  Python, JavaScript, TypeScript, Java, CPlusPlus, MySQL,
  ClaudeAI, HuggingFace, Tensorflow, PyTorch, NumPy,
  React, VueJs, NextJs, Spring, Django, FastAPI, NodeJs,
  TailwindCSS, HTML5,
  Oracle, PostgreSQL, MongoDB, Redis,
  Git, AWS, Docker, Jenkins, Linux, Postman, VisualStudioCode,
} from "developer-icons";

/* ── Icons handled per-theme in the component. Keep these strings as-is. ── */
export const THEMED = {
  flask: "flask",
  express: "express",
  github: "github",
} as const;

/* ==========================================================================
 * 1. IDENTITY
 * ========================================================================== */

export const personal = {
  name: "Chris Wilson",
  firstName: "Chris",

  /** Shown directly under the animated greeting in the hero. */
  headline: "Software Engineer | Data Pipelines & Backend Systems",

  /** The longer hero paragraph. Rewrite in your own voice. */
  intro:
    "I build and automate the systems banks rely on to reconcile money at scale — " +
    "data pipelines in Python and SQL that turn messy financial files into trustworthy, " +
    "auditable records. Currently deepening my backend engineering and system design " +
    "foundations as I move from data into software engineering.",

  location: "TODO — City, Country",

  /** Files you drop into /public yourself. */
  profileImage: "/profile.jpg",
  faviconImage: "/favicon-me.png",
  footerImage: "/profile.jpg",
  resumeFile: "/Chris_Wilson_Resume.pdf",
} as const;

export const links = {
  github: "https://github.com/chriswilson-dev",
  linkedin: "https://linkedin.com/in/chriswilson-dev",
  email: "chriswilson2004.work@gmail.com",
  instagram: "https://instagram.com/chriswilson_9",
  /** Set to "" to hide the blog icon in the hero. */
  blog: "",
} as const;

/* ==========================================================================
 * 2. HERO — rotating multilingual greeting
 * ========================================================================== */

export const greetings = [
  { text: "Hello, I'm Chris", lang: "English" },
  { text: "Hallo, ich bin Chris", lang: "German" },
  { text: "Ciao, sono Chris", lang: "Italian" },
  { text: "Hola, soy Chris", lang: "Spanish" },
  { text: "Bonjour, je suis Chris", lang: "French" },
  { text: "नमस्ते, मैं Chris हूँ", lang: "Hindi" },
  { text: "こんにちは、私は Chris です", lang: "Japanese" },
  { text: "Привет, меня зовут Крис", lang: "Russian" },
  { text: "你好，我是 Chris", lang: "Chinese" },
];

/* ==========================================================================
 * 3. NAVIGATION
 * ========================================================================== */

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

/* ==========================================================================
 * 4. ABOUT
 * ========================================================================== */

export const about = {
  tagline: "Turning messy financial data into systems people can trust.",

  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Kalinga Institute of Industrial Technology",
    detail: "Class of 2026",
  },

  /** 2–3 paragraphs. Replace with your own story — this is a first draft. */
  journey: [
    "I work at Osfin.ai building automated reconciliation pipelines for banking " +
      "systems. Day to day that means Python and SQL against large volumes of " +
      "transaction data — parsing network settlement files, matching them against " +
      "ledgers, and making sure the numbers agree.",

    "That work pulled me toward engineering. Reconciliation is a systems problem " +
      "before it is a data problem: throughput, correctness under failure, and " +
      "designs that survive contact with real production volume. So I have been " +
      "moving from analysis into building — DSA daily, backend fundamentals, and " +
      "high- and low-level system design.",

    "Outside of work I have no genre loyalty whatsoever — my music library is " +
      "a crime scene, and I defend it. Same with sport: give me a scoreboard " +
      "and I'll watch, then confidently explain rules I learned nine minutes " +
      "ago. I'm the one who says yes to the trip, the detour, and the " +
      "conversation with a stranger that runs two hours long.",
  ],

  workValues: [
    {
      icon: Code,
      title: "Correctness First",
      description:
        "In financial systems a silent wrong number is worse than a loud failure. I build for verifiability.",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
    {
      icon: Zap,
      title: "Automation",
      description:
        "If a task runs more than twice by hand, it should be a pipeline. I remove manual steps wherever I find them.",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },
    {
      icon: Lightbulb,
      title: "Always Learning",
      description:
        "Daily DSA practice and system design study. I would rather be corrected early than confident and wrong.",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
    {
      icon: Users,
      title: "Clear Communication",
      description:
        "Data work sits between engineering and operations. Explaining it plainly to both is half the job.",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },
  ],

  /**
   * ⚠️  These three bullets are the highest-value block on the page and the
   *     easiest to get wrong. Write them yourself, with real numbers from
   *     your actual work. I have left prompts, not claims.
   */
  whyHireMe: [
    {
      title: "I've replaced manual bank processes with governed automation",
      description:
        "At IDFC Bank I automated a reconciliation process that was manual, slow, " +
        "and error-prone — rebuilding it so fund movement is governed by RBI audit " +
        "rules. Getting the logic right meant working directly with both the client " +
        "and IDFC. The result removes risk from a bank's books, not just hours from " +
        "someone's week.",
    },
    {
      title: "I build things that need the same thinking DSA rounds test",
      description:
        "EazzyPay wasn't a payment API wired to a button. Its flow needed real " +
        "decisions about state handling and failure safety — the cases that only " +
        "show up when money is involved. I practise algorithms daily, but the " +
        "instincts come from shipping things that have to actually hold.",
    },
    {
      title: "I stay with a problem until the real cause is fixed",
      description:
        "During a live outage I traced a TLS failure down to a misconfigured " +
        "backend config — the kind of bug that's easy to misdiagnose if you stop " +
        "at the surface error. Under pressure, with people waiting, I'd rather " +
        "find the cause than clear the symptom.",
    },
  ],

  /** ⚠️ Set these to real counts. An inflated stat is the first thing a reviewer checks. */
  stats: [
    { number: "4", label: "Projects Shipped" },
    { number: "1+", label: "Years Experience" },
    { number: "30+", label: "Technologies Used" },
  ],
};

/* ==========================================================================
 * 5. SERVICES
 * ========================================================================== */

export const servicesSection = {
  rotatingWords: ["Reliable", "Scalable", "Automated", "Production-Ready"],
  headingSuffix: "Software & Systems",
  subheading:
    "Backend services, data pipelines, automation, and the tooling that keeps it all running.",
};

const SERVICE_COLOR = "bg-purple-500/10 text-purple-500 border-purple-500/20";

export const services = [
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "REST services in Python and Node with clear boundaries, real validation, and error handling that fails loudly instead of quietly.",
    color: SERVICE_COLOR,
  },
  {
    icon: Database,
    title: "Data Pipeline Engineering",
    description:
      "Ingestion pipelines that parse, validate, and load high-volume data reliably — and tell you when something looks wrong.",
    color: SERVICE_COLOR,
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps",
    description:
      "Automated build, test, and deploy pipelines with Jenkins and GitHub Actions, so shipping stops being an event.",
    color: SERVICE_COLOR,
  },
  {
    icon: Bot,
    title: "Chatbots & AI Integration",
    description:
      "Conversational interfaces and LLM-backed features wired into real products, with sensible fallbacks when the model gets it wrong.",
    color: SERVICE_COLOR,
  },
  {
    icon: Layers,
    title: "Database Design & Tuning",
    description:
      "Schema design, stored procedures, and query optimisation across Oracle, PostgreSQL, and MySQL.",
    color: SERVICE_COLOR,
  },
  {
    icon: Layout,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end applications with React frontends and Python or Node backends, built to be handed over and maintained.",
    color: SERVICE_COLOR,
  },
  {
    icon: Boxes,
    title: "System Design",
    description:
      "High- and low-level design for services that need to survive real traffic, real failure, and real change.",
    color: SERVICE_COLOR,
  },
  {
    icon: Rocket,
    title: "Performance Optimisation",
    description:
      "Profiling slow jobs and queries, then fixing the actual bottleneck rather than the most obvious one.",
    color: SERVICE_COLOR,
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Getting services into production on AWS with Docker, and keeping them observable once they're there.",
    color: SERVICE_COLOR,
  },
];

/* ==========================================================================
 * 6. EXPERIENCE
 * ========================================================================== */

export const experienceSection = {
  subheading:
    "Automating reconciliation and fund movement for banks and payment aggregators — from PL/SQL and APIs through to deployment.",
};

export const experiences = [
  {
    title: "Data Analyst 1",
    company: "Osfin.ai",
    period: "Aug 2026 – Present",
    location: "Navi Mumbai, India",
    logo: "/osfin_logo.png",
    achievements: [
      "Built automated reconciliation and live fund movement for IDFC Bank across payment aggregators including Paytm, PayU, Razorpay, and BillDesk",
      "Owned the full technical stack end to end — PL/SQL procedures, REST API integrations, LDAP authentication, and production deployment",
      "Integrated Claude-powered chatbot capability into the platform to let operations teams query reconciliation status without engineering support",
      "Diagnosed and resolved a live TLS failure by tracing it to a misconfigured backend service rather than stopping at the surface error",
      "Worked directly with client and bank stakeholders to translate settlement requirements into working reconciliation logic",
    ],
    technologies: [
      "PL/SQL", "Oracle", "Python", "REST APIs", "Node.js", "React",
      "JavaScript", "LDAP", "Linux", "Docker", "Jenkins", "Nginx",
      "Git", "Claude API", "Bash", "Shell Scripting",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Osfin.ai",
    period: "Aug 2025 – Jul 2026",
    location: "Navi Mumbai, India",
    logo: "/osfin_logo.png",
    achievements: [
      "Configured SWIFT and NEFT/RTGS reconciliation automation for IDFC Bank on the Osfin platform, replacing a manual process governed by RBI audit rules",
      "Reached 83% automation with 100% match accuracy, cutting processing time by roughly 90%",
      "Delivered 50+ operational reports and 20+ dashboards used by bank and internal teams to monitor settlement health",
      "Mapped GL codes and built transformation logic to split high-volume network settlement files into reconcilable data tables",
    ],
    technologies: [
      "Python", "SQL", "PL/SQL", "Oracle", "Pandas", "NumPy",
      "ETL Pipelines", "Data Visualisation", "Excel",
      "SWIFT", "NEFT/RTGS", "Reconciliation",
    ],
  },
];

/* ==========================================================================
 * 7. PROJECTS
 * ========================================================================== */

export const projectsSection = {
  subheading:
    "Things I've built end to end — and the one you're looking at right now.",
};

export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "This site. A single-page React application built from scratch with a centralised content architecture, dual animated canvas backgrounds, and a full dark/light theme system.",
    achievements: [
      "Built a config-driven architecture where all content lives in one typed file, so copy changes never require touching a component",
      "Implemented two canvas particle animation systems that swap on theme change, with cleanup on unmount to avoid memory leaks",
      "Wired a working contact form through EmailJS with client-side validation and toast feedback",
      "Fully responsive down to mobile, with a collapsible nav and reflowing section grids",
    ],
    technologies: [
      "React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui",
      "Canvas API", "EmailJS", "Vercel", "Git",
    ],
    github: "https://github.com/chriswilson-dev/portfolio",
    liveUrl: "https://chriswilson-dev.vercel.app/",
    period: "2025-2026",
  },
  {
    title: "EazyPay",
    description:
      "A team of six built a web app that sends USDC stablecoin to a phone number — no seed phrase, no wallet install, no gas fees for the recipient. I owned the backend and database layer.",
    achievements: [
      "Designed the PostgreSQL schema on Supabase mapping phone numbers to wallet addresses, and wrote the API logic to log transaction history securely",
      "Built the persistence layer that keeps a transaction record independent of the blockchain, so history survives independently of chain state",
      "Worked within a decoupled architecture: Next.js frontend, Privy for account abstraction, Twilio for SMS, Sepolia testnet as the ledger",
      "Final-year project at KIIT under Prof. Nachiketa Tarasia; all three end-to-end test cases passed",
    ],
    technologies: [
      "Supabase", "PostgreSQL", "REST APIs", "Next.js", "TypeScript",
      "Privy", "Twilio API", "Account Abstraction", "Sepolia Testnet",
      "Tailwind CSS", "shadcn/ui",
    ],
    github: "https://github.com/chriswilson-dev",
    liveUrl: "https://eazzypay.vercel.app/",
    period: "Nov 2025",
  },
];

/* ==========================================================================
 * 8. SKILLS
 * ========================================================================== */

/**
 * ⚠️  Every `experience` value below is "TODO" on purpose.
 *
 *  These render as visible badges on the live site. I am not going to guess
 *  how long you have used each tool — that is a claim to employers, and it
 *  has to be yours. Replace them with values like "2y+", "1y", "Learning".
 *  Use "Learning" freely; it reads as honest, not weak.
 */
export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    skills: [
      { name: "Python", icon: Python, experience: "2y+", description: "Automation, pipelines, APIs" },
      { name: "SQL", icon: MySQL, experience: "2y+", description: "Queries, procedures, tuning" },
      { name: "JavaScript", icon: JavaScript, experience: "1y+", description: "Full-stack web development" },
      { name: "TypeScript", icon: TypeScript, experience: "1y+", description: "Typed React applications" },
      { name: "Java", icon: Java, experience: "1y+", description: "Spring Boot, OOP" },
      { name: "C++", icon: CPlusPlus, experience: "1y+", description: "DSA, systems programming" },
    ],
  },
  {
    title: "AI/ML Technologies",
    icon: Brain,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: [
      { name: "Claude API", icon: ClaudeAI, experience: "Current", description: "LLM integration, chatbots" },
      { name: "LangChain", icon: "🦜", experience: "Current", description: "RAG systems, AI agents" },
      { name: "HuggingFace", icon: HuggingFace, experience: "Current", description: "Transformers, NLP models" },
      { name: "OpenCV", icon: "👁️", experience: "Current", description: "Computer vision, image processing" },
      { name: "MediaPipe", icon: "🖐️", experience: "Current", description: "Hand and pose tracking" },
      { name: "TensorFlow", icon: Tensorflow, experience: "Current", description: "Model training, inference" },
      { name: "PyTorch", icon: PyTorch, experience: "Current", description: "Deep learning" },
      { name: "Pandas", icon: "🐼", experience: "1y+", description: "Data manipulation, analysis" },
      { name: "NumPy", icon: NumPy, experience: "1y+", description: "Numerical computing" },
    ],
  },
  {
    title: "Web Technologies & Frameworks",
    icon: Monitor,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    skills: [
      { name: "React.js", icon: React, experience: "2y+", description: "SPAs, component libraries" },
      { name: "HTML/CSS", icon: HTML5, experience: "2y+", description: "Responsive design" },
      { name: "Flask", icon: THEMED.flask, experience: "2y+", description: "Lightweight Python APIs" },
      { name: "Next.js", icon: NextJs, experience: "1y+", description: "SSR, file-based routing" },
      { name: "Vue.js", icon: VueJs, experience: "1y+", description: "Progressive web apps" },
      { name: "Node.js", icon: NodeJs, experience: "1y+", description: "Server-side JavaScript" },
      { name: "FastAPI", icon: FastAPI, experience: "1y+", description: "High-performance APIs" },
      { name: "Django", icon: Django, experience: "1y+", description: "Web apps, admin panels" },
      { name: "Spring Boot", icon: Spring, experience: "1y+", description: "Enterprise Java apps" },
      { name: "Tailwind CSS", icon: TailwindCSS, experience: "1y+", description: "Utility-first styling" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    skills: [
      { name: "Oracle", icon: Oracle, experience: "2y+", description: "Production banking systems" },
      { name: "PostgreSQL", icon: PostgreSQL, experience: "2y+", description: "Relational databases" },
      { name: "MySQL", icon: MySQL, experience: "2y+", description: "Database management" },
      { name: "MongoDB", icon: MongoDB, experience: "1y+", description: "NoSQL databases" },
      { name: "Redis", icon: Redis, experience: "1y+", description: "Caching, fast lookups" },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    skills: [
      { name: "Git", icon: Git, experience: "1y+", description: "Version control" },
      { name: "GitHub", icon: THEMED.github, experience: "1y+", description: "Repos, collaboration" },
      { name: "AWS", icon: AWS, experience: "Current", description: "Cloud services" },
      { name: "Docker", icon: Docker, experience: "1y+", description: "Containerisation" },
      { name: "Jenkins", icon: Jenkins, experience: "1y+", description: "CI/CD pipelines" },
      { name: "Linux", icon: Linux, experience: "1y+", description: "Terminal, system administration" },
      { name: "Postman", icon: Postman, experience: "1y+", description: "API testing" },
    ],
  },
  {
    title: "Development Environments",
    icon: Wrench,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    skills: [
      { name: "VS Code", icon: VisualStudioCode, experience: "3y+", description: "Primary editor" },
      { name: "IntelliJ IDEA", icon: "💡", experience: "2y+", description: "Java development" },
      { name: "PyCharm", icon: "🐍", experience: "1y+", description: "Python development" },
      { name: "Visual Studio", icon: "🔷", experience: "1y+", description: ".NET development" },
    ],
  },
];

export const summaryStats = [
  { icon: Code, count: "6+", label: "Languages" },
  { icon: Brain, count: "9+", label: "AI/ML Tools" },
  { icon: Monitor, count: "10+", label: "Dev Frameworks" },
  { icon: Cloud, count: "7+", label: "Cloud & Tools" },
];

/* ==========================================================================
 * 9. BLOG
 * ========================================================================== */


/* ==========================================================================
 * 10. CONTACT & FOOTER
 * ========================================================================== */

export const contact = {
  heading: "Get In Touch",
  subheading:
    "Open to SDE and backend roles, and happy to talk about data pipelines, reconciliation systems, or system design.",

  email: "chriswilson2004.work@gmail.com",
  phone: "+91 77559 26899",
  phoneHref: "tel:+917755926899",
  location: "Navi Mumbai, Maharashtra, India",

  /** Set to "" to hide the Schedule a Call button. */
  calendly: "",
};

/**
 * EmailJS — the contact form needs your own account (free tier is fine).
 * Sign up at emailjs.com, then put these in a .env file at the project root:
 *
 *   VITE_EMAILJS_SERVICE_ID=xxx
 *   VITE_EMAILJS_TEMPLATE_ID=xxx
 *   VITE_EMAILJS_PUBLIC_KEY=xxx
 *
 * .gitignore already covers .env, so these stay off GitHub.
 * Note: anything with a VITE_ prefix ends up in the browser bundle. That is
 * expected for the EmailJS public key — it is designed to be public. Never
 * put a private key or database credential in a VITE_ variable.
 */
export const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
};

export const footer = {
  blurb:
    "Currently building automated reconciliation systems and working toward backend engineering. " +
    "Always up for a conversation about data pipelines, system design, or a good side project.",
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ],
};

/* ==========================================================================
 * 11. SEO — used in index.html (update that file manually to match)
 * ========================================================================== */

export const seo = {
  title: "Chris Wilson — Software Engineer | Data Pipelines & Backend Systems",
  description:
    "Software engineer building automated reconciliation pipelines in Python and SQL. " +
    "Backend systems, data engineering, and system design.",
  keywords:
    "Software Engineer, Backend Engineer, Data Engineer, Python, SQL, Oracle, " +
    "Data Pipelines, Reconciliation, Kafka, Spark, Chris Wilson",
  author: "Chris Wilson",
  url: "https://chriswilson-dev.vercel.app/",
};
