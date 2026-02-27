"use client";

import { Legend, Pie, PieChart } from "recharts";
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
import { CustomerActivity } from "@/types/dashboard.types";

const labels = {
  new_users: "New User",
  sim_buy: "Sim Buy",
  visitor: "Visitor",
  renew_packages: "Renew Package",
};
const colors = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
];
const chartConfig = {
  new_user: {
    label: "New User",
    color: "var(--color-chart-1)",
  },
  sim_buy: {
    label: "Sim Buy",
    color: "var(--color-chart-2)",
  },
  visitor: {
    label: "Visitor",
    color: "var(--color-chart-3)",
  },
  renew_package: {
    label: "Renew Package",
    color: "var(--color-chart-4)",
  },
} satisfies ChartConfig;

function CustomerActivityChart({ data }: { data: CustomerActivity }) {
  type CustomerActivityKeys = keyof typeof data.customer_activity;
  const tags: CustomerActivityKeys[] = [
    "new_users",
    "sim_buy",
    "visitor",
    "renew_packages",
  ];

  const chartData = tags.map((tag, index) => ({
    dataLabel: labels[tag],
    value: data.customer_activity[tag],
    fill: colors[index],
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Customer Activity </CardTitle>
        <CardDescription>Last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto pb-3"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="value" label nameKey="dataLabel" />
            <Legend
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: "20px" }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default CustomerActivityChart;
