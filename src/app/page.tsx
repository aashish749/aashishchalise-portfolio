"use client";

import { useEffect } from "react";
import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import { Hero7 } from "@/components/hero7";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site.config";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { ContactSection } from "@/components/sections/ContactSection";
import GridBackground from "@/components/GridBackground";
import { SeparatorGrid } from "@/components/ui/extension/seperatorGrid";

export default function HomePage() {
  // Scroll to top on initial load (if no hash in URL)
  useEffect(() => {
    // Prevent browser scroll restoration from overriding our scroll position
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
    if (window.location.hash === "" || window.location.hash === "#") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-[60px]">
        {/* Hero */}
        <section className="relative">
          <GridBackground opacity={0.2} cellSize={20} lineWidth={1} />
          <Hero7
            heading={`Hi, I'm ${siteConfig.name}`}
            description={`${siteConfig.role} — ${siteConfig.headline}`}
            buttons={{
              primary: {
                text: "View My Work",
                url: "#projects",
              },
              secondary: {
                text: "Let's Talk",
                url: "#contact",
              },
            }}
          />
        </section>

        {/* Terminal */}
        <section className="bg-muted/50">
          <TerminalSection />
        </section>

        {/* Projects */}
        <section id="projects" className="relative py-24 md:py-32">
          <GridBackground
            opacity={0.2}
            cellSize={20}
            lineWidth={1}
            speed={0.4}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Selected Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Some things I've built recently.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-104"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold text-muted-foreground/30">
                          {(
                            project as (typeof siteConfig.projects)[number]
                          ).title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills / Technologies — Logo Cloud */}
        <section id="skills" className="bg-muted/50 pt-24 pb-5 md:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Technologies
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Technologies I work with on a daily basis.
              </p>
            </div>
            <LogoCloud />
          </div>
        </section>

        {/* Contact */}
        <section className="">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
