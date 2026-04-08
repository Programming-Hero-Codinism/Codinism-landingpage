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
    id: "edtech-scaling",
    title: "Scaling EdTech Platform to 100K+ Daily Users",
    client: "Programming Hero",
    problem: "Platform struggled with performance issues during peak hours, affecting user experience and course delivery for thousands of learners.",
    solution: "Implemented microservices architecture, optimized database queries, and deployed CDN for static assets. Added real-time monitoring and auto-scaling infrastructure.",
    results: [
      "99.9% uptime achieved",
      "70% reduction in page load time",
      "Scaled to 100K+ concurrent users",
      "50% reduction in server costs"
    ],
    tags: ["Performance", "Scalability", "Cloud Infrastructure"],
    image: "/images/case-studies/edtech-scaling.jpg",
    imageAlt: "EdTech Platform Scaling Case Study",
  },
  {
    id: "fintech-security",
    title: "Building Secure Payment Gateway",
    client: "FinTech Startup",
    problem: "Client needed a PCI-DSS compliant payment processing system with real-time fraud detection to handle sensitive financial transactions.",
    solution: "Developed end-to-end encrypted payment gateway with AI-powered fraud detection, multi-factor authentication, and comprehensive audit logging.",
    results: [
      "PCI-DSS Level 1 certified",
      "99.99% transaction success rate",
      "Fraud detection accuracy 98%",
      "Processing 10K+ transactions/day"
    ],
    tags: ["Security", "Fintech", "Compliance"],
    image: "/images/case-studies/fintech-security.jpg",
    imageAlt: "Fintech Security Case Study",
  },
  {
    id: "healthcare-integration",
    title: "Legacy Healthcare System Modernization",
    client: "Regional Hospital Network",
    problem: "Hospital relied on outdated systems that couldn't communicate with each other, causing delays in patient care and administrative inefficiencies.",
    solution: "Built HIPAA-compliant integration layer connecting legacy systems with modern cloud infrastructure. Implemented real-time data synchronization and unified dashboard.",
    results: [
      "40% faster patient processing",
      "Eliminated manual data entry",
      "Real-time patient data access",
      "HIPAA compliant architecture"
    ],
    tags: ["Healthcare", "Integration", "Legacy Modernization"],
    image: "/images/case-studies/healthcare-integration.jpg",
    imageAlt: "Healthcare Integration Case Study",
  },
  {
    id: "retail-omnichannel",
    title: "Omnichannel Retail Experience",
    client: "National Retail Chain",
    problem: "Disconnected online and offline shopping experiences led to inventory issues, poor customer satisfaction, and lost sales opportunities.",
    solution: "Created unified commerce platform integrating POS, e-commerce, mobile app, and inventory management with real-time synchronization across all channels.",
    results: [
      "35% increase in online sales",
      "90% inventory accuracy",
      "Unified customer profiles",
      "Seamless cross-channel returns"
    ],
    tags: ["Retail", "Omnichannel", "E-commerce"],
    image: "/images/case-studies/retail-omnichannel.jpg",
    imageAlt: "Retail Omnichannel Case Study",
  },
];

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  totalCards: number;
}

function CaseStudyCard({ caseStudy, index, totalCards }: CaseStudyCardProps) {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
        className="group relative bg-card rounded-3xl overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className={`relative grid grid-cols-1 ${isEven ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
        {/* Image Section */}
        <div className={`relative h-[300px] lg:h-full ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <Image
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent lg:bg-gradient-to-r lg:from-card lg:via-card/80 lg:to-transparent" />
        </div>

        {/* Content Section */}
        <div className={`relative p-8 md:p-10 lg:p-12 flex flex-col justify-between ${!isEven ? 'lg:order-1' : ''}`}>
          {/* Header */}
          <div className="space-y-4 mb-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  className="bg-primary/20 border-primary/40 text-primary text-[10px] uppercase tracking-wider font-bold px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Client */}
            <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
              {caseStudy.client}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
              {caseStudy.title}
            </h3>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-6 mb-6">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-2">
                The Challenge
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-2">
                Our Solution
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-primary font-bold">
              Key Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-primary/5 rounded-lg p-3 border border-primary/10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="text-white text-xs font-medium leading-relaxed">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          {caseStudy.link && (
            <div className="mt-8">
              <Link
                href={caseStudy.link}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
              >
                View Full Case Study
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
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
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Real problems. Real solutions. Real business impact. See how we've helped companies across industries solve their most critical challenges.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-8">
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              index={index}
              totalCards={caseStudiesData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
