"use client";

import { useEffect, useMemo, useState } from "react";

export default function CountdownBanner({
  price,
  offerPrice,
  label,
}: {
  price: number;
  offerPrice: number;
  label: string;
}) {
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");

  const deadline = useMemo(() => {
    const key = "pfc_v2_countdown_deadline";
    const existing = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    let end = existing ? new Date(existing) : null;

    if (!end || end.getTime() < Date.now()) {
      end = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      if (typeof window !== "undefined") localStorage.setItem(key, end.toISOString());
    }

    return end;
  }, []);

  useEffect(() => {
    const tick = () => {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);

      setTimeLeft(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white text-center text-sm py-2">
      {label}: de R$ {price.toFixed(2)} por <span className="font-semibold">R$ {offerPrice.toFixed(2)}</span> — expira em <span className="font-mono">{timeLeft}</span>
    </div>
  );
}
