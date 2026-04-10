import { cn } from "@/lib/utils";

const tabs = ["ALO School", "ALO Edu Hub", "Alo Tech Farm"];

function GroupImage() {
  return (
    <div className="relative h-[18.5rem] overflow-hidden rounded-[0.95rem] bg-[linear-gradient(160deg,#efe8cd_0%,#f7f4e7_38%,#d8c59f_100%)]">
      <div className="absolute left-4 top-5 h-44 w-20 rounded-r-full bg-white/68 blur-sm" />
      <div className="absolute left-12 top-0 h-full w-px bg-[#dfd1ab]" />
      <div className="absolute left-20 top-10 h-32 w-[10rem] rounded-[0.85rem] border border-[#c4b184] bg-white/50" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(205,184,131,0.06),rgba(154,120,69,0.28))]" />
      <div className="absolute bottom-7 left-8 h-20 w-16 rounded-[0.75rem] bg-[#8e7455]" />
      <div className="absolute bottom-7 left-[7rem] h-28 w-[4.8rem] rounded-[0.75rem] bg-[#524232]" />
      <div className="absolute bottom-7 left-[13rem] h-16 w-14 rounded-[0.75rem] bg-[#76604b]" />
      <div className="absolute bottom-8 left-[6.4rem] h-12 w-24 rounded-full bg-[#e3c677]/65 blur-xl" />
    </div>
  );
}

function GroupLogo() {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm">
        <span className="absolute h-3 w-3 rounded-full bg-[#f39a31]" />
        <span className="absolute translate-x-1.5 h-3 w-3 rounded-full bg-[#2f73d9]" />
      </span>
      <div className="text-left">
        <p className="text-[0.82rem] font-semibold text-foreground">ALO School</p>
        <p className="text-[0.56rem] uppercase tracking-[0.14em] text-[#7b808a]">
          Design &amp; Technology
        </p>
      </div>
    </div>
  );
}

export function GroupCompaniesSection() {
  return (
    <section className="bg-background pb-24 pt-6">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-[2.35rem] font-medium tracking-[-0.05em] text-foreground sm:text-[2.8rem]">
            Our Group of Companies
          </h2>
          <p className="mt-3 text-[0.96rem] text-muted sm:text-[1rem]">
            Journey into Thoughtful Perspectives
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-black/6 bg-white p-1 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                aria-pressed={index === 0}
                className={cn(
                  "relative rounded-full px-5 py-2 text-[0.78rem] font-medium text-[#858b96] transition-colors",
                  index === 0 && "bg-[#f6f4ef] text-foreground"
                )}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <article className="grid gap-5 rounded-[1rem] border border-black/6 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)] md:grid-cols-[0.92fr_1.08fr] md:p-5">
            <div>
              <GroupImage />
            </div>

            <div className="flex flex-col justify-between gap-6 py-2">
              <div>
                <h3 className="font-heading text-[1.6rem] font-medium tracking-[-0.04em] text-foreground">
                  ALO School Of Design &amp; Technology
                </h3>
                <p className="mt-3 text-[0.72rem] leading-6 text-[#5f6673]">
                  At Alo School of Design and Technology, learning goes beyond
                  books and lectures, offering students hands-on experience in
                  design and technology through real-world projects,
                  collaborative workshops and industry-relevant assignments.
                  With continuous guidance from expert faculty and a supportive
                  environment, students build technical skills, creativity and
                  confidence while developing a strong foundation for their
                  future careers. Our programs combine design thinking,
                  emerging technologies and professional ethics, preparing
                  students to innovate, solve problems and excel in the dynamic
                  world of design and technology, while also providing
                  opportunities for internships, mentorship and industry
                  connections to ensure a smooth transition into professional
                  success.
                </p>
              </div>

              <GroupLogo />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
