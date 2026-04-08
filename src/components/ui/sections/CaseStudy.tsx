"use client";

import { SectionTitle } from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  results: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  link?: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "doorstep-service-company",
    title: "Stabilizing a Legacy Codebase for a Doorstep Service Platform",
    client: "Doorstep Service Company",
    problem:
      "The previous development team left critical bugs, unstable releases, and inconsistent architecture, causing frequent production issues like : Timezone issues , Broken and Fraudulent Report and broken IOS and Android app.",
    solution:
      "We audited the entire codebase, fixed high-impact defects, standardized architecture patterns, added test coverage for critical flows, and introduced a safer release pipeline with monitoring.",
    results: [
      "98% reduction in critical production bugs",
      "2x faster release cycles",
      "Improved platform stability during peak traffic",
      "Higher developer velocity with cleaner architecture",
    ],
    tags: ["Performance", "Scalability", "Code Quality", "Bug Fixing"],
    image: "/images/case-studies/doorstep-service.png",
    imageAlt: "Doorstep service platform engineering turnaround",
  },
  {
    id: "iron-depot",
    title: "Fake Data Scraping System deleted , Replaced with Expected Business logic.",
    client: "Iron Depot",
    problem:
      "Client needed a real time data scraping system to scrape data from Facebook marketplace and other sources to get the data in a real time dashboard. But turned out to be that their previous ones use fake data scraping - Manually inputing data in system which was not working as expected.",
    solution:
      "Deleted the fake data scraping system and replaced it with Expected Business logic. with proper data validation and error handling.",
    results: [
      "150% faster real time data scraping",
      "Eliminated manual data entry",
      "Real-time data access",
      "Business logic implemented",
    ],
    tags: ["Data Scraping", "Integration", "Business Logic"],
    image: "/images/case-studies/healthcare-hero.png",
    imageAlt: "Iron Depot Data Scraping System",
  },
  {
    id: "Cozii Prop",
    title: "cozii property management system integration.",
    client: "Cozii Property Management",
    problem:
      "From the verdict of being bankrupt from AWS bill payment , to successfully migrated to Digital Ocean and now successful in getting the property management system working with the new infrastructure.",
    solution:
      "Migrated the property management system to Digital Ocean and successfully integrated it with the new infrastructure and business logic.",
    results: [
      "62% increase in online sales",
      "Top Tier Property Management System",
      "Unified customer , owner and property profiles",
      "Seamless cross-channel returns",
    ],
    tags: ["Property Management", "Digital Ocean", "AWS"],
    image: "/images/case-studies/retail-dashboard.png",
    imageAlt: "Cozii Property Management System",
  },
];

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const offsetTop = 80 + index * 40; // Top position where card sticks

      if (rect.top < offsetTop) {
        // Card is stuck, calculate scale based on how many cards are on top
        const distanceFromTop = offsetTop - rect.top;
        const scaleValue = Math.max(0.9, 1 - distanceFromTop / 10000);
        setScale(scaleValue);
      } else {
        setScale(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  const stickyTop = 80 + index * 40;

  return (
    <div
      ref={cardRef}
      className="sticky mb-8"
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 1,
      }}
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-border/20 bg-card"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className={`relative grid grid-cols-1 ${isEven ? "lg:grid-cols-2" : "lg:grid-cols-2"} gap-0`}
        >
          {/* Image Section */}
          <div className={`relative h-[250px] sm:h-[300px] lg:h-full ${!isEven ? "lg:order-2" : ""}`}>
            <Image
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain bg-[#0f1115] p-2"
            />
          </div>

          {/* Content Section */}
          <div
            className={`relative flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 ${!isEven ? "lg:order-1" : ""}`}
          >
            {/* Header */}
            <div className="space-y-3 sm:space-y-4 mb-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    className="bg-primary/20 border-primary/40 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Client */}
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-300">
                {caseStudy.client}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white md:text-3xl">
                {caseStudy.title}
              </h3>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-6 mb-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-2">
                  The Challenge
                </h4>
                <p className="text-sm leading-relaxed text-gray-200">{caseStudy.problem}</p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-2">
                  Our Solution
                </h4>
                <p className="text-sm leading-relaxed text-gray-200">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-wider text-primary font-bold">
                Key Results
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {caseStudy.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-primary/5 rounded-lg p-3 border border-primary/10"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="text-white text-xs font-medium leading-relaxed">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {caseStudy.link && (
              <div className="mt-8">
                <Link
                  href={caseStudy.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  View Full Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-32 bg-[#0a0a0a] border-y border-border/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-primary text-xs md:text-sm uppercase tracking-[0.2em] font-semibold block mb-4">
            PROVEN RESULTS
          </span>
          <SectionTitle
            size="2xl"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
          >
            Impact of our Journey
          </SectionTitle>
          <p className="text-base leading-relaxed text-gray-200 md:text-lg">
            Real problems. Real solutions. Real business impact. See how we&apos;ve helped companies
            across industries solve their most critical challenges.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-8">
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
