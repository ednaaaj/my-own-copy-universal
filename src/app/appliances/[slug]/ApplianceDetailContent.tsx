"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { FooterLight } from "@/components/sections/FooterLight";

// Pattern 1: "Bleaching Tray (Upper)" -> "bleaching-tray_upper"
function getPatternOnePrefix(folderPath: string): string {
  const folderName = folderPath.split("/").pop() || "";
  const parenthesisMatch = folderName.match(/^(.+?)\s*\((.+?)\)$/);

  if (parenthesisMatch) {
    const beforeParens = parenthesisMatch[1]
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    const insideParens = parenthesisMatch[2]
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    return `${beforeParens}_${insideParens}`;
  }
  return folderName.toLowerCase().replace(/\s+/g, "-");
}

// Pattern 2: "Bleaching Tray (Upper)" -> "Bleaching-TrayUpper"
function getPatternTwoPrefix(folderPath: string): string {
  const folderName = folderPath.split("/").pop() || "";
  const parenthesisMatch = folderName.match(/^(.+?)\s*\((.+?)\)$/);

  if (parenthesisMatch) {
    const beforeParens = parenthesisMatch[1].trim().replace(/\s+/g, "-");
    const insideParens = parenthesisMatch[2].trim().replace(/\s+/g, "");
    return `${beforeParens}${insideParens}`;
  }
  return folderName.replace(/\s+/g, "-");
}

// Generate image paths with fallback patterns
function generateImagePaths(blackBgFolderPath: string) {
  const prefix1 = getPatternOnePrefix(blackBgFolderPath);
  const prefix2 = getPatternTwoPrefix(blackBgFolderPath);

  const pattern1Paths = [
    `${blackBgFolderPath}/${prefix1}_above.png`,
    `${blackBgFolderPath}/${prefix1}_front-845x600.png`,
    `${blackBgFolderPath}/${prefix1}_side.png`,
  ];

  const pattern2Paths = [
    `${blackBgFolderPath}/${prefix2}_1-copy.png`,
    `${blackBgFolderPath}/${prefix2}_2-copy.png`,
    `${blackBgFolderPath}/${prefix2}_3-copy.png`,
  ];

  return pattern1Paths.map((p, i) => `${p}|${pattern2Paths[i]}`);
}

// Helper component to try primary source, then fallback
function ImageWithFallback({
  primarySrc,
  fallbackSrc,
  alt,
}: {
  primarySrc: string;
  fallbackSrc: string;
  alt: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(primarySrc);
  const [hasError, setHasError] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(primarySrc);
    setHasError(false);
    setTriedFallback(false);
  }, [primarySrc]);

  const handleError = () => {
    if (!triedFallback && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setTriedFallback(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="relative aspect-square rounded-[30px] overflow-hidden bg-black border border-[#F3F3F3]">
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain p-4"
          onError={handleError}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 text-sm">No Image</span>
        </div>
      )}
    </div>
  );
}

type ApplianceDetailContentProps = {
  name: string;
  description: string;
  blackBgFolderPath: string;
};

export function ApplianceDetailContent({
  name,
  description,
  blackBgFolderPath,
}: ApplianceDetailContentProps) {
  const imagePaths = generateImagePaths(blackBgFolderPath);

  return (
    <main className="bg-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-center pt-[31px] pb-8">
        <Navbar />
      </header>

      {/* Content */}
      <section className="max-w-[1556px] mx-auto px-4 py-8 sm:py-16">
        {/* Title */}
        <h1 className="font-roboto text-[48px] sm:text-[72px] lg:text-[100px] font-normal leading-[1.17] tracking-[-0.02em] text-black text-center mb-6">
          {name}
        </h1>

        {/* Description */}
        <p className="max-w-[1147px] mx-auto font-work-sans text-[16px] sm:text-[20px] font-normal leading-[1.5] text-[#272727] text-center mb-12 sm:mb-16">
          {description}
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1600px] mx-auto mb-12">
          {imagePaths.map((imgPaths, index) => {
            const [primaryPath, fallbackPath] = imgPaths.split("|");
            return (
              <ImageWithFallback
                key={index}
                primarySrc={primaryPath}
                fallbackSrc={fallbackPath}
                alt={`${name} view ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Download RX Button */}
          <button className="flex items-center justify-center gap-3 w-[260px] h-[66px] bg-[#068CFF] hover:bg-[#0078E5] text-white rounded-full font-work-sans font-medium text-[16px] uppercase transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download RX
          </button>

          {/* Ask a Question Button */}
          <button className="flex items-center justify-center gap-3 w-[260px] h-[66px] bg-[#068CFF] hover:bg-[#0078E5] text-white rounded-full font-work-sans font-medium text-[16px] uppercase transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Ask a Question
          </button>

          {/* Contact Us Button */}
          <button className="flex items-center justify-center gap-3 w-[260px] h-[66px] bg-[#068CFF] hover:bg-[#0078E5] text-white rounded-full font-work-sans font-medium text-[16px] uppercase transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Us
          </button>
        </div>
      </section>

      {/* Light Footer */}
      <FooterLight />
    </main>
  );
}
