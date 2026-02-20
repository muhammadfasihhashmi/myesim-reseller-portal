import { getStatsOverview } from "@/services/dashboard.services.";
import StatCard from "./StatCard";
import { ArrowBigDown } from "lucide-react";
import { searchParamsType } from "@/app/(dashboards)/reseller/page";

async function StatsOverview({ range }: { range: searchParamsType }) {
  const data = await getStatsOverview(range);

  const statsData = [
    {
      title: "All Bundles Amount",
      amount: data.overview.all_bundles_amount,
      iconName: ArrowBigDown,
      bgColor: "bg-red-200",
      iconColor: "red",
    },
    {
      title: "Dealer Sale Amount",
      amount: data.overview.dealer_sale_amount,
      iconName: ArrowBigDown,
      bgColor: "bg-blue-200",
      iconColor: "blue",
    },
    {
      title: "Dealer Profit",
      amount: data.overview.dealer_profit,
      iconName: ArrowBigDown,
      bgColor: "bg-green-200",
      iconColor: "green",
    },
    {
      title: "Bundle Count",
      amount: data.overview.bundle_count,
      iconName: ArrowBigDown,
      bgColor: "bg-yellow-200",
      iconColor: "orange",
    },
    {
      title: "Dealer Bundle Count",
      amount: data.overview.dealer_bundle_count,
      iconName: ArrowBigDown,
      bgColor: "bg-purple-200",
      iconColor: "purple",
    },
    {
      title: "ESIM Sold",
      amount: data.overview.esim_sold,
      iconName: ArrowBigDown,
      bgColor: "bg-red-200",
      iconColor: "red",
    },
    {
      title: "Dealer ESIM Sold",
      amount: data.overview.dealer_esim_sold,
      iconName: ArrowBigDown,
      bgColor: "bg-blue-200",
      iconColor: "blue",
    },
    {
      title: "Wallet Refill",
      amount: data.overview.wallet_refill,
      iconName: ArrowBigDown,
      bgColor: "bg-orange-200",
      iconColor: "orange",
    },
  ];

  return (
    <>
      {statsData.map((stat, ind) => (
        <StatCard key={ind} stat={stat} />
      ))}
    </>
  );
}

export default StatsOverview;
