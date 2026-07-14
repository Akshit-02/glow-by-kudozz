"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ReadingProgress({ targetId }: { targetId: string }) {
  const [target, setTarget] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setTarget(document.getElementById(targetId));
  }, [targetId]);

  const { scrollYProgress } = useScroll({
    target: target ? { current: target } : undefined,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-rose"
      aria-hidden
    />
  );
}
