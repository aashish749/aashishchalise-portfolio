import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site.config";

const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#footer-linkedin-clip)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="footer-linkedin-clip">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.791 2.188 8.46 5.996 5.58 2.188H1.408l4.984 6.518-4.723 5.399H3.69l3.646-4.166 3.187 4.166h4.068l-5.196-6.87 4.417-5.047zm-.71 10.707L3.77 3.335h1.2l7.23 9.56z"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            {/* Brand Column */}
            <div className="col-span-full lg:col-span-5">
              <div className="flex flex-col gap-6">
                <a href="#" className="text-xl font-bold text-foreground">
                  {siteConfig.name}
                </a>
                <p className="text-base font-normal text-muted-foreground max-w-sm">
                  Full Stack Engineer focused on building performant, accessible
                  web applications with modern technologies.
                </p>
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href={siteConfig.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden"></div>

            {/* Quick Links */}
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">
                  Quick Links
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="#projects"
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">
                  Get in Touch
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <p className="text-sm font-normal text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with
            Next.js, Tailwind CSS & shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
