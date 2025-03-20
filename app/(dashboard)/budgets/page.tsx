import AddBudgetForm from "@/components/budgets/AddBudgetForm";
import React from "react";

const BudgetsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-h1">Budgets</h1>

        <AddBudgetForm />
      </div>
      <div className="grid grid-cols-[40%_1fr] gap-10">
        <div>x</div>
        <div>y</div>
      </div>
    </div>
  );
};

export default BudgetsPage;
