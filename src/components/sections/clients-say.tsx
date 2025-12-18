"use client";

import Image from "next/image";
import { ScrollSection } from "@/components/layout/scroll-section";

const cards = [
  {
    quote:
      "Over the last two and a half years, I have used Universal Lab for all of my Orthodontic appliances. I have been very pleased with the fit and the quality of their work. I can highly recommend them!",
    name: "Dr. Benevis",
    location: "Connecticut",
    gradient: "linear-gradient(90deg, #F0F4F8 38.94%, #DCEBF8 100%)",
  },
  {
    quote:
      "I have been using this lab for my patients' orthodontic cases since 2008! They will take care of your patients with warranty and replacements if needed",
    name: "Dr. Shin",
    location: "California",
    gradient: "linear-gradient(90deg, #E7F0F8 0%, #F8F8F8 43.27%)",
  },
];

export function ClientsSay() {
  return (
    <ScrollSection className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-36" intensity={1.08}>
      {/* Three gradient ellipses with gaps */}
      <div className="pointer-events-none absolute inset-0 parallax-layer" data-speed="slow">
        {/* Left ellipse */}
        <div
          className="absolute left-[calc(50%-700px)] top-[88px] h-[566px] w-[566px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
        {/* Center ellipse */}
        <div
          className="absolute left-[calc(50%-283px)] top-[153px] h-[566px] w-[566px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
        {/* Right ellipse */}
        <div
          className="absolute right-[calc(50%-700px)] top-0 h-[566px] w-[566px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-12 lg:gap-16">
        <h2
          className="text-center text-[40px] font-normal leading-[64px] text-[#1f1f1f] sm:text-[48px] md:text-[56px] lg:text-[64px]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          What our clients say
        </h2>

        <div className="flex flex-col flex-wrap items-center justify-center gap-8 sm:flex-row">
          {cards.map((card, index) => (
            <div
              key={card.name}
              className="flex w-full max-w-[420px] flex-col sm:w-[420px]"
            >
              {/* Top card - Quote section */}
              <div className="flex h-[214px] flex-col rounded-t-[20px] bg-[rgba(240,240,240,0.5)] px-[25px] pb-4 pt-[27px] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
                <div className="relative">
                  {/* Large quote mark */}
                  <p
                    className="mb-2 flex items-end text-[96px] leading-[26px] text-[#068CFF]"
                    style={{ fontFamily: "Karla, sans-serif" }}
                  >
                    &ldquo;
                  </p>
                  {/* Quote text */}
                  <p
                    className="text-[16px] leading-[26px] text-black sm:text-[16px]"
                    style={{
                      fontFamily: "Work Sans, sans-serif",
                      fontSize: index === 0 ? "16px" : "18px",
                    }}
                  >
                    {card.quote}
                  </p>
                </div>
              </div>

              {/* Bottom card - Author section */}
              <div
                className="mt-[4px] flex h-[82px] items-center rounded-b-[20px] px-[25px] py-4 shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]"
                style={{ background: card.gradient }}
              >
                <div className="flex items-center gap-[15px]">
                  {/* Avatar with white background circle */}
                  <div className="relative flex h-[48.91px] w-[48.91px] flex-shrink-0 items-center justify-center rounded-full bg-white">
                    <Image
                      src="/images/main/what-client-say/what-client-say-blue-person.png"
                      alt=""
                      width={49}
                      height={49}
                      className="h-full w-full"
                    />
                  </div>
                  {/* Name and location */}
                  <div className="flex flex-col">
                    <p
                      className="text-[16px] font-semibold leading-[20px] text-black"
                      style={{ fontFamily: "Karla, sans-serif" }}
                    >
                      {card.name}
                    </p>
                    <p
                      className="text-[12px] font-normal leading-[20px] text-[#6b7280]"
                      style={{ fontFamily: "Karla, sans-serif" }}
                    >
                      {card.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
