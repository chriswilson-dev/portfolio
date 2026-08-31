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
  Users, Lightbulb, Zap,
} from "lucide-react";

import {
  Python, CPlusPlus, JavaScript, TypeScript, Bash,
  NodeJs, ExpressJsDark, ExpressJsLight, React, TailwindCSS,
  Angular, Bootstrap5, FlaskDark, FlaskLight,
  Oracle, PostgreSQL, MySQL, MongoDB, Redis,
  AWS, Jenkins, Docker, Apache, Linux,
  Git, GitHubDark, GitHubLight, GitLab, Bitbucket,
  Postman, VisualStudioCode, Kafka, NumPy,
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
  { label: "Blog", href: "#blog" },
];

/* ==========================================================================
 * 4. ABOUT
 * ========================================================================== */

export const about = {
  tagline: "Turning messy financial data into systems people can trust.",

  education: {
    degree: "TODO — e.g. B.Tech in Computer Science",
    institution: "TODO — your college",
    detail: "TODO — graduation year, and GPA only if you want it public",
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

    "TODO — one paragraph about you outside of work. Interests, what you read, " +
      "what you tinker with. This is the paragraph that makes you a person " +
      "instead of a résumé.",
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
      title: "TODO — a result you actually delivered",
      description:
        "TODO — What did you build or automate at Osfin? What changed as a result? " +
        "Real numbers if you have them (rows processed, hours saved, error rate). " +
        "If you don't have a metric, describe the before-and-after honestly.",
    },
    {
      title: "TODO — evidence you are ready for SDE work",
      description:
        "TODO — DSA consistency, system design practice, a design doc you wrote, " +
        "something you shipped end to end. Concrete beats enthusiastic.",
    },
    {
      title: "TODO — how you work with other people",
      description:
        "TODO — A time you worked across teams, unblocked someone, or handled a " +
        "production issue with others. Specific incident, not a personality claim.",
    },
  ],

  /** ⚠️ Set these to real counts. An inflated stat is the first thing a reviewer checks. */
  stats: [
    { number: "TODO", label: "Projects Shipped" },
    { number: "TODO", label: "Years Experience" },
    { number: "TODO", label: "Technologies Used" },
  ],
};

/* ==========================================================================
 * 5. SERVICES
 * ========================================================================== */

export const servicesSection = {
  rotatingWords: ["Reliable", "Scalable", "Auditable", "Automated"],
  headingSuffix: "Data & Backend Systems",
  subheading:
    "Building pipelines and services that move financial data accurately, at volume, without manual intervention.",
};

const SERVICE_COLOR = "bg-purple-500/10 text-purple-500 border-purple-500/20";

export const services = [
  {
    icon: Database,
    title: "Data Pipeline Engineering",
    description:
      "Design and build ingestion pipelines that parse, validate, and load high-volume files into relational stores reliably.",
    color: SERVICE_COLOR,
  },
  {
    icon: Zap,
    title: "Reconciliation Automation",
    description:
      "Automate matching between transaction sources and ledgers, with exception handling and clear audit trails.",
    color: SERVICE_COLOR,
  },
  {
    icon: Code,
    title: "SQL & Database Work",
    description:
      "Stored procedures, query optimisation, and schema design across Oracle, PostgreSQL, and MySQL.",
    color: SERVICE_COLOR,
  },
  {
    icon: LinkIcon,
    title: "Backend & REST APIs",
    description:
      "Server-side services in Python and Node with sensible boundaries, validation, and error handling.",
    color: SERVICE_COLOR,
  },
  {
    icon: Rocket,
    title: "Performance Optimisation",
    description:
      "Profiling slow jobs and queries, then fixing the actual bottleneck rather than the obvious one.",
    color: SERVICE_COLOR,
  },
  {
    icon: Layout,
    title: "Internal Tooling",
    description:
      "Dashboards and small full-stack apps that give operations teams visibility without asking an engineer.",
    color: SERVICE_COLOR,
  },
  {
    icon: Bot,
    title: "Scripting & Automation",
    description:
      "Python and Bash tooling that removes recurring manual work from day-to-day operations.",
    color: SERVICE_COLOR,
  },
  {
    icon: Monitor,
    title: "Data Quality & Validation",
    description:
      "Checks and reconciliation logic that surface bad data early instead of letting it settle into reports.",
    color: SERVICE_COLOR,
  },
  {
    icon: Upload,
    title: "Deployment & Monitoring",
    description:
      "Getting jobs into production and keeping them observable, with alerting that means something.",
    color: SERVICE_COLOR,
  },
];

/* ==========================================================================
 * 6. EXPERIENCE
 * ========================================================================== */

export const experienceSection = {
  subheading:
    "Building automated financial data systems, and moving deliberately toward backend engineering.",
};

export const experiences = [
  {
    title: "TODO — your exact job title at Osfin.ai",
    company: "Osfin.ai",
    period: "TODO — e.g. Jun 2025 – Present",
    location: "TODO — City, Country",
    logo: "/osfin_logo.png", // TODO: save the logo into /public
    achievements: [
      "TODO — What do you build? Be specific: which pipelines, which systems, what scale.",
      "TODO — A problem you solved and what improved because of it.",
      "TODO — Something you automated, optimised, or fixed. Real numbers if you have them.",
    ],
    technologies: ["Python", "SQL", "Oracle", "Data Pipelines", "Bash"],
  },
  // TODO: add earlier roles or internships here in the same shape, newest first.
];

/* ==========================================================================
 * 7. PROJECTS
 * ========================================================================== */

export const projectsSection = {
  subheading:
    "Backend services, data tooling, and full-stack apps built to practise real engineering problems.",
};

/**
 * ⚠️  This array is intentionally EMPTY.
 *
 *  Your GitHub currently has one repo (your profile README). For an SDE
 *  portfolio, Projects is the section reviewers open first — an empty grid
 *  reads better than three padded entries.
 *
 *  Copy the template below once you have something to show. Even a small,
 *  finished, well-documented project beats an ambitious unfinished one.
 */
export const projects: Array<{
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  github: string;
  liveUrl?: string;
  period: string;
}> = [
  // {
  //   title: "Project Name",
  //   description: "One or two sentences: what it does and what problem it solves.",
  //   achievements: [
  //     "A specific technical decision you made and why",
  //     "A measurable outcome, if there is one",
  //   ],
  //   technologies: ["Python", "PostgreSQL", "Docker"],
  //   github: "https://github.com/chriswilson-dev/project-name",
  //   liveUrl: "https://project.vercel.app",
  //   period: "Mar 2026",
  // },
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
      { name: "Python", icon: Python, experience: "TODO", description: "Pipelines, automation, scripting" },
      { name: "SQL", icon: Oracle, experience: "TODO", description: "Queries, stored procedures, tuning" },
      { name: "C++", icon: CPlusPlus, experience: "TODO", description: "DSA and problem solving" },
      { name: "JavaScript", icon: JavaScript, experience: "TODO", description: "Full-stack side projects" },
      { name: "TypeScript", icon: TypeScript, experience: "TODO", description: "Typed frontend work" },
      { name: "Bash", icon: Bash, experience: "TODO", description: "Job scripting, server tasks" },
    ],
  },
  {
    title: "Data Engineering",
    icon: Brain,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: [
      { name: "Apache Spark", icon: "⚡", experience: "TODO", description: "Distributed data processing" },
      { name: "Apache Kafka", icon: Kafka, experience: "TODO", description: "Event streaming" },
      { name: "Pandas", icon: "🐼", experience: "TODO", description: "Data manipulation and analysis" },
      { name: "NumPy", icon: NumPy, experience: "TODO", description: "Numerical computing" },
      { name: "ETL Pipelines", icon: "🔄", experience: "TODO", description: "Ingestion, transform, load" },
      { name: "Reconciliation", icon: "⚖️", experience: "TODO", description: "Financial matching systems" },
    ],
  },
  {
    title: "Backend & Web",
    icon: Monitor,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    skills: [
      { name: "Node.js", icon: NodeJs, experience: "TODO", description: "Server-side JavaScript" },
      { name: "Express.js", icon: THEMED.express, experience: "TODO", description: "REST APIs" },
      { name: "Flask", icon: THEMED.flask, experience: "TODO", description: "Lightweight Python services" },
      { name: "React", icon: React, experience: "TODO", description: "Component-based UIs" },
      { name: "Angular", icon: Angular, experience: "TODO", description: "Enterprise frontends" },
      { name: "Tailwind CSS", icon: TailwindCSS, experience: "TODO", description: "Utility-first styling" },
      { name: "Bootstrap", icon: Bootstrap5, experience: "TODO", description: "Responsive layouts" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    skills: [
      { name: "Oracle", icon: Oracle, experience: "TODO", description: "Production banking systems" },
      { name: "PostgreSQL", icon: PostgreSQL, experience: "TODO", description: "Relational modelling" },
      { name: "MySQL", icon: MySQL, experience: "TODO", description: "Application databases" },
      { name: "MongoDB", icon: MongoDB, experience: "TODO", description: "Document stores" },
      { name: "Redis", icon: Redis, experience: "TODO", description: "Caching, fast lookups" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    skills: [
      { name: "AWS", icon: AWS, experience: "TODO", description: "Cloud services" },
      { name: "Docker", icon: Docker, experience: "TODO", description: "Containerisation" },
      { name: "Jenkins", icon: Jenkins, experience: "TODO", description: "CI/CD pipelines" },
      { name: "Nginx", icon: "🌐", experience: "TODO", description: "Reverse proxy, serving" },
      { name: "Apache", icon: Apache, experience: "TODO", description: "Web server config" },
      { name: "Linux", icon: Linux, experience: "TODO", description: "Shell, server administration" },
    ],
  },
  {
    title: "Tools & Version Control",
    icon: Wrench,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    skills: [
      { name: "Git", icon: Git, experience: "TODO", description: "Version control" },
      { name: "GitHub", icon: THEMED.github, experience: "TODO", description: "Repos, Actions" },
      { name: "GitLab", icon: GitLab, experience: "TODO", description: "CI and repo hosting" },
      { name: "Bitbucket", icon: Bitbucket, experience: "TODO", description: "Team repositories" },
      { name: "Postman", icon: Postman, experience: "TODO", description: "API testing" },
      { name: "VS Code", icon: VisualStudioCode, experience: "TODO", description: "Primary editor" },
    ],
  },
];

/** ⚠️ Recount these once your skills list is final. */
export const summaryStats = [
  { icon: Code, count: "6", label: "Languages" },
  { icon: Brain, count: "6", label: "Data Tools" },
  { icon: Database, count: "12", label: "Frameworks & DBs" },
  { icon: Cloud, count: "6", label: "Infra & Cloud" },
];

/* ==========================================================================
 * 9. BLOG
 * ========================================================================== */

export const blogSection = {
  /** Set to false to hide the whole Blog section until you have written something. */
  enabled: false,

  subheading:
    "Notes on data engineering, backend fundamentals, and moving from analysis into software engineering.",

  post: {
    title: "TODO — post title",
    excerpt: "TODO — two or three sentences from the opening.",
    publishedDate: "TODO",
    readTime: "TODO",
    url: "TODO — full post URL",
    tags: ["TODO"],
  },
};

/* ==========================================================================
 * 10. CONTACT & FOOTER
 * ========================================================================== */

export const contact = {
  heading: "Get In Touch",
  subheading:
    "Open to SDE and backend roles, and happy to talk about data pipelines, reconciliation systems, or system design.",
  availability: "Open to opportunities",
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
    { label: "Blog", href: "#blog" },
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
  url: "TODO — your Vercel URL once deployed",
};
