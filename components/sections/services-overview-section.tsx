import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  variant?: "text" | "feature-left" | "feature-right";
  desktopClassName?: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: "AI services",
    description:
      "We provide innovative AI services transforming businesses with intelligent solutions.",
    href: "#contact",
    desktopClassName: "lg:col-span-3",
  },
  {
    title: "Mobile App Development",
    description:
      "Custom mobile apps built to deliver smooth user-friendly digital experiences.",
    href: "#contact",
    variant: "feature-right",
    desktopClassName: "lg:col-span-6",
  },
  {
    title: "Website development",
    description:
      "Professional website development ensures responsive, engaging and performance-driven platforms.",
    href: "#contact",
    desktopClassName: "lg:col-span-3",
  },
  {
    title: "Blockchain development",
    description:
      "Secure blockchain development empowering businesses with transparency and trust.",
    href: "#contact",
    variant: "feature-left",
    desktopClassName: "lg:col-span-6",
  },
  {
    title: "Digital marketing",
    description:
      "Boost your brand visibility and engagement with effective digital marketing.",
    href: "#contact",
    desktopClassName: "lg:col-span-3",
  },
  {
    title: "IT consulting",
    description:
      "Expert IT consulting guiding enterprises toward growth, efficiency and innovation.",
    href: "#contact",
    desktopClassName: "lg:col-span-3",
  },
];

function DotIndicator() {
  return (
    <div className="flex items-center justify-center gap-5">
      <span className="h-2.5 w-2.5 rounded-full bg-black" />
      <span className="h-7 w-7 rounded-full bg-black/16" />
    </div>
  );
}

function ServicePreview({ tone = "violet" }: { tone?: "violet" | "cyan" }) {
  const isViolet = tone === "violet";

  return (
    <div
      className={cn(
        "relative h-[200px] overflow-hidden rounded-[16px] border border-white/15",
        isViolet
          ? "bg-[radial-gradient(circle_at_top,rgba(221,82,255,0.24),transparent_32%),linear-gradient(160deg,#0f1625_0%,#111827_55%,#1f2937_100%)]"
          : "bg-[radial-gradient(circle_at_top,rgba(76,217,255,0.2),transparent_36%),linear-gradient(160deg,#0b1320_0%,#122033_55%,#1f2937_100%)]"
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute left-8 top-12 h-20 w-16 rounded-[14px] border border-cyan-300/30 bg-slate-900/75 shadow-[0_15px_30px_rgba(0,0,0,0.35)]" />
      <div className="absolute left-30 top-10 h-26 w-20 rounded-[14px] border border-fuchsia-300/25 bg-slate-900/78 shadow-[0_15px_30px_rgba(0,0,0,0.35)]" />
      <div className="absolute right-24 top-12 h-24 w-18 rounded-[14px] border border-sky-300/25 bg-slate-900/76 shadow-[0_15px_30px_rgba(0,0,0,0.35)]" />
      <div className="absolute right-8 top-16 h-22 w-18 rounded-[14px] border border-cyan-300/25 bg-slate-950/82 shadow-[0_15px_30px_rgba(0,0,0,0.35)]" />
      <div className="absolute left-6 bottom-4 h-14 w-8 rounded-t-[10px] bg-slate-800/95" />
      <div className="absolute left-16 bottom-4 h-16 w-9 rounded-t-[10px] bg-slate-700/95" />
      <div className="absolute left-28 bottom-4 h-18 w-10 rounded-t-[10px] bg-slate-800/95" />
      <div className="absolute right-28 bottom-4 h-16 w-9 rounded-t-[10px] bg-slate-800/95" />
      <div className="absolute right-16 bottom-4 h-18 w-10 rounded-t-[10px] bg-slate-700/95" />
      <div className="absolute right-6 bottom-4 h-14 w-8 rounded-t-[10px] bg-slate-800/95" />
    </div>
  );
}

function ServiceCard({ card, index }: { card: ServiceCard; index: number }) {
  const isFeatured = card.variant === "feature-left" || card.variant === "feature-right";

  return (
    <article
      className={cn(
        "rounded-[22px] border border-black/6 bg-white p-5 shadow-[0_14px_30px_rgba(22,27,45,0.08)] sm:p-6",
        card.desktopClassName
      )}
    >
      <div
        className={cn(
          "flex h-full gap-6",
          card.variant === "feature-right" && "flex-col lg:flex-row",
          card.variant === "feature-left" && "flex-col lg:flex-row-reverse",
          !isFeatured && "flex-col"
        )}
      >
        <div className={cn("flex min-w-0 flex-1 flex-col", isFeatured && "justify-between")}>
          <div className="space-y-5">
            <h3 className="font-heading text-[1.28rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.45rem]">
              {card.title}
            </h3>
            <p className="max-w-[26ch] text-[1rem] leading-8 text-muted">
              {card.description}
            </p>
          </div>

          <ButtonLink
            href={card.href}
            variant="ghost"
            className="mt-8 h-auto justify-start rounded-none px-0 py-0 text-[1rem] font-semibold text-foreground hover:bg-transparent hover:text-foreground"
          >
            Explore more
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        {isFeatured ? (
          <div className="w-full lg:max-w-[50%]">
            <ServicePreview tone={index % 2 === 0 ? "violet" : "cyan"} />
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ServicesOverviewSection() {
  return (
    <section className="bg-background pb-24 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[2.75rem] font-semibold tracking-[-0.05em] text-foreground sm:text-[3.1rem]">
            What we do?
          </h2>
          <p className="mt-4 text-[1rem] text-muted sm:text-[1.1rem]">
            Innovative Solutions for Digital Excellence
          </p>
          <div className="mt-8">
            <DotIndicator />
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {serviceCards.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
