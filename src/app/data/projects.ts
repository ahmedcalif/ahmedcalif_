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
      "A mobile banking application that provides users a way to manage their finances, track spending, and set savings goals. The app includes transaction categorization and financial insights.",
    features: [
      "Transaction categorization and analytics",
      "Separation of bank account",
    ],
    challenges: [
      "Creating performant data visualizations",
      "Trying out a completely different tech stack, adventure",
    ],
    solutions: [
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
  {
    id: 6,
    title: "ProdPush",
    description:
      "Task manager application with interactive kanban board for visual workflow management",
    tags: ["React", "TypeScript", "SQLite", "Hono", "Tailwind CSS"],
    image: "/linux-svgrepo-com.svg",
    imageComponent: React.createElement(ProdPushLogo, {
      className: "w-full h-full text-blue-600 dark:text-blue-400",
    }),
    github: "https://github.com/ahmedcalif/ProdPush_",
    details:
      "ProdPush is a task management application featuring a customizable kanban board that allows users to visually track work progress across different stages. The app provides an intuitive drag-and-drop interface for managing tasks through their lifecycle.",
    features: [
      "Interactive kanban board with customizable columns",
      "Drag-and-drop task management",
      "Task creation with priority levels and due dates",
      "Category and label organization",
    ],
    challenges: [
      "Implementing smooth drag-and-drop functionality",
      "Persisting board state across sessions",
      "Creating an intuitive workflow for task transitions",
    ],
    solutions: [
      "Used React DnD for drag-and-drop interactions",
      "Implemented SQLite with efficient state management",
      "Designed intuitive UI patterns for task movement between columns",
    ],
    lessons: [
      "Importance of visual workflow management",
      "Value of interactive UI elements for productivity",
      "Benefits of customizable workflow stages",
    ],
  },
];
