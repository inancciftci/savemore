"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { type: "Entertainment", budget: 50, fill: "#277C78" },
  { type: "Bills", budget: 750, fill: "#82C9D7" },
  { type: "Dining Out", budget: 75, fill: "#F2CDAC" },
  { type: "Personal Care", budget: 100, fill: "#626070" },
];

const chartConfig = {
  budget: {
    label: "Budget",
  },
  entertainment: {
    label: "Entertainment",
    color: "#277C78",
  },
  bills: {
    label: "Bills",
    color: "#82C9D7",
  },
  diningOut: {
    label: "Dining Out",
    color: "#F2CDAC",
  },
  personalCare: {
    label: "Personal Care",
    color: "#626070",
  },
} satisfies ChartConfig;

export function BudgetsGraph() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.budget, 0);
  }, []);

  return (
    <div className="w-full">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[450px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="budget"
            nameKey="type"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        ${totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        total budget
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
