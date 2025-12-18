'use client';

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollSection } from "@/components/layout/scroll-section";
import { Footer } from "@/components/sections/footer";
import { BecomeCustomerSection } from "@/components/sections/BecomeCustomerSection";



const processSteps = [
  {
    icon: "/images/digital-solutions/Uniortho Lab Website Upload.png",
    title: "Submit Your Digital Scan",
    description: "Upload your scan files through our secure portal or send via approved file transfer methods.",
  },
  {
    icon: "/images/digital-solutions/Uniortho Lab Website File Search.png",
    title: "Case Review & Design",
    description: "Our team reviews your submission and prepares the digital design for your appliance or model.",
  },
  {
    icon: "/images/digital-solutions/Device Desktop Analytics Uniortho Lab.png",
    title: "Digital Confirmation",
    description: "You'll receive a digital preview or design approval for select appliances before production begins.",
  },
  {
    icon: "/images/digital-solutions/Uniortho Lab Website (6).png", // Assuming pyramid/fabrication
    title: "Precision Fabrication",
    description: "Using advanced 3D printing and CAD/CAM technology, we fabricate your appliance with exceptional accuracy and turnaround times.",
  },
  {
    icon: "/images/digital-solutions/Uniortho Lab Website (7).png", // Assuming package/delivery
    title: "Delivery",
    description: "Your finished product is carefully packaged and shipped directly to your practice.",
  },
];

const partnerLogos = [
  "/images/digital-solutions/shining-3d-dental.png",
  "/images/digital-solutions/3shape.png",
  "/images/digital-solutions/itero.png",
  "/images/digital-solutions/alliedstar.png",
  "/images/digital-solutions/dentsply-sirong.png",
  "/images/digital-solutions/medit.png",
];

const stars = Array.from({ length: 5 });

export default function DigitalSolutionsPage() {

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <ScrollSection
        className="relative w-full overflow-hidden rounded-b-[110px] bg-white pb-0 shadow-sm border-b border-[#e6e6e6]"
        intensity={0.85}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/digital-solutions/banner/digital-solutions-banner.png"
            alt="Digital Solutions Banner"
            fill
            className="object-cover"
            priority
          />
           <div className="absolute inset-0 bg-[#F1F1F1] opacity-60" />
        </div>

        <div className="relative z-10 px-4 pb-0 pt-8 sm:px-8 lg:px-12 h-[576px] flex flex-col">
          <header className="flex justify-center absolute top-[31px] left-0 w-full z-50">
             <Navbar />
          </header>

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="font-roboto text-[64px] font-normal leading-[75px] tracking-[0.02em] text-black sm:text-[80px] lg:text-[100px]">
              Digital Solutions
            </h1>
            <p className="mt-6 max-w-[900px] font-work-sans text-[18px] font-normal leading-[30px] text-[#272727] sm:text-[20px]">
              At Universal Orthodontic Lab, we are committed to helping practices embrace the future of orthodontics with advanced digital workflows and streamlined solutions. Whether you&apos;re fully digital or just getting started, our team is here to support your journey.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Seamless Integration Section */}
      <ScrollSection className="bg-white py-24 sm:py-32">
        <div className="mx-auto flex max-w-[1320px] flex-col-reverse gap-10 lg:flex-row lg:items-center px-6">
          <div className="flex flex-1 flex-col gap-8">
            <h2 className="font-roboto text-[50px] leading-[1.1] text-black lg:text-[64px]">
              Seamless Integration with Shining 3D
            </h2>
            <p className="font-work-sans text-[18px] leading-[30px] text-[#272727]">
              We are proud to support the integration of the Shining 3D portfolio, offering our clients a new level of precision and efficiency. From intraoral scanners to 3D printing and digital modeling, we provide:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Guidance on equipment setup",
                "Training resources and onboarding support",
                "Customized recommendations to fit your practice’s workflow"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                   <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#068cff]">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 9L11 1" stroke="#068cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                   </div>
                  <span className="font-roboto text-[20px] font-bold text-[#1D1F1E]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-work-sans text-[18px] leading-[30px] text-[#272727]">
              Our experienced team will work with you to ensure a smooth transition into digital, helping you unlock the full potential of your Shining 3D investment.
            </p>
          </div>
          <div className="relative h-[400px] w-full flex-1 overflow-hidden rounded-[29px] shadow-lg lg:h-[554px]">
             <Image
              src="/images/digital-solutions/seamless-integration/seamless-integration.png"
              alt="Shining 3D Integration Scanner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ScrollSection>

      {/* Our Process Section */}
      <ScrollSection className="bg-white py-20">
        <div className="mx-auto max-w-[1600px] px-6 text-center">
          <h2 className="font-roboto text-[48px] text-black sm:text-[64px]">
            Our Process: Simple & Efficient
          </h2>
          <p className="mt-4 font-work-sans text-[18px] text-[#272727]">
            Going digital with Universal is easy. Here&apos;s how the process works:
          </p>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-start gap-8 rounded-[12px] bg-[#F0F0F0] p-6 text-left h-full">
                <div className="relative h-20 w-20 shrink-0">
                  <Image src={step.icon} alt={step.title} fill className="object-contain" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h3 className="font-roboto text-[28px] leading-tight text-black lg:text-[32px]">
                    {step.title}
                  </h3>
                   <div className="h-[1px] w-[120px] bg-black" />
                  <p className="font-work-sans text-[18px] leading-[28px] text-[#272727]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Accepted Scans Section */}
      <ScrollSection className="bg-white py-20">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-16 px-6">
          <h2 className="text-center font-roboto text-[42px] font-normal leading-tight text-black sm:text-[64px]">
             Accepted Intraoral Scans
          </h2>
          <div className="relative h-[250px] w-full overflow-hidden rounded-[29px] sm:h-[350px] lg:h-[468px]">
             <Image
              src="/images/digital-solutions/intraoral-scans.png"
              alt="Accepted Intraoral Scans"
              fill
              className="object-cover"
            />
          </div>
           <div className="text-center">
             <p className="font-roboto text-[28px] sm:text-[36px] lg:text-[46px] leading-snug text-black">
               Universal Orthodontic Lab accepts a wide range of intraoral and digital scan formats, including:
             </p>
           </div>
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-90">
             {partnerLogos.map((logo, idx) => (
                <div key={idx} className="relative h-12 w-32 sm:h-16 sm:w-48 lg:h-20 lg:w-56">
                  <Image src={logo} alt="Partner Logo" fill className="object-contain" />
                </div>
             ))}
           </div>
        </div>
      </ScrollSection>

      {/* Ready to Go Digital (Contact) Section */}
      <ScrollSection className="bg-white pb-32 pt-20">
         <div className="mx-auto max-w-[1320px] px-6">
           <BecomeCustomerSection
             imageSrc="/images/digital-solutions/contact-us-section-left-image.png"
             title="Contact Us"
           />
         </div>
      </ScrollSection>

      <Footer />
    </main>
  );
}
