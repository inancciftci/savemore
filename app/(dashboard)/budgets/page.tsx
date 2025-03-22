"use client";
import AddBudgetForm from "@/components/budgets/AddBudgetForm";
import BudgetCard from "@/components/budgets/BudgetCard";
import BudgetSummary from "@/components/budgets/BudgetSummary";
import { useDashboardData } from "@/context/DashboardProvider";
import React, { useState } from "react";

const BudgetsPage = () => {
  const context = useDashboardData();
  const budgets = context.budgets || [];
  const [budgetsArr, setBudgetsArr] = useState<IBudget[]>(budgets);
  console.log(budgets);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-h1">Budgets</h1>

        <AddBudgetForm setBudgetsArr={setBudgetsArr} />
      </div>
      <div className="grid grid-cols-[40%_1fr] gap-10">
        <div>
          <BudgetSummary budgets={budgets} />
        </div>
        <div className="flex flex-col gap-10">
          {budgetsArr?.map((budget) => (
            <BudgetCard key={budget.id} budget={budget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetsPage;
