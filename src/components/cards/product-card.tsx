import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ProductCardProps = {
  title: string;
  subtitle: string;
  accent: string;
  logo: string;
  image: string;
  description: ReactNode;
  buttonColor: string;
  imageClassName?: string;
};

export function ProductCard({
  title,
  subtitle,
  accent,
  logo,
  image,
  description,
  buttonColor,
  imageClassName,
}: ProductCardProps) {
  return (
    <article className="flex w-full max-w-[400px] flex-col">
      {/* Card container */}
      <div className="flex flex-col">
        {/* Top section - Logo */}
        <div className="flex h-[54px] items-center rounded-t-[15px] bg-white/80 px-[30px] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
          <Image
            src={logo}
            alt={title}
            width={290}
            height={35}
            className="h-auto max-h-[35px] w-auto max-w-[290px] object-contain"
          />
        </div>

        {/* Middle section - Product Image */}
        <div
          className="mt-[6px] flex h-[400px] w-full items-center justify-center shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(6, 140, 255, 0.12) 0%, rgba(255, 255, 255, 0.8) 65%)",
          }}
        >
          <Image
            src={image}
            alt={title}
            width={371}
            height={300}
            className={`h-auto max-h-[300px] w-auto max-w-[371px] object-contain ${imageClassName ?? ""}`}
          />
        </div>

        {/* Bottom section - Description */}
        <div className="mt-[6px] flex h-[460px] flex-col rounded-b-[20px] bg-white/80 px-[30px] pb-[24px] pt-[22px] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
          {/* Subtitle with icon and colored line */}
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-2">
              <Image
                src="/images/who-we-are/black-diamon-logo.png"
                alt=""
                width={12}
                height={12}
                className="h-3 w-3 object-contain"
                style={{ filter: accent === "#000000" ? "none" : undefined }}
              />
              <span
                className="text-[18px] font-medium uppercase leading-[20px]"
                style={{ fontFamily: "Karla, sans-serif", color: "#1F1F1F" }}
              >
                {subtitle}
              </span>
            </div>
            {/* Colored line */}
            <div
              className="h-[2px] w-[356px]"
              style={{ background: accent }}
            />
          </div>

          {/* Title */}
          <h3
            className="mt-[12px] text-[32px] font-medium leading-[64px] text-[#1F1F1F]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="mt-[2px] mb-6 text-[18px] leading-[28px] text-black"
            style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 400 }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Button - Outside the card */}
      <div className="mt-[28px] flex items-center justify-center">
        <Link
          href="#"
          className="flex h-[60px] w-[240px] items-center justify-center gap-2 rounded-full text-[14px] font-semibold uppercase tracking-[0.02em] text-white transition hover:brightness-105"
          style={{
            background: buttonColor,
            fontFamily: "Work Sans, sans-serif",
          }}
        >
          <span className="text-white">Learn More</span>
          <span className="-mb-[1px] text-base leading-none text-white">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
