import { Card } from "./Card";


type TestimonialProps = { n: string; t: string; d: string };


export default function TestimonialCard({ n, t, d }: TestimonialProps) {
    return (
        <Card>
            <div className="text-sm text-zinc-600">{t}</div>
            <div className="mt-2 text-zinc-800">“{d}”</div>
            <div className="mt-3 text-sm font-semibold">{n}</div>
        </Card>
    );
}