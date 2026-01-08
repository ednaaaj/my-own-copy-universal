"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Support" },
  {
    href: "#",
    label: "Digital Solutions",
    dropdown: [
      { label: "Universal Digital Prescription", href: "#" },
      { label: "3D Digital Treatment Planning", href: "#" },
      { label: "3D Printing & Scanning", href: "#" },
    ],
  },
  {
    href: "#",
    label: "Appliances",
    dropdown: [
      { label: "All Appliances", href: "/appliances" },
      { label: "Perio Max+", href: "/appliances/perio-max" },
      { label: "U Aligner", href: "/aligner" },
    ],
  },
  { href: "#", label: "Laser Sintered Appliances" },
  { href: "#", label: "Marpe" },
];

export function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center w-full z-50 px-4 lg:px-8">
        <div
          className="relative flex w-full max-w-[1686px] h-[72px] sm:h-[99px] items-center justify-between gap-3 lg:gap-6 rounded-[36px] sm:rounded-[60px] bg-white/90 px-4 lg:px-6 py-2 sm:py-3 shadow-[0_6px_9px_4px_rgba(76,76,76,0.2)] backdrop-blur"
          style={{
            borderRadius: "60px",
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0px 6px 9px 4px rgba(76, 76, 76, 0.2)",
          }}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/main/navbar/Universal-logo-navbar.png"
              alt="Universal Orthodontic Lab"
              width={330}
              height={99}
              className="h-[48px] sm:h-[72px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 bg-[#313131] transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#313131] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#313131] transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative flex items-center h-full"
                onMouseEnter={() => setHoveredLink(link.label)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-work-sans text-[14px] font-medium uppercase leading-[16px] text-black/40 transition hover:text-black"
                  style={{
                    fontFamily: "var(--font-work-sans)",
                    color: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      width="7"
                      height="4"
                      viewBox="0 0 7 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-200 ${
                        hoveredLink === link.label ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M0.5 0.5L3.5 3.5L6.5 0.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && hoveredLink === link.label && (
                  <div
                    className="absolute top-[30px] left-1/2 -translate-x-1/2 pt-10"
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div className="flex flex-col items-start gap-2.5 rounded-[5px] bg-white p-2 shadow-[0_3px_8.9px_rgba(0,0,0,0.25)] min-w-[240px]">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="w-full rounded-[2px] px-2 py-1.5 font-work-sans text-[12px] font-medium uppercase leading-[140%] tracking-[0.02em] text-black transition hover:bg-[#E9E9E9]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Buttons (Desktop) */}
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <Link
              href="#"
              className="relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_8px_20px_rgba(255,110,30,0.4)] ring-1 ring-[#ffb347]/60 transition hover:brightness-105"
              style={{
                background:
                  "linear-gradient(120deg, #ff3c00 0%, #ff7a1a 45%, #ffb73c 100%)",
                fontFamily: "var(--font-work-sans)",
              }}
            >
              <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/35 to-white/10" />
              <Image
                src="/images/main/navbar/ualigner-logo.png"
                alt="Aligner Portal"
                width={26}
                height={25}
                className="h-[20px] w-[20px] object-contain"
              />
              <span className="relative z-10 text-white">Aligner Portal</span>
              <span className="relative z-10 -mb-[2px] text-lg leading-none text-white">
                →
              </span>
            </Link>
            <Link
              href="#"
              className="relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_8px_20px_rgba(6,140,255,0.35)] ring-1 ring-[#4db8ff]/60 transition hover:brightness-105"
              style={{
                background:
                  "linear-gradient(130deg, #0b1c8b 0%, #1f63d1 45%, #2bc5ff 100%)",
                fontFamily: "var(--font-work-sans)",
              }}
            >
              <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/35 to-white/10" />
              <span className="relative z-10 text-white">Rio Portal</span>
              <span className="relative z-10 -mb-[2px] text-lg leading-none text-white">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white pt-[120px] px-6 transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="flex flex-col gap-3">
              <Link
                href={link.href}
                className="text-[20px] font-medium uppercase text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col gap-3 pl-4 border-l border-gray-100">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="text-[14px] text-black/60 uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-4">
             <Link
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-[#ff7a1a] px-5 py-3 text-[14px] font-semibold uppercase text-white"
            >
              Aligner Portal
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-[#068CFF] px-5 py-3 text-[14px] font-semibold uppercase text-white"
            >
              Rio Portal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
