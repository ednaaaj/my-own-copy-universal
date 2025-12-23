"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CompleteKit() {
  return (
    <section className="relative py-24 bg-[#F8F8F8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Content */}
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-[600px]"
        >
            <h2 className="font-roboto font-normal text-[48px] sm:text-[64px] leading-[1.1] text-black mb-8 tracking-[0.02em]">
                Perio Max+ Complete Kit
            </h2>
            <p className="font-work-sans font-normal text-[18px] leading-[30px] text-[#272727] mb-12">
                We are proud to support the integration of the Shining 3D portfolio, offering our clients a new level of precision and efficiency. From intraoral scanners to 3D printing and digital modeling, we provide:
            </p>

            <button className="bg-[#232D64] text-white font-work-sans font-semibold text-[14px] uppercase tracking-wider px-10 py-6 rounded-full flex items-center gap-4 shadow-lg hover:bg-[#1a224d] transition-colors group">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-[716px]"
        >
            <div className="relative w-full aspect-[1.4/1]">
                 {/* Optional shadow/bg element from design if needed */}
                 <div className="absolute inset-4 bg-white rounded-[20px] shadow-xl transform rotate-2 opacity-50"></div>

                 <Image
                    src="/images/perio-max/perio-max-complete-kit.png"
                    alt="Perio Max+ Complete Kit"
                    fill
                    className="object-contain relative z-10"
                 />
            </div>
        </motion.div>

      </div>
    </section>
  );
}
