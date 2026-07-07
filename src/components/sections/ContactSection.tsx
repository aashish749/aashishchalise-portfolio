"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { Send, Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#contact-linkedin-clip)">
        <path
          d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="contact-linkedin-clip">
          <path d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message",
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  disabled={status === "loading"}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="resize-none bg-background"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-950/30 p-3 text-sm text-green-700 dark:text-green-400">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 p-3 text-sm text-red-700 dark:text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errorMsg}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground">
                Whether you have a project idea, a question, or just want to
                connect, my inbox is always open.
              </p>
            </div>

            <Separator />

            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-primary/50">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm">{siteConfig.email}</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-primary/50">
                  <LinkedInIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    LinkedIn
                  </p>
                  <p className="text-sm">Connect with me</p>
                </div>
              </a>
            </div>

            <Separator />

            <p className="text-sm text-muted-foreground">
              Based in Lisbon, Portugal &mdash; open to both remote and on-site
              opportunities. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
