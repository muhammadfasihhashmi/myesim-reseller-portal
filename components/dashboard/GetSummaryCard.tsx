import { searchParamsType } from "@/app/(dashboards)/reseller/page";
import { StateCardSkeleton } from "../skeletons/StatCardSkeleton";
import SummaryCard from "./SummaryCard";
import ClientSuspenseWrapper from "./ClientSuspenseWrapper";

async function GetSummaryCard({
  searchParams,
}: {
  searchParams: Promise<searchParamsType>;
}) {
  const { start_date, end_date } = await searchParams;
  const range = {
    start_date,
    end_date,
  };
  return (
    <ClientSuspenseWrapper fallback={<StateCardSkeleton count={3} />}>
      <SummaryCard range={range} />
    </ClientSuspenseWrapper>
  );
}

export default GetSummaryCard;
