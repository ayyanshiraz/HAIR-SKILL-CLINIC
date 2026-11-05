"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedCounter({ from = 0, to, duration = 2.5, suffix = "+" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const [value, setValue] = useState(to); // SSR aur first render ke liye real number direct set rahega
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest: number) => Math.round(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: `-50px` });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: duration, ease: [0.16, 1, 0.3, 1] });
    }
  }, [count, isInView, to, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}