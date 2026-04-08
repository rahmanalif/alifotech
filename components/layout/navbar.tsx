import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { navbarItems } from "@/components/layout/navbar.config";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <span className="relative grid h-8 w-8 place-items-center">
      <span className="absolute h-4 w-4 -translate-x-1.5 rounded-full bg-[#ff5f2e]" />
      <span className="absolute h-4 w-4 translate-x-1.5 rounded-full bg-[#2878c8]" />
      <span className="absolute h-4 w-4 -translate-y-1.5 rounded-full bg-[#ffb703]" />
      <span className="absolute h-4 w-4 translate-y-1.5 rounded-full bg-[#ff7b72]" />
    </span>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1.05rem] w-[1.05rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.84 19.84 0 0 1-8.63-3.07A19.52 19.52 0 0 1 5.15 12.8 19.84 19.84 0 0 1 2.08 4.09 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.94a16 16 0 0 0 6.06 6.06l1.48-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-[32px] border border-white/70 bg-white/90 px-5 py-4 shadow-[0_18px_40px_rgba(22,27,45,0.08)] backdrop-blur md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <BrandMark />
          <div className="flex items-center gap-1 text-[1.85rem] leading-none tracking-[-0.04em]">
            <span className="font-heading font-semibold text-foreground">alo</span>
            <span className="font-sans text-[1.55rem] font-medium text-foreground/90">
              infotech
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navbarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-6 text-base font-semibold text-foreground/80 transition-colors xl:text-[1.05rem]",
                "hover:text-foreground"
              )}
            >
              <span className="whitespace-nowrap">{item.label}</span>
              {item.hasIndicator ? <ChevronDownIcon /> : null}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href="#contact"
          className="min-w-[168px] shrink-0 bg-[#111111] text-white hover:bg-black"
        >
          <span className="text-white">Book a call</span>
          <PhoneIcon />
        </ButtonLink>
      </div>
    </header>
  );
}
