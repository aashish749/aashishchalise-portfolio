import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site.config";

type LogoCloudProps = React.ComponentProps<"div">;

// Correct SVG URLs from svgl.app and devicons, plus local images
const TECH_LOGOS: Record<string, string> = {
  TypeScript: "https://svgl.app/library/typescript.svg",
  JavaScript: "https://svgl.app/library/javascript.svg",
  HTML5: "https://svgl.app/library/html5.svg",
  CSS3: "https://svgl.app/library/css.svg",
  React: "https://svgl.app/library/react_light.svg",
  "Next.js": "https://svgl.app/library/nextjs_icon_dark.svg",
  "Redux Toolkit": "https://svgl.app/library/redux.svg",
  Zustand:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
  "TanStack Query": "https://cdn.simpleicons.org/reactquery",
  "Tailwind CSS": "https://svgl.app/library/tailwindcss.svg",
  Motion: "https://svgl.app/library/motion.svg",
  Zod: "https://svgl.app/library/zod.svg",
  "Node.js": "https://svgl.app/library/nodejs.svg",
  "Express.js": "/express-logo.png",
  "REST APIs": "/restapi-logo.png",
  "Socket.io": "/socket-svgrepo-com (1).svg",
  Redis: "https://svgl.app/library/redis.svg",
  PostgreSQL: "https://svgl.app/library/postgresql.svg",
  MongoDB: "https://svgl.app/library/mongodb-icon-light.svg",
  "Drizzle ORM": "https://svgl.app/library/drizzle-orm_light.svg",
  Mongoose: "/mongoose-icon (1).png",
  Docker: "https://svgl.app/library/docker.svg",
  Vercel: "/verc-icon.png",
  Railway: "/railway-icon.png",
  Git: "https://svgl.app/library/git.svg",
  GitHub: "/github-142-svgrepo-com.svg",
  Postman: "https://svgl.app/library/postman.svg",
  n8n: "https://svgl.app/library/n8n.svg",
  WordPress: "https://svgl.app/library/wordpress.svg",
  JWT: "/jwt-token-icon.png",
  Clerk: "/clerk-icon.png",
};

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  const allTech = [
    ...siteConfig.skills.languages,
    ...siteConfig.skills.frontend,
    ...siteConfig.skills.backend,
    ...siteConfig.skills.devops,
    ...siteConfig.skills.tools,
  ];

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-border md:grid-cols-5",
        className,
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border" />

      {allTech.map((tech, index) => {
        const logoUrl = TECH_LOGOS[tech];
        const isLast = index === allTech.length - 1;
        const isSecondLast = index === allTech.length - 2;
        const isDimLogo = ["Express.js", "Socket.io"].includes(tech);

        return (
          <div
            key={tech}
            className={cn(
              "flex flex-col items-center justify-center gap-2 px-4 py-8 md:p-8",
              "border-border",
              index % 2 === 0 ? "border-r" : "",
              index < allTech.length - 2 ? "border-b" : "",
              isSecondLast ? "md:border-r md:border-b-0" : "",
              isLast ? "" : "md:border-r",
              index % 2 === 0 ? "bg-background" : "bg-muted/30",
            )}
          >
            {logoUrl ? (
              <img
                alt={tech}
                className={cn(
                  "pointer-events-none h-5 select-none md:h-6 dark:brightness-0 dark:invert",
                  isDimLogo && "dark:brightness-[1.5] dark:contrast-[1.2]",
                )}
                src={logoUrl}
              />
            ) : null}
            <span className="text-xs font-medium text-muted-foreground">
              {tech}
            </span>
          </div>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border" />
    </div>
  );
}
