import { ButtonLink } from "@/components/ui/button";

type ProductCard = {
  title: string;
  description: string;
  href: string;
  tone: "sunset" | "orange" | "blue";
};

const productCards: ProductCard[] = [
  {
    title: "Alora",
    description: "Your smart chat companion simplifying ordering and tracking daily.",
    href: "#contact",
    tone: "sunset",
  },
  {
    title: "Fastx",
    description: "Fast, reliable food delivery app offering seamless user experiences.",
    href: "#contact",
    tone: "orange",
  },
  {
    title: "Alo Invoice",
    description: "Effortlessly create, manage and track your invoices smartly.",
    href: "#contact",
    tone: "blue",
  },
];

function ProductPreview({ tone }: { tone: ProductCard["tone"] }) {
  if (tone === "sunset") {
    return (
      <div className="relative h-[208px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#f37a2d_0%,#ef6c32_35%,#ea5e4f_70%,#e74b5a_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute left-9 top-16 h-[128px] w-[78px] rounded-[14px] border border-white/55 bg-white/92 shadow-[0_16px_30px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-1/2 top-5 h-[140px] w-[152px] -translate-x-1/2 rounded-[16px] border border-white/25 bg-white/14 backdrop-blur-sm" />
        <div className="absolute right-8 top-8 h-[44px] w-[44px] rounded-full bg-white/18" />
        <div className="absolute left-12 top-23 h-2 w-14 rounded-full bg-orange-300/80" />
        <div className="absolute left-12 top-28 h-2 w-10 rounded-full bg-slate-200/90" />
        <div className="absolute left-[42%] top-12 h-3 w-14 rounded-full bg-white/45" />
        <div className="absolute left-[42%] top-18 h-3 w-24 rounded-full bg-white/20" />
        <div className="absolute left-[42%] top-28 h-10 w-24 rounded-[10px] bg-white/24" />
        <div className="absolute left-[48%] top-[116px] h-4 w-12 rounded-full bg-white/78" />
      </div>
    );
  }

  if (tone === "orange") {
    return (
      <div className="relative h-[208px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#ff7d22_0%,#ff8a26_35%,#fb6f18_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
        <div className="absolute left-10 top-12 h-[132px] w-[86px] rounded-[18px] border border-black/20 bg-white shadow-[0_18px_30px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-[36%] top-6 z-10 h-[170px] w-[110px] -translate-x-1/2 rounded-[24px] border border-black/20 bg-white shadow-[0_18px_30px_rgba(0,0,0,0.2)]" />
        <div className="absolute right-12 top-10 h-[150px] w-[96px] rounded-[20px] border border-black/20 bg-white shadow-[0_18px_30px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-14 top-20 h-6 w-12 rounded bg-lime-400" />
        <div className="absolute left-14 top-30 h-2 w-10 rounded-full bg-slate-200" />
        <div className="absolute left-[31%] top-12 h-5 w-10 rounded-full bg-orange-300" />
        <div className="absolute left-[31%] top-24 h-16 w-16 rounded-full bg-orange-200/80" />
        <div className="absolute left-[31%] top-42 h-4 w-18 rounded-full bg-red-400/80" />
        <div className="absolute right-16 top-18 h-6 w-12 rounded bg-lime-400" />
        <div className="absolute right-16 top-30 h-4 w-14 rounded-full bg-orange-300" />
      </div>
    );
  }

  return (
    <div className="relative h-[208px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#1934b9_0%,#2540cd_35%,#1f2fab_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%)]" />
      <div className="absolute left-12 top-12 h-[142px] w-[88px] rounded-[20px] border border-black/25 bg-white shadow-[0_18px_30px_rgba(0,0,0,0.22)]" />
      <div className="absolute left-1/2 top-5 z-10 h-[176px] w-[128px] -translate-x-1/2 rounded-[26px] border border-black/25 bg-white shadow-[0_20px_32px_rgba(0,0,0,0.24)]" />
      <div className="absolute right-9 top-16 h-[132px] w-[82px] rounded-[18px] border border-black/25 bg-white shadow-[0_18px_30px_rgba(0,0,0,0.22)]" />
      <div className="absolute left-[18%] top-24 h-16 w-14 rounded-[10px] bg-blue-500/90" />
      <div className="absolute left-[22%] top-46 h-4 w-10 rounded-full bg-blue-200" />
      <div className="absolute left-1/2 top-28 z-20 h-18 w-18 -translate-x-1/2 rounded-[14px] bg-blue-500/95" />
      <div className="absolute left-1/2 top-47 z-20 h-3 w-12 -translate-x-1/2 rounded-full bg-blue-300" />
      <div className="absolute right-[10%] top-26 h-10 w-16 rounded-full border-4 border-blue-300/90" />
      <div className="absolute right-[12%] top-40 h-12 w-18 rounded-full border-4 border-blue-200/80" />
    </div>
  );
}

function ProductCard({ product }: { product: ProductCard }) {
  return (
    <article className="rounded-[24px] border border-black/6 bg-white p-4 shadow-[0_14px_30px_rgba(22,27,45,0.08)] sm:p-5">
      <ProductPreview tone={product.tone} />

      <div className="space-y-6 px-2 pb-2 pt-5">
        <h3 className="font-heading text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground">
          {product.title}
        </h3>
        <p className="max-w-[31ch] text-[1rem] leading-8 text-foreground">
          {product.description}
        </p>
        <ButtonLink
          href={product.href}
          variant="ghost"
          className="h-auto justify-start rounded-none px-0 py-0 text-[1rem] font-medium text-foreground hover:bg-transparent hover:text-foreground"
        >
          Get Started
          <span aria-hidden="true">→</span>
        </ButtonLink>
      </div>
    </article>
  );
}

export function ProductsShowcaseSection() {
  return (
    <section className="bg-background pb-28 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[2.7rem] font-semibold tracking-[-0.05em] text-foreground sm:text-[3rem]">
            Our Products
          </h2>
          <p className="mt-4 text-[1rem] text-muted sm:text-[1.1rem]">
            Exploring excellence in every creation
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {productCards.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
