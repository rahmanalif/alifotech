import Link from "next/link";

import { cn } from "@/lib/utils";

type ServiceCard = {
  id: number;
  title: string;
  description: string;
  href: string;
  tone: "ai" | "mobile" | "web" | "blockchain" | "marketing" | "consulting";
};

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "AI services",
    description:
      "We provide innovative AI services transforming businesses with intelligent solutions.",
    href: "#contact",
    tone: "ai",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Custom mobile apps built to deliver smooth user-friendly digital experiences.",
    href: "#contact",
    tone: "mobile",
  },
  {
    id: 3,
    title: "Website development",
    description:
      "Professional website development ensures responsive, engaging and performance-driven platforms.",
    href: "#contact",
    tone: "web",
  },
  {
    id: 4,
    title: "Blockchain development",
    description:
      "Secure blockchain development empowering businesses with transparency and trust.",
    href: "#contact",
    tone: "blockchain",
  },
  {
    id: 5,
    title: "Digital marketing",
    description:
      "Boost your brand visibility and engagement with effective digital marketing.",
    href: "#contact",
    tone: "marketing",
  },
  {
    id: 6,
    title: "It consulting",
    description:
      "Expert IT consulting guiding enterprises toward growth, efficiency and innovation.",
    href: "#contact",
    tone: "consulting",
  },
];

function ServiceImage({ tone }: { tone: ServiceCard["tone"] }) {
  const shellClass =
    tone === "ai"
      ? "bg-[linear-gradient(150deg,#d9c4a5_0%,#efe5ce_42%,#baa587_100%)]"
      : tone === "mobile"
        ? "bg-[linear-gradient(150deg,#10151d_0%,#1d2731_45%,#30404f_100%)]"
        : tone === "web"
          ? "bg-[linear-gradient(150deg,#132533_0%,#244654_45%,#5f8594_100%)]"
          : tone === "blockchain"
            ? "bg-[linear-gradient(150deg,#0f1720_0%,#1b2c3b_45%,#406272_100%)]"
            : tone === "marketing"
              ? "bg-[linear-gradient(150deg,#9a6b3f_0%,#d49b63_45%,#efd4aa_100%)]"
              : "bg-[linear-gradient(150deg,#15212b_0%,#233543_45%,#5d7385_100%)]";

  return (
    <div className={cn("relative h-full min-h-[9rem] overflow-hidden rounded-[0.72rem]", shellClass)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.22))]" />
      <div className="absolute left-5 top-6 h-12 w-8 rounded-[0.35rem] bg-black/26" />
      <div className="absolute left-[3.3rem] top-5 h-14 w-10 rounded-[0.35rem] bg-black/22" />
      <div className="absolute left-[5.9rem] top-7 h-10 w-7 rounded-[0.35rem] bg-black/24" />
      <div className="absolute left-[2.8rem] top-4 h-[5.2rem] w-[7rem] rounded-[0.45rem] border border-white/12 bg-black/18" />
      <div className="absolute right-5 top-5 h-6 w-6 rounded-full bg-white/12" />
      <div className="absolute bottom-5 left-5 h-1.5 w-16 rounded-full bg-white/55" />
      <div className="absolute bottom-5 left-24 h-1.5 w-10 rounded-full bg-white/35" />
    </div>
  );
}

function ServiceCard({ card }: { card: ServiceCard }) {
  return (
    <Link
      href={card.href}
      className="grid min-h-[9.2rem] grid-cols-[1.05fr_0.95fr] gap-3 rounded-[0.9rem] border border-black/6 bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-0.5"
    >
      <div className="flex flex-col justify-between gap-4 p-1">
        <div className="space-y-3">
          <h3 className="font-heading text-[0.95rem] font-semibold tracking-[-0.03em] text-foreground">
            {card.title}
          </h3>
          <p className="text-[0.67rem] leading-5 text-muted">{card.description}</p>
        </div>

        <span className="text-[0.73rem] font-medium text-foreground">
          Explore more <span aria-hidden="true">→</span>
        </span>
      </div>

      <div className="min-h-full">
        <ServiceImage tone={card.tone} />
      </div>
    </Link>
  );
}

export function ServicesOverviewSection() {
  const firstRow = serviceCards.slice(0, 3);
  const secondRow = serviceCards.slice(3, 6);

  return (
    <section id="services" className="scroll-mt-32 bg-background pb-22 pt-10">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-[2.35rem] font-medium tracking-[-0.05em] text-foreground sm:text-[2.8rem]">
            What we do?
          </h2>
          <p className="mt-3 text-[0.96rem] text-muted sm:text-[1rem]">
            Innovative Solutions for Digital Excellence
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {firstRow.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {secondRow.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
