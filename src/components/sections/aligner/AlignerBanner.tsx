"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AlignerBanner() {
  return (
    <div className="relative w-full min-h-[800px] lg:min-h-[1134px] flex flex-col items-center overflow-hidden rounded-b-[60px] lg:rounded-b-[110px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aligner/bg-banner-gradient.png"
          alt="Background Gradient"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo - Large centered at top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-[140px] sm:mt-[160px] lg:mt-[182px]"
      >
        <Image
          src="/images/aligner/ualigner-banner.png"
          alt="U Aligner Logo"
          width={347}
          height={107}
          className="w-[280px] h-auto sm:w-[320px] lg:w-[347px] object-contain"
          priority
        />
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center max-w-[1189px] px-4 mt-6 sm:mt-8 lg:mt-10"
      >
        <p className="font-work-sans font-normal text-[#F27128] text-[24px] sm:text-[28px] lg:text-[32px] leading-[36px] sm:leading-[42px] lg:leading-[48px]">
          Seamless alignment, endless smiles.
          <br />
          Your journey to a picture-perfect smile begins here!
        </p>
      </motion.div>

      {/* Girls Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 flex-1 w-full flex items-end justify-center mt-8"
      >
        <Image
          src="/images/aligner/banner-2-girls.png"
          alt="U-Aligner Happy Patients"
          width={1215}
          height={700}
          className="w-full max-w-[1215px] h-auto object-contain object-bottom"
          priority
        />
      </motion.div>
    </div>
  );
}
