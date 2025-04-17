export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  images?: string[];
  link?: string;
  github?: string;
  details: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  lessons?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SQLLearn",
    description:
      "A full-stack MySQL learning platform with student progress tracking",
    tags: ["React", "TypeScript", "MySQL", "Hono", "Tailwind CSS"],
    image: "/sql-database-sql-azure-svgrepo-com.svg",
    link: "https://learnsql-production.up.railway.app/",
    github: "https://github.com/ahmedcalif/SQLLearn",
    details:
      "SQLLearn is an interactive platform designed to teach MySQL through hands-on exercises and real-time feedback. The platform offers a structured learning path from basic queries to advanced database operations.",
    features: [
      "Interactive SQL editor with syntax highlighting and error detection",
      "Progress tracking with completion badges",
      "Admin dashboard for content management",
      "Responsive design for all device sizes",
    ],
    challenges: [
      "Implementing a secure SQL execution environment",
      "Designing an intuitive user interface for complex queries",
      "Managing student progress data efficiently",
    ],
    solutions: [
      "Created a sandboxed execution environment using Docker containers",
      "Developed a multi-pane interface with query input and results side-by-side",
      "Implemented a Redis cache for frequently accessed progress data",
    ],
    lessons: [
      "Importance of proper input sanitization for SQL queries",
      "Value of immediate feedback in learning interfaces",
      "Benefits of containerization for educational platforms",
    ],
  },
  {
    id: 2,
    title: "ReachOut",
    description:
      "AI-Powered job searching app for justice-affected individuals",
    tags: ["Next.js", "TypeScript", "Tailwind", "SQLite", "AWS", "Azure AI"],
    image: "/logo.svg",
    link: "https://wereachout.ca",
    github: "https://github.com/mangaslave/ReachOut",
    details:
      "ReachOut leverages AI to help individuals affected by the justice system find employment opportunities tailored to their skills and circumstances. The platform provides resume building, interview preparation, and job matching.",
    features: [
      "AI-powered job matching algorithm",
      "Resume builder with template suggestions",
      "Interview preparation chatbot",
      "Employer education resources",
    ],
    challenges: [
      "Handling sensitive user data with proper privacy controls",
      "Integrating multiple AI services (Azure and OpenAI)",
      "Creating fair matching algorithms that don't perpetuate bias",
    ],
    solutions: [
      "Implemented robust encryption and access controls",
      "Created a unified API layer to manage different AI services",
      "Developed algorithm auditing tools to detect bias",
    ],
    lessons: [
      "Ethical considerations in AI applications",
      "Importance of user privacy in sensitive applications",
      "Value of interdisciplinary collaboration (worked with legal experts)",
    ],
  },
  {
    id: 3,
    title: "Crafters Connect",
    description: "Collaborative platform for DIY projects and crafting",
    tags: ["JavaScript", "ExpressJs", "CSS", "HTML", "Drizzle"],
    image: "/CraftersConnectLogo.png",
    link: "https://craftersconnect-1.onrender.com/",
    github: "https://github.com/ahmedcalif/CraftersConnect",
    details:
      "Crafters Connect is a community platform where DIY enthusiasts can share projects, collaborate on ideas, and get inspiration. The platform includes project sharing, discussion forums, and material sourcing tools.",
    features: [
      "Project sharing with step-by-step guides",
      "Material and tool sourcing integration",
      "Real-time collaboration tools",
      "Skill-based matching for collaborative projects",
    ],
    challenges: [
      "Managing real-time updates for collaborative editing",
      "Handling image uploads and processing",
      "Creating an intuitive project creation workflow",
    ],
    solutions: [
      "Implemented WebSockets for real-time features",
      "Used Cloudinary for image processing and storage",
      "Created a wizard-style project creation interface",
    ],
    lessons: [
      "Importance of community moderation tools",
      "Value of progressive enhancement for complex features",
      "How to balance flexibility with structure in UGC platforms",
    ],
  },
  {
    id: 4,
    title: "BankingApp",
    description: "Mobile banking application with financial management tools",
    tags: ["React Native", "Expo", "TypeScript"],
    image: "/money-svgrepo-com.svg",
    github: "https://github.com/ahmedcalif/React-Native-Bank-App",
    details:
      "A mobile banking application that provides users with a secure way to manage their finances, track spending, and set savings goals. The app includes transaction categorization and financial insights.",
    features: [
      "Secure authentication with biometric options",
      "Transaction categorization and analytics",
      "Savings goals with progress tracking",
      "Budgeting tools with alerts",
    ],
    challenges: [
      "Implementing secure authentication flows",
      "Handling sensitive financial data",
      "Creating performant data visualizations",
    ],
    solutions: [
      "Used React Native's SecureStore for credential management",
      "Implemented data encryption at rest and in transit",
      "Leveraged Skia for high-performance charts",
    ],
    lessons: [
      "Security considerations in financial apps",
      "Importance of performance in data-heavy applications",
      "Value of clear financial visualizations",
    ],
  },
  {
    id: 5,
    title: "ArticleOS",
    description: "Knowledge management system for research and articles",
    tags: ["PHP", "Laravel", "React", "MySQL", "Tailwind CSS"],
    image: "/linux-svgrepo-com.svg",
    link: "/in-progress",
    github: "https://github.com/ahmedcalif/ArticleOS",
    details:
      "ArticleOS is a knowledge management system designed for researchers and students to organize, annotate, and share academic articles. The platform includes citation management and collaborative features.",
    features: [
      "PDF annotation and highlighting tools",
      "Citation generator in multiple formats",
      "Collaborative reading groups",
      "Knowledge graph visualization",
    ],
    challenges: [
      "Implementing PDF rendering and annotation in browser",
      "Managing complex citation relationships",
      "Creating intuitive knowledge graph visualizations",
    ],
    solutions: [
      "Used PDF.js for client-side PDF rendering",
      "Developed a graph database layer for citations",
      "Implemented D3.js for interactive visualizations",
    ],
    lessons: [
      "Complexity of academic reference management",
      "Value of good annotation tools for research",
      "Importance of flexible data models for knowledge systems",
    ],
  },
];
