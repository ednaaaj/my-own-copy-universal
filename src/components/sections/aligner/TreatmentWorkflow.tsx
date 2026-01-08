"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "STEP 1",
    title: "Patient Consultation",
    description:
      "During the patient consultation, the patient is evaluated to ensure the patient is a candidate for aligners. A full evaluation is conducted with Intraoral scans, clinical images and X-rays.",
  },
  {
    step: "STEP 2",
    title: "Treatment Planning",
    description:
      "Once the Intraoral scans and images have been submitted, a treatment plan is generated and sent to the doctor to review within 48 hours",
  },
  {
    step: "STEP 3",
    title: "Case Approval",
    description:
      "Once the treatment plan has been approved, the manufacturing of the aligners begins. The aligners will be shipped within 10 business days.",
  },
  {
    step: "STEP 4",
    title: "Patient Use",
    description:
      "U-Aligner requires patients to wear the aligner trays to be worn for at least 20 hours or more. The trays must be removed during meals and consumption of hot drinks.",
  },
  {
    step: "STEP 5",
    title: "Results",
    description:
      "After wearing all sets for a minimum of 2 weeks per set, a new scan is required to order the patient retainer.",
  },
];

export function TreatmentWorkflow() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
            <h2 className="font-roboto font-normal text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] text-black mb-4 sm:mb-6 lg:mb-8 tracking-[0.02em]">
            Treatment Workflow
            </h2>
            <p className="font-work-sans font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[30px] text-[#272727] max-w-[1100px] mx-auto px-2">
            U-Aligner can treat a wide variety of cases and malocclusions including
            spacing, crowding, open bite, crossbite, underbite, and overbite. Our
            trained team of specialists have treated patients of all ages including
            teens and kids who wish to build a captivating smile for a bright
            future.
            </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-[1440px] mx-auto">
           {/* Vertical Line - Absolute position based on container */}
           <motion.div
             initial={{ height: 0 }}
             whileInView={{ height: "100%" }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute left-[29px] top-4 bottom-10 w-[1px] bg-[#505050] opacity-50 hidden sm:block max-h-[calc(100%-40px)]"
           />

           <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12"
                >

                    {/* Marker & Title Group */}
                    <div className="flex flex-row items-start gap-6 sm:w-[400px] flex-shrink-0 relative">
                        {/* Marker Square */}
                        <div className="w-[20px] h-[20px] bg-[#F27128] flex-shrink-0 mt-[6px] relative z-10 ml-[19px]" />

                        {/* Step Info */}
                        <div className="flex flex-col gap-1">
                            <span className="font-work-sans font-normal text-[18px] text-[#F27128] leading-[30px]">
                                {step.step}
                            </span>
                            <h3 className="font-roboto font-bold text-[28px] sm:text-[32px] leading-[1.1] text-[#1D1F1E] tracking-tight">
                                {step.title}
                            </h3>
                        </div>
                    </div>

                    {/* Description Card */}
                    <div className="flex-1 w-full bg-[#F5F5F5] rounded-[21px] p-6 sm:p-8 flex items-center min-h-[115px]">
                        <p className="font-work-sans font-normal text-[16px] sm:text-[18px] leading-[30px] text-[#272727]">
                        {step.description}
                        </p>
                    </div>

                </motion.div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
}
