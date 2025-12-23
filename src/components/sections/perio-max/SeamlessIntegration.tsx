"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Medicament Channel",
    description: "Directs gel into periodontal pockets to prevent pathogenic bacteria from recolonizing",
    icon: "/images/perio-max/medicament-channel.png",
  },
  {
    title: "Positive Pressure Seal",
    description: "Mitigates gel leakage into oral cavity",
    icon: "/images/perio-max/possitive-pressure-seal.png",
  },
  {
    title: "Comfort and Durability",
    description: "3mm soft splint for increased durability without sacrificing patient comfort",
    icon: "/images/perio-max/comfor-and-durability.png",
  },
  {
    title: "Computer Aided Production",
    description: "Algorithmically designed and fabricated for precision fit",
    icon: "/images/perio-max/computer-aided-production.png",
  },
];

export function SeamlessIntegration() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">

        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-[800px]"
        >
            <h2 className="font-roboto font-normal text-[48px] sm:text-[64px] leading-[1.2] text-black mb-6 tracking-[0.02em]">
                Seamless Integration with Shining 3D
            </h2>
            <p className="font-work-sans font-normal text-[18px] leading-[30px] text-[#272727]">
                We are proud to support the integration of the Shining 3D portfolio, offering our clients a new level of precision and efficiency. From intraoral scanners to 3D printing and digital modeling, we provide:
            </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="relative w-full min-h-[850px] hidden lg:flex items-center justify-center">

          {/* Center - Circles + Teeth */}
          <div className="relative w-[700px] h-[700px] flex items-center justify-center">
            {/* Outermost Circle */}
            <div
              className="absolute w-[700px] h-[700px] rounded-full bg-white"
              style={{ boxShadow: "0px 0px 86.8px -22px rgba(0, 0, 0, 0.21)", transform: "rotate(15deg)" }}
            />

            {/* Middle Circle */}
            <div
              className="absolute w-[560px] h-[560px] rounded-full bg-white"
              style={{ boxShadow: "0px 0px 86.8px -22px rgba(0, 0, 0, 0.21)" }}
            />

            {/* Inner Circle */}
            <div
              className="absolute w-[340px] h-[340px] rounded-full bg-white"
              style={{ boxShadow: "0px 0px 108px -24px rgba(0, 0, 0, 0.25)" }}
            />

            {/* Teeth Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[550px]"
              style={{ transform: "rotate(-8.82deg)" }}
            >
              <Image
                src="/images/perio-max/seamless-integration-teeth.png"
                alt="Seamless Integration"
                width={687}
                height={348}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Orbiting Cards Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute w-[1100px] h-[850px] pointer-events-none"
            style={{ transformOrigin: "center center" }}
          >
            {/* Card 1: Top-Left - Medicament Channel */}
            <div className="absolute top-[5%] left-[0%]">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="pointer-events-auto"
              >
                <FeatureCard feature={features[0]} align="left" />
              </motion.div>
            </div>

            {/* Card 2: Top-Right - Positive Pressure Seal */}
            <div className="absolute top-[5%] right-[0%]">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="pointer-events-auto"
              >
                <FeatureCard feature={features[1]} align="right" />
              </motion.div>
            </div>

            {/* Card 3: Bottom-Left - Comfort and Durability */}
            <div className="absolute bottom-[5%] left-[0%]">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="pointer-events-auto"
              >
                <FeatureCard feature={features[2]} align="left" />
              </motion.div>
            </div>

            {/* Card 4: Bottom-Right - Computer Aided Production */}
            <div className="absolute bottom-[5%] right-[0%]">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="pointer-events-auto"
              >
                <FeatureCard feature={features[3]} align="right" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="flex flex-col items-center lg:hidden">
          {/* Central Image */}
          <div className="relative w-[300px] sm:w-[400px] mb-12">
            <div className="absolute inset-[-30px] rounded-full bg-white shadow-[0_0_60px_rgba(0,0,0,0.1)]" />
            <div className="absolute inset-[-60px] rounded-full bg-white shadow-[0_0_40px_rgba(0,0,0,0.08)]" />
            <Image
              src="/images/perio-max/seamless-integration-teeth.png"
              alt="Seamless Integration"
              width={687}
              height={348}
              className="relative z-10 w-full h-auto object-contain"
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <FeatureCard feature={feature} align="center" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ feature, align }: { feature: typeof features[0], align: "left" | "right" | "center" }) {
  return (
    <div className={`flex flex-col gap-3 w-[320px] ${align === "center" ? "items-center" : align === "right" ? "items-end" : "items-start"}`}>
      {/* Icon Circle with Image */}
      <div className="w-[80px] h-[80px] rounded-full bg-[#232D64] flex items-center justify-center shadow-lg overflow-hidden">
        <img
          src={feature.icon}
          alt={feature.title}
          width={40}
          height={40}
          style={{ filter: "invert(1)" }}
          className="object-contain"
        />
      </div>

      {/* Card with Title AND Description */}
      <div className={`bg-[#F5F5F5] rounded-[21px] p-5 shadow-sm ${align === "center" ? "text-center" : ""}`}>
        <h3 className="font-roboto font-bold text-[24px] leading-tight text-[#1D1F1E] mb-2">
          {feature.title}
        </h3>
        <p className="font-work-sans font-normal text-[16px] leading-[26px] text-[#272727]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
