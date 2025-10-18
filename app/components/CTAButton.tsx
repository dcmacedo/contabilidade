"use client";


import { trackAndGo } from "@/lib/ga";
import type { LineItem } from "@/types/commerce";
import { ComponentProps } from "react";


type CTAButtonProps = {
    label: string;
    href: string;
    value: number;
    items: LineItem[];
    location: string; // ex.: "hero", "pricing_offer", "final_cta"
    promotionName?: string;
    promotionId?: string;
    variant?: "primary" | "inverse" | "dark";
    fullWidth?: boolean;
} & Omit<ComponentProps<"button">, "onClick">;


const base =
    "rounded-2xl px-6 py-3 text-base font-semibold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
    primary: "bg-gradient-to-r from-emerald-600 to-sky-600 text-white hover:opacity-90 focus:ring-emerald-600",
    inverse: "bg-white text-emerald-700 hover:opacity-90 focus:ring-emerald-600",
    dark: "bg-zinc-900 text-white hover:opacity-90 focus:ring-zinc-900",
} as const;


export default function CTAButton({
    label,
    href,
    value,
    items,
    location,
    promotionName,
    promotionId,
    variant = "primary",
    fullWidth,
    className,
    ...rest
}: CTAButtonProps) {
    return (
        <button
            type="button"
            onClick={() =>
                trackAndGo(href, "begin_checkout", {
                    currency: "BRL",
                    value,
                    items,
                    ...(promotionName ? { promotion_name: promotionName } : {}),
                    ...(promotionId ? { promotion_id: promotionId } : {}),
                    location,
                })
            }
            className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className ?? ""}`}
            {...rest}
        >
            {label}
        </button>
    );
}