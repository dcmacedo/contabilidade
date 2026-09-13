"use client";

import { useEffect, useRef } from "react";
import { gaEvent } from "@/lib/ga";

type ExperimentViewProps = {
  experiment: string;
  variant: "A" | "B";
};

export default function ExperimentView({ experiment, variant }: ExperimentViewProps) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    gaEvent({
      action: "experiment_view",
      params: { experiment_id: experiment, variant },
    });
  }, [experiment, variant]);

  return null;
}