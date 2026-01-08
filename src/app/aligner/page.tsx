"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/footer";
import { AlignerBanner } from "@/components/sections/aligner/AlignerBanner";
import { TreatmentWorkflow } from "@/components/sections/aligner/TreatmentWorkflow";
import { Indications } from "@/components/sections/aligner/Indications";
import { JoinFuture } from "@/components/sections/aligner/JoinFuture";
import { UserGuide } from "@/components/sections/aligner/UserGuide";

export default function AlignerPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <header className="flex justify-center absolute top-[20px] sm:top-[31px] left-0 w-full z-50 px-4">
        <Navbar />
      </header>
      <AlignerBanner />
      <TreatmentWorkflow />
      <Indications />
      <JoinFuture />
      <UserGuide />
      <Footer />
    </main>
  );
}
