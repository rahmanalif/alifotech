import { ButtonLink } from "@/components/ui/button";

const toolItems = [
  { label: "Angular", icon: "A", iconClassName: "bg-[#fff1f0] text-[#dd1b16]" },
  { label: "React JS", icon: "R", iconClassName: "bg-[#ebf8ff] text-[#36b3e8]" },
  { label: "Flutter", icon: "F", iconClassName: "bg-[#e8f2ff] text-[#4d8be5]" },
  { label: "Node JS", icon: "N", iconClassName: "bg-[#edf9ec] text-[#68a063]" },
  { label: "Photoshop", icon: "Ps", iconClassName: "bg-[#0a2748] text-[#31a8ff]" },
  { label: "Illustrator", icon: "Ai", iconClassName: "bg-[#351300] text-[#ff9a00]" },
  { label: "AWS", icon: "aws", iconClassName: "bg-[#fff4e8] text-[#ff9900]" },
  { label: "Figma", icon: "F", iconClassName: "bg-[#f3f0ff] text-[#7a3cff]" },
];

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
    <div className="flex min-w-[9.4rem] items-center gap-3 rounded-[12px] border border-black/5 bg-white px-5 py-3 text-[0.95rem] font-medium text-foreground/85 shadow-[0_6px_18px_rgba(22,27,45,0.05)]">
      <span
        className={`flex h-8 min-w-8 items-center justify-center rounded-[8px] text-sm font-bold ${iconClassName}`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <main className="relative isolate overflow-hidden bg-background">
      <section
        id="about"
        className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-[100rem] flex-col px-4 pb-4 pt-2 sm:px-6 lg:px-8"
      >
        <div className="flex flex-1 flex-col items-center justify-center pb-8 pt-2 text-center sm:pt-2 lg:pb-10 lg:pt-2">
          <div className="w-full">
            <div className="mx-auto max-w-[50rem] space-y-4">
              <h1 className="font-heading text-[38px] font-medium tracking-[-0.055em] text-foreground sm:text-[40px] lg:text-[42px]">
                Trusted Digital,
              </h1>
              <h2 className="font-heading text-[42px] font-medium tracking-[-0.06em] text-primary sm:text-[44px] lg:text-[47px]">
                Transformation Services
              </h2>

              <p className="mx-auto max-w-[46rem] text-[1rem] leading-[1.7] text-[#5f6673] sm:text-[1.08rem]">
                ALO Info-Tech - Nagercoil&apos;s top IT firm with 5+ yrs experience
                &amp; 100+ projects. Experts in apps, websites, AI &amp;
                consulting. Free consultation available!
              </p>

              <div className="flex justify-center pt-3">
                <ButtonLink
                  href="#contact"
                  className="h-auto rounded-[8px] bg-[#111111] px-5 py-[10px] text-[1rem] font-medium text-white shadow-none hover:bg-black"
                >
                  <span className="text-white">Get Started</span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[62rem] overflow-hidden py-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background via-background/90 to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background via-background/90 to-transparent sm:w-20" />

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

              <div className="marquee-group" aria-hidden="true">
                {toolItems.map((tool) => (
                  <ToolBadge
                    key={`clone-two-${tool.label}`}
                    label={tool.label}
                    icon={tool.icon}
                    iconClassName={tool.iconClassName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="careers" className="scroll-mt-32 sr-only" />
        <div id="contact" className="scroll-mt-32 sr-only" />
      </section>
    </main>
  );
}
