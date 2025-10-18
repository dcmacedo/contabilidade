export default function Badge({ children }: { children: string }) {
    return (
        <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-sky-800">{children}</span>
    );
}