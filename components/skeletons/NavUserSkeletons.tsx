import { Skeleton } from "../ui/skeleton";

function NavUserSkeletons() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-38" />
        <Skeleton className="h-4 w-38" />
      </div>
    </div>
  );
}

export default NavUserSkeletons;
