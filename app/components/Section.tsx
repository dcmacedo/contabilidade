import { ReactNode } from "react";


type SectionProps = {
    id?: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    center?: boolean;
    className?: string;
};


export default function Section({ id, title, subtitle, children, center, className }: SectionProps) {
    return (
        <section id={id} className={`px-5 md:px-6 lg:px-12 max-w-6xl mx-auto ${className ?? ""}`}>
            {(title || subtitle) && (
                <div className={`${center ? "text-center" : ""} py-8 md:py-12`}>
                    {title && <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>}
                    {subtitle && <p className={`mt-2 text-zinc-600 ${center ? "mx-auto" : ""}`}>{subtitle}</p>}
                </div>
            )}
            {children}
        </section>
    );
}