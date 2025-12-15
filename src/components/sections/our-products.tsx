"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
      return { slide, distance };
    });
  }, [index, total]);

  const slideStyle = (distance: number) => {
    const abs = Math.abs(distance);
    if (abs > 2) {
      return {
        opacity: 0,
        transform: "translateX(0) scale(0.85)",
        zIndex: 0,
        pointerEvents: "none",
      };
    }
    const spacing = 380;
    const scale = distance === 0 ? 1.02 : abs === 1 ? 0.96 : 0.9;
    const opacity = distance === 0 ? 1 : abs === 1 ? 0.45 : 0.15;
    return {
      transform: `translateX(${distance * spacing}px) scale(${scale})`,
      opacity,
      zIndex: distance === 0 ? 30 : abs === 1 ? 20 : 10,
      pointerEvents: abs <= 2 ? "auto" : "none",
    };
  };

  return (
    <ScrollSection className="relative bg-white px-4 py-16 sm:px-6 lg:px-10" intensity={1.05}>
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[36px] font-normal leading-[1.1] text-[#1f1f1f] sm:text-[40px]">
          Our Products
        </h2>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-6xl flex-col items-center">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white via-white/80 to-white/0 parallax-layer" data-speed="slow" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white via-white/80 to-white/0 parallax-layer" data-speed="slow" />

        <div className="relative flex h-[520px] w-full items-center justify-center overflow-visible">
          <div className="relative h-[520px] w-full">
            {orderedSlides.map(({ slide, distance }) => (
              <div
                key={slide.id}
                className="absolute left-1/2 top-1/2 h-[480px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-[#f0f0f0] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)] ring-1 ring-white/60 transition-all duration-300 ease-out"
                style={slideStyle(distance)}
              >
                <div className="relative h-full overflow-hidden rounded-[20px] bg-[#f0f0f0]">
                  <div
                    className="h-[40px] w-full text-center text-[18px] font-semibold uppercase tracking-[0.12em] text-white"
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
                    className="flex flex-1 flex-col items-center px-6 pb-6 pt-6 text-center"
                    style={{
                      backgroundImage: `url(${slide.background})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "320px 320px",
                    }}
                  >
                    <div className="relative h-[220px] w-full">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-6 space-y-2">
                      <h3 className="text-[22px] font-semibold uppercase tracking-tight text-[#000]">
                        {slide.title}
                      </h3>
                      <p className="text-[18px] font-normal leading-[22px] text-[#000]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full transition hover:bg-[#e6f2ff]"
            aria-label="Previous"
          >
            <Image
              src="/images/main/our-products/our-products-left-chevron.svg"
              alt="Previous"
              width={15}
              height={29}
              className="h-[29px] w-[15px]"
            />
          </button>
          <div className="flex items-center gap-2">
            {slides.slice(0, 3).map((slide, idx) => (
              <button
                key={slide.id + idx}
                type="button"
                onClick={() => setIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === 1 ? "bg-[#1f8cff]" : "bg-[#cfd3d8]"
                }`}
                aria-label={`Go to ${slide.title}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % total)}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full transition hover:bg-[#e6f2ff]"
            aria-label="Next"
          >
            <Image
              src="/images/main/our-products/our-products-right-chevron.svg"
              alt="Next"
              width={15}
              height={29}
              className="h-[29px] w-[15px]"
            />
          </button>
        </div>
      </div>
    </ScrollSection>
  );
}
