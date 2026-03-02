import { searchParamsType } from "@/app/(dashboards)/reseller/page";
import { getCustomerActivity } from "@/services/dashboard.services.";
import CustomerActivityChart from "./CustomerActivityChart";
import { ChartSkeleton } from "../skeletons/ChartSkeleton";
import ClientSuspenseWrapper from "./ClientSuspenseWrapper";

async function GetCustomerActivityChart({
  searchParams,
}: {
  searchParams: Promise<searchParamsType>;
}) {
  const { start_date, end_date } = await searchParams;
  const range = {
    start_date,
    end_date,
  };
  const data = await getCustomerActivity(range);

  return (
    <ClientSuspenseWrapper fallback={<ChartSkeleton />}>
      <CustomerActivityChart data={data.data} />
    </ClientSuspenseWrapper>
  );
}

export default GetCustomerActivityChart;
