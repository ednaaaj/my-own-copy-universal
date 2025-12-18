'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollSection } from "@/components/layout/scroll-section";
import { TextField } from "@/components/ui/TextField";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { FilterPills } from "@/components/ui/FilterPills";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Support" },
  { href: "#", label: "Digital Solutions" },
  { href: "#", label: "Appliances" },
  { href: "#", label: "Laser Sintered Appliances" },
  { href: "#", label: "Marpe" },
];

const stars = Array.from({ length: 5 });

const fields = {
  hearAbout: [
    "Google",
    "Colleague referral",
    "Conference",
    "Social media",
    "Mailer",
    "Other",
  ],
  specialties: ["Orthodontics", "Pediatrics", "General Dentistry", "Oral Surgery"],
  catalog: ["Catalog", "Starter Kit", "Both", "No, thank you"],

};

const documents = [
  {
    title: "Credit Card Authorization Form",
    image: "/images/support-page/downloadable-forms/authorization-form.png",
  },
  {
    title: "MSE Rx",
    image: "/images/support-page/downloadable-forms/mse-rx.png",
  },
  {
    title: "Indirect Bonding Prescription Sheet",
    image: "/images/support-page/downloadable-forms/prescription-sheet.png",
  },
  {
    title: "Prescription Sheet",
    image: "/images/support-page/downloadable-forms/prescription-sheet.png",
  },
  {
    title: "Return Authorization Form",
    image: "/images/support-page/downloadable-forms/return-authorization-form.png",
  },
  {
    title: "New Customer Form",
    image: "/images/support-page/downloadable-forms/new-customer-form.png",
  },
  {
    title: "New Customer Form",
    image: "/images/support-page/downloadable-forms/new-customer-form.png",
  },
];

const faqItems: AccordionItem[] = [
  {
    id: "address",
    category: "General",
    question: "What address should I use to send a case to Universal Orthodontic Lab?",
    answer: (
      <>
        Please send your cases to 11917 Front Street, Norwalk, CA 90650. For your convenience, we provide packaging and shipping materials to you at no cost. To request supplies, please call customer support team at <a href="tel:877-771-0770" className="text-[#068cff] underline">877-771-0770</a> or complete printable PDF form on our web page.
      </>
    ),
  },
  {
    id: "digital-prescription",
    category: "Digital Case",
    question: "What is the Universal Digital Prescription?",
    answer: (
      <>
         Universal Orthodontic Lab provides Digital Prescription Application. It is web base application to submit, manage, and track all your orthodontic lab prescriptions and it is to create patient appliances. Feel free to contact us at <a href="tel:877-771-0770" className="text-[#068cff] underline">877-771-0770</a> or click here for more information.
      </>
    ),
  },
  {
    id: "stl-file",
    category: "Digital Case",
    question: "What is a STL file?",
    answer: "STL is a file format native to the stereolithography CAD software created by 3D Systems.",
  },
  {
    id: "locations",
    category: "Account",
    question: "Can I receive my case at different locations?",
    answer: "Yes, we can ship cases to different locations. Please ensure the address is provided clearly on the prescription or contact our support team.",
  },
  {
    id: "send-digital",
    category: "Digital Case",
    question: "How can I send you a digital case?",
    answer: "You can send digital cases through our Rio Portal or by uploading STL files directly via our website.",
  },
  {
    id: "prescription-sheet",
    category: "General",
    question: "Where can I get your prescription sheet?",
    answer: "You can download our prescription sheets from the Document Center on this page.",
  },
  {
    id: "shipping-boxes",
    category: "General",
    question: "Do you provide shipping boxes and label?",
    answer: "Yes, we provide shipping boxes and labels at no cost. Please contact us to request supplies.",
  },
  {
    id: "price-lists",
    category: "Account",
    question: "Do you have price lists?",
    answer: "Yes, please contact us to request our current price list.",
  },
  {
    id: "product-list",
    category: "Appliance",
    question: "Do you have product list?",
    answer: "Yes, our full product list is available in the catalog which you can request via the Become a Customer form.",
  },
  {
    id: "customized-appliance",
    category: "Appliance",
    question: "Do you provide customized appliance?",
    answer: "Yes, Universal Orthodontic Lab, Inc. is a full-service custom orthodontic laboratory. We offer several types of active and passive retainer designs. We take pride in the quality of our wire bending and acrylic finishing. We offer a full selection of acrylic colors and designs. Please be sure to reference our Color Guide and the Acrylic Decal Designs when ordering retainers. We look forward to receiving a case from your practice.",
  },
];

const faqCategories = ["All", "Account", "Appliance", "Digital Case", "General"];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = activeCategory === "All"
    ? faqItems
    : faqItems.filter((item) => item.category === activeCategory);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 4000);
  };

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

      <ScrollSection className="bg-white px-4 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-12">
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.08em] text-black/70">
            <Image
              src="/images/support-page/become-a-customer/become-a-customer-black-diamon.png"
              alt=""
              width={16}
              height={16}
              className="h-3.5 w-3.5 object-contain"
            />
            <span>Become a customer</span>
          </div>

          <div className="overflow-x-auto">
            <div className="mx-auto flex min-w-[1150px] max-w-[1320px] flex-row items-start justify-between gap-10">
              <div className="flex w-[460px] shrink-0 flex-col gap-6">
                <div className="space-y-3">
                  <h2 className="font-display text-[42px] font-normal leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                    New Customer Questionnaire
                  </h2>
                  <p className="max-w-2xl text-[18px] leading-[30px] text-[#272727]">
                    Please fill out the form. Once you submit the form, our friendly
                    representative will give you a follow up call.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[20px] bg-black shadow-[0_16px_28px_rgba(0,0,0,0.14)]">
                  <Image
                    src="/images/support-page/become-a-customer/become-a-customer-doctor.png"
                    alt="Smiling dentist"
                    width={500}
                    height={900}
                    className="h-full w-full object-cover"
                    priority
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 text-white sm:p-7">
                    <div className="flex items-center gap-2">
                      {stars.map((_, idx) => (
                        <Image
                          key={idx}
                          src="/images/support-page/become-a-customer/become-a-customer-star.png"
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      ))}
                    </div>
                    <p className="text-[28px] leading-[36px] font-normal sm:text-[30px] sm:leading-[40px]">
                      &quot;Universal Orthodontic Lab delivers reliable, high-quality
                      appliances with seamless service and modern precision.&quot;
                    </p>
                    <div className="text-[16px] leading-[22px] font-semibold sm:text-[18px] sm:leading-[24px]">
                      JANE DOE
                      <span className="block text-white/80 font-medium">
                        Orthodontist
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex min-w-[640px] max-w-[720px] flex-1 flex-col gap-6 rounded-[20px] bg-[#f0f0f0] px-6 py-7 shadow-[0_16px_24px_rgba(0,0,0,0.06)]"
              >
                <h2 className="font-display text-[42px] font-normal leading-[1.05] text-[#111] sm:text-[48px] lg:text-[52px]">
                  Become a Customer
                </h2>

                <div className="grid gap-4 lg:grid-cols-2">
                  <TextField
                    label="Customer Name / Office *"
                    name="customerName"
                    placeholder="Customer Name / Office"
                    required
                  />
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <TextField
                    label="Address 1 *"
                    name="address1"
                    placeholder="Address 1"
                    required
                  />
                  <TextField label="Address 2" name="address2" placeholder="Address 2" />
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <TextField
                    label="City / State / Zip Code *"
                    name="cityStateZip"
                    placeholder="City / State / Zip"
                    required
                  />
                  <div className="grid grid-cols-[0.95fr,1.05fr] gap-3">
                    <SelectField
                      label="Country"
                      name="country"
                      options={["USA", "Canada", "Mexico", "Other"]}
                      defaultValue="USA"
                    />
                    <TextField
                      label="Phone *"
                      name="phone"
                      placeholder="Phone"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <TextField label="Fax" name="fax" placeholder="Fax" />
                  <TextField
                    label="E-Mail *"
                    name="email"
                    placeholder="E-Mail"
                    type="email"
                    required
                  />
                </div>

                <div className="pt-1 text-[20px] font-medium uppercase tracking-[0.04em] text-black/80">
                  Additional questions
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <SelectField
                    label="How did you hear about Universal Orthodontic Lab? *"
                    name="hearAbout"
                    options={fields.hearAbout}
                    placeholder="Answer"
                    required
                  />
                  <SelectField
                    label="Which field do you specialize in? (Select one) *"
                    name="specialty"
                    options={fields.specialties}
                    placeholder="Orthodontics"
                    required
                  />
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <TextField
                    label="How many practices do you have?"
                    name="practices"
                    placeholder="Answer"
                    type="number"
                    min={0}
                  />
                  <TextField
                    label="Which lab do you currently work with?"
                    name="currentLab"
                    placeholder="Your current lab"
                  />
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <SelectField
                    label="Would you like a copy of our catalog and/or Starter Kit?"
                    name="catalog"
                    options={fields.catalog}
                    placeholder="Catalog"
                  />
                  <TextAreaField
                    label="Comments"
                    name="comments"
                    placeholder="Comments"
                  />
                </div>

                <div className="grid gap-3">
                  <TextField
                    label="Please prove that you are human by solving the equation *"
                    name="humanCheck"
                    placeholder="2 + 2 = ?"
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-3">
                  {submitted ? (
                    <span
                      className="text-sm font-medium text-green-700"
                      role="status"
                      aria-live="polite"
                    >
                      Thanks! We&apos;ll reach out shortly.
                    </span>
                  ) : null}
                  <button
                    type="submit"
                    className="mt-2 inline-flex h-[50px] items-center justify-center rounded-full bg-[#068cff] px-6 text-[15px] font-semibold text-white shadow-[0_10px_18px_rgba(6,140,255,0.25)] transition hover:brightness-110"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="bg-white px-4 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-12">
           <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
               <Image
                src="/images/support-page/become-a-customer/become-a-customer-black-diamon.png"
                alt=""
                width={20}
                height={20}
                className="h-[18px] w-[18px] object-contain opacity-80"
              />
              <span className="font-karla text-[20px] font-medium uppercase leading-[20px] text-black/80">
                Contact Us
              </span>
            </div>
            <div className="h-[1px] w-full bg-[#D9DEDD]" />
          </div>

          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left Column: Contact Form */}
            <div className="flex flex-1 flex-col gap-8 rounded-[20px] bg-[#f0f0f0] px-6 py-10 sm:px-10 sm:py-12">
              <h2 className="font-display text-[42px] font-normal leading-tight text-black sm:text-[52px] lg:text-[64px]">
                Contact our Sales Team
              </h2>

              <form className="flex flex-col gap-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <TextField
                    label="Name *"
                    name="salesName"
                    placeholder="Name"
                    required
                  />
                  <TextField
                    label="Email *"
                    name="salesEmail"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="w-full">
                  <TextField
                    label="Subject *"
                    name="salesSubject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <TextAreaField
                  label="Message *"
                  name="salesMessage"
                  placeholder="Message"
                  required
                  className="min-h-[180px]"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#068cff] px-8 py-3 text-[18px] font-medium text-white transition hover:bg-[#068cff]/90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Contact Info */}
            <div className="flex w-full flex-col gap-10 py-4 lg:w-[400px] lg:shrink-0 xl:w-[480px]">
              {/* Chat to sales */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[20px] font-bold leading-[24px] tracking-tight text-[#1D1F1E]">
                  Chat to sales
                </h3>
                <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                  Interested to our products and services? Speak to our friendly staff.
                </p>
                <div className="mt-1 flex flex-col items-start gap-1">
                   <a href="tel:877-771-0770" className="bg-[#068cff] px-2 py-0.5 text-[18px] text-white underline decoration-white">
                    877-771-0770
                   </a>
                   <span className="flex items-center gap-2 text-[18px] text-[#272727]">
                     <span className="bg-[#068cff] px-2 py-0.5 text-white underline decoration-white">562-484-3633</span> (fax)
                   </span>
                </div>
                <div className="mt-4 h-[1px] w-full bg-[#D9DEDD]" />
              </div>

              {/* Email Support */}
               <div className="flex flex-col gap-2">
                <h3 className="font-display text-[20px] font-bold leading-[24px] tracking-tight text-[#1D1F1E]">
                  Email Support
                </h3>
                <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                  Email us and we&apos;ll get back to you in 24 hours.
                </p>
                 <div className="mt-1 self-start">
                   <a href="mailto:customerservice@uniortholab.com" className="bg-[#068cff] px-2 py-0.5 text-[18px] text-white underline decoration-white">
                    customerservice@uniortholab.com
                   </a>
                 </div>
                <div className="mt-4 h-[1px] w-full bg-[#D9DEDD]" />
              </div>

              {/* Location */}
               <div className="flex flex-col gap-2">
                <h3 className="font-display text-[20px] font-bold leading-[24px] tracking-tight text-[#1D1F1E]">
                  Location
                </h3>
                <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                  We are available from Monday through Friday, 7:00 am to 3:30 pm (PST).
                </p>
                 <div className="mt-1 flex flex-col items-start gap-1">
                   <div className="bg-[#068cff] px-2 py-0.5 text-[18px] text-white underline decoration-white">
                    11917 Front Street
                   </div>
                   <div className="bg-[#068cff] px-2 py-0.5 text-[18px] text-white underline decoration-white">
                    Norwalk, CA, 90650
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </ScrollSection>

      <ScrollSection className="bg-white px-4 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/support-page/become-a-customer/become-a-customer-black-diamon.png"
                alt=""
                width={20}
                height={20}
                className="h-[18px] w-[18px] object-contain opacity-80"
              />
              <span className="font-karla text-[20px] font-medium uppercase leading-[20px] text-black/80">
                Downloadable Forms
              </span>
            </div>
            <div className="h-[1px] w-full bg-[#D9DEDD]" />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <h2 className="font-display text-[42px] font-normal leading-[1.05] text-black sm:text-[52px] lg:text-[64px]">
                Document Center
              </h2>
              <div className="w-full md:w-[520px]">
                <SearchInput placeholder="Search..." />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {documents.map((doc, idx) => (
                <DocumentCard
                  key={idx}
                  title={doc.title}
                  imageSrc={doc.image}
                  onDownload={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="bg-white px-4 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/support-page/become-a-customer/become-a-customer-black-diamon.png"
                alt=""
                width={20}
                height={20}
                className="h-[18px] w-[18px] object-contain opacity-80"
              />
              <span className="font-karla text-[20px] font-medium uppercase leading-[20px] text-black/80">
                Frequently Asked Questions
              </span>
            </div>
            <div className="h-[1px] w-full bg-[#D9DEDD]" />
          </div>

          <div className="flex flex-col gap-12 xl:flex-row">
            {/* Left Column: Title and Info */}
            <div className="flex flex-col gap-10 lg:max-w-[500px] xl:max-w-[600px] shrink-0">
               <h2 className="font-display text-[42px] font-normal leading-[1.05] text-black sm:text-[52px] lg:text-[64px]">
                Answers to the frequently asked questions.
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h5 className="font-display text-[20px] font-bold leading-[32px] text-[#1D1F1E]">
                    What services you provide?
                  </h5>
                  <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                    Universal Orthodontic Lab, Inc. is a full-service custom orthodontic laboratory. We offer several types of active and passive retainer designs. We take pride in the quality of our wire bending and acrylic finishing. We offer a full selection of acrylic colors and designs. Please be sure to reference our Color Guide and the Acrylic Decal Designs when ordering retainers. We look forward to receiving a case from your practice.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h5 className="font-display text-[20px] font-bold leading-[32px] text-[#1D1F1E]">
                    I am a new customer, I would like to work with Universal Orthodontic Lab.
                  </h5>
                  <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                    Our customer support team is ready to assist you. Feel free to contact us at <a href="tel:877-771-0770" className="text-[#068cff] underline">877-771-0770</a>. Or simply fill out the new customer questionnaire form here, then one of our friendly customer team will contact you.
                  </p>
                </div>

                 <div className="flex flex-col gap-2">
                  <h5 className="font-display text-[20px] font-bold leading-[32px] text-[#1D1F1E]">
                    Does Universal Orthodontic Lab receive 3D cases?
                  </h5>
                  <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                    Universal Orthodontic Lab provides Digital Prescription Application. It is web base application to submit, manage, and track all your orthodontic lab prescriptions and it is to create patient appliances. Feel free to contact us at <a href="tel:877-771-0770" className="text-[#068cff] underline">877-771-0770</a> or click here for more information.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h5 className="font-display text-[20px] font-bold leading-[32px] text-[#1D1F1E]">
                    What are the business hours of Universal Orthodontic Lab?
                  </h5>
                  <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                    Universal Orthodontic Lab normal business hours are Monday through Friday, 7:00 am to 3:30 pm (PST).
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h5 className="font-display text-[20px] font-bold leading-[32px] text-[#1D1F1E]">
                    What is the processing time?
                  </h5>
                  <p className="font-sans text-[18px] leading-[30px] text-[#272727]">
                    We aspire to provide the best turn around time in the United States. Standard orthodontic cases require up to 7 business days in-house, while complex orthodontic cases may require up to 10 business days in-house. Restorative cases may also require up to 10 business days in-house. If you need your case expedited, Universal Lab provides a rush service for a fee. Rush cases may be completed in 4 business days or less. All cases are shipped out via FedEx 2-day shipping unless stated otherwise by the clinician. Third-party local delivery services are also available. Please give us a call for more information!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Filter and Accordion */}
            <div className="flex flex-1 flex-col gap-8">
              <div className="flex justify-start">
                 <FilterPills
                    items={faqCategories}
                    activeItem={activeCategory}
                    onChange={setActiveCategory}
                 />
              </div>
              <Accordion items={filteredFaqs} />
            </div>
          </div>
        </div>
      </ScrollSection>

    </main>
  );
}
