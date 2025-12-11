import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/cards/product-card";

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
    <main className="bg-white">
      <section className="relative w-full overflow-hidden rounded-b-[110px] bg-white pb-0 shadow-sm border-b border-[#e6e6e6]">
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

        <div className="relative z-10 px-4 pb-0 pt-8 sm:px-8 lg:px-12">
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

          <div className="mx-auto flex max-w-6xl flex-col items-center px-3 pt-16 text-center sm:pt-20">
            <p className="font-display text-[42px] font-normal tracking-[0.02em] text-[#313131] sm:text-[56px] lg:text-[70px] xl:text-[90px] xl:leading-[117px]">
              The New Standard In
            </p>
            <h1 className="font-display text-[64px] font-medium uppercase tracking-[0.02em] text-[#313131] sm:text-[82px] lg:text-[94px] xl:text-[100px] xl:leading-[70px]">
              Dental Lab Solutions
            </h1>
          </div>

          <div className="relative mx-auto mt-8 max-w-6xl">
            <div className="relative flex justify-center -mb-20 sm:-mb-24 lg:-mb-28">
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

      <section className="relative overflow-hidden bg-white px-4 py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute left-[-10px] top-[52%] w-[280px] -translate-y-1/2 opacity-80 sm:left-[10px] sm:w-[320px] lg:left-[40px] lg:w-[360px]">
          <Image
            src="/images/who-we-are/left-object-floating.png"
            alt=""
            width={436}
            height={512}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="pointer-events-none absolute right-[-10px] top-[52%] w-[280px] -translate-y-1/2 opacity-80 sm:right-[10px] sm:w-[320px] lg:right-[40px] lg:w-[360px]">
          <Image
            src="/images/who-we-are/right-object-floating.png"
            alt=""
            width={436}
            height={512}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <p className="font-karla text-[20px] font-medium uppercase leading-[20px] text-black">
            Who We Are
          </p>
          <p className="font-display text-[20px] font-normal leading-[32px] tracking-[0.5px] text-[#1f1f1f] sm:text-[20px]">
            Based in Southern California, Universal Orthodontic Lab is a
            full-service, custom orthodontic laboratory with decades of
            experience. Since 1985, we&apos;ve been dedicated to producing
            high-quality appliances, combining trusted craftsmanship with
            cutting-edge technology. Today, we&apos;re proud to offer advanced
            solutions through our state-of-the-art digital lab.
          </p>
          <Link
            href="#"
            className="relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#068cff] px-8 py-3 text-[14px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_10px_25px_rgba(6,140,255,0.35)] ring-1 ring-[#4db8ff]/70 transition hover:brightness-105"
          >
            <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/25 to-white/10" />
            <span className="relative text-white">Our Solutions</span>
            <span className="relative -mb-[1px] text-base leading-none text-white">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 pb-24 pt-10 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[8%] h-[320px] w-[320px] bg-[radial-gradient(circle_at_center,rgba(6,140,255,0.22)_0%,rgba(255,255,255,0)_65%)] blur-[2px]" />
          <div className="absolute left-[12%] bottom-[6%] h-[340px] w-[340px] bg-[radial-gradient(circle_at_center,rgba(6,140,255,0.18)_0%,rgba(255,255,255,0)_70%)]" />
          <div className="absolute right-[6%] top-[10%] h-[360px] w-[360px] bg-[radial-gradient(circle_at_center,rgba(6,140,255,0.18)_0%,rgba(255,255,255,0)_70%)]" />
          <div className="absolute right-[18%] bottom-[8%] h-[380px] w-[380px] bg-[radial-gradient(circle_at_center,rgba(6,140,255,0.22)_0%,rgba(255,255,255,0)_70%)] blur-[2px]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            title="Metal Worx"
            subtitle="Laser Sintered"
            accent="#000000"
            logo="/images/who-we-are/metal-worx-logo.png"
            image="/images/who-we-are/metal-worx-teeth-card.png"
            description={
              <>
                <strong>Metal Worx</strong> represents the next generation of
                orthodontic appliances, crafted using{" "}
                <strong>advanced laser sintering technology</strong>. This
                process ensures exceptional <strong>accuracy</strong>,{" "}
                <strong>strength</strong>, and a <strong>precise fit</strong>—
                delivering consistent, <strong>high-quality</strong> results for
                every patient.
              </>
            }
            buttonColor="bg-black"
            buttonShadow="shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
          />
          <ProductCard
            title="U Aligner"
            subtitle="Clear Solutions for Every Smile"
            accent="#F27128"
            logo="/images/who-we-are/aligner-logo.png"
            image="/images/who-we-are/aligner-teeth-logo-card.png"
            description={
              <>
                <strong>U-Aligner</strong> is designed to treat a wide range of
                orthodontic cases, including <strong>spacing</strong>,{" "}
                <strong>crowding</strong>, <strong>open bite</strong>,{" "}
                <strong>crossbite</strong>, <strong>underbite</strong>, and{" "}
                <strong>overbite</strong>. Backed by a skilled team of
                specialists, we’ve helped patients of <strong>all ages</strong>,
                from teens to kids to achieve <strong>confident</strong>,{" "}
                <strong>healthy smiles</strong> with a clear path to a brighter
                future.
              </>
            }
            buttonColor="bg-[#f27128]"
            buttonShadow="shadow-[0_10px_25px_rgba(242,113,40,0.35)]"
          />
          <ProductCard
            title="The Perio Max System"
            subtitle="Targeted Gum Health at Home"
            accent="#1F0D6C"
            logo="/images/who-we-are/perio-max-logo.png"
            image="/images/who-we-are/periomaxset-items-card.png"
            description={
              <>
                The Perio Max System offers an innovative approach to managing
                gum health by delivering medication below and between the gums.
                Using <strong>custom-fabricated trays</strong> and a specially
                formulated <strong>homecare gel</strong>, this system is
                designed to help reduce or prevent{" "}
                <strong>gingivitis</strong> and <strong>periodontitis</strong>—
                promoting healthier gums from the <strong>comfort of home</strong>.
              </>
            }
            buttonColor="bg-[#1f0d6c]"
            buttonShadow="shadow-[0_10px_25px_rgba(31,13,108,0.32)]"
          />
        </div>
      </section>
    </main>
  );
}
