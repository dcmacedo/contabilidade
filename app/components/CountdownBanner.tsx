"use client";

import { useEffect, useMemo, useState } from "react";

export function CountdownBanner({
  price,
  offerPrice,
  label,
  deadline,
}: {
  price: number;
  offerPrice: number;
  label: string;
  deadline: string | number | Date;
}) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  const endTime = useMemo(() => new Date(deadline).getTime(), [deadline]);

  useEffect(() => {
    const tick = () => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        setTimeLeft("");
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      setTimeLeft(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      );
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  const expired = timeLeft === "";
  const deadlineText = new Date(deadline).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white text-center text-sm py-2">
      {label}: de R$ {price.toFixed(2)} por{" "}
      <span className="font-semibold">R$ {offerPrice.toFixed(2)}</span>
      {expired ? (
        <span> — oferta encerrada em {deadlineText}</span>
      ) : (
        <span> — válida até {deadlineText} ({timeLeft})</span>
      )}
    </div>
  );
}