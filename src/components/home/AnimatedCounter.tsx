"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedCounter({ from = 0, to, duration = 2.5 }: { from?: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest: number) => Math.round(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: `-50px` });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: duration, ease: [0.16, 1, 0.3, 1] });
    }
  }, [count, isInView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}