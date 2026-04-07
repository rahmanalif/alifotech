import { Navbar } from "@/components/layout/navbar";
import { ButtonLink } from "@/components/ui/button";

const toolItems = [
  { label: "Flutter", icon: "F", iconClassName: "bg-[#e8f2ff] text-[#4d8be5]" },
  { label: "Node JS", icon: "N", iconClassName: "bg-[#edf9ec] text-[#68a063]" },
  { label: "Photoshop", icon: "Ps", iconClassName: "bg-[#0a2748] text-[#31a8ff]" },
  { label: "Illustrator", icon: "Ai", iconClassName: "bg-[#351300] text-[#ff9a00]" },
  { label: "AWS", icon: "aws", iconClassName: "bg-[#fff4e8] text-[#ff9900]" },
  { label: "Figma", icon: "F", iconClassName: "bg-[#f3f0ff] text-[#7a3cff]" },
  { label: "Angular", icon: "A", iconClassName: "bg-[#fff1f0] text-[#dd1b16]" },
];

function Sparkle() {
  return (
    <div className="absolute left-4 top-4 h-4 w-4 rounded-full bg-black/10 blur-[1px] md:left-9 md:top-8 md:h-6 md:w-6" />
  );
}

function GetStartedIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ToolBadge({
  label,
  icon,
  iconClassName,
}: {
  label: string;
  icon: string;
  iconClassName: string;
}) {
  return (
    <div className="flex min-w-max items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-5 py-3 text-base font-semibold text-foreground/85 shadow-[0_12px_24px_rgba(22,27,45,0.06)] backdrop-blur">
      <span
        className={`flex h-9 min-w-9 items-center justify-center rounded-xl text-sm font-bold ${iconClassName}`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <main className="hero-grid relative isolate overflow-hidden bg-background">
      <Sparkle />

      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top,rgba(40,120,200,0.14),transparent_48%)]" />
      <div className="absolute inset-x-0 top-[24%] -z-10 h-[420px] bg-[radial-gradient(circle,rgba(255,255,255,0.9),transparent_62%)]" />

      <section
        id="about"
        className="mx-auto flex min-h-screen w-full max-w-8xl flex-col px-4 pb-10 pt-22 sm:px-6 lg:px-8"
      >
        <Navbar />

        <div className="flex flex-1 flex-col items-center justify-center pb-10 pt-16 text-center sm:pt-20 lg:pb-16 lg:pt-24">
          <div className="max-w-5xl space-y-8">
            <div className="space-y-5">
              <p className="mx-auto inline-flex items-center rounded-full border border-border bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-sm">
                Trusted Digital Partner
              </p>

              <h1 className="font-heading text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Trusted Digital,
                <span className="mt-2 block text-primary">Transformation Services</span>
              </h1>

              <p className="mx-auto max-w-3xl text-base leading-8 text-muted sm:text-lg">
                ALO Info-Tech is a Nagercoil-based IT firm delivering apps,
                websites, AI solutions, and consulting with a sharp product
                mindset, clean execution, and senior-level delivery standards.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink
                href="#contact"
                size="lg"
                className="min-w-[160px] bg-[#111111] text-white hover:bg-black"
              >
                <span className="text-white">Get Started</span>
                <GetStartedIcon />
              </ButtonLink>
              <ButtonLink
                href="#services"
                variant="secondary"
                size="lg"
                className="min-w-[176px] border-[#e6e7eb] bg-white text-[#111111] hover:border-[#d9dbe1] hover:bg-white"
              >
                <span className="text-[#111111]">Explore Services</span>
              </ButtonLink>
            </div>
          </div>
        </div>

        <div id="services" className="relative mx-auto w-full max-w-7xl overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

          <div className="marquee-shell">
            <div className="marquee-track">
              <div className="marquee-group">
                {toolItems.map((tool) => (
                  <ToolBadge
                    key={`primary-${tool.label}`}
                    label={tool.label}
                    icon={tool.icon}
                    iconClassName={tool.iconClassName}
                  />
                ))}
              </div>

              <div className="marquee-group" aria-hidden="true">
                {toolItems.map((tool) => (
                  <ToolBadge
                    key={`clone-${tool.label}`}
                    label={tool.label}
                    icon={tool.icon}
                    iconClassName={tool.iconClassName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="careers" className="sr-only" />
        <div id="contact" className="sr-only" />
      </section>
    </main>
  );
}
