"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";

type ApplianceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  description: string;
  blackBgFolderPath?: string;
};

// Pattern 1: "Bleaching Tray (Upper)" -> "bleaching-tray_upper"
function getPatternOnPrefix(folderPath: string): string {
  const folderName = folderPath.split('/').pop() || '';
  const parenthesisMatch = folderName.match(/^(.+?)\s*\((.+?)\)$/);

  if (parenthesisMatch) {
    const beforeParens = parenthesisMatch[1].trim().toLowerCase().replace(/\s+/g, '-');
    const insideParens = parenthesisMatch[2].trim().toLowerCase().replace(/\s+/g, '-');
    return `${beforeParens}_${insideParens}`;
  }
  return folderName.toLowerCase().replace(/\s+/g, '-');
}

// Pattern 2: "Bleaching Tray (Upper)" -> "Bleaching-TrayUpper"
function getPatternTwoPrefix(folderPath: string): string {
  const folderName = folderPath.split('/').pop() || '';
  const parenthesisMatch = folderName.match(/^(.+?)\s*\((.+?)\)$/);

  if (parenthesisMatch) {
    // "Bleaching Tray" -> "Bleaching-Tray"
    const beforeParens = parenthesisMatch[1].trim().replace(/\s+/g, '-');
    // "Upper" -> "Upper" (keep capitalization)
    const insideParens = parenthesisMatch[2].trim().replace(/\s+/g, '');
    return `${beforeParens}${insideParens}`;
  }
  return folderName.replace(/\s+/g, '-');
}

export function ApplianceModal({
  isOpen,
  onClose,
  name,
  description,
  blackBgFolderPath,
}: ApplianceModalProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Generate image paths based on folder path - try multiple naming patterns
  useEffect(() => {
    if (blackBgFolderPath && isOpen) {
      const prefix1 = getPatternOnPrefix(blackBgFolderPath);
      const prefix2 = getPatternTwoPrefix(blackBgFolderPath);

      // Try Pattern 1: lowercase_suffix (above, front, side)
      const pattern1Paths = [
        `${blackBgFolderPath}/${prefix1}_above.png`,
        `${blackBgFolderPath}/${prefix1}_front-845x600.png`,
        `${blackBgFolderPath}/${prefix1}_side.png`,
      ];

      // Try Pattern 2: MixedCase_number (1-copy, 2-copy, 3-copy)
      const pattern2Paths = [
        `${blackBgFolderPath}/${prefix2}_1-copy.png`,
        `${blackBgFolderPath}/${prefix2}_2-copy.png`,
        `${blackBgFolderPath}/${prefix2}_3-copy.png`,
      ];

      // We'll try pattern 1 first, then fall back to pattern 2
      // Store both patterns - we'll attempt to load pattern1 and on error try pattern2
      setLoadedImages([
        ...pattern1Paths.map((p, i) => `${p}|${pattern2Paths[i]}`), // combine with pipe separator
      ]);
      setImageErrors({});
    }
  }, [blackBgFolderPath, isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-[1200px] max-h-[90vh] overflow-y-auto bg-white rounded-[20px] p-8 sm:p-12">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Title */}
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[72px] font-normal leading-[1.1] tracking-[-0.02em] text-black mb-4 sm:mb-6">
            {name}
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-[14px] sm:text-[16px] leading-[1.6] text-[#272727]">
            {description}
          </p>
        </div>

        {/* Image Gallery - 3 images with black background */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {loadedImages.map((imgPaths, index) => {
            const [primaryPath, fallbackPath] = imgPaths.split('|');
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Download RX Button */}
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0090FF] hover:bg-[#007EE5] text-white rounded-full font-medium text-[14px] transition-colors min-w-[160px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD RX
          </button>

          {/* Ask a Question Button */}
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0090FF] hover:bg-[#007EE5] text-white rounded-full font-medium text-[14px] transition-colors min-w-[160px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            ASK A QUESTION
          </button>

          {/* Contact Us Button */}
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0090FF] hover:bg-[#007EE5] text-white rounded-full font-medium text-[14px] transition-colors min-w-[160px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper component to try primary source, then fallback
function ImageWithFallback({ primarySrc, fallbackSrc, alt }: { primarySrc: string; fallbackSrc: string; alt: string }) {
  const [currentSrc, setCurrentSrc] = useState(primarySrc);
  const [hasError, setHasError] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  // Reset when primarySrc changes
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
    <div className="relative aspect-square rounded-[20px] overflow-hidden bg-black">
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
