import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/cards/product-card";
import { OurProducts } from "@/components/sections/our-products";
import { OurDigitalSolutions } from "@/components/sections/our-digital-solutions";
import { ClientsSay } from "@/components/sections/clients-say";
import { Footer } from "@/components/sections/footer";
import { ScrollSection } from "@/components/layout/scroll-section";



export default function HomePage() {
  return (
    <main className="bg-white">
      <ScrollSection
        className="relative w-full overflow-hidden rounded-b-[36px] sm:rounded-b-[60px] lg:rounded-b-[110px] bg-white pb-0 shadow-sm border-b border-[#e6e6e6]"
        intensity={0.85}
      >
        <div className="absolute inset-0 parallax-layer" data-speed="slow">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/images/main/hero/hero-bg-video.mp4"
          />
          <div className="absolute inset-0 bg-white/78 mix-blend-lighten" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/88" />
        </div>

        <div className="relative z-10 px-4 pb-0 pt-8 sm:px-8 lg:px-12">
          <header className="flex justify-center absolute top-[31px] left-0 w-full z-50">
             <Navbar />
          </header>

          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-10 pt-32 sm:pt-44 lg:pt-52 text-center gap-2 sm:gap-4">
            <p className="font-display text-[24px] sm:text-[42px] lg:text-[70px] xl:text-[90px] font-normal tracking-[0.02em] text-[#313131] leading-[28px] sm:leading-normal xl:leading-[117px] mb-2 sm:mb-8 lg:mb-12 xl:mb-16">
              The New Standard In
            </p>
            <h1 className="font-display text-[29px] sm:text-[64px] lg:text-[100px] font-medium uppercase tracking-[0.02em] text-[#313131] leading-[70px] sm:leading-normal xl:leading-[70px]">
              Dental Lab
            </h1>
            <h1 className="font-display text-[29px] sm:text-[64px] lg:text-[100px] font-medium uppercase tracking-[0.02em] text-[#313131] leading-[70px] sm:leading-normal xl:leading-[70px]">Solutions</h1>
          </div>

          <div className="relative mx-auto mt-8 max-w-6xl">
            <div className="relative flex justify-center -mb-20 sm:-mb-24 lg:-mb-28">
              <Image
                src="/images/main/hero/hero-teeth-center.png"
                alt="Dental appliances"
                width={1056}
                height={730}
                className="h-auto w-full max-w-[1056px] object-contain"
                priority
              />
              <Image
                src="/images/main/hero/hero-top-left-plus-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="parallax-layer absolute left-[5%] top-[28%] h-8 w-8 sm:h-14 sm:w-14 object-contain sm:left-[16%] sm:top-[26%]"
                data-speed="fast"
                priority
              />
              <Image
                src="/images/main/hero/hero-top-right-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="parallax-layer absolute right-[5%] top-[30%] h-8 w-8 sm:h-14 sm:w-14 object-contain sm:right-[18%] sm:top-[28%]"
                data-speed="fast"
                priority
              />
              <Image
                src="/images/main/hero/hero-bottom-left-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="parallax-layer absolute left-[2%] bottom-[8%] h-6 w-6 sm:h-14 sm:w-14 object-contain sm:left-[12%]"
                data-speed="slow"
                priority
              />
              <Image
                src="/images/main/hero/hero-bottom-right-blue-icon.png"
                alt=""
                width={56}
                height={56}
                className="parallax-layer absolute right-[2%] bottom-[10%] h-6 w-6 sm:h-14 sm:w-14 object-contain sm:right-[14%]"
                data-speed="slow"
                priority
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="relative overflow-hidden bg-white px-4 py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute left-[-10px] top-[52%] w-[180px] -translate-y-1/2 opacity-60 hidden sm:block sm:w-[280px] lg:left-[40px] lg:w-[360px]">
          <Image
            src="/images/main/who-we-are/left-object-floating.png"
            alt=""
            width={436}
            height={512}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="pointer-events-none absolute right-[-10px] top-[52%] w-[180px] -translate-y-1/2 opacity-60 hidden sm:block sm:w-[280px] lg:right-[40px] lg:w-[360px]">
          <Image
            src="/images/main/who-we-are/right-object-floating.png"
            alt=""
            width={436}
            height={512}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-4 sm:gap-6 text-center px-2 sm:px-0">
          <p className="font-karla text-[18px] sm:text-[20px] font-medium uppercase leading-[20px] text-black">
            Who We Are
          </p>
          <p className="font-display text-[16px] sm:text-[20px] font-normal leading-[30px] tracking-[0.5px] text-[#1f1f1f]">
            Based in Southern California, Universal Orthodontic Lab is a
            full-service, custom orthodontic laboratory with decades of
            experience. Since 1985, we&apos;ve been dedicated to producing
            high-quality appliances, combining trusted craftsmanship with
            cutting-edge technology. Today, we&apos;re proud to offer advanced
            solutions through our state-of-the-art digital lab.
          </p>
          <Link
            href="/digital-solutions"
            className="relative mt-6 inline-flex h-[66px] w-[260px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#068cff] text-[14px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_10px_25px_rgba(6,140,255,0.35)] transition hover:brightness-105"
          >
            <span className="font-work-sans text-white">Our Solutions</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </ScrollSection>

      <ScrollSection className="relative overflow-hidden bg-white px-4 pb-24 pt-10 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-16">
        {/* Background gradient ellipses - closer together with overlap */}
        <div
          className="pointer-events-none absolute inset-0 parallax-layer"
          data-speed="slow"
        >
          {/* Left bottom ellipse */}
          <div
            className="absolute left-[80px] top-[180px] h-[520px] w-[520px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          {/* Left middle ellipse */}
          <div
            className="absolute left-[120px] top-[480px] h-[580px] w-[580px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          {/* Center bottom ellipse */}
          <div
            className="absolute left-[calc(50%-320px)] top-[460px] h-[640px] w-[640px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          {/* Right top ellipse */}
          <div
            className="absolute right-[60px] top-[20px] h-[720px] w-[720px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.38) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          {/* Center top ellipse */}
          <div
            className="absolute right-[calc(50%-280px)] top-[80px] h-[680px] w-[680px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          {/* Center bottom right ellipse */}
          <div
            className="absolute right-[calc(50%-300px)] top-[500px] h-[680px] w-[680px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(6, 140, 255, 0.33) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-[1326px] flex-col lg:flex-row flex-wrap items-center lg:items-start justify-center gap-6 lg:gap-[31px] px-4 sm:px-6">
            <ProductCard
            title="Metal Worx"
            subtitle="Laser Sintered"
            accent="#000000"
            logo="/images/main/who-we-are/metal-worx-logo.png"
            image="/images/main/who-we-are/metal-worx-teeth-card.png"
            description={
              <>
                <strong>Metal Worx</strong> represents the next generation of
                orthodontic appliances, crafted using{" "}
                <strong>advanced laser sintering technology.</strong> This
                process ensures exceptional{" "}
                <strong>accuracy, strength, and a precise fit</strong>—delivering
                consistent, <strong>high-quality</strong> results for every
                patient.
              </>
            }
            buttonColor="#000000"
          />
          <ProductCard
            title="U Aligner"
            subtitle="Clear Solutions for Every Smile"
            accent="#F27128"
            logo="/images/main/who-we-are/aligner-logo.png"
            image="/images/main/who-we-are/aligner-teeth-logo-card.png"
            description={
              <>
                <strong>U-Aligner</strong> is designed to treat a wide range of
                orthodontic cases, including{" "}
                <strong>
                  spacing, crowding, open bite, crossbite, underbite, and
                  overbite.
                </strong>{" "}
                Backed by a skilled team of specialists, we&apos;ve helped patients of{" "}
                <strong>all ages,</strong> from teens to kids to achieve{" "}
                <strong>confident, healthy smiles</strong> with a clear path to a
                brighter future.
              </>
            }
            buttonColor="#F27128"
          />
          <ProductCard
            title="The Perio Max System"
            subtitle="Targeted Gum Health at Home"
            accent="#1F0D6C"
            logo="/images/main/who-we-are/perio-max-logo.png"
            image="/images/main/who-we-are/periomaxset-items-card.png"
            description={
              <>
                <strong>The Perio Max System</strong> offers an innovative
                approach to managing gum health by delivering medication below and
                between the gums. Using{" "}
                <strong>custom-fabricated trays</strong> and a specially
                formulated <strong>homecare gel,</strong> this system is designed
                to help reduce or prevent{" "}
                <strong>gingivitis and periodontitis</strong>—promoting healthier
                gums from the <strong>comfort of home.</strong>
              </>
            }
            buttonColor="#1F0D6C"
            imageClassName="max-h-[266px]"
          />
        </div>
      </ScrollSection>

      <OurProducts />
      <OurDigitalSolutions />
      <ClientsSay />
      <Footer />
    </main>
  );
}
