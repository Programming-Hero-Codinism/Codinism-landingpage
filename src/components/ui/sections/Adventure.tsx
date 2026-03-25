import { SectionTitle } from "@/components/custom";
import Image from "next/image";

const adventureLogo = [
  // { logo: "/icon/collabs/accenture.svg" },
  { logo: "/logos/Edulavo.png" },
  // { logo: "/icon/collabs/adobe.png" },
  // { logo: "/icon/collabs/microsoft.webp" },
  { logo: "/logos/ProgrammingHero.png" },
  { logo: "/logos/Phitron.png" },
  // { logo: "/icon/collabs/carrefour.svg" },
  // { logo: "/icon/collabs/chase.png" },
  { logo: "/logos/Zenyora.png" },

  // { logo: "/icon/collabs/shopify.png" },
  // { logo: "/icon/collabs/target.png" },
  // { logo: "/icon/collabs/tesco.png" },
  // { logo: "/icon/collabs/tesla.png" },
];

export default function Adventure() {
  /**
   * Duplicate the list to enable seamless infinite marquee scrolling
   * This ensures when the first set finishes, the second continues smoothly.
   */
  const repeatedLogos = [...adventureLogo, ...adventureLogo];

  return (
    <>
      {/* ---------------------------- SECTION TITLE ---------------------------- */}
      <div className="mt-32">
        <SectionTitle size="2xl" className="text-center text-white">
          Past Adventures We Conquered Together
        </SectionTitle>
      </div>

      {/* ---------------------------- LEFT MOVING MARQUEE ---------------------------- */}
      {/* Responsive + infinite scroll animation
         - overflow-hidden prevents items from showing outside the container
         - animate-marquee-left is custom CSS animation defined in globals.css
      */}
      <div className="relative overflow-hidden mt-16 border-t border-b border-secondary">
        <div className="flex animate-marquee-left">
          {repeatedLogos.map((item, index) => (
            <div
              key={`left-${index}`}
              className="
                flex-shrink-0
                w-[275px] h-[286px]
                flex items-center justify-center
                border-r border-secondary
              "
            >
              {/* Logo item */}
              <Image
                src={item.logo}
                width={160}
                height={46}
                alt={`adventure logo left ${index + 1}`}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------- RIGHT MOVING MARQUEE ---------------------------- */}
      {/* Same structure as above but reversed animation direction */}
      <div className="relative overflow-hidden border-b border-secondary">
        <div className="flex animate-marquee-right">
          {repeatedLogos.map((item, index) => (
            <div
              key={`right-${index}`}
              className="
                flex-shrink-0
                w-[275px] h-[286px]
                flex items-center justify-center
                border-r border-secondary
              "
            >
              <Image
                src={item.logo}
                width={160}
                height={46}
                alt={`adventure logo right ${index + 1}`}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
