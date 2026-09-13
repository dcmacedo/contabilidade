"use client";

import type { FC } from "react";

type SegmentBenefitsProps = {
    className?: string;
};

export const SegmentBenefits: FC<SegmentBenefitsProps> = ({ className = "" }) => {
    const segments = [
        { key: "mei", ...SEGMENT_BENEFITS.mei },
        { key: "autonomo", ...SEGMENT_BENEFITS.autonomo },
        { key: "pequenoNegocio", ...SEGMENT_BENEFITS.pequenoNegocio },
    ];

    return (
        <section id="segmentos" className={`py-14 md:py-20 ${className}`}>
            <div className="mx-auto max-w-7xl px-4">
                <header className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900">
                        Feita para o seu dia a dia
                    </h2>
                    <p className="mt-3 text-lg text-zinc-600 max-w-2xl mx-auto">
                        Cada perfil tem desafios únicos. A planilha resolve os principais para cada um.
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-8">
                    {segments.map((segment) => (
                        <article
                            key={segment.key}
                            className="relative rounded-3xl border bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <div
                                    className={`rounded-2xl p-3 text-3xl bg-gradient-to-br ${segment.color}`}
                                    aria-hidden="true"
                                >
                                    {segment.icon}
                                </div>
                                <h3 className="text-2xl font-extrabold text-zinc-900">{segment.label}</h3>
                            </div>

                            <ul className="space-y-4" role="list">
                                {segment.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span
                                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${segment.color} text-white text-xs`}
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>
                                        <div>
                                            <h4 className="font-semibold text-zinc-900">{benefit.title}</h4>
                                            <p className="text-sm text-zinc-600">{benefit.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

import { SEGMENT_BENEFITS } from "@/lib/constants";