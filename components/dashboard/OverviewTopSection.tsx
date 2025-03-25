"use client";
import { useDashboardData } from "@/context/DashboardProvider";
import { formattedAmount } from "@/lib/utils";
import React from "react";
import OverviewTopCard from "./OverviewTopCard";

const OverviewTopSection = () => {
  const context = useDashboardData();
  const totalBalance = context?.totalBalance;
  const transactions = context?.transactions;
  const potsTotal = transactions
    .filter((txn) => txn.pot_id !== null)
    .reduce((total, txn) => total + txn.amount, 0);
  return (
    <div className="flex gap-3 items-stretch justify-center flex-wrap">
      <OverviewTopCard
        title="Current Balance"
        amount={formattedAmount(totalBalance)}
      />
      <OverviewTopCard
        title="Saved in Pots"
        amount={formattedAmount(potsTotal)}
      />
      <OverviewTopCard title="Monthly Expense" amount="$1,700.50" />
    </div>
  );
};

export default OverviewTopSection;
