"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/footer";
import { ScrollSection } from "@/components/layout/scroll-section";
import { ApplianceCard } from "@/components/cards/ApplianceCard";
import { FilterSidebar } from "@/components/ui/FilterSidebar";
import { Pagination } from "@/components/ui/Pagination";
import { AppliancesContactSection } from "@/components/sections/AppliancesContactSection";
import { APPLANCES } from "@/data/appliances";

// Transform raw data to usable format
const appliances = APPLANCES.map((item, index) => ({
  id: `appliance-${index}`,
  name: item.name,
  imageUrl: item.image_transparent_background,
  blackBgImageUrl: item.image_black_background,
  description: item.one_sentence || item.description,
  // Assign categories based on name keywords
  category: getCategoryFromName(item.name),
  brand: "Universal Orthodontic Lab",
}));

function getCategoryFromName(name: string): string {
  const nameLower = name.toLowerCase();
  if (nameLower.includes("retainer") || nameLower.includes("hawley") || nameLower.includes("essix")) {
    return "Passive Appliance";
  }
  if (nameLower.includes("expander") || nameLower.includes("rpe") || nameLower.includes("helix") || nameLower.includes("haas")) {
    return "Expander";
  }
  if (nameLower.includes("distal") || nameLower.includes("pendulum") || nameLower.includes("jet")) {
    return "Distalizer Appliance";
  }
  if (nameLower.includes("herbst") || nameLower.includes("mara") || nameLower.includes("bionator") || nameLower.includes("twin block")) {
    return "Functional Appliance";
  }
  if (nameLower.includes("band") || nameLower.includes("bonded") || nameLower.includes("fixed") || nameLower.includes("tpa") || nameLower.includes("lingual")) {
    return "Fixed Appliance";
  }
  if (nameLower.includes("splint") || nameLower.includes("guard") || nameLower.includes("bleach") || nameLower.includes("perio")) {
    return "Other Appliance";
  }
  return "Active Appliance";
}

// Get unique categories with counts
function getCategoriesWithCounts() {
  const counts: Record<string, number> = {};
  appliances.forEach((a) => {
    counts[a.category] = (counts[a.category] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Get unique brands with counts
function getBrandsWithCounts() {
  const counts: Record<string, number> = {};
  appliances.forEach((a) => {
    counts[a.brand] = (counts[a.brand] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

const ITEMS_PER_PAGE = 12;

export default function AppliancesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => getCategoriesWithCounts(), []);
  const brands = useMemo(() => getBrandsWithCounts(), []);

  // Filter appliances
  const filteredAppliances = useMemo(() => {
    return appliances.filter((a) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(a.category);
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(a.brand);
      return categoryMatch && brandMatch;
    });
  }, [selectedCategories, selectedBrands]);

  // Pagination
  const totalPages = Math.ceil(filteredAppliances.length / ITEMS_PER_PAGE);
  const paginatedAppliances = filteredAppliances.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setCurrentPage(1);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <ScrollSection
        className="relative isolate w-full overflow-hidden rounded-b-[36px] sm:rounded-b-[60px] lg:rounded-b-[110px] bg-[#f1f1f1]"
        intensity={0.85}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/support-page/hero/support-hero-bg.png"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(241,241,241,0.6)]" />
        </div>

        <div className="relative z-10 px-4 pb-16 pt-8 sm:px-8 lg:px-12 min-h-[400px] sm:min-h-[576px] flex flex-col">
          <header className="flex justify-center absolute top-[31px] left-0 w-full z-50">
            <Navbar />
          </header>

          <div className="mx-auto flex flex-1 max-w-6xl flex-col items-center justify-center gap-6 px-3 pt-24 pb-4 text-center sm:pt-32">
            <h1 className="font-display text-[48px] sm:text-[80px] lg:text-[124px] font-normal leading-[0.94] tracking-[-0.02em] text-black">
              Appliances
            </h1>
            <p className="max-w-3xl text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-[#272727]">
              At Universal Orthodontic Lab, we are committed to helping practices embrace the future of orthodontics with advanced digital workflows and streamlined solutions. Whether you&apos;re fully digital or just getting started, our team is here to support your journey.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Main Content */}
      <section className="bg-white px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <p className="font-roboto text-[18px] font-medium text-black">
              Showing {paginatedAppliances.length} Result from total {filteredAppliances.length}
            </p>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E0E0E0] rounded-[28px] text-[14px] font-medium text-black">
              Relevance
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Sidebar + Grid */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <FilterSidebar
              categories={categories}
              brands={brands}
              selectedCategories={selectedCategories}
              selectedBrands={selectedBrands}
              onCategoryChange={handleCategoryChange}
              onBrandChange={handleBrandChange}
              onClearAll={handleClearAll}
            />

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-[31px] gap-y-[34px]">
                {paginatedAppliances.map((appliance) => (
                  <ApplianceCard
                    key={appliance.id}
                    name={appliance.name}
                    imageUrl={appliance.imageUrl}
                    blackBgImageUrl={appliance.blackBgImageUrl}
                    description={appliance.description}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <AppliancesContactSection />

      <Footer />
    </main>
  );
}
