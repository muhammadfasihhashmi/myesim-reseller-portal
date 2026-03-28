import AllTimeStats from "@/components/dashboard/AllTimeStats";
import CarouselBanner from "@/components/dashboard/CarouselBanner";
import { DatePickerFilter } from "@/components/dashboard/DatePickerFilter";
import GetCustomerActivityChart from "@/components/dashboard/GetCustomerActivityChart";
import GetMonthlySalesAndProfitChart from "@/components/dashboard/GetMonthlySalesAndProfitChart";
import GetStatsOverview from "@/components/dashboard/GetStatsOverview";
import GetSummaryCard from "@/components/dashboard/GetSummaryCard";
// import TopTenTable from "@/components/dashboard/TopTenTable";
import { ChartSkeleton } from "@/components/skeletons/ChartSkeleton";
import { StateCardSkeleton } from "@/components/skeletons/StatCardSkeleton";
import { columns, Payment } from "@/components/tables/Column";
import { DataTable } from "@/components/tables/DataTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";

const payments: Payment[] = [
  { name: "John Doe", total_packages: 10, total_price: 100 },
  { name: "Jane Smith", total_packages: 15, total_price: 180 },
  { name: "Michael Brown", total_packages: 8, total_price: 95 },
  { name: "Emily Davis", total_packages: 22, total_price: 260 },
  { name: "Daniel Wilson", total_packages: 5, total_price: 60 },
  { name: "Olivia Taylor", total_packages: 18, total_price: 210 },
  { name: "James Anderson", total_packages: 12, total_price: 140 },
  { name: "Sophia Thomas", total_packages: 25, total_price: 300 },
  { name: "William Jackson", total_packages: 9, total_price: 110 },
  { name: "Isabella White", total_packages: 14, total_price: 165 },
  { name: "Benjamin Harris", total_packages: 30, total_price: 350 },
  { name: "Mia Martin", total_packages: 7, total_price: 80 },
  { name: "Lucas Thompson", total_packages: 16, total_price: 195 },
  { name: "Charlotte Garcia", total_packages: 11, total_price: 130 },
  { name: "Henry Martinez", total_packages: 20, total_price: 240 },
  { name: "Amelia Robinson", total_packages: 6, total_price: 75 },
  { name: "Alexander Clark", total_packages: 19, total_price: 225 },
  { name: "Evelyn Rodriguez", total_packages: 13, total_price: 150 },
  { name: "Sebastian Lewis", total_packages: 24, total_price: 290 },
  { name: "Harper Lee", total_packages: 4, total_price: 50 },
  { name: "Jack Walker", total_packages: 17, total_price: 205 },
  { name: "Abigail Hall", total_packages: 21, total_price: 255 },
  { name: "Matthew Allen", total_packages: 26, total_price: 320 },
  { name: "Ella Young", total_packages: 9, total_price: 115 },
  { name: "David King", total_packages: 14, total_price: 170 },
  { name: "Scarlett Wright", total_packages: 23, total_price: 275 },
];

export type searchParamsType = {
  [key: string]: string | string[] | undefined;
};

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
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Overview</CardTitle>
            <CardDescription>
              See the leading countries, packages, and dealers for eSIM at a
              glance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <TopTenTable /> */}
            <Suspense>
              <DataTable columns={columns} data={payments} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default page;
