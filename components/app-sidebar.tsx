"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  ChartNoAxesColumn,
  Cpu,
  CreditCard,
  File,
  HandCoins,
  LucideIcon,
  Package2,
  ScrollText,
  Server,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import esimLogo from "@/public/esim-logo.webp";
// import { useSession } from "next-auth/react";

type UserRole = "reseller" | "dealer" | "affiliate";

export type NavItem = {
  title: string;
  url?: string;
  icon?: LucideIcon;
  items?: {
    title: string;
    url: string;
  }[];
};

const data = {
  reseller: [
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
  dealer: [
    { title: "Dashboard", url: "/dealer", icon: ChartNoAxesColumn },
    { title: "Orders", url: "/dealer/orders", icon: Package2 },
    { title: "Credits", url: "/dealer/credits", icon: CreditCard },
  ],

  affiliate: [
    { title: "Dashboard", url: "/affiliate", icon: ChartNoAxesColumn },
    { title: "My Earnings", url: "/affiliate/earnings", icon: Wallet },
    { title: "Referrals", url: "/affiliate/referrals", icon: Users },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const session = useSession();

  // const role: UserRole =
  //   (session?.data?.user?.role.toLowerCase() as UserRole) ?? "";
  const role: UserRole = "reseller";

  let navMain: NavItem[] = [];

  if (role === "reseller") navMain = data.reseller;
  else if (role === "dealer") navMain = data.dealer;
  else if (role === "affiliate") navMain = data.affiliate;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="group-data-[state=collapsed]:h-12 ">
        <div className="h-14 w-34 relative group-data-[state=collapsed]:hidden ">
          <Image
            src={esimLogo}
            alt="esim logo"
            fill
            loading="eager"
            sizes="100%"
            className="object-cover"
          />
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-6">
        <NavMain items={navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
