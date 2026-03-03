import AllTimeStats from "@/components/dashboard/AllTimeStats";
import CarouselBanner from "@/components/dashboard/CarouselBanner";
import { DatePickerFilter } from "@/components/dashboard/DatePickerFilter";
import GetCustomerActivityChart from "@/components/dashboard/GetCustomerActivityChart";
import GetMonthlySalesAndProfitChart from "@/components/dashboard/GetMonthlySalesAndProfitChart";
import GetStatsOverview from "@/components/dashboard/GetStatsOverview";
import GetSummaryCard from "@/components/dashboard/GetSummaryCard";
import { ChartSkeleton } from "@/components/skeletons/ChartSkeleton";
import { StateCardSkeleton } from "@/components/skeletons/StatCardSkeleton";
import { DataTable } from "@/components/tables/DataTable";
import { Card } from "@/components/ui/card";
import { ColumnDef } from "@tanstack/react-table";
import { Suspense } from "react";

export type searchParamsType = {
  [key: string]: string | string[] | undefined;
};

type Payment = {
  id: string;
  name: string;
  total_packages: number;
  total_price: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "total_packages",
    header: "Total Packages",
  },
  {
    accessorKey: "total_price",
    header: "Total Price",
  },
];

export const payments: Payment[] = [
  {
    id: "728ed52f",
    name: "John Doe",
    total_packages: 10,
    total_price: 100,
  },
  {
    id: "489e1d42",
    name: "Jane Doe",
    total_packages: 20,
    total_price: 200,
  },
];

function page({ searchParams }: { searchParams: Promise<searchParamsType> }) {
  return (
    <section>
      <CarouselBanner />
      <div className="border-t border-muted-foreground/20"></div>
      <div>
        <div className="flex items-center py-6 gap-6">
          <h1 className="font-semibold text-h1">Statistics</h1>
          <Suspense fallback={null}>
            <DatePickerFilter />
          </Suspense>
        </div>

        <Card className="p-5">
          <h2 className="font-semibold text-body">Stats Overview</h2>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Suspense fallback={<StateCardSkeleton count={8} />}>
              <GetStatsOverview searchParams={searchParams} />
            </Suspense>
          </div>

          <h2 className="font-semibold text-body">Summary Cards</h2>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Suspense fallback={<StateCardSkeleton count={3} />}>
              <GetSummaryCard searchParams={searchParams} />
            </Suspense>
          </div>

          <h2 className="font-semibold text-body">All Time Statistics</h2>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Suspense fallback={<StateCardSkeleton count={6} />}>
              <AllTimeStats />
            </Suspense>
          </div>
        </Card>
      </div>
      <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<ChartSkeleton />}>
          <GetMonthlySalesAndProfitChart />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <GetCustomerActivityChart searchParams={searchParams} />
        </Suspense>
      </div>
      <div className="py-6">
        <DataTable columns={columns} data={payments} />
      </div>
    </section>
  );
}

export default page;
