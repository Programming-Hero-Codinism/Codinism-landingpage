"use client";
import { SectionTitle } from "@/components/custom";
import AngleLight from "@/components/custom/AngleLight";
import { SendMessageForm } from "@/components/forms/SendMessageForm";
import { ArrowUpRight } from "lucide-react";
import BinaryBackground from "../BinaryBackground";
import { Button } from "../button";

import { useContactForm } from "@/stores/useContactForm";

type BannerProps = {
  title_one?: string;
  title_two?: string;
  description?: string;
  hideCTABtns?: boolean;
  className?: string;
};

const Banner2 = ({ title_one, title_two, description, hideCTABtns, className }: BannerProps) => {
  const { isOpen, setIsOpen } = useContactForm();
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <AngleLight />
      <BinaryBackground w={0.48} h={0.45} />
      {/* Centered content */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          text-white
          px-4
          top-0
        "
      >
        {/* Main Heading */}
        <SectionTitle
          size="2xl"
          variant="centered"
          className="
            text-balance
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          <span className="block">{title_one ?? "Helping companies scale"}</span>
          <span className="block">{title_two ?? "engineering without increasing headcount."}</span>
        </SectionTitle>

        {/* Subtitle */}
        <p
          className="
            text-base
            sm:text-lg
            md:text-xl
            mt-6
            font-normal
            text-gray-200
            max-w-2xl
            text-center
          "
        >
          {description ??
            "We help startups and growing teams extend their engineering capacity. Ship faster without long hiring cycles or added overhead."}
        </p>

        {/* Buttons */}
        {!hideCTABtns && (
          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          "
          >
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
            "
              onClick={() => setIsOpen(true)}
            >
              Let’s Talk <ArrowUpRight size={18} />
            </Button>

            {/* <Button
              className="
              rounded-full
              h-12
              w-[160px]
              bg-secondary
              hover:bg-secondary/90
              text-white
              font-medium
              shadow-lg
              flex
              items-center
              justify-center
              transition-all
              duration-300
            "
            >
              See Service
            </Button> */}
          </div>
        )}
      </div>
      <SendMessageForm open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export default Banner2;
