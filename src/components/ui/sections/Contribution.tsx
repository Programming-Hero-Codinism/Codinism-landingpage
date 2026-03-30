import { ArrowUpRight, BadgeCheck, CalendarDays, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

const features = [
  {
    icon: <CalendarDays className="w-10 h-10 text-blue-400" />,
    title: "Elite Talent in 2 Weeks",
    description:
      "Boost up your engineering team without paying extra visa fee. (It will take less than 2 weeks to connect up!)",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-400" />,
    title: "Top 4% Engineers, Zero Visa Fees",
    description: "Get introduced with the top 4% Software Engineers.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-400" />,
    title: "Fast, Global Engineering Power",
    description: "Meet Top 4% of pure Talented Engineers.",
  },
];

export default function Contribution() {
  return (
    <section id="staff-aug" className="bg-[#000102] py-8 px-4 mt-16 text-white">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px]  leading-tight">
        When teams work with us
      </h1>

      <div className="grid gap-6 md:grid-cols-3  mx-auto mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
    relative z-0
    p-8 pb-6
    border border-[#0A1220]
    shadow-lg shadow-black/20
    hover:shadow-blue-500/10
    transition
    h-[260px]
    overflow-hidden
  "
          >
            {/* GRADIENT LAYER */}
            <span
              className="
      absolute inset-0
      bg-[linear-gradient(to_bottom_left,rgba(0,127,255,0.55)_0%,rgba(0,127,255,0.25)_0%,rgba(0,1,2,1)_50%)]
      z-0
    "
            />

            <Image
              className="absolute brightness-150 top-[-130px] left-[100px] w-full h-auto rotate-[15deg] 
             mix-blend-screen 
             [mask-image:linear-gradient(to_bottom,white,transparent)]"
              src="/layer/angel.png"
              width={400}
              height={400}
              alt="img"
            />

            <Image
              className="absolute brightness-150 top-[-130px] left-[-40px] w-full h-auto rotate-[10deg]
             mix-blend-screen
             [mask-image:linear-gradient(to_bottom,white,transparent)]"
              src="/layer/angel.png"
              width={400}
              height={400}
              alt="img"
            />

            {/* BOTTOM BORDER */}
            <span className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-[#007FFF] to-transparent z-10" />

            <div className="mb-6 relative z-10">{feature.icon}</div>

            <h3 className="text-xl font-semibold text-white mb-3 relative z-10 mt-16">
              {feature.title}
            </h3>

            <p className="text-[15px] leading-relaxed text-gray-400 relative z-10">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto w-full flex items-center justify-center">
        <Link href={"/start-your-journey"}>
          {" "}
          <Button
            className="
              rounded-full
              h-12
              px-6
              py-3
              shadow-lg
              flex
              items-center
              justify-center
              gap-2
              text-base
              font-medium
              bg-primary
              text-white
              hover:bg-primary/90
              transition-all
              duration-300
              mt-12
            "
          >
            Build Your Dream Team With AI <ArrowUpRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
