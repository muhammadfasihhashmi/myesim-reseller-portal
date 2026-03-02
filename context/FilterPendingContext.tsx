"use client";

import { createContext, useContext, useTransition } from "react";

type FilterPendingContextType = {
  isPending: boolean;
  startTransition: (fn: () => void) => void;
};

const FilterPendingContext = createContext<FilterPendingContextType>({
  isPending: false,
  startTransition: (fn) => fn(),
});

export function FilterPendingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <FilterPendingContext.Provider value={{ isPending, startTransition }}>
      {children}
    </FilterPendingContext.Provider>
  );
}

export function useFilterPending() {
  return useContext(FilterPendingContext);
}
