"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/footer";
import { PerioMaxBanner } from "@/components/sections/perio-max/PerioMaxBanner";
import { SeamlessIntegration } from "@/components/sections/perio-max/SeamlessIntegration";
import { CompleteKit } from "@/components/sections/perio-max/CompleteKit";

export default function PerioMaxPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <header className="flex justify-center absolute top-[31px] left-0 w-full z-50">
        <Navbar />
      </header>

      <PerioMaxBanner />
      <SeamlessIntegration />
      <CompleteKit />
      <Footer />
    </main>
  );
}
