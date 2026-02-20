import { getSummaryCard } from "@/services/dashboard.services.";
import StatCard from "./StatCard";
import { ArrowBigDown } from "lucide-react";

async function SummaryCard() {
  const data = await getSummaryCard();
  const summaryData = [
    {
      title: "Balance",
      amount: data.summerycards.balance,
      iconName: ArrowBigDown,
      bgColor: "bg-red-200",
      iconColor: "red",
    },
    {
      title: "Esim_sold",
      amount: data.summerycards.esim_sold,
      iconName: ArrowBigDown,
      bgColor: "bg-blue-200",
      iconColor: "blue",
    },
    {
      title: "Bundle_sold",
      amount: data.summerycards.bundle_sold,
      iconName: ArrowBigDown,
      bgColor: "bg-green-200",
      iconColor: "green",
    },
  ];

  return (
    <>
      {summaryData.map((summary, ind) => (
        <StatCard key={ind} stat={summary} />
      ))}
    </>
  );
}

export default SummaryCard;
