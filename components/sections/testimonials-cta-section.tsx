import { ButtonLink } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  company: string;
  companyMark: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I am sincerely grateful to ALO Info-Tech for delivering an outstanding app that has transformed my business operations. From the first consultation to the final launch, the team showcased exceptional professionalism, deep technical expertise and a clear understanding of our business needs. The app is feature-rich, including a well-designed context menu and functions seamlessly, providing a smooth experience for both my team and customers.",
    name: "Bhaskar",
    company: "Sealed",
    companyMark: "S",
  },
  {
    quote:
      "Thanks to ALO Info-Tech, the Ecotec website now features a modern, user-focused design that enhances both aesthetics and performance. With streamlined navigation, advanced search, and smart filters, exploring the extensive product catalogue is effortless and efficient. This enhancement reflects ALO Info-Tech's commitment to blending creativity, technology, and functionality, ensuring every visitor enjoys a smooth, engaging, and satisfying experience.",
    name: "Kannan Pasupathiraj",
    company: "Ecotec",
    companyMark: "E",
  },
  {
    quote:
      "Working with Alo Info-Tech has been an exceptional experience. Their team is professional, proactive, and always supportive. They understand requirements clearly and deliver innovative solutions, making a noticeable impact on our business growth. Their expertise and dedication ensure smooth and efficient results. They go above and beyond to ensure client satisfaction at every step. I highly recommend Alo Info-Tech as a reliable and forward-thinking technology partner.",
    name: "Mohd Rashid",
    company: "Rare Tech",
    companyMark: "R",
  },
];

function AvatarCard({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="grid h-[58px] w-[58px] place-items-center rounded-[12px] bg-[linear-gradient(180deg,#ffffff_0%,#eceef4_100%)] shadow-[0_6px_14px_rgba(17,17,17,0.08)]">
      <div className="grid h-[44px] w-[44px] place-items-center rounded-full bg-[linear-gradient(135deg,#1f2937_0%,#4b5563_100%)] text-xs font-bold text-white">
        {initials}
      </div>
    </div>
  );
}

function CompanyMark({
  label,
  tone,
}: {
  label: string;
  tone: "green" | "blue" | "gray";
}) {
  const toneClass =
    tone === "green"
      ? "bg-[#e8fff1] text-[#24995f]"
      : tone === "blue"
        ? "bg-[#ebf6ff] text-[#2a73b8]"
        : "bg-[#f1f2f4] text-[#6b7280]";

  return (
    <span
      className={`grid h-7 w-7 place-items-center rounded-lg text-xs font-bold ${toneClass}`}
    >
      {label}
    </span>
  );
}

function TestimonialCard({
  item,
  tone,
}: {
  item: Testimonial;
  tone: "green" | "blue" | "gray";
}) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[0.9rem] border border-black/6 bg-white p-5 shadow-[0_10px_24px_rgba(22,27,45,0.06)]">
      <p className="text-[0.72rem] leading-6 text-muted">{item.quote}</p>

      <div className="mt-8 flex items-center gap-3">
        <AvatarCard name={item.name} />
        <div className="space-y-1">
          <h3 className="font-heading text-[0.98rem] font-semibold tracking-[-0.03em] text-foreground">
            {item.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[0.82rem] text-foreground">{item.company}</span>
            <CompanyMark label={item.companyMark} tone={tone} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsCtaSection() {
  return (
    <section className="bg-background pb-20 pt-6">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[2.35rem] font-medium tracking-[-0.05em] text-foreground sm:text-[2.8rem]">
            Client Testimonial
          </h2>
          <p className="mt-3 text-[0.96rem] text-muted sm:text-[1rem]">
            They trusted us
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <TestimonialCard item={testimonials[0]} tone="green" />
          <TestimonialCard item={testimonials[1]} tone="blue" />
          <TestimonialCard item={testimonials[2]} tone="gray" />
        </div>

        <div className="mx-auto mt-24 max-w-[52rem] text-center">
          <h3 className="font-heading text-[2.35rem] font-medium leading-[1.4] tracking-[-0.06em] text-foreground sm:text-[3.85rem]">
            Interested to discover how your business can achieve strategic
            outcomes with ALO Info-Tech?
          </h3>

          <div className="mt-8 flex justify-center">
            <ButtonLink
              href="#contact"
              size="lg"
              className="h-[2.9rem] min-w-[7.6rem] rounded-[0.7rem] bg-[#111111] text-white shadow-none hover:bg-black"
            >
              <span className="text-white">Get Started</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
