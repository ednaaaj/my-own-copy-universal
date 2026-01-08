"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useCallback } from "react";
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
  const [windowWidth, setWindowWidth] = useState(1200);
  const total = slides.length;

  // Calculate dynamic spacing and card size based on viewport
  const getDynamicValues = useCallback(() => {
    // For full-width spread: we want 5 cards visible, with outer cards partially visible at edges
    // Spacing = viewport width / 5 (to fit ~5 cards)
    const spacing = Math.min(windowWidth / 4.5, 400); // Max spacing of 400px
    const cardWidth = Math.min(Math.max(windowWidth * 0.22, 260), 380); // 22% of viewport, min 260, max 380
    const cardHeight = cardWidth * 1.42; // Maintain aspect ratio

    return { spacing, cardWidth, cardHeight };
  }, [windowWidth]);

  const { spacing, cardWidth, cardHeight } = getDynamicValues();

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

    // Desktop: 5-card layout spreading across full width
    if (abs > 2) {
      return {
        opacity: 0,
        transform: `translateX(${distance * spacing}px) scale(0.7)`,
        zIndex: 0,
        filter: "blur(8px)",
        pointerEvents: "none" as const,
      };
    }

    // Scale: center=1, adjacent=0.92, outer=0.85
    const scale = distance === 0 ? 1 : abs === 1 ? 0.92 : 0.85;

    // Opacity: center=1, adjacent=1, outer=0.6
    const opacity = abs <= 1 ? 1 : 0.6;

    // Blur: center & adjacent = 0, outer cards = 8px
    const blur = abs <= 1 ? 0 : 8;

    // Z-index: center highest
    const zIndex = distance === 0 ? 30 : abs === 1 ? 20 : 10;

    return {
      transform: `translateX(${distance * spacing}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: `blur(${blur}px)`,
      pointerEvents: abs <= 2 ? ("auto" as const) : ("none" as const),
    };
  };

  // Check screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <ScrollSection className="relative bg-white py-16" intensity={1.05}>
      <div className="text-center mb-10">
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-[1.1] text-[#1f1f1f]">
          Our Products
        </h2>
      </div>

      {/* Full-width carousel container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative flex items-center justify-center"
          style={{ height: `${cardHeight + 40}px` }}
        >
          <div
            className="relative w-full"
            style={{ height: `${cardHeight + 40}px` }}
          >
            {orderedSlides.map(({ slide, distance, originalIndex }) => (
              <div
                key={slide.id + originalIndex}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-[#f0f0f0] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)] ring-1 ring-white/60 transition-all duration-500 ease-out cursor-pointer will-change-transform"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  ...slideStyle(distance, isMobile),
                }}
                onClick={() => goToSlide(originalIndex)}
              >
                <div className="relative h-full overflow-hidden rounded-[20px] bg-[#f0f0f0]">
                  <div
                    className="h-[40px] w-full text-center text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.12em] text-white"
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
                    className="flex flex-1 flex-col items-center px-4 sm:px-5 pb-4 sm:pb-5 pt-4 sm:pt-5 text-center"
                    style={{
                      backgroundImage: `url(${slide.background})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: `${cardWidth * 0.85}px ${cardWidth * 0.85}px`,
                    }}
                  >
                    <div
                      className="relative w-full"
                      style={{ height: `${cardHeight * 0.4}px` }}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-4 sm:mt-5 space-y-2">
                      <h3 className="text-[16px] sm:text-[20px] font-semibold uppercase tracking-tight text-[#000]">
                        {slide.title}
                      </h3>
                      <p className="text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[22px] text-[#000]">
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

          {/* Dot indicators */}
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
