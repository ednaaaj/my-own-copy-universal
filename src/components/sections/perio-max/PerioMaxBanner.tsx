"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PerioMaxBanner() {
  return (
    <section className="relative w-full min-h-[800px] lg:min-h-[1115px] bg-white rounded-b-[60px] lg:rounded-b-[110px] overflow-hidden">

      {/* Layer 1: Gray Gradient Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/perio-max/perio-max-banner-gray-gradient-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Layer 2: Cross Pattern Background - Repeating, low opacity */}
      <div className="absolute inset-0 z-[1] opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/perio-max/perio-max-cross-bg-banner.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Layer 3: Outer Circle Line */}
      <div className="absolute z-[2] left-1/2 -translate-x-1/2 top-[35%] lg:top-[30%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px]">
        <Image
          src="/images/perio-max/man-circle-outer-white-bg.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Layer 4: Inner Circle Line */}
      <div className="absolute z-[3] left-1/2 -translate-x-1/2 top-[38%] lg:top-[33%] w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px]">
        <Image
          src="/images/perio-max/man-circle-inner-white-bg.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Layer 5: Man Banner Image - Positioned at bottom center */}
      <div className="absolute z-[4] left-1/2 -translate-x-1/2 bottom-0 w-[400px] h-[500px] sm:w-[550px] sm:h-[650px] lg:w-[850px] lg:h-[700px]">
        <Image
          src="/images/perio-max/man-banner.png"
          alt="Perio Max+ Banner"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* Content Container - Title and Subtitle */}
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-[160px] sm:pt-[200px] lg:pt-[180px]">

        {/* Title Group */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
            {/* Logo/Title */}
            <h1 className="font-roboto font-normal text-[#232D64] text-[56px] sm:text-[80px] lg:text-[100px] leading-tight tracking-tight mb-4">
                Perio Max<sup className="text-[32px] sm:text-[50px] lg:text-[60px] top-[-20px] sm:top-[-30px] lg:top-[-40px] relative text-[#F27128]">+</sup>
            </h1>

            {/* Subtitle */}
            <p className="font-work-sans font-normal text-[#232D64] text-[16px] sm:text-[22px] lg:text-[27px] leading-[30px] tracking-wide">
                Professional At-Home Treatment for Healthy Gums
            </p>
        </motion.div>

      </div>
    </section>
  );
}
