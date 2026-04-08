"use client";

import { SectionTitle } from "@/components/custom";
import { Industry } from "@/types";
import Image from "next/image";
import { useState } from "react";

const industriesData: Industry[] = [
  {
    id: "hospital",
    name: "Hospital",
    title: "Revolutionizing Healthcare Logistics",
    description:
      "We build HIPAA-compliant systems that handle real-time patient data, automate clinical workflows, and integrate with legacy hospital management software seamlessly.",
    features: [
      "HIPAA/GDPR Compliance",
      "Legacy System Modernization",
      "Real-time Analytics Dashboards",
    ],
    image: "/images/industries/hospital-team.jpg",
    imageAlt: "Healthcare Technology Solutions",
  },
  {
    id: "finance",
    name: "Finance",
    title: "Secure Financial Technology Solutions",
    description:
      "Building robust fintech platforms with advanced security, real-time transaction processing, and seamless integration with banking systems and payment gateways.",
    features: [
      "PCI-DSS Compliance",
      "Fraud Detection Systems",
      "Real-time Payment Processing",
    ],
    image: "/images/industries/finance-investment.jpg",
    imageAlt: "Financial Technology Solutions",
  },
  {
    id: "retail",
    name: "Retail",
    title: "Next-Gen Retail Experiences",
    description:
      "Creating omnichannel retail solutions that unify online and offline experiences, optimize inventory management, and deliver personalized customer journeys.",
    features: [
      "Omnichannel Integration",
      "Inventory Optimization",
      "Customer Analytics",
    ],
    image: "/images/industries/retail-cafe.jpg",
    imageAlt: "Retail Technology Solutions",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    title: "Smart Property Management",
    description:
      "Developing intelligent property management systems with virtual tours, automated lease management, and data-driven market insights for better decision-making.",
    features: [
      "Virtual Property Tours",
      "Automated Lease Management",
      "Market Analytics",
    ],
    image: "/images/industries/real-estate-modern.jpg",
    imageAlt: "Real Estate Technology Solutions",
  },
  {
    id: "energy",
    name: "Energy",
    title: "Sustainable Energy Solutions",
    description:
      "Building smart grid systems, renewable energy monitoring platforms, and IoT-enabled solutions for efficient energy distribution and consumption tracking.",
    features: [
      "Smart Grid Integration",
      "IoT Monitoring Systems",
      "Energy Analytics",
    ],
    image: "/images/industries/energy-solar.jpg",
    imageAlt: "Energy Technology Solutions",
  },
  {
    id: "legal",
    name: "Legal",
    title: "Legal Tech Innovation",
    description:
      "Streamlining legal workflows with document automation, case management systems, and AI-powered legal research tools for modern law practices.",
    features: [
      "Document Automation",
      "Case Management",
      "AI-Powered Research",
    ],
    image: "/images/industries/legal-justice.jpg",
    imageAlt: "Legal Technology Solutions",
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(industriesData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleIndustryChange = (industry: Industry) => {
    if (industry.id === activeIndustry.id) return;

    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveIndustry(industry);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="industries" className="py-16 md:py-32 bg-[#131313] border-y border-border/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-primary text-xs md:text-sm uppercase tracking-[0.2em] font-semibold block mb-4">
            SECTORS
          </span>
          <SectionTitle
            size="2xl"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12"
          >
            Deep Industry-Expertise
          </SectionTitle>

          {/* Industry Tabs */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {industriesData.map((industry) => (
              <button
                key={industry.id}
                onClick={() => handleIndustryChange(industry)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 md:px-8 md:py-3.5 md:text-base ${
                  activeIndustry.id === industry.id
                    ? "bg-primary text-white shadow-[0_0_24px_rgba(1,84,202,0.45)] ring-1 ring-primary/40"
                    : "border border-gray-700 bg-transparent text-gray-400 hover:border-primary/50 hover:text-white"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area with Carousel Effect */}
        <div className="relative min-h-[600px] md:min-h-[500px]">
          <div
            className={`grid grid-cols-1 items-center gap-8 transition-all duration-500 md:gap-12 lg:grid-cols-2 ${
              isTransitioning ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {activeIndustry.title}
              </h3>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {activeIndustry.description}
              </p>

              {/* Features List */}
              <div className="space-y-4 pt-4">
                {activeIndustry.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-white text-sm md:text-base font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/20 shadow-2xl aspect-[4/3] bg-gradient-to-br from-primary/5 to-transparent">
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={activeIndustry.id === "hospital"}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/60 via-transparent to-transparent" />
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
