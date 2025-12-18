"use client";

import { useState } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer?: React.ReactNode;
  category: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_1px_2px_rgba(87,92,86,0.16)] transition-all duration-300 hover:shadow-[0_24px_24px_-12px_rgba(54,74,54,0.06)] ring-1 ring-[#12693f]/[0.08]"
          >
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between px-8 py-6 text-left"
            >
              <span className="font-display text-[20px] font-bold leading-[24px] tracking-tight text-[#1d1f1e]">
                {item.question}
              </span>
              <div className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#1d1f1e]">
                {/* Minus icon (horizontal line) */}
                <span
                  className={`absolute h-[1.5px] w-3.5 bg-current transition-transform duration-300 ${
                    isOpen ? "rotate-0" : "rotate-0"
                  }`}
                />
                {/* Plus icon (vertical line) - rotates to 90deg to form +, or 0deg to hide behind minus?
                    Actually standard plus is both lines. Minus is just horizontal.
                    Let's just use two spans.
                */}
                <span
                  className={`absolute h-[1.5px] w-3.5 bg-current transition-transform duration-300 ${
                    isOpen ? "rotate-0 opacity-0" : "-rotate-90 opacity-100"
                  }`}
                />
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-8 pb-8 pt-0 font-sans text-[18px] leading-[30px] text-[#272727]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
