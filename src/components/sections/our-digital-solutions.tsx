"use client";

import Image from "next/image";

type SolutionItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  watermark: string;
};

const solutions: SolutionItem[] = [
  {
    id: "digital-planning",
    number: "01",
    title: "Digital Planning",
    description:
      "Partnering with you in utilizing the latest technological advancements. Technology has proven to be reliable and efficient in making orthodontic appliances with more consistent results.",
    image: "/images/our-digital-solution/our-digital-solution-digital-planning.png",
    watermark: "/images/our-digital-solution/our-digital-01.png",
  },
  {
    id: "stl-printing",
    number: "02",
    title: "STL File 3D Printing",
    description: "",
    image:
      "/images/our-digital-solution/our-digital-solutions-stl-file-3d-printing.png",
    watermark: "/images/our-digital-solution/our-digital-02.png",
  },
  {
    id: "digital-prescription",
    number: "03",
    title: "Digital Prescription",
    description: "",
    image:
      "/images/our-digital-solution/our-digital-solutions-digital-prescription.png",
    watermark: "/images/our-digital-solution/our-digital-03.png",
  },
];

export function OurDigitalSolutions() {
  return (
    <section className="relative bg-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto mb-25 flex max-w-5xl items-center justify-between">
        <h2 className="text-[40px] font-normal leading-[1] text-[#1f1f1f] sm:text-[44px]">
          Our Digital Solutions
        </h2>
        <Image
          src="/images/our-digital-solution/our-digital-solution-star.svg"
          alt=""
          width={72}
          height={72}
          className="h-18 w-18"
        />
      </div>
      <div className="mx-auto mt-4 h-[1px] max-w-5xl bg-black" />

      <div className="relative mx-auto mt-10 flex max-w-5xl flex-col gap-12">
        {solutions.map((solution, idx) => (
          <div key={solution.id} className="space-y-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="space-y-10 mt-20">
                <div className="relative h-[100px]">
                  <Image
                    src={solution.watermark}
                    alt=""
                    width={154}
                    height={125}
                    className="pointer-events-none absolute left-0 top-[-35px] h-[90px] w-auto select-none object-contain"
                  />
                  <p className="relative z-10 pt-6 text-[22px] font-light uppercase tracking-[3px] text-[#1f1f1f] sm:text-[24px]">
                    {solution.title}
                  </p>
                </div>
                <p className="max-w-sm text-[14px] font-normal leading-[22px] text-[#272727]">
                  {solution.description}
                </p>
              </div>
              <div className="flex justify-end">
                <div
                  className="overflow-hidden rounded-[16px] bg-[#f0f0f0] shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                  style={{
                    width: solution.id === "digital-planning" ? "703px" : "450px",
                    height: solution.id === "digital-planning" ? "360px" : "245px",
                  }}
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={solution.id === "digital-planning" ? 703 : 450}
                    height={solution.id === "digital-planning" ? 360 : 245}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            {idx < solutions.length - 1 ? (
              <div className="h-[1px] w-full bg-black" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
