import { ReactNode } from "react";


export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`rounded-2xl border bg-white p-6 ${className}`}>{children}</div>;
}


export function GradientCard({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`rounded-3xl border bg-gradient-to-br from-white to-emerald-50 p-8 ${className}`}>{children}</div>;
}