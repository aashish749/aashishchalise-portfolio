"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { siteConfig } from "@/lib/site.config";

type Command = {
  cmd: string;
  output: string;
};

const COMMANDS: Record<string, string> = {
  help: "Available commands: about, skills, projects, contact, clear",
  about: siteConfig.terminalCommands.about,
  skills: siteConfig.terminalCommands.skills,
  projects: siteConfig.terminalCommands.projects,
  contact: siteConfig.terminalCommands.contact,
};

function getSkillsMenu(): string {
  return [
    "━━━ Skills Categories ━━━",
    "",
    " - frontend      ",
    " - backend       ",
    " - devops-tools  ",
    " - all          ",
    "",
    "Type: skills <category>",
    "Eg. : skills frontend",
  ].join("\n");
}

function getSkillsOutput(subcommand: string): string {
  const { skills } = siteConfig;

  switch (subcommand) {
    case "frontend":
      return ["━━━ Frontend ━━━", "", `  ${skills.frontend.join("\n  ")}`].join(
        "\n",
      );
    case "backend":
      return ["━━━ Backend ━━━", "", `  ${skills.backend.join("\n  ")}`].join(
        "\n",
      );
    case "devops-tools":
      return [
        "━━━ DevOps & Tools ━━━",
        "",
        `  Languages: ${skills.languages.join(", ")}`,
        `  Tools: ${skills.tools.join(", ")}`,
        `  DevOps: ${skills.devops.join(", ")}`,
      ].join("\n");
    case "all":
      return [
        "━━━ All Skills ━━━",
        "",
        `  Frontend: ${skills.frontend.join(", ")}`,
        `  Backend: ${skills.backend.join(", ")}`,
        `  Languages: ${skills.languages.join(", ")}`,
        `  Tools: ${skills.tools.join(", ")}`,
        `  DevOps: ${skills.devops.join(", ")}`,
      ].join("\n");
    default:
      return getSkillsMenu();
  }
}

function getProjectsOutput(): string {
  return siteConfig.projects
    .map((p) => `━━━ ${p.title} ━━━\n  ${p.description}\n  🔗 ${p.live}`)
    .join("\n\n");
}

export function TerminalSection() {
  const [history, setHistory] = useState<Command[]>([
    {
      cmd: "",
      output: `Welcome to ${siteConfig.name}'s interactive terminal.`,
    },
    { cmd: "", output: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inputRef.current?.focus({ preventScroll: true });
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    if (!trimmed) {
      setHistory((prev) => [...prev, { cmd, output: "" }]);
      return;
    }

    let output: string;

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (trimmed === "help") {
      output = COMMANDS.help;
    } else if (trimmed.startsWith("skills ")) {
      const subcommand = trimmed.replace("skills ", "").trim();
      output = getSkillsOutput(subcommand);
    } else if (trimmed === "skills") {
      output = getSkillsMenu();
    } else if (trimmed === "projects") {
      output = getProjectsOutput();
    } else if (COMMANDS[trimmed]) {
      output = COMMANDS[trimmed];
    } else {
      output = `Command not found: ${trimmed}. Type "help" for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: trimmed, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isTyping) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <section ref={sectionRef} id="terminal" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Interactive Terminal
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore my profile through the command line.
          </p>
        </div>

        <div
          onClick={handleTerminalClick}
          className="overflow-hidden rounded-lg border border-border bg-black shadow-xl"
        >
          <div className="flex items-center gap-1.5 border-b border-border/50 px-4 py-2.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              {siteConfig.name.toLowerCase().replace(/\s+/g, "-")}@portfolio:~$
            </span>
          </div>

          <div
            ref={terminalRef}
            className="h-80 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-1">
                {entry.cmd && (
                  <div className="flex">
                    <span className="shrink-0 text-green-400">
                      aashis@portfolio:~${" "}
                    </span>
                    <span className="text-foreground">{entry.cmd}</span>
                  </div>
                )}
                {entry.output && (
                  <div className="mb-2 pl-0 text-green-400/80 whitespace-pre-line">
                    {entry.output}
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center">
              <span className="shrink-0 text-green-400">
                aashis@portfolio:~${" "}
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground outline-none caret-green-400"
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
