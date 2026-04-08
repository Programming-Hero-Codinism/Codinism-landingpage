import { Globe } from "lucide-react";
import Image from "next/image";

const WORLD_MAP_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfojO8UTMDGpYe5lb1lAsXvVzeg9_rQyprN_3skcMqblfW64U54wdC5-suZPhkVOclYv0JhoZWwKAMsMe1VURJc8660AdiNoeNTjoYoVEyedDkYKY05tvXfPamQxieEMKKHqunS2bgtzsnu4RgOEB1uPg7SJtka2Si3NK3vBbBPgFz2E-J_h7uJgIFdWTEB9Wd_MDxAnMMUvl9csANg9CY5TWE0WCpO9mBfwLQpv1v62DQ4dRrH3DY9CYjk36r9ygitA_bWj5bjzE";

const stats = [
  { value: "29", label: "PROJECTS DELIVERED" },
  { value: "30+", label: "COUNTRIES REACHED" },
] as const;

export default function GlobalFootprint() {
  return (
    <section className="relative overflow-hidden border-l-4 border-[#0154ca] bg-[#131313] py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-tighter text-white md:text-5xl">
              Global Footprint
            </h2>
            <div className="space-y-12 md:space-y-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-6xl font-black text-[#84adff] drop-shadow-[0_0_15px_rgba(132,173,255,0.3)] md:text-7xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-sm tracking-[0.2em] text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-[min(500px,70vh)] items-center justify-center overflow-hidden rounded-2xl bg-[#1a1919]">
            <Image
              src={WORLD_MAP_SRC}
              alt="World map illustrating global reach"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1919] via-transparent to-[#84adff]/10" />

            <div className="relative z-10 mx-4 max-w-md rounded-xl border border-white/10 bg-[#262626]/60 p-8 text-center backdrop-blur-md">
              <Globe className="mx-auto h-12 w-12 text-[#84adff]" strokeWidth={1.25} aria-hidden />
              <p className="mt-4 text-lg text-white">
                Operating across 4 timezones with 24/7 technical oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
