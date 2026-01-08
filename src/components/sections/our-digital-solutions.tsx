"use client";

import Image from "next/image";
import { ScrollSection } from "@/components/layout/scroll-section";

type SolutionItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
};

const solutions: SolutionItem[] = [
  {
    id: "digital-planning",
    number: "01",
    title: "Digital Planning",
    description:
      "Partnering with you in utilizing the latest technological advancements. Technology has proven to be reliable and efficient in making orthodontic appliances with more consistent results.",
    image: "/images/main/our-digital-solution/our-digital-solution-digital-planning.png",
  },
  {
    id: "stl-printing",
    number: "02",
    title: "STL File 3D Printing",
    description: "",
    image:
      "/images/main/our-digital-solution/our-digital-solutions-stl-file-3d-printing.png",
  },
  {
    id: "digital-prescription",
    number: "03",
    title: "Digital Prescription",
    description: "",
    image:
      "/images/main/our-digital-solution/our-digital-solutions-digital-prescription.png",
  },
];

export function OurDigitalSolutions() {
  return (
    <ScrollSection className="relative bg-white px-4 py-16 sm:px-6 lg:px-10" intensity={1.1}>
      {/* Header */}
      <div className="mx-auto flex max-w-[1331px] items-center justify-between mb-8">
        <h2 className="font-roboto text-[40px] sm:text-[52px] lg:text-[64px] font-normal leading-[1] text-[#1f1f1f]">
          Our Digital Solutions
        </h2>
        <Image
          src="/images/main/our-digital-solution/our-digital-solution-star.svg"
          alt=""
          width={90}
          height={90}
          className="h-[60px] w-[60px] sm:h-[75px] sm:w-[75px] lg:h-[90px] lg:w-[90px] parallax-layer"
          data-speed="fast"
        />
      </div>

      {/* Top divider line */}
      <div className="mx-auto h-[1px] max-w-[1331px] bg-black" />

      {/* Solutions list */}
      <div className="mx-auto mt-8 max-w-[1331px]">
        {solutions.map((solution, idx) => (
          <div key={solution.id}>
            {/* Solution Row */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between py-12 lg:py-16 gap-8 lg:gap-12">
              {/* Left side - Number, Title, Description */}
              <div className="flex-1 max-w-[536px]">
                {/* Large number watermark */}
                <div className="relative">
                  <span className="font-roboto text-[100px] sm:text-[140px] lg:text-[170px] font-medium leading-[0.8] tracking-[2px] text-[#F0F0F0] select-none">
                    {solution.number}
                  </span>
                  {/* Title overlapping the number */}
                  <h3 className="font-roboto text-[32px] sm:text-[40px] lg:text-[46px] font-light uppercase tracking-[3px] text-black absolute bottom-[10px] sm:bottom-[20px] lg:bottom-[30px] left-0">
                    {solution.title}
                  </h3>
                </div>
                {/* Description */}
                {solution.description && (
                  <p className="mt-8 font-work-sans text-[16px] sm:text-[18px] font-normal leading-[28px] sm:leading-[30px] text-[#272727] max-w-[536px]">
                    {solution.description}
                  </p>
                )}
              </div>

              {/* Right side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className={`overflow-hidden rounded-[20px] shadow-[0_8px_16px_rgba(0,0,0,0.12)]`}
                  style={{
                    width: solution.id === "digital-planning" ? "100%" : "100%",
                    maxWidth: solution.id === "digital-planning" ? "703px" : "450px",
                  }}
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={solution.id === "digital-planning" ? 703 : 450}
                    height={solution.id === "digital-planning" ? 360 : 245}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Divider line after each item */}
            <div className="h-[1px] w-full bg-black" />
          </div>
        ))}
      </div>
    </ScrollSection>
  );
}
