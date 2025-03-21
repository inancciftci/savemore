"use client";
import AddBudgetForm from "@/components/budgets/AddBudgetForm";
import { useDashboardData } from "@/context/DashboardProvider";
import React from "react";

const BudgetsPage = () => {
  const context = useDashboardData();
  const budgets = context.budgets || [];
  console.log(budgets);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-h1">Budgets</h1>

        <AddBudgetForm />
      </div>
      <div className="grid grid-cols-[40%_1fr] gap-10">
        <div>
          {budgets.map((budget) => (
            <p key={budget.id}>{budget.category.title}</p>
          ))}
        </div>
        <div>y</div>
      </div>
    </div>
  );
};

export default BudgetsPage;
