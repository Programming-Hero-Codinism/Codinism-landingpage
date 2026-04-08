"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";

// Navigation menu items
const menu = [
  // { path: "#service", label: "Service" },
  { path: "/start-your-journey", label: "Start Working With Us" },
  { path: "#industries", label: "Why Codinism" },
  // { path: "/about", label: "About" },
  { path: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ---------------- NAVBAR MAIN WRAPPER ---------------- */}
      <nav className="w-full px-6 md:px-12 py-4 border-t-4 border-primary border-b border-b-[#003570] bg-transparent backdrop-blur-[6px]">
        <div className="max-w-[1400px] mx-auto">
          {/* ---------------- DESKTOP NAV (md+) ---------------- */}
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <div className="hidden md:block shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/logos/Logo.png"
                  alt="Company logo"
                  width={200}
                  height={96}
                  priority
                  className="w-[200px] h-auto object-contain"
                />
              </Link>
            </div>

            {/* Center Menu Links */}
            <div className="hidden md:block">
              <NavigationMenu className="flex-1">
                <NavigationMenuList className="flex gap-6">
                  {menu.map((m, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={m.path}
                          // target="_blank"
                          className="text-[16px] text-white hover:text-gray-300"
                        >
                          {m.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right-side CTA Button */}
            <div className="hidden md:block">
              <Link href="#services">
                {" "}
                <Button
                  style={{ filter: "brightness(120%)" }}
                  className="rounded-full h-12 px-6 py-3 shadow-lg"
                >
                  See Services
                </Button>
              </Link>
            </div>
          </div>

          {/* ---------------- MOBILE NAV (below md) ---------------- */}
          <div className="flex justify-between items-center md:hidden w-full">
            {/* Hamburger button (no hover effect applied) */}
            <button
              className="p-2 focus:outline-none active:scale-95 transition-transform" // removed default hover styling
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {/* Icon changes based on state */}
              {mobileMenuOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </button>

            {/* Center logo for mobile */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/">
                      <Image src="/logos/Logo.png" width={200} height={96} alt="Company logo" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ---------------- MOBILE SLIDE MENU ---------------- */}
          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#000102]/95 z-50 flex flex-col justify-center items-center p-4 gap-4 md:hidden backdrop-blur-md">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="flex flex-col gap-4">
                  {menu.map((m, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink className="text-[16px] text-white" href={m.path}>
                        {m.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button for mobile */}
              <Link href="#services">
                <Button className="rounded-full h-12 px-6 py-3">See Services</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
