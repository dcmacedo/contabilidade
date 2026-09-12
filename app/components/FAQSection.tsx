"use client";

import { useState } from "react";
import { FAQ } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {FAQ.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="rounded-2xl border bg-white/70 backdrop-blur overflow-hidden transition-all">
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-6 font-semibold flex justify-between items-center focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="text-xl">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-zinc-700">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
