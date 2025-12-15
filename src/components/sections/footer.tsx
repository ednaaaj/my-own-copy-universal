"use client";

import Image from "next/image";
import { ScrollSection } from "@/components/layout/scroll-section";

const footerLinks = {
  about: ["Universal Orthodontic Lab", "CEO’s Greeting"],
  digitalSolutions: [
    "Universal Digital Prescription",
    "STL Cloud Services",
    "3D Digital Treatment Planning",
    "3D Printing & Scanning",
  ],
  appliances: ["All Appliances", "U-Aligner"],
  support: [
    "FAQ",
    "Contact Us",
    "Become a Customer",
    "Downloadable Forms",
    "Videos",
  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <ScrollSection
        as="section"
        className="relative mx-auto mt-48 mb-28 max-w-6xl overflow-visible rounded-[20px] bg-[rgba(6,140,255,0.08)] px-6 py-12 shadow-[0_16px_24px_rgba(6,140,255,0.12)] sm:px-10 lg:px-14"
        intensity={0.9}
      >
        <div className="pointer-events-none absolute inset-0 parallax-layer" data-speed="slow">
          <div className="absolute -left-24 -top-32 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,140,255,0.15)_0%,rgba(255,255,255,0)_70%)]" />
          <div className="absolute right-20 -top-44 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,140,255,0.12)_0%,rgba(255,255,255,0)_75%)]" />
        </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-3 text-[#068CFF]">
            <h3 className="text-[32px] font-bold leading-[1.2] sm:text-[40px]">
              Subscribe to our newsletter
            </h3>
            <p className="max-w-xl text-[16px] leading-[24px]">
              Sign up for our newsletter and be the first one to see our latest
              news, and get exclusive discounts and promotions!
            </p>
            <form className="mt-4 flex w-full max-w-xl items-center gap-3 rounded-full bg-[rgba(255,255,255,0.9)] px-2 py-2 shadow-[0_10px_18px_rgba(6,140,255,0.18)] backdrop-blur">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border-none bg-transparent px-4 text-[15px] font-medium text-[#068CFF] placeholder:text-[#68b9ff] focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-12 items-center gap-2 rounded-full bg-[#068CFF] px-5 text-[14px] font-semibold uppercase tracking-[0.5px] text-white shadow-[0_10px_18px_rgba(6,140,255,0.35)] transition hover:brightness-110"
              >
                Subscribe
                <span className="-mb-[1px] text-lg leading-none">→</span>
              </button>
            </form>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-32 h-[300px] w-[360px] sm:-right-14 sm:-top-40 sm:h-[340px] sm:w-[420px] lg:-right-20 lg:-top-48 lg:h-[400px] lg:w-[480px] parallax-layer" data-speed="slow">
            <Image
              src="/images/footer/footer-subsribe-teeth.png"
              alt="Clear aligner product"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        as="section"
        className="mt-14 bg-[#068CFF] px-4 pb-10 pt-10 text-white sm:px-6 lg:px-10"
        intensity={0.85}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="grid gap-8 border-b border-white/60 pb-8 lg:grid-cols-[0.8fr,1.2fr]">
            <div className="flex items-start">
              <Image
                src="/images/footer/footer-logo.png"
                alt="Universal Orthodontic Lab"
                width={444}
                height={126}
                className="h-[63px] w-auto"
                priority
              />
            </div>
            <p className="max-w-3xl text-[14px] leading-[22px]">
              At Universal Orthodontic Lab, we&apos;re more than just a lab—we&apos;re
              your dedicated partner in delivering exceptional patient care.
              With precision, reliability, and a commitment to innovation,
              we&apos;re ready to support your practice every step of the way.
            </p>
          </div>

          <div className="grid gap-6 border-b border-white/60 pb-6 text-[13px] leading-[20px] sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-3">
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px]">
                About
              </p>
              {footerLinks.about.map((item) => (
                <p key={item} className="cursor-pointer hover:underline">
                  {item}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px]">
                Digital Solutions
              </p>
              {footerLinks.digitalSolutions.map((item) => (
                <p key={item} className="cursor-pointer hover:underline">
                  {item}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px]">
                Appliances
              </p>
              {footerLinks.appliances.map((item) => (
                <p key={item} className="cursor-pointer hover:underline">
                  {item}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px]">
                Support
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {footerLinks.support.map((item) => (
                  <p key={item} className="cursor-pointer hover:underline">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[14px] font-semibold uppercase tracking-[0.5px]">
                Contact
              </p>
              <div className="space-y-2 text-[12px] leading-[18px]">
                <div className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-[2px]"
                  >
                    <path
                      d="M12 21s7-6.162 7-12a7 7 0 10-14 0c0 5.838 7 12 7 12z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="9" r="2" stroke="white" strokeWidth="1.5" />
                  </svg>
                  <p>11917 Front St. Norwalk, CA 90650</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-[2px]"
                  >
                    <path
                      d="M6.5 4h-2l-1 3 4 2s1.5-1 2-1 4 5 4 5 1 1.5-1 2-3 2-3 2l2 4 3-1v-2l3-1 3 2"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>877. 771. 0770</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-[2px]"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>customerservice@uniortholab.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 text-[12px] leading-[18px] text-white sm:flex-row sm:items-center">
            <p>© 2025 Universal Orthodontic Lab. All rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="cursor-pointer hover:underline">
                Terms of Service
              </span>
              <span>|</span>
              <span className="cursor-pointer hover:underline">Privacy Policy</span>
              <span>|</span>
              <span className="cursor-pointer hover:underline">Cookie Policy</span>
            </div>
          </div>
        </div>
      </ScrollSection>
    </footer>
  );
}
