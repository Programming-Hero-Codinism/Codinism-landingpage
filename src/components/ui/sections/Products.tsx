"use client";

import { SectionTitle } from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const productsData: Product[] = [
  {
    id: "Programming Hero",
    title: "Programming Hero",
    description:
      "Since 2017. Programming Hero is actually one of the biggest EdTech platforms in Bangladesh right now, especially in the programming/web development space..",
    image: "/images/products/programming-hero.png",
    imageAlt: "Programming Hero - Let's Code Your Career",
    badges: [{ text: "100K+ Daily Learners", variant: "success" }],
    gridSpan: "large",
    caseStudyHref: "https://www.programming-hero.com/",
    features: ["Personalized learning", "Career-focused paths"],
  },
  {
    id: "Phitron",
    title: "Phitron",
    description:
      "Revolutionizing Skill Development and Career Pathways of CS in Bangladesh. Phitron is basically a CSE fundamentals–focused learning platform Unlike typical 'learn React and get job' courses, Phitron goes deep into core CS topics",
    image: "/images/products/phitron-hero.png",
    imageAlt: "Phitron — Build your foundation, secure your career",
    badges: [{ text: "12000+ Daily Learners", variant: "success" }],
    gridSpan: "medium",
    gradient: "from-[#2F3AA1]/30 to-transparent",
    caseStudyHref: "https://phitron.io/",
  },
  {
    id: "EduLavo",
    title: "EduLavo",
    description:
      "Your personal AI-powered skill coach—personalized, adaptive learning paths that match your ambition, skills, and pace.",
    image: "/images/products/edulavo-hero.png",
    imageAlt: "Edulavo — Your personal AI-powered skill coach",
    badges: [{ text: "AI Powered learning", variant: "success" }],
    gridSpan: "small",
    category: "EdTech",
    caseStudyHref: "https://www.edulavo.com/",
  },
];

const visitCtaClassName =
  "inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131313]";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const gridSpanClass = {
    large: "col-span-12 lg:col-span-7",
    medium: "col-span-12 lg:col-span-5",
    small: "col-span-12 lg:col-span-6",
  }[product.gridSpan];

  const isLarge = product.gridSpan === "large";
  const isMedium = product.gridSpan === "medium";

  return (
    <article
      role="listitem"
      className={`${gridSpanClass} ${
        product.gradient ? `bg-gradient-to-br ${product.gradient}` : ""
      } bg-card rounded-3xl overflow-hidden border border-border/10 group hover:border-primary/30 transition-all duration-300`}
    >
      <div className={`p-6 md:p-10 ${isLarge ? "flex flex-col h-full" : ""}`}>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
          <div className="flex-1">
            <h3
              className={`${
                isLarge
                  ? "text-2xl md:text-3xl font-extrabold uppercase tracking-tight"
                  : "text-xl md:text-2xl font-bold"
              } mb-2 text-white`}
            >
              {product.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base">{product.description}</p>
          </div>

          {/* Badges */}
          {product.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 md:gap-3">
              {product.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={
                    badge.variant === "success"
                      ? "bg-[#ADFF2F]/20 border-[#ADFF2F]/40 text-[#ADFF2F] text-[10px] uppercase tracking-widest font-bold px-3 py-1"
                      : badge.variant === "secondary"
                        ? "bg-gray-700 text-white text-xs font-bold px-4 py-2"
                        : "bg-primary/20 border-primary/40 text-primary text-[10px] uppercase tracking-widest px-3 py-1"
                  }
                >
                  {badge.text}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 md:mb-8 shrink-0">
          <Link
            href={product.caseStudyHref}
            className={visitCtaClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Now
          </Link>
        </div>

        {/* Image Section */}
        <div className={`relative ${isLarge ? "mt-auto pt-10" : "mt-auto"}`}>
          {/* Glow effect for large card */}
          {isLarge && (
            <div className="absolute -bottom-20 -right-20 w-full h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          )}

          <div
            className={`relative overflow-hidden ${
              isMedium ? "rounded-2xl" : "rounded-xl"
            } border border-border/20 ${
              isMedium
                ? "group-hover:scale-105"
                : isLarge
                  ? ""
                  : "aspect-video group-hover:scale-[1.02]"
            } transition-transform duration-700`}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={800}
              height={isMedium ? 300 : 450}
              className={`w-full object-cover ${
                isLarge
                  ? "translate-y-10 group-hover:translate-y-4 transition-transform duration-700"
                  : isMedium
                    ? "h-[300px]"
                    : "h-full group-hover:scale-110 transition-transform duration-1000"
              }`}
            />

            {/* Gradient overlay for small cards */}
            {!isLarge && !isMedium && (
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            )}
          </div>

          {/* Floating features for large card */}
          {isLarge && product.features && (
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-card/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-xl border border-[#ADFF2F]/20 ${
                    index === 1 ? "ml-8" : ""
                  }`}
                >
                  <span className="text-xs font-bold text-[#ADFF2F]">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section
      id="products"
      className="py-16 md:py-32 bg-[#131313] border-y border-border/5"
      aria-labelledby="products-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <header className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-primary text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
              Ecosystem
            </span>
            <SectionTitle
              id="products-heading"
              size="2xl"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Our Industry-Leading Products
            </SectionTitle>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6 md:gap-8" role="list">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
