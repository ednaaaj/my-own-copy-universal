"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  about: [
    { label: "Universal Orthodontic Lab", href: "/" },
    { label: "CEO's Greeting", href: "/" },
  ],
  digitalSolutions: [
    { label: "Universal Digital Prescription", href: "/digital-solutions" },
    { label: "STL Cloud Services", href: "/digital-solutions" },
    { label: "3D Digital Treatment Planning", href: "/digital-solutions" },
    { label: "3D Printing & Scanning", href: "/digital-solutions" },
  ],
  appliances: [
    { label: "All Appliances", href: "/appliances" },
    { label: "U-Aligner", href: "/aligner" },
  ],
  support: [
    { label: "FAQ", href: "/support" },
    { label: "Contact Us", href: "/support" },
    { label: "Become a Customer", href: "/support" },
    { label: "Downloadable Forms", href: "/support" },
    { label: "Videos", href: "/support" },
  ],
};

export function FooterLight() {
  return (
    <footer className="bg-white">
      {/* Logo and Description Section */}
      <section className="border-t border-[#C1C1C1] px-4 sm:px-6 lg:px-10 pt-10 pb-8">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-center">
          {/* Logo - using the same footer-logo but with dark mode filter */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/main/footer/footer-logo.png"
              alt="Universal Orthodontic Lab"
              width={444}
              height={126}
              className="h-[80px] sm:h-[100px] lg:h-[126px] w-auto brightness-0"
              priority
            />
          </Link>

          {/* Description */}
          <p className="max-w-[755px] font-work-sans text-[16px] sm:text-[20px] leading-[1.5] text-[#272727]">
            At Universal Orthodontic Lab, we&apos;re more than just a lab—we&apos;re your
            dedicated partner in delivering exceptional patient care. With precision,
            reliability, and a commitment to innovation, we&apos;re ready to support your
            practice every step of the way.
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section className="border-t border-[#C1C1C1] px-4 sm:px-6 lg:px-10 py-8">
        <div className="mx-auto max-w-6xl grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-5">
          {/* About */}
          <div className="space-y-3">
            <h3 className="font-work-sans text-[16px] sm:text-[20px] font-semibold uppercase leading-[1.4] text-[#101218]">
              About
            </h3>
            <div className="space-y-2">
              {footerLinks.about.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-work-sans text-[14px] sm:text-[18px] leading-[19px] text-[#505050] hover:text-[#068CFF] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Digital Solutions */}
          <div className="space-y-3">
            <h3 className="font-work-sans text-[16px] sm:text-[20px] font-semibold uppercase leading-[1.4] text-[#101218]">
              Digital Solutions
            </h3>
            <div className="space-y-2">
              {footerLinks.digitalSolutions.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-work-sans text-[14px] sm:text-[18px] leading-[19px] text-[#505050] hover:text-[#068CFF] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Appliances */}
          <div className="space-y-3">
            <h3 className="font-work-sans text-[16px] sm:text-[20px] font-semibold uppercase leading-[1.4] text-[#101218]">
              Appliances
            </h3>
            <div className="space-y-2">
              {footerLinks.appliances.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-work-sans text-[14px] sm:text-[18px] leading-[19px] text-[#505050] hover:text-[#068CFF] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-work-sans text-[16px] sm:text-[20px] font-semibold uppercase leading-[1.4] text-[#101218]">
              Support
            </h3>
            <div className="space-y-2">
              {footerLinks.support.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-work-sans text-[14px] sm:text-[18px] leading-[19px] text-[#505050] hover:text-[#068CFF] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe & Contact */}
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <h3 className="font-work-sans text-[16px] sm:text-[20px] font-semibold uppercase leading-[1.4] text-[#101218]">
              Subscribe to Newsletter
            </h3>

            {/* Email Input */}
            <div className="flex items-center bg-white border border-[#B9B9B9] rounded-[12px] overflow-hidden max-w-[445px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 h-[50px] sm:h-[61px] px-3 sm:px-4 font-work-sans text-[14px] sm:text-[16px] text-[#272727] placeholder:text-[#736C6C] bg-transparent border-none focus:outline-none"
              />
              <button className="shrink-0 h-[40px] sm:h-[50px] px-3 sm:px-4 mx-1 sm:mx-1.5 bg-[#068CFF] text-white font-work-sans font-medium text-[11px] sm:text-[12px] uppercase rounded-full flex items-center gap-1 sm:gap-2 hover:bg-[#0078E5] transition-colors whitespace-nowrap">
                Subscribe
                <span className="text-base sm:text-lg">→</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              {/* Address */}
              <div className="flex items-start gap-2 sm:gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    d="M12 21s7-6.162 7-12a7 7 0 10-14 0c0 5.838 7 12 7 12z"
                    fill="#505050"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="white" />
                </svg>
                <p className="font-work-sans text-[12px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#505050]">
                  11917 Front St. Norwalk, CA 90650
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2 sm:gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="#505050"
                  />
                </svg>
                <p className="font-work-sans text-[12px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#505050]">
                  877. 771. 0770
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2 sm:gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="#505050"
                  />
                </svg>
                <p className="font-work-sans text-[12px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#505050] break-all sm:break-normal">
                  customerservice@uniortholab.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="border-t border-[#C1C1C1] px-4 sm:px-6 lg:px-10 py-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-work-sans text-[12px] sm:text-[14px] text-[#505050]">
            Universal Orthodontic Lab Copyright 2025. All rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
