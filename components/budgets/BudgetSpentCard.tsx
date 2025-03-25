"use client";
import { themes } from "@/constants/theme";
import { useDashboardData } from "@/context/DashboardProvider";
import { cn, formattedAmount } from "@/lib/utils";
import React from "react";

const BudgetSpentCard = ({ budget }: { budget: IBudget }) => {
  const context = useDashboardData();
  const transactions = context?.transactions;
  const relatedTxns = transactions.filter(
    (txn) => txn.budget?.categories?.title === budget?.category?.title
  );
  const spentAmount = relatedTxns.reduce(
    (total, txn) => total + Number(txn.amount),
    0
  );
  return (
    <div className="flex gap-2 items-center">
      <div
        className={cn(
          "w-[3px] h-[26px] rounded-2xl",
          themes.find((theme) => theme.title === budget.theme)?.background
        )}
      ></div>
      <div className={cn("flex justify-between items-center w-full")}>
        <span>{budget.category.title}</span>
        <div className="flex gap-2 items-center">
          <span className="font-bold">{formattedAmount(spentAmount)}</span>
          <span className="text-grey-500 text-[12px]">
            of ${budget.maximum_spend}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetSpentCard;
