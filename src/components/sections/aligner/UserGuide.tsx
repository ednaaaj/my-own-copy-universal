"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Creating an Account",
    description:
      "To create an account, the U-Aligner Portal requires basic information such as office name, office address, and an email address. The email provided will be used for account activation, log in, and system notifications. A password is also required to access your account. After successful registration a team member will activate your account. An email confirmation will be sent. If the office does not have an account set up with Universal Orthodontic Lab, a new account will be created by a customer service representative.",
    image: "/images/aligner/creating-an-account.png",
  },
  {
    title: "Dashboard",
    description:
      "The dashboard is a central gateway for using the portal. On the top right the option to change the profile settings is available. The profile section allows you to manage personal details such as office information and personal credentials. This information will be kept strictly confidential and used for contact purposes only. The case section provides a list of cases waiting for review, accepted and rejected cases. This will help the office monitor their cases and check status on the submitted cases.",
    image: null, // No specific image found, might be text only or share previous
  },
  {
    title: "Submitting Cases",
    description:
      "The case section provides a list of cases waiting for review, accepted and rejected cases. By selecting “+New Case” on the top left, you will be directed to a submission form. This will result in a multi-step process in which you will be required to upload documents, photos and enter specific treatment information. Each step in the process can be saved and completed at a later time via the dashboard.",
    image: "/images/aligner/submitting-case.png",
  },
  {
    title: "Patient Information",
    description:
      "In the patient information section you will be required to enter all relevant patient and treatment information.",
    image: null,
  },
  {
    title: "Initial Images and Scans",
    description:
      "In this section you can upload the initial images and intra-oral scans. all scans must be in STL file as any other version will not be accepted. When uploading images, the first step is to select the images from your local computer. The images required are: full face at rest, full face smiling, right side profile, left side profile. retracted anterior frontal, retracted buccal right, retracted buccal left, maxillary occlusal, and mandibular occlusal. Cases with incomplete images will not be accepted.",
    image: "/images/aligner/initial-images-and-scan.png",
  },
  {
    title: "In Planning",
    description:
      "Once the case has been submitted, our team of experts will evaluate the submitted case. Please be advised that the U-Aligner system is designated to make minor to moderate corrections and is not a substitute for comprehensive orthodontic treatment. After receiving your case, we may inform you that the U-Aligner system will not be able to achieve the desired results. Please allow 48-72 hours to receive a notification that the treatment plan is ready to review. A notification will be sent via email.",
    image: null,
  },
  {
    title: "Accepting Treatment",
    description:
      "Once the treatment plan has been uploaded, any modifications can be requested. A comment can be left to our experts for modification requests. All questions or requests will be answered within 24 hours. A notification email will be sent to the email address provided for the account. A lab report will also be available for the clinician to review the treatment instructions.",
    image: "/images/aligner/accepting-treatment.png",
  },
  {
    title: "Production and Shipping",
    description:
      "Once the treatment plan has been approved the case will be sent to production. The production lead time is 7-10 business days. Once the case has shipped, the status on the case will change to shipped.",
    image: "/images/aligner/products-and-shipping.png",
  },
];

export function UserGuide() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-24">
            <h2 className="font-roboto font-normal text-[48px] sm:text-[64px] leading-[1.2] text-black mb-4">
            User Guide for U Aligner Portal
            </h2>
            <a href="https://www.aligners.uniortholab.com" target="_blank" rel="noopener noreferrer" className="font-work-sans font-normal text-[18px] text-[#272727] hover:text-[#F27128] transition-colors">
            www.aligners.uniortholab.com
            </a>
        </div>

        {/* Steps List */}
        <div className="w-full flex flex-col gap-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20"
            >
              {/* Text Side - Always Left */}
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="font-work-sans font-semibold text-[18px] uppercase tracking-wider text-[#F27128]">
                  {step.title}
                </h3>
                <p className="font-work-sans font-normal text-[18px] leading-[30px] text-[#272727]">
                  {step.description}
                </p>
              </div>

              {/* Image Side - Always Right */}
              {/* Some steps might not have an image, or share one. For layout balance, if no image, we might stretch text or leave space.
                  Based on screenshots, it seems to be a visual guide, so likely every substantial step has a visual or is grouped.
                  For now, I render image if exists, else empty div to offset or just let content flow.
                  Actually, strictly following the 2-column screenshot look, I'll render the image if available.
                  If not, I'll center the text? No, list format suggests consistent alignment.
               */}
               <div className="flex-1 w-full flex justify-center lg:justify-start">
                 {step.image ? (
                   <div className="relative w-full max-w-[600px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain rounded-xl shadow-sm"
                      />
                   </div>
                 ) : (
                    <div className="hidden lg:block flex-1" />
                 )}
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
