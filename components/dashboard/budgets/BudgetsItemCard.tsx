import React from "react";

interface IBudget {
  id: string;
  title: string;
  amount: string;
  color: string;
}

const BudgetsItemCard = ({ budget }: { budget: IBudget }) => {
  return (
    <div className="flex gap-3 h-[60px]">
      <div
        className="h-full w-[5px] rounded-lg"
        style={{ backgroundColor: budget.color }}
      ></div>

      <div className="flex flex-col justify-between">
        <span className="text-sm text-grey-500">{budget.title}</span>
        <span className="font-bold dark:text-grey-900">{budget.amount}</span>
      </div>
    </div>
  );
};

export default BudgetsItemCard;
