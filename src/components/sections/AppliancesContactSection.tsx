"use client";

import Image from "next/image";
import { useState } from "react";
import { TextField } from "@/components/ui/TextField";
import { SelectField } from "@/components/ui/SelectField";

const stars = Array.from({ length: 5 });

export function AppliancesContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [otherChecked, setOtherChecked] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse justify-between gap-10 lg:flex-row lg:items-start">
        {/* Left Column - Title & Testimonial */}
        <div className="flex w-full max-w-[560px] shrink-0 flex-col gap-6">
          <div className="space-y-4">
            <h2 className="font-roboto text-[42px] font-normal leading-[1.15] text-black sm:text-[52px] lg:text-[64px]">
              Ready to Go<br />Digital?
            </h2>
            <p className="max-w-md font-work-sans text-[18px] leading-[30px] text-[#272727]">
              Interested in incorporating digital solutions or the Shining 3D platform into your workflow? Let&apos;s talk.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-[20px] bg-black shadow-[0_16px_28px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/appliances/form-person.png"
              alt="Happy orthodontist"
              width={561}
              height={802}
              className="h-full w-full object-cover opacity-60"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 text-white sm:p-8">
              <div className="flex items-center gap-2">
                {stars.map((_, idx) => (
                  <Image
                    key={idx}
                    src="/images/support-page/become-a-customer/become-a-customer-star.png"
                    alt=""
                    width={38}
                    height={38}
                    className="h-9 w-9 object-contain"
                  />
                ))}
              </div>
              <p className="font-roboto text-[28px] font-normal leading-[36px] tracking-[0.02em] sm:text-[36px] sm:leading-[42px]">
                &quot;Universal Orthodontic Lab delivers reliable, high-quality appliances with seamless service and modern precision.&quot;
              </p>
              <div className="font-inter text-[16px] font-bold leading-[22px] sm:text-[18px]">
                JANE DOE
                <span className="block font-medium text-white/80">
                  Orthodontist
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[920px] flex-1 flex-col gap-5 rounded-[20px] bg-[#f0f0f0] px-8 py-8 shadow-[0_16px_24px_rgba(0,0,0,0.06)]"
        >
          <h2 className="font-roboto text-[48px] font-normal leading-[1.15] text-black lg:text-[64px]">
            Become a Customer
          </h2>

          {/* Customer Name / Office */}
          <TextField
            label="Customer Name / Office *"
            name="customerName"
            placeholder="Customer Name / Office"
            required
          />

          {/* Phone & Email */}
          <div className="grid gap-4 lg:grid-cols-2">
            <TextField
              label="Phone Number *"
              name="phone"
              placeholder="Phone Number"
              type="tel"
              required
            />
            <TextField
              label="E-Mail *"
              name="email"
              placeholder="E-Mail *"
              type="email"
              required
            />
          </div>

          {/* Address 1 & 2 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <TextField
              label="Address 1 *"
              name="address1"
              placeholder="Address 1"
              required
            />
            <TextField
              label="Address 2"
              name="address2"
              placeholder="Address 2"
            />
          </div>

          {/* City/State/Zip & Phone with Country */}
          <div className="grid gap-4 lg:grid-cols-2">
            <TextField
              label="City / State / Zip Code *"
              name="cityStateZip"
              placeholder="Address 1"
              required
            />
            <div className="grid grid-cols-[0.4fr,1fr] gap-3">
              <SelectField
                label="Phone *"
                name="country"
                options={["USA", "Canada", "Mexico", "Other"]}
                defaultValue="USA"
              />
              <TextField
                label=" "
                name="phoneSecondary"
                placeholder="Phone"
                type="tel"
              />
            </div>
          </div>

          {/* Current Scanner */}
          <TextField
            label="Current Scanner (if any):"
            name="currentScanner"
            placeholder="Current Scanner (if any):"
          />

          {/* Interested In */}
          <div className="space-y-3">
            <label className="block font-inter text-[18px] font-medium text-black">
              Interested in: *
            </label>
            <div className="grid gap-y-3 lg:grid-cols-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="digitalCase"
                  className="h-5 w-5 rounded border-[#575c56]/60 bg-white"
                />
                <span className="font-inter text-[18px] font-medium text-black">
                  Digital Case Submissions
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="training"
                  className="h-5 w-5 rounded border-[#575c56]/60 bg-white"
                />
                <span className="font-inter text-[18px] font-medium text-black">
                  Training & Support
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="shining3d"
                  className="h-5 w-5 rounded border-[#575c56]/60 bg-white"
                />
                <span className="font-inter text-[18px] font-medium text-black">
                  Shining 3D Integration
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="other"
                  checked={otherChecked}
                  onChange={(e) => setOtherChecked(e.target.checked)}
                  className="h-5 w-5 rounded border-[#575c56]/60 bg-white"
                />
                <span className="font-inter text-[18px] font-medium text-black">
                  Other
                </span>
              </label>
            </div>
            {otherChecked && (
              <div className="lg:ml-[50%] lg:-mt-3">
                <input
                  type="text"
                  name="otherSpecify"
                  placeholder="(please specify)"
                  className="w-full rounded-[16px] border border-[#575c56]/60 bg-white px-4 py-4 font-inter text-[18px] text-black placeholder:text-[#575c56]/60 focus:outline-none focus:ring-2 focus:ring-[#068cff]"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-3 pt-2">
            {submitted && (
              <span
                className="text-sm font-medium text-green-700"
                role="status"
                aria-live="polite"
              >
                Thanks! We&apos;ll reach out shortly.
              </span>
            )}
            <button
              type="submit"
              className="w-full h-[52px] items-center justify-center rounded-full bg-[#068cff] px-6 text-[18px] font-medium text-white shadow-[0_10px_18px_rgba(6,140,255,0.25)] transition hover:brightness-110"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
