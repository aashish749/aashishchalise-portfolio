export const siteConfig = {
  // ─── Personal ───
  name: "Aashis Chalise",
  role: "Full Stack Engineer",
  headline: "I build performant, accessible web apps that delight users",
  email: "contact@aashis.dev",
  resumeUrl: "/resume.pdf",

  // ─── Social Links (swap later) ───
  github: "https://github.com/aashish749",
  linkedin: "https://linkedin.com/in/demo",
  twitter: "https://twitter.com/demo",

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
      live: "https://demo.com",
      source: "https://github.com/aashish749/project1",
    },
    {
      title: "MERN Stack Ecommerce Site",
      description:
        "A full-stack ecommerce platform built with MongoDB, Express, React, and Node.js featuring product management, shopping cart, and checkout functionality.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/project2.jpg",
      live: "https://demo.com",
      source: "https://github.com/aashish749/project2",
    },
    {
      title: "Hotel Booking Site",
      description:
        "A full-stack hotel booking platform with room management, booking system, user authentication, and real-time availability checking.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/project3.jpg",
      live: "https://demo.com",
      source: "https://github.com/aashish749/project3",
    },
  ],

  // ─── Terminal Commands ───
  terminalCommands: {
    help: "Available commands: about, skills, projects, contact, social, clear",
    about:
      "Hey! I'm Aashis, a full-stack engineer passionate about building performant, accessible web apps.",
    skills:
      "MERN • PERN • TypeScript • Tailwind • Drizzle • PostgreSQL • MongoDB",
    projects: "Check out the projects section below!",
    contact: "📧 aashishcalise01@gmail.com 🔗 github.com/aashish749",
    social: "GitHub: github.com/aashish749 | LinkedIn: linkedin.com/in/demo",
  },
} as const;

export type SiteConfig = typeof siteConfig;
