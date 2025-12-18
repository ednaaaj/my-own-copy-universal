"use client";

import Image from "next/image";
import { useState } from "react";
import { TextField } from "@/components/ui/TextField";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";

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

interface BecomeCustomerSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
}

export function BecomeCustomerSection({
  imageSrc = "/images/support-page/become-a-customer/become-a-customer-doctor.png",
  imageAlt = "Smiling dentist",
  title = "Become a Customer",
}: BecomeCustomerSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="mx-auto flex max-w-[1320px] flex-col-reverse justify-between gap-10 lg:flex-row lg:items-center">
      <div className="flex w-full max-w-[460px] shrink-0 flex-col gap-6">
        <div className="space-y-3">
          <h2 className="font-roboto text-[42px] font-normal leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
            New Customer Questionnaire
          </h2>
          <p className="max-w-2xl font-work-sans text-[18px] leading-[30px] text-[#272727]">
            Please fill out the form. Once you submit the form, our friendly
            representative will give you a follow up call.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[20px] bg-black shadow-[0_16px_28px_rgba(0,0,0,0.14)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={900}
            className="h-full w-full object-cover opacity-80"
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
            <p className="font-roboto text-[28px] font-normal leading-[36px] sm:text-[30px] sm:leading-[40px]">
              &quot;Universal Orthodontic Lab delivers reliable, high-quality
              appliances with seamless service and modern precision.&quot;
            </p>
            <div className="font-inter text-[16px] font-semibold leading-[22px] sm:text-[18px] sm:leading-[24px]">
              JANE DOE
              <span className="block font-medium text-white/80">
                Orthodontist
              </span>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[720px] flex-1 flex-col gap-6 rounded-[20px] bg-[#f0f0f0] px-6 py-7 shadow-[0_16px_24px_rgba(0,0,0,0.06)]"
      >
        <h2 className="font-roboto text-[42px] font-normal leading-[1.05] text-[#111] sm:text-[48px] lg:text-[52px]">
          {title}
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
  );
}
