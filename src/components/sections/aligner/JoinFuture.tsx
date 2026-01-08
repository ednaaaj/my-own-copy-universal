"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function JoinFuture() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 md:px-8 bg-white flex justify-center">
      {/* Container matching the rounded orange background */}
      <div className="w-full max-w-[1720px] bg-[#FEE0C5] rounded-[20px] sm:rounded-[28px] lg:rounded-[35px] overflow-hidden relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-20 gap-8 lg:gap-12">

        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 z-10 max-w-[700px] text-center lg:text-left">
          <h2 className="font-roboto font-normal text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[1.2] text-black tracking-[0.02em]">
            Join the future of the Digital Dentistry with
          </h2>

          <div className="flex items-center gap-4">
             <Image
                src="/images/aligner/ualigner-banner.png"
                alt="U Aligner Logo"
                width={120}
                height={120}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
             />
          </div>

          <button className="bg-[#F27128] text-white font-work-sans font-semibold text-[14px] uppercase tracking-wider px-8 py-6 rounded-full flex items-center gap-4 shadow-lg hover:bg-[#d95d18] transition-colors">
            Get Started
            <span className="bg-white rounded-full p-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="#F27128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
          </button>
        </div>

        {/* Right Content - Video Thumbnail */}
        <div className="relative w-full max-w-[800px] aspect-video rounded-[35px] overflow-hidden shadow-2xl">
           <Image
             src="/images/aligner/screen-video.png"
             alt="U Aligner Introduction Video"
             fill
             className="object-cover"
           />
           {/* Play Button Overlay (if not part of image, adding one just in case or if image is just a thumb) */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#F27128" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
