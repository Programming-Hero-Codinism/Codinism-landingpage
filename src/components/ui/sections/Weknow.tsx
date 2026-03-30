"use client";
import { SectionTitle } from "@/components/custom";
import { useContactForm } from "@/stores/useContactForm";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

/**
 * Data list for card content
 * Keeping structure simple and reusable
 */
const weKnowData = [
  {
    title: "Web3",
    subtitle: "Decentralized excellence awaits.",
    description:
      "Build the future of the internet with cutting-edge blockchain solutions that empower your vision and disrupt industries.",
    image: "/icon/Feature-Icon-1.png",
  },
  {
    title: "Shopify, Wordpress",
    subtitle: "Commerce redefined for scale.",
    description:
      "Transform your e-commerce presence into a revenue powerhouse with stunning storefronts and seamless customer experiences.",
    image: "/icon/Feature-Icon-2.png",
  },
  {
    title: "Blockchain",
    subtitle: "Security meets innovation.",
    description:
      "Harness the power of distributed ledger technology to create transparent, immutable solutions that redefine trust.",
    image: "/icon/Feature-icon-3.png",
  },
  {
    title: "Big Data",
    subtitle: "Intelligence from infinite insights.",
    description:
      "Transform raw data into actionable intelligence with advanced analytics that drive smarter decisions and explosive growth.",
    image: "/icon/Feature-Icon-4.png",
  },
  {
    title: "Mobile Apps",
    subtitle: "Experiences at your fingertips.",
    description:
      "Craft lightning-fast, intuitive mobile applications that captivate users and dominate every app store category.",
    image: "/icon/Feature-Icon-5.png",
  },
  {
    title: "Fullstack Web Application",
    subtitle: "Complete digital mastery.",
    description:
      "From elegant frontends to robust backends, we engineer full-stack solutions that scale infinitely and exceed expectations.",
    image: "/icon/Feature-Icon-6.png",
  },
];

export default function WeKnow() {
  const { setIsOpen } = useContactForm();
  return (
    <section className="mt-16" id="services">
      {/* ---------------------------- SECTION TITLE ---------------------------- */}
      <SectionTitle size="2xl" className="text-center text-white">
        Our Expertise
      </SectionTitle>

      {/* ---------------------------- CARD WRAPPER ---------------------------- */}
      {/* Responsive layout:
          - flex-wrap ensures cards wrap on smaller screens
          - gap gives spacing between items
          - justify-center keeps cards centered always
      */}
      <div className="flex flex-wrap gap-4 mt-16 justify-center w-full">
        {weKnowData.map((item, index) => (
          <div
            key={index}
            className="
              w-[424px] h-[340px]
              border border-secondary
              p-8 flex flex-col
              transition-all duration-300 hover:scale-[1.02]
            "
          >
            {/* Icon */}
            <Image
              src={item.image}
              width={48}
              height={48}
              alt={`${item.title} icon`}
              className="object-contain"
              priority
            />

            {/* Content */}
            <div className="mt-12 flex flex-col justify-between flex-1">
              <SectionTitle size="lg" className="text-white">
                {item.title}
              </SectionTitle>

              <p className="text-[16px] mt-6 text-white leading-relaxed">
                <span className="font-bold">{item.subtitle} </span>
                <span>{item.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------- BUTTON ---------------------------- */}
      <div className="flex items-center justify-center mt-6">
        <Button
          className="
            flex items-center gap-2 bg-primary text-white
            px-6 py-3 rounded-full shadow-lg
            h-12 mt-6
          "
          onClick={() => setIsOpen(true)}
        >
          Send a message <ArrowUpRight size={18} />
        </Button>
      </div>
    </section>
  );
}
