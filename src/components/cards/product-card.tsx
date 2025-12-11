import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  subtitle: string;
  accent: string;
  logo: string;
  image: string;
  description: React.ReactNode;
  buttonColor: string;
  buttonShadow: string;
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
  buttonShadow,
  imageClassName,
}: ProductCardProps) {
  return (
    <article className="relative flex w-full max-w-[400px] flex-col gap-3">
      <div className="h-[54px] rounded-t-[15px] bg-white/80 px-5 py-3 shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
        <Image
          src={logo}
          alt={title}
          width={200}
          height={40}
          className="h-[28px] max-w-[200px] w-auto object-contain"
        />
      </div>

      <div className="flex h-[310px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(6,140,255,0.12)_0%,rgba(255,255,255,1)_65%)] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
        <Image
          src={image}
          alt={title}
          width={360}
          height={260}
          className={`max-h-[220px] w-auto object-contain ${imageClassName ?? ""}`}
        />
      </div>

      <div className="flex flex-col gap-0 rounded-b-[20px] bg-[radial-gradient(circle_at_20%_80%,rgba(6,140,255,0.08)_0%,rgba(255,255,255,1)_55%),radial-gradient(circle_at_80%_90%,rgba(6,140,255,0.07)_0%,rgba(255,255,255,1)_60%)] shadow-[0_16px_16px_-8px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]">
        <div className="flex items-center gap-2 px-6 py-3">
          <Image
            src="/images/who-we-are/black-diamon-logo.png"
            alt=""
            width={12}
            height={12}
            className="h-3 w-3 object-contain"
          />
          <span
            className="font-karla text-[14px] font-medium leading-[20px] uppercase"
            style={{ color: accent }}
          >
            {subtitle}
          </span>
        </div>
        <div
          className="mt-1 h-[2px] w-[85%] self-center"
          style={{ background: accent }}
        />
        <div className="flex flex-col gap-3 px-6 py-6 text-[#1f1f1f]">
          <div className="space-y-2">
            <h3 className="font-display text-[22px] font-medium leading-[28px] text-[#1f1f1f]">
              {title}
            </h3>
            <div className="text-[14px] font-normal leading-[22px]">{description}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-2 pb-6 pt-3">
        <Link
          href="#"
          className={`relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white ${buttonColor} ${buttonShadow} transition hover:brightness-105`}
        >
          <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/20 to-white/5" />
          <span className="relative text-white">Learn More</span>
          <span className="relative -mb-[1px] text-base leading-none text-white">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
