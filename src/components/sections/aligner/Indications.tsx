"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const conditions = [
  {
    title: "Crooked Teeth",
    image: "/images/aligner/crooked-teeth.png",
    description:
      "When teeth are overlapping or crooked, this can indicate crowding. Crowding often occurs when the jaws aren’t wide enough to support all teeth. If the teeth are trying to erupt in a dental arch that’s too narrow and doesn’t have sufficient space, the teeth will overlap each other and rotate as they’re developing. A palatal expander may be used during childhood to widen the jaw bones and help create the necessary space for teeth to erupt in a better position. In severe cases, the extraction of baby or even permanent teeth may be required to correct this condition.",
  },
  {
    title: "Open Bite",
    image: "/images/aligner/open-bite.png",
    description:
      "An open bite is characterized by a misalignment between the top teeth and bottom teeth. With a healthy orthodontic condition, the top teeth overlap the bottom teeth. When a person has an open bite, the top and bottom teeth don’t meet. This problem is typical for children who sucked their thumb late in their childhood or thrust their tongue against their teeth. It can also indicate a skeletal development problem or TMJ syndrome.",
  },
  {
    title: "Underbite",
    image: "/images/aligner/underbite.png",
    description:
      "With an underbite condition, the lower jaw extends further than the upper jaw. As a result, the bottom teeth actually bite together in front of the top teeth. This condition can contribute to an undesirable appearance and can cause discomfort in the jaw when chewing and talking. Underbites are often caused by genetics, but they can also result from other childhood habits, and they can be effectively addressed in kids as young as 7.",
  },
  {
    title: "Overbite",
    image: "/images/aligner/overbite.png",
    description:
      "A crossbite condition is present when the upper teeth rest within the lower teeth or completely outside of them. This often leads to misalignment of the jaw and various complications, such as a temporomandibular joint (TMJ) disorder. This condition can also result from genetics, irregular tooth eruption, mouth breathing while sleeping and thumbsucking late into childhood.",
  },
  {
    title: "Gap Teeth",
    image: "/images/aligner/gapteeth.png",
    description:
      "We often see new patients who have gaps between their teeth. This may be caused by missing teeth or excessive space in the mouth. Like other common orthodontic problems, this condition may also result from childhood habits, such as tongue-thrusting. Spacing may be present between two teeth or multiple teeth and can affect one or both dental arches",
  },
  {
    title: "Crossbite",
    image: "/images/aligner/crossbite.png",
    description:
      "A crossbite condition is present when the upper teeth rest within the lower teeth or completely outside of them. This often leads to misalignment of the jaw and various complications, such as a temporomandibular joint (TMJ) disorder. This condition can also result from genetics, irregular tooth eruption, mouth breathing while sleeping and thumbsucking late into childhood.",
  },
];

export function Indications() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Header */}
        <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-roboto font-normal text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] text-center text-black mb-10 sm:mb-14 lg:mb-20 tracking-[0.02em]"
        >
          Indications
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#F5F5F5] rounded-[21px] p-8 sm:p-10 flex flex-col items-center text-center gap-6"
            >
               {/* Illustration */}
               <div className="h-[140px] flex items-end justify-center mb-4">
                  <Image
                    src={condition.image}
                    alt={condition.title}
                    width={200}
                    height={150}
                    className="object-contain max-h-[140px] w-auto"
                  />
               </div>

               <div className="w-[120px] h-[1px] bg-black mb-2" />

               {/* Title */}
               <h3 className="font-work-sans font-medium text-[16px] uppercase tracking-wide text-[#F27128]">
                 {condition.title}
               </h3>

               {/* Description */}
               <div className="flex-1">
                 <p className="font-work-sans font-normal text-[16px] leading-[26px] text-[#272727]">
                   {condition.description}
                 </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
