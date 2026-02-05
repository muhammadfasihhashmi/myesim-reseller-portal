"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  ChartNoAxesColumn,
  Cpu,
  CreditCard,
  File,
  HandCoins,
  Package2,
  ScrollText,
  Server,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import esimLogo from "@/public/esim-logo.webp";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/reseller",
      icon: ChartNoAxesColumn,
    },
    {
      title: "Buy Packages",
      url: "/reseller/data-only-esim",
      icon: Package2,
    },
    {
      title: "Dealers",
      url: "/reseller/dealers",
      icon: Users,
    },
    {
      title: "Credits",
      url: "/reseller/credits",
      icon: CreditCard,
    },
    {
      title: "Purchases",
      icon: Cpu,
      items: [
        {
          title: "View eSIMs",
          icon: "",
          url: "/reseller/my-esims",
        },
        {
          title: "Assigned Bundles",
          url: "/reseller/bundles-old",
        },
      ],
    },
    {
      title: "Pricing",
      icon: HandCoins,
      items: [
        {
          title: "View Pricing",
          url: "/reseller/pricing",
        },
        {
          title: "Set Prices",
          url: "/reseller/pricing/manage",
        },
      ],
    },
    {
      title: "Policies",
      icon: File,
      items: [
        {
          title: "Communication Policy",
          url: "/reseller/communication-policy",
        },
        {
          title: "Refund Policy",
          url: "/reseller/refund-policy",
        },
      ],
    },
    {
      title: "Topup Account",
      url: "/reseller/topup",
      icon: Wallet,
    },
    {
      title: "API Docs",
      url: "/reseller/docs",
      icon: ScrollText,
    },
    {
      title: "Server Status",
      url: "#",
      icon: Server,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="group-data-[state=collapsed]:h-12 ">
        <div className="h-14 w-34 relative group-data-[state=collapsed]:hidden ">
          <Image src={esimLogo} alt="esim logo" fill className="object-cover" />
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-3.5">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
