import Link from "next/link";

const servicesLinks = [
  "AI Services",
  "Web Development",
  "IT Consulting",
  "Mobile App Development",
  "Digital Marketing",
  "Block Chain",
];

const companyLinks = ["About us", "Careers", "Contact us"];
const legalLinks = ["Privacy Policy", "Terms & Conditions", "Refund Policy"];

function FooterMark() {
  return (
    <div className="relative h-20 w-20">
      <span className="absolute left-0 top-0 h-9 w-9 rounded-tl-[28px] rounded-br-[28px] bg-white" />
      <span className="absolute right-0 top-0 h-9 w-9 rounded-tr-[28px] rounded-bl-[28px] bg-white" />
      <span className="absolute left-0 bottom-0 h-9 w-9 rounded-tr-[28px] rounded-bl-[28px] bg-white" />
      <span className="absolute right-0 bottom-0 h-9 w-9 rounded-tl-[28px] rounded-br-[28px] bg-white" />
    </div>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="text-xl font-semibold text-white/95 transition-opacity hover:opacity-70"
    >
      {label}
    </Link>
  );
}

function FooterLinks({
  title,
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <div className="space-y-5">
      {title ? (
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
          {title}
        </h3>
      ) : null}
      <div className="space-y-4">
        {items.map((item) => (
          <Link
            key={item}
            href="#"
            className="block text-[1rem] text-white/72 transition-colors hover:text-white"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooterSection() {
  return (
    <footer className="bg-background pb-10 pt-4">
      <div className="mx-auto max-w-[calc(100%-3rem)] rounded-[18px] bg-[#1f1a1a] px-5 py-6 text-white shadow-[0_22px_55px_rgba(0,0,0,0.14)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <div className="flex items-start justify-between gap-6">
          <div className="relative">
            <FooterMark />
            <div className="absolute left-10 top-[-14px] h-6 w-6 rounded-full bg-white/22" />
          </div>

          <Link
            href="#about"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#1f1a1a] transition-transform hover:-translate-y-0.5"
          >
            <ArrowUpIcon />
          </Link>
        </div>

        <div className="mt-4 grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="space-y-14">
            <h2 className="max-w-4xl font-heading text-[2.4rem] font-medium leading-[1.35] tracking-[-0.04em] text-white sm:text-[2.9rem]">
              Want to know how ALO Info-Tech can take your business to the next
              level with strategic solutions?
            </h2>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/42">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                  <span>Contact Us</span>
                </div>
                <div className="space-y-1 text-[1.05rem] text-white">
                  <p>+91 99947 25508</p>
                  <p>contact@aloinfotech.in</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/42">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                  <span>Location</span>
                </div>
                <div className="space-y-1 text-[1.05rem] text-white">
                  <p>Chunkankadai Jn, Nagercoil,</p>
                  <p>Kanniyakumari,</p>
                  <p>629003</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 pt-6 sm:grid-cols-3 lg:pt-12">
            <FooterLinks items={servicesLinks} />
            <FooterLinks items={companyLinks} />
            <FooterLinks items={legalLinks} />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/8 pt-8 sm:flex-row">
          <div className="flex items-center gap-6">
            <SocialIcon label="f" />
            <SocialIcon label="◎" />
            <SocialIcon label="in" />
          </div>

          <p className="text-[1rem] text-white">copyrights@aloinfotech2026</p>
        </div>
      </div>
    </footer>
  );
}
