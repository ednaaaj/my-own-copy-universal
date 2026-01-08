"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ApplianceModal } from "@/components/modals/ApplianceModal";

type ApplianceCardProps = {
  name: string;
  imageUrl: string;
  blackBgImageUrl?: string;
  description: string;
};

// Placeholder SVG as a data URL
const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%23f9f9f9' width='400' height='400'/%3E%3Cpath fill='%23e0e0e0' d='M160 120h80v160h-80z'/%3E%3Ccircle fill='%23e0e0e0' cx='200' cy='100' r='40'/%3E%3Ctext x='200' y='340' text-anchor='middle' fill='%23999' font-family='Arial' font-size='14'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";

export function ApplianceCard({ name, imageUrl, blackBgImageUrl, description }: ApplianceCardProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const [hasError, setHasError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(PLACEHOLDER_IMAGE);
    }
  };

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <article
        className="flex flex-col items-start gap-4 w-full max-w-[377px] cursor-pointer group"
        onClick={openModal}
      >
        {/* Title - Roboto 32px, weight 400, black, letter-spacing 0.02em */}
        <h3 className="font-roboto text-[24px] sm:text-[32px] font-normal leading-[1.2] tracking-[0.02em] text-black w-full group-hover:text-[#0090FF] transition-colors">
          {name}
        </h3>

        {/* Description - Work Sans 12px, weight 400, #272727, line-height 15px */}
        <p className="font-work-sans text-[12px] font-normal leading-[15px] text-[#272727] line-clamp-4">
          {description}
        </p>

        {/* Image Container - TRANSPARENT background, no border */}
        <div className="relative w-full aspect-square overflow-hidden">
          {hasError ? (
            // Fallback placeholder UI
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="mt-2 text-[12px]">Image Coming Soon</span>
            </div>
          ) : (
            <Image
              src={imgSrc}
              alt={name}
              fill
              className="object-contain"
              unoptimized
              onError={handleError}
            />
          )}
        </div>
      </article>

      {/* Modal for appliance details */}
      <ApplianceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        description={description}
        blackBgFolderPath={blackBgImageUrl}
      />
    </>
  );
}
