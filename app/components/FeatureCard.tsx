import Image from "next/image";
import { Card } from "./Card";


type FeatureCardProps = {
    title: string;
    desc: string;
    image?: string;
};


export default function FeatureCard({ title, desc, image }: FeatureCardProps) {
    return (
        <Card className="hover:shadow-sm transition">
            <div className="text-lg font-semibold">{title}</div>
            <p className="mt-2 text-zinc-600">{desc}</p>
            {image && (
                <Image src={image} alt={`Preview ${title}`} width={1200} height={800} className="mt-4 w-full rounded-xl border" />
            )}
        </Card>
    );
}