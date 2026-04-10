import Link from "next/link";

const serviceLinks = [
  { label: "AI Services", href: "#contact" },
  { label: "Web Development", href: "#contact" },
  { label: "IT Consulting", href: "#contact" },
  { label: "Mobile App Development", href: "#contact" },
  { label: "Digital Marketing", href: "#contact" },
  { label: "Block Chain", href: "#contact" },
];

const companyLinks = [
  { label: "About us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact us", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Refund Policy", href: "#" },
];

function FooterLogo() {
  return (
    <div className="relative h-[4.4rem] w-[4.4rem]">
      <span className="absolute left-0 top-0 h-8 w-8 rounded-tl-[1.5rem] rounded-br-[1.5rem] bg-white" />
      <span className="absolute right-0 top-0 h-8 w-8 rounded-tr-[1.5rem] rounded-bl-[1.5rem] bg-white" />
      <span className="absolute bottom-0 left-0 h-8 w-8 rounded-tr-[1.5rem] rounded-bl-[1.5rem] bg-white" />
      <span className="absolute bottom-0 right-0 h-8 w-8 rounded-tl-[1.5rem] rounded-br-[1.5rem] bg-white" />
    </div>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
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

function DotLabel({ label }: { label: string }) {
  return (
    <h5 className="flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-white/45">
      <span className="grid h-[0.95rem] w-[0.95rem] place-items-center rounded-full">
        <span className="h-[0.32rem] w-[0.32rem] rounded-full bg-white/60" />
      </span>
      {label}
    </h5>
  );
}

function FooterColumn({
  items,
}: {
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="block text-[0.9rem] text-white/72 transition-colors hover:text-white"
        >
          <p>{item.label}</p>
        </Link>
      ))}
    </div>
  );
}

function SocialIcon({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      target="_blank"
      href={href}
      className="flex text-[1rem] text-white transition-opacity hover:opacity-75"
    >
      {label}
    </Link>
  );
}

export function SiteFooterSection() {
  return (
    <footer className="bg-background pb-10 pt-4">
      <div className="mx-auto max-w-[calc(100%-2rem)] rounded-[0.55rem] bg-[#1f1b1b] px-5 py-6 text-white shadow-[0_18px_44px_rgba(0,0,0,0.14)] sm:px-8 sm:py-8 lg:max-w-[calc(100%-3rem)] lg:px-12 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <Link href="/">
              <FooterLogo />
            </Link>

            <h2 className="max-w-[28rem] font-heading text-[2rem] font-medium leading-[1.35] tracking-[-0.04em] text-white sm:text-[2.2rem]">
              Want to know how ALO Info-Tech can take your business to the next
              level with strategic solutions?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex justify-end">
              <Link
                href="#about"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#1f1b1b] transition-transform hover:-translate-y-0.5"
              >
                <ArrowUpIcon />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
              <FooterColumn items={serviceLinks} />

              <div className="grid gap-8 sm:grid-cols-2">
                <FooterColumn items={companyLinks} />
                <FooterColumn items={legalLinks} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/8 pt-8 lg:grid-cols-[1.1fr_0.8fr_auto] lg:items-end">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <DotLabel label="Contact Us" />
              <div className="space-y-1">
                <Link href="tel:+919994725508" className="block text-[0.95rem] text-white">
                  <p>+91 99947 25508</p>
                </Link>
                <Link
                  target="_blank"
                  href="mailto:contact@aloinfotech.in"
                  className="block text-[0.95rem] text-white"
                >
                  <p>contact@aloinfotech.in</p>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <DotLabel label="Location" />
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/EAbwPEvZU6ngWpSs8"
                className="block text-[0.95rem] text-white"
              >
                <div>
                  <p>Chunkankadai Jn, Nagercoil,</p>
                  <p>Kanniyakumari,</p>
                  <p>629003</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:justify-center">
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=100092521095313&mibextid=eHce3h"
              label="f"
            />
            <SocialIcon
              href="https://www.instagram.com/alo_info_tech?igsh=ZGNjOWZkYTE3MQ=="
              label="◎"
            />
            <SocialIcon
              href="https://www.linkedin.com/company/alo-info-tech/"
              label="in"
            />
          </div>

          <div className="lg:text-right">
            <p className="text-[0.9rem] text-white">copyrights@aloinfotech2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
