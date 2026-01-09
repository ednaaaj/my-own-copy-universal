'use client';

import { ReactNode, useEffect, useRef } from "react";

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  as?: React.ElementType;
};

export function ScrollSection({
  children,
  className = "",
  intensity = 1,
  as = "section",
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let frame: number | null = null;

    const updatePosition = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      const centerOffset =
        rect.top + rect.height / 2 - viewportHeight / 2;
      const normalized = Math.max(
        -1,
        Math.min(1, centerOffset / (viewportHeight * 0.6)),
      );

      const shift = normalized * 48 * intensity;

      element.style.setProperty("--section-shift", `${shift}px`);
      // Removed opacity fade - content stays at full opacity
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updatePosition();
        frame = null;
      });
    };

    updatePosition();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePosition);
    };
  }, [intensity]);

  const Tag = as;

  return (
    <Tag
      ref={sectionRef}
      className={`scroll-parallax-section ${className}`}
      style={{
        transform: "translateY(var(--section-shift, 0px))",
        // Removed opacity - content always at full visibility
      }}
    >
      {children}
    </Tag>
  );
}
