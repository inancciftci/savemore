"use client";
import { useDashboardData } from "@/context/DashboardProvider";
import { formattedAmount } from "@/lib/utils";
import React from "react";
import OverviewTopCard from "./OverviewTopCard";

const OverviewTopSection = () => {
  const context = useDashboardData();
  const totalBalance = context?.totalBalance;
  const amount = formattedAmount(totalBalance);
  return (
    <div className="flex gap-3 items-stretch justify-center flex-wrap">
      <OverviewTopCard title="Current Balance" amount={amount} />
      <OverviewTopCard title="Saved in Pots" amount="$3,814.25" />
      <OverviewTopCard title="Monthly Expense" amount="$1,700.50" />
    </div>
  );
};

export default OverviewTopSection;
