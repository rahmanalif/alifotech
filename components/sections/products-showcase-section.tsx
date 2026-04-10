import Link from "next/link";

type ProductCard = {
  title: string;
  description: string;
  href: string;
  tone: "alora" | "fastx" | "invoice";
  target?: string;
};

const productCards: ProductCard[] = [
  {
    title: "Alora",
    description: "Your smart chat companion simplifying ordering and tracking daily.",
    href: "#contact",
    tone: "alora",
  },
  {
    title: "Fastx",
    description: "Fast, reliable food delivery app offering seamless user experiences.",
    href: "https://play.google.com/store/apps/details?id=com.fastx.consumer",
    tone: "fastx",
    target: "__",
  },
  {
    title: "Alo Invoice",
    description: "Effortlessly create, manage and track your invoices smartly.",
    href: "https://play.google.com/store/apps/details?id=com.alo_invoice.restaurant",
    tone: "invoice",
    target: "___",
  },
];

function ProductImage({ tone }: { tone: ProductCard["tone"] }) {
  if (tone === "alora") {
    return (
      <div className="relative h-[7.2rem] overflow-hidden rounded-[0.82rem] bg-[linear-gradient(135deg,#f98b3d_0%,#f26b49_48%,#e04d6f_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
        <div className="absolute left-4 top-3 h-[4.5rem] w-[3rem] rounded-[0.45rem] border border-white/55 bg-white/92 shadow-[0_8px_16px_rgba(0,0,0,0.12)]" />
        <div className="absolute left-[4.3rem] top-2 h-[5.2rem] w-[5.8rem] rounded-[0.55rem] bg-white/16" />
        <div className="absolute left-[11rem] top-5 h-[2rem] w-[2rem] rounded-full bg-white/18" />
      </div>
    );
  }

  if (tone === "fastx") {
    return (
      <div className="relative h-[7.2rem] overflow-hidden rounded-[0.82rem] bg-[linear-gradient(135deg,#ff7a20_0%,#ff9327_42%,#f76a14_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_32%)]" />
        <div className="absolute left-4 top-4 h-[3.7rem] w-[2.4rem] rounded-[0.45rem] border border-black/15 bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)]" />
        <div className="absolute left-[5rem] top-2 z-10 h-[5.6rem] w-[3rem] rounded-[0.75rem] border border-black/15 bg-white shadow-[0_10px_18px_rgba(0,0,0,0.14)]" />
        <div className="absolute left-[9.1rem] top-4 h-[4.4rem] w-[2.6rem] rounded-[0.55rem] border border-black/15 bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)]" />
      </div>
    );
  }

  return (
    <div className="relative h-[7.2rem] overflow-hidden rounded-[0.82rem] bg-[linear-gradient(135deg,#1e43c5_0%,#2d56e0_42%,#2030aa_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%)]" />
      <div className="absolute left-4 top-3 h-[4.2rem] w-[2.7rem] rounded-[0.55rem] border border-black/15 bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)]" />
      <div className="absolute left-[5.2rem] top-2 z-10 h-[5.8rem] w-[3.2rem] rounded-[0.9rem] border border-black/15 bg-white shadow-[0_10px_18px_rgba(0,0,0,0.14)]" />
      <div className="absolute left-[10rem] top-4 h-[4rem] w-[2.5rem] rounded-[0.55rem] border border-black/15 bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function ProductCard({ product }: { product: ProductCard }) {
  return (
    <Link
      href={product.href}
      target={product.target}
      className="block w-full transition-transform hover:-translate-y-0.5"
    >
      <article className="rounded-[1rem] border border-black/6 bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
        <div className="rounded-[0.95rem] bg-[#f7f5ef] p-2">
          <ProductImage tone={product.tone} />
        </div>

        <div className="space-y-4 px-1 pb-1 pt-4">
          <h3 className="font-heading text-[1.25rem] font-medium tracking-[-0.03em] text-foreground">
            {product.title}
          </h3>
          <p className="max-w-[30ch] text-[0.68rem] leading-5 text-foreground/76">
            {product.description}
          </p>
          <h4 className="text-[0.72rem] font-medium text-foreground">
            Get Started <span aria-hidden="true">→</span>
          </h4>
        </div>
      </article>
    </Link>
  );
}

export function ProductsShowcaseSection() {
  return (
    <section className="bg-background pb-24 pt-8">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-[2.35rem] font-medium tracking-[-0.05em] text-foreground sm:text-[2.8rem]">
            Our Products
          </h2>
          <p className="mt-3 text-[0.96rem] text-muted sm:text-[1rem]">
            Exploring excellence in every creation
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {productCards.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
