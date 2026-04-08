import { SectionTitle } from "@/components/custom";

const clientMessages = [
  {
    message:
      "Codinism understood our product vision quickly and delivered beyond expectations with smooth communication throughout the project.",
    companyName: "Doorstep Service",
    clientName: "Jack , CTO of Doorstep Service",
  },
  {
    message:
      "Their team translated our requirements into a clean, scalable solution. Delivery was fast, and the final quality was excellent.",
    companyName: "Zenyora",
    clientName: "Rasel , CPO of Zenyora",
  },
  {
    message:
      "From planning to launch, everything felt structured and transparent. We now have a product that our users genuinely love.",
    companyName: "Forward Flow",
    clientName: "Sarah Johnson , CEO of Forward Flow",
  },
];

export default function ClientMessages() {
  return (
    <section className="mt-16 text-white" id="client-messages">
      <SectionTitle size="2xl" className="text-center text-white">
        Their message
      </SectionTitle>
      <p className="mt-3 text-center text-sm text-white/70 md:text-base">
        Trust us , we didn't hold them on gun point
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {clientMessages.map((item, index) => (
          <article
            key={index}
            className="border border-secondary bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-base leading-relaxed text-white/90">"{item.message}"</p>

            <div className="mt-8 border-t border-secondary pt-5">
              <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                Company name
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{item.companyName}</p>

              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-white/60">
                Client name
              </p>
              <p className="mt-1 text-base text-white">{item.clientName}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
