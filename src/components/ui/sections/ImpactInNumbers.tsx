const stats = [
  { value: "92%", label: "EFFICIENCY INCREASE" },
  { value: "0.0%", label: "DOWNTIME" },
  { value: "12x", label: "FASTER PROCESSING" },
  { value: "150%", label: "ANNUAL OPEX SAVINGS" },
] as const;

export default function ImpactInNumbers() {
  return (
    <section
      className="bg-gradient-to-b from-[#86AEFF] via-[#94B8FF] to-[#c2d6ff] py-16 md:py-24"
      aria-labelledby="impact-in-numbers-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <h2
          id="impact-in-numbers-heading"
          className="mb-12 text-center text-3xl font-bold tracking-tight text-[#051C42] md:mb-16 md:text-4xl lg:text-5xl"
        >
          IMPACT IN NUMBERS
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" role="list">
          {stats.map((stat) => (
            <article
              key={stat.label}
              role="listitem"
              className="rounded-2xl bg-[#051C42] px-6 py-10 text-center shadow-lg shadow-[#051C42]/20 md:py-12"
            >
              <p
                className="text-4xl font-bold text-[#94B8FF] md:text-5xl lg:text-6xl"
                aria-label={`${stat.value} ${stat.label.toLowerCase()}`}
              >
                {stat.value}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[#94B8FF] md:text-sm">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
