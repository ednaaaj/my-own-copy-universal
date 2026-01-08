"use client";

import { useState } from "react";

type FilterCategory = {
  name: string;
  count: number;
};

type FilterSidebarProps = {
  categories: FilterCategory[];
  brands: FilterCategory[];
  selectedCategories: string[];
  selectedBrands: string[];
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onClearAll: () => void;
};

export function FilterSidebar({
  categories,
  brands,
  selectedCategories,
  selectedBrands,
  onCategoryChange,
  onBrandChange,
  onClearAll,
}: FilterSidebarProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);

  const displayedCategories = showAllCategories ? categories : categories.slice(0, 6);

  return (
    <aside className="w-full lg:w-[316px] shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-roboto text-[20px] font-medium text-black">Filters</h3>
        <button
          onClick={onClearAll}
          className="px-5 py-2.5 text-[14px] font-normal text-[#726C6C] border border-[#E4E4E4] rounded-[30px] hover:bg-gray-50 transition"
        >
          Clear All
        </button>
      </div>

      {/* Sidebar Card */}
      <div className="bg-white border border-[#F3F3F3] rounded-[19px] p-[17px] space-y-6">
        {/* Category Section */}
        <div>
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex items-center justify-between w-full mb-4 cursor-pointer"
          >
            <h4 className="font-roboto text-[20px] font-medium text-black">Category</h4>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              className={`transition-transform duration-200 ${categoryOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              <path d="M1 1L6 6L1 11" stroke="#140342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {categoryOpen && (
            <>
              <div className="space-y-2.5">
                {displayedCategories.map((category) => (
                  <label key={category.name} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => onCategoryChange(category.name)}
                        className="w-[15px] h-[15px] rounded-sm border-2 border-[#6A7A99] checked:bg-black checked:border-black appearance-none cursor-pointer relative
                          after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-[4px] after:h-[7px] after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45"
                      />
                      <span className="font-roboto text-[14px] text-black group-hover:text-[#068CFF] transition">
                        {category.name}
                      </span>
                    </div>
                    <span className="font-roboto text-[14px] text-[#4F547B]">
                      ({category.count})
                    </span>
                  </label>
                ))}
              </div>

              {categories.length > 6 && (
                <button
                  onClick={() => setShowAllCategories(!showAllCategories)}
                  className="mt-3 font-roboto text-[14px] font-medium text-black underline hover:text-[#068CFF] transition"
                >
                  {showAllCategories ? "Show less" : "Show more"}
                </button>
              )}
            </>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#DDDDDD]" />

        {/* Brand Section */}
        <div>
          <button
            onClick={() => setBrandOpen(!brandOpen)}
            className="flex items-center justify-between w-full mb-4 cursor-pointer"
          >
            <h4 className="font-roboto text-[20px] font-medium text-black">Brand</h4>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              className={`transition-transform duration-200 ${brandOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              <path d="M1 1L6 6L1 11" stroke="#140342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {brandOpen && (
            <div className="space-y-2.5">
              {brands.map((brand) => (
                <label key={brand.name} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.name)}
                      onChange={() => onBrandChange(brand.name)}
                      className="w-[15px] h-[15px] rounded-sm border-2 border-[#6A7A99] checked:bg-black checked:border-black appearance-none cursor-pointer relative
                        after:content-[''] after:absolute after:hidden checked:after:block after:left-[4px] after:top-[1px] after:w-[4px] after:h-[7px] after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45"
                    />
                    <span className="font-roboto text-[14px] text-black group-hover:text-[#068CFF] transition">
                      {brand.name}
                    </span>
                  </div>
                  <span className="font-roboto text-[14px] text-[#4F547B]">
                    ({brand.count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
