"use client";

import * as React from "react";

export function useLocalStorage(key: string) {
  const [value, setValue] = React.useState<string | null>(null);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setValue(window.localStorage.getItem(key));
    setHydrated(true);
  }, [key]);

  const set = React.useCallback(
    (next: string) => {
      window.localStorage.setItem(key, next);
      setValue(next);
    },
    [key]
  );

  return { value, set, hydrated };
}
