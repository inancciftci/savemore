"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import BudgetsItemCard from "./BudgetsItemCard";
import BudgetGraph from "@/components/budgets/BudgetGraph";
import { useDashboardData } from "@/context/DashboardProvider";

const Budgets = () => {
  const context = useDashboardData();
  const budgets = context.budgets || [];
  const topBudgets = budgets
    ?.sort((a, b) => b.maximum_spend - a.maximum_spend)
    .slice(0, 4);
  return (
    <div className="p-6 bg-white dark:bg-grey-100 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-h2 dark:text-grey-900">Budgets</h4>
        <Link
          href="/budgets"
          className="flex gap-2 items-center text-sm text-grey-500"
        >
          See Details <ArrowRight size={14} />
        </Link>
      </div>
      <div className="flex gap-2 items-center max-md:flex-col">
        <div className="w-[70%] h-[250px]">
          <BudgetGraph budgets={budgets} />
        </div>

        <div className="flex flex-col gap-4 max-md:flex-row max-md:flex-wrap max-md:justify-center">
          {topBudgets.map((budget) => (
            <BudgetsItemCard budget={budget} key={budget.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budgets;
