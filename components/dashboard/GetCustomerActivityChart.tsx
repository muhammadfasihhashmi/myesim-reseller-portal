import { searchParamsType } from "@/app/(dashboards)/reseller/page";
import { getCustomerActivity } from "@/services/dashboard.services.";
import CustomerActivityChart from "./CustomerActivityChart";

async function GetCustomerActivityChart({
  range,
}: {
  range: searchParamsType;
}) {
  const data = await getCustomerActivity(range);

  return <CustomerActivityChart data={data.data} />;
}

export default GetCustomerActivityChart;
