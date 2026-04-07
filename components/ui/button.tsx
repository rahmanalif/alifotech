import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost";
type ButtonSize = "default" | "lg" | "icon";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = SharedProps & {
  href: string;
};

export function buttonVariants({
  className,
  variant = "default",
  size = "default",
}: Pick<SharedProps, "className" | "variant" | "size">) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    variant === "default" &&
      "bg-secondary text-white shadow-[0_10px_30px_rgba(17,17,17,0.14)] hover:-translate-y-0.5 hover:bg-black",
    variant === "secondary" &&
      "border border-border bg-card text-[#111111] hover:border-black/15 hover:bg-white",
    variant === "ghost" && "text-foreground hover:bg-black/5",
    size === "default" && "h-[44px] px-5 text-sm",
    size === "lg" && "h-12 px-6 text-base",
    size === "icon" && "h-[44px] w-[44px]",
    className
  );
}

export function Button(props: ButtonProps) {
  const { className, variant, size, children, ...rest } = props;
  const resolvedClassName = buttonVariants({ className, variant, size });

  return (
    <button className={resolvedClassName} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  className,
  variant,
  size,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonVariants({ className, variant, size })}>
      {children}
    </Link>
  );
}
