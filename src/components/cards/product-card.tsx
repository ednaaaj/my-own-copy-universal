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
    <article className="flex w-full max-w-full sm:max-w-[400px] flex-col">
      {/* Card container */}
      <div className="flex flex-col">
        {/* Top section - Logo */}
        <div className="flex h-[54px] items-center rounded-t-[15px] bg-white/80 px-4 sm:px-[30px] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
          <Image
            src={logo}
            alt={title}
            width={290}
            height={35}
            className="h-auto max-h-[35px] w-auto max-w-full object-contain"
          />
        </div>

        {/* Middle section - Product Image */}
        <div
          className="flex h-[300px] sm:h-[400px] w-full items-center justify-center bg-white/80 shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]"
        >
          <Image
            src={image}
            alt={title}
            width={371}
            height={300}
            className={`h-auto max-h-[220px] sm:max-h-[300px] w-auto max-w-[85%] sm:max-w-[371px] object-contain ${imageClassName ?? ""}`}
          />
        </div>

        {/* Bottom section - Description */}
        <div className="flex min-h-[380px] sm:h-[460px] flex-col rounded-b-[20px] bg-white/80 px-5 sm:px-[30px] pb-[24px] pt-[22px] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
          {/* Subtitle with icon and colored line */}
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
                  fill={accent}
                />
              </svg>
              <span
                className="font-karla text-[16px] sm:text-[18px] font-medium uppercase leading-[20px] text-[#1F1F1F]"
              >
                {subtitle}
              </span>
            </div>
            {/* Colored line */}
            <div
              className="h-[2px] w-full max-w-[356px]"
              style={{ background: accent }}
            />
          </div>

          {/* Title */}
          <h3
            className="mt-[12px] font-roboto text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[1.3] sm:leading-[1.4] text-[#1F1F1F] whitespace-nowrap"
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="mt-[2px] mb-6 font-work-sans text-[16px] sm:text-[18px] font-medium leading-[26px] sm:leading-[28px] text-black"
          >
            {description}
          </p>
        </div>
      </div>

      {/* Button - Outside the card */}
      <div className="mt-[28px] flex items-center justify-center">
        <Link
          href="#"
          className="flex h-[60px] w-[240px] items-center justify-center gap-2 rounded-full font-work-sans text-[14px] font-semibold uppercase tracking-[0.02em] text-white transition hover:brightness-105"
          style={{
            background: buttonColor,
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
