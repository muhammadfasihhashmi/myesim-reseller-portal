"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { SixMonthGraph } from "@/types/dashboard.types";
export const description = "A line chart with dots";

const chartConfig = {
  sale: {
    label: "Total Sales",
    color: "var(--color-chart-1)",
  },
  esim_sold: {
    label: "eSIM Sold",
    color: "var(--color-chart-2)",
  },
  profit: {
    label: "Profit",
    color: "var(--color-chart-4)",
  },
  bundle_count: {
    label: "Bundles",
    color: "var(--color-chart-5)",
  },
} satisfies ChartConfig;

function MonthlySalesAndProfitChart({ data }: { data: SixMonthGraph }) {
  const { months, bundle_count, esim_sold, profit, sale } = data?.six_month;
  const chartData = months?.map((month, ind) => ({
    month: month,
    esimSold: esim_sold[ind],
    bundleCount: bundle_count[ind],
    sale: sale[ind],
    profit: profit[ind],
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly eSIM sales and profit overview</CardTitle>
        <CardDescription>Last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 10,
                left: -10,
                right: 50,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray={"3 3"}
                className="stroke-muted"
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                type="number"
                domain={[0, "auto"]}
                ticks={[0, 15, 30, 45, 60]}
                interval={0}
                tickMargin={8}
                className="text-xs"
              />
              <ChartTooltip
                cursor={{ stroke: "var(--color-muted)", strokeWidth: 1 }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Legend
                align="center"
                verticalAlign="bottom"
                wrapperStyle={{ paddingTop: "20px" }}
              />
              <Line
                dataKey="esimSold"
                type="monotone"
                stroke="var(--color-chart-1)"
                strokeWidth={2}
                dot={{
                  r: 4,
                }}
              />
              <Line
                dataKey="bundleCount"
                type="monotone"
                stroke="var(--color-chart-2)"
                strokeWidth={2}
                dot={{
                  r: 4,
                }}
              />
              <Line
                dataKey="sale"
                type="monotone"
                stroke="var(--color-chart-4)"
                strokeWidth={2}
                dot={{
                  r: 4,
                }}
              />
              <Line
                dataKey="profit"
                type="monotone"
                stroke="var(--color-chart-5)"
                strokeWidth={2}
                dot={{
                  r: 4,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default MonthlySalesAndProfitChart;
