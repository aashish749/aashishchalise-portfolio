export const siteConfig = {
  // ─── Personal ───
  name: "Aashis Chalise",
  role: "Full Stack Web Developer",
  headline: "I build performant, accessible web apps that delight users",
  email: "contact@aashis.dev",
  resumeUrl: "/resume.pdf",

  // ─── Social Links (swap later) ───
  github: "https://github.com/aashish749",
  linkedin: "https://www.linkedin.com/in/aashis-chalise",
  twitter: "https://twitter.com/",

  // ─── Navigation ───
  navLinks: [
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  // ─── Skills (grouped by category) ───
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    frontend: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Motion",
      "Zod",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Clerk",
    ],
    devops: ["Docker", "Vercel", "Railway"],
    tools: ["Git", "GitHub", "Postman", "n8n", "WordPress"],
  },

  // ─── Projects (demo – swap later) ───
  projects: [
    {
      title: "PERN Stack Ecommerce Site",
      description:
        "A full-stack ecommerce platform built with PostgreSQL, Express, React, and Node.js featuring product management, shopping cart, and checkout functionality.",
      tech: ["PostgreSQL", "Express", "React", "Node.js"],
      image: "/project1.jpg",
      live: "https://gearshop.aashis.dev",
      source: "https://github.com/aashish749/project1",
    },
    {
      title: "MERN Stack Car Rental Site",
      description:
        "A full-stack car rental platform with vehicle management, booking system, user authentication, and real-time availability checking.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/project3-letsdrive (1).jpg",
      live: "https://letsdrive.com.np/",
      source: "https://github.com/aashish749/project3",
    },
    {
      title: "MERN Stack Clothing Store",
      description:
        "A full-stack clothing store platform built with MongoDB, Express, React, and Node.js featuring product management, shopping cart, and checkout functionality.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/project2.jpg",
      live: "https://forever-store.aashis.dev",
      source: "https://github.com/aashish749/project2",
    },
  ],

  // ─── Terminal Commands ───
  terminalCommands: {
    help: "Available commands: about, skills, projects, contact, clear",
    about:
      "Hey! I'm Aashis, a full-stack engineer passionate about building performant, accessible web apps.",
    skills:
      "MERN • PERN • TypeScript • Tailwind • Drizzle • PostgreSQL • MongoDB",
    projects: "Check out the projects section below!",
    contact: "📧 contact@aashis.dev | 🔗 linkedin.com/in/aashis-chalise",
  },
} as const;

export type SiteConfig = typeof siteConfig;
