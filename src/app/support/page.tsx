import Image from "next/image";
import Link from "next/link";
import { ScrollSection } from "@/components/layout/scroll-section";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Support" },
  { href: "#", label: "Digital Solutions" },
  { href: "#", label: "Appliances" },
  { href: "#", label: "Laser Sintered Appliances" },
  { href: "#", label: "Marpe" },
];

export default function SupportPage() {
  return (
    <main className="bg-white">
      <ScrollSection
        className="relative isolate w-full overflow-hidden rounded-b-[110px] border-b border-[#e6e6e6] bg-white shadow-sm"
        intensity={0.85}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/support-page/hero/support-hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/12" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/18 to-white/28" />
        </div>

        <div className="relative z-10 px-4 pb-16 pt-8 sm:px-8 lg:px-12 min-h-[576px] flex flex-col">
          <header className="flex justify-center">
            <div className="flex w-full max-w-[1686px] items-center gap-6 overflow-hidden rounded-[60px] border border-white/60 bg-white/90 px-6 py-3 shadow-[0_6px_9px_4px_rgba(76,76,76,0.2)] backdrop-blur">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/main/navbar/Universal-logo-navbar.png"
                  alt="Universal Orthodontic Lab"
                  width={330}
                  height={99}
                  className="h-[72px] w-auto object-contain"
                  priority
                />
              </Link>
              <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[14px] font-medium uppercase tracking-[0.02em] text-black/40 transition hover:text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="ml-auto flex items-center gap-3">
                <Link
                  href="#"
                  className="relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_8px_20px_rgba(255,110,30,0.4)] ring-1 ring-[#ffb347]/60 transition hover:brightness-105"
                  style={{
                    background:
                      "linear-gradient(120deg, #ff3c00 0%, #ff7a1a 45%, #ffb73c 100%)",
                  }}
                >
                  <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/35 to-white/10" />
                  <Image
                    src="/images/main/navbar/ualigner-logo.png"
                    alt="Aligner Portal"
                    width={26}
                    height={25}
                    className="h-[20px] w-[20px] object-contain"
                  />
                  <span className="relative z-10 text-white">Aligner Portal</span>
                  <span className="relative z-10 -mb-[2px] text-lg leading-none text-white">
                    →
                  </span>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_8px_20px_rgba(6,140,255,0.35)] ring-1 ring-[#4db8ff]/60 transition hover:brightness-105"
                  style={{
                    background:
                      "linear-gradient(130deg, #0b1c8b 0%, #1f63d1 45%, #2bc5ff 100%)",
                  }}
                >
                  <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/35 to-white/10" />
                  <span className="relative z-10 text-white">Rio Portal</span>
                  <span className="relative z-10 -mb-[2px] text-lg leading-none text-white">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </header>

          <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-center gap-6 px-3 pt-10 pb-4 text-center sm:min-h-[500px] sm:pt-14 lg:min-h-[540px] lg:pt-20">
            <h1 className="font-display text-[52px] font-normal leading-[1] text-black sm:text-[68px] lg:text-[96px]">
              Support
            </h1>
            <p className="max-w-3xl text-[18px] leading-[28px] text-[#272727] sm:text-[20px] sm:leading-[30px]">
              Need help with something? Check out our most frequently asked questions.
            </p>
            <form className="mt-2 flex w-full max-w-[540px] items-center">
              <div className="relative w-full">
                <span className="pointer-events-none absolute left-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#505050]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="5.25"
                      stroke="#505050"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 15l-3.5-3.5"
                      stroke="#505050"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search..."
                  className="h-[56px] w-full rounded-[16px] border border-[#505050] bg-white/80 px-4 pl-12 text-[16px] font-medium text-[#505050] shadow-sm outline-none transition focus:border-[#068cff] focus:ring-2 focus:ring-[#068cff]/30"
                />
              </div>
            </form>
          </div>
        </div>
      </ScrollSection>
    </main>
  );
}
