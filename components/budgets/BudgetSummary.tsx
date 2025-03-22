import React from "react";
import BudgetGraph from "./BudgetGraph";
import BudgetSpentCard from "./BudgetSpentCard";

const BudgetSummary = ({ budgets }: { budgets: IBudget[] }) => {
  return (
    <div className="p-6 bg-white rounded-lg flex flex-col gap-6">
      <div className="w-[100%]">
        <BudgetGraph budgets={budgets} />
      </div>
      <div className="space-y-6">
        <h2 className="text-h2">Spending Summary</h2>
        {budgets?.map((budget) => (
          <BudgetSpentCard key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
};

export default BudgetSummary;
