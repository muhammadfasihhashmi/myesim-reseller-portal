import { getSixMonthGraphData } from "@/services/dashboard.services.";
import MonthlySalesAndProfitChart from "./MonthlySalesAndProfitChart";

async function GetMonthlySalesAndProfitChart() {
  const data = await getSixMonthGraphData();

  return <MonthlySalesAndProfitChart data={data.data} />;
}

export default GetMonthlySalesAndProfitChart;
