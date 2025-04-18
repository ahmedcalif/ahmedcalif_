import { ProdPushLogo } from "@/components/ProdPushLogo";
import React from "react";
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  images?: string[];
  imageComponent?: React.ReactNode;
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
      "Adapting to a new tech stack ",
    ],
    solutions: [
      "Created a separate database to protect the main database from attacks",
      "Followed design best practices",
      "Implemented a chart for teacher to access the student progress",
      "Asked for help, and read documentation if I was stuck",
    ],
    lessons: [
      "Importance of proper input sanitization for SQL queries",
      "Value of immediate feedback in learning interfaces",
      "Reduce the amount of features implemented",
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
      "Employer tracking for the job applicants",
    ],
    challenges: [
      "Deciding on the idea",
      "Integrating multiple AI services (Azure)",
      " ",
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
      "Skill-based matching for collaborative projects",
    ],
    challenges: [
      "Handling image uploads and processing",
      "Creating an intuitive project creation workflow",
    ],
    solutions: [
      "Implemented WebSockets for real-time features",
      "Used Cloudinary for image processing and storage",
    ],
    lessons: [
      "Importance of community moderation tools",
      "Value of progressive enhancement for complex features",
      "The importance of working in an aglie project.",
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
      "A mobile banking application that provides users a way to manage their finances, and track spending. The app includes transaction categorization and financial insights.",
    features: [
      "Transaction categorization and analytics",
      "Separation of bank account",
    ],
    challenges: [
      "Creating mobile-intuitive UI design",
      "Adapting to a new tech stack",
    ],
    solutions: [
      "Constantly researching about the language/framework",
      "Learning as I go",
    ],
    lessons: ["Keep expanding on my skills", "Read Documentation"],
  },
  {
    id: 5,
    title: "ArticleOS",
    description: "Community-driven content platform for Linux enthusiasts",
    tags: ["PHP", "Laravel", "React", "MySQL", "Tailwind CSS"],
    image: "/linux-svgrepo-com.svg",
    link: "/in-progress",
    github: "https://github.com/ahmedcalif/ArticleOS",
    details:
      "ArticleOS is a community-driven platform where Linux enthusiasts can share knowledge, discuss technical topics, and collaborate on open-source projects. The platform features threaded discussions, content curation, and a reputation system that rewards quality contributions to the Linux community.",
    features: [
      "Threaded discussions organized by Linux distribution and topic",
      "Content voting and curation by the community",
    ],
    challenges: [
      "Building a scalable and performant comment threading system",
      "Creating an intuitive navigation system for nested technical topics",
      "Balancing between specialized Linux content and general accessibility",
    ],
    solutions: [
      "Developed an efficient database schema for nested comment relationships",
      "Created a weighted algorithm that factors in community feedback and participation",
      "Used contextual help and tooltips for technical terminology",
    ],
    lessons: [
      "Importance of community moderation tools for technical forums",
      "Value of consistent taxonomy for organizing specialized content",
      "Technical communities need both specialized depth and approachable onboarding",
    ],
  },
  {
    id: 6,
    title: "ProdPush",
    description:
      "Task manager application with interactive kanban board for visual workflow management",
    tags: [
      "React",
      "TypeScript",
      "SQLite",
      "Hono",
      "Tailwind CSS",
      "Tanstack Query",
      "Shadcn",
    ],
    image: "/linux-svgrepo-com.svg",
    imageComponent: React.createElement(ProdPushLogo, {
      className: "w-full h-full text-blue-600 dark:text-blue-400",
    }),
    github: "https://github.com/ahmedcalif/ProdPush_",
    details:
      "ProdPush is a modern task management application designed to help organize and track project tasks through an intuitive interface. It features status filtering, visual organization through a Kanban board, and date-based task categorization, showcasing my ability to create full-stack applications that solve real productivity challenges.",
    features: [
      "Interactive kanban board with customizable columns and drag-and-drop task management",
      "Project organization with filtering capabilities",
      "Task creation with priority levels and due dates",
      "Calendar visualization for date-based organization",
      "Responsive design for all device sizes",
    ],
    challenges: [
      "Developing ProdPush within a three-week window required careful scope management",
      "Learning curve for newer technologies like Hono and Tanstack Query",
      "Lack of external user testing as it was initially designed for personal use",
    ],
    solutions: [
      "Focused on core functionality first with iterative refinements",
      "Created proof-of-concept implementations before integration",
      "Implemented analytics to monitor usage patterns and identify improvements through self-assessment",
      "Used React DnD for smooth drag-and-drop interactions",
    ],
    lessons: [
      "Importance of visual workflow management for productivity",
      "Value of scope management in time-constrained projects",
      "Benefits of combining technical skills with practical problem-solving",
      "With more time, would implement collaborative features, advanced filtering, and calendar integrations",
    ],
  },
];
