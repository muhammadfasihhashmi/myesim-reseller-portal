import { searchParamsType } from "@/app/(dashboards)/reseller/page";
import ClientSuspenseWrapper from "./ClientSuspenseWrapper";
import StatsOverview from "./StatsOverview";
import { StateCardSkeleton } from "../skeletons/StatCardSkeleton";

async function GetStatsOverview({
  searchParams,
}: {
  searchParams: Promise<searchParamsType>;
}) {
  const { start_date, end_date } = await searchParams;
  const range = { start_date, end_date };

  return (
    <ClientSuspenseWrapper fallback={<StateCardSkeleton count={8} />}>
      <StatsOverview range={range} />
    </ClientSuspenseWrapper>
  );
}

export default GetStatsOverview;
