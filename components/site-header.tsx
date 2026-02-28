import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import BackButton from "./layout/BackButton";
import UserBalance from "./layout/UserBalance";
import { Suspense } from "react";
import GetNavUser from "./layout/GetNavUser";
import NavUserSkeletons from "./skeletons/NavUserSkeletons";
import UserBalanceSkeleton from "./skeletons/UserBalanceSkeleton";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) rounded-2xl bg-background shadow-sm">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <BackButton />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <SidebarTrigger className="-ml-1 text-primary" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Suspense fallback={<UserBalanceSkeleton />}>
          <UserBalance />
        </Suspense>
        <div className="ml-auto hidden md:flex items-center gap-2 ">
          <Suspense fallback={<NavUserSkeletons />}>
            <GetNavUser />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
