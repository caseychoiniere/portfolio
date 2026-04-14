export const RESUME_DATA = {
  name: "Casey Choiniere",
  initials: "CC",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/Seattle,+WA",
  about:
      "Product-minded engineer with 10+ years of experience building thoughtful, high-impact web applications. I specialize in frontend engineering and UX, but I work across the stack, owning features end-to-end.",
  summary:
      "I care deeply about good UX, clean architecture, and building components and patterns that make teams more effective over time. I enjoy collaborating closely with designers, product teams, and other engineers to shape solutions that are both technically sound and genuinely useful.",
  avatarUrl: "/images/portfolio_pic.png",
  contact: {
    email: "caseychoiniere@gmail.com",
    tel: "425-345-4515",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/caseychoiniere/",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/choiniere/",
      },
    ],
  },
  education: [
    {
      school: "Seattle Central College",
      degree: "Web Application Development in Information Technology",
      start: "2014",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Optum",
      link: "https://www.optum.com",
      badges: ["Lead"],
      title: "Lead Software Engineer",
      start: "Dec 2022",
      end: "Present",
      description: [
        "Implemented a module federated developer platform, enabling framework-agnostic component reuse across applications.",
        "Led a team of engineers, ensuring delivery of scalable, maintainable, and accessible features and products.",
        "Reduced development reload times by ~92%, greatly improving developer experience and productivity.",
        "Modernized component library by migrating from JavaScript to TypeScript and updating build tooling.",
        "Delivered a developer console app to streamline onboarding, reducing time-to-market for new products.",
        "Owned features end-to-end, emphasizing quality and performance.",
        "Mentored junior developers on frontend technologies, testing practices, and code maintainability.",
      ],
    },
    {
      company: "Duke Crucible",
      link: "https://crucible.duke.edu",
      badges: [],
      title: "Senior Software Engineer",
      start: "2022",
      end: "Jan 2023",
      description: [
        "Built a compliance application with Next.js, Postgres, and Azure, owning features from architecture to production.",
        "Enhanced a regional data visualization tool that helped secure a $1M grant by improving performance and usability.",
      ],
    },
    {
      company: "Foundry Interactive",
      link: "https://foundryinteractive.com",
      badges: [],
      title: "Senior Software Engineer",
      start: "2019",
      end: "2022",
      description: [
        "Partnered with clients (Blue Nile, Arizona State University, Hinge Health, Navigating Cancer) to deliver frontend and backend solutions.",
        "Led the initiative to bring a major Arizona State University application into full WCAG-compliant accessibility standards.",
        "Developed a React component library and optimized performance for client-facing applications.",
        "Built an application that streamlined patient triage, reducing unnecessary clinic visits and associated costs.",
      ],
    },
    {
      company: "Clinical Trials Transformation Initiative",
      link: "https://ctti-clinicaltrials.org",
      badges: [],
      title: "Software Engineer",
      start: "2018",
      end: "2019",
      description: [
        "Designed a clinical trial planning app using React and Node.js, ensuring scalability and accessibility.",
        "Integrated a third-party data-sharing service, improving interoperability across teams.",
      ],
    },
    {
      company: "Duke University School of Medicine",
      link: "https://medschool.duke.edu",
      badges: [],
      title: "Frontend Engineer",
      start: "2015",
      end: "2019",
      description: [
        "Developed a multi-browser file upload interface with chunking and hashing, supporting 15GB+ uploads.",
        "Built a data visualization interface powered by a Neo4j graph database to track research data provenance over time.",
        "Delivered a secure, performant web interface for fine-grained user access management, file sharing and project data administration.",
      ],
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "GraphQL",
    "Redux",
    "Node.js",
    "Express",
    "Postgres",
    "Figma",
    "Cypress",
    "Jest",
    "Playwright",
    "Webpack",
    "CI/CD",
    "Git",
    "Module Federation",
    "Microfrontend Architecture",
    "Accessibility (WCAG)",
    "Performance optimization",
    "Component library design",
    "Data Visualization",
    "Developer experience (DX)",
  ],
  projects: [
    {
      title: "Fluxboard",
      techStack: ["React", "TypeScript", "NextJS", "Vite", "Tailwind"],
      description:
          "Fluxboard is a sophisticated, AI-powered personal finance management platform designed to provide users with a unified, intelligent view of their financial health. It goes beyond simple transaction tracking by leveraging generative AI to turn complex financial data into actionable insights. The primary goal of Fluxboard is to empower users to take control of their money through clarity, automation, and intelligent analysis. It serves as a central hub for all financial activities, consolidating data from multiple accounts into a single, polished interface.",
      link: {
        label: "Fluxboard",
        href: "https://fluxboard.caseychoiniere.com/",
      },
      image: "/images/fluxboard2.png",
    },
    {
      title: "Reddit Consensus Engine",
      techStack: ["React", "TypeScript", "NextJS", "IndexDB", "Tailwind"],
      description:
          "The Reddit Consensus Engine is a powerful, AI-driven research tool designed to help consumers cut through the noise of traditional search engines and marketing-heavy reviews. It leverages the collective wisdom of Reddit—one of the world's most authentic sources of human experience—to provide clear, data-backed product recommendations.",
      link: {
        label: "Reddit Suggestion Engine",
        href: "https://www.redditsuggests.com/",
      },
      image: "/images/redditsuggests.png",
    },
    {
      title: "Eat Safe Seattle",
      techStack: ["React", "Node.js", "Mobx"],
      description:
          "A hobby app built for fun. Eat Safe Seattle aggregates food safety data with insights from Google APIs to help consumers make informed decisions when they dine out.",
      link: {
        label: "Eat Safe Seattle",
        href: "http://eatsafeseattle.com/",
      },
      image: "/images/safeeater.png",
    },
  ],
} as const;
