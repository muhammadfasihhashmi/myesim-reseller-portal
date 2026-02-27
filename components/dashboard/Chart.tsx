import { searchParamsType } from "@/app/(dashboards)/reseller/page";
import GetCustomerActivityChart from "@/components/dashboard/GetCustomerActivityChart";
import GetMonthlySalesAndProfitChart from "@/components/dashboard/GetMonthlySalesAndProfitChart";
import { Suspense } from "react";
import { ChartSkeleton } from "../skeletons/ChartSkeleton";

async function Chart({
  searchParams,
}: {
  searchParams: Promise<searchParamsType>;
}) {
  const { start_date, end_date } = await searchParams;
  const range = {
    start_date,
    end_date,
  };
  console.log(JSON.stringify(range));

  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Suspense fallback={<ChartSkeleton />}>
        <GetMonthlySalesAndProfitChart />
      </Suspense>
      <Suspense fallback={<ChartSkeleton />} key={JSON.stringify(range)}>
        <GetCustomerActivityChart range={range} />
      </Suspense>
    </div>
  );
}

export default Chart;
