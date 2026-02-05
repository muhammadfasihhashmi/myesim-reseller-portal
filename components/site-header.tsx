import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowBigLeft } from "lucide-react";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "Muhammad Fasih",
    email: "fasih7408@egmail.com.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) rounded-2xl bg-background shadow-sm">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <ArrowBigLeft size={18} className="text-primary-background" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <SidebarTrigger className="-ml-1 text-primary-background" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-sm font-medium rounded-full px-2 py-0.5 flex justify-center items-center bg-primary-background text-primary-foreground">
          Your balance is: $13.08
        </h1>
        <div className="ml-auto hidden md:flex items-center gap-2 ">
          <NavUser user={data.user} />
        </div>
      </div>
    </header>
  );
}
