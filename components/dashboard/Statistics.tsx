import { Card } from "@/components/ui/card";
import StatsOverview from "./StatsOverview";
import SummaryCard from "./SummaryCard";
import { DatePickerFilter } from "./DatePickerFilter";
import { Suspense } from "react";
import { searchParamsType } from "@/app/(dashboards)/reseller/page";

async function Statistics({ range }: { range: searchParamsType }) {
  return (
    <div>
      <div className="flex items-center py-5 gap-6">
        <h1 className="font-semibold text-h1">Statistics</h1>
        <Suspense fallback={null}>
          <DatePickerFilter />
        </Suspense>
      </div>

      <Card className="p-5">
        <h2 className="font-semibold text-body">Stats Overview</h2>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Suspense>
            <StatsOverview range={range} />
          </Suspense>
        </div>

        <h2 className="font-semibold text-body">Summary Cards</h2>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Suspense>
            <SummaryCard />
          </Suspense>
        </div>
        <h2 className="font-semibold text-body">All Time Statistics</h2>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"></div>
      </Card>
    </div>
  );
}

export default Statistics;
