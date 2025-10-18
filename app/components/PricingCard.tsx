import CTAButton from "./CTAButton";
import { Card } from "./Card";
import type { LineItem } from "@/types/commerce";


type PricingCardProps = {
    title: string;
    price: number;
    compareAtPrice?: number;
    features: string[];
    cta: {
        label: string;
        href: string;
        value: number;
        items: LineItem[];
        location: string;
        promotionName?: string;
        promotionId?: string;
        variant?: "primary" | "inverse" | "dark";
        fullWidth?: boolean;
    };
    gradient?: boolean;
};


export default function PricingCard({ title, price, compareAtPrice, features, cta, gradient }: PricingCardProps) {
    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        gradient ? (
            <div className="rounded-3xl border p-6 md:p-8 bg-gradient-to-br from-emerald-600 to-sky-600 text-white">{children}</div>
        ) : (
            <Card className="p-6 md:p-8">{children}</Card>
        );


    return (
        <Wrapper>
            <div className={`text-sm uppercase tracking-widest ${gradient ? "opacity-90" : "text-zinc-500"}`}>{title}</div>
            <div className="mt-2 text-3xl font-extrabold">R$ {price.toFixed(2)}</div>
            {typeof compareAtPrice === "number" && (
                <div className={`text-sm ${gradient ? "line-through opacity-90" : "line-through text-zinc-500"}`}>De R$ {compareAtPrice.toFixed(2)}</div>
            )}
            <ul className={`mt-6 space-y-2 text-sm ${gradient ? "" : "text-zinc-700"}`}>
                {features.map((f) => (
                    <li key={f} className="flex gap-3"><span>✓</span><span>{f}</span></li>
                ))}
            </ul>
            <CTAButton
                {...cta}
                className={`${cta.fullWidth ? "mt-6 w-full" : "mt-6"} ${cta.variant === "inverse" ? "" : ""}`}
            />
            {gradient && <div className="mt-2 text-xs opacity-90">Oferta por tempo limitado</div>}
        </Wrapper>
    );
}