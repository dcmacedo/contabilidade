import { Card } from "./Card";


type TestimonialProps = {
    n: string;
    t: string;
    d: string;
    context?: string;
    initial?: string;
};


export default function TestimonialCard({ n, t, d, context, initial }: TestimonialProps) {
    return (
        <Card>
            <div className="flex items-center gap-2">
                {initial && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                        {initial}
                    </div>
                )}
                <div className="text-sm font-medium text-zinc-800">{n}</div>
            </div>
            <div className="mt-2 text-sm text-zinc-600">{t}</div>
            <div className="mt-2 text-zinc-800">“{d}”</div>
            {context && (
                <div className="mt-3 flex items-center gap-1 text-xs text-emerald-700">
                    <span>✓</span>
                    <span>{context}</span>
                </div>
            )}
        </Card>
    );
}