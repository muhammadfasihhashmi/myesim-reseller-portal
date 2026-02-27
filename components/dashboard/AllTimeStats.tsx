import { getAllTimeStats } from "@/services/dashboard.services.";
import { ArrowBigDown } from "lucide-react";
import StatCard from "./StatCard";

async function AllTimeStats() {
  const data = await getAllTimeStats();
  const allTimeStatsData = [
    {
      title: "Total wallet refill",
      amount: data.all_time.total_wallet_refill,
      iconName: ArrowBigDown,
      bgColor: "bg-red-200",
      iconColor: "red",
    },
    {
      title: "Total bundle sold",
      amount: data.all_time.total_bundle_sold,
      iconName: ArrowBigDown,
      bgColor: "bg-blue-200",
      iconColor: "blue",
    },
    {
      title: "Total esim sold",
      amount: data.all_time.total_esim_sold,
      iconName: ArrowBigDown,
      bgColor: "bg-green-200",
      iconColor: "green",
    },
    {
      title: "Total dealer",
      amount: data.all_time.total_dealer,
      iconName: ArrowBigDown,
      bgColor: "bg-yellow-200",
      iconColor: "orange",
    },
    {
      title: "Total sale made by dealer",
      amount: data.all_time.total_profit_earn_from_dealer,
      iconName: ArrowBigDown,
      bgColor: "bg-purple-200",
      iconColor: "purple",
    },
    {
      title: "Total dealer profit",
      amount: data.all_time.total_profit_earn_from_dealer,
      iconName: ArrowBigDown,
      bgColor: "bg-red-200",
      iconColor: "red",
    },
  ];

  return (
    <>
      {allTimeStatsData.map((stat, ind) => (
        <StatCard key={ind} stat={stat} />
      ))}
    </>
  );
}

export default AllTimeStats;
