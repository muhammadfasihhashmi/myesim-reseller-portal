import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FilterPendingProvider } from "@/context/FilterPendingContext";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 17)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" className="" />
      <FilterPendingProvider>
        <NuqsAdapter>
          <SidebarInset className="bg-muted px-6 pt-2.5">
            <SiteHeader />
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2 ">
                <div className="flex flex-col gap-4 py-4 md:gap-6 ">
                  {children}
                </div>
              </div>
            </div>
          </SidebarInset>
        </NuqsAdapter>
      </FilterPendingProvider>
    </SidebarProvider>
  );
}
