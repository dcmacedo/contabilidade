"use client";

import { useState } from "react";
import { FAQ } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-6">
      {FAQ.map((category, catIdx) => (
        <div key={catIdx}>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-700">
            {category.category}
          </h3>
          <div className="space-y-3">
            {category.items.map((item, idx) => {
              const globalIdx = catIdx * 100 + idx;
              const isOpen = openIndex === globalIdx;
              return (
                <div key={idx} className="rounded-2xl border bg-white/70 backdrop-blur overflow-hidden transition-all">
                  <button
                    onClick={() => toggle(globalIdx)}
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
        </div>
      ))}
    </div>
  );
}