import { Skeleton } from "@/components/ui/skeleton";

export function StateCardSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border border-border/50 p-3.5 flex items-center justify-between rounded-2xl"
        >
          <div className="space-y-3.5">
            <Skeleton className="h-5 w-26" />
            <Skeleton className="h-8 w-14" />
          </div>
          <Skeleton className="h-10 w-10 rounded-full self-start" />
        </div>
      ))}
    </>
  );
}
