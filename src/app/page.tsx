import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Support" },
  { href: "#", label: "Digital Solutions" },
  { href: "#", label: "Appliances" },
  { href: "#", label: "Laser Sintered Appliances" },
  { href: "#", label: "Marpe" },
];

export default function HomePage() {
  return (
    <main className="bg-[#ededed]">
      <section className="relative w-full overflow-hidden rounded-b-[110px] bg-white pb-0 shadow-sm">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/images/hero/hero-bg-video.mp4"
          />
          <div className="absolute inset-0 bg-white/78 mix-blend-lighten" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/88" />
        </div>

        <div className="relative z-10 px-4 pb-0 pt-6 sm:px-8 lg:px-12">
          <header className="flex justify-center">
            <div className="flex w-full max-w-[1686px] items-center gap-6 overflow-hidden rounded-[60px] border border-white/60 bg-white/90 px-6 py-3 shadow-[0_6px_9px_4px_rgba(76,76,76,0.2)] backdrop-blur">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/navbar/Universal-logo-navbar.png"
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
                    src="/images/navbar/ualigner-logo.png"
                    alt="Aligner Portal"
                    width={26}
                    height={25}
                    className="h-[20px] w-[20px] object-contain"
                  />
                  <span className="relative text-white">Aligner Portal</span>
                  <span className="relative -mb-[2px] text-lg leading-none text-white">
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
                  <span className="relative text-white">Rio Portal</span>
                  <span className="relative -mb-[2px] text-lg leading-none text-white">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </header>

          <div className="mx-auto flex max-w-6xl flex-col items-center px-3 pt-16 text-center sm:pt-20">
            <p className="font-display text-[42px] font-normal tracking-[0.02em] text-[#313131] sm:text-[56px] lg:text-[70px] xl:text-[90px] xl:leading-[117px]">
              The New Standard In
            </p>
            <h1 className="font-display text-[64px] font-medium uppercase tracking-[0.02em] text-[#313131] sm:text-[82px] lg:text-[94px] xl:text-[100px] xl:leading-[70px]">
              Dental Lab Solutions
            </h1>
          </div>

          <div className="relative mx-auto mt-8 max-w-5xl">
            <div className="relative flex justify-center -mb-6">
              <Image
                src="/images/hero/hero-teeth-center.png"
                alt="Dental appliances"
                width={1056}
                height={730}
                className="h-auto w-full max-w-[1056px] object-contain"
                priority
              />
              <Image
                src="/images/hero/hero-top-left-plus-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="absolute left-[12%] top-[28%] h-14 w-14 object-contain sm:left-[16%] sm:top-[26%]"
                priority
              />
              <Image
                src="/images/hero/hero-top-right-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="absolute right-[14%] top-[30%] h-14 w-14 object-contain sm:right-[18%] sm:top-[28%]"
                priority
              />
              <Image
                src="/images/hero/hero-bottom-left-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="absolute left-[8%] bottom-[8%] h-14 w-14 object-contain sm:left-[12%]"
                priority
              />
              <Image
                src="/images/hero/hero-bottom-right-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="absolute right-[10%] bottom-[10%] h-14 w-14 object-contain sm:right-[14%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
