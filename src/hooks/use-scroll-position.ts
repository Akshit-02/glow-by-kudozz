"use client";

import * as React from "react";

export function useScrollPosition(threshold: number) {
  const [pastThreshold, setPastThreshold] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setPastThreshold(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return pastThreshold;
}
