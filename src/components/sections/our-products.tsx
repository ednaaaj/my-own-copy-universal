"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ScrollSection } from "@/components/layout/scroll-section";

type ProductSlide = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  background: string;
};

const slides: ProductSlide[] = [
  {
    id: "active-1",
    label: "Active Appliance",
    title: "Herbst Telescopic",
    description:
      "A tray is formed with dual hard Biocryl and soft silicone trays.",
    image: "/images/main/our-products/our-products-active-applience.png",
    background: "/images/main/our-products/our-products-active-appliance-bg-gray.svg",
  },
  {
    id: "functional",
    label: "Functional Appliance",
    title: "M.A.R.A.",
    description:
      "A tray is formed with dual hard Biocryl and soft silicone trays.",
    image: "/images/main/our-products/our-products-functional-appliance.png",
    background:
      "/images/main/our-products/our-products-functional-appliance-bg-gray.svg",
  },
  {
    id: "space",
    label: "Space Maintainer",
    title: "Space Management",
    description:
      "A tray is formed with dual hard Biocryl and soft silicone trays.",
    image: "/images/main/our-products/our-products-space-maintainer.png",
    background: "/images/main/our-products/our-products-space-maintainer-bg-gray.svg",
  },
  {
    id: "active-2",
    label: "Active Appliance",
    title: "Herbst Telescopic",
    description:
      "A tray is formed with dual hard Biocryl and soft silicone trays.",
    image: "/images/main/our-products/our-products-active-applience.png",
    background: "/images/main/our-products/our-products-active-appliance-bg-gray.svg",
  },
  {
    id: "space-2",
    label: "Space Maintainer",
    title: "Space Management",
    description:
      "A tray is formed with dual hard Biocryl and soft silicone trays.",
    image: "/images/main/our-products/our-products-space-maintainer.png",
    background: "/images/main/our-products/our-products-space-maintainer-bg-gray.svg",
  },
];

export function OurProducts() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const orderedSlides = useMemo(() => {
    return slides.map((slide, idx) => {
      const distance =
        ((idx - index + total + Math.floor(total / 2)) % total) -
        Math.floor(total / 2);
      return { slide, distance, originalIndex: idx };
    });
  }, [index, total]);

  const slideStyle = (distance: number, isMobile: boolean) => {
    const abs = Math.abs(distance);

    // On mobile: only show the center card, hide all others
    if (isMobile) {
      if (distance !== 0) {
        return {
          opacity: 0,
          transform: "translateX(0) scale(0.9)",
          zIndex: 0,
          filter: "none",
          pointerEvents: "none" as const,
        };
      }
      // Center card on mobile
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
        filter: "none",
        pointerEvents: "auto" as const,
      };
    }

    // Desktop: original multi-card behavior
    if (abs > 2) {
      return {
        opacity: 0,
        transform: "translateX(0) scale(0.8)",
        zIndex: 0,
        filter: "blur(10px)",
        pointerEvents: "none" as const,
      };
    }
    const spacing = 360;
    const scale = distance === 0 ? 1.05 : abs === 1 ? 0.95 : 0.85;
    const opacity = distance === 0 ? 1 : abs === 1 ? 1 : 0.7;
    const blur = abs <= 1 ? 0 : 6;

    return {
      transform: `translateX(${distance * spacing}px) scale(${scale})`,
      opacity,
      zIndex: distance === 0 ? 30 : abs === 1 ? 20 : 10,
      filter: `blur(${blur}px)`,
      pointerEvents: abs <= 2 ? ("auto" as const) : ("none" as const),
    };
  };

  // Check if mobile (will be false on server, true on client if < 640px)
  const [isMobile, setIsMobile] = useState(false);

  // useEffect to detect mobile on client side
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  return (
    <ScrollSection className="relative bg-white px-4 py-16 sm:px-6 lg:px-10" intensity={1.05}>
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-[1.1] text-[#1f1f1f]">
          Our Products
        </h2>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-6xl flex-col items-center px-4 sm:px-6">
        {/* Side fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 z-40 h-full w-8 sm:w-32 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-40 h-full w-8 sm:w-32 bg-gradient-to-l from-white via-white/90 to-transparent" />

        <div className="relative flex h-[450px] sm:h-[520px] w-full items-center justify-center overflow-visible">
          <div className="relative h-[450px] sm:h-[520px] w-full">
            {orderedSlides.map(({ slide, distance, originalIndex }) => (
              <div
                key={slide.id + originalIndex}
                className="absolute left-1/2 top-1/2 h-[420px] w-[280px] sm:h-[480px] sm:w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-[#f0f0f0] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)] ring-1 ring-white/60 transition-all duration-500 ease-out cursor-pointer"
                style={slideStyle(distance, isMobile)}
                onClick={() => goToSlide(originalIndex)}
              >
                <div className="relative h-full overflow-hidden rounded-[20px] bg-[#f0f0f0]">
                  <div
                    className="h-[40px] w-full text-center text-[16px] font-semibold uppercase tracking-[0.12em] text-white"
                    style={{
                      background:
                        "linear-gradient(180deg, #43a6ff 0%, #0f7fe7 60%, #0b72d4 100%)",
                    }}
                  >
                    <div className="flex h-full items-center justify-center px-2">
                      {slide.label}
                    </div>
                  </div>
                  <div
                    className="flex flex-1 flex-col items-center px-5 pb-5 pt-5 text-center"
                    style={{
                      backgroundImage: `url(${slide.background})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "300px 300px",
                    }}
                  >
                    <div className="relative h-[200px] w-full">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-[20px] font-semibold uppercase tracking-tight text-[#000]">
                        {slide.title}
                      </h3>
                      <p className="text-[16px] font-normal leading-[22px] text-[#000]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goToPrev}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition hover:bg-[#e6f2ff] active:scale-95"
            aria-label="Previous"
          >
            <Image
              src="/images/main/our-products/our-products-left-chevron.svg"
              alt="Previous"
              width={15}
              height={29}
              className="h-[24px] w-[12px]"
            />
          </button>

          {/* Dot indicators - show current position */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id + "-dot-" + idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  idx === index ? "bg-[#1f8cff] scale-125" : "bg-[#cfd3d8] hover:bg-[#a0a5ab]"
                }`}
                aria-label={`Go to ${slide.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition hover:bg-[#e6f2ff] active:scale-95"
            aria-label="Next"
          >
            <Image
              src="/images/main/our-products/our-products-right-chevron.svg"
              alt="Next"
              width={15}
              height={29}
              className="h-[24px] w-[12px]"
            />
          </button>
        </div>
      </div>
    </ScrollSection>
  );
}
