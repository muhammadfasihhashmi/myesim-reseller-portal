"use client";

import { Suspense } from "react";
import { useFilterPending } from "@/context/FilterPendingContext";

function ClientSuspenseWrapper({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const { isPending } = useFilterPending();

  if (isPending) return <>{fallback}</>;

  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default ClientSuspenseWrapper;
